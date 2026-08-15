import { Home, Building2, ShieldCheck, Users, Bell, Settings } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface BottomNavProps {
  activePage: string;
  onNavigate: (id: string) => void;
  unreadCount: number;
}

interface NavEntry {
  id: string;
  label: string;
  icon: LucideIcon;
  matchPrefix?: string;
}

const ITEMS: NavEntry[] = [
  { id: 'dashboard', label: 'Accueil', icon: Home },
  { id: 'moyens', label: 'Moyens', icon: Building2, matchPrefix: 'moyens' },
  { id: 'conformite', label: 'Conformité', icon: ShieldCheck, matchPrefix: 'conformite' },
  { id: 'salaries', label: 'Salariés', icon: Users, matchPrefix: 'salaries' },
  { id: 'notifications', label: 'Alertes', icon: Bell },
  { id: 'parametres', label: 'Réglages', icon: Settings },
];

function isActive(entry: NavEntry, activePage: string): boolean {
  if (entry.matchPrefix) {
    return activePage === entry.id || activePage.startsWith(entry.matchPrefix);
  }
  return activePage === entry.id;
}

export function BottomNav({ activePage, onNavigate, unreadCount }: BottomNavProps) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-cream-300 bg-cream-50/95 backdrop-blur lg:hidden pb-safe">
      <div className="flex items-stretch justify-between overflow-x-auto no-scrollbar">
        {ITEMS.map((item) => {
          const Icon = item.icon;
          const active = isActive(item, activePage);
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`relative flex flex-1 flex-col items-center gap-1 px-2 py-2.5 text-[10px] font-medium transition-colors ${
                active ? 'text-chocolate-900' : 'text-chocolate-400'
              }`}
            >
              <Icon
                className={`h-5 w-5 shrink-0 ${active ? 'text-chocolate-800' : 'text-chocolate-400'}`}
                strokeWidth={active ? 2.25 : 2}
              />
              <span className="leading-none">{item.label}</span>
              {item.id === 'notifications' && unreadCount > 0 && (
                <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-error-500 px-1 text-[9px] font-semibold text-white">
                  {unreadCount}
                </span>
              )}
              {active && (
                <span className="absolute inset-x-2 -top-px h-0.5 rounded-full bg-chocolate-700" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
