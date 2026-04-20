// MIMV — Hero section
const { useState, useEffect, useRef } = React;

function Hero() {
  const title = "Fifty apps. Millions of downloads.";
  const words = title.split(' ');

  return (
    <section className="hero" id="home">
      <div className="hero-grid-bg" />
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      {/* Floating orbit of real app icons */}
      <div className="hero-orbit">
        <div className="hero-orbit-ring">
          {[
            { src: 'assets/icons/362375140.jpg', a: 0 },
            { src: 'assets/icons/1634984450.jpg', a: 60 },
            { src: 'assets/icons/6749277320.jpg', a: 120 },
            { src: 'assets/icons/6748837265.jpg', a: 180 },
            { src: 'assets/icons/6474693547.jpg', a: 240 },
            { src: 'assets/icons/6471902969.jpg', a: 300 },
          ].map((d, i) => (
            <div key={i} className="hero-orbit-dot"
              style={{ transform: `rotate(${d.a}deg) translateX(700px) rotate(${-d.a}deg)` }}>
              <img src={d.src} alt="" />
            </div>
          ))}
        </div>
        <div className="hero-orbit-ring inner">
          {[
            { src: 'assets/icons/6749831130.jpg', a: 30 },
            { src: 'assets/icons/6448734214.jpg', a: 150 },
            { src: 'assets/icons/6758112003.jpg', a: 270 },
          ].map((d, i) => (
            <div key={i} className="hero-orbit-dot"
              style={{ transform: `rotate(${d.a}deg) translateX(550px) rotate(${-d.a}deg)` }}>
              <img src={d.src} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className="hero-chip-float hero-chip-1">
        <span className="emoji" style={{ padding: 0, overflow: 'hidden' }}>
          <img src="assets/icons/362375140.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </span>
        <span>Phonegram — our flagship</span>
      </div>
      <div className="hero-chip-float hero-chip-3">
        <span className="emoji" style={{ padding: 0, overflow: 'hidden' }}>
          <img src="assets/icons/1634984450.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </span>
        <span>Voice-Over AI</span>
      </div>

      <div className="hero-inner">
        <div className="hero-eyebrow">
          <span className="dot" />
          <span>MIMV LLC · Est. 2007 · A creative studio.</span>
        </div>

        <h1 className="hero-title font-display" style={{ position: 'relative' }}>
          {words.map((w, wi) => (
            <React.Fragment key={wi}>
              <span className="word">
                {[...w].map((c, ci) => (
                  <span
                    key={ci}
                    className={`char ${wi === 2 ? 'accent' : ''}`}
                    style={{ '--d': `${(wi * 4 + ci) * 40}ms` }}
                  >
                    {c}
                  </span>
                ))}
              </span>
              {wi < words.length - 1 && <span>&nbsp;</span>}
            </React.Fragment>
          ))}
        </h1>

        <div className="hero-sub-row">
          <p className="hero-desc reveal">
            Since <strong>2007</strong> — starting with iPhoneIslam, the first studio
            to Arabize the Apple iPhone — we've <strong>created 50+ apps</strong> loved
            by millions worldwide. A creative company building with <strong>AI, Vision Pro, and every Apple platform</strong>.
          </p>

          <div className="hero-stats">
            <div className="hero-stat reveal delay-1">
              <div className="num">50<span className="unit">+</span></div>
              <div className="label">Apps shipped</div>
            </div>
            <div className="hero-stat reveal delay-2">
              <div className="num">{new Date().getFullYear() - 2007}<span className="unit">yrs</span></div>
              <div className="label">Since 2007</div>
            </div>
            <div className="hero-stat reveal delay-3">
              <div className="num">M<span className="unit">+</span></div>
              <div className="label">Downloads</div>
            </div>
          </div>
        </div>

        <div className="hero-cta-row">
          <a href="#latest" className="btn btn-primary">
            Explore the work
            <span className="arrow">→</span>
          </a>
          <a href="#contact" className="btn btn-ghost">
            Start a project
          </a>
        </div>

        <div className="hero-logo-lockup">
          <img src="assets/mimv-logo.png" className="hero-logo-img" alt="MIMV" />
          <div className="hero-logo-text">
            Mansour<br/>Interactive<br/>Media Ventures
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="line" />
      </div>
    </section>
  );
}

function Marquee() {
  const items = ['iPhone', 'iPad', 'Vision Pro', 'Apple Watch', 'Apple TV', 'iMessage', 'AI', 'Spatial'];
  const doubled = [...items, ...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((it, i) => (
          <span key={i} className="marquee-item">
            {it}
            <span className="star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { Hero, Marquee });
