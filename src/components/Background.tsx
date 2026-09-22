/**
 * Ambient background: animated gradient blobs + a faint grid, fixed
 * behind all content. Pure CSS animation, no runtime cost.
 */
export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)]" />

      <div className="absolute -top-40 left-[10%] h-[38rem] w-[38rem] animate-blob rounded-full bg-accent-violet/25 blur-[120px]" />
      <div className="absolute top-1/3 right-[5%] h-[32rem] w-[32rem] animate-blob2 rounded-full bg-accent-cyan/20 blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 h-[30rem] w-[30rem] animate-blob rounded-full bg-accent-pink/15 blur-[130px] [animation-delay:-8s]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_0%,#05060a_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-bg to-transparent" />

      {/* Subtle film-grain texture for a less "flat" feel */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  )
}
