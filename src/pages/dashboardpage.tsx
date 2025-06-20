import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader'; // Custom component
import AppFooter from '@/components/layout/AppFooter'; // Custom component
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // shadcn/ui
import { Button } from '@/components/ui/button'; // shadcn/ui
import { Home, LogOutIcon } from 'lucide-react'; // lucide-react icons

const DashboardPage: React.FC = () => {
  console.log('DashboardPage loaded');
  const navigate = useNavigate();

  const handleExplicitLogout = () => {
    // Placeholder for actual logout logic (e.g., clearing tokens, API calls)
    // This would typically involve updating auth state, clearing local/session storage, etc.
    console.log('User explicitly clicked Log Out button on DashboardPage.');
    navigate('/'); // Navigate to LoginPage, path from App.tsx
  };

  return (
    <div className="flex flex-col min-h-screen bg-background"> {/* Updated to use bg-background for theme compliance */}
      <AppHeader />
      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 text-center">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader>
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
              <Home className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-3xl font-bold tracking-tight">Welcome to Your Dashboard!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              You have successfully logged in. This is your secure application area.
            </p>
            <p>
              Explore features, manage your settings, or simply enjoy the application.
            </p>
            <Button onClick={handleExplicitLogout} className="mt-6 w-full" size="lg">
              <LogOutIcon className="mr-2 h-5 w-5" />
              Log Out
            </Button>
            {/* You could add links to other parts of the application if needed, e.g.: */}
            {/* <p className="mt-4 text-sm">\n              <Link to=\"/settings\" className=\"text-primary hover:underline\">Account Settings</Link>\n            </p> */}
          </CardContent>
        </Card>
      </main>
      <AppFooter />
    </div>
  );
};

export default DashboardPage;