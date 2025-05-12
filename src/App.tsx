import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { BlogProvider } from './context/BlogContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    if (currentPath === '/') {
      return <Home navigate={navigate} />;
    } else if (currentPath === '/blog') {
      return <BlogList navigate={navigate} />;
    } else if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.split('/blog/')[1];
      return <BlogPost slug={slug} navigate={navigate} />;
    } else if (currentPath === '/about') {
      return <About navigate={navigate} />;
    } else if (currentPath === '/contact') {
      return <Contact navigate={navigate} />;
    } else {
      return <NotFound navigate={navigate} />;
    }
  };

  return (
    <ThemeProvider>
      <BlogProvider>
        <Layout navigate={navigate} currentPath={currentPath}>
          {renderPage()}
        </Layout>
      </BlogProvider>
    </ThemeProvider>
  );
}

export default App;