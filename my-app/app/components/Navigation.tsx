'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const navItems = [
  { name: 'Dashboard', href: '/' },
  { name: 'Players', href: '/players' },
  { name: 'Matches', href: '/matches' },
  { name: 'Training', href: '/training' },
  { name: 'Analytics', href: '/analytics' },
  { name: 'Injuries', href: '/injuries' },
];

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === '/') {
      window.location.reload();
    } else {
      router.push('/');
    }
  };

  return (
    <nav className="bg-gradient-to-r from-green-700 via-green-600 to-green-700 text-white shadow-xl border-b border-green-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link 
                href="/" 
                onClick={handleLogoClick}
                className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <span className="text-2xl">⚽</span>
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                  FootballMetrics
                </h1>
              </Link>
            </div>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm'
                        : 'text-green-100 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

