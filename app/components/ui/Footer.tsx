import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Container from "./Container";
import Button from "./Button";
import { ABOUT_NAVIGATION, NAVIGATION } from "@/lib/navigation";
import { organization } from "@/lib/organization";

const socialIcons = [FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube];

export default function Footer() {
  return (
    <footer className="border-t border-teal-200 bg-teal-50 text-slate-800">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold">
              {organization.name}
            </Link>
            <p className="mt-4 max-w-md text-sm">
              {organization.acknowledgment}
            </p>
            <div className="mt-6 flex gap-3">
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
            <h2 className="text-lg">Explore</h2>
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
            <h2 className="text-lg">Our organization</h2>
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
        <div className="grid items-center gap-6 border-t border-teal-200 py-8 text-sm md:grid-cols-3">
          <a href={`mailto:${organization.email}`} className="flex items-center gap-3 font-semibold">
            <Mail size={20} className="shrink-0" aria-hidden="true" />
            {organization.email}
          </a>
          <address className="flex max-w-lg items-center gap-3 not-italic">
            <MapPin size={20} className="shrink-0" aria-hidden="true" />
            {organization.address}
          </address>
          <div className="md:text-right"><Button href="/contact" size="sm">Contact Us</Button></div>
        </div>
        <p className="border-t border-teal-200 py-6 text-center text-sm">
          &copy; {new Date().getFullYear()} {organization.name}. All rights
          reserved.
        </p>
      </Container>
    </footer>
  );
}
