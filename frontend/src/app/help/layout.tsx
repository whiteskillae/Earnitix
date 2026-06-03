import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Help & Support',
  description: 'Need help with your Earnetix account? Contact our support team for assistance with tasks, payouts, and navigating the creator earning platform.',
  alternates: {
    canonical: '/help',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
