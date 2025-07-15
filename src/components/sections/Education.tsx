import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const educationData = [
    {
        degree: "MS in Business Analytics (IT)",
        institution: "UIUC",
        year: "2024"
    },
    {
        degree: "BTech in Electrical & Electronics Engineering",
        institution: "VNIT Nagpur",
        year: "2021"
    }
]

export function Education() {
  return (
    <section id="education" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Education</h2>
        <div className="grid gap-8 md:grid-cols-2">
            {educationData.map((edu, index) => (
                <Card key={index} className="transform hover:scale-105 transition-transform duration-300 ease-in-out">
                    <CardHeader className="flex flex-row items-center gap-4">
                        <GraduationCap className="w-8 h-8 text-primary" />
                        <div>
                            <CardTitle>{edu.degree}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{edu.institution} – {edu.year}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
