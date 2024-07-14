import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function GetStarted() {
  return (
    <div className="bg-gray-700 text-white py-12 mb-8 w-full">
      <div className="container mx-auto text-center">
        <h2 className="text-white text-3xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="mb-8">
          Contact us today to begin your journey towards studying or working in
          Japan.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-primary font-bold hover:bg-blue-800"
        >
          <Link href="/contact" className="text-white hover:text-white">
            Get Started
          </Link>
        </Button>
      </div>
    </div>
  );
}
