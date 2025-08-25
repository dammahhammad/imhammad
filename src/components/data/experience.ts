import volumetree from "@/assets/logos/volumetree.png";
import tpt from "@/assets/logos/tpt.png";
import nagarro from "@/assets/logos/nagarro.jpg";
import { StaticImageData } from "next/image";


export interface Position {
    role: string;
    type: string;
    location: string;
    duration: string;
    skills: string[];
    isExpanded: boolean;
    description: string[];
}

export interface Exprience {
    company: string;
    logoUrl: StaticImageData;
    positions: Position[];
    isCurrentEmployer: boolean;
}

export const EXPERIENCES: Exprience[] = [
    {
        company: "Volumetree",
        isCurrentEmployer: true,
        logoUrl: volumetree,
        positions: [{
            role: "Software Engineer II",
            type: "Full-time",
            location: "Delhi, India · Hybrid",
            duration: "Sep 2024 – Present",
            skills: [".NET Core", "C#", "NodeJS", "React", "Angular", "Next.JS", "LINQ", "Entity Framework", "Azure", "SQL", "Next.JS", "Redux", "PostgreSQL", "PgAdmin", "Shopify", "Agile", "Teamwork", "Problem-solving"],
            isExpanded: true,
            description: [
                "Developed and maintained scalable web applications using .NET Core, C#, and modern JavaScript frameworks.",
                "Implemented RESTful APIs and integrated databases with Entity Framework Core, LINQ, SQL Server, MySQL, and PostgreSQL.",
                "Built dynamic frontends with React, Next.js, Angular, Tailwind CSS, and Radix UI for seamless user experiences.",
                "Applied state management solutions including Redux and Redux-Saga to optimize application performance.",
                "Containerized applications with Docker and streamlined CI/CD pipelines using GitHub Actions and Azure DevOps.",
                "Designed and documented APIs with Swagger and tested services using Postman for robust delivery.",
                "Collaborated with cross-functional teams to deliver end-to-end solutions for real-world business problems.",
                "Contributed to product development across multiple industries, ensuring clean architecture and maintainable code."
            ]
        }]
    },
    {
        company: "TechPlusTalent",
        isCurrentEmployer: false,
        logoUrl: tpt,
        positions: [{
            role: "Software Engineer",
            type: "Full-time",
            location: "Redmond, Washington, United States · Remote",
            duration: "Mar 2024 – Sep 2024",
            skills: ["C#",".NET Core", "SQL Server", "SSMS", "Azure", "Powershell", "LINQ", "MUI", "REST APIs", ],
            isExpanded: false,
            description: [
                "Developed and maintained features for a US-based Real Estate Platform using .NET Core, React, MUI, and MySQL, ensuring smooth integration and a seamless user experience.",
                "Migrated legacy code to a more efficient and scalable architecture, resulting in a 15% improvement in application performance and a better user experience across the platform.",
                "Refactored and debugged code to improve software reliability, enhancing overall system performance and addressing critical bugs to reduce downtime and improve user satisfaction.",
                "Worked within an international, multicultural team, collaborating with cross-functional departments (product, QA, design) to implement new features, fix defects, and streamline workflows.",
                "Contributed to the development of RESTful APIs and integrated third-party services, enabling better data handling and enhancing platform functionality.",
                "Gained exposure to working with US clients, offering insights into global development processes and requirements."
            ],
        }]
    },
    {
        company: "Nagarro",
        isCurrentEmployer: false,
        logoUrl: nagarro,
        positions: [
            {
                role: "Associate Engineer",
                type: "Full-time",
                location: "India",
                duration: "Sep 2022 – Mar 2024",
                skills: [".NET Core", "C#", "PostgreSQL", "RabbitMQ", "LINQ", "HTML", "JavaScript", "CSS", "REST APIs", "Git", "Jira"],
                description: [
                    "Developed and optimized a restaurant meal ordering system using C#, .NET 8, PostgreSQL, and LINQ.",
                    "Implemented a ladder-based authorization filter for six user types.",
                    "Added Swagger documentation to APIs, providing clear and interactive documentation for front-end developers and improving collaboration across teams.",
                    "Implemented global exception handling to ensure smooth error management and improve application stability.",
                    "Refactored all APIs to improve efficiency and response time, making them asynchronous and deploying to production.",
                    "Collaborated in an Agile team, actively participating in sprint planning, code reviews, and daily stand-ups.",
                    "Designed and implemented a secure delivery OTP system, enhancing order security and reducing fraudulent activities.",
                    "Gained valuable exposure working with Swedish clients, contributing to product development and enhancing global collaboration.",
                    "Implemented features and enhancements, addressing user feedback and improving user experience.",
                    "Collaborated with stakeholders to gather and analyze requirements, ensuring software solutions aligned with business objectives."
                ],
                isExpanded: false
            },
            {
                role: "Trainee",
                type: "Trainee",
                location: "Gurugram, Haryana, India",
                duration: "Mar 2022 – Sep 2022",
                skills: [".NET Core", ".NET Framework", "C#", "Angular", "LINQ", "Entity Framework", "JavaScript", "TypeScript"],
                description: [
                    "Demonstrated expertise in developing web-based and client/server applications using C#, .NET Framework, .NET MVC, HTML, CSS, Bootstrap, Angular, and JavaScript.",
                    "Showcased strong understanding of object-oriented programming principles and design patterns.",
                    "Identified, debugged, and deployed critical production hotfixes, ensuring minimal downtime and a seamless user experience."
                ],
                isExpanded: false
            }
        ]
    },
];
