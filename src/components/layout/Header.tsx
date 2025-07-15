
"use client"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Mail, Github, Linkedin, Briefcase, GraduationCap, Lightbulb, BarChart, Cloud, Send } from "lucide-react";

const navLinks = [
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Projects', href: '#projects', icon: Lightbulb },
  { name: 'Skills', href: '#skills', icon: BarChart },
  { name: 'Tech Stack', href: '#tech-stack', icon: Cloud },
  { name: 'Contact', href: '#contact', icon: Send },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden lg:flex">
          <a href="#landing" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Nikhil Reddy Satti</span>
          </a>
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 lg:justify-end">
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <a href="#landing" className="mr-6 flex items-center space-x-2 p-4">
                    <span className="font-bold">Nikhil Reddy Satti</span>
                </a>
                <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                    <div className="flex flex-col space-y-3">
                         {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                                <link.icon className="h-4 w-4" />
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <nav className="hidden lg:flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
                <a href="mailto:nikhil.satti05@gmail.com" aria-label="Email">
                    <Mail className="h-4 w-4" />
                </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/nikhilreddysatti" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/nikhilreddysatti" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
