import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '@/components/BrandLogo'; // Assuming BrandLogo is in src/components/BrandLogo.tsx

const AuthHeader: React.FC = () => {
  console.log('AuthHeader loaded');

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 bg-background border-b">
      <div className="container mx-auto flex items-center justify-center sm:justify-start">
        <Link to="/" aria-label="Go to homepage">
          <BrandLogo />
        </Link>
      </div>
    </header>
  );
};

export default AuthHeader;