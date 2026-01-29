import Link from 'next/link';
import { Swords } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/dashboard" className="flex items-center gap-3 group" aria-label="CodeArena Home">
      <div className="p-2 bg-primary rounded-lg group-hover:bg-primary/90 transition-colors">
        <Swords className="h-6 w-6 text-primary-foreground" />
      </div>
      <h1 className="text-2xl font-bold font-headline text-primary hidden sm:block">
        CodeArena
      </h1>
    </Link>
  );
}
