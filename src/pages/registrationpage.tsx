import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthHeader from '@/components/layout/AuthHeader';
import AuthFooter from '@/components/layout/AuthFooter';
import AuthFormCard from '@/components/AuthFormCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

const RegistrationPage: React.FC = () => {
  console.log('RegistrationPage loaded');
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (!email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Placeholder for registration logic
    console.log('Attempting to register user:', { email });
    // Simulate API call
    setTimeout(() => {
      // Simulate a successful registration
      setSuccessMessage("Registration successful! You can now log in.");
      // Clear form
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      // Optionally redirect to login after a delay
      setTimeout(() => {
        navigate('/'); // Navigate to LoginPage as per App.tsx
      }, 2000);
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AuthHeader />
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <AuthFormCard
          title="Create an Account"
          description="Enter your details below to register."
          alertMessage={
            error ? (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Registration Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            ) : successMessage ? (
              <Alert variant="default" className="border-green-500 text-green-700">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>{successMessage}</AlertDescription>
              </Alert>
            ) : null
          }
          actionButton={
            <Button type="submit" form="registration-form" className="w-full">
              Create Account
            </Button>
          }
          links={
            <>
              Already have an account?{' '}
              <Link to="/" className="font-medium text-primary hover:underline">
                Sign In
              </Link>
            </>
          }
          className="w-full max-w-md"
        >
          <form onSubmit={handleSubmit} id="registration-form" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="••••••••"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
              />
            </div>
          </form>
        </AuthFormCard>
      </main>
      <AuthFooter />
    </div>
  );
};

export default RegistrationPage;