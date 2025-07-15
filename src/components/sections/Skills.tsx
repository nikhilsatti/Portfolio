import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillsData = {
    "Languages & Frameworks": ["Python", "R", "Java 8", "SQL (MySQL, PostgreSQL)", "PySpark", "Django", "Spring Boot", "REST APIs", "Microservices"],
    "Cloud & Data Engineering": ["Azure", "AWS", "GCP", "Jenkins", "GitHub", "CI/CD", "ETL Pipelines", "Hive", "Hadoop", "MongoDB", "Snowflake", "IBM UrbanCode Deploy (UCD)", "Pivotal Cloud Foundry (PCF)", "Data Structures & Algorithms", "Dynamic Programming"],
    "BI & Visualization": ["Tableau", "Power BI", "IBM Cognos", "Google Analytics", "Google Tag Manager", "Google AdSense", "KNIME"],
    "Statistics & Tools": ["Pandas", "NumPy", "Scikit-learn", "Seaborn", "A/B Testing", "T-test", "Chi-test", "JIRA", "Figma", "Visio", "SDLC", "Project Management"],
    "Certifications": ["Microsoft Certified: Azure Fundamentals", "IBM Data Analyst Certified Professional"],
};

export function Skills() {
    return (
        <section id="skills" className="w-full py-12 md:py-24 bg-muted/20">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Skills & Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(skillsData).map(([category, skills]) => (
                        <Card key={category}>
                            <CardHeader>
                                <CardTitle>{category}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, index) => (
                                        <Badge key={index} variant="secondary">{skill}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
