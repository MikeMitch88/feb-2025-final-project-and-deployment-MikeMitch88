import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../context/ThemeContext';

interface LayoutProps {
  children: ReactNode;
  navigate: (path: string) => void;
  currentPath: string;
}

const Layout = ({ children, navigate, currentPath }: LayoutProps) => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="flex-grow bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar navigate={navigate} currentPath={currentPath} />
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer navigate={navigate} />
      </div>
    </div>
  );
};

export default Layout;