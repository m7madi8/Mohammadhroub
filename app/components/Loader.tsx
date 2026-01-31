"use client";

export default function Loader() {
  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[color:var(--background)]"
      aria-live="polite"
      aria-label="Loading"
    >
      {/* Top brand bar */}
      <div className="absolute left-0 top-0 h-[2px] w-full overflow-hidden bg-[color:var(--border)]">
        <div
          className="brand-loader-bar h-full bg-[color:var(--accent)]"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Loading progress"
        />
      </div>

      {/* Centered brand mark */}
      <div className="flex flex-col items-center gap-10">
        <div className="flex items-baseline gap-0.5">
          <span className="brand-loader-wordmark eyebrow text-[color:var(--foreground)]">
            Mohammad
          </span>
          <span
            className="brand-loader-cursor text-[color:var(--accent)]"
            aria-hidden="true"
          >
            _
          </span>
        </div>
        <div className="brand-loader-underline h-px w-24 bg-[color:var(--accent)]" />
      </div>
    </div>
  );
}
