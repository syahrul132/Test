/**
 * API route: return messages for a temp email.
 */
import { getMessages } from '../../lib/mockData';

export default function handler(req, res) {
  const { email } = req.query;
  if (!email || typeof email !== 'string') {
    res.status(400).json({ error: 'Email query is required.' });
    return;
  }

  const messages = getMessages(email);
  res.status(200).json({ messages });
}
