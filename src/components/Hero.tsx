import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-4">
            Sandhipani Choudhury
          </h1>
          <h2 className="text-2xl sm:text-3xl text-gray-600 mb-6">
            Aspiring Software Engineer
          </h2>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Building secure and scalable web applications with modern technologies
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://www.linkedin.com/in/sandhipani-choudhury-3a6252360"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-gray-700" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a
              href="#contact"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6 text-gray-700" />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="inline-flex items-center px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg"
          >
            Learn More
            <ArrowDown className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
