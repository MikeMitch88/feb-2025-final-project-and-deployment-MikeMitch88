import { useEffect } from 'react';
import { Twitter, Linkedin, Mail } from 'lucide-react';
import michaelImg from '../assets/michael.png';
import valentineImg from '../assets/valentine.png';
import samfelixImg from '../assets/samfelix.png';


interface AboutProps {
  navigate: (path: string) => void;
}

const About = ({ navigate }: AboutProps) => {
  useEffect(() => {
    document.title = 'Insight Blog - About Us';
  }, []);
  
  return (
    <div className="space-y-12 animate-fadeIn">
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          About Insight Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Dedicated to sharing valuable insights, expert knowledge, and thoughtful perspectives on technology, design, and modern life.
        </p>
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Our Mission
          </h2>
         
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            At Insight Blog, we believe in the power of knowledge sharing. Our mission is to create a platform where ideas can flourish, perspectives can be shared, and readers can find valuable information that enriches their personal and professional lives.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            We strive to deliver content that is not only informative but also thought-provoking, helping our readers to gain new perspectives and stay informed about the latest trends and developments.
          </p>
         <a
  href="https://michaelranda-portfolio.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center px-6 py-3 bg-white text-blue-700 
  font-semibold rounded-md hover:bg-blue-50 transition-colors duration-300"
>
  View Portfolio
</a>

        </div>
        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 p-8 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Our Values
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-blue-600 text-white p-1 rounded mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Quality Content</h4>
                <p className="text-gray-700 dark:text-gray-300">We're committed to creating well-researched, informative, and engaging content.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-600 text-white p-1 rounded mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Diverse Perspectives</h4>
                <p className="text-gray-700 dark:text-gray-300">We value different viewpoints and strive to present varied perspectives on topics.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-600 text-white p-1 rounded mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Reader-Focused</h4>
                <p className="text-gray-700 dark:text-gray-300">Our readers are at the heart of what we do. We create content that addresses their interests and needs.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Michael Randa',
              role: 'Founder & Editor-in-Chief',
              bio: 'Michael has over 5 years of experience in journalism and is passionate about creating a platform that delivers valuable insights to readers.',
              image: michaelImg
            },
            {
              name: 'Sabulkong Valentine',
              role: 'Senior Writer',
              bio: 'With a background in technology and design, Valentine brings a unique perspective to her articles, focusing on the intersection of tech and everyday life.',
              image: valentineImg
            },
            {
              name: 'Samfelix Randa',
              role: 'Content Strategist',
              bio: 'Samfelix oversees the content strategy for Insight Blog, ensuring that we deliver relevant and valuable information to our readers.',
              image: samfelixImg
            }
          ].map((member, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
              <div className="h-60 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {member.bio}
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
                    <Twitter size={18} />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="https://www.linkedin.com/in/michael-randa" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
                    <Linkedin size={18} />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="michaelranda95@gmail.com" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
                    <Mail size={18} />
                    <span className="sr-only">Email</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mt-16 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 md:p-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Want to Join Our Team?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          We're always looking for talented writers, editors, and content creators to join our team. If you're passionate about creating valuable content, we'd love to hear from you.
        </p>
        <button
          onClick={() => navigate('/contact')}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300"
        >
          Get in Touch
        </button>
      </section>
    </div>
  );
};

export default About;