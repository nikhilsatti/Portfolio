import { Progress } from "@/components/ui/progress";

const skillsData = [
    { name: "SQL", proficiency: 95 },
    { name: "Python", proficiency: 90 },
    { name: "Looker", proficiency: 90 },
    { name: "Tableau", proficiency: 88 },
    { name: "Pandas & NumPy", proficiency: 85 },
    { name: "Scikit-learn", proficiency: 82 },
    { name: "Data Warehousing", proficiency: 80 },
    { name: "ETL Processes", proficiency: 85 },
    { name: "Statistical Analysis", proficiency: 88 },
    { name: "A/B Testing", proficiency: 80 },
];

export function Skills() {
    return (
        <section id="skills" className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
                    {skillsData.map((skill, index) => (
                        <div key={index} className="space-y-2">
                            <div className="flex justify-between">
                                <span className="font-medium">{skill.name}</span>
                                <span className="text-muted-foreground">{skill.proficiency}%</span>
                            </div>
                            <Progress value={skill.proficiency} aria-label={`${skill.name} proficiency`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
