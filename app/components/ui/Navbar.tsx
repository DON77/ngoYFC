"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { ABOUT_NAVIGATION, NAVIGATION } from "@/lib/navigation";
import Container from "./Container";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const aboutButton = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  function closeMenus() {
    setOpen(false);
    setAboutOpen(false);
  }

  return (
    <header
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          if (aboutOpen) {
            setAboutOpen(false);
            aboutButton.current?.focus();
          } else if (open) {
            setOpen(false);
            menuButton.current?.focus();
          }
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) closeMenus();
      }}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:block focus:p-3"
      >
        Skip to content
      </a>
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-4">
          <Link
            href="/"
            onClick={closeMenus}
            className="text-lg font-extrabold leading-tight text-slate-900"
          >
            Youth for Change
            <span className="block text-xs font-medium text-blue-700">
              Armenia · Since 2017
            </span>
          </Link>
          <button
            ref={menuButton}
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="site-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-slate-100 lg:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
          <nav
            id="site-navigation"
            aria-label="Main navigation"
            className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] flex-col gap-1 overflow-y-auto border-b border-slate-200 bg-white p-5 lg:static lg:flex lg:max-h-none lg:flex-row lg:items-center lg:overflow-visible lg:border-0 lg:p-0`}
          >
            {NAVIGATION.map((item) => (
              <div key={item.href} className="relative">
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    onClick={closeMenus}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className="block rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-700 aria-[current=page]:text-blue-700"
                  >
                    {item.title}
                  </Link>
                  {item.href === "/about" && (
                    <button
                      ref={aboutButton}
                      type="button"
                      aria-label="About Us pages"
                      aria-expanded={aboutOpen}
                      aria-controls="about-navigation"
                      onClick={() => setAboutOpen(!aboutOpen)}
                      className="flex h-11 w-9 items-center justify-center rounded-lg hover:bg-slate-100"
                    >
                      <ChevronDown
                        size={17}
                        className={aboutOpen ? "rotate-180" : ""}
                      />
                    </button>
                  )}
                </div>
                {item.href === "/about" && aboutOpen && (
                  <div
                    id="about-navigation"
                    className="border-l-2 border-blue-100 pl-3 lg:absolute lg:left-0 lg:top-full lg:w-56 lg:rounded-lg lg:border lg:border-slate-200 lg:bg-white lg:p-2 lg:shadow-lg"
                  >
                    {ABOUT_NAVIGATION.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={closeMenus}
                        aria-current={
                          pathname === child.href ? "page" : undefined
                        }
                        className="block rounded-lg px-3 py-3 text-sm text-slate-700 hover:bg-slate-50 aria-[current=page]:text-blue-700"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
