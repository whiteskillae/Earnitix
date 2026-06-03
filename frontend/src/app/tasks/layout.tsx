import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creator Tasks',
  description: 'Browse content creation jobs online on Earnetix. Complete digital tasks, create reels, or write blogs to generate a steady income stream.',
  alternates: {
    canonical: '/tasks',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
