import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { cn } from "@/lib/utils";
  
  const experienceData = [
    {
      id: "exp4",
      role: "Data Analyst",
      company: "Holiday World",
      period: "Jul 2024 - Present",
      description: [
        "Boosted organic traffic and ad revenue by 35% through Google Analytics, AdTech integration, and SEO (meta-tagging, sitemaps).",
        "Doubled weekly website signups by deploying Google Tag Manager to track user interactions and generate insights.",
        "Designed an advertising dashboard on Tableau for the sales team, enabling direct-to-client pitches and removing third-party brokers."
      ]
    },
    {
      id: "exp3",
      role: "Data Analyst",
      company: "University of Illinois at Urbana-Champaign",
      period: "Jan 2024 – May 2024",
      description: [
          "Analyzed 2,000+ healthcare crowdfunding campaigns by developing sentiment models with NLP (Python, NLTK) on unstructured text and image data, uncovering key emotional drivers of donor behavior",
          "Automated data wrangling with ETL pipelines (Python, Pandas, MongoDB), cutting preprocessing time by 30% and improving data readiness for analysis",
          "Created actionable visualizations in Tableau and Matplotlib to correlate image sentiment with campaign success and inform strategic recommendations."
      ]
    },
    {
      id: "exp2",
      role: "Business Intelligence Analyst",
      company: "Exelon Corporation",
      period: "Sep 2023 - May 2024",
      description: [
        "Saved $800K in operational costs by developing real-time supply chain dashboards (Python, Tableau) that identified bottlenecks and flagged cost-saving opportunities across procurement and logistics.",
        "Analyzed high-volume supply chain data streams to optimize inventory flow, shorten delivery times, and support strategic decision-making for operations leadership."
      ]
    },
    {
      id: "exp1",
      role: "Business Technology Analyst",
      company: "Deloitte",
      period: "Jul 2021 - Jul 2023",
      description: [
        "Migrated a legacy COBOL health insurance system for HCSC to a microservices-based cloud architecture, boosting scalability to process 1M+ daily claims and reducing operational costs by streamlining QA and CI/CD pipelines.",
        "Engineered complex business rules on IBM ODM, enabling accurate claim calculations for 20M+ policyholders.",
        "Resolved 250+ regression bugs and optimized SQL queries, reducing response times by 40% and improving system reliability."
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
  
            <Accordion type="single" collapsible className="w-full space-y-8" defaultValue="exp4">
              {experienceData.map((job, index) => (
                <div key={job.id} className="relative">
                  <div className="absolute left-4 md:left-1/2 top-4 h-4 w-4 rounded-full bg-primary -translate-x-1/2 -translate-y-1/2"></div>
                  <div className={cn(
                    "ml-10 md:ml-0",
                    index % 2 === 0 ? "md:pr-8 md:text-right md:w-[calc(50%-1rem)]" : "md:ml-[50%] md:pl-8"
                  )}>
                    <AccordionItem value={job.id} className="border-none">
                      <AccordionTrigger className={cn(
                        "w-full p-4 rounded-lg bg-card hover:bg-muted/50 transition-colors text-left",
                         index % 2 === 0 ? "md:text-right md:flex-row-reverse" : "md:text-left"
                      )}>
                        <div className={cn(
                            "flex flex-col w-full",
                            index % 2 === 0 ? "md:items-end" : "md:items-start"
                        )}>
                            <h3 className="font-semibold text-lg">{job.role}</h3>
                            <p className="text-muted-foreground">{job.company} | {job.period}</p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="p-4 mt-2 rounded-lg bg-card/50 text-left">
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