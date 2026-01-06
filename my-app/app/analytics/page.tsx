import Navigation from '../components/Navigation';

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Advanced Analytics
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">Deep insights into team and player performance</p>
        </div>

        {/* Key Performance Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">Expected Goals (xG)</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">2.3</p>
            <p className="text-xs text-green-600 mt-1">↑ 0.4 vs avg</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">Expected Goals Against (xGA)</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">1.1</p>
            <p className="text-xs text-green-600 mt-1">↓ 0.3 vs avg</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">Progressive Passes</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">127</p>
            <p className="text-xs text-green-600 mt-1">↑ 15% improvement</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">Pressures per 90</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">142</p>
            <p className="text-xs text-yellow-600 mt-1">→ Stable</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Tactical Analysis */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700 p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-600 rounded-full mr-3"></span>
              Tactical Metrics
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Build-up Play Speed</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">7.2s</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '72%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">High Press Intensity</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">68%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: '68%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Counter-Attack Success</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">42%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '42%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Set Piece Goals</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">8</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Player Development */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700 p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full mr-3"></span>
              Player Development
            </h2>
            <div className="space-y-3">
              {[
                { name: 'Carlos Rodriguez', improvement: '+12%', metric: 'Goals', trend: 'up' },
                { name: 'James Martinez', improvement: '+8%', metric: 'Assists', trend: 'up' },
                { name: 'David Silva', improvement: '+15%', metric: 'Tackles', trend: 'up' },
                { name: 'Luis Garcia', improvement: '+5%', metric: 'Pass Accuracy', trend: 'up' },
              ].map((player, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{player.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{player.metric}</p>
                  </div>
                  <span className="text-green-600 font-semibold">{player.improvement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Heat Maps and Zones */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700 p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-red-500 to-pink-600 rounded-full mr-3"></span>
              Attacking Zones
            </h2>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">⚽</div>
                <p className="text-gray-600 dark:text-gray-400">Heat Map Visualization</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">Most attacks from left wing (42%)</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700 p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-600 rounded-full mr-3"></span>
              Defensive Zones
            </h2>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🛡️</div>
                <p className="text-gray-600 dark:text-gray-400">Defensive Actions</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">Strongest in central areas (68% success)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Comparison */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-indigo-600 rounded-full mr-3"></span>
              Season Comparison
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Goals Scored</p>
              <div className="flex items-end space-x-2">
                <div className="flex-1">
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-t h-16 flex items-end">
                    <div className="bg-green-600 w-full h-12 rounded-t"></div>
                  </div>
                  <p className="text-xs text-center mt-1 text-gray-600 dark:text-gray-400">This Season</p>
                  <p className="text-center font-semibold text-gray-900 dark:text-white">48</p>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-t h-16 flex items-end">
                    <div className="bg-gray-400 w-full h-10 rounded-t"></div>
                  </div>
                  <p className="text-xs text-center mt-1 text-gray-600 dark:text-gray-400">Last Season</p>
                  <p className="text-center font-semibold text-gray-900 dark:text-white">42</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Win Rate</p>
              <div className="flex items-end space-x-2">
                <div className="flex-1">
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-t h-16 flex items-end">
                    <div className="bg-green-600 w-full h-14 rounded-t"></div>
                  </div>
                  <p className="text-xs text-center mt-1 text-gray-600 dark:text-gray-400">This Season</p>
                  <p className="text-center font-semibold text-gray-900 dark:text-white">68%</p>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-t h-16 flex items-end">
                    <div className="bg-gray-400 w-full h-12 rounded-t"></div>
                  </div>
                  <p className="text-xs text-center mt-1 text-gray-600 dark:text-gray-400">Last Season</p>
                  <p className="text-center font-semibold text-gray-900 dark:text-white">58%</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Avg. Possession</p>
              <div className="flex items-end space-x-2">
                <div className="flex-1">
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-t h-16 flex items-end">
                    <div className="bg-green-600 w-full h-12 rounded-t"></div>
                  </div>
                  <p className="text-xs text-center mt-1 text-gray-600 dark:text-gray-400">This Season</p>
                  <p className="text-center font-semibold text-gray-900 dark:text-white">58%</p>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-t h-16 flex items-end">
                    <div className="bg-gray-400 w-full h-11 rounded-t"></div>
                  </div>
                  <p className="text-xs text-center mt-1 text-gray-600 dark:text-gray-400">Last Season</p>
                  <p className="text-center font-semibold text-gray-900 dark:text-white">55%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


