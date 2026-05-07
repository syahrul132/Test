/**
 * API route: generate a temporary email address.
 */
import { createTempEmail } from '../../lib/mockData';

export default function handler(req, res) {
  const email = createTempEmail();
  res.status(200).json({ email });
}
