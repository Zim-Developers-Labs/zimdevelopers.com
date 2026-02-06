import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../globals.css';
import LaunchBanner from '@/components/banners.tsx/launch';
import Header from '@/components/header';
import { Toaster } from 'sonner';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap', // Recommended for better performance and reduced layout shift
  variable: '--font-poppins', // Define a CSS variable for easy use
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Specify desired weights
});

export const metadata: Metadata = {
  title: 'Zim Developers Community',
  description:
    'A group of developers working towards building a vibrant developer community and ultimately a better tech ecosystem in Zimbabwe.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <LaunchBanner />
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
