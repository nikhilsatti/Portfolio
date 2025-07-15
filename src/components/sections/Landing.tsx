import Image from "next/image";
import { Database, Code, Sigma, BrainCircuit, Bot, LineChart, Cpu, Network } from "lucide-react";

const icons = [
  { icon: Database, className: "top-1/4 left-1/4 w-12 h-12 animation-delay-0" },
  { icon: Code, className: "top-1/2 left-1/3 w-16 h-16 animation-delay-1000" },
  { icon: Sigma, className: "top-1/3 right-1/4 w-8 h-8 animation-delay-2000" },
  { icon: BrainCircuit, className: "bottom-1/4 left-1/2 w-14 h-14 animation-delay-3000" },
  { icon: Bot, className: "top-10 right-10 w-12 h-12 animation-delay-4000" },
  { icon: LineChart, className: "bottom-10 left-10 w-16 h-16 animation-delay-5000" },
  { icon: Cpu, className: "bottom-1/3 right-1/3 w-10 h-10 animation-delay-6000" },
  { icon: Network, className: "top-10 left-1/2 w-12 h-12 animation-delay-7000" },
];

export function Landing() {
  return (
    <section id="landing" className="relative flex items-center min-h-[calc(100vh-10rem)] overflow-hidden">
      <div className="absolute inset-0 z-0">
        {icons.map(({ icon: Icon, className }, index) => (
          <Icon key={index} className={`absolute text-primary/10 animate-blob ${className}`} />
        ))}
      </div>

      <div className="container z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0">
          <Image
            src="https://placehold.co/200x200.png"
            alt="Profile picture of Nikhil Reddy Satti"
            width={200}
            height={200}
            className="rounded-full border-4 border-primary shadow-lg"
            data-ai-hint="profile picture"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Nikhil Reddy Satti
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Data Analyst with expertise in Data Engineering, Big Data Analytics, and Business Intelligence. Passionate about transforming complex data into actionable insights and driving business growth.
          </p>
        </div>
      </div>
    </section>
  );
}
