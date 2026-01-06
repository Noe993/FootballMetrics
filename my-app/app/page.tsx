import Navigation from './components/Navigation';
import MetricCard from './components/MetricCard';
import PlayerCard from './components/PlayerCard';

// Mock data - in a real app, this would come from an API or database
const topPlayers = [
  { id: '1', name: 'Carlos Rodriguez', position: 'Forward', number: 9, age: 24, goals: 15, assists: 8, matches: 22, rating: 8.5 },
  { id: '2', name: 'James Martinez', position: 'Midfielder', number: 10, age: 26, goals: 6, assists: 14, matches: 22, rating: 8.2 },
  { id: '3', name: 'David Silva', position: 'Defender', number: 4, age: 28, goals: 2, assists: 3, matches: 20, rating: 7.8 },
  { id: '4', name: 'Miguel Torres', position: 'Goalkeeper', number: 1, age: 30, goals: 0, assists: 0, matches: 22, rating: 8.0 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">Overview of your team's performance</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <MetricCard 
            title="Total Matches" 
            value="22" 
            change="+3 this month" 
            icon="⚽"
            trend="up"
            gradient="from-blue-500 to-cyan-600"
          />
          <MetricCard 
            title="Win Rate" 
            value="68%" 
            change="+5% vs last season" 
            icon="🏆"
            trend="up"
            gradient="from-yellow-500 to-orange-600"
          />
          <MetricCard 
            title="Goals Scored" 
            value="48" 
            change="+12 this month" 
            icon="🎯"
            trend="up"
            gradient="from-red-500 to-pink-600"
          />
          <MetricCard 
            title="Avg. Possession" 
            value="58%" 
            change="+3% improvement" 
            icon="📊"
            trend="up"
            gradient="from-purple-500 to-indigo-600"
          />
        </div>

        {/* Recent Performance Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full mr-3"></span>
              Team Performance
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Pass Accuracy</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">85%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full shadow-sm" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Shot Accuracy</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">42%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-600 h-3 rounded-full shadow-sm" style={{ width: '42%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Tackle Success</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">72%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-600 h-3 rounded-full shadow-sm" style={{ width: '72%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Aerial Duels Won</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">61%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-600 h-3 rounded-full shadow-sm" style={{ width: '61%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-600 rounded-full mr-3"></span>
              Physical Metrics
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Average Distance Covered</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">11.2 km</p>
                </div>
                <span className="text-3xl">🏃</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Top Speed</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">34.5 km/h</p>
                </div>
                <span className="text-3xl">⚡</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Sprints</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">127</p>
                </div>
                <span className="text-3xl">💨</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Recovery Time</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">48h</p>
                </div>
                <span className="text-3xl">⏱️</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Performers */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <span className="w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full mr-3"></span>
            Top Performers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {topPlayers.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </div>

        {/* Recent Matches */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-600 rounded-full mr-3"></span>
            Recent Matches
          </h2>
          <div className="space-y-3">
            {[
              { opponent: 'FC Barcelona', result: 'W', score: '3-1', date: '2024-01-15' },
              { opponent: 'Real Madrid', result: 'D', score: '2-2', date: '2024-01-12' },
              { opponent: 'Atletico Madrid', result: 'W', score: '2-0', date: '2024-01-08' },
            ].map((match, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-md transition-all duration-200">
                <div className="flex items-center space-x-4">
                  <span className={`px-4 py-2 rounded-lg text-sm font-bold shadow-sm ${
                    match.result === 'W' ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' :
                    match.result === 'L' ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white' :
                    'bg-gradient-to-r from-yellow-500 to-orange-600 text-white'
                  }`}>
                    {match.result}
                  </span>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">vs {match.opponent}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{match.date}</p>
                  </div>
                </div>
                <p className="text-2xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white bg-clip-text text-transparent">{match.score}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
