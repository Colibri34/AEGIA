import {
  ShieldCheck,
  CalendarClock,
  AlertCircle,
  AlertTriangle,
  Users,
  Car,
  FileText,
} from 'lucide-react';
import { getAllTrackedItems, getKpis, getSortedByUrgency } from '@/data/trackedItems';
import { KpiCard } from '@/components/ui/KpiCard';
import { AlertCard } from '@/components/ui/AlertCard';

interface DashboardPageProps {
  onNavigate: (sectionId: string) => void;
}

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  const allItems = getAllTrackedItems();
  const kpis = getKpis();

  const criticalItems = getSortedByUrgency(
    allItems.filter((i) => i.status === 'critique')
  );
  const attentionItems = getSortedByUrgency(
    allItems.filter((i) => i.status === 'a_surveiller')
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-xl font-semibold text-chocolate-900 sm:text-2xl lg:text-3xl">
          Tableau de bord
        </h1>
        <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-chocolate-500">
          Vue d'ensemble de la situation administrative et réglementaire de l'entreprise.
          Identifiez rapidement ce qui est à jour, ce qui arrive à échéance et ce qui nécessite une action.
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-7">
        <KpiCard label="Éléments conformes" value={kpis.conforme} icon={ShieldCheck} tone="success" />
        <KpiCard label="Échéances à venir" value={kpis.aVenir} icon={CalendarClock} tone="gold" />
        <KpiCard label="À surveiller" value={kpis.aSurveiller} icon={AlertCircle} tone="warning" />
        <KpiCard label="Alertes critiques" value={kpis.critique} icon={AlertTriangle} tone="error" />
        <KpiCard label="Salariés suivis" value={kpis.salariesSuivis} icon={Users} tone="neutral" />
        <KpiCard label="Véhicules suivis" value={kpis.vehiculesSuivis} icon={Car} tone="neutral" />
        <KpiCard label="Documents à renouveler" value={kpis.documentsARenouveler} icon={FileText} tone="warning" />
      </div>

      {/* Alertes critiques */}
      <section>
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-error-100">
            <AlertTriangle className="h-4 w-4 text-error-600" />
          </div>
          <h2 className="font-display text-lg font-semibold text-chocolate-900">
            Alertes critiques
          </h2>
          <span className="rounded-full bg-error-50 px-2 py-0.5 text-xs font-semibold text-error-700 ring-1 ring-inset ring-error-200">
            {criticalItems.length}
          </span>
        </div>
        {criticalItems.length > 0 ? (
          <div className="grid gap-3 lg:grid-cols-2">
            {criticalItems.map((item) => (
              <AlertCard key={item.id} item={item} tone="critical" onNavigate={onNavigate} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-cream-300 bg-white p-6 text-sm text-chocolate-500">
            Aucune alerte critique. Tout est sous contrôle.
          </div>
        )}
      </section>

      {/* Actions / points de vigilance */}
      <section>
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-warning-100">
            <AlertCircle className="h-4 w-4 text-warning-600" />
          </div>
          <h2 className="font-display text-lg font-semibold text-chocolate-900">
            Actions / points de vigilance
          </h2>
          <span className="rounded-full bg-warning-50 px-2 py-0.5 text-xs font-semibold text-warning-700 ring-1 ring-inset ring-warning-200">
            {attentionItems.length}
          </span>
        </div>
        {attentionItems.length > 0 ? (
          <div className="grid gap-3 lg:grid-cols-2">
            {attentionItems.map((item) => (
              <AlertCard key={item.id} item={item} tone="attention" onNavigate={onNavigate} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-cream-300 bg-white p-6 text-sm text-chocolate-500">
            Aucun point de vigilance. Aucune action requise dans l'immédiat.
          </div>
        )}
      </section>
    </div>
  );
}
