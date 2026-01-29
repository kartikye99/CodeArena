import Link from 'next/link';
import { AppLayout } from '@/components/layout/app-layout';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { problems } from '@/lib/data';
import { Search } from 'lucide-react';

export default function DashboardPage() {
  const getDifficultyBadge = (difficulty: 'Easy' | 'Medium' | 'Hard') => {
    switch (difficulty) {
      case 'Easy':
        return <Badge variant="secondary" className="bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-100">Easy</Badge>;
      case 'Medium':
        return <Badge variant="secondary" className="bg-yellow-200 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100">Medium</Badge>;
      case 'Hard':
        return <Badge variant="secondary" className="bg-red-200 text-red-800 dark:bg-red-800 dark:text-red-100">Hard</Badge>;
    }
  };

  return (
    <AppLayout>
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-3xl">Problem Set</CardTitle>
          <CardDescription>Challenge yourself with our curated list of problems.</CardDescription>
          <div className="flex items-center gap-4 pt-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by tags..."
                className="w-full pl-8"
              />
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Difficulties</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead className="hidden md:table-cell">Difficulty</TableHead>
                <TableHead className="hidden lg:table-cell">Tags</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {problems.map((problem) => (
                <TableRow key={problem.id}>
                  <TableCell className="font-medium">{problem.title}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {getDifficultyBadge(problem.difficulty)}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    <div className="flex gap-1">
                      {problem.tags.map((tag) => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button asChild variant="ghost" size="sm">
                      <Link href={`/problems/${problem.id}`}>Solve</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </AppLayout>
  );
}
