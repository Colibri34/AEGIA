import {
  Home,
  Building2,
  ShieldCheck,
  Users,
  Bell,
  Settings,
  LucideIcon,
} from 'lucide-react';

export interface NavChild {
  id: string;
  label: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  children?: NavChild[];
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Accueil', icon: Home },
  {
    id: 'moyens',
    label: 'Moyens généraux',
    icon: Building2,
    children: [
      { id: 'moyens-vehicules', label: 'Véhicules' },
      { id: 'moyens-telephones', label: 'Téléphones' },
      { id: 'moyens-assurances', label: 'Assurances' },
      { id: 'moyens-equipements', label: 'Équipements' },
      { id: 'moyens-contrats', label: 'Contrats' },
      { id: 'moyens-autres', label: "Autres moyens" },
    ],
  },
  {
    id: 'conformite',
    label: 'Conformité',
    icon: ShieldCheck,
    children: [
      { id: 'conformite-obligations', label: 'Obligations réglementaires' },
      { id: 'conformite-attestations', label: 'Attestations' },
      { id: 'conformite-documents', label: 'Documents légaux' },
      { id: 'conformite-controles', label: 'Contrôles' },
      { id: 'conformite-echeances', label: 'Échéances' },
    ],
  },
  {
    id: 'salaries',
    label: 'Salariés',
    icon: Users,
    children: [
      { id: 'salaries-dossiers', label: 'Dossiers salariés' },
      { id: 'salaries-documents', label: 'Documents' },
      { id: 'salaries-habilitations', label: 'Habilitations' },
      { id: 'salaries-formations', label: 'Formations' },
      { id: 'salaries-visites', label: 'Visites et échéances' },
      { id: 'salaries-suivi', label: 'Suivi administratif' },
    ],
  },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'parametres', label: 'Paramètres', icon: Settings },
];
