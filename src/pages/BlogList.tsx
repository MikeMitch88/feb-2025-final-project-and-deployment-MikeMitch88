import { useState, useEffect } from 'react';
import { useBlog } from '../context/BlogContext';
import BlogCard from '../components/BlogCard';
import SearchBar from '../components/SearchBar';
import Newsletter from '../components/Newsletter';
import { Tag } from 'lucide-react';

interface BlogListProps {
  navigate: (path: string) => void;
}

const BlogList = ({ navigate }: BlogListProps) => {
  const { posts, searchPosts } = useBlog();
  const [displayedPosts, setDisplayedPosts] = useState(posts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Extract all unique tags from posts
  const allTags = Array.from(
    new Set(posts.flatMap(post => post.tags))
  ).sort();
  
  useEffect(() => {
    document.title = 'Insight Blog - Articles';
  }, []);
  
  useEffect(() => {
    let filtered = posts;
    
    // Apply search filter
    if (searchQuery) {
      filtered = searchPosts(searchQuery);
    }
    
    // Apply tag filter
    if (selectedTag) {
      filtered = filtered.filter(post => 
        post.tags.includes(selectedTag)
      );
    }
    
    setDisplayedPosts(filtered);
  }, [searchQuery, selectedTag, posts, searchPosts]);
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  
  const handleTagClick = (tag: string) => {
    setSelectedTag(prevTag => prevTag === tag ? null : tag);
  };
  
  return (
    <div className="space-y-10 animate-fadeIn">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 md:p-8 transition-colors duration-300">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Blog Articles
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-3xl">
          Discover our collection of insightful articles covering technology, design, productivity, and more. Use the search bar or filter by tags to find exactly what you're looking for.
        </p>
        
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <SearchBar onSearch={handleSearch} />
          
          {searchQuery && (
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Found {displayedPosts.length} results for "{searchQuery}"
            </div>
          )}
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm transition-colors duration-300 ${
              selectedTag === tag
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <Tag size={14} className="mr-1" />
            {tag}
          </button>
        ))}
      </div>
      
      {displayedPosts.length === 0 ? (
        <div className="text-center py-10">
          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
            No articles found
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Try adjusting your search or filter criteria
          </p>
          {(searchQuery || selectedTag) && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTag(null);
              }}
              className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300"
            >
              Clear filters
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedPosts.map((post) => (
            <BlogCard key={post.slug} post={post} navigate={navigate} />
          ))}
        </div>
      )}
      
      {/* Newsletter Section */}
      <section className="mt-16">
        <Newsletter />
      </section>
    </div>
  );
};

export default BlogList;