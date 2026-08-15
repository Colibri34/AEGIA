import { ItemStatus } from '@/types';

interface StatusConfig {
  label: string;
  badgeClass: string;
  dotClass: string;
}

export const STATUS_CONFIG: Record<ItemStatus, StatusConfig> = {
  conforme: {
    label: 'Conforme',
    badgeClass: 'bg-success-50 text-success-700 ring-1 ring-inset ring-success-200',
    dotClass: 'bg-success-500',
  },
  a_venir: {
    label: 'À venir',
    badgeClass: 'bg-cream-200/70 text-chocolate-700 ring-1 ring-inset ring-cream-400',
    dotClass: 'bg-chocolate-400',
  },
  a_surveiller: {
    label: 'À surveiller',
    badgeClass: 'bg-warning-50 text-warning-700 ring-1 ring-inset ring-warning-200',
    dotClass: 'bg-warning-500',
  },
  critique: {
    label: 'Critique',
    badgeClass: 'bg-error-50 text-error-700 ring-1 ring-inset ring-error-200',
    dotClass: 'bg-error-500',
  },
};
