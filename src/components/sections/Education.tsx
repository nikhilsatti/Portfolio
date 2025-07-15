import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const educationData = [
    {
        degree: "Master of Science in Business Analytics",
        institution: "University of Illinois at Urbana-Champaign, Gies College of Business",
        period: "May 2024",
        details: "GPA: 4.00/4.00. Focus: Data Engineering, Big Data Analytics, Dashboarding and BI, Supply Chain and Financial Analytics."
    },
    {
        degree: "Bachelor of Technology in Electrical & Electronics Engineering",
        institution: "Visvesvaraya National Institute of Technology",
        period: "June 2021",
        details: "GPA: 8.27/10. Nagpur, India."
    }
]

export function Education() {
  return (
    <section id="education" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Education</h2>
        <div className="grid gap-8 md:grid-cols-1">
            {educationData.map((edu, index) => (
                <Card key={index} className="transform hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                    <CardHeader className="grid grid-cols-[auto_1fr_auto] items-start gap-4 space-y-0">
                        <div className="flex items-center justify-center bg-muted rounded-full w-12 h-12">
                           <GraduationCap className="w-6 h-6 text-primary" />
                        </div>
                        <div className="space-y-1">
                            <CardTitle>{edu.degree}</CardTitle>
                            <p className="font-medium">{edu.institution}</p>
                            <CardDescription className="text-sm">{edu.details}</CardDescription>
                        </div>
                        <div className="text-muted-foreground text-right">
                           <p>{edu.period}</p>
                        </div>
                    </CardHeader>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
