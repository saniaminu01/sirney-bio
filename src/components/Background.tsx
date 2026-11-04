export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="drift absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-neon-purple/25 blur-[120px]" />
      <div
        className="drift absolute -right-32 top-1/4 h-[30rem] w-[30rem] rounded-full bg-blue-600/20 blur-[120px]"
        style={{ animationDelay: '-6s' }}
      />
      <div
        className="drift absolute -bottom-40 left-1/4 h-[28rem] w-[28rem] rounded-full bg-neon-cyan/10 blur-[130px]"
        style={{ animationDelay: '-12s' }}
      />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at 50% 20%, black 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 20%, black 20%, transparent 75%)',
        }}
      />
    </div>
  )
}
