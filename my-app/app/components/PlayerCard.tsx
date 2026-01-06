interface Player {
  id: string;
  name: string;
  position: string;
  number: number;
  age: number;
  goals: number;
  assists: number;
  matches: number;
  rating: number;
}

interface PlayerCardProps {
  player: Player;
}

export default function PlayerCard({ player }: PlayerCardProps) {
  const getRatingColor = (rating: number) => {
    if (rating >= 8) return 'text-green-600 dark:text-green-400';
    if (rating >= 6.5) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getRatingBg = (rating: number) => {
    if (rating >= 8) return 'bg-green-100 dark:bg-green-900/30';
    if (rating >= 6.5) return 'bg-yellow-100 dark:bg-yellow-900/30';
    return 'bg-red-100 dark:bg-red-900/30';
  };

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-5 border border-gray-100 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
            {player.number}
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white text-lg">{player.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{player.position}</p>
          </div>
        </div>
        <div className={`text-2xl font-bold px-3 py-2 rounded-lg ${getRatingBg(player.rating)} ${getRatingColor(player.rating)}`}>
          {player.rating.toFixed(1)}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 pt-3 border-t border-gray-100 dark:border-gray-700">
        <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">Goals</p>
          <p className="font-bold text-gray-900 dark:text-white text-lg mt-1">{player.goals}</p>
        </div>
        <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">Assists</p>
          <p className="font-bold text-gray-900 dark:text-white text-lg mt-1">{player.assists}</p>
        </div>
        <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">Matches</p>
          <p className="font-bold text-gray-900 dark:text-white text-lg mt-1">{player.matches}</p>
        </div>
      </div>
    </div>
  );
}


