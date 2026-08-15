import { useState } from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Table, TableRow, TableCell } from '@/components/ui/Table';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { computeStatus, formatDateFR, daysLabel } from '@/utils/date';
import {
  vehicles,
  phones,
  insurances,
  equipments,
  contracts,
  otherMeans,
} from '@/data/moyensGeneraux';

const TABS = [
  { id: 'moyens-vehicules', label: 'Véhicules' },
  { id: 'moyens-telephones', label: 'Téléphones' },
  { id: 'moyens-assurances', label: 'Assurances' },
  { id: 'moyens-equipements', label: 'Équipements' },
  { id: 'moyens-contrats', label: 'Contrats' },
  { id: 'moyens-autres', label: 'Autres moyens' },
];

interface MoyensGenerauxPageProps {
  initialTab?: string;
  onNavigate: (id: string) => void;
}

export function MoyensGenerauxPage({ initialTab = 'moyens-vehicules', onNavigate }: MoyensGenerauxPageProps) {
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    onNavigate(id);
  };

  return (
    <div>
      <PageHeader
        title="Moyens généraux"
        description="Suivi des véhicules, téléphones, assurances, équipements, contrats et autres moyens de l'entreprise."
        tabs={TABS}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      {activeTab === 'moyens-vehicules' && (
        <Table headers={['Véhicule', 'Immatriculation', 'Catégorie', 'Conducteur', 'Contrôle technique', 'Assurance']}>
          {vehicles.map((v) => (
            <TableRow key={v.id}>
              <TableCell label="Véhicule" primary>{v.name}</TableCell>
              <TableCell label="Immatriculation">{v.plate}</TableCell>
              <TableCell label="Catégorie">{v.category}</TableCell>
              <TableCell label="Conducteur">{v.driver}</TableCell>
              <TableCell label="Contrôle technique">
                <div className="flex flex-col gap-1">
                  <StatusBadge status={computeStatus(v.controleTechniqueDate)} />
                  <span className="text-xs text-chocolate-400">{daysLabel(v.controleTechniqueDate)}</span>
                </div>
              </TableCell>
              <TableCell label="Assurance">
                <div className="flex flex-col gap-1">
                  <StatusBadge status={computeStatus(v.assuranceDate)} />
                  <span className="text-xs text-chocolate-400">{daysLabel(v.assuranceDate)}</span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      )}

      {activeTab === 'moyens-telephones' && (
        <Table headers={['Modèle', 'Numéro', 'Utilisateur', "Fin d'engagement"]}>
          {phones.map((p) => (
            <TableRow key={p.id}>
              <TableCell label="Modèle" primary>{p.model}</TableCell>
              <TableCell label="Numéro">{p.number}</TableCell>
              <TableCell label="Utilisateur">{p.user}</TableCell>
              <TableCell label="Fin d'engagement">
                <div className="flex flex-col gap-1">
                  <StatusBadge status={computeStatus(p.contractEndDate)} />
                  <span className="text-xs text-chocolate-400">
                    {daysLabel(p.contractEndDate)} · {formatDateFR(p.contractEndDate)}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      )}

      {activeTab === 'moyens-assurances' && (
        <Table headers={['Contrat', 'Assureur', 'Échéance']}>
          {insurances.map((i) => (
            <TableRow key={i.id}>
              <TableCell label="Contrat" primary>{i.title}</TableCell>
              <TableCell label="Assureur">{i.provider}</TableCell>
              <TableCell label="Échéance">
                <div className="flex flex-col gap-1">
                  <StatusBadge status={computeStatus(i.expiryDate)} />
                  <span className="text-xs text-chocolate-400">
                    {daysLabel(i.expiryDate)} · {formatDateFR(i.expiryDate)}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      )}

      {activeTab === 'moyens-equipements' && (
        <Table headers={['Équipement', 'Emplacement', 'Prochaine maintenance']}>
          {equipments.map((e) => (
            <TableRow key={e.id}>
              <TableCell label="Équipement" primary>{e.name}</TableCell>
              <TableCell label="Emplacement">{e.location}</TableCell>
              <TableCell label="Prochaine maintenance">
                <div className="flex flex-col gap-1">
                  <StatusBadge status={computeStatus(e.maintenanceDate)} />
                  <span className="text-xs text-chocolate-400">
                    {daysLabel(e.maintenanceDate)} · {formatDateFR(e.maintenanceDate)}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      )}

      {activeTab === 'moyens-contrats' && (
        <Table headers={['Contrat', 'Prestataire', 'Renouvellement']}>
          {contracts.map((c) => (
            <TableRow key={c.id}>
              <TableCell label="Contrat" primary>{c.title}</TableCell>
              <TableCell label="Prestataire">{c.provider}</TableCell>
              <TableCell label="Renouvellement">
                <div className="flex flex-col gap-1">
                  <StatusBadge status={computeStatus(c.renewalDate)} />
                  <span className="text-xs text-chocolate-400">
                    {daysLabel(c.renewalDate)} · {formatDateFR(c.renewalDate)}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      )}

      {activeTab === 'moyens-autres' && (
        <Table headers={['Élément', 'Détail', 'Prochaine révision']}>
          {otherMeans.map((o) => (
            <TableRow key={o.id}>
              <TableCell label="Élément" primary>{o.title}</TableCell>
              <TableCell label="Détail">{o.detail}</TableCell>
              <TableCell label="Prochaine révision">
                <div className="flex flex-col gap-1">
                  <StatusBadge status={computeStatus(o.reviewDate)} />
                  <span className="text-xs text-chocolate-400">
                    {daysLabel(o.reviewDate)} · {formatDateFR(o.reviewDate)}
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
