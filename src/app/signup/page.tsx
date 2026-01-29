import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AuthLayout } from '@/components/layout/auth-layout';
import { Logo } from '@/components/logo';

export default function SignupPage() {
  return (
    <AuthLayout>
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
               <Logo />
            </div>
          <CardTitle className="font-headline text-2xl">Create an Account</CardTitle>
          <CardDescription>Enter your information to start your journey.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="full-name">Full Name</Label>
              <Input id="full-name" placeholder="John Doe" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Create Account
            </Button>
            <Button variant="outline" className="w-full">
               <svg role="img" viewBox="0 0 24 24" className="mr-2 h-4 w-4">
                <path
                  fill="currentColor"
                  d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.02 1.02-2.62 1.9-4.72 1.9-3.86 0-7-3.14-7-7s3.14-7 7-7c2.1 0 3.63.86 4.6 1.78l2.5-2.5C18.1.73 15.6 0 12.48 0 5.88 0 .48 5.4 .48 12s5.4 12 12 12c3.2 0 5.7-1.1 7.57-2.92 1.95-1.95 2.6-4.8 2.6-6.96 0-.6-.05-1.18-.16-1.72h-10.1z"
                ></path>
              </svg>
              Sign up with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <Link href="/" className="underline">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </AuthLayout>
  );
}
