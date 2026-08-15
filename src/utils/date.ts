import { ItemStatus } from '@/types';

export function daysFromNow(n: number): string {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
}

function diffInDays(dateStr: string): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const date = new Date(`${dateStr}T00:00:00`);
  return Math.round((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
}

export function computeStatus(dateStr: string | null): ItemStatus {
  if (!dateStr) return 'critique';
  const diff = diffInDays(dateStr);
  if (diff <= 15) return 'critique';
  if (diff <= 45) return 'a_surveiller';
  if (diff <= 90) return 'a_venir';
  return 'conforme';
}

export function formatDateFR(dateStr: string): string {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

export function daysLabel(dateStr: string | null): string {
  if (!dateStr) return 'Manquant';
  const diff = diffInDays(dateStr);
  if (diff < 0) return `En retard de ${Math.abs(diff)} j`;
  if (diff === 0) return "Aujourd'hui";
  if (diff === 1) return 'Demain';
  return `Dans ${diff} j`;
}
