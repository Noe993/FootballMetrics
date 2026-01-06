interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon?: string;
  trend?: 'up' | 'down' | 'neutral';
  gradient?: string;
}

export default function MetricCard({ title, value, change, icon, trend, gradient }: MetricCardProps) {
  const trendColor = 
    trend === 'up' ? 'text-green-600 dark:text-green-400' : 
    trend === 'down' ? 'text-red-600 dark:text-red-400' : 
    'text-gray-500 dark:text-gray-400';

  const gradientClass = gradient || 'from-green-500 to-emerald-600';

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700 overflow-hidden">
      {/* Gradient accent */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientClass}`}></div>
      
      <div className="flex items-center justify-between relative z-10">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">{title}</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2 mb-1">{value}</p>
          {change && (
            <p className={`text-sm font-semibold mt-2 flex items-center ${trendColor}`}>
              {trend === 'up' && <span className="mr-1">↑</span>}
              {trend === 'down' && <span className="mr-1">↓</span>}
              {change}
            </p>
          )}
        </div>
        {icon && (
          <div className="ml-4">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradientClass} opacity-10 group-hover:opacity-20 transition-opacity duration-300 flex items-center justify-center`}>
              <span className="text-3xl">{icon}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


