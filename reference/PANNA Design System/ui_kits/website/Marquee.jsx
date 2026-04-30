function Marquee() {
  const items = ['AREPAS','CACHAPAS','BRUNCH','FROM THE GRILL','LATIN CORNER','PLATTERS','GRAB \u2018N GO','BURGERS','SALADS','PATACONES','BREAKFAST','COFFEE','JUICES & SMOOTHIES','DESSERT','PLATO LATINO'];
  const list = [...items, ...items];
  return (
    <div style={{
      background: 'var(--panna-red)', color: 'var(--panna-white)',
      overflow: 'hidden', padding: '14px 0', borderBottom: '2px solid #000',
    }}>
      <div style={{
        display: 'flex', gap: 38, whiteSpace: 'nowrap',
        animation: 'panna-marquee 50s linear infinite',
        fontFamily: 'var(--font-display)', textTransform: 'uppercase',
        fontSize: 22, letterSpacing: '.6px',
      }}>
        {list.map((s, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 38 }}>
            {s}
            <span style={{ width: 8, height: 8, background: '#fff', borderRadius: '50%' }}></span>
          </span>
        ))}
      </div>
      <style>{`@keyframes panna-marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }`}</style>
    </div>
  );
}
window.Marquee = Marquee;
