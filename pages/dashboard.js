/**
 * Dashboard page for temp email generation and inbox.
 */
import { useEffect, useState } from 'react';
import TempEmailWidget from '../components/TempEmailWidget';
import MailList from '../components/MailList';
import MailModal from '../components/MailModal';

export default function Dashboard() {
  const [email, setEmail] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMail, setSelectedMail] = useState(null);
  const [domain, setDomain] = useState('tempmailx.app');

  const loadConfig = async () => {
    const res = await fetch('/api/config');
    const data = await res.json();
    if (data?.domain) setDomain(data.domain);
  };

  const generateEmail = async () => {
    setLoading(true);
    const res = await fetch('/api/generate-email');
    const data = await res.json();
    setEmail(data.email);
    setMessages([]);
    setLoading(false);
  };

  const loadMessages = async () => {
    if (!email) return;
    setLoading(true);
    const res = await fetch(`/api/messages?email=${encodeURIComponent(email)}`);
    const data = await res.json();
    setMessages(data.messages || []);
    setLoading(false);
  };

  useEffect(() => {
    loadConfig();
  }, []);

  useEffect(() => {
    if (!email) return;
    loadMessages();
    const interval = setInterval(loadMessages, 5000);
    return () => clearInterval(interval);
  }, [email]);

  return (
    <section className="space-y-8">
      <TempEmailWidget email={email} onGenerate={generateEmail} loading={loading && !email} domain={domain} />
      <MailList
        messages={messages}
        loading={loading && !!email}
        onSelect={setSelectedMail}
        hasEmail={Boolean(email)}
      />
      <MailModal mail={selectedMail} onClose={() => setSelectedMail(null)} />
    </section>
  );
}
