import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  const experienceData = [
    {
      id: "exp3",
      role: "Senior Data Analyst",
      company: "Innovate Inc.",
      period: "2022 - Present",
      description: [
        "Led a team to develop a predictive model for customer churn, reducing it by 15%.",
        "Created comprehensive Looker dashboards to track KPIs, improving executive decision-making.",
        "Automated data extraction and transformation processes using Python and Airflow."
      ]
    },
    {
      id: "exp2",
      role: "Data Analyst",
      company: "DataDriven Co.",
      period: "2021 - 2022",
      description: [
        "Analyzed marketing campaign performance, providing insights that increased ROI by 20%.",
        "Built and maintained SQL queries to support business intelligence reporting.",
        "Collaborated with product teams to define data collection requirements for new features."
      ]
    },
    {
      id: "exp1",
      role: "Junior Analyst",
      company: "Analytics Solutions",
      period: "2020 - 2021",
      description: [
        "Assisted in cleaning and preparing large datasets for analysis.",
        "Generated weekly reports on sales trends and presented findings to stakeholders.",
        "Conducted ad-hoc analysis to answer critical business questions."
      ]
    }
  ];
  
  export function Experience() {
    return (
      <section id="experience" className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Experience</h2>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
  
            <Accordion type="single" collapsible className="w-full space-y-8">
              {experienceData.map((job, index) => (
                <div key={job.id} className="relative">
                  <div className="absolute left-4 md:left-1/2 top-4 h-4 w-4 rounded-full bg-primary -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="md:ml-[50%] md:pl-8">
                    <AccordionItem value={job.id} className="border-none">
                      <AccordionTrigger className="w-full text-left p-4 rounded-lg bg-card hover:bg-muted/50 transition-colors">
                        <div className="flex flex-col">
                            <h3 className="font-semibold text-lg">{job.role}</h3>
                            <p className="text-muted-foreground">{job.company} | {job.period}</p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="p-4 mt-2 rounded-lg bg-card/50">
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          {job.description.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                </div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    );
  }
  