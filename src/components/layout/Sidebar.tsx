import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 z-50 h-dvh w-72 border-r bg-background p-8 hidden lg:flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Nikhil Reddy Satti</h1>
        <p className="mt-2 text-muted-foreground">Data Analyst</p>
      </div>
      <nav className="flex flex-col space-y-2">
        <Button variant="ghost" className="justify-start gap-2" asChild>
          <a href="mailto:nikhil.satti@example.com">
            <Mail className="h-4 w-4" />
            Email
          </a>
        </Button>
        <Button variant="ghost" className="justify-start gap-2" asChild>
          <a href="https://github.com/nikhil-satti" target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </Button>
        <Button variant="ghost" className="justify-start gap-2" asChild>
          <a href="https://linkedin.com/in/nikhil-reddy-satti" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </Button>
      </nav>
       <div />
    </aside>
  );
}
