import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });

export const metadata = {
  title: {
    default: 'Sunsab',
    template: '%s | Sunsab',
  },
  description: 'Solving problems, building solutions. We harness technology\'s power for positive global change.',
  keywords: ['Sunsab', 'software development', 'web development', 'mobile app development', 'cloud hosting', 'UI/UX design', 'IoT development', 'e-commerce solutions'],
  authors: [{ name: 'Sunsab Team' }],
  creator: 'Sunsab',
  publisher: 'Sunsab',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  openGraph: {
    title: 'Sunsab',
    description: 'Solving problems, building solutions. We harness technology\'s power for positive global change.',
    url: 'https://sunsab.com/',
    siteName: 'Sunsab',
    images: [
      {
        url: 'https://sunsab.com/card-image.jpg',
        width: 800,
        height: 400,
        alt: 'A pen and keyboard on a stylized yellow background, with the sunsab logo in the middle.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunsab',
    description: 'Solving problems, building solutions. We harness technology\'s power for positive global change.',
    images: ['https://sunsab.com/card-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="bumblebee">
      <body className={`${roboto.className} min-h-screen flex flex-col`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}