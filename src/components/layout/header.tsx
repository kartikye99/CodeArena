import Link from 'next/link';
import { Logo } from '@/components/logo';
import { UserNav } from './user-nav';
import { Button } from '../ui/button';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-card px-4 md:px-6 z-50">
      <Logo />
      <nav className="flex-1 flex items-center gap-6 text-lg font-medium">
        <Link
          href="/dashboard"
          className="text-foreground/80 transition-colors hover:text-foreground text-sm"
        >
          Problems
        </Link>
        <Link
          href="/leaderboard"
          className="text-foreground/80 transition-colors hover:text-foreground text-sm"
        >
          Leaderboard
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <UserNav />
      </div>
    </header>
  );
}
