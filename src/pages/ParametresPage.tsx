import { useState } from 'react';
import { Building2, Bell, User, Palette, Shield, ChevronRight } from 'lucide-react';

interface ParametresPageProps {
  readIds: Set<string>;
  onMarkAllRead: () => void;
}

export function ParametresPage({ readIds, onMarkAllRead }: ParametresPageProps) {
  const [notifEnabled, setNotifEnabled] = useState(true);
  const [criticAlertsOnly, setCriticAlertsOnly] = useState(false);

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display text-xl font-semibold text-chocolate-900 sm:text-2xl lg:text-3xl">
          Paramètres
        </h1>
        <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-chocolate-500">
          Gérez les préférences de l'application et les informations de l'entreprise.
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
        {/* Informations entreprise */}
        <section className="rounded-2xl border border-cream-300 bg-white p-6 shadow-soft">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-chocolate-50">
              <Building2 className="h-5 w-5 text-chocolate-600" />
            </div>
            <h2 className="font-display text-base font-semibold text-chocolate-900">
              Informations entreprise
            </h2>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex flex-col gap-1 border-b border-cream-200 pb-2 sm:flex-row sm:justify-between sm:gap-4">
              <span className="text-chocolate-500">Raison sociale</span>
              <span className="font-medium text-chocolate-900">COLIBRI Conseil &amp; Assistance</span>
            </div>
            <div className="flex flex-col gap-1 border-b border-cream-200 pb-2 sm:flex-row sm:justify-between sm:gap-4">
              <span className="text-chocolate-500">Forme juridique</span>
              <span className="font-medium text-chocolate-900">SARL</span>
            </div>
            <div className="flex flex-col gap-1 border-b border-cream-200 pb-2 sm:flex-row sm:justify-between sm:gap-4">
              <span className="text-chocolate-500">SIRET</span>
              <span className="font-medium text-chocolate-900">123 456 789 00012</span>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
              <span className="text-chocolate-500">Effectif</span>
              <span className="font-medium text-chocolate-900">4 salariés</span>
            </div>
          </div>
        </section>

        {/* Préférences de notifications */}
        <section className="rounded-2xl border border-cream-300 bg-white p-6 shadow-soft">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-50">
              <Bell className="h-5 w-5 text-gold-600" />
            </div>
            <h2 className="font-display text-base font-semibold text-chocolate-900">
              Préférences de notifications
            </h2>
          </div>
          <div className="space-y-4">
            <label className="flex items-center justify-between">
              <span className="text-sm text-chocolate-700">Activer les notifications</span>
              <button
                onClick={() => setNotifEnabled(!notifEnabled)}
                className={`relative h-7 w-12 rounded-full transition-colors ${
                  notifEnabled ? 'bg-chocolate-700' : 'bg-cream-300'
                }`}
              >
                <span
                  className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${
                    notifEnabled ? 'translate-x-5' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm text-chocolate-700">Alertes critiques uniquement</span>
              <button
                onClick={() => setCriticAlertsOnly(!criticAlertsOnly)}
                className={`relative h-7 w-12 rounded-full transition-colors ${
                  criticAlertsOnly ? 'bg-chocolate-700' : 'bg-cream-300'
                }`}
              >
                <span
                  className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${
                    criticAlertsOnly ? 'translate-x-5' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </label>
            <button
              onClick={onMarkAllRead}
              disabled={readIds.size === 0}
              className="w-full rounded-lg border border-cream-300 px-4 py-2.5 text-sm font-medium text-chocolate-600 transition-colors hover:bg-cream-100 disabled:opacity-50 disabled:hover:bg-white"
            >
              Marquer toutes les notifications comme lues
            </button>
          </div>
        </section>

        {/* Compte utilisateur */}
        <section className="rounded-2xl border border-cream-300 bg-white p-6 shadow-soft">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-success-50">
              <User className="h-5 w-5 text-success-600" />
            </div>
            <h2 className="font-display text-base font-semibold text-chocolate-900">Compte utilisateur</h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-chocolate-700 text-base font-semibold text-cream-50">
              CA
            </div>
            <div>
              <p className="text-sm font-medium text-chocolate-900">Compte administrateur</p>
              <p className="text-xs text-chocolate-500">admin@colibri-conseil.fr</p>
            </div>
          </div>
        </section>

        {/* Apparence */}
        <section className="rounded-2xl border border-cream-300 bg-white p-6 shadow-soft">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-warning-50">
              <Palette className="h-5 w-5 text-warning-600" />
            </div>
            <h2 className="font-display text-base font-semibold text-chocolate-900">Apparence</h2>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-cream-50 px-4 py-3">
            <span className="text-sm text-chocolate-700">Thème</span>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-chocolate-900">
              Crème &amp; chocolat
              <ChevronRight className="h-4 w-4 text-chocolate-300" />
            </span>
          </div>
          <div className="mt-3 flex items-center justify-between rounded-lg bg-cream-50 px-4 py-3">
            <span className="text-sm text-chocolate-700">Sécurité &amp; confidentialité</span>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-chocolate-900">
              <Shield className="h-4 w-4 text-chocolate-400" />
              Configuré
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
