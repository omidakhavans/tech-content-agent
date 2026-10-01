const stages = [
  ['01', 'Research work', 'Inspect the repository and capture what was actually built.'],
  ['02', 'Research resources', 'Gather supplied or authoritative external context.'],
  ['03', 'Build evidence context', 'Reduce both reports into a traceable writing brief.'],
  ['04', 'Write + review', 'Draft the canonical article, then check it against evidence.'],
  ['05', 'Repurpose', 'Derive LinkedIn and X drafts only after the review gate passes.'],
];

export function Workflow() {
  return <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-5 dark:border-white/10 dark:bg-white/10">
    {stages.map(([number, title, text]) => <div key={number} className="bg-fog p-5 dark:bg-[#151820]"><div className="mb-10 font-mono text-xs text-electric">{number}</div><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p></div>)}
  </div>;
}
