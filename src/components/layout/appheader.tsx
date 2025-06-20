import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import BrandLogo from '@/components/BrandLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Search, UserCircle, LogOut, Settings, LayoutDashboard } from 'lucide-react';
import { ThemeToggleButton } from '@/components/ThemeToggleButton'; // Added import

const AppHeader: React.FC = () => {
  console.log('AppHeader loaded');

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-primary ${
      isActive ? 'text-primary' : 'text-muted-foreground'
    }`;

  const handleLogout = () => {
    console.log('User logout initiated');
    // Add actual logout logic here (e.g., clear token, redirect to /)
    // For now, just a log and potentially redirect via window.location or navigate from react-router-dom
    // import { useNavigate } from 'react-router-dom';
    // const navigate = useNavigate(); navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" aria-label="Go to dashboard">
            <BrandLogo />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/dashboard" className={navLinkClasses}>
              <LayoutDashboard className="h-4 w-4 mr-2 inline-block" />
              Dashboard
            </NavLink>
            {/* Add other primary navigation links here if any, e.g.
            <NavLink to="/other-feature" className={navLinkClasses}>\n              Other Feature\n            </NavLink>\n            */}
          </nav>
        </div>

        <div className="flex items-center gap-2"> {/* Adjusted gap for new button */}
          <div className="relative hidden sm:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 sm:w-[200px] md:w-[300px] lg:w-[300px]"
            />
          </div>

          <ThemeToggleButton /> {/* Added Theme Toggle Button */}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <UserCircle className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/profile"> {/* Assuming /profile route, not in App.tsx */}
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;