import Image from "next/image";
import { BarChartIcon, LineChartIcon, PieChartIcon } from "@/components/ui/icons";

export function Landing() {
  return (
    <section id="landing" className="relative flex items-center min-h-[calc(100vh-10rem)] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 text-accent animate-orbit">
          <BarChartIcon className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 text-accent animate-orbit animation-delay-2000">
          <LineChartIcon className="w-full h-full" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 text-accent animate-orbit animation-delay-4000">
          <PieChartIcon className="w-full h-full" />
        </div>
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
