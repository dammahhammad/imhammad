export interface Project {
    title: string;
    link: string;
    description: string[];
    isExpanded: boolean;
    skills: string[];
}

export const PROJECTS: Project[] = [
    {
        title: "imhammad",
        link: "https://www.imhammad.com",
        description: ["Built a comprehensive personal portfolio showcasing professional experience, projects, and technical blog posts with a clean, responsive design that works seamlessly across all devices.",
            "Created an interactive user experience featuring a custom typewriter effect, dynamic theme switching (light/dark mode), animated hover effects, and a sophisticated grid pattern background that adapts to the selected theme.",
            "Developed a modular, reusable component system using React and TypeScript, including custom UI components (cards, forms, navigation), experience timeline, project showcase, and blog integration with proper state management.",
            "Implemented structured data management for experience history, project portfolio, and blog posts with expandable sections, external links, and professional presentation of work.",
            "Built a comprehensive contact form with real-time validation, error handling, loading states, and modal dialog integration, demonstrating full-stack form handling capabilities."
        ],
        isExpanded: true,
        skills: ["React", "TypeScript", "Next.js", "Shadcn Components", "Tailwind CSS", "Radix UI", "Custom Typography", "Grid Pattern", "Form Handling", "State Management", "Responsive Design"]
    },
    {
        title: "Fuze",
        link: "https://fuzeglobal.io/",
        description: ["Built and maintained a multi-portal web application with clean, modular React components.",
            "Implemented pixel-perfect, responsive UIs using Next.js, Shadcn Components, Tailwind CSS and Figma design specs.",
            "Implemented dynamic user onboarding flows",
            "Developed Custom role-based access controls (RBAC) across portals",
            "Developed Interactive dashboards with user-specific content",
            "Integrated APIs with robust error handling and loading states for seamless UX.",
            "Collaborated with backend and design teams to ensure high performance and accessibility across devices."],
        isExpanded: true,
        skills: []

    },
    {
        title: "TrapInsights",
        link: "https://trapinsights.com",
        description: ["Created pixel-perfect UIs and complex data visualization dashboards using libraries like Recharts.",
            "Built Real-time chart rendering and filters for interactive data exploration",
            "Developed Custom admin panel with CRUD operations and analytics overview",
            "Implemented User authentication and role-based views",
            "Optimized frontend performance and managed backend APIs to ensure scalability and reliability.",
            "Maintained full project ownership including deployment, debugging, and iterative enhancements."],
        isExpanded: false,
        skills: []

    },
    {
        title: "Returbo",
        link: "https://returbo.io/home",
        description: ["Investigated and resolved merchant issues by debugging code and implementing fixes.",
            "Developed new features and internal tools to streamline merchant support workflows, reducing ticket resolution time.",
            "Handled technical support tickets requiring in-depth code analysis and implementation of long-term fixes."
        ],
        isExpanded: false,
        skills: ["C#", "Angular", "JavaScript", "TypeScript", "EF Core", "LINQ", "PostgreSQL", "Shopify", "Teamwork", "Problem-solving"]
    },
    {
        title: "AdBuilder",
        link: "https://adbuilder.pro/",
        description: ["Worked on a Ad builder platform for a properties where users can create and manage their ads and properties.",
            "Migrated legacy code to a more efficient and scalable architecture, resulting in a 15% improvement in application performance and a better user experience across the platform.",
            "Developed and maintained features using .NET Core, React, MUI, and MySQL, ensuring smooth integration and a seamless user experience."
        ],
        isExpanded: false,
        skills: ["C#", ".NET Core", "LINQ", "Entity Framework", "SQL Server", "RESTful APIs", "Powershell", "Google Ads", "React", "MUI", "MySQL", "Teamwork", "Problem-solving"]

    },
    {
        title: "Glitter",
        link: "https://github.com/dammahhammad/Glitter",
        description: [
            "Developed a web-based tweeting application with user authentication",
            "Implemented follow and unfollow functionality to manage connections",
            "Built post creation and sharing features for user thoughts",
            "Integrated search functionality by users and posts",
            "Designed responsive UI using Angular, HTML5, CSS, and JavaScript",
            "Developed presentation layer with ASP.NET MVC 6 and Razor views",
            "Implemented business logic and data persistence using .NET and Entity Framework",
            "Designed and managed relational data storage with SQL Server"
        ],
        isExpanded: false,
        skills: ["C#", ".NET Core", "HTML5", "CSS3", "JavaScript", "Angular", "ASP.NET MVC 6", "Razor", "Entity Framework", "SQL Server"]
    },
    {
        title: "ChapterChats",
        link: "https://github.com/dammahhammad/ChapterChats",
        description: ["Developer a book reading app with lending system",
            "Implemented user authentication and authorization",
            "Built a lending system with book availability and return dates",
            "Developed a dashboard for admin to manage books and users",
            "Designed responsive UI using Angular, HTML5, CSS, and JavaScript",
            "Implemented business logic and data persistence using .NET and Entity Framework",
            "Designed and managed relational data storage with SQL Server"
        ],
        isExpanded: false,
        skills: ["C#", ".NET Core", "Angular", "TypeScript", "HTML5", "CSS3", "JavaScript", "Entity Framework", "SQL Server"]
    },
    {
        title: "ResultManagement",
        link: "https://github.com/dammahhammad/ResultManagement",
        description: [
            "Developed a result management platform with separate logins for students and teachers",
            "Implemented secure student login to view scores and performance records",
            "Built teacher dashboard to manage and update student records",
            "Designed intuitive and responsive front-end using Angular 10",
            "Simulated backend services and APIs using JSON-Server for data handling"
        ],
        isExpanded: false,
        skills: ["C#", ".NET Core", "Angular 10", "TypeScript", "HTML5", "CSS3", "JavaScript", "JSON-Server", "RESTful APIs"]
    },
]