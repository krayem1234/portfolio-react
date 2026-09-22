import { getSkillIcon } from '../data/skillIcons'

export default function SkillBadge({ name }: { name: string }) {
  const icon = getSkillIcon(name)

  return (
    <div
      className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-ink/90 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.06]"
      data-cursor-hover
    >
      <span
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold text-bg"
        style={{ backgroundColor: icon.color }}
      >
        {icon.label}
      </span>
      <span className="truncate">{name}</span>
    </div>
  )
}
