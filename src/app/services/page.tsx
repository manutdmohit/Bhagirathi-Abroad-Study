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

export default function Service() {
  return (
    <div className="mt-8">
      <h2 className="text-4xl font-bold mb-12 text-center text-blue-600">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
        <Card className="flex flex-col justify-between p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 bg-white">
          <CardHeader className="flex flex-col items-center h-48">
            <span className="flex justify-center items-center">
              <GraduationCap size={30} className="mb-4 text-blue-600" />
            </span>
            <CardTitle className="text-2xl font-semibold text-center">
              Student Visas
            </CardTitle>
            <CardDescription className="text-center">
              Comprehensive support for obtaining student visas, ensuring a
              smooth application process and successful outcome.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 mt-4">
            <p className="text-gray-700">
              Our team of experts will guide you through the entire process,
              from preparing the necessary documentation to navigating the visa
              interview.
            </p>
            <p className="text-gray-700">
              We also offer support services for students, including
              pre-departure orientation and assistance with accommodation and
              settling in.
            </p>
          </CardContent>
        </Card>

        <Card className="flex flex-col justify-between p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 bg-white">
          <CardHeader className="flex flex-col items-center h-48">
            <span className="flex justify-center items-center">
              <Briefcase size={30} className="mb-4 text-blue-600" />
            </span>
            <CardTitle className="text-2xl font-semibold text-center">
              Working Visas
            </CardTitle>
            <CardDescription className="text-center">
              Helping professionals secure working visas to pursue their career
              goals in Japan.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 mt-4">
            <p className="text-gray-700">
              We offer personalized guidance to ensure that all requirements are
              met and that your application has the best chance of success.
            </p>
            <p className="text-gray-700">
              In addition to visa assistance, we provide career counseling and
              job placement services to help you find the right opportunities in
              Japan.
            </p>
          </CardContent>
        </Card>

        <Card className="flex flex-col justify-between p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 bg-white">
          <CardHeader className="flex flex-col items-center h-48">
            <span className="flex justify-center items-center">
              <Languages size={30} className="mb-4 text-blue-600" />
            </span>
            <CardTitle className="text-2xl font-semibold text-center">
              Japanese Language Classes
            </CardTitle>
            <CardDescription className="text-center">
              Offering tailored language classes to help you integrate smoothly
              into Japanese society.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 mt-4">
            <p className="text-gray-700">
              Our language classes are designed to meet your level, ensuring you
              can communicate effectively and meet visa requirements.
            </p>
            <p className="text-gray-700">
              We provide both beginner and advanced level classes, helping you
              to feel confident in your new environment.
            </p>
          </CardContent>
        </Card>

        <Card className="flex flex-col justify-between p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 bg-white">
          <CardHeader className="flex flex-col items-center h-48">
            <span className="flex justify-center items-center">
              <Handshake size={30} className="mb-4 text-blue-600" />
            </span>
            <CardTitle className="text-2xl font-semibold text-center">
              Consultation Services
            </CardTitle>
            <CardDescription className="text-center">
              Personalized advice and support to help you choose the right
              educational institution or employment opportunity in Japan.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 mt-4">
            <p className="text-gray-700">
              Our expert consultants provide insights and guidance tailored to
              your individual goals and aspirations.
            </p>
            <p className="text-gray-700">
              We ensure you have all the information you need to make informed
              decisions about your future in Japan.
            </p>
          </CardContent>
        </Card>

        <Card className="flex flex-col justify-between p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 bg-white">
          <CardHeader className="flex flex-col items-center h-48">
            <span className="flex justify-center items-center">
              <FileText size={30} className="mb-4 text-blue-600" />
            </span>
            <CardTitle className="text-2xl font-semibold text-center">
              Application Assistance
            </CardTitle>
            <CardDescription className="text-center">
              Guiding you through the entire application process, from preparing
              documents to submitting applications.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 mt-4">
            <p className="text-gray-700">
              We ensure that all requirements are met and your applications are
              completed accurately and efficiently.
            </p>
            <p className="text-gray-700">
              Our support maximizes your chances of a successful application,
              whether for study or work.
            </p>
          </CardContent>
        </Card>

        <Card className="flex flex-col justify-between p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 bg-white">
          <CardHeader className="flex flex-col items-center h-48">
            <span className="flex justify-center items-center">
              <Plane size={30} className="mb-4 text-blue-600" />
            </span>
            <CardTitle className="text-2xl font-semibold text-center">
              Pre-Departure Support
            </CardTitle>
            <CardDescription className="text-center">
              Preparing you for life in Japan with cultural insights,
              accommodation arrangements, and more.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 mt-4">
            <p className="text-gray-700">
              Our pre-departure orientation covers everything you need to know
              to settle in comfortably and confidently in Japan.
            </p>
            <p className="text-gray-700">
              We provide support with finding accommodation, understanding local
              customs, and making your transition as smooth as possible.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
