import { useState } from 'react';
import { AlertTriangle, AlertCircle, Bell, Check, Filter } from 'lucide-react';
import { getAllTrackedItems, getSortedByUrgency } from '@/data/trackedItems';
import { TrackedItem, ItemStatus } from '@/types';
import { formatDateFR, daysLabel } from '@/utils/date';
import { STATUS_CONFIG } from '@/utils/statusConfig';

interface NotificationsPageProps {
  onNavigate: (sectionId: string) => void;
  readIds: Set<string>;
  onMarkRead: (id: string) => void;
  onMarkAllRead: () => void;
}

type FilterType = 'all' | 'critique' | 'a_surveiller';

export function NotificationsPage({ onNavigate, readIds, onMarkRead, onMarkAllRead }: NotificationsPageProps) {
  const [filter, setFilter] = useState<FilterType>('all');

  const allItems = getSortedByUrgency(getAllTrackedItems());
  const notifItems = allItems.filter((i) => i.status === 'critique' || i.status === 'a_surveiller');
  const filtered = filter === 'all' ? notifItems : notifItems.filter((i) => i.status === filter);
  const unreadCount = notifItems.filter((i) => !readIds.has(i.id)).length;

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-xl font-semibold text-chocolate-900 sm:text-2xl lg:text-3xl">
            Notifications
          </h1>
          <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-chocolate-500">
            Centre centralisé des alertes. Consultez et traitez les échéances et situations nécessitant une attention.
          </p>
        </div>
        {unreadCount > 0 && (
          <button
            onClick={onMarkAllRead}
            className="inline-flex items-center gap-2 rounded-lg border border-cream-300 bg-white px-4 py-2.5 text-sm font-medium text-chocolate-600 transition-colors hover:bg-cream-100"
          >
            <Check className="h-4 w-4" />
            Tout marquer comme lu
          </button>
        )}
      </div>

      {/* Filter pills */}
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <Filter className="h-4 w-4 shrink-0 text-chocolate-400" />
        {([
          { id: 'all', label: 'Toutes' },
          { id: 'critique', label: 'Critiques' },
          { id: 'a_surveiller', label: 'À surveiller' },
        ] as { id: FilterType; label: string }[]).map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`rounded-full px-3 py-2 text-xs font-medium transition-colors ${
              filter === f.id
                ? 'bg-chocolate-800 text-cream-50'
                : 'bg-white text-chocolate-500 ring-1 ring-inset ring-cream-300 hover:bg-cream-100'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="space-y-3">
          {filtered.map((item) => {
            const isRead = readIds.has(item.id);
            const isCritical = item.status === 'critique';
            return (
              <div
                key={item.id}
                className={`flex items-start gap-3 rounded-xl border p-4 transition-colors ${
                  isCritical
                    ? 'border-error-200 bg-error-50/40'
                    : 'border-warning-200 bg-warning-50/40'
                } ${isRead ? 'opacity-60' : ''}`}
              >
                <div
                  className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                    isCritical ? 'bg-error-100 text-error-600' : 'bg-warning-100 text-warning-600'
                  }`}
                >
                  {isCritical ? <AlertTriangle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-chocolate-900">{item.title}</p>
                    {!isRead && <span className="h-2 w-2 shrink-0 rounded-full bg-chocolate-600" />}
                  </div>
                  <p className="mt-0.5 truncate text-xs text-chocolate-500">{item.description}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-full bg-white px-2 py-0.5 font-medium text-chocolate-600 ring-1 ring-inset ring-cream-300">
                      {item.category}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 font-medium ${STATUS_CONFIG[item.status as ItemStatus].badgeClass}`}
                    >
                      {STATUS_CONFIG[item.status as ItemStatus].label}
                    </span>
                    <span className={isCritical ? 'font-medium text-error-700' : 'font-medium text-warning-700'}>
                      {daysLabel(item.dueDate)}
                    </span>
                    {item.dueDate && (
                      <span className="text-chocolate-400">· {formatDateFR(item.dueDate)}</span>
                    )}
                  </div>
                </div>
                <div className="flex shrink-0 flex-row gap-2 sm:flex-col">
                  <button
                    onClick={() => onNavigate(item.sectionId)}
                    className="rounded-lg px-3 py-2 text-xs font-medium text-chocolate-600 ring-1 ring-inset ring-cream-300 transition-colors hover:bg-cream-100"
                  >
                    Voir
                  </button>
                  {!isRead && (
                    <button
                      onClick={() => onMarkRead(item.id)}
                      className="rounded-lg px-3 py-2 text-xs font-medium text-chocolate-400 transition-colors hover:bg-cream-100 hover:text-chocolate-600"
                    >
                      Marquer lu
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-cream-300 bg-white py-16 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream-100">
            <Bell className="h-6 w-6 text-chocolate-400" />
          </div>
          <p className="mt-4 text-sm font-medium text-chocolate-700">Aucune notification</p>
          <p className="mt-1 text-xs text-chocolate-400">Toutes les échéances sont à jour.</p>
        </div>
      )}
    </div>
  );
}
