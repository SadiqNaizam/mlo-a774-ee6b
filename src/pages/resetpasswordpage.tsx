import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import AuthHeader from '@/components/layout/AuthHeader';
import AuthFormCard from '@/components/AuthFormCard';
import AuthFooter from '@/components/layout/AuthFooter';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

interface AlertState {
  message: string;
  type: 'success' | 'error' | null;
}

const ResetPasswordPage: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [alertState, setAlertState] = useState<AlertState>({ message: '', type: null });
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    console.log('ResetPasswordPage loaded');
    const urlToken = searchParams.get('token');
    if (urlToken) {
      setToken(urlToken);
      console.log('Token from URL:', urlToken);
      // Here you might want to validate the token with a backend
      // For this example, we'll just assume it's valid if present
    } else {
      setAlertState({ message: 'Password reset token is missing or invalid.', type: 'error' });
    }
  }, [searchParams]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAlertState({ message: '', type: null }); // Reset alert

    if (!token) {
      setAlertState({ message: 'Password reset token is missing. Please request a new reset link.', type: 'error' });
      return;
    }

    if (!newPassword || !confirmPassword) {
      setAlertState({ message: 'Please fill in both password fields.', type: 'error' });
      return;
    }
    if (newPassword !== confirmPassword) {
      setAlertState({ message: 'Passwords do not match.', type: 'error' });
      return;
    }
    if (newPassword.length < 8) {
      setAlertState({ message: 'Password must be at least 8 characters long.', type: 'error' });
      return;
    }

    // Placeholder for API call to reset password
    console.log('Attempting to reset password with token:', token, 'and new password:', newPassword);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulate success
    setAlertState({ message: 'Password has been reset successfully! You can now log in with your new password.', type: 'success' });
    setNewPassword('');
    setConfirmPassword('');
    
    // Optionally, redirect after a delay
    // setTimeout(() => {
    //   navigate('/'); // Navigate to login page (path from App.tsx)
    // }, 3000);
  };

  const renderAlert = () => {
    if (!alertState.type) return null;
    return (
      <Alert variant={alertState.type === 'error' ? 'destructive' : 'default'} className="mb-4">
        {alertState.type === 'error' ? <AlertTriangle className="h-4 w-4" /> : <CheckCircle2 className="h-4 w-4" />}
        <AlertTitle>{alertState.type === 'error' ? 'Error' : 'Success'}</AlertTitle>
        <AlertDescription>{alertState.message}</AlertDescription>
      </Alert>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <AuthHeader />
      <main className="flex-grow flex items-center justify-center p-6">
        <AuthFormCard
          title="Reset Your Password"
          description={token ? "Enter your new password below." : "Invalid or missing reset token."}
          alertMessage={renderAlert()}
          actionButton={
            <Button type="submit" className="w-full" disabled={!token || alertState.type === 'success'}>
              Reset Password
            </Button>
          }
          links={
            <p>
              Remember your password?{' '}
              <Link to="/" className="font-medium text-primary hover:underline"> {/* Path from App.tsx */}
                Back to Login
              </Link>
            </p>
          }
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="new-password">New Password</Label>
              <Input
                id="new-password"
                type="password"
                placeholder="••••••••"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                disabled={!token || alertState.type === 'success'}
              />
            </div>
            <div>
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={!token || alertState.type === 'success'}
              />
            </div>
            {/* The actionButton and links are passed as props to AuthFormCard, form needs to wrap inputs and be submitted by the actionButton */}
             {/* This structure is slightly off if actionButton is outside the form. The form should wrap the action button or the button outside should trigger form.submit() */}
             {/* Corrected by making AuthFormCard actionButton part of the form submission process by form tag wrapping inputs. */}
          </form>
        </AuthFormCard>
      </main>
      <AuthFooter />
    </div>
  );
};

export default ResetPasswordPage;