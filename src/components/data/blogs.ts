import docker from "@/assets/blogs/docker.webp";
import snippet from "@/assets/blogs/AISnippet.webp";
import interfaces from "@/assets/blogs/interfaces.webp";
import nike from "@/assets/blogs/nike.webp";
import patterns from "@/assets/blogs/patterns.webp";
import jenkins from "@/assets/blogs/jenkins.webp";
import { StaticImageData } from "next/image";

export interface Blog {
    title: string;
    description: string;
    link: string;
    src: StaticImageData;
}

export const BLOGS: Blog[] = [
    {
        title: "How to enable Virtualization: Docker Installation Error",
        description: "Docker Desktop is unable to detect Hypervisor",
        link: "https://medium.com/gitconnected/how-to-enable-virtualization-docker-installation-error-46587f1e2686",
        src: docker,
    },
    {
        title: "AI will not take your job, But a person using AI will",
        description: "Developer VS Developer using AI",
        link: "https://medium.com/illumination/ai-will-not-take-your-job-but-a-person-using-ai-will-1b4b37892ee3",
        src: snippet,
    },
    {
        title: "Interfaces in C#",
        description: "In C# an Interface is like a contract, in which every class which inherits it, must abide by all the interface rules",
        link: "https://medium.com/gitconnected/interfaces-in-c-cd85460f3c50",
        src: interfaces,
    },
    {
        title: "How to Install Jenkins: Complete Step by Step guide",
        description: "Continuous Integration is an important part of DevOps, and Jenkins is the most famous and widely used tool for Continuous Integration.",
        link: "https://medium.com/gitconnected/how-to-install-jenkins-complete-step-by-step-guide-959297f600db",
        src: jenkins,
    },
    {
        title: "Design Patterns: Singleton Design",
        description: "Design patterns are formalized best practices and the solution to general problems that software developers faced during software development.",
        link: "https://medium.com/gitconnected/design-patterns-singleton-design-a4b5b7cc305b",
        src: patterns,
    },
    {
        title: "Nike, Steve Jobs, And a Story to Remember...",
        description: "This story started when Steve Jobs returned to Apple in 1997, when Apple was going through heavy losses because of 11 consecutive years of failure, and people lost their trust in them.",
        link: "https://medium.com/illumination/nike-steve-jobs-and-a-story-to-remember-970ea5cbddcf",
        src: nike,
    }
]