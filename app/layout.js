// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LoadingAnimation from "../components/LoadingAnimation";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ContactQuery from "../components/ContactQuery";
import Specialofferbanner from '../components/Specialofferbanner';
import FloatingContactButtons from "@/components/FloatingContactButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Schema Objects
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "We One Aviation Academy",
  "alternateName": "WeOne Aviation",
  "url": "https://www.weoneaviation.com",
  "logo": "https://www.weoneaviation.com/logo.png",
  "description": "India's premier DGCA approved aviation training academy. CPL, PPL, ATPL, SPL courses. 3500+ pilots trained since 2009.",
  "foundingDate": "2009",
  "email": "info@weoneaviation.in",
  "telephone": "+919355611996",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "C-404, 3rd Floor, Ramphal Chowk, Dwarka, Sector-7",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110077",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.facebook.com/weoneaviation",
    "https://www.instagram.com/weoneaviation",
    "https://www.linkedin.com/company/weoneaviation",
    "https://www.youtube.com/@weoneaviation"
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "We One Aviation Academy",
  "url": "https://www.weoneaviation.com",
  "telephone": "+919355611996",
  "email": "info@weoneaviation.in",
  "description": "India's premier DGCA approved aviation training academy. 3500+ pilots trained with 98% pass rate.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "C-404, 3rd Floor, Ramphal Chowk, Dwarka, Sector-7",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110077",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "priceRange": "₹₹₹"
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "We One Aviation Academy",
  "url": "https://www.weoneaviation.com",
  // Enables Google Sitelinks Search Box
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.weoneaviation.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// ✅ Global metadata — each page overrides title using the template
export const metadata = {
  metadataBase: new URL("https://www.weoneaviation.com"),

  // Every page title will be: "Page Name | We One Aviation Academy"
  title: {
    default: "We One Aviation Academy | Best Pilot Training Institute in India",
    template: "%s | We One Aviation Academy",
  },

  description:
    "India's premier DGCA approved aviation training academy. CPL, PPL, ATPL, SPL courses. 3500+ pilots trained since 2009. Free career counselling available.",

  keywords: [
    "pilot training India",
    "DGCA approved aviation academy",
    "CPL training India",
    "commercial pilot license India",
    "best pilot training institute India",
    "aviation academy Delhi",
    "We One Aviation Academy",
    "DGCA ground classes",
  ],

  authors: [{ name: "We One Aviation Academy", url: "https://www.weoneaviation.com" }],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.weoneaviation.com",
    siteName: "We One Aviation Academy",
    title: "We One Aviation Academy | Best Pilot Training Institute in India",
    description:
      "India's premier DGCA approved aviation training academy. CPL, PPL, ATPL, SPL courses. 3500+ pilots trained since 2009.",
    images: [
      {
        url: "https://www.weoneaviation.com/og-image.jpg", // update with your actual OG image
        width: 1200,
        height: 630,
        alt: "We One Aviation Academy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "We One Aviation Academy | Best Pilot Training Institute in India",
    description:
      "India's premier DGCA approved aviation training academy. CPL, PPL, ATPL courses. 3500+ pilots trained.",
    images: ["https://www.weoneaviation.com/og-image.jpg"],
  },

  verification: {
    // Add your Google Search Console verification code here
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LoadingAnimation />
        <Navbar />
        <Specialofferbanner />
        <ContactQuery />
        {children}
        <FloatingContactButtons />
        <Footer />
      </body>
    </html>
  );
}