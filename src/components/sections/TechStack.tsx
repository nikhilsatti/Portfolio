import { Badge } from "@/components/ui/badge";

const techStack = [
    "CrewAI", "LangChain", "Snowflake", "Firebase", "Google Cloud Platform (GCP)",
    "BigQuery", "SQL", "Python", "Looker", "Tableau", "Airflow", "dbt",
    "Git", "Docker", "Kubernetes"
];

const badgeVariants = [
    "default",
    "secondary",
    "outline",
] as const;

export function TechStack() {
    return (
        <section id="tech-stack" className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Tech Stack</h2>
                <div className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto">
                    {techStack.map((tech, index) => (
                        <Badge 
                            key={index} 
                            variant={badgeVariants[index % badgeVariants.length]}
                            className="text-lg py-2 px-4 transition-transform hover:scale-110"
                        >
                            {tech}
                        </Badge>
                    ))}
                </div>
            </div>
        </section>
    );
}
