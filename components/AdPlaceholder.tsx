interface AdPlaceholderProps {
  slot?: string;
  format?: 'horizontal' | 'rectangle' | 'sidebar';
  className?: string;
}

export function AdPlaceholder({ format = 'horizontal', className = '' }: AdPlaceholderProps) {
  // CLS-safe fixed heights according to standard IAB ad units
  const minHeightClass =
    format === 'rectangle'
      ? 'min-h-[280px] max-w-[336px]'
      : format === 'sidebar'
      ? 'min-h-[600px] max-w-[300px]'
      : 'min-h-[100px] sm:min-h-[120px] w-full';

  return (
    <div
      className={`my-8 mx-auto flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 p-4 transition text-center ${minHeightClass} ${className}`}
      aria-label="Sponsorship / Advertisement Area"
    >
      <span className="text-[10px] uppercase tracking-widest font-semibold text-slate-400 dark:text-slate-500 mb-1">
        Advertisement
      </span>
      <p className="text-xs text-slate-400 dark:text-slate-500 max-w-xs">
        Reserved ad slot for future Google AdSense integration. Layout shift safe.
      </p>
    </div>
  );
}
