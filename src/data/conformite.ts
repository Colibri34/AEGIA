import { Obligation, Attestation, LegalDocument, Control } from '@/types';
import { daysFromNow } from '@/utils/date';

export const obligations: Obligation[] = [
  {
    id: 'obl-1',
    title: "Document Unique d'Évaluation des Risques (DUERP)",
    detail: 'Mise à jour annuelle obligatoire',
    dueDate: daysFromNow(-10),
  },
  {
    id: 'obl-2',
    title: 'Affichage obligatoire (sécurité, égalité H/F)',
    detail: 'Vérification de conformité des affichages',
    dueDate: daysFromNow(60),
  },
  {
    id: 'obl-3',
    title: 'Registre du personnel',
    detail: 'Mise à jour des entrées et sorties',
    dueDate: daysFromNow(30),
  },
  {
    id: 'obl-4',
    title: 'Bilan social simplifié',
    detail: 'Dépôt annuel',
    dueDate: daysFromNow(200),
  },
];

export const attestations: Attestation[] = [
  {
    id: 'att-1',
    title: "Attestation d'assurance décennale",
    detail: 'À transmettre aux clients sur demande',
    expiryDate: daysFromNow(25),
  },
  {
    id: 'att-2',
    title: 'Attestation de vigilance URSSAF',
    detail: 'Requise pour les marchés en cours',
    expiryDate: daysFromNow(-2),
  },
  {
    id: 'att-3',
    title: 'Attestation de régularité fiscale',
    detail: 'Justificatif administratif',
    expiryDate: daysFromNow(150),
  },
];

export const legalDocuments: LegalDocument[] = [
  {
    id: 'leg-1',
    title: 'Statuts de la société',
    detail: 'Dernière mise à jour enregistrée',
    dueDate: daysFromNow(400),
  },
  {
    id: 'leg-2',
    title: 'Extrait Kbis',
    detail: 'À renouveler pour dossiers en cours',
    dueDate: daysFromNow(40),
  },
  {
    id: 'leg-3',
    title: 'Règlement intérieur',
    detail: 'Révision requise suite à évolution légale',
    dueDate: daysFromNow(-15),
  },
];

export const controls: Control[] = [
  {
    id: 'ctl-1',
    title: 'Contrôle périodique électrique',
    detail: 'Organisme agréé',
    dueDate: daysFromNow(55),
  },
  {
    id: 'ctl-2',
    title: 'Vérification des extincteurs',
    detail: 'Contrôle annuel obligatoire',
    dueDate: daysFromNow(8),
  },
  {
    id: 'ctl-3',
    title: 'Contrôle des installations de chauffage',
    detail: 'Entretien réglementaire',
    dueDate: daysFromNow(300),
  },
];
