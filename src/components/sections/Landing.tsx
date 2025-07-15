import Image from "next/image";
import { BarChartIcon, LineChartIcon, PieChartIcon } from "@/components/ui/icons";

export function Landing() {
  return (
    <section id="landing" className="relative flex items-center min-h-[calc(100vh-10rem)] overflow-hidden">
      <div className="absolute inset-0 z-0">
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary rounded-full opacity-20 animate-blob" />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent rounded-full opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-secondary rounded-full opacity-10 animate-blob animation-delay-4000" />
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
