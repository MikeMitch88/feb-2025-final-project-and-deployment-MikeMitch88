import { useEffect } from 'react';

interface NotFoundProps {
  navigate: (path: string) => void;
}

const NotFound = ({ navigate }: NotFoundProps) => {
  useEffect(() => {
    document.title = 'Page Not Found - Insight Blog';
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center animate-fadeIn">
      <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Page Not Found
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="space-x-4">
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300"
        >
          Go Home
        </button>
        <button
          onClick={() => navigate('/blog')}
          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-md transition-colors duration-300"
        >
          Browse Articles
        </button>
      </div>
    </div>
  );
};

export default NotFound;