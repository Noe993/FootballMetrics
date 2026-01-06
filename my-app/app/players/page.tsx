import Navigation from '../components/Navigation';
import PlayerCard from '../components/PlayerCard';

// Mock player data
const players = [
  { id: '1', name: 'Carlos Rodriguez', position: 'Forward', number: 9, age: 24, goals: 15, assists: 8, matches: 22, rating: 8.5 },
  { id: '2', name: 'James Martinez', position: 'Midfielder', number: 10, age: 26, goals: 6, assists: 14, matches: 22, rating: 8.2 },
  { id: '3', name: 'David Silva', position: 'Defender', number: 4, age: 28, goals: 2, assists: 3, matches: 20, rating: 7.8 },
  { id: '4', name: 'Miguel Torres', position: 'Goalkeeper', number: 1, age: 30, goals: 0, assists: 0, matches: 22, rating: 8.0 },
  { id: '5', name: 'Luis Garcia', position: 'Forward', number: 7, age: 22, goals: 12, assists: 5, matches: 21, rating: 7.9 },
  { id: '6', name: 'Fernando Lopez', position: 'Midfielder', number: 8, age: 25, goals: 4, assists: 9, matches: 20, rating: 7.6 },
  { id: '7', name: 'Antonio Ruiz', position: 'Defender', number: 5, age: 27, goals: 1, assists: 2, matches: 19, rating: 7.5 },
  { id: '8', name: 'Jose Hernandez', position: 'Defender', number: 3, age: 29, goals: 0, assists: 4, matches: 18, rating: 7.4 },
];

export default function PlayersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-10 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Player Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">Manage your squad and track individual performance</p>
          </div>
          <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
            + Add Player
          </button>
        </div>

        {/* Player Statistics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">Total Players</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{players.length}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">Avg. Age</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
              {(players.reduce((sum, p) => sum + p.age, 0) / players.length).toFixed(1)}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">Total Goals</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
              {players.reduce((sum, p) => sum + p.goals, 0)}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">Avg. Rating</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
              {(players.reduce((sum, p) => sum + p.rating, 0) / players.length).toFixed(1)}
            </p>
          </div>
        </div>

        {/* Players Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              <span className="w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full mr-3"></span>
              Squad
            </h2>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all">
                All
              </button>
              <button className="px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all">
                Forwards
              </button>
              <button className="px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all">
                Midfielders
              </button>
              <button className="px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all">
                Defenders
              </button>
              <button className="px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all">
                Goalkeepers
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {players.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </div>

        {/* Detailed Player Statistics Table */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-600 rounded-full mr-3"></span>
              Detailed Statistics
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Player</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Position</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Matches</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Goals</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Assists</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Pass %</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Tackles</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Rating</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {players.map((player) => (
                  <tr key={player.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                          {player.number}
                        </div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{player.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">{player.position}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{player.matches}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{player.goals}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{player.assists}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {Math.floor(Math.random() * 20 + 75)}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {Math.floor(Math.random() * 30 + 10)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm font-semibold ${
                        player.rating >= 8 ? 'text-green-600' :
                        player.rating >= 6.5 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {player.rating.toFixed(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}


