// MIMV — Latest, Catalog, Modal
const { useState: useStateLC, useMemo: useMemoLC } = React;

function LatestApps({ onOpen }) {
  const apps = window.MIMV_LATEST;
  // First 5: one hero + four smaller
  const hero = apps[0]; // Bayan Quran
  const rest = [apps[1], apps[2], apps[3], apps[4]]; // 4 cards

  const card = (a, cls = '', big = false) => (
    <div
      className={`latest-card ${cls}`}
      style={{ '--card-accent': a.accent }}
      onClick={() => onOpen(a)}
      key={a.id}
    >
      <div className="bg" />
      {a.isNew && (
        <div className="badge-new">
          <span className="dot-new" />
          <span>New</span>
        </div>
      )}
      <div className="app-mark">
        {a.icon ? <img src={a.icon} alt="" style={{ width: '75%', height: '75%', objectFit: 'contain', borderRadius: cls === 'feat-1' ? 36 : 20 }} /> : a.name.charAt(0)}
      </div>
      <div className="content">
        <div>
          <div className="cat">{a.category}</div>
          <h3 className="font-display" style={{ marginTop: big ? 16 : 12 }}>{a.name}</h3>
          <div className="tag">{a.tagline}</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
          <span className="view">View app →</span>
          <span className="year font-mono">{a.year}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="section" id="latest">
      <div className="section-head reveal">
        <div>
          <div className="section-label">Latest drops</div>
          <h2 className="section-title font-display">
            Fresh from the lab, <em>right now.</em>
          </h2>
        </div>
        <a href="#catalog" className="btn btn-ghost">
          See the full catalog →
        </a>
      </div>

      <div className="latest-grid reveal delay-1">
        {card(hero, 'feat-1', true)}
        {rest.map(a => card(a))}
      </div>
    </section>
  );
}

function Catalog({ onOpen }) {
  const all = [...window.MIMV_LATEST, ...window.MIMV_CLASSICS];

  const categories = ['All', 'New', 'AI', 'Islamic', 'Games', 'Vision Pro', 'Classics'];
  const [filter, setFilter] = useStateLC('All');

  const filtered = useMemoLC(() => {
    if (filter === 'All') return all;
    if (filter === 'New') return all.filter(a => a.year === 2025);
    if (filter === 'AI') return all.filter(a => (a.category || '').includes('AI'));
    if (filter === 'Islamic') return all.filter(a => (a.category || '').includes('Islamic') || /Quran|Qibla|Azkar|Salaty|Mohammad|بيان|التطبيقات|الأحاديث|الشيخ|iAzkar|AlKetab/.test(a.name));
    if (filter === 'Games') return all.filter(a => (a.category || '').includes('Games'));
    if (filter === 'Vision Pro') return all.filter(a => a.category === 'Vision Pro');
    if (filter === 'Classics') return all.filter(a => a.year < 2020);
    return all;
  }, [filter]);

  return (
    <section className="section" id="catalog">
      <div className="section-head reveal">
        <div>
          <div className="section-label">The full catalog</div>
          <h2 className="section-title font-display">
            Two decades of <em>ideas, shipped.</em>
          </h2>
        </div>
      </div>

      <div className="catalog-filters reveal delay-1">
        {categories.map(c => (
          <button
            key={c}
            className={`chip ${filter === c ? 'active' : ''}`}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="catalog reveal delay-2">
        {filtered.map((a, i) => (
          <div
            key={a.id + i}
            className="catalog-item"
            style={{ '--card-accent': a.accent }}
            onClick={() => a.desc && onOpen(a)}
          >
            {a.icon && <img className="catalog-icon" src={a.icon} alt="" />}
            <div className="meta">
              <div className="n">{a.name}</div>
              <div className="y">{a.year}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AppModal({ app, onClose }) {
  return (
    <div className={`modal-backdrop ${app ? 'open' : ''}`} onClick={onClose}>
      {app && (
        <div className="modal" onClick={e => e.stopPropagation()}>
          <div className="modal-hero" style={{ '--card-accent': app.accent }}>
            {app.icon
              ? <img className="modal-icon-img" src={app.icon} alt="" />
              : <div className="modal-mark">{app.name.charAt(0)}</div>}
            <button className="modal-close" onClick={onClose}>
              <svg width="14" height="14" viewBox="0 0 14 14"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
            </button>
          </div>
          <div className="modal-body">
            <div className="cat">{app.category} · {app.year}</div>
            <h3 className="font-display">{app.nameEn || app.name}</h3>
            {app.tagline && (
              <p style={{ fontSize: 18, color: 'var(--ink)', fontFamily: 'Fraunces, serif', fontStyle: 'italic', margin: '0 0 20px' }}>
                "{app.tagline}"
              </p>
            )}
            <p className="desc">{app.desc}</p>
            <div className="modal-footer">
              <a href={app.url} target="_blank" rel="noopener" className="btn btn-primary">
                View on App Store
                <span className="arrow">↗</span>
              </a>
              <button className="btn btn-ghost" onClick={onClose}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { LatestApps, Catalog, AppModal });
