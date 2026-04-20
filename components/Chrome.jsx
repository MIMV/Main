// MIMV — Chrome (nav, cursor, tweaks)
const { useState: useStateC, useEffect: useEffectC, useRef: useRefC } = React;

function Nav() {
  const [scrolled, setScrolled] = useStateC(false);
  useEffectC(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <nav className="nav" style={{ transform: scrolled ? 'translateX(-50%) scale(0.96)' : 'translateX(-50%) scale(1)' }}>
      <a href="#home" className="nav-brand">
        <img src="assets/mimv-logo.png" className="nav-logo-img" alt="MIMV" />
        <span>MIMV</span>
      </a>
      <div className="nav-links">
        <a href="#latest" className="nav-link">Latest</a>
        <a href="#founder" className="nav-link">Founder</a>
        <a href="#catalog" className="nav-link">Catalog</a>
        <a href="#story" className="nav-link">Story</a>
        <a href="#services" className="nav-link">Services</a>
      </div>
      <a href="#contact" className="nav-cta" style={{ textAlign: 'center' }}>Get in touch</a>
    </nav>
  );
}

function TweaksPanel({ visible, accent, setAccent }) {
  const accents = [
    { name: 'Ember', val: '#FF5A1F', v2: '#FFB020' },
    { name: 'Indigo', val: '#5B5BD6', v2: '#8B5CF6' },
    { name: 'Emerald', val: '#059669', v2: '#10B981' },
    { name: 'Rose', val: '#E11D48', v2: '#F43F5E' },
    { name: 'Cobalt', val: '#1E40AF', v2: '#3B82F6' },
    { name: 'Gold', val: '#B45309', v2: '#F59E0B' },
  ];

  return (
    <div className={`tweaks-panel ${visible ? 'visible' : ''}`}>
      <div className="tweaks-title">Tweaks</div>

      <div className="tweak-row">
        <div className="tweak-label">
          <span>Accent</span>
          <span style={{ color: 'var(--ink-mute)' }}>{accents.find(a => a.val === accent)?.name || 'Custom'}</span>
        </div>
        <div className="tweak-swatches">
          {accents.map(a => (
            <button
              key={a.val}
              className={`swatch ${accent === a.val ? 'active' : ''}`}
              style={{ background: `linear-gradient(135deg, ${a.val}, ${a.v2})` }}
              onClick={() => setAccent(a.val, a.v2)}
              title={a.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Nav, TweaksPanel });
