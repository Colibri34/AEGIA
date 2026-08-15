import { Bird, Bell, Menu } from 'lucide-react';

interface HeaderProps {
  unreadCount: number;
  onOpenNotifications: () => void;
  onToggleMobileNav: () => void;
}

export function Header({ unreadCount, onOpenNotifications, onToggleMobileNav }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-cream-300 bg-cream-50/95 px-4 py-3.5 backdrop-blur sm:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleMobileNav}
          className="rounded-lg p-2 text-chocolate-600 hover:bg-cream-200 lg:hidden"
          aria-label="Ouvrir la navigation"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="hidden items-center gap-2 border-r border-cream-300 pr-3 sm:flex">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-chocolate-800">
            <Bird className="h-4 w-4 text-cream-100" strokeWidth={2} />
          </div>
          <div className="leading-tight">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-chocolate-500">
              COLIBRI
            </p>
            <p className="text-[11px] text-chocolate-400">Conseil &amp; Assistance</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-chocolate-800 sm:hidden">
            <Bird className="h-4 w-4 text-cream-100" strokeWidth={2} />
          </div>
          <div className="leading-tight">
            <p className="font-display text-lg font-semibold tracking-tight text-chocolate-900 sm:text-xl lg:text-2xl">
              AEGIA
            </p>
            <p className="text-[11px] text-chocolate-400 sm:text-xs">Gardez le contrôle.</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onOpenNotifications}
          className="relative rounded-full p-2.5 text-chocolate-600 transition-colors hover:bg-cream-200"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-error-500 px-1 text-[10px] font-semibold text-white ring-2 ring-cream-50">
              {unreadCount}
            </span>
          )}
        </button>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-chocolate-700 text-sm font-semibold text-cream-50">
          CA
        </div>
      </div>
    </header>
  );
}
