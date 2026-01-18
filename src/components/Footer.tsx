
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

  // FIX: Changed JSX.Element to React.ReactNode to fix "Cannot find namespace 'JSX'" error.
  const SocialIcon: React.FC<{ href: string, icon: React.ReactNode }> = ({ href, icon }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-medical-blue transition-colors duration-300">
      {icon}
    </a>
  );

  return (
    <footer className="bg-text-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-4 text-gray-400 text-sm">
              Restoring hope and empowering communities through accessible healthcare, education, and support for vulnerable women and children in Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/programs" className="text-sm text-gray-400 hover:text-white">Our Programs</Link></li>
              <li><Link to="/impact-stories" className="text-sm text-gray-400 hover:text-white">Impact Stories</Link></li>
              <li><Link to="/get-involved" className="text-sm text-gray-400 hover:text-white">Get Involved</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold tracking-wider">Contact Us</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start">
                <span className="mt-1 mr-2 text-medical-blue">&#9679;</span>
                <span className="text-gray-400">Abuja, Nigeria</span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-2 text-medical-blue">&#9679;</span>
                <a href="mailto:info@whiteheartinitiative.org" className="text-gray-400 hover:text-white">info@whiteheartinitiative.org</a>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-2 text-medical-blue">&#9679;</span>
                <a href="tel:+234000000000" className="text-gray-400 hover:text-white">+234 (0) 000 000 000</a>
              </li>
            </ul>
          </div>
          
          {/* Social */}
          <div>
             <h3 className="text-lg font-semibold tracking-wider">Connect</h3>
             <div className="flex space-x-4 mt-4">
                 <SocialIcon href="#" icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.494v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z"/></svg>} />
                 <SocialIcon href="#" icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"/></svg>} />
                 <SocialIcon href="#" icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.65.177-1.336.213-2.03.082.607 1.884 2.372 3.256 4.466 3.293-1.728 1.353-3.895 2.15-6.258 2.15-.407 0-.808-.024-1.207-.07 2.235 1.432 4.897 2.27 7.732 2.27 9.282 0 14.364-7.69 14.364-14.364 0-.218-.005-.436-.014-.652.986-.713 1.84-1.604 2.52-2.616z"/></svg>} />
            </div>
             <Link to="/admin-docs" className="text-sm text-gray-500 hover:text-white mt-4 block">Admin & Deployment Docs</Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} White Heart Development Initiative. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
