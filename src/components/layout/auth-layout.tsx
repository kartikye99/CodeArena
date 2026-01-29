import type { ReactNode } from 'react';

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4">
      {children}
    </main>
  );
}
