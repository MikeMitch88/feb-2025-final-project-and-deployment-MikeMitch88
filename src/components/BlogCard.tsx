import { CalendarIcon, Clock, Tag } from 'lucide-react';
import { formatDate } from '../utils/formatters';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
  navigate: (path: string) => void;
  featured?: boolean;
}

const BlogCard = ({ post, navigate, featured = false }: BlogCardProps) => {
  const handleClick = () => {
    navigate(`/blog/${post.slug}`);
  };

  return (
    <div 
      className={`group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 ${
        featured ? 'flex flex-col md:flex-row' : ''
      }`}
      onClick={handleClick}
    >
      <div className={`relative overflow-hidden ${featured ? 'md:w-1/2' : 'h-48'}`}>
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {post.featured && !featured && (
          <div className="absolute top-2 left-2">
            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>
      
      <div className={`p-5 ${featured ? 'md:w-1/2' : ''}`}>
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
          <div className="flex items-center">
            <CalendarIcon size={16} className="mr-1" />
            <span>{formatDate(post.date)}</span>
          </div>
          <span>•</span>
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{post.readTime} min read</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {post.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="inline-flex items-center text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
            >
              <Tag size={12} className="mr-1" />
              {tag}
            </span>
          ))}
        </div>
        
        <div className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
          Read more
        </div>
      </div>
    </div>
  );
};

export default BlogCard;