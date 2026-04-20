// MIMV — Intro curtain
const { useState: useStateI, useEffect: useEffectI } = React;

function IntroCurtain({ onDone }) {
  const [count, setCount] = useStateI(0);
  const [finishing, setFinishing] = useStateI(false);

  useEffectI(() => {
    const dur = 2400;
    const start = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      setCount(Math.floor(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => {
          setFinishing(true);
          setTimeout(onDone, 1000);
        }, 200);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const tickerWords = ['since 2007.', 'iPhone.', 'iPad.', 'Vision Pro.', 'AI.', 'Everything Apple.'];

  return (
    <div className={`intro ${finishing ? 'done' : ''}`}>
      <div className="intro-inner">
        <img src="assets/mimv-logo.png" alt="MIMV" className="intro-logo" />
        <div className="intro-ticker">
          <div className="track">
            {tickerWords.map((w, i) => <span key={i}>{w}</span>)}
          </div>
        </div>
        <div className="intro-bar" />
        <div className="intro-counter">
          <span>LOADING</span>
          <span className="num">{String(count).padStart(3, '0')}</span>
          <span>%</span>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { IntroCurtain });
