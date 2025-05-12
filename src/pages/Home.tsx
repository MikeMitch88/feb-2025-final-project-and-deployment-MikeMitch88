import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useBlog } from '../context/BlogContext';
import BlogCard from '../components/BlogCard';
import Newsletter from '../components/Newsletter';

interface HomeProps {
  navigate: (path: string) => void;
}

const Home = ({ navigate }: HomeProps) => {
  const { getFeaturedPosts, posts } = useBlog();
  const featuredPosts = getFeaturedPosts();
  const recentPosts = [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
  
  useEffect(() => {
    document.title = 'Insight Blog - Home';
  }, []);
  
  return (
    <div className="space-y-12 animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl overflow-hidden text-white">
        <div className="relative px-6 py-12 md:py-20 md:px-12">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Welcome to Insight Blog
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Discover thought-provoking articles, expert insights, and the latest trends in technology, design, and more.
            </p>
            <button
              onClick={() => navigate('/blog')}
              className="inline-flex items-center px-6 py-3 bg-white text-blue-700 font-semibold rounded-md hover:bg-blue-50 transition-colors duration-300"
            >
              Explore Articles
              <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
          
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
            <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M48.8,-64.5C63.4,-55.4,75.6,-41.5,79.9,-25.7C84.1,-9.9,80.3,7.9,73.1,23.1C65.9,38.3,55.3,51,41.6,58.9C27.9,66.8,11.2,69.9,-4.2,75.1C-19.7,80.3,-33.9,83.5,-47.8,78.4C-61.7,73.2,-75.1,59.7,-79.8,44.3C-84.5,28.8,-80.4,11.3,-76.3,-5.2C-72.3,-21.8,-68.3,-37.5,-58.4,-48.5C-48.5,-59.5,-32.7,-65.9,-16.6,-69.4C-0.6,-72.9,14.7,-73.5,29.8,-71.5C44.9,-69.5,59.9,-64.9,71.8,-54.9C83.6,-44.8,93.4,-29.3,92.5,-13.9C91.5,1.5,79.9,16,69.9,28.7C59.9,41.5,51.6,52.5,40.1,62.1C28.5,71.7,13.8,79.9,-2.1,82.9C-18,85.9,-35.9,83.7,-51.4,75.8C-66.9,67.9,-79.9,54.2,-86.9,37.9C-93.9,21.6,-94.9,2.6,-91.1,-15.5C-87.4,-33.6,-79,-50.7,-65.9,-61.2C-52.7,-71.7,-34.8,-75.6,-18.2,-75.9C-1.5,-76.3,13.9,-73.1,30.2,-67.6C46.5,-62,63.6,-54.2,63.6,-41.7C63.6,-29.1,46.4,-11.9,43.3,3.1C40.2,18.1,51.2,30.9,50.3,41.4C49.4,51.9,36.7,60.1,23.1,63.2C9.5,66.3,-4.9,64.3,-19.3,61.8C-33.7,59.4,-48.1,56.5,-60.9,48.2C-73.7,39.9,-84.9,26.1,-87.2,11.3C-89.5,-3.6,-82.9,-19.5,-75,-33.7C-67.2,-47.9,-58.1,-60.4,-45.5,-69.7C-32.9,-78.9,-16.4,-84.9,-0.1,-84.7C16.2,-84.6,32.5,-78.4,41.6,-67.9C50.7,-57.4,52.8,-42.7,62.9,-30.3C72.9,-17.9,90.9,-7.7,90.9,0.2C91,8,73.1,13.5,61.8,20.9C50.4,28.3,45.6,37.5,37.1,44.9C28.6,52.3,16.3,57.8,4.6,56.6C-7.1,55.3,-18.2,47.3,-29.1,40.4C-39.9,33.6,-50.6,27.8,-57.5,18.6C-64.4,9.3,-67.6,-3.3,-65.9,-15.9C-64.2,-28.5,-57.6,-41,-47.9,-52.8C-38.2,-64.6,-25.3,-75.7,-10.5,-78.7C4.3,-81.7,20.5,-76.4,34.2,-68.5C47.9,-60.5,59,-50,74.8,-40C90.5,-30,110.9,-20.4,114.9,-7.8C118.9,4.8,106.5,19.5,95.8,31.3C85.1,43.1,76.2,52.1,64.9,59.2C53.6,66.3,39.9,71.7,26.5,73.1C13.1,74.5,0,72,-13,69.4C-26,66.8,-38.9,64.2,-50.2,57.8C-61.5,51.5,-71.2,41.5,-76.9,29.3C-82.5,17.1,-84.1,2.8,-81.8,-10.8C-79.5,-24.3,-73.4,-37.1,-63.7,-46.6C-54,-56.1,-40.8,-62.3,-27.7,-70.7C-14.5,-79.1,-1.5,-89.8,10.7,-88.4C22.9,-87,34.3,-73.5,41.6,-60.4C48.9,-47.3,52.1,-34.6,60.2,-22.7C68.3,-10.8,81.3,0.3,83.4,12.2C85.5,24.1,76.8,36.8,66.4,46.1C56,55.4,43.9,61.4,31.3,64.6C18.6,67.8,5.5,68.2,-6.4,66.6C-18.3,65,-29,61.4,-41.7,56.5C-54.3,51.6,-68.9,45.5,-75.7,34.5C-82.6,23.5,-81.7,7.7,-78.3,-6.8C-74.8,-21.2,-68.7,-34.2,-59.2,-44.8C-49.7,-55.3,-36.7,-63.3,-23,-70.2C-9.3,-77,-4.7,-82.6,5.7,-92C16,-101.3,32,-114.4,44.9,-115.4C57.8,-116.3,67.5,-105.1,75.3,-93C83.1,-80.9,89,-68,94.7,-54C100.3,-40.1,105.7,-25.2,104.2,-11.4C102.7,2.4,94.3,15.2,85.7,25.3C77.1,35.5,68.3,43,58.2,50.8C48.1,58.7,36.7,66.8,24.4,71.5C12.1,76.1,-1.1,77.2,-13.3,74C-25.6,70.8,-36.9,63.4,-48.8,54.9C-60.7,46.5,-73.2,37.1,-81.2,24.2C-89.2,11.4,-92.7,-4.8,-88.4,-19.1C-84.1,-33.3,-72,-45.5,-58.8,-53.8C-45.6,-62.2,-31.3,-66.7,-17.3,-70.2C-3.3,-73.7,10.4,-76.3,23.8,-73.5C37.1,-70.7,50,-62.6,54.8,-51.3C59.7,-40,56.3,-25.5,59.3,-11.4C62.2,2.6,71.5,16.3,70.5,26.8C69.6,37.3,58.5,44.7,47.8,50.1C37.1,55.6,26.8,59.2,15.2,60.8C3.6,62.4,-9.2,61.9,-21.3,59.7C-33.4,57.4,-44.8,53.4,-56.6,46.2C-68.3,39.1,-80.4,28.8,-83.9,16.1C-87.5,3.4,-82.5,-11.6,-74.8,-24C-67.1,-36.3,-56.7,-46,-45.2,-50.5C-33.7,-55,-21.2,-54.2,-9.5,-56.9C2.2,-59.6,13.2,-65.7,26.3,-66.7C39.4,-67.6,54.7,-63.4,63.3,-54.3C71.9,-45.3,73.9,-31.5,77.6,-17.5C81.3,-3.6,86.7,10.5,86.3,24.6C86,38.6,79.9,52.6,69.9,62.9C59.9,73.1,45.9,79.6,31.6,79.3C17.3,79,2.5,72,-10.3,62.7C-23.1,53.4,-33.9,42,-43.8,31.1C-53.7,20.2,-62.6,9.8,-67.2,-2.7C-71.8,-15.3,-72.1,-30.1,-64.7,-39.3C-57.3,-48.5,-42.2,-52.1,-28.3,-56.2C-14.4,-60.2,-1.8,-64.7,12.5,-69.5C26.8,-74.3,42.8,-79.4,53.1,-74.7C63.4,-70.1,68,-55.7,69.4,-42C70.8,-28.3,69,-15.4,73.9,-0.7C78.7,14.1,90.3,30.9,90,45.7C89.8,60.4,77.9,73.1,64.2,83.4C50.5,93.6,35.2,101.4,19.2,103.2C3.2,105,-13.4,100.8,-27.5,93" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
      </section>
      
      {/* Featured Section */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Featured Articles
          </h2>
          <button
            onClick={() => navigate('/blog')}
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center text-sm font-medium"
          >
            View All
            <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
        
        <div>
          {featuredPosts.length > 0 && (
            <BlogCard post={featuredPosts[0]} navigate={navigate} featured={true} />
          )}
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {featuredPosts.slice(1).map((post) => (
            <BlogCard key={post.slug} post={post} navigate={navigate} />
          ))}
        </div>
      </section>
      
      {/* Recent Posts Section */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Recent Articles
          </h2>
          <button
            onClick={() => navigate('/blog')}
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center text-sm font-medium"
          >
            View All
            <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <BlogCard key={post.slug} post={post} navigate={navigate} />
          ))}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section>
        <Newsletter />
      </section>
    </div>
  );
};

export default Home;