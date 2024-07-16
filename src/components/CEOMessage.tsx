'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';
import Image from 'next/image';

const CEOSMessage = () => {
  return (
    <div className="container mx-auto py-8">
      <Card className="bg-gray-100 shadow-lg rounded-lg p-6 w-full mx-auto md:max-w-7xl text-left">
        <CardHeader>
          <div className="flex items-center">
            <div className="w-16 h-16 mr-4 overflow-hidden rounded-full">
              <Image
                src="/ceo.png"
                alt="CEO Image"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <CardTitle className="text-3xl font-bold">
              Message from the CEO
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="mt-4">
          <MessageSquare className="text-blue-600 mb-4" size={48} />
          <p className="text-gray-800 leading-relaxed text-left">
            Welcome to Bhagirathi Abroad Study Pvt. Ltd! With years of
            experience in the field of international education and career
            counseling, our mission is to provide exceptional support and
            guidance to individuals seeking to achieve their educational and
            professional goals abroad. We understand the challenges and
            opportunities that come with studying or working in a foreign
            country, and we are committed to making this journey as smooth and
            rewarding as possible for you.
          </p>
          <p className="text-gray-800 leading-relaxed mt-4 text-left">
            At Bhagirathi Abroad Study, we pride ourselves on our personalized
            approach, ensuring that each client's unique needs and aspirations
            are met with the highest standards of service. Our dedicated team of
            experts is here to assist you every step of the way, from visa
            applications and language training to finding the perfect
            educational institution or job opportunity.
          </p>
          <p className="text-gray-800 leading-relaxed mt-4 text-left">
            Over the years, we have built strong relationships with universities
            and employers around the world, enabling us to offer you the best
            opportunities and support throughout your journey. Our commitment to
            excellence and our passion for helping you succeed are what drive us
            every day.
          </p>
          <p className="text-gray-800 leading-relaxed mt-4 text-left">
            Thank you for choosing Bhagirathi Abroad Study Pvt. Ltd. We look
            forward to being a part of your success story.
          </p>
          <p className="text-gray-800 leading-relaxed mt-4 font-bold">
            - Akash Bam, CEO, Bhagirathi Abroad Study Pvt. Ltd
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CEOSMessage;
