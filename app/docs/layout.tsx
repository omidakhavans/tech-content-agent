import type { ReactNode } from 'react';
import Link from 'next/link';

export default function DocsLayout({ children }: { children: ReactNode }) {
  const links = [
    ['Introduction', '/docs'], ['Getting started', '/docs/getting-started'], ['Architecture', '/docs/architecture'],
    ['Workflow', '/docs/workflow'], ['Artifacts', '/docs/artifacts'], ['Development', '/docs/development'], ['Skills', '/docs/skills'],
  ];
  return <div className="min-h-screen bg-fog dark:bg-[#101217]"><header className="border-b border-black/10 bg-fog/90 dark:border-white/10 dark:bg-[#101217]/90"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8"><Link href="/" className="font-semibold tracking-tight">tech-content-agent <span className="ml-2 font-mono text-xs text-slate-500">/ docs</span></Link><Link href="/" className="text-sm text-slate-500 hover:text-ink dark:hover:text-white">Back to project</Link></div></header><div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 lg:grid-cols-[230px_1fr] lg:px-8"><aside className="lg:sticky lg:top-8 lg:h-fit"><p className="mb-3 font-mono text-xs uppercase tracking-[.2em] text-electric">Contents</p><nav className="space-y-1">{links.map(([title, url]) => <Link key={url} href={url} className="block border-l border-black/10 px-3 py-2 text-sm text-slate-600 hover:border-electric hover:text-ink dark:border-white/10 dark:text-slate-400 dark:hover:text-white">{title}</Link>)}</nav></aside><div className="min-w-0">{children}</div></div></div>;
}
