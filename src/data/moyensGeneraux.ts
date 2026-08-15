import { Vehicle, Phone, Insurance, Equipment, Contract, OtherMean } from '@/types';
import { daysFromNow } from '@/utils/date';

export const vehicles: Vehicle[] = [
  {
    id: 'veh-1',
    name: 'Renault Kangoo',
    plate: 'AB-123-CD',
    category: 'Utilitaire',
    driver: 'Julien Marchand',
    controleTechniqueDate: daysFromNow(-18),
    assuranceDate: daysFromNow(210),
  },
  {
    id: 'veh-2',
    name: 'Peugeot Partner',
    plate: 'EF-456-GH',
    category: 'Utilitaire',
    driver: 'Sophie Lenoir',
    controleTechniqueDate: daysFromNow(28),
    assuranceDate: daysFromNow(150),
  },
  {
    id: 'veh-3',
    name: 'Citroën Berlingo',
    plate: 'IJ-789-KL',
    category: 'Utilitaire',
    driver: 'Marc Dubreuil',
    controleTechniqueDate: daysFromNow(240),
    assuranceDate: daysFromNow(9),
  },
  {
    id: 'veh-4',
    name: 'Renault Trafic',
    plate: 'MN-012-OP',
    category: 'Utilitaire',
    driver: 'Équipe technique',
    controleTechniqueDate: daysFromNow(70),
    assuranceDate: daysFromNow(300),
  },
];

export const phones: Phone[] = [
  {
    id: 'tel-1',
    model: 'iPhone 13',
    number: '+33 6 12 34 56 78',
    user: 'Julien Marchand',
    contractEndDate: daysFromNow(400),
  },
  {
    id: 'tel-2',
    model: 'Samsung Galaxy A54',
    number: '+33 6 98 76 54 32',
    user: 'Sophie Lenoir',
    contractEndDate: daysFromNow(20),
  },
  {
    id: 'tel-3',
    model: 'iPhone SE',
    number: '+33 6 45 12 78 90',
    user: 'Marc Dubreuil',
    contractEndDate: daysFromNow(-5),
  },
];

export const insurances: Insurance[] = [
  {
    id: 'ass-1',
    title: 'Responsabilité Civile Professionnelle',
    provider: 'AXA',
    expiryDate: daysFromNow(10),
  },
  {
    id: 'ass-2',
    title: 'Assurance Multirisque Locaux',
    provider: 'Allianz',
    expiryDate: daysFromNow(160),
  },
  {
    id: 'ass-3',
    title: 'Assurance Flotte Automobile',
    provider: 'MAIF',
    expiryDate: daysFromNow(35),
  },
];

export const equipments: Equipment[] = [
  {
    id: 'equ-1',
    name: 'Photocopieur Canon iR2625',
    location: 'Accueil',
    maintenanceDate: daysFromNow(50),
  },
  {
    id: 'equ-2',
    name: 'Serveur informatique principal',
    location: 'Local technique',
    maintenanceDate: daysFromNow(-3),
  },
  {
    id: 'equ-3',
    name: "Système d'alarme locaux",
    location: 'Bâtiment principal',
    maintenanceDate: daysFromNow(100),
  },
];

export const contracts: Contract[] = [
  {
    id: 'con-1',
    title: 'Contrat de maintenance informatique',
    provider: 'NetSecure',
    renewalDate: daysFromNow(75),
  },
  {
    id: 'con-2',
    title: 'Contrat de nettoyage des locaux',
    provider: 'CleanPro',
    renewalDate: daysFromNow(20),
  },
  {
    id: 'con-3',
    title: 'Contrat de téléphonie fixe / internet',
    provider: 'Orange Business',
    renewalDate: daysFromNow(280),
  },
];

export const otherMeans: OtherMean[] = [
  {
    id: 'aut-1',
    title: 'Local commercial',
    detail: 'Bail commercial 3/6/9',
    reviewDate: daysFromNow(500),
  },
  {
    id: 'aut-2',
    title: 'Coffre-fort',
    detail: 'Vérification annuelle',
    reviewDate: daysFromNow(25),
  },
];
