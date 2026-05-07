/**
 * Mailbox helper methods for API routes.
 */
import { getTempMailDomain } from './config';
import { addMessage, ensureInbox, listMessages } from './inboxStore';

const samples = [
  {
    subject: 'Welcome to TempMailX',
    sender: 'hello@tempmailx.dev',
    body: 'Thanks for trying TempMailX. Your temporary inbox is active and ready for incoming mails.',
  },
  {
    subject: 'Your verification code',
    sender: 'no-reply@authportal.io',
    body: 'Use code 918240 to complete your signup process. This code expires in 10 minutes.',
  },
  {
    subject: 'Beta invite unlocked',
    sender: 'team@futureapps.ai',
    body: 'You have been added to our beta access list. Keep this inbox open for activation details.',
  },
];

export function createTempEmail() {
  const token = Math.random().toString(36).slice(2, 10);
  const email = `${token}@${getTempMailDomain()}`;
  ensureInbox(email);
  return email;
}

export function getMessages(email) {
  const mailbox = listMessages(email);
  const mockEnabled = process.env.MOCK_INBOUND === 'true';

  if (mockEnabled && mailbox.length < 5 && Math.random() > 0.55) {
    const sample = samples[Math.floor(Math.random() * samples.length)];
    const createdAt = new Date();
    addMessage(email, {
      id: `${createdAt.getTime()}-${Math.random().toString(16).slice(2, 6)}`,
      subject: sample.subject,
      sender: sample.sender,
      date: createdAt.toLocaleString(),
      preview: sample.body.slice(0, 90),
      body: sample.body,
    });
  }

  return listMessages(email);
}

export function ingestInbound({ to, from, subject, text }) {
  const createdAt = new Date();
  const body = text || '(empty body)';

  addMessage(to, {
    id: `${createdAt.getTime()}-${Math.random().toString(16).slice(2, 6)}`,
    subject: subject || '(No subject)',
    sender: from || 'unknown@sender',
    date: createdAt.toLocaleString(),
    preview: body.slice(0, 90),
    body,
  });
}
