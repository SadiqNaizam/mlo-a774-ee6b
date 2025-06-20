import React from 'react';
import { Link } from 'react-router-dom';
import { MountainIcon } from 'lucide-react'; // Using a generic icon as a placeholder

interface BrandLogoProps {
  /**
   * Optional additional CSS classes to apply to the root element.
   */
  className?: string;
  /**
   * Optional text to display next to the logo. Defaults to "AppLogo".
   */
  appName?: string;
  /**
   * Optional link target for the logo. Defaults to "/".
   */
  linkTo?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  appName = 'AppLogo',
  linkTo = '/',
}) => {
  console.log('BrandLogo loaded');

  return (
    <Link
      to={linkTo}
      className={`flex items-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}
      aria-label={`${appName} - Home`}
    >
      <MountainIcon className="h-6 w-6 mr-2 text-primary" aria-hidden="true" />
      <span>{appName}</span>
    </Link>
  );
};

export default BrandLogo;