"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";

const links = [
  ["01", "Home", "home"],
  ["02", "Projects", "projects"],
  ["03", "Experience", "experience"],
  ["04", "About", "about"],
  ["05", "Resume", "resume"],
  ["06", "Contact", "contact"],
] as const;

export default function SamanthaNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const update = () => {
      const marker = window.scrollY + 120;
      let nextActive = "home";

      for (const [, , id] of links) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) {
          nextActive = id;
        }
      }

      setActive(nextActive);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="samNavShell">
      <a className="skipLink" href="#home">Skip to content</a>

      <div className="samNav">
        <button
          className="samBrand"
          onClick={() => go("home")}
          aria-label="Go to home"
        >
          samantha<span>/dev</span>
        </button>

        <nav className="samDesktopNav" aria-label="Primary navigation">
          {links.map(([number, label, id]) => (
            <button
              key={id}
              type="button"
              className={active === id ? "active" : ""}
              onClick={() => go(id)}
              aria-current={active === id ? "page" : undefined}
            >
              <small>{number}</small>
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <button
          className="samMenuButton"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          <Icon name={open ? "close" : "menu"} size={18} />
        </button>
      </div>

      <nav
        className={`samMobileNav ${open ? "open" : ""}`}
        aria-label="Mobile navigation"
      >
        {links.map(([number, label, id]) => (
          <button
            key={id}
            type="button"
            className={active === id ? "active" : ""}
            onClick={() => go(id)}
          >
            <small>{number}</small>
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </header>
  );
}
