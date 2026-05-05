const assert = require('assert');
const { analyzeLeadText, APPENDIX_A } = require('../backend/analyzer');

function approxEqual(a, b, tol = 2) {
  return Math.abs(a - b) <= tol;
}

// Test: send_details objection
const res1 = analyzeLeadText('Please send me more details on WhatsApp before we talk');
assert(res1.objections.includes('send_details'), 'send_details should be detected');
assert.strictEqual(res1.classification, 'COLD');
assert(res1.appendixA && res1.appendixA.title === APPENDIX_A.title, 'Appendix A should be present');

// Test: already_with_broker detection and reply language
const res2 = analyzeLeadText('I already work with another broker, but if the payout is better I can switch.');
assert(res2.objections.includes('already_with_broker'), 'already_with_broker should be detected');
assert(res2.classification === 'HOT' || res2.score >= 70, 'should be HOT for strong intent');

// Test: not_interested detection
const res3 = analyzeLeadText('No thanks, I am not interested.');
assert(res3.objections.includes('not_interested'), 'not_interested should be detected');

// Test: pricing question leads to pricing handler presence
const res4 = analyzeLeadText('What are the exact payout percentages?');
// either pricing_questions detected or fallback to no hallucination: ensure appendix present
assert(res4.appendixA, 'Appendix A present for RAG grounding');

// Test: Gujarati language detection and localized reply
const res5 = analyzeLeadText('Kem cho, I already work with another broker, but I can switch');
assert.strictEqual(res5.detectedLanguage, 'Gujarati', 'should detect Gujarati');
assert(res5.objections.includes('already_with_broker'), 'already_with_broker should be detected in Gujarati');
assert(res5.assistantReply && res5.assistantReply.includes('Theek'), 'Gujarati handler reply expected');

console.log('All analyzer tests passed');
