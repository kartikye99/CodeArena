'use client';
import { useState } from 'react';
import { AppLayout } from '@/components/layout/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { problems, submissions, Submission } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Play, Send, Clock, MemoryStick, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

type Verdict = 'Accepted' | 'Wrong Answer' | 'Time Limit Exceeded' | 'Runtime Error' | 'Pending';

type SubmissionResult = {
  verdict: Verdict;
  executionTime: number;
  memoryUsage: number;
} | null;

export default function ProblemPage({ params }: { params: { id: string } }) {
  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState('');
  const [result, setResult] = useState<SubmissionResult>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const problem = problems.find((p) => p.id === params.id);
  const problemSubmissions = submissions.filter(s => s.problemId === params.id);

  if (!problem) {
    notFound();
  }

  const handleRun = () => {
    setIsSubmitting(true);
    setResult({ verdict: 'Pending', executionTime: 0, memoryUsage: 0 });
    setTimeout(() => {
        // Mock result
        const mockResult: SubmissionResult = {
            verdict: 'Accepted',
            executionTime: Math.floor(Math.random() * 500) + 50,
            memoryUsage: Math.floor(Math.random() * 50) + 10,
        };
        setResult(mockResult);
        setIsSubmitting(false);
    }, 1500);
  };
  
  const getVerdictBadge = (verdict: Verdict) => {
    const commonClasses = "font-semibold";
    switch (verdict) {
      case 'Accepted':
        return <Badge className={`bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 ${commonClasses}`}><CheckCircle className="mr-1 h-3 w-3" />Accepted</Badge>;
      case 'Wrong Answer':
        return <Badge className={`bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 ${commonClasses}`}><XCircle className="mr-1 h-3 w-3" />Wrong Answer</Badge>;
      case 'Time Limit Exceeded':
        return <Badge className={`bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 ${commonClasses}`}><Clock className="mr-1 h-3 w-3" />Time Limit Exceeded</Badge>;
      case 'Runtime Error':
        return <Badge className={`bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 ${commonClasses}`}><AlertTriangle className="mr-1 h-3 w-3" />Runtime Error</Badge>;
      default:
        return <Badge variant="secondary" className={commonClasses}>Pending</Badge>;
    }
  };

  return (
    <AppLayout>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card className="h-full">
          <Tabs defaultValue="description" className="h-full flex flex-col">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="submissions">Submissions</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="p-6 flex-1">
              <h1 className="font-headline text-2xl font-bold">{problem.title}</h1>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant={problem.difficulty === 'Easy' ? 'default' : problem.difficulty === 'Medium' ? 'secondary' : 'destructive'} className={
                    problem.difficulty === 'Easy' ? 'bg-green-500 hover:bg-green-600' :
                    problem.difficulty === 'Medium' ? 'bg-yellow-500 hover:bg-yellow-600' :
                    'bg-red-500 hover:bg-red-600'
                }>{problem.difficulty}</Badge>
                {problem.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
              </div>
              <Separator className="my-4" />
              <div className="prose dark:prose-invert max-w-none text-foreground">
                <p>{problem.description}</p>
                {problem.examples.map((ex, index) => (
                  <div key={index} className="my-4">
                    <h3 className="font-semibold">Example {index + 1}:</h3>
                    <div className="bg-muted p-3 rounded-md font-code text-sm">
                      <p><strong>Input:</strong> {ex.input}</p>
                      <p><strong>Output:</strong> {ex.output}</p>
                      {ex.explanation && <p><strong>Explanation:</strong> {ex.explanation}</p>}
                    </div>
                  </div>
                ))}
                <h3 className="font-semibold">Constraints:</h3>
                <ul className="list-disc pl-5">
                  {problem.constraints.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="submissions" className="p-6 flex-1">
                <h2 className="font-headline text-xl mb-4">Past Submissions</h2>
                <div className="space-y-4">
                    {problemSubmissions.length > 0 ? problemSubmissions.map(sub => (
                        <div key={sub.id} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                            <div>
                                {getVerdictBadge(sub.verdict)}
                                <p className="text-xs text-muted-foreground mt-1">
                                    {new Date(sub.timestamp).toLocaleString()}
                                </p>
                            </div>
                            <div className="text-right text-xs">
                                <p className="flex items-center gap-1"><Clock className="h-3 w-3" /> {sub.executionTime}ms</p>
                                <p className="flex items-center gap-1"><MemoryStick className="h-3 w-3" /> {sub.memoryUsage}MB</p>
                            </div>
                        </div>
                    )) : (
                        <p className="text-muted-foreground text-center py-8">No submissions for this problem yet.</p>
                    )}
                </div>
            </TabsContent>
          </Tabs>
        </Card>
        
        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between p-4">
              <CardTitle className="text-lg">Code Editor</CardTitle>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="java">Java</SelectItem>
                  <SelectItem value="cpp">C++</SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent className="p-0">
              <Textarea
                placeholder={`Write your ${language.charAt(0).toUpperCase() + language.slice(1)} code here...`}
                className="min-h-[400px] font-code text-sm rounded-none border-0 border-y resize-none focus-visible:ring-0"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </CardContent>
          </Card>

          {result && (
              <Card>
                  <CardHeader>
                      <CardTitle className="text-lg">Result</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center justify-between">
                      <div>{getVerdictBadge(result.verdict)}</div>
                      <div className="flex gap-4 text-sm">
                          <p className="flex items-center gap-1"><Clock className="h-4 w-4 text-muted-foreground" /> {result.executionTime}ms</p>
                          <p className="flex items-center gap-1"><MemoryStick className="h-4 w-4 text-muted-foreground" /> {result.memoryUsage}MB</p>
                      </div>
                  </CardContent>
              </Card>
          )}

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={handleRun} disabled={isSubmitting}>
              <Play className="mr-2 h-4 w-4" />
              {isSubmitting ? 'Running...' : 'Run'}
            </Button>
            <Button onClick={handleRun} disabled={isSubmitting} className="bg-primary hover:bg-primary/90">
              <Send className="mr-2 h-4 w-4" />
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
