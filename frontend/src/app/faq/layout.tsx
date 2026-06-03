import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Earnetix FAQ — how to earn, withdraw, and grow as a creator on our platform. Find answers to common questions about earning online in India.',
  alternates: {
    canonical: '/faq',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
