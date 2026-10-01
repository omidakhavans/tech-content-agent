import Link from 'next/link';

export function SiteHeader() {
  return <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 lg:px-8">
    <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight"><span className="grid h-8 w-8 place-items-center bg-ink text-sm text-mint">tc</span><span>tech-content-agent</span></Link>
    <nav className="flex items-center gap-5 text-sm text-slate-600 dark:text-slate-300"><Link href="/docs" className="hover:text-ink dark:hover:text-white">Docs</Link><a href="https://github.com/omidakhavans/tech-content-agent" className="rounded-full border border-black/10 px-4 py-2 font-medium hover:border-black/30 dark:border-white/15 dark:hover:border-white/40">GitHub</a></nav>
  </header>;
}
