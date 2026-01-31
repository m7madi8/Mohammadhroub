"use client";

export default function UnderDevelopmentGate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="under-dev-screen" role="status" aria-live="polite">
      <div className="under-dev-bg" aria-hidden="true">
        <div className="under-dev-glow under-dev-glow-center" />
        <div className="under-dev-glow under-dev-glow-top" />
        <div className="under-dev-grid" />
      </div>
      <div className="under-dev-content">
        <div className="under-dev-card">
          <p className="under-dev-eyebrow">Mohammad</p>
          <div className="under-dev-heading">
            <h1 className="under-dev-title-ar" lang="ar" dir="rtl">
              الموقع قيد التطوير
            </h1>
            <p className="under-dev-title-en">Website under development</p>
          </div>
          <div className="under-dev-line-wrap">
            <div className="under-dev-line" aria-hidden="true" />
          </div>
          <p className="under-dev-desc">
            We are preparing something clear and effective.
            <br />
            <span className="under-dev-soon">Soon.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
