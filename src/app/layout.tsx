import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallButton from '@/components/CallButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bhagirathi Abroad Study',
  description: 'Guiding Your Success, Together',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CallButton />
      </body>
    </html>
  );
}
