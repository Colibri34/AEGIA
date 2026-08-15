import { Employee, EmployeeDocument, Habilitation, Formation, Visite, AdminFollowUp } from '@/types';
import { daysFromNow } from '@/utils/date';

export const employees: Employee[] = [
  { id: 'emp-1', name: 'Julien Marchand', role: "Chef d'atelier", hireDate: '2019-03-01' },
  { id: 'emp-2', name: 'Sophie Lenoir', role: 'Assistante administrative', hireDate: '2021-06-15' },
  { id: 'emp-3', name: 'Marc Dubreuil', role: 'Technicien', hireDate: '2022-01-10' },
  { id: 'emp-4', name: 'Camille Faure', role: 'Commerciale', hireDate: '2023-09-01' },
];

export const employeeDocuments: EmployeeDocument[] = [
  { id: 'edoc-1', employeeId: 'emp-1', title: "Carte d'identité", dueDate: daysFromNow(500) },
  { id: 'edoc-2', employeeId: 'emp-1', title: 'Contrat de travail signé', dueDate: daysFromNow(500) },
  { id: 'edoc-3', employeeId: 'emp-3', title: "Visite médicale d'embauche", dueDate: null },
  { id: 'edoc-4', employeeId: 'emp-4', title: 'RIB', dueDate: daysFromNow(500) },
  { id: 'edoc-5', employeeId: 'emp-2', title: 'Diplôme', dueDate: daysFromNow(500) },
];

export const habilitations: Habilitation[] = [
  { id: 'hab-1', employeeId: 'emp-1', title: 'CACES Chariot élévateur', expiryDate: daysFromNow(20) },
  { id: 'hab-2', employeeId: 'emp-3', title: 'Habilitation électrique B1V', expiryDate: daysFromNow(-8) },
  { id: 'hab-3', employeeId: 'emp-4', title: 'Permis de conduire (mention B)', expiryDate: daysFromNow(600) },
];

export const formations: Formation[] = [
  { id: 'for-1', employeeId: 'emp-2', title: 'Formation sécurité incendie', dueDate: daysFromNow(70) },
  { id: 'for-2', employeeId: 'emp-1', title: 'Formation gestes et postures (recyclage)', dueDate: daysFromNow(35) },
  { id: 'for-3', employeeId: 'emp-3', title: 'Formation habilitation électrique', dueDate: daysFromNow(200) },
];

export const visites: Visite[] = [
  { id: 'vis-1', employeeId: 'emp-1', title: 'Visite médicale périodique', dueDate: daysFromNow(-6) },
  { id: 'vis-2', employeeId: 'emp-2', title: 'Visite médicale périodique', dueDate: daysFromNow(40) },
  { id: 'vis-3', employeeId: 'emp-4', title: "Visite médicale d'embauche", dueDate: daysFromNow(18) },
];

export const adminFollowUps: AdminFollowUp[] = [
  { id: 'sad-1', employeeId: 'emp-1', title: 'Entretien annuel', dueDate: daysFromNow(50) },
  { id: 'sad-2', employeeId: 'emp-2', title: 'Avenant au contrat (temps partiel)', dueDate: daysFromNow(400) },
  { id: 'sad-3', employeeId: 'emp-3', title: "Fin de période d'essai", dueDate: daysFromNow(10) },
];
