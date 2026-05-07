/**
 * API route: inbound email webhook receiver.
 * Supports simple JSON payload from inbound providers.
 */
import { ingestInbound } from '../../../lib/mockData';

function splitRecipients(toValue) {
  if (!toValue) return [];
  if (Array.isArray(toValue)) return toValue;
  return String(toValue)
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const secret = process.env.INBOUND_WEBHOOK_SECRET;
  const provided = req.headers['x-webhook-secret'];
  if (secret && provided !== secret) {
    res.status(401).json({ error: 'Unauthorized webhook request' });
    return;
  }

  const { to, from, subject, text, html } = req.body || {};
  const recipients = splitRecipients(to);

  if (!recipients.length) {
    res.status(400).json({ error: 'Missing recipient (to).' });
    return;
  }

  const content = text || html || '';
  recipients.forEach((recipient) => {
    ingestInbound({ to: recipient, from, subject, text: content });
  });

  res.status(200).json({ ok: true, stored: recipients.length });
}
