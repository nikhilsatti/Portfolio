import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const projectsData = [
    {
      title: "Modular Data Pipeline Generator",
      description: "End-to-End ML Automation Platform with Django, React, and Firebase. Features reusable pipelines for preprocessing and model training.",
      githubUrl: "https://github.com/nikhilreddysatti",
      imageUrl: "https://placehold.co/600x400.png",
      aiHint: "data pipeline"
    },
    {
      title: "Customer Segmentation & Insights",
      description: "Improved data quality by 25% and increased marketing efficiency by 30% using K-means clustering and interactive Tableau dashboards.",
      githubUrl: "https://github.com/nikhilreddysatti",
      imageUrl: "https://placehold.co/600x400.png",
      aiHint: "customer dashboard"
    },
    {
      title: "Statistical Modeling for Property Valuation",
      description: "Cleaned and preprocessed 80K+ housing records and developed predictive models achieving 80%+ accuracy for Cook County home valuations.",
      githubUrl: "https://github.com/nikhilreddysatti",
      imageUrl: "https://placehold.co/600x400.png",
      aiHint: "real estate"
    }
];

export function Projects() {
    return (
        <section id="projects" className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Projects</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projectsData.map((project, index) => (
                        <Card key={index} className="overflow-hidden flex flex-col group">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
                                <CardHeader>
                                    <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <Image
                                        src={project.imageUrl}
                                        alt={`Screenshot of ${project.title}`}
                                        width={600}
                                        height={400}
                                        className="object-cover rounded-md transform group-hover:scale-105 transition-transform duration-300"
                                        data-ai-hint={project.aiHint}
                                    />
                                </CardContent>
                                <CardFooter>
                                    <Button variant="outline" className="w-full">
                                        <Github className="mr-2 h-4 w-4" />
                                        View on GitHub
                                    </Button>
                                </CardFooter>
                            </a>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
