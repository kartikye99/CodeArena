export type Problem = {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  description: string;
  examples: { input: string; output: string; explanation?: string }[];
  constraints: string[];
};

export const problems: Problem[] = [
  {
    id: 'two-sum',
    title: 'Two Sum',
    difficulty: 'Easy',
    tags: ['Array', 'Hash Table'],
    description: 'Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice.',
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,7]',
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
      },
    ],
    constraints: [
        '2 <= nums.length <= 10^4',
        '-10^9 <= nums[i] <= 10^9',
        '-10^9 <= target <= 10^9',
        'Only one valid answer exists.'
    ]
  },
  {
    id: 'add-two-numbers',
    title: 'Add Two Numbers',
    difficulty: 'Medium',
    tags: ['Linked List', 'Math'],
    description: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.',
    examples: [
      {
        input: 'l1 = [2,4,3], l2 = [5,6,4]',
        output: '[7,0,8]',
        explanation: '342 + 465 = 807.',
      },
    ],
    constraints: [
        'The number of nodes in each linked list is in the range [1, 100].',
        '0 <= Node.val <= 9',
        'It is guaranteed that the list represents a number that does not have leading zeros.'
    ]
  },
  {
    id: 'median-of-two-sorted-arrays',
    title: 'Median of Two Sorted Arrays',
    difficulty: 'Hard',
    tags: ['Array', 'Binary Search', 'Divide and Conquer'],
    description: 'Given two sorted arrays `nums1` and `nums2` of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log(m+n)).',
    examples: [
      {
        input: 'nums1 = [1,3], nums2 = [2]',
        output: '2.00000',
      },
      {
        input: 'nums1 = [1,2], nums2 = [3,4]',
        output: '2.50000',
      },
    ],
    constraints: [
        'nums1.length == m',
        'nums2.length == n',
        '0 <= m <= 1000',
        '0 <= n <= 1000',
        '1 <= m + n <= 2000',
        '-10^6 <= nums1[i], nums2[i] <= 10^6'
    ]
  },
  {
    id: 'palindrome-number',
    title: 'Palindrome Number',
    difficulty: 'Easy',
    tags: ['Math'],
    description: 'Given an integer x, return true if x is a palindrome, and false otherwise.',
    examples: [
        {
            input: 'x = 121',
            output: 'true',
            explanation: '121 reads as 121 from left to right and from right to left.'
        },
        {
            input: 'x = -121',
            output: 'false',
            explanation: 'From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.'
        }
    ],
    constraints: [
        '-2^31 <= x <= 2^31 - 1'
    ]
  },
  {
    id: 'container-with-most-water',
    title: 'Container With Most Water',
    difficulty: 'Medium',
    tags: ['Array', 'Two Pointers', 'Greedy'],
    description: 'You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.',
    examples: [
        {
            input: 'height = [1,8,6,2,5,4,8,3,7]',
            output: '49',
            explanation: 'The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.'
        }
    ],
    constraints: [
        'n == height.length',
        '2 <= n <= 10^5',
        '0 <= height[i] <= 10^4'
    ]
  }
];

export const userProfileData = {
  name: 'Alex Turner',
  email: 'alex.t@example.com',
  avatarUrl: 'https://picsum.photos/seed/user1/200/200',
  stats: {
    problemsSolved: 128,
    currentStreak: 14,
    longestStreak: 45,
  },
  preferredLanguage: 'Python',
  recentActivity: [
    { date: '2024-07-21', submissions: 5 },
    { date: '2024-07-22', submissions: 2 },
    { date: '2024-07-23', submissions: 7 },
    { date: '2024-07-24', submissions: 3 },
    { date: '2024-07-25', submissions: 8 },
    { date: '2024-07-26', submissions: 4 },
    { date: '2024-07-27', submissions: 6 },
  ],
};

export type LeaderboardUser = {
  rank: number;
  username: string;
  avatarUrl: string;
  problemsSolved: number;
};

export const leaderboardData: LeaderboardUser[] = [
  { rank: 1, username: 'genesis', avatarUrl: 'https://picsum.photos/seed/genesis/200/200', problemsSolved: 542 },
  { rank: 2, username: 'byte_bard', avatarUrl: 'https://picsum.photos/seed/byte_bard/200/200', problemsSolved: 511 },
  { rank: 3, username: 'algo_queen', avatarUrl: 'https://picsum.photos/seed/algo_queen/200/200', problemsSolved: 489 },
  { rank: 4, username: 'Alex Turner', avatarUrl: 'https://picsum.photos/seed/user1/200/200', problemsSolved: 128 },
  { rank: 5, username: 'code_crusader', avatarUrl: 'https://picsum.photos/seed/crusader/200/200', problemsSolved: 110 },
  { rank: 6, username: 'logic_lord', avatarUrl: 'https://picsum.photos/seed/logic_lord/200/200', problemsSolved: 98 },
  { rank: 7, username: 'recursive_rachel', avatarUrl: 'https://picsum.photos/seed/rachel/200/200', problemsSolved: 85 },
];


export type Submission = {
    id: string;
    problemId: string;
    timestamp: string;
    language: 'C++' | 'Java' | 'Python';
    verdict: 'Accepted' | 'Wrong Answer' | 'Time Limit Exceeded' | 'Runtime Error';
    executionTime: number; // in ms
    memoryUsage: number; // in MB
};

export const submissions: Submission[] = [
    { id: 'sub-1', problemId: 'two-sum', timestamp: '2024-07-27T10:30:00Z', language: 'Python', verdict: 'Accepted', executionTime: 50, memoryUsage: 15.2 },
    { id: 'sub-2', problemId: 'two-sum', timestamp: '2024-07-27T10:25:00Z', language: 'Python', verdict: 'Wrong Answer', executionTime: 20, memoryUsage: 15.1 },
    { id: 'sub-3', problemId: 'add-two-numbers', timestamp: '2024-07-26T15:00:00Z', language: 'Java', verdict: 'Accepted', executionTime: 120, memoryUsage: 42.5 },
    { id: 'sub-4', problemId: 'median-of-two-sorted-arrays', timestamp: '2024-07-25T11:00:00Z', language: 'C++', verdict: 'Time Limit Exceeded', executionTime: 2000, memoryUsage: 10.0 },
];
