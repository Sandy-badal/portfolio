import { Code, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Travel Booking Platform',
      description:
        'A full-stack travel booking application built with the MERN stack, featuring secure payment processing through Square API integration. Includes user authentication, booking management, and real-time availability tracking.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Square API'],
      highlights: [
        'Integrated Square payment gateway',
        'Real-time booking system',
        'Responsive user interface',
        'Secure authentication',
      ],
    },
    {
      title: 'SmartAGI',
      description:
        'An AI-driven educational support system designed to enhance learning experiences through intelligent tutoring and personalized content delivery. Leverages machine learning to adapt to individual student needs.',
      technologies: ['Python', 'AI/ML', 'React', 'Node.js'],
      highlights: [
        'Personalized learning paths',
        'AI-powered content recommendations',
        'Progress tracking dashboard',
        'Interactive learning modules',
      ],
    },
    {
      title: 'United Airlines UX Redesign',
      description:
        'A comprehensive user experience redesign project for United Airlines mobile application. Created high-fidelity prototypes focusing on improved navigation, booking flow, and accessibility.',
      technologies: ['Figma', 'UX Design', 'Prototyping', 'User Research'],
      highlights: [
        'Enhanced booking workflow',
        'Improved accessibility features',
        'Modern, intuitive interface',
        'User-tested prototypes',
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
            <Code className="w-8 h-8 text-gray-700" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                  Key Highlights:
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start text-sm text-gray-600">
                      <span className="mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-white text-gray-700 rounded-full text-xs font-medium shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
