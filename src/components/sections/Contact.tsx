import { ContactForm } from './ContactForm';

export function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Contact Me</h2>
            <p className="text-muted-foreground mb-8">
            Have a question or want to work together? Feel free to reach out.
            </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
