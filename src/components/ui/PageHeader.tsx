interface Tab {
  id: string;
  label: string;
}

interface PageHeaderProps {
  title: string;
  description: string;
  tabs?: Tab[];
  activeTab?: string;
  onTabChange?: (id: string) => void;
}

export function PageHeader({ title, description, tabs, activeTab, onTabChange }: PageHeaderProps) {
  return (
    <div className="mb-6">
      <h1 className="font-display text-xl font-semibold text-chocolate-900 sm:text-2xl lg:text-3xl">
        {title}
      </h1>
      <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-chocolate-500">{description}</p>
      {tabs && tabs.length > 0 && (
        <div className="mt-5 overflow-x-auto no-scrollbar lg:mt-6">
          <div className="flex min-w-max gap-1 border-b border-cream-300 pb-px">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange?.(tab.id)}
                  className={`relative shrink-0 rounded-t-lg px-3 py-2.5 text-sm font-medium transition-colors sm:px-4 ${
                    isActive
                      ? 'text-chocolate-900'
                      : 'text-chocolate-400 hover:text-chocolate-600'
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-chocolate-600 sm:inset-x-3" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
