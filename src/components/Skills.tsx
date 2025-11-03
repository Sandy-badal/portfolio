import { Code } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Java', 'Python'],
    },
    {
      category: 'Frameworks',
      skills: ['Node.js', 'Express.js', 'React'],
    },
    {
      category: 'Tools',
      skills: ['Figma', 'Canva', 'AWS', 'Linux'],
    },
    {
      category: 'Soft Skills',
      skills: ['Leadership', 'Teamwork', 'Communication'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
            <Code className="w-8 h-8 text-gray-700" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    {skill}
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

export default Skills;
