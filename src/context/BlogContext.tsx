import { createContext, useContext, ReactNode } from 'react';
import { blogPosts } from '../data/blogData';
import { BlogPost } from '../types';

interface BlogContextType {
  posts: BlogPost[];
  getFeaturedPosts: () => BlogPost[];
  getPostBySlug: (slug: string) => BlogPost | undefined;
  searchPosts: (query: string) => BlogPost[];
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};

interface BlogProviderProps {
  children: ReactNode;
}

export const BlogProvider = ({ children }: BlogProviderProps) => {
  const posts = blogPosts;

  const getFeaturedPosts = () => {
    return posts.filter(post => post.featured).slice(0, 3);
  };

  const getPostBySlug = (slug: string) => {
    return posts.find(post => post.slug === slug);
  };

  const searchPosts = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    return posts.filter(
      post => 
        post.title.toLowerCase().includes(lowerCaseQuery) || 
        post.excerpt.toLowerCase().includes(lowerCaseQuery) ||
        post.content.toLowerCase().includes(lowerCaseQuery) ||
        post.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
    );
  };

  return (
    <BlogContext.Provider value={{ posts, getFeaturedPosts, getPostBySlug, searchPosts }}>
      {children}
    </BlogContext.Provider>
  );
};