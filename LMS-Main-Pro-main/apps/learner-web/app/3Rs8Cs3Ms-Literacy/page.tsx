import "./3Rs8Cs3MsLiteracy.css";

export default function Page() {
  return (
    <main className="literacy-page">
      <div className="literacy-breadcrumb-nav">
        <ol className="literacy-breadcrumb">
          <li className="literacy-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="literacy-breadcrumb-item active" aria-current="page">
            3Rs 8Cs 3Ms Literacy
          </li>
        </ol>
      </div>

      {/* HERO */}
      <section className="literacy-hero">
        <div className="literacy-hero-content">
          <span className="literacy-badge">NeuroLXP Framework</span>

          <h1>Skills That Matter Beyond Exams</h1>

          <p>
            Learning isn’t just about marks anymore. Students need to understand
            things and actually use them — not just memorize and move on.
          </p>

          <p>
            The 3Rs, 8Cs &amp; 3Ms framework tries to keep things simple. Basics,
            real-world skills, and the mindset to keep learning. NeuroLXP helps
            bring that into classrooms without overcomplicating it.
          </p>
        </div>

        <div className="literacy-image-placeholder">
          <img
            src="/pexels-marcio-ribeiro-608242116-32218635.jpg"
            alt="Learning"
          />
        </div>
      </section>

      {/* INTRO */}
      <section className="literacy-content-section">
        <h2>A more practical approach</h2>
        <p>
          It’s not just academics. It’s basics + thinking + habits. That’s it.
        </p>
      </section>

      {/* HIGHLIGHTS */}
      <section className="literacy-highlight-row">
        <div className="literacy-highlight">Basics</div>
        <div className="literacy-highlight">Thinking</div>
        <div className="literacy-highlight">Keep learning</div>
      </section>

      {/* GRID */}
      <section className="literacy-grid">
        <article className="literacy-card">
          <div className="literacy-icon">📖</div>
          <h2>The 3Rs</h2>

          <p>Reading, writing, math. Still the base.</p>

          <ul>
            <li>Understand what you read</li>
            <li>Write clearly</li>
            <li>Use math in daily life</li>
          </ul>
        </article>

        <article className="literacy-card">
          <div className="literacy-icon">💡</div>
          <h2>The 8Cs</h2>

          <p>After basics, it’s about how you think.</p>

          <ul>
            <li>Critical thinking</li>
            <li>Creativity</li>
            <li>Communication</li>
            <li>Collaboration</li>
            <li>Curiosity</li>
            <li>Character</li>
            <li>Citizenship</li>
            <li>Computational thinking</li>
          </ul>
        </article>

        <article className="literacy-card">
          <div className="literacy-icon">🧠</div>
          <h2>The 3Ms</h2>

          <p>Mindset matters.</p>

          <ul>
            <li>Be open to improving</li>
            <li>Stay motivated</li>
            <li>Understand how you learn</li>
          </ul>
        </article>
      </section>

      {/* SECTION */}
      <section className="literacy-content-section">
        <h2>Why it matters</h2>
        <p>
          Because learning should be useful. Not just for exams, but for life.
        </p>
      </section>

      {/* BOTTOM */}
      <section className="literacy-bottom">
        <div className="literacy-image-placeholder">
          <img
            src="/pexels-mikhail-nilov-8923561.jpg"
            alt="Learning"
          />
        </div>

        <div>
          <h2>NeuroLXP</h2>
          <p>
            Helps bring all this into real classrooms. Simple tools. Clear
            structure. Nothing heavy.
          </p>
        </div>
      </section>
    </main>
  );
}
