/**
 * App configuration helpers.
 */
export function getTempMailDomain() {
  const value = process.env.NEXT_PUBLIC_TEMPMAIL_DOMAIN || process.env.TEMPMAIL_DOMAIN;
  return (value && value.trim()) || 'tempmailx.app';
}
