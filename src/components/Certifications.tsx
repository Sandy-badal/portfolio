import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Google UX Design Professional Certificate',
      issuer: 'Google',
      link: 'https://coursera.org/verify/professional-cert/OX6FQGTOC7J8',
    },
    {
      title: 'Google Data Analytics Professional Certificate',
      issuer: 'Google',
      link: 'https://www.coursera.org/account/accomplishments/verify/X97G6AVEY6JM',
    },
    {
      title: 'Strategic Brand Management',
      issuer: 'Coursera',
      link: 'https://coursera.org/verify/N7BTWM7DZY80',
    },
    {
      title: 'Programming with Java',
      issuer: 'Coursera',
      link: 'https://www.coursera.org/account/accomplishments/verify/NHXBXJ5V2Z6J',
    },
    {
      title: 'AI Introduction',
      issuer: 'Coursera',
      link: 'https://coursera.org/verify/2UDODZCB264L',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-md">
            <Award className="w-8 h-8 text-gray-700" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-gray-700" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{cert.issuer}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900 font-medium"
              >
                View Certificate
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
