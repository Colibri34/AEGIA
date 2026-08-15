import { LucideIcon } from 'lucide-react';

type KpiTone = 'neutral' | 'success' | 'warning' | 'error' | 'gold';

interface KpiCardProps {
  label: string;
  value: number;
  icon: LucideIcon;
  tone?: KpiTone;
}

const TONE_STYLES: Record<KpiTone, { bg: string; icon: string }> = {
  neutral: { bg: 'bg-chocolate-50', icon: 'text-chocolate-600' },
  success: { bg: 'bg-success-50', icon: 'text-success-600' },
  warning: { bg: 'bg-warning-50', icon: 'text-warning-600' },
  error: { bg: 'bg-error-50', icon: 'text-error-600' },
  gold: { bg: 'bg-gold-50', icon: 'text-gold-600' },
};

export function KpiCard({ label, value, icon: Icon, tone = 'neutral' }: KpiCardProps) {
  const styles = TONE_STYLES[tone];
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-cream-300 bg-white p-3.5 shadow-soft transition-shadow hover:shadow-card sm:gap-4 sm:p-5">
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:h-11 sm:w-11 ${styles.bg}`}>
        <Icon className={`h-5 w-5 ${styles.icon}`} strokeWidth={2} />
      </div>
      <div className="min-w-0">
        <p className="font-display text-xl font-semibold leading-tight text-chocolate-900 sm:text-2xl">
          {value}
        </p>
        <p className="truncate text-xs text-chocolate-500 sm:text-sm">{label}</p>
      </div>
    </div>
  );
}
