import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils"; // Assuming utils.ts exists for cn

interface AuthFormCardProps {
  title: string;
  description?: string;
  alertMessage?: React.ReactNode;
  children: React.ReactNode; // For form inputs
  actionButton: React.ReactNode; // For the primary submit button
  links?: React.ReactNode; // For links like "Forgot password?", "Sign up"
  className?: string; // Custom classes for the Card element
  headerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
}

const AuthFormCard: React.FC<AuthFormCardProps> = ({
  title,
  description,
  alertMessage,
  children,
  actionButton,
  links,
  className,
  headerClassName,
  titleClassName,
  descriptionClassName,
  contentClassName,
  footerClassName,
}) => {
  console.log('AuthFormCard loaded for title:', title);

  return (
    <Card className={cn("w-full max-w-md", className)}>
      <CardHeader className={cn("text-center", headerClassName)}>
        <CardTitle className={cn("text-2xl font-bold", titleClassName)}>{title}</CardTitle>
        {description && (
          <CardDescription className={cn(descriptionClassName)}>
            {description}
          </CardDescription>
        )}
      </CardHeader>
      {alertMessage && <div className="px-6 pb-4">{alertMessage}</div>}
      <CardContent className={cn(contentClassName)}>
        {children}
      </CardContent>
      <CardFooter className={cn("flex flex-col gap-4", footerClassName)}>
        {actionButton}
        {links && (
          <div className="text-center text-sm text-muted-foreground">
            {links}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default AuthFormCard;