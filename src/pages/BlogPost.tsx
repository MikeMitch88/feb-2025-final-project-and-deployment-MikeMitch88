import { useEffect, useState } from 'react';
import { Calendar, Clock, ChevronLeft, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useBlog } from '../context/BlogContext';
import { formatDate } from '../utils/formatters';
import BlogCard from '../components/BlogCard';
import Newsletter from '../components/Newsletter';

interface BlogPostProps {
  slug: string;
  navigate: (path: string) => void;
}

const BlogPost = ({ slug, navigate }: BlogPostProps) => {
  const { getPostBySlug, posts } = useBlog();
  const post = getPostBySlug(slug);
  const [showShareButtons, setShowShareButtons] = useState(false);
  
  const relatedPosts = post 
    ? posts
        .filter(p => 
          p.slug !== post.slug && 
          p.tags.some(tag => post.tags.includes(tag))
        )
        .slice(0, 3)
    : [];
  
  useEffect(() => {
    if (post) {
      document.title = `${post.title} - Insight Blog`;
    } else {
      document.title = 'Article Not Found - Insight Blog';
    }
  }, [post]);
  
  if (!post) {
    return (
      <div className="text-center py-16 animate-fadeIn">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Article Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          The article you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate('/blog')}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300"
        >
          Browse Articles
        </button>
      </div>
    );
  }
  
  const toggleShareButtons = () => {
    setShowShareButtons(!showShareButtons);
  };
  
  return (
    <div className="space-y-12 animate-fadeIn">
      <button
        onClick={() => navigate('/blog')}
        className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
      >
        <ChevronLeft size={20} className="mr-1" />
        Back to Articles
      </button>
      
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center text-sm bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full"
              >
                <Tag size={14} className="mr-1" />
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 text-sm gap-4 mb-6">
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>{post.readTime} min read</span>
            </div>
            <div className="flex items-center relative">
              <button
                onClick={toggleShareButtons}
                className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <Share2 size={16} className="mr-1" />
                <span>Share</span>
              </button>
              
              {showShareButtons && (
                <div className="absolute top-full left-0 mt-2 p-2 bg-white dark:bg-gray-800 rounded-md shadow-md flex space-x-2 z-10 border border-gray-200 dark:border-gray-700">
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-300" title="Share on Facebook">
                    <Facebook size={16} />
                  </button>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-300" title="Share on Twitter">
                    <Twitter size={16} />
                  </button>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-300" title="Share on LinkedIn">
                    <Linkedin size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>
          
          <div className="relative h-80 md:h-96 mb-8 rounded-xl overflow-hidden">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </header>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Related Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <BlogCard key={post.slug} post={post} navigate={navigate} />
            ))}
          </div>
        </section>
      )}
      
      {/* Newsletter Section */}
      <section className="mt-8">
        <Newsletter />
      </section>
    </div>
  );
};

export default BlogPost;