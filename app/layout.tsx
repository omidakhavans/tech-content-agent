import type { Metadata } from 'next';
import './globals.css';

const repository = process.env.GITHUB_REPOSITORY ?? 'omidakhavans/tech-content-agent';
const [owner, name] = repository.split('/');
const siteUrl = process.env.GITHUB_ACTIONS === 'true'
  ? `https://${owner}.github.io/${name}/`
  : 'http://localhost:3000/';

export const metadata: Metadata = {
  title: { default: 'tech-content-agent', template: '%s · tech-content-agent' },
  description: 'An evidence-first content workflow built from inspectable Codex skills and Markdown artifacts.',
  metadataBase: new URL(siteUrl),
  openGraph: { title: 'tech-content-agent', description: 'Evidence-first technical content generation.', type: 'website' },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}
