/**
 * Shared inbox storage helpers.
 *
 * Note: uses in-memory Map for now; replace with DB/KV for production persistence.
 */
const inboxMap = new Map();

function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase();
}

export function ensureInbox(email) {
  const key = normalizeEmail(email);
  if (!key) return;
  if (!inboxMap.has(key)) inboxMap.set(key, []);
}

export function addMessage(email, message) {
  const key = normalizeEmail(email);
  if (!key) return;
  ensureInbox(key);
  const mailbox = inboxMap.get(key);
  mailbox.unshift(message);
}

export function listMessages(email) {
  const key = normalizeEmail(email);
  if (!key) return [];
  ensureInbox(key);
  return inboxMap.get(key);
}
