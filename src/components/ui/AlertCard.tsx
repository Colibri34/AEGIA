import { AlertTriangle, AlertCircle, ChevronRight } from 'lucide-react';
import { TrackedItem } from '@/types';
import { daysLabel, formatDateFR } from '@/utils/date';

interface AlertCardProps {
  item: TrackedItem;
  tone: 'critical' | 'attention';
  onNavigate: (sectionId: string) => void;
}

export function AlertCard({ item, tone, onNavigate }: AlertCardProps) {
  const isCritical = tone === 'critical';
  return (
    <button
      onClick={() => onNavigate(item.sectionId)}
      className={`group flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-colors ${
        isCritical
          ? 'border-error-200 bg-error-50/60 hover:bg-error-50'
          : 'border-warning-200 bg-warning-50/60 hover:bg-warning-50'
      }`}
    >
      <div
        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
          isCritical ? 'bg-error-100 text-error-600' : 'bg-warning-100 text-warning-600'
        }`}
      >
        {isCritical ? <AlertTriangle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-chocolate-900">{item.title}</p>
        <p className="mt-0.5 truncate text-xs text-chocolate-500">{item.description}</p>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-white px-2 py-0.5 font-medium text-chocolate-600 ring-1 ring-inset ring-cream-300">
            {item.category}
          </span>
          <span className={`font-medium ${isCritical ? 'text-error-700' : 'text-warning-700'}`}>
            {daysLabel(item.dueDate)}
          </span>
          {item.dueDate && (
            <span className="text-chocolate-400">· échéance le {formatDateFR(item.dueDate)}</span>
          )}
        </div>
      </div>
      <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-chocolate-300 transition-transform group-hover:translate-x-0.5" />
    </button>
  );
}
