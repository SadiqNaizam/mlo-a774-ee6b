import React from 'react';
import { Link } from 'react-router-dom';

const AuthFooter: React.FC = () => {
  console.log('AuthFooter loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-background border-t">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <p className="mb-2">&copy; {currentYear} Your Company. All rights reserved.</p>
        <nav className="flex justify-center space-x-4">
          <Link to="/terms" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <Link to="/privacy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default AuthFooter;