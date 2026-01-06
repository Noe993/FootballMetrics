import Navigation from '../components/Navigation';

const injuries = [
  { id: '1', player: 'Carlos Rodriguez', type: 'Hamstring Strain', date: '2024-01-10', status: 'Recovering', expectedReturn: '2024-01-25', severity: 'Moderate' },
  { id: '2', player: 'Fernando Lopez', type: 'Ankle Sprain', date: '2024-01-05', status: 'Recovered', expectedReturn: '2024-01-15', severity: 'Minor' },
  { id: '3', player: 'Luis Garcia', type: 'Knee Contusion', date: '2024-01-12', status: 'Monitoring', expectedReturn: '2024-01-20', severity: 'Minor' },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Recovered':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case 'Recovering':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    case 'Monitoring':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
  }
};

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'Severe':
      return 'text-red-600';
    case 'Moderate':
      return 'text-yellow-600';
    case 'Minor':
      return 'text-green-600';
    default:
      return 'text-gray-600';
  }
};

export default function InjuriesPage() {
  const activeInjuries = injuries.filter(i => i.status !== 'Recovered');
  const recoveredInjuries = injuries.filter(i => i.status === 'Recovered');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Injury Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">Track player injuries and recovery progress</p>
          </div>
          <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
            + Report Injury
          </button>
        </div>

        {/* Injury Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">Active Injuries</p>
            <p className="text-2xl font-bold text-yellow-600">{activeInjuries.length}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">Recovered This Month</p>
            <p className="text-2xl font-bold text-green-600">{recoveredInjuries.length}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">Avg. Recovery Time</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">12 days</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">Injury Prevention Score</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">8.2/10</p>
          </div>
        </div>

        {/* Active Injuries */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <span className="w-1 h-6 bg-gradient-to-b from-red-500 to-pink-600 rounded-full mr-3"></span>
            Active Injuries
          </h2>
          <div className="space-y-4">
            {activeInjuries.map((injury) => (
              <div key={injury.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{injury.player}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{injury.type}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(injury.status)}`}>
                      {injury.status}
                    </span>
                    <span className={`text-sm font-semibold ${getSeverityColor(injury.severity)}`}>
                      {injury.severity}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Injury Date</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{injury.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Expected Return</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{injury.expectedReturn}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Days Out</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {Math.ceil((new Date(injury.expectedReturn).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Injury Prevention */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700 p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full mr-3"></span>
              Injury Prevention Metrics
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">Common Injury Types</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Muscle Strains</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Joint Sprains</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">30%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Contusions</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">Recovery Protocols</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">RICE Protocol</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Rest, Ice, Compression, Elevation</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">Physiotherapy</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">3 sessions per week</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">Gradual Return</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Progressive training load</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


