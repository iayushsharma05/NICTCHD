export default function StatChip({ icon: Icon, value, label, className = '' }) {
  return (
    <div
      className={`glass rounded-2xl px-4 py-3 flex items-center gap-3 shadow-glass ${className}`}
    >
      {Icon && (
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary-500 to-accent text-white">
          <Icon size={18} />
        </span>
      )}
      <div className="leading-tight">
        <p className="font-display font-bold text-lg text-ink dark:text-white">{value}</p>
        <p className="text-xs text-ink-light dark:text-ink-inverse/60">{label}</p>
      </div>
    </div>
  )
}
