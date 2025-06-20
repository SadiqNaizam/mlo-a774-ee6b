import React, { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AuthHeader from '@/components/layout/AuthHeader';
import AuthFooter from '@/components/layout/AuthFooter';
import AuthFormCard from '@/components/AuthFormCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Mail, AlertTriangle, CheckCircle2 } from 'lucide-react';

const ForgotPasswordPage: React.FC = () => {
  console.log('ForgotPasswordPage loaded');
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'success' | 'error' | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage(null);
    setMessageType(null);

    console.log('Forgot password attempt for:', email);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (email === "test@example.com") { // Simulate successful email submission
      setMessage("If an account exists for this email, a password reset link has been sent. Please check your inbox.");
      setMessageType('success');
      setEmail(''); // Clear input on success
    } else if (email === "error@example.com") { // Simulate an error
      setMessage("An unexpected error occurred. Please try again.");
      setMessageType('error');
    } else { // Simulate email not found
      setMessage("If an account exists for this email, a password reset link has been sent. Please check your inbox. (Simulated: Email not found, but showing generic message for security)");
      // For security reasons, it's often better not to reveal if an email is registered or not.
      // So, we show a generic success message even if the email is not found.
      setMessageType('success');
      setEmail('');
    }
    setIsLoading(false);
  };

  const alertComponent = message && messageType && (
    <Alert variant={messageType === 'error' ? 'destructive' : 'default'} className={messageType === 'success' ? 'bg-green-50 border-green-300 text-green-700 dark:bg-green-900/30 dark:border-green-700 dark:text-green-300' : ''}>
      {messageType === 'success' ? <CheckCircle2 className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
      <AlertTitle>{messageType === 'success' ? 'Email Sent' : 'Error'}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );

  return (
    <div className="flex flex-col min-h-screen bg-background"> {/* Updated to use bg-background for theme compliance */}
      <AuthHeader />
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <AuthFormCard
          title="Forgot Your Password?"
          description="No problem. Enter your email address below and we'll send you instructions to reset your password."
          alertMessage={alertComponent}
          actionButton={
            <Button type="submit" form="forgot-password-form" className="w-full" disabled={isLoading}> {/* Added form attribute */}
              {isLoading ? 'Sending...' : 'Send Reset Link'}
            </Button>
          }
          links={
            <p>
              Remember your password?{' '}
              <Link to="/" className="font-medium text-primary hover:underline">
                Back to Login
              </Link>
            </p>
          }
        >
          <form onSubmit={handleSubmit} id="forgot-password-form" className="space-y-4"> {/* Added id attribute */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10"
                  disabled={isLoading}
                />
              </div>
            </div>
            {/* The actionButton is passed to AuthFormCard, so no duplicate button here */}
          </form>
        </AuthFormCard>
      </main>
      <AuthFooter />
    </div>
  );
};

export default ForgotPasswordPage;