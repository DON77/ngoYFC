import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Container from "./Container";
import { ABOUT_NAVIGATION, NAVIGATION } from "@/lib/navigation";
import { organization } from "@/lib/organization";

const socialIcons = [FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube];

export default function Footer() {
  return (
    <footer className="border-t border-teal-200 bg-teal-50 text-slate-800">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Link href="/" className="text-2xl font-bold">
              {organization.name}
            </Link>
            <p className="mt-4 max-w-md text-sm">
              {organization.acknowledgment}
            </p>
            <div className="mt-5 flex gap-2">
              {organization.socials.map((social, index) => {
                const Icon = socialIcons[index];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.name} (opens in a new tab)`}
                    title={social.name}
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-teal-200 hover:bg-teal-100"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
          <nav aria-label="Footer navigation">
            <h2 className="text-base">Explore</h2>
            <ul className="mt-4 space-y-3">
              {NAVIGATION.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-blue-700"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Organization navigation">
            <h2 className="text-base">Our organization</h2>
            <ul className="mt-4 space-y-3">
              {ABOUT_NAVIGATION.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-blue-700"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/volunteer" className="text-sm hover:text-blue-700">
                  Volunteer With Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t border-teal-200 py-6 text-sm">
          <a href={`mailto:${organization.email}`} className="font-semibold">
            {organization.email}
          </a>
          <address className="max-w-lg not-italic">
            {organization.address}
          </address>
        </div>
        <p className="border-t border-teal-200 py-5 text-xs">
          &copy; {new Date().getFullYear()} {organization.name}. All rights
          reserved.
        </p>
      </Container>
    </footer>
  );
}
