/**
 * API route: expose public runtime mail domain config.
 */
import { getTempMailDomain } from '../../lib/config';

export default function handler(req, res) {
  res.status(200).json({ domain: getTempMailDomain() });
}
