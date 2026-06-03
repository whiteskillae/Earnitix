import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Earning Methods',
  description: 'Explore top ways to earn money online with Earnetix. Get paid for reel creation, blog writing, affiliate promotion, and social engagement.',
  alternates: {
    canonical: '/earning-methods',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
