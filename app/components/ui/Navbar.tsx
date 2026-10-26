"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { ABOUT_NAVIGATION, NAVIGATION } from "@/lib/navigation";
import Container from "./Container";
import Button from "./Button";

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
            className="shrink-0 text-base font-bold leading-tight text-slate-900"
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
            className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-slate-100 xl:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
          <nav
            id="site-navigation"
            aria-label="Main navigation"
            className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] flex-col gap-1 overflow-y-auto border-b border-slate-200 bg-white p-5 xl:static xl:flex xl:max-h-none xl:flex-row xl:items-center xl:gap-6 xl:overflow-visible xl:border-0 xl:p-0`}
          >
            {NAVIGATION.map((item) => (
              <div key={item.href} className="relative">
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    onClick={closeMenus}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600 aria-[current=page]:text-blue-700 xl:px-0"
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
                    className="border-l-2 border-blue-100 pl-3 xl:absolute xl:left-0 xl:top-full xl:w-56 xl:rounded-lg xl:border xl:border-slate-200 xl:bg-white xl:p-2 xl:shadow-lg"
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
            <Link href="/volunteer" onClick={closeMenus} className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white xl:hidden">
              Get Involved <ArrowRight size={18} />
            </Link>
          </nav>
          <div className="hidden xl:block">
            <Button href="/volunteer">Get Involved <ArrowRight size={18} /></Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
