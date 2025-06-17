
import React from 'react';
import { Mail, Globe, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-1 rounded-lg font-bold text-xl">
                A
              </div>
              <span className="text-xl font-bold">Avadyne</span>
            </div>
            <div className="text-blue-300 text-sm font-medium mb-4 uppercase tracking-wide">
              Tech x Transformations
            </div>
            <p className="text-gray-300 mb-4">
              Delivering high-impact technology solutions tailored to your business goals.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <Globe size={16} />
              <span>avadyne.eu</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>DevOps & Cloud Engineering</li>
              <li>Cloud Migration & Optimization</li>
              <li>QA Automation & Testing</li>
              <li>Software Development</li>
              <li>Security & Compliance</li>
              <li>Offshore Engineering Teams</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>contact@avadyne.eu</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1" />
                <div>
                  <p>Europe-based leadership</p>
                  <p>India-based development teams</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Avadyne. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
