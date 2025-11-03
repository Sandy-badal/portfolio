import { Mail, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
            <Mail className="w-8 h-8 text-gray-700" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 text-center mb-12">
            I'm always open to discussing new opportunities, collaborations, or just having
            a chat about technology. Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <MapPin className="w-6 h-6 text-gray-700" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-600">Bangalore, India</p>
                </div>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/sandhipani-choudhury-3a6252360"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Linkedin className="w-6 h-6 text-gray-700" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">LinkedIn</h3>
                  <p className="text-gray-600">Connect with me</p>
                </div>
              </div>
            </a>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.linkedin.com/in/sandhipani-choudhury-3a6252360"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg"
            >
              <Mail className="mr-2 w-5 h-5" />
              Let's Connect
            </a>
          </div>
        </div>
      </div>

      <footer className="mt-20 py-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">
            © 2025 Sandhipani Choudhury. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
