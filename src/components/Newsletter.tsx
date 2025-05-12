import { useState } from 'react';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setError('');
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
    }, 1500);
  };
  
  return (
    <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6 md:p-8 transition-colors duration-300">
      <div className="flex items-center mb-4">
        <Mail size={24} className="text-blue-600 dark:text-blue-400 mr-3" />
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          Subscribe to our Newsletter
        </h3>
      </div>
      
      {isSubscribed ? (
        <div className="bg-green-100 dark:bg-green-900/50 rounded-md p-4 text-green-800 dark:text-green-200 animate-fadeIn">
          <p>Thank you for subscribing to our newsletter!</p>
          <button 
            onClick={() => setIsSubscribed(false)}
            className="text-sm mt-2 text-green-700 dark:text-green-300 hover:underline"
          >
            Subscribe another email
          </button>
        </div>
      ) : (
        <>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Stay updated with our latest articles, news, and tips. No spam, we promise!
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                className={`w-full px-4 py-2 rounded-md border ${
                  error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                } focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300`}
              />
              {error && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>}
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300 ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Subscribing...
                </span>
              ) : (
                'Subscribe'
              )}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Newsletter;