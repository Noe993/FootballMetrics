import Navigation from '../components/Navigation';

const upcomingSessions = [
  { id: '1', date: '2024-01-20', time: '10:00', type: 'Tactical', duration: '90 min', focus: 'Pressing & Counter-attack', players: 18 },
  { id: '2', date: '2024-01-22', time: '10:00', type: 'Physical', duration: '75 min', focus: 'Endurance & Speed', players: 20 },
  { id: '3', date: '2024-01-24', time: '10:00', type: 'Technical', duration: '60 min', focus: 'Passing & Ball Control', players: 16 },
];

const drills = [
  { id: '1', name: 'Rondo 4v2', category: 'Possession', duration: '15 min', difficulty: 'Medium', description: 'Improve passing accuracy and quick decision making' },
  { id: '2', name: 'Small-Sided Games', category: 'Tactical', duration: '20 min', difficulty: 'High', description: '7v7 game focusing on positional play' },
  { id: '3', name: 'Finishing Drill', category: 'Attacking', duration: '15 min', difficulty: 'Medium', description: 'Various shooting scenarios from different angles' },
  { id: '4', name: 'Defensive Shape', category: 'Defensive', duration: '20 min', difficulty: 'High', description: 'Organizing defensive line and pressing triggers' },
  { id: '5', name: 'Crossing & Heading', category: 'Attacking', duration: '15 min', difficulty: 'Medium', description: 'Wide play and aerial duels' },
  { id: '6', name: 'Counter-Press', category: 'Tactical', duration: '15 min', difficulty: 'High', description: 'Immediate pressure after losing possession' },
];

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Training Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">Plan and track training sessions</p>
          </div>
          <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
            + Schedule Session
          </button>
        </div>

        {/* Training Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">Sessions This Month</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">12</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">Avg. Attendance</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">18.5</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Hours</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">18</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">Drills Library</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{drills.length}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Upcoming Sessions */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700 p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full mr-3"></span>
              Upcoming Sessions
            </h2>
            <div className="space-y-3">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{session.type} Training</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{session.date} at {session.time}</p>
                    </div>
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded">
                      {session.duration}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Focus: {session.focus}</p>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <span className="mr-4">👥 {session.players} players</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Training Focus Areas */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700 p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-600 rounded-full mr-3"></span>
              Training Focus
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Tactical</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">35%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Technical</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">25%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Physical</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">20%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Mental</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">20%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Drills Library */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Drills Library</h2>
            <button className="text-sm text-green-600 hover:text-green-700 font-semibold">
              + Add Drill
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {drills.map((drill) => (
              <div key={drill.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{drill.name}</h3>
                  <span className={`px-2 py-1 text-xs rounded ${
                    drill.difficulty === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                    drill.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  }`}>
                    {drill.difficulty}
                  </span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{drill.category}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{drill.description}</p>
                <div className="flex items-center text-xs text-gray-600 dark:text-gray-400">
                  <span>⏱️ {drill.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}


