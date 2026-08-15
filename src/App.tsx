import { useState, useCallback } from 'react';
import { Layout } from '@/components/layout/Layout';
import { DashboardPage } from '@/pages/DashboardPage';
import { MoyensGenerauxPage } from '@/pages/MoyensGenerauxPage';
import { ConformitePage } from '@/pages/ConformitePage';
import { SalariesPage } from '@/pages/SalariesPage';
import { NotificationsPage } from '@/pages/NotificationsPage';
import { ParametresPage } from '@/pages/ParametresPage';
import { getAllTrackedItems } from '@/data/trackedItems';

function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [readIds, setReadIds] = useState<Set<string>>(new Set());

  const allItems = getAllTrackedItems();
  const notifItems = allItems.filter(
    (i) => i.status === 'critique' || i.status === 'a_surveiller'
  );
  const unreadCount = notifItems.filter((i) => !readIds.has(i.id)).length;

  const handleNavigate = useCallback((id: string) => {
    setActivePage(id);
  }, []);

  const handleMarkRead = useCallback((id: string) => {
    setReadIds((prev) => new Set(prev).add(id));
  }, []);

  const handleMarkAllRead = useCallback(() => {
    setReadIds(new Set(notifItems.map((i) => i.id)));
  }, [notifItems]);

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardPage onNavigate={handleNavigate} />;
      case 'moyens-vehicules':
      case 'moyens-telephones':
      case 'moyens-assurances':
      case 'moyens-equipements':
      case 'moyens-contrats':
      case 'moyens-autres':
        return (
          <MoyensGenerauxPage initialTab={activePage} onNavigate={handleNavigate} />
        );
      case 'conformite-obligations':
      case 'conformite-attestations':
      case 'conformite-documents':
      case 'conformite-controles':
      case 'conformite-echeances':
        return (
          <ConformitePage initialTab={activePage} onNavigate={handleNavigate} />
        );
      case 'salaries-dossiers':
      case 'salaries-documents':
      case 'salaries-habilitations':
      case 'salaries-formations':
      case 'salaries-visites':
      case 'salaries-suivi':
        return (
          <SalariesPage initialTab={activePage} onNavigate={handleNavigate} />
        );
      case 'notifications':
        return (
          <NotificationsPage
            onNavigate={handleNavigate}
            readIds={readIds}
            onMarkRead={handleMarkRead}
            onMarkAllRead={handleMarkAllRead}
          />
        );
      case 'parametres':
        return <ParametresPage readIds={readIds} onMarkAllRead={handleMarkAllRead} />;
      default:
        return <DashboardPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <Layout activePage={activePage} onNavigate={handleNavigate} unreadCount={unreadCount}>
      {renderPage()}
    </Layout>
  );
}

export default App;
