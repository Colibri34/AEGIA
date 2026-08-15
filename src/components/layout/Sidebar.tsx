import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { NAV_ITEMS } from '@/config/navigation';

interface SidebarProps {
  activePage: string;
  onNavigate: (id: string) => void;
  unreadCount: number;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

function findParentId(activePage: string): string | undefined {
  return NAV_ITEMS.find((item) => item.children?.some((c) => c.id === activePage))?.id;
}

export function Sidebar({ activePage, onNavigate, unreadCount, mobileOpen, onCloseMobile }: SidebarProps) {
  const [expanded, setExpanded] = useState<Set<string>>(() => {
    const parent = findParentId(activePage);
    return new Set(parent ? [parent] : ['moyens']);
  });

  const toggleExpanded = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleNavigate = (id: string) => {
    onNavigate(id);
    onCloseMobile();
  };

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-chocolate-900/40 lg:hidden"
          onClick={onCloseMobile}
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 shrink-0 transform border-r border-cream-300 bg-white transition-transform duration-200 lg:static lg:z-auto lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-cream-300 px-5 py-4 lg:hidden">
          <span className="font-display text-lg font-semibold text-chocolate-900">AEGIA</span>
          <button onClick={onCloseMobile} className="rounded-lg p-1.5 text-chocolate-500 hover:bg-cream-200">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex h-full flex-col gap-1 overflow-y-auto px-3 py-5">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const hasChildren = !!item.children?.length;
            const isParentActive = item.id === activePage || item.children?.some((c) => c.id === activePage);
            const isExpanded = expanded.has(item.id);

            return (
              <div key={item.id}>
                <button
                  onClick={() => (hasChildren ? toggleExpanded(item.id) : handleNavigate(item.id))}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    isParentActive && !hasChildren
                      ? 'bg-chocolate-800 text-cream-50'
                      : isParentActive
                        ? 'bg-cream-100 text-chocolate-900'
                        : 'text-chocolate-600 hover:bg-cream-100'
                  }`}
                >
                  <Icon className="h-[18px] w-[18px] shrink-0" strokeWidth={2} />
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.id === 'notifications' && unreadCount > 0 && (
                    <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-error-500 px-1 text-[11px] font-semibold text-white">
                      {unreadCount}
                    </span>
                  )}
                  {hasChildren && (
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-chocolate-400 transition-transform ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>

                {hasChildren && isExpanded && (
                  <div className="mt-1 flex flex-col gap-0.5 border-l border-cream-300 pl-4">
                    {item.children!.map((child) => {
                      const isActive = child.id === activePage;
                      return (
                        <button
                          key={child.id}
                          onClick={() => handleNavigate(child.id)}
                          className={`rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                            isActive
                              ? 'bg-gold-50 font-medium text-gold-700'
                              : 'text-chocolate-500 hover:bg-cream-100 hover:text-chocolate-700'
                          }`}
                        >
                          {child.label}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
