// MIMV — Founder section
const { useEffect: useEffectF, useRef: useRefF } = React;

function Founder() {
  const imgWrap = useRefF(null);

  useEffectF(() => {
    const el = imgWrap.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
      el.style.setProperty('--rx', `${-y * 6}deg`);
      el.style.setProperty('--ry', `${x * 8}deg`);
    };
    const onLeave = () => {
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  const achievements = [
    { y: '20+', l: 'Years in mobile tech' },
    { y: '50+', l: 'Apps created' },
    { y: '1st', l: 'To Arabize the iPhone' },
    { y: 'AI', l: 'Zero-hallucination RAG' },
  ];

  return (
    <section className="section founder" id="founder">
      <div className="section-head reveal">
        <div>
          <div className="section-label">The founder</div>
          <h2 className="section-title font-display">
            Meet <em>Tarek Mansour.</em>
          </h2>
        </div>
      </div>

      <div className="founder-grid">
        <div className="founder-image-wrap reveal" ref={imgWrap}>
          <div className="founder-image-frame">
            <div className="founder-orbit-ring" />
            <div className="founder-orbit-ring r2" />
            <img src="assets/tarek-mansour.jpg?v=2" alt="Tarek Mansour" className="founder-image" />
            <div className="founder-tag founder-tag-1">
              <span className="d" />
              <span>CEO · MIMV</span>
            </div>
            <div className="founder-tag founder-tag-2">
              <span className="d" style={{ background: '#FF5A1F' }} />
              <span>Founder · iPhoneIslam</span>
            </div>
            <div className="founder-tag founder-tag-3">
              <span className="d" style={{ background: '#8B5CF6' }} />
              <span>AI Pioneer</span>
            </div>
          </div>
        </div>

        <div className="founder-body reveal delay-1">
          <div className="founder-eyebrow font-mono">CEO · FOUNDER · AI PIONEER</div>
          <p className="founder-lead font-display">
            A serial entrepreneur with <em>20+ years</em> shaping mobile tech in the Middle East.
          </p>
          <p className="founder-p">
            Tarek is a recipient of the prestigious <strong>Prince Abdulaziz bin Abdullah Award
            for Best Entrepreneur</strong>. As founder of <strong>iPhoneIslam.com</strong>, he was
            one of the first developers globally to write software for iPhone OS — and played a
            historic role in the <strong>Arabization of the iPhone and iPad</strong>, building
            localization solutions long before Apple officially supported Arabic.
          </p>
          <p className="founder-p">
            In <strong>2011</strong>, he founded MIMV — and later created <strong>App3ad</strong>,
            a revolutionary "App Store for Arabs" that bridged creators and the Arab market with
            record-breaking downloads.
          </p>
          <p className="founder-p">
            Today, Tarek is a focused indie developer and <strong>SwiftUI expert</strong> pioneering
            AI in Islamic apps: <strong>Islamic AI</strong> (RAG-architected, zero-hallucination
            religious answers), <strong>Voice-Over AI</strong> (emotion-controllable text-to-speech),
            and the <strong>Al-Kitab</strong> project — merging faith with cutting-edge technology.
          </p>

          <div className="founder-stats">
            {achievements.map((a, i) => (
              <div key={i} className="founder-stat">
                <div className="y font-display">{a.y}</div>
                <div className="l">{a.l}</div>
              </div>
            ))}
          </div>

          <div className="founder-quote font-display">
            "Merging faith with cutting-edge technology — that's the lifelong mission."
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Founder });
