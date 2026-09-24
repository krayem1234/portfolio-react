import { getSkillIcon } from '../data/skillIcons'

export default function SkillBadge({ name }: { name: string }) {
  const icon = getSkillIcon(name)
  const Icon = icon.Icon

  return (
    <div
      className="group/skill relative flex h-10 w-10 shrink-0 items-center justify-center transition-transform duration-200 hover:-translate-y-1"
      data-cursor-hover
      title={name}
    >
      {Icon ? (
        <Icon size={30} color={icon.color} />
      ) : (
        <span
          className="flex h-9 w-9 items-center justify-center rounded-lg text-[10px] font-bold text-bg"
          style={{ backgroundColor: icon.color }}
        >
          {icon.label}
        </span>
      )}

      <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-[10px] font-medium text-white opacity-0 transition-opacity duration-150 group-hover/skill:opacity-100">
        {name}
      </span>
    </div>
  )
}
