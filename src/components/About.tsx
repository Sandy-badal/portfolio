import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
            <User className="w-8 h-8 text-gray-700" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            I'm an aspiring Software Engineer from Bangalore with a passion for creating
            secure and scalable web applications. My expertise spans across the full stack,
            utilizing technologies like <span className="font-semibold text-gray-900">Java</span>,{' '}
            <span className="font-semibold text-gray-900">SpringBoot</span>,{' '}
            <span className="font-semibold text-gray-900">Node.js</span>,{' '}
            <span className="font-semibold text-gray-900">React</span>, and{' '}
            <span className="font-semibold text-gray-900">MySQL</span>.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            What sets me apart is my strong foundation in{' '}
            <span className="font-semibold text-gray-900">full-stack development</span>,
            combined with exceptional{' '}
            <span className="font-semibold text-gray-900">debugging</span> and{' '}
            <span className="font-semibold text-gray-900">problem-solving</span> abilities.
            I thrive in collaborative environments where I can leverage my technical skills
            to build innovative solutions.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Currently pursuing my B.Tech in Computer Science Engineering, I'm constantly
            learning and exploring new technologies to stay at the forefront of software
            development. My goal is to contribute to meaningful projects that make a
            positive impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
