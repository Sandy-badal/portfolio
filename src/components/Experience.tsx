import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-md">
            <Briefcase className="w-8 h-8 text-gray-700" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-gray-700" />
              </div>
              <div className="ml-6 flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Full Stack Developer Intern
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  Gama Horizon Properties
                </p>

                <div className="space-y-3 text-gray-600">
                  <p className="leading-relaxed">
                    Contributed to the development of a comprehensive real estate website,
                    implementing both frontend and backend features to enhance user experience
                    and functionality.
                  </p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Developed responsive web pages using modern frontend technologies</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Implemented SEO improvements to increase organic traffic and search visibility</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Optimized website performance and loading times</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Collaborated with the team to integrate backend APIs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Conducted testing and debugging to ensure cross-browser compatibility</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      Full Stack Development
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      SEO Optimization
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      Web Development
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
