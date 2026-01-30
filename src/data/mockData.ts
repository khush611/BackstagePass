export const profileData = {
  name: "Russell Brunson",
  title: "Digital Coach",
  bio: "3M+ entrepreneur • NYT bestselling author",
  avatar: undefined,
  subscribers: 20000,
  posts: 200,
  isVerified: true,
};

export const challengesData = [
  {
    id: 1,
    title: "9-day Fitness Challenge",
    currentDay: 5,
    totalDays: 9,
    participants: 54,
    isJoined: true,
  },
  {
    id: 2,
    title: "21-Day Productivity Boost",
    currentDay: 12,
    totalDays: 21,
    participants: 128,
    isJoined: true,
  },
  {
    id: 3,
    title: "14-Day Mindfulness Challenge",
    currentDay: 0,
    totalDays: 14,
    participants: 89,
    isJoined: false,
  },
  {
    id: 4,
    title: "30-Day Healthy Eating Challenge",
    currentDay: 0,
    totalDays: 30,
    participants: 234,
    isJoined: false,
  },
];

export const feedPosts = [
  {
    id: 1,
    type: "welcome",
    author: {
      name: "Russell Brunson",
      avatar: undefined,
      isVerified: true,
    },
    content: `Welcome to Our Community!

We're thrilled to have you here! Dive into a world of shared knowledge, vibrant discussions, and endless opportunities. Feel free to introduce yourself, connect with fellow members, and let's start this learning journey together!`,
    timestamp: new Date(Date.now() - 3600000 * 2),
    likes: 245,
    comments: 10,
    isPinned: true,
  },
  {
    id: 2,
    type: "regular",
    author: {
      name: "Russell Brunson",
      avatar: undefined,
      isVerified: true,
    },
    content: "Just wrapped up an amazing coaching session! Remember: Your mindset determines your success. What's one mindset shift that changed your life? Share below!",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    timestamp: new Date(Date.now() - 3600000 * 5),
    likes: 189,
    comments: 42,
  },
  {
    id: 3,
    type: "regular",
    author: {
      name: "Russell Brunson",
      avatar: undefined,
      isVerified: true,
    },
    content: "The secret to scaling isn't working harder—it's working smarter. Here are my top 3 productivity hacks that helped me 10x my output...",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    timestamp: new Date(Date.now() - 3600000 * 24),
    likes: 312,
    comments: 67,
  },
];
