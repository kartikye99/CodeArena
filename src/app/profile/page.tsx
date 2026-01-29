'use client';
import { AppLayout } from '@/components/layout/app-layout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { userProfileData } from '@/lib/data';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { ChartTooltipContent, ChartContainer } from '@/components/ui/chart';
import { Flame, Target, TrendingUp, User } from 'lucide-react';
import { format } from 'date-fns';

const chartConfig = {
  submissions: {
    label: 'Submissions',
    color: 'hsl(var(--primary))',
  },
};

export default function ProfilePage() {
  const { name, email, avatarUrl, stats, preferredLanguage, recentActivity } = userProfileData;

  const formattedChartData = recentActivity.map(item => ({
    ...item,
    date: format(new Date(item.date), 'MMM d'),
  }));

  return (
    <AppLayout>
      <div className="grid gap-8">
        <Card className="flex flex-col md:flex-row items-center gap-6 p-6">
          <Avatar className="h-24 w-24 border-4 border-primary">
            <AvatarImage src={avatarUrl} alt={name} data-ai-hint="person portrait" />
            <AvatarFallback className="text-3xl">{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left">
            <h1 className="font-headline text-3xl font-bold">{name}</h1>
            <p className="text-muted-foreground">{email}</p>
            <div className="mt-4">
              <label htmlFor="language-select" className="text-sm font-medium">Preferred Language</label>
              <Select defaultValue={preferredLanguage}>
                <SelectTrigger id="language-select" className="w-[180px] mt-1">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Python">Python</SelectItem>
                  <SelectItem value="Java">Java</SelectItem>
                  <SelectItem value="C++">C++</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Problems Solved</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.problemsSolved}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
              <Flame className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.currentStreak} days</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Longest Streak</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.longestStreak} days</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Recent Activity</CardTitle>
            <CardDescription>Your submission history for the last 7 days.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[200px] w-full">
              <ResponsiveContainer>
                <BarChart data={formattedChartData} margin={{ top: 20, right: 20, left: -10, bottom: 0 }}>
                  <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
                  <YAxis tickLine={false} axisLine={false} tickMargin={8} fontSize={12} allowDecimals={false}/>
                  <Tooltip cursor={false} content={<ChartTooltipContent />} />
                  <Bar dataKey="submissions" fill="var(--color-submissions)" radius={4} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
