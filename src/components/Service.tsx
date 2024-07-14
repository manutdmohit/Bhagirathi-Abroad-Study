'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  GraduationCap,
  Briefcase,
  Languages,
  Handshake,
  FileText,
  Plane,
} from 'lucide-react';

import { Fade } from 'react-awesome-reveal';

const services = [
  {
    id: 1,
    title: 'Student Visas',
    description:
      'Comprehensive support for obtaining student visas, ensuring a smooth application process and successful outcome.',
    icon: <GraduationCap size={30} className="mb-4 text-blue-600" />,
    content: (
      <>
        <p className="text-gray-700">
          Our team of experts will guide you through the entire process, from
          preparing the necessary documentation to navigating the visa
          interview.
        </p>
        <p className="text-gray-700">
          We also offer support services for students, including pre-departure
          orientation and assistance with accommodation and settling in.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: 'Working Visas',
    description:
      'Helping professionals secure working visas to pursue their career goals in Japan.',
    icon: <Briefcase size={30} className="mb-4 text-blue-600" />,
    content: (
      <>
        <p className="text-gray-700">
          We offer personalized guidance to ensure that all requirements are met
          and that your application has the best chance of success.
        </p>
        <p className="text-gray-700">
          In addition to visa assistance, we provide career counseling and job
          placement services to help you find the right opportunities in Japan.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: 'Japanese Language Classes',
    description:
      'Offering tailored language classes to help you integrate smoothly into Japanese society.',
    icon: <Languages size={30} className="mb-4 text-blue-600" />,
    content: (
      <>
        <p className="text-gray-700">
          Our language classes are designed to meet your level, ensuring you can
          communicate effectively and meet visa requirements.
        </p>
        <p className="text-gray-700">
          We provide both beginner and advanced level classes, helping you to
          feel confident in your new environment.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: 'Consultation Services',
    description:
      'Personalized advice and support to help you choose the right educational institution or employment opportunity in Japan.',
    icon: <Handshake size={30} className="mb-4 text-blue-600" />,
    content: (
      <>
        <p className="text-gray-700">
          Our expert consultants provide insights and guidance tailored to your
          individual goals and aspirations.
        </p>
        <p className="text-gray-700">
          We ensure you have all the information you need to make informed
          decisions about your future in Japan.
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: 'Application Assistance',
    description:
      'Guiding you through the entire application process, from preparing documents to submitting applications.',
    icon: <FileText size={30} className="mb-4 text-blue-600" />,
    content: (
      <>
        <p className="text-gray-700">
          We ensure that all requirements are met and your applications are
          completed accurately and efficiently.
        </p>
        <p className="text-gray-700">
          Our support maximizes your chances of a successful application,
          whether for study or work.
        </p>
      </>
    ),
  },
  {
    id: 6,
    title: 'Pre-Departure Support',
    description:
      'Preparing you for life in Japan with cultural insights, accommodation arrangements, and more.',
    icon: <Plane size={30} className="mb-4 text-blue-600" />,
    content: (
      <>
        <p className="text-gray-700">
          Our pre-departure orientation covers everything you need to know to
          settle in comfortably and confidently in Japan.
        </p>
        <p className="text-gray-700">
          We provide support with finding accommodation, understanding local
          customs, and making your transition as smooth as possible.
        </p>
      </>
    ),
  },
];

export default function Service() {
  return (
    <>
      <h2 className="text-4xl font-bold mb-12 text-center text-blue-600">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
        {services.map((service, index) => (
          <Fade key={service.id} triggerOnce direction="up" delay={index * 200}>
            <Card className="flex flex-col h-full justify-between p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardHeader className="flex flex-col items-center">
                <span className="flex justify-center items-center">
                  {service.icon}
                </span>
                <CardTitle className="text-2xl font-semibold text-center">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-center">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 mt-4">
                {service.content}
              </CardContent>
            </Card>
          </Fade>
        ))}
      </div>
    </>
  );
}
