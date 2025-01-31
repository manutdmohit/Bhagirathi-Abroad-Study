'use client';

import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start text-left space-y-8 md:space-y-0">
          <div className="flex flex-col items-start md:items-start">
            <h2 className="text-white text-2xl font-bold">
              Bhagirathi Abroad Study Pvt. Ltd
            </h2>
            <p className="text-white mt-2">Guiding Your Success, Together</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-16 w-full md:w-auto">
            <div className="space-y-4 mt-4 md:mt-0 text-left">
              <h3 className="text-white text-xl font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-white hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-white hover:text-white"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4 mt-4 md:mt-0 text-left">
              <h3 className="text-white text-xl font-semibold">Social Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://www.facebook.com/profile.php?id=61554353576365"
                    target="_blank"
                    className="text-white hover:text-white"
                  >
                    <FaFacebook size={20} className="inline-block mr-2" />{' '}
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:baspl202477@gmail.com"
                    className="text-white hover:text-white"
                  >
                    <MdEmail size={20} className="inline-block mr-2" /> Email
                  </Link>
                </li>
                <li>
                  <a
                    href="https://wa.me/+9779801711850"
                    className="text-white hover:text-white"
                    target="_blank"
                  >
                    <FaWhatsapp size={20} className="inline-block mr-2" />{' '}
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4 mt-4 md:mt-0 text-left">
              <h3 className="text-white text-xl font-semibold">Contact Us</h3>
              <Link href="tel:+9779801711850">
                <p className="text-white mt-4">Phone: +977 980 1711850</p>
              </Link>
              <Link href="mailto:baspl202477@gmail.com">
                <p className="text-white mt-2">Email: baspl202477@gmail.com</p>
              </Link>
              <p className="text-white mt-1">
                Address: Lamki Tikapur Road, Tikapur-1, Kailali
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          © {new Date().getFullYear()} Bhagirathi Abroad Study Pvt. Ltd. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
