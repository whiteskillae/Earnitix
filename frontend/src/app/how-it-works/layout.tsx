import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'Learn how to earn money online in India with Earnetix. Discover our simple workflow from sign-up to completing tasks and getting paid.',
  alternates: {
    canonical: '/how-it-works',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
