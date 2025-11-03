import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-md">
            <GraduationCap className="w-8 h-8 text-gray-700" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-gray-700" />
              </div>
              <div className="ml-6 flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Bachelor of Technology in Computer Science Engineering
                </h3>
                <p className="text-lg text-gray-600 mb-2">
                  Jain (Deemed-to-be University), Bangalore
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <span className="font-semibold mr-2">Duration:</span>
                    2022 – 2026
                  </span>
                  <span className="flex items-center">
                    <span className="font-semibold mr-2">GPA:</span>
                    7.5/10
                  </span>
                </div>
                <p className="mt-4 text-gray-600">
                  Focused on full-stack development, software engineering principles,
                  data structures, algorithms, and modern web technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
