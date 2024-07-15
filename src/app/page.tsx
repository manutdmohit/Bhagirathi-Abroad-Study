import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import Service from '@/components/Service';
import GetStarted from '@/components/GetStarted';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      <div className="min-h-100 flex flex-col items-center mx-auto px-4 py-12 bg-blue-900 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl">
          <div className="flex justify-center w-full md:w-auto mb-4 md:mb-0">
            <Image
              src="/logo.png"
              alt="Bhagirathi Abroad Study"
              width={200}
              height={200}
            />
          </div>

          <div className="text-center md:text-left md:ml-auto max-w-md">
            <h1 className="text-4xl font-bold">
              Welcome to Bhagirathi Abroad Study Pvt. Ltd
            </h1>
            <p className="mt-2 text-left">
              Your trusted consultancy for studying and working in Japan. We
              provide comprehensive services to help you achieve your dreams.
            </p>
            <p className="mt-2 text-left">
              Our team of experts offers personalized guidance and support,
              ensuring a smooth and successful application process for student
              and working visas.
            </p>
            <p className="mt-2 text-left">
              In addition, we provide high-quality Japanese language classes to
              help you adapt to life in Japan and enhance your career prospects.
            </p>
            <p className="mt-2 text-left">
              Join us on a journey towards a brighter future with Bhagirathi
              Abroad Study Pvt. Ltd.
            </p>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hover:bg-blue-700 bg-blue-800 mt-4"
            >
              <Link href="/contact" className="text-white hover:text-white">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <GetStarted />

      <Service />
      <ContactForm />
    </>
  );
}
