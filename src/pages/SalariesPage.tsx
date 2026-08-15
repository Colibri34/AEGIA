import { useState } from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Table, TableRow, TableCell } from '@/components/ui/Table';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { computeStatus, formatDateFR, daysLabel } from '@/utils/date';
import {
  employees,
  employeeDocuments,
  habilitations,
  formations,
  visites,
  adminFollowUps,
} from '@/data/salaries';

const TABS = [
  { id: 'salaries-dossiers', label: 'Dossiers salariés' },
  { id: 'salaries-documents', label: 'Documents' },
  { id: 'salaries-habilitations', label: 'Habilitations' },
  { id: 'salaries-formations', label: 'Formations' },
  { id: 'salaries-visites', label: 'Visites et échéances' },
  { id: 'salaries-suivi', label: 'Suivi administratif' },
];

function employeeName(employeeId: string): string {
  return employees.find((e) => e.id === employeeId)?.name ?? 'Salarié';
}
function employeeRole(employeeId: string): string {
  return employees.find((e) => e.id === employeeId)?.role ?? '';
}

interface SalariesPageProps {
  initialTab?: string;
  onNavigate: (id: string) => void;
}

export function SalariesPage({ initialTab = 'salaries-dossiers', onNavigate }: SalariesPageProps) {
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    onNavigate(id);
  };

  return (
    <div>
      <PageHeader
        title="Salariés"
        description="Gestion des dossiers salariés, documents, habilitations, formations, visites médicales et suivi administratif."
        tabs={TABS}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      {activeTab === 'salaries-dossiers' && (
        <Table headers={['Salarié', 'Poste', "Date d'embauche", 'Statut dossier']}>
          {employees.map((e) => {
            const empDocs = employeeDocuments.filter((d) => d.employeeId === e.id);
            const hasMissing = empDocs.some((d) => !d.dueDate);
            const hasCritical = empDocs.some(
              (d) => d.dueDate && computeStatus(d.dueDate) === 'critique'
            );
            const status = hasMissing || hasCritical ? 'critique' : 'conforme';
            return (
              <TableRow key={e.id}>
                <TableCell label="Salarié" primary>{e.name}</TableCell>
                <TableCell label="Poste">{e.role}</TableCell>
                <TableCell label="Date d'embauche">{formatDateFR(e.hireDate)}</TableCell>
                <TableCell label="Statut dossier">
                  <StatusBadge status={status} />
                </TableCell>
              </TableRow>
            );
          })}
        </Table>
      )}

      {activeTab === 'salaries-documents' && (
        <Table headers={['Document', 'Salarié', 'Poste', 'Échéance']}>
          {employeeDocuments.map((d) => (
            <TableRow key={d.id}>
              <TableCell label="Document" primary>{d.title}</TableCell>
              <TableCell label="Salarié">{employeeName(d.employeeId)}</TableCell>
              <TableCell label="Poste">{employeeRole(d.employeeId)}</TableCell>
              <TableCell label="Échéance">
                <div className="flex flex-col gap-1">
                  <StatusBadge status={computeStatus(d.dueDate)} />
                  <span className="text-xs text-chocolate-400">
                    {d.dueDate ? `${daysLabel(d.dueDate)} · ${formatDateFR(d.dueDate)}` : daysLabel(d.dueDate)}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      )}

      {activeTab === 'salaries-habilitations' && (
        <Table headers={['Habilitation', 'Salarié', 'Poste', 'Expiration']}>
          {habilitations.map((h) => (
            <TableRow key={h.id}>
              <TableCell label="Habilitation" primary>{h.title}</TableCell>
              <TableCell label="Salarié">{employeeName(h.employeeId)}</TableCell>
              <TableCell label="Poste">{employeeRole(h.employeeId)}</TableCell>
              <TableCell label="Expiration">
                <div className="flex flex-col gap-1">
                  <StatusBadge status={computeStatus(h.expiryDate)} />
                  <span className="text-xs text-chocolate-400">
                    {daysLabel(h.expiryDate)} · {formatDateFR(h.expiryDate)}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      )}

      {activeTab === 'salaries-formations' && (
        <Table headers={['Formation', 'Salarié', 'Poste', 'Échéance']}>
          {formations.map((f) => (
            <TableRow key={f.id}>
              <TableCell label="Formation" primary>{f.title}</TableCell>
              <TableCell label="Salarié">{employeeName(f.employeeId)}</TableCell>
              <TableCell label="Poste">{employeeRole(f.employeeId)}</TableCell>
              <TableCell label="Échéance">
                <div className="flex flex-col gap-1">
                  <StatusBadge status={computeStatus(f.dueDate)} />
                  <span className="text-xs text-chocolate-400">
                    {daysLabel(f.dueDate)} · {formatDateFR(f.dueDate)}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      )}

      {activeTab === 'salaries-visites' && (
        <Table headers={['Visite', 'Salarié', 'Poste', 'Échéance']}>
          {visites.map((v) => (
            <TableRow key={v.id}>
              <TableCell label="Visite" primary>{v.title}</TableCell>
              <TableCell label="Salarié">{employeeName(v.employeeId)}</TableCell>
              <TableCell label="Poste">{employeeRole(v.employeeId)}</TableCell>
              <TableCell label="Échéance">
                <div className="flex flex-col gap-1">
                  <StatusBadge status={computeStatus(v.dueDate)} />
                  <span className="text-xs text-chocolate-400">
                    {daysLabel(v.dueDate)} · {formatDateFR(v.dueDate)}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      )}

      {activeTab === 'salaries-suivi' && (
        <Table headers={['Suivi', 'Salarié', 'Poste', 'Échéance']}>
          {adminFollowUps.map((a) => (
            <TableRow key={a.id}>
              <TableCell label="Suivi" primary>{a.title}</TableCell>
              <TableCell label="Salarié">{employeeName(a.employeeId)}</TableCell>
              <TableCell label="Poste">{employeeRole(a.employeeId)}</TableCell>
              <TableCell label="Échéance">
                <div className="flex flex-col gap-1">
                  <StatusBadge status={computeStatus(a.dueDate)} />
                  <span className="text-xs text-chocolate-400">
                    {a.dueDate ? `${daysLabel(a.dueDate)} · ${formatDateFR(a.dueDate)}` : daysLabel(a.dueDate)}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      )}
    </div>
  );
}
