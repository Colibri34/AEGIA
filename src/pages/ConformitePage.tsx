import { useState } from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Table, TableRow, TableCell } from '@/components/ui/Table';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { computeStatus, formatDateFR, daysLabel } from '@/utils/date';
import {
  obligations,
  attestations,
  legalDocuments,
  controls,
} from '@/data/conformite';
import { getAllTrackedItems, getSortedByUrgency } from '@/data/trackedItems';
import { TrackedItem } from '@/types';

const TABS = [
  { id: 'conformite-obligations', label: 'Obligations réglementaires' },
  { id: 'conformite-attestations', label: 'Attestations' },
  { id: 'conformite-documents', label: 'Documents légaux' },
  { id: 'conformite-controles', label: 'Contrôles' },
  { id: 'conformite-echeances', label: 'Échéances' },
];

interface ConformitePageProps {
  initialTab?: string;
  onNavigate: (id: string) => void;
}

export function ConformitePage({ initialTab = 'conformite-obligations', onNavigate }: ConformitePageProps) {
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    onNavigate(id);
  };

  const allItems = getAllTrackedItems();
  const conformiteItems = allItems.filter((i) =>
    i.sectionId.startsWith('conformite')
  );
  const echeances = getSortedByUrgency(conformiteItems) as TrackedItem[];

  return (
    <div>
      <PageHeader
        title="Conformité"
        description="Suivi des obligations réglementaires, attestations, documents légaux, contrôles et échéances de l'entreprise."
        tabs={TABS}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      {activeTab === 'conformite-obligations' && (
        <Table headers={['Obligation', 'Détail', 'Échéance']}>
          {obligations.map((o) => (
            <TableRow key={o.id}>
              <TableCell label="Obligation" primary>{o.title}</TableCell>
              <TableCell label="Détail">{o.detail}</TableCell>
              <TableCell label="Échéance">
                <div className="flex flex-col gap-1">
                  <StatusBadge status={computeStatus(o.dueDate)} />
                  <span className="text-xs text-chocolate-400">
                    {daysLabel(o.dueDate)} · {formatDateFR(o.dueDate)}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      )}

      {activeTab === 'conformite-attestations' && (
        <Table headers={['Attestation', 'Détail', 'Expiration']}>
          {attestations.map((a) => (
            <TableRow key={a.id}>
              <TableCell label="Attestation" primary>{a.title}</TableCell>
              <TableCell label="Détail">{a.detail}</TableCell>
              <TableCell label="Expiration">
                <div className="flex flex-col gap-1">
                  <StatusBadge status={computeStatus(a.expiryDate)} />
                  <span className="text-xs text-chocolate-400">
                    {daysLabel(a.expiryDate)} · {formatDateFR(a.expiryDate)}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      )}

      {activeTab === 'conformite-documents' && (
        <Table headers={['Document', 'Détail', 'Échéance']}>
          {legalDocuments.map((l) => (
            <TableRow key={l.id}>
              <TableCell label="Document" primary>{l.title}</TableCell>
              <TableCell label="Détail">{l.detail}</TableCell>
              <TableCell label="Échéance">
                <div className="flex flex-col gap-1">
                  <StatusBadge status={computeStatus(l.dueDate)} />
                  <span className="text-xs text-chocolate-400">
                    {daysLabel(l.dueDate)} · {formatDateFR(l.dueDate)}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      )}

      {activeTab === 'conformite-controles' && (
        <Table headers={['Contrôle', 'Détail', 'Échéance']}>
          {controls.map((c) => (
            <TableRow key={c.id}>
              <TableCell label="Contrôle" primary>{c.title}</TableCell>
              <TableCell label="Détail">{c.detail}</TableCell>
              <TableCell label="Échéance">
                <div className="flex flex-col gap-1">
                  <StatusBadge status={computeStatus(c.dueDate)} />
                  <span className="text-xs text-chocolate-400">
                    {daysLabel(c.dueDate)} · {formatDateFR(c.dueDate)}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      )}

      {activeTab === 'conformite-echeances' && (
        <Table headers={['Élément', 'Catégorie', 'Échéance', 'Statut']}>
          {echeances.map((item) => (
            <TableRow key={item.id}>
              <TableCell label="Élément" primary>{item.title}</TableCell>
              <TableCell label="Catégorie">{item.category}</TableCell>
              <TableCell label="Échéance">
                {item.dueDate ? (
                  <span className="text-chocolate-600">
                    {daysLabel(item.dueDate)} · {formatDateFR(item.dueDate)}
                  </span>
                ) : (
                  <span className="text-error-600">{daysLabel(item.dueDate)}</span>
                )}
              </TableCell>
              <TableCell label="Statut">
                <StatusBadge status={item.status} />
              </TableCell>
            </TableRow>
          ))}
        </Table>
      )}
    </div>
  );
}
