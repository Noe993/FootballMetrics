import Navigation from '../components/Navigation';

const matches = [
  { id: '1', opponent: 'FC Barcelona', result: 'W', score: '3-1', date: '2024-01-15', venue: 'Home', goals: 3, possession: 58, shots: 14, shotsOnTarget: 8 },
  { id: '2', opponent: 'Real Madrid', result: 'D', score: '2-2', date: '2024-01-12', venue: 'Away', goals: 2, possession: 52, shots: 12, shotsOnTarget: 6 },
  { id: '3', opponent: 'Atletico Madrid', result: 'W', score: '2-0', date: '2024-01-08', venue: 'Home', goals: 2, possession: 61, shots: 10, shotsOnTarget: 5 },
  { id: '4', opponent: 'Sevilla FC', result: 'W', score: '4-2', date: '2024-01-05', venue: 'Away', goals: 4, possession: 55, shots: 16, shotsOnTarget: 9 },
  { id: '5', opponent: 'Valencia CF', result: 'L', score: '1-2', date: '2024-01-01', venue: 'Home', goals: 1, possession: 48, shots: 8, shotsOnTarget: 3 },
];

export default function MatchesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-10 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Match Analysis
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">Track and analyze match performance</p>
          </div>
          <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
            + Add Match
          </button>
        </div>

        {/* Match Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">Total Matches</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{matches.length}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">Wins</p>
            <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mt-2">
              {matches.filter(m => m.result === 'W').length}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">Draws</p>
            <p className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent mt-2">
              {matches.filter(m => m.result === 'D').length}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">Losses</p>
            <p className="text-3xl font-bold bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent mt-2">
              {matches.filter(m => m.result === 'L').length}
            </p>
          </div>
        </div>

        {/* Matches List */}
        <div className="space-y-4 mb-10">
          {matches.map((match) => (
            <div key={match.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <span className={`px-4 py-2 rounded-lg text-sm font-bold shadow-sm ${
                    match.result === 'W' ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' :
                    match.result === 'L' ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white' :
                    'bg-gradient-to-r from-yellow-500 to-orange-600 text-white'
                  }`}>
                    {match.result}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">vs {match.opponent}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{match.date} • {match.venue}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{match.score}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Goals</p>
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">{match.goals}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Possession</p>
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">{match.possession}%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Shots</p>
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">{match.shots}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Shots on Target</p>
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">{match.shotsOnTarget}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Match Analysis Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Performance Trends</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Goals per Match</span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {(matches.reduce((sum, m) => sum + m.goals, 0) / matches.length).toFixed(1)}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-green-600 h-3 rounded-full" 
                  style={{ width: `${(matches.reduce((sum, m) => sum + m.goals, 0) / matches.length / 4) * 100}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Avg. Possession</span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {Math.round(matches.reduce((sum, m) => sum + m.possession, 0) / matches.length)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-blue-600 h-3 rounded-full" 
                  style={{ width: `${matches.reduce((sum, m) => sum + m.possession, 0) / matches.length}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Shots per Match</span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {(matches.reduce((sum, m) => sum + m.shots, 0) / matches.length).toFixed(1)}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-purple-600 h-3 rounded-full" 
                  style={{ width: `${(matches.reduce((sum, m) => sum + m.shots, 0) / matches.length / 20) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


