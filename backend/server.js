const http = require('http');
const fs = require('fs');
const path = require('path');
const { LEADS, analyzeLeadText } = require('./analyzer');

const PORT = Number(process.env.PORT || 3000);
const FRONTEND_PATH = path.join(__dirname, '..', 'frontend', 'index.html');

function sendJson(res, statusCode, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(body),
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Cache-Control': 'no-store',
  });
  res.end(body);
}

function sendHtml(res) {
  const html = fs.readFileSync(FRONTEND_PATH, 'utf8');
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-store',
  });
  res.end(html);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        reject(new Error('Request body too large'));
        req.destroy();
      }
    });
    req.on('end', () => resolve(body));
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || '/', 'http://localhost');

  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Cache-Control': 'no-store',
    });
    res.end();
    return;
  }

  if (req.method === 'GET' && (url.pathname === '/' || url.pathname === '/index.html')) {
    sendHtml(res);
    return;
  }

  if (req.method === 'GET' && url.pathname === '/api/health') {
    sendJson(res, 200, {
      status: 'ok',
      version: '1.1.0',
      service: 'rupeezy-agent-backend',
      leads: LEADS.length,
      architecture: 'frontend/backend split',
      integrations: {
        stt: 'browser speech recognition or backend adapter stub',
        llm: 'heuristic demo analyzer with clean adapter boundary',
        tts: 'browser speech synthesis',
      },
    });
    return;
  }

  if (req.method === 'GET' && url.pathname === '/api/leads') {
    sendJson(res, 200, { leads: LEADS });
    return;
  }

  if (req.method === 'POST' && url.pathname === '/api/analyze') {
    try {
      const rawBody = await readBody(req);
      const body = rawBody ? JSON.parse(rawBody) : {};
      const leadText = String(body.leadText || body.text || '');

      if (!leadText.trim()) {
        sendJson(res, 400, { error: 'leadText is required' });
        return;
      }

      sendJson(res, 200, analyzeLeadText(leadText));
      return;
    } catch (error) {
      sendJson(res, 400, { error: error.message || 'Invalid request body' });
      return;
    }
  }

  sendJson(res, 404, { error: 'Not found' });
});

server.listen(PORT, () => {
  console.log(`Rupeezy project running at http://127.0.0.1:${PORT}`);
});
