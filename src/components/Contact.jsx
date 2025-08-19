import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { TbMail, TbSend } from "react-icons/tb";
import { PiArrowUpRightBold, PiX } from "react-icons/pi";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { cn } from "../lib/utils";

const contactLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kapil-singh-negi/",
    icon: <SiLinkedin />,
  },
  {
    name: "Email",
    href: "mailto:kapilsinghnegi@outlook.com",
    icon: <TbMail />,
  },
  {
    name: "GitHub",
    href: "https://github.com/kapilsinghnegi/",
    icon: <SiGithub />,
  },
  {
    name: "Twitter",
    href: "https://x.com/kapilsinghnegi_",
    icon: <SiX />,
  },
];

const notify = message => {
  toast.custom(
    t => (
      <div className="flex flex-col items-start border-2 border-border bg-card relative p-4 rounded-lg gap-2">
        <p className="mt-1 text-foreground font-medium">{message.title}</p>
        <span className="text-muted-foreground text-sm">
          {message.description}
        </span>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="absolute right-1.5 top-1.5 text-foreground p-1 transition-colors duration-300 cursor-pointer hover:text-red-500"
        >
          <PiX size={20} />
        </button>
      </div>
    ),
    {
      duration: 5000,
      position: "bottom-right",
    }
  );
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch(e.target.action, {
        method: e.target.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      setIsSubmitting(false);

      if (response.ok) {
        notify({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        // Reset the form
        e.target.reset();
      } else {
        notify({
          title: "Failed to send message",
          description:
            "There was an error sending your message. Please try again later or contact me directly.",
        });
      }
    } catch (err) {
      setIsSubmitting(false);
      console.log(err);
      notify({
        title: "Failed to send message.",
        description: "Please try again later or contact me directly.",
      });
    }
  };
  return (
    <section
      id="contact"
      className="py-24 px-4 relative w-full bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto mb-4 md:mb-8">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to reach out!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  md:gap-4 justify-center">
          <div className="flex flex-col items-center space-y-4 p-4">
            <h3 className="font-medium mb-4 text-center text-xl">
              Connect with me
            </h3>
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-4/5 border border-foreground/20 px-8 py-4 rounded-lg hover:bg-accent transition-colors duration-300 group"
              >
                <span className="font-medium text-foreground flex items-center space-x-2 hover:text-foreground">
                  <span>{link.icon}</span> <span>{link.name}</span>
                </span>
                <span className="group-hover:text-blue-500">
                  <PiArrowUpRightBold />
                </span>
              </a>
            ))}
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="font-medium mb-4 text-center text-xl">
              Send a message
            </h3>
            <form
              className="space-y-6"
              action="https://formspree.io/f/myzparkn"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-left font-medium mb-2"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-left font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-left font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "hero-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send message"}
                <TbSend size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toaster className="bg-primary text-primary-foreground rounded-lg shadow-lg px-4 py-2 font-medium" />
    </section>
  );
}
