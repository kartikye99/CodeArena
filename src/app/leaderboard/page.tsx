import { AppLayout } from '@/components/layout/app-layout';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { leaderboardData } from '@/lib/data';
import { Crown } from 'lucide-react';

export default function LeaderboardPage() {

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="h-5 w-5 text-yellow-500" />;
    if (rank === 2) return <Crown className="h-5 w-5 text-gray-400" />;
    if (rank === 3) return <Crown className="h-5 w-5 text-orange-400" />;
    return <span className="text-muted-foreground">{rank}</span>;
  }

  return (
    <AppLayout>
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-3xl">Global Leaderboard</CardTitle>
          <CardDescription>See how you stack up against the best in the world.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Rank</TableHead>
                <TableHead>User</TableHead>
                <TableHead className="text-right">Problems Solved</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboardData.map((user) => (
                <TableRow key={user.rank} className={user.username === 'Alex Turner' ? 'bg-accent/50' : ''}>
                  <TableCell>
                    <div className="flex items-center justify-center h-full w-full font-bold text-lg">
                      {getRankIcon(user.rank)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={user.avatarUrl} data-ai-hint="person portrait"/>
                        <AvatarFallback>{user.username.charAt(0).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{user.username}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-semibold text-lg">{user.problemsSolved}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </AppLayout>
  );
}
