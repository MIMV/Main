// MIMV — Story, Services, Contact, Footer
const { useState: useStateS } = React;

function Story() {
  return (
    <section className="story" id="story">
      <div className="story-bg" />
      <img src="assets/mimv-logo.png" className="story-watermark" alt="" />
      <div className="story-award reveal">
        <img src="assets/mimv-runnerup.jpg" alt="MIMV — Runner-up, Grow Your Business Regional SME Competition & Awards" />
        <div className="story-award-caption">
          <div className="story-award-label">Recognized early</div>
          <div className="story-award-title">Runner-up · <em>Grow Your Business</em></div>
          <div className="story-award-sub">Regional SME Competition & Awards · Dubai · 2012</div>
        </div>
      </div>
      <div className="story-inner">
        <div className="reveal">
          <div className="section-label story-eyebrow">Our story</div>
          <h2 className="story-title">
            We started by <em>Arabizing</em> the iPhone. We never stopped.
          </h2>
        </div>
        <div className="story-body reveal delay-1">
          <p>
            In <strong>2007</strong>, a small team called <strong>iPhoneIslam</strong> did
            something Apple hadn't — they brought Arabic to the iPhone, before the App Store
            even existed. That scrappy beginning became a pattern: find the thing the world
            deserves, ship it first, ship it well.
          </p>
          <p>
            In <strong>2011</strong> we became MIMV. Today we're a crew of developers,
            designers, and editors building on every Apple platform — from iPhone and iPad
            to Vision Pro and Apple TV. We build with AI now too. We still sweat every pixel.
          </p>

          <div className="timeline">
            <div className="timeline-item">
              <div className="y">2007</div>
              <div className="t">iPhoneIslam is born. Arabic on iPhone, for the first time.</div>
            </div>
            <div className="timeline-item">
              <div className="y">2011</div>
              <div className="t">iPhoneIslam morphs into MIMV. A studio, not just a project.</div>
            </div>
            <div className="timeline-item">
              <div className="y">2013</div>
              <div className="t">ElaSalaty launches — prayer times trusted by millions.</div>
            </div>
            <div className="timeline-item">
              <div className="y">2024</div>
              <div className="t">Immersive PrayerTimes ships for Apple Vision Pro.</div>
            </div>
            <div className="timeline-item">
              <div className="y">2025</div>
              <div className="t">Bayan Quran — a living Qur'an, reimagined.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      num: '01',
      title: 'Development',
      body: 'We build mobile apps across every Apple platform — iPhone, iPad, Vision Pro, Watch, TV, Mac. Native, fast, crafted.',
      glyph: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="10" y="6" width="28" height="36" rx="4"/>
          <path d="M18 14h12M18 22h12M18 30h8"/>
        </svg>
      )
    },
    {
      num: '02',
      title: 'AI & Strategy',
      body: 'We help products find their voice in an AI-first world. From concept to App Store listing, we craft measurable marketing that earns downloads.',
      glyph: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="24" cy="24" r="14"/>
          <path d="M24 10v28M10 24h28"/>
          <circle cx="24" cy="24" r="4" fill="currentColor"/>
        </svg>
      )
    },
    {
      num: '03',
      title: 'Consultation',
      body: 'For teams that need senior eyes. Architecture reviews, technical direction, hands-on problem-solving from founders who have shipped fifty.',
      glyph: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8 16l16 10 16-10"/>
          <path d="M8 16v16l16 10 16-10V16L24 6 8 16z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="section" id="services">
      <div className="section-head reveal">
        <div>
          <div className="section-label">What we do</div>
          <h2 className="section-title font-display">
            Three crafts. <em>One studio.</em>
          </h2>
        </div>
      </div>

      <div className="services">
        {services.map((s, i) => (
          <div key={s.num} className={`service reveal delay-${i + 1}`}>
            <div>
              <div className="service-num">{s.num} / 03</div>
              <div className="service-glyph">{s.glyph}</div>
              <h3 className="font-display">{s.title}</h3>
              <p>{s.body}</p>
            </div>
            <a href="#contact" className="service-arrow">
              <span>Start a conversation</span>
              <span className="a">↗</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useStateS({ name: '', email: '', message: '' });
  const [topic, setTopic] = useStateS('New project');
  const [sent, setSent] = useStateS(false);
  const [sending, setSending] = useStateS(false);

  const topics = ['New project', 'Consulting', 'Press', 'Support', 'Other'];

  const submit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '33627a73-3957-4b39-ae2b-aaa538237b64',
          subject: `[MIMV] ${topic} — ${form.name}`,
          from_name: 'MIMV Website',
          name: form.name,
          email: form.email,
          topic,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || 'Send failed');

      setSending(false);
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setForm({ name: '', email: '', message: '' });
      }, 2400);
    } catch (err) {
      setSending(false);
      alert('Something went wrong. Please email info@mimv.co directly.');
    }
  };

  return (
    <section className="section" id="contact">
      <div className="contact-head reveal">
        <div className="section-label">Get in touch</div>
        <h2 className="font-display">
          Tell us what you're <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>dreaming up.</em>
        </h2>
      </div>
      <div className="contact">
        <div className="contact-info reveal">
          <div className="contact-detail">
            <div className="icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <div>
              <div className="lbl">Phone</div>
              <a className="val" href="tel:+201558285285">+20 155 8 285 285</a>
            </div>
          </div>

          <div className="contact-detail">
            <div className="icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <path d="M22 6l-10 7L2 6"/>
              </svg>
            </div>
            <div>
              <div className="lbl">Email</div>
              <a className="val" href="mailto:info@mimv.co">info@mimv.co</a>
            </div>
          </div>

          <div className="contact-detail">
            <div className="icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
              </svg>
            </div>
            <div>
              <div className="lbl">Worldwide</div>
              <div className="val">Headquartered in Cairo, shipping everywhere</div>
            </div>
          </div>
        </div>

        <form className="contact-form reveal delay-1" onSubmit={submit}>
          <div className="form-row">
            <label className="form-label">What's this about?</label>
            <div className="contact-topics">
              {topics.map(t => (
                <button
                  type="button"
                  key={t}
                  className={`topic-chip ${topic === t ? 'active' : ''}`}
                  onClick={() => setTopic(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="form-row">
            <label className="form-label">Name</label>
            <input
              className="form-input" type="text" required
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
            />
          </div>
          <div className="form-row">
            <label className="form-label">Email</label>
            <input
              className="form-input" type="email" required
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              placeholder="you@company.com"
            />
          </div>
          <div className="form-row">
            <label className="form-label">Message</label>
            <textarea
              className="form-textarea" required
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              placeholder="Tell us about your project..."
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className={`form-submit ${sent ? 'sent' : ''}`}
          >
            {sent ? (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Message sent — we'll be in touch
              </>
            ) : sending ? (
              <>Sending…</>
            ) : (
              <>
                Send message
                <span>→</span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          vid.play().catch(() => {});
        } else {
          vid.pause();
        }
      });
    }, { threshold: 0.4 });
    io.observe(vid);
    return () => io.disconnect();
  }, []);

  return (
    <footer className="footer">
      <h2 className="footer-wordmark">
        <video
          ref={videoRef}
          className="footer-video"
          src="assets/video/MIMVLOGO1.mp4"
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="MIMV"
        />
      </h2>
      <div className="footer-grid">
        <div>© 2007–{new Date().getFullYear()} MIMV LLC. Crafted with care.</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href="https://apps.apple.com/us/developer/i4islam/id301048985" target="_blank" rel="noopener">App Store</a>
          <a href="#latest">Work</a>
          <a href="#story">Story</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Story, Services, Contact, Footer });
