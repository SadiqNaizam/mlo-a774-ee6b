import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

// Custom Components
import AuthHeader from '@/components/layout/AuthHeader';
import BrandLogo from '@/components/BrandLogo';
import AuthFormCard from '@/components/AuthFormCard';
import AuthFooter from '@/components/layout/AuthFooter';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// Icons
import { Loader2, AlertTriangle } from 'lucide-react';

const LoginPage: React.FC = () => {
  console.log('LoginPage loaded');
  const navigate = useNavigate();
  const emailInputRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailInputRef.current?.focus();
  }, []);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!email.trim() || !password.trim()) {
      setError("Email and password are required.");
      toast.error("Email and password are required.");
      return;
    }
    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Replace with actual authentication logic
    if (email === "user@example.com" && password === "password123") {
      toast.success("Login successful! Redirecting...");
      setTimeout(() => {
        navigate("/dashboard"); // Navigate to dashboard route from App.tsx
      }, 500);
    } else {
      setError("Invalid email or password. Please try again.");
      toast.error("Invalid email or password. Please try again.");
      setLoading(false);
      if (emailInputRef.current) {
        emailInputRef.current.focus();
        emailInputRef.current.select();
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AuthHeader />
      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6">
        <div className="mb-6 text-center">
          <BrandLogo appName="SecureApp" className="text-xl sm:text-2xl inline-block" linkTo="/" />
        </div>
        
        <form onSubmit={handleLogin} className="w-full max-w-md">
          <AuthFormCard
            title="Welcome Back!"
            description="Sign in to continue to your dashboard."
            alertMessage={
              error && (
                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Login Failed</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )
            }
            actionButton={
              <Button type="submit" className="w-full" disabled={loading}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Log In
              </Button>
            }
            links={
              <p className="text-sm text-center">
                Don&apos;t have an account?{' '}
                <Link
                  to="/registration" // Route from App.tsx
                  className={`font-semibold text-primary hover:underline ${loading ? 'opacity-50 pointer-events-none' : ''}`}
                  aria-disabled={loading}
                  onClick={(e) => loading && e.preventDefault()}
                >
                  Sign Up
                </Link>
              </p>
            }
          >
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  ref={emailInputRef}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  className="mt-1 w-full"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                  className="mt-1 w-full"
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="rememberMe"
                    checked={rememberMe}
                    onCheckedChange={(checkedState) => setRememberMe(Boolean(checkedState))}
                    disabled={loading}
                  />
                  <Label htmlFor="rememberMe" className="font-normal text-muted-foreground cursor-pointer">
                    Remember me
                  </Label>
                </div>
                <Link
                  to="/forgot-password" // Route from App.tsx
                  className={`font-medium text-primary hover:underline ${loading ? 'opacity-50 pointer-events-none' : ''}`}
                  aria-disabled={loading}
                  onClick={(e) => loading && e.preventDefault()}
                >
                  Forgot password?
                </Link>
              </div>
            </div>
          </AuthFormCard>
        </form>
      </main>
      <AuthFooter />
    </div>
  );
};

export default LoginPage;