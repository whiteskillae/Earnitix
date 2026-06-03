import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Benefits',
  description: 'Discover the benefits of joining Earnetix. Enjoy flexible task-based earnings, personal blog pages, and a dedicated platform for creators in India.',
  alternates: {
    canonical: '/benefits',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
