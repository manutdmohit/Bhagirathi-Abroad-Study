import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="w-full max-w-7xl container mx-auto py-8 px-4">
      <h1 className="text-primary text-4xl font-bold text-center mb-8">
        About Us
      </h1>

      <section className="mb-16">
        <h2 className="text-primary text-3xl font-semibold mb-4">
          Our Mission
        </h2>
        <p className="text-gray-800 leading-relaxed">
          At Bhagirathi Abroad Study Pvt. Ltd, our mission is to revolutionize
          the way individuals achieve their educational and career goals abroad.
          We are committed to providing exceptional support and guidance to
          students and professionals, ensuring they have the best opportunities
          and experiences during their journey.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-primary text-3xl font-semibold mb-4">Our Vision</h2>
        <p className="text-gray-800 leading-relaxed">
          Our vision is to be the leading provider of international education
          and career counseling services. We aim to create a global network of
          successful students and professionals who have achieved their dreams
          through our dedicated support and expertise.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-primary text-3xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-800 leading-relaxed">
          <li>
            Integrity: We uphold the highest standards of integrity in all our
            actions.
          </li>
          <li>Excellence: We strive for excellence in everything we do.</li>
          <li>
            Collaboration: We work together to meet the needs of our clients and
            help them succeed.
          </li>
          <li>
            Innovation: We foster a culture of innovation to provide the best
            solutions.
          </li>
          <li>
            Commitment: We are committed to the success of our clients and their
            goals.
          </li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-primary text-3xl font-semibold mb-4">
          Our Services
        </h2>
        <p className="text-gray-800 leading-relaxed">
          We offer a wide range of services to support students and
          professionals in their journey abroad. Our services include:
        </p>
        <ul className="list-disc list-inside text-gray-800 leading-relaxed">
          <li>Visa application assistance</li>
          <li>Language training programs</li>
          <li>Educational and career counseling</li>
          <li>Accommodation and settlement support</li>
          <li>Job placement assistance</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-primary text-3xl font-semibold mb-4">
          Why Choose Us?
        </h2>
        <p className="text-gray-800 leading-relaxed">
          Choosing Bhagirathi Abroad Study Pvt. Ltd means choosing a partner
          committed to your success. Here’s why you should choose us:
        </p>
        <ul className="list-disc list-inside text-gray-800 leading-relaxed">
          <li>Experienced team of professionals</li>
          <li>Personalized support tailored to your needs</li>
          <li>Strong relationships with global institutions and employers</li>
          <li>Proven track record of successful placements</li>
          <li>Comprehensive services covering all aspects of your journey</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-primary text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-800 leading-relaxed">
          If you have any questions or need further information, feel free to
          contact us. We are here to help you every step of the way.
        </p>

        <p className="text-gray-800 leading-relaxed">
          <Link
            href="mailto: baspl202477@gmail.com"
            className="hover:text-gray-600"
          >
            Email: baspl202477@gmail.com
          </Link>
          <br />
          <Link href="tel: +977 980 1711850" className="hover:text-gray-600">
            Phone: +977 980 1711850
          </Link>
          <br />
          Address: Lamki Tikapur Road, Tikapur-1, Kailali
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
