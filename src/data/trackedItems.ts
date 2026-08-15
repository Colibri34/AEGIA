import { TrackedItem } from '@/types';
import { computeStatus } from '@/utils/date';
import {
  vehicles,
  phones,
  insurances,
  equipments,
  contracts,
  otherMeans,
} from '@/data/moyensGeneraux';
import { obligations, attestations, legalDocuments, controls } from '@/data/conformite';
import {
  employees,
  employeeDocuments,
  habilitations,
  formations,
  visites,
  adminFollowUps,
} from '@/data/salaries';

function employeeName(employeeId: string): string {
  return employees.find((e) => e.id === employeeId)?.name ?? 'Salarié';
}

export function getAllTrackedItems(): TrackedItem[] {
  const items: TrackedItem[] = [];

  vehicles.forEach((v) => {
    items.push({
      id: `${v.id}-ct`,
      title: `Contrôle technique — ${v.name}`,
      description: `${v.plate} · conducteur ${v.driver}`,
      category: 'Véhicules',
      sectionId: 'moyens-vehicules',
      dueDate: v.controleTechniqueDate,
      status: computeStatus(v.controleTechniqueDate),
      isDocument: false,
    });
    items.push({
      id: `${v.id}-ass`,
      title: `Assurance véhicule — ${v.name}`,
      description: `${v.plate} · conducteur ${v.driver}`,
      category: 'Véhicules',
      sectionId: 'moyens-vehicules',
      dueDate: v.assuranceDate,
      status: computeStatus(v.assuranceDate),
      isDocument: true,
    });
  });

  phones.forEach((p) => {
    items.push({
      id: `${p.id}-contract`,
      title: `Fin d'engagement — ${p.model}`,
      description: `${p.number} · ${p.user}`,
      category: 'Téléphones',
      sectionId: 'moyens-telephones',
      dueDate: p.contractEndDate,
      status: computeStatus(p.contractEndDate),
      isDocument: false,
    });
  });

  insurances.forEach((i) => {
    items.push({
      id: `${i.id}-expiry`,
      title: i.title,
      description: `Assureur ${i.provider}`,
      category: 'Assurances',
      sectionId: 'moyens-assurances',
      dueDate: i.expiryDate,
      status: computeStatus(i.expiryDate),
      isDocument: true,
    });
  });

  equipments.forEach((e) => {
    items.push({
      id: `${e.id}-maint`,
      title: `Maintenance — ${e.name}`,
      description: e.location,
      category: 'Équipements',
      sectionId: 'moyens-equipements',
      dueDate: e.maintenanceDate,
      status: computeStatus(e.maintenanceDate),
      isDocument: false,
    });
  });

  contracts.forEach((c) => {
    items.push({
      id: `${c.id}-renewal`,
      title: c.title,
      description: `Prestataire ${c.provider}`,
      category: 'Contrats',
      sectionId: 'moyens-contrats',
      dueDate: c.renewalDate,
      status: computeStatus(c.renewalDate),
      isDocument: false,
    });
  });

  otherMeans.forEach((o) => {
    items.push({
      id: `${o.id}-review`,
      title: o.title,
      description: o.detail,
      category: 'Autres moyens',
      sectionId: 'moyens-autres',
      dueDate: o.reviewDate,
      status: computeStatus(o.reviewDate),
      isDocument: false,
    });
  });

  obligations.forEach((o) => {
    items.push({
      id: `${o.id}-due`,
      title: o.title,
      description: o.detail,
      category: 'Obligations réglementaires',
      sectionId: 'conformite-obligations',
      dueDate: o.dueDate,
      status: computeStatus(o.dueDate),
      isDocument: false,
    });
  });

  attestations.forEach((a) => {
    items.push({
      id: `${a.id}-expiry`,
      title: a.title,
      description: a.detail,
      category: 'Attestations',
      sectionId: 'conformite-attestations',
      dueDate: a.expiryDate,
      status: computeStatus(a.expiryDate),
      isDocument: true,
    });
  });

  legalDocuments.forEach((l) => {
    items.push({
      id: `${l.id}-due`,
      title: l.title,
      description: l.detail,
      category: 'Documents légaux',
      sectionId: 'conformite-documents',
      dueDate: l.dueDate,
      status: computeStatus(l.dueDate),
      isDocument: true,
    });
  });

  controls.forEach((c) => {
    items.push({
      id: `${c.id}-due`,
      title: c.title,
      description: c.detail,
      category: 'Contrôles',
      sectionId: 'conformite-controles',
      dueDate: c.dueDate,
      status: computeStatus(c.dueDate),
      isDocument: false,
    });
  });

  employeeDocuments.forEach((d) => {
    items.push({
      id: `${d.id}-due`,
      title: d.title,
      description: employeeName(d.employeeId),
      category: 'Documents salariés',
      sectionId: 'salaries-documents',
      dueDate: d.dueDate,
      status: computeStatus(d.dueDate),
      isDocument: true,
    });
  });

  habilitations.forEach((h) => {
    items.push({
      id: `${h.id}-expiry`,
      title: h.title,
      description: employeeName(h.employeeId),
      category: 'Habilitations',
      sectionId: 'salaries-habilitations',
      dueDate: h.expiryDate,
      status: computeStatus(h.expiryDate),
      isDocument: false,
    });
  });

  formations.forEach((f) => {
    items.push({
      id: `${f.id}-due`,
      title: f.title,
      description: employeeName(f.employeeId),
      category: 'Formations',
      sectionId: 'salaries-formations',
      dueDate: f.dueDate,
      status: computeStatus(f.dueDate),
      isDocument: false,
    });
  });

  visites.forEach((v) => {
    items.push({
      id: `${v.id}-due`,
      title: v.title,
      description: employeeName(v.employeeId),
      category: 'Visites et échéances',
      sectionId: 'salaries-visites',
      dueDate: v.dueDate,
      status: computeStatus(v.dueDate),
      isDocument: false,
    });
  });

  adminFollowUps.forEach((a) => {
    items.push({
      id: `${a.id}-due`,
      title: a.title,
      description: employeeName(a.employeeId),
      category: 'Suivi administratif',
      sectionId: 'salaries-suivi',
      dueDate: a.dueDate,
      status: computeStatus(a.dueDate),
      isDocument: false,
    });
  });

  return items;
}

export function getSortedByUrgency(list: TrackedItem[]): TrackedItem[] {
  return [...list].sort((a, b) => {
    const aDate = a.dueDate ? new Date(a.dueDate).getTime() : -Infinity;
    const bDate = b.dueDate ? new Date(b.dueDate).getTime() : -Infinity;
    return aDate - bDate;
  });
}

export function getKpis() {
  const items = getAllTrackedItems();
  return {
    conforme: items.filter((i) => i.status === 'conforme').length,
    aVenir: items.filter((i) => i.status === 'a_venir').length,
    aSurveiller: items.filter((i) => i.status === 'a_surveiller').length,
    critique: items.filter((i) => i.status === 'critique').length,
    salariesSuivis: employees.length,
    vehiculesSuivis: vehicles.length,
    documentsARenouveler: items.filter(
      (i) => i.isDocument && (i.status === 'a_surveiller' || i.status === 'critique')
    ).length,
  };
}
