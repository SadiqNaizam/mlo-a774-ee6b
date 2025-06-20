import React from 'react';
import { Link } from 'react-router-dom';

const AppFooter: React.FC = () => {
  console.log('AppFooter loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-muted/40 border-t">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p className="mb-2 md:mb-0">
            &copy; {currentYear} Your Application. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <Link to="/about" className="hover:text-primary transition-colors"> {/* Assuming /about route, not in App.tsx */}
              About Us
            </Link>
            <Link to="/contact" className="hover:text-primary transition-colors"> {/* Assuming /contact route, not in App.tsx */}
              Contact
            </Link>
            <Link to="/faq" className="hover:text-primary transition-colors"> {/* Assuming /faq route, not in App.tsx */}
              FAQ
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors"> {/* Reusing /terms as in AuthFooter */}
              Terms of Service
            </Link>
            <Link to="/privacy" className="hover:text-primary transition-colors"> {/* Reusing /privacy as in AuthFooter */}
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;