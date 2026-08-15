export type ItemStatus = 'conforme' | 'a_venir' | 'a_surveiller' | 'critique';

export interface Vehicle {
  id: string;
  name: string;
  plate: string;
  category: string;
  driver: string;
  controleTechniqueDate: string;
  assuranceDate: string;
}

export interface Phone {
  id: string;
  model: string;
  number: string;
  user: string;
  contractEndDate: string;
}

export interface Insurance {
  id: string;
  title: string;
  provider: string;
  expiryDate: string;
}

export interface Equipment {
  id: string;
  name: string;
  location: string;
  maintenanceDate: string;
}

export interface Contract {
  id: string;
  title: string;
  provider: string;
  renewalDate: string;
}

export interface OtherMean {
  id: string;
  title: string;
  detail: string;
  reviewDate: string;
}

export interface Obligation {
  id: string;
  title: string;
  detail: string;
  dueDate: string;
}

export interface Attestation {
  id: string;
  title: string;
  detail: string;
  expiryDate: string;
}

export interface LegalDocument {
  id: string;
  title: string;
  detail: string;
  dueDate: string;
}

export interface Control {
  id: string;
  title: string;
  detail: string;
  dueDate: string;
}

export interface Employee {
  id: string;
  name: string;
  role: string;
  hireDate: string;
}

export interface EmployeeDocument {
  id: string;
  employeeId: string;
  title: string;
  dueDate: string | null;
}

export interface Habilitation {
  id: string;
  employeeId: string;
  title: string;
  expiryDate: string;
}

export interface Formation {
  id: string;
  employeeId: string;
  title: string;
  dueDate: string;
}

export interface Visite {
  id: string;
  employeeId: string;
  title: string;
  dueDate: string;
}

export interface AdminFollowUp {
  id: string;
  employeeId: string;
  title: string;
  dueDate: string | null;
}

export interface TrackedItem {
  id: string;
  title: string;
  description: string;
  category: string;
  sectionId: string;
  dueDate: string | null;
  status: ItemStatus;
  isDocument: boolean;
}

export interface KpiSummary {
  conforme: number;
  aVenir: number;
  aSurveiller: number;
  critique: number;
  salariesSuivis: number;
  vehiculesSuivis: number;
  documentsARenouveler: number;
}
