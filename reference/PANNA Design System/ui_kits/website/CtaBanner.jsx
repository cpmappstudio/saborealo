function CtaBanner({ eyebrow = 'GIFT CARDS', headline = 'Give the gift of flavor', cta = 'BUY A GIFT CARD' }) {
  return (
    <section style={{
      position: 'relative', minHeight: 320,
      background: 'linear-gradient(90deg, #1a0a06 0%, #6b2010 60%, #B8290E 100%)',
      display: 'grid', placeItems: 'center', color: '#fff',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 80% 50%, rgba(249,141,1,.45), transparent 50%)',
      }}></div>
      <div style={{ position: 'relative', textAlign: 'center', padding: '60px 24px' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, letterSpacing: '4px', color: '#FFE6BB' }}>{eyebrow}</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 56, textTransform: 'uppercase', marginTop: 14, letterSpacing: '.5px' }}>{headline}</h2>
        <a href="#" className="btn" style={{ marginTop: 24 }}>{cta}</a>
      </div>
    </section>
  );
}
window.CtaBanner = CtaBanner;
