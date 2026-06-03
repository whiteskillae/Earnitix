import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Earnetix, the leading creator economy platform in India. Our mission is to empower digital creators to earn through skill-based content.',
  alternates: {
    canonical: '/about',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
