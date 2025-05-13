import { User, Post } from './types';

export const dummyUsers: User[] = [
    {
        id: "u1",
        username: "techie_sarah",
        name: "Sarah Johnson",
        image: "https://i.pravatar.cc/150?u=sarah",
        bio: "Full-stack developer | Coffee enthusiast | Open source contributor"
    },
    {
        id: "u2",
        username: "alex_adventures",
        name: "Alex Chen",
        image: "https://i.pravatar.cc/150?u=alex",
        bio: "Travel photographer 📸 | Code wizard ✨ | Always exploring"
    },
    {
        id: "u3",
        username: "design_mike",
        name: "Mike Rodriguez",
        image: "https://i.pravatar.cc/150?u=mike",
        bio: "UI/UX Designer | Art lover | Creating beautiful experiences"
    },
    {
        id: "u4",
        username: "emma_writes",
        name: "Emma Taylor",
        image: "https://i.pravatar.cc/150?u=emma",
        bio: "Tech writer | Blockchain enthusiast | Cat mom 🐱"
    },
    {
        id: "u5",
        username: "dev_james",
        name: "James Wilson",
        image: "https://i.pravatar.cc/150?u=james",
        bio: "Senior Developer | Gaming geek 🎮 | Pizza lover 🍕"
    }
];

export const dummyPosts: Post[] = [
    {
        id: "p1",
        createdAt: "2025-03-20T10:00:00Z",
        content: "Just launched my new portfolio website! Check it out and let me know what you think 🚀",
        user_id: "u1",
        user: dummyUsers[0],
        parent_id: null,
        parent: null,
        replies: []
    },
    {
        id: "p2",
        createdAt: "2025-04-20T10:15:00Z",
        content: "The design looks amazing! Love the minimalist approach.",
        user_id: "u3",
        user: dummyUsers[2],
        parent_id: "p1",
        parent: null, // This will be linked after initialization
        replies: []
    },
    {
        id: "p3",
        createdAt: "2024-03-20T11:00:00Z",
        content: "Has anyone tried the new React Server Components? Share your experiences!",
        user_id: "u2",
        user: dummyUsers[1],
        parent_id: null,
        parent: null,
        replies: []
    },
    {
        id: "p4",
        createdAt: "2025-02-20T11:30:00Z",
        content: "Been using them in production for a month now. Game changer for performance!",
        user_id: "u5",
        user: dummyUsers[4],
        parent_id: "p3",
        parent: null,
        replies: []
    },
    {
        id: "p5",
        createdAt: "2024-03-20T12:00:00Z",
        content: "Writing a comprehensive guide on TypeScript best practices. Any specific topics you'd like me to cover?",
        user_id: "u4",
        user: dummyUsers[3],
        parent_id: null,
        parent: null,
        replies: []
    },
    {
        id: "p6",
        createdAt: "2024-03-20T12:15:00Z",
        content: "Could you include a section on advanced type utilities?",
        user_id: "u1",
        user: dummyUsers[0],
        parent_id: "p5",
        parent: null,
        replies: []
    },
    {
        id: "p7",
        createdAt: "2024-03-20T13:00:00Z",
        content: "Just discovered a great new VS Code extension for AI pair programming!",
        user_id: "u5",
        user: dummyUsers[4],
        parent_id: null,
        parent: null,
        replies: []
    },
    {
        id: "p8",
        createdAt: "2024-03-20T14:00:00Z",
        content: "Excited to announce I'm speaking at NextConf 2024! Who else is going?",
        user_id: "u2",
        user: dummyUsers[1],
        parent_id: null,
        parent: null,
        replies: []
    },
    {
        id: "p9",
        createdAt: "2024-03-20T14:15:00Z",
        content: "I'll be there! Let's meet up!",
        user_id: "u3",
        user: dummyUsers[2],
        parent_id: "p8",
        parent: null,
        replies: []
    },
    {
        id: "p10",
        createdAt: "2024-03-20T15:00:00Z",
        content: "Working on a new open-source project. Looking for contributors!",
        user_id: "u1",
        user: dummyUsers[0],
        parent_id: null,
        parent: null,
        replies: []
    },
    {
        id: "p11",
        createdAt: "2024-03-20T15:30:00Z",
        content: "Interested! What tech stack are you using?",
        user_id: "u4",
        user: dummyUsers[3],
        parent_id: "p10",
        parent: null,
        replies: []
    },
    {
        id: "p12",
        createdAt: "2024-03-20T16:00:00Z",
        content: "Just published my first npm package! 📦",
        user_id: "u3",
        user: dummyUsers[2],
        parent_id: null,
        parent: null,
        replies: []
    },
    {
        id: "p13",
        createdAt: "2024-03-20T16:15:00Z",
        content: "Congratulations! What does it do?",
        user_id: "u5",
        user: dummyUsers[4],
        parent_id: "p12",
        parent: null,
        replies: []
    },
    {
        id: "p14",
        createdAt: "2024-03-20T17:00:00Z",
        content: "Anyone interested in starting a coding book club?",
        user_id: "u4",
        user: dummyUsers[3],
        parent_id: null,
        parent: null,
        replies: []
    },
    {
        id: "p15",
        createdAt: "2024-03-20T17:15:00Z",
        content: "Great idea! I'm in! 📚",
        user_id: "u2",
        user: dummyUsers[1],
        parent_id: "p14",
        parent: null,
        replies: []
    }
];

// Link parents and replies
dummyPosts.forEach(post => {
    if (post.parent_id) {
        const parentPost = dummyPosts.find(p => p.id === post.parent_id);
        if (parentPost) {
            post.parent = parentPost;
            parentPost.replies.push(post);
        }
    }
}); 