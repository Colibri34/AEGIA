import { ReactNode, useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { BottomNav } from '@/components/layout/BottomNav';

interface LayoutProps {
  activePage: string;
  onNavigate: (id: string) => void;
  unreadCount: number;
  children: ReactNode;
}

export function Layout({ activePage, onNavigate, unreadCount, children }: LayoutProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream-50">
      <div className="flex min-h-screen">
        <Sidebar
          activePage={activePage}
          onNavigate={onNavigate}
          unreadCount={unreadCount}
          mobileOpen={mobileNavOpen}
          onCloseMobile={() => setMobileNavOpen(false)}
        />
        <div className="flex min-w-0 flex-1 flex-col">
          <Header
            unreadCount={unreadCount}
            onOpenNotifications={() => onNavigate('notifications')}
            onToggleMobileNav={() => setMobileNavOpen(true)}
          />
          <main className="flex-1 px-4 py-6 pb-24 sm:px-6 sm:pb-6 lg:px-8">{children}</main>
        </div>
      </div>
      <BottomNav activePage={activePage} onNavigate={onNavigate} unreadCount={unreadCount} />
    </div>
  );
}
