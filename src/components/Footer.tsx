import { Github, Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
  navigate: (path: string) => void;
}

const Footer = ({ navigate }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Insight Blog</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Exploring ideas, sharing knowledge, and connecting with readers around the world.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/MikeMitch88" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://twitter.com/@michaelranda95" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://www.linkedin.com/in/michael-randa" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => navigate('/')} className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300">Home</button>
              </li>
              <li>
                <button onClick={() => navigate('/blog')} className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300">Blog</button>
              </li>
              <li>
                <button onClick={() => navigate('/about')} className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300">About</button>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300">Contact</button>
              </li>
            </ul>


          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Subscribe</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Stay updated with our latest posts and news.
            </p>
            <form className="space-y-2">
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400">
            &copy; {currentYear} Insight Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;