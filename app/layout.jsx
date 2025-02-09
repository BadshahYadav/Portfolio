import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Badshah kumar - Full Stack Web Developer",
  description:
    "I'm Badshah Kumar, a passionate and dedicated 4th-year Computer Science student at BCE PATNA. I'm  a Full Stack web developer from Madhepura, Bihar.",
  keywords: [
    "Badshah",
    "Badshah Kumar",
    "theBadshahkumar",
    "the Badshah kumar",
    "Badshah Kumar Patna",
    "Badshah Kumar Madhepura",
    "Badshah Kumar web developer",
    "Badshah Kumar full stack developer",
    "Badshah Kumar ggits",
    "Badshah Madhepura",
    "Badshah Patna",
  ],
  authors: [
    { name: "Badshah kumar" },
    { name: "Badshah Kumar", url: "https://theBadshahkumar.in" },
  ],
  creator: "Badshah Kumar",
  publisher: "Badshah Kumar",
  category: "technology",
  metadataBase: new URL("https://theBadshahkumar.in"),
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Badshah Kumar",
    description:
      "I'm Badshah Kumar, a passionate and dedicated 4th-year Computer Science student at BCE PATNA. I'm  a Full Stack web developer from Madhepura, Bihar.",
    url: "https://theBadshahkumar.in",
    siteName: "Badshah Kumar",
    images: [
      {
        url: "/Badshahkumar/Badshahkumar.jpg",
        width: 600,
        height: 600,
      },
      {
        url: "/Badshahkumar/Badshahkumar.jpg",
        width: 500,
        height: 600,
      },
      // {
      //   url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
      //   width: 1800,
      //   height: 1600,
      //   alt: 'My custom alt',
      // },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Badshah Kumar",
    description:
      "I'm Badshah Kumar, a passionate and dedicated 4th-year Computer Science student at BCE PATNA. I'm  a Full Stack web developer from Madhepura, Bihar.",
    siteId: "",
    creator: "@BadshahYadav",
    creatorId: "@BadshahYadav",
    images: ["/Badshahkumar/Badshahkumar.jpg"],
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    // other: {
    //   me: ['my-email', 'my-link'],
    // },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-small bg-fixed bg-cover bg-center h-screen`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
