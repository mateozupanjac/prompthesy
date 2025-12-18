"use client";
import { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
// import { Loader2, Check, AlertCircle } from "lucide-react";
// import { OAuthButton } from "./oauth-button";
import { ThemeSwitch } from "./theme-switch";
import { LanguageSwitcher } from "./language-switcher";

type AuthState = "idle" | "sending" | "success" | "error" | "provider-error";

export function AuthCard() {
  const [email, setEmail] = useState("");
  const [authState, setAuthState] = useState<AuthState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setAuthState("error");
      setErrorMessage("Please enter a valid email.");
      return;
    }

    setAuthState("sending");
    setErrorMessage("");

    try {
      // simulate request
      await new Promise((r) => setTimeout(r, 2000));
      setAuthState("success");
    } catch {
      setAuthState("error");
      setErrorMessage("Failed to send magic link. Please try again.");
    }
  };

  const handleOAuthClick = async (provider: "google" | "apple") => {
    setAuthState("sending");
    try {
      await new Promise((r) => setTimeout(r, 1500));
      if (Math.random() > 0.7) throw new Error("Provider authentication failed");
      setAuthState("success");
    } catch {
      setAuthState("provider-error");
      setErrorMessage(
        `Authentication with ${provider} failed. Please try again.`,
      );
    }
  };

  const handleExploreWithoutAccount = () => {
    // start anonymous session (stub)
    console.log("Starting anonymous session...");
  };

  const isLoading = authState === "sending";
  const isSuccess = authState === "success";
  const hasError = authState === "error" || authState === "provider-error";

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center space-y-2 pb-4">
        <h1 className="text-2xl font-medium">Welcome to Prompthesy</h1>
        <p className="text-default-500">
          Sign in to save readings and continue your conversations.
        </p>
      </CardHeader>

      <CardBody className="space-y-6">
        {/* Email Magic Link Form */}
        <form onSubmit={handleEmailSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              id="email"
              type="email"
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isDisabled={isLoading || isSuccess}
              color={
                hasError && !validateEmail(email) ? "danger" : "default"
              }
              description={
                !hasError && !isSuccess ? "We'll send you a sign-in link." : ""
              }
              errorMessage={
                hasError && !validateEmail(email)
                  ? "Please enter a valid email."
                  : ""
              }
              aria-describedby={hasError ? "email-error" : "email-helper"}
            />
          </div>

          <Button
            type="submit"
            color="primary"
            className="w-full"
            isLoading={isLoading}
            isDisabled={isSuccess}
            // startContent={isSuccess ? <Check className="w-4 h-4" /> : undefined}
          >
            {isLoading ? "Sending..." : isSuccess ? "Sent!" : "Continue with email"}
          </Button>
        </form>

        {/* Status Messages */}
        {hasError && authState === "provider-error" && (
          <div
            className="p-3 rounded-lg bg-danger-50 border border-danger-200 dark:bg-danger-950 dark:border-danger-800"
            id="email-error"
          >
            <div className="flex items-center gap-2">
              {/* <AlertCircle className="h-4 w-4 text-danger-600 dark:text-danger-400" /> */}
              <p className="text-sm text-danger-700 dark:text-danger-300">
                {errorMessage}
              </p>
            </div>
          </div>
        )}

        {isSuccess && (
          <div className="p-3 rounded-lg bg-success-50 border border-success-200 dark:bg-success-950 dark:border-success-800">
            <div className="flex items-center gap-2">
              {/* <Check className="h-4 w-4 text-success-600 dark:text-success-400" /> */}
              <p className="text-sm text-success-700 dark:text-success-300">
                Check your inbox for the magic link.
              </p>
            </div>
          </div>
        )}

        {/* Divider */}
        <div className="flex items-center gap-4">
          <Divider className="flex-1" />
          <span className="text-xs text-default-400 uppercase">or</span>
          <Divider className="flex-1" />
        </div>

        {/* OAuth Buttons */}
        <div className="space-y-3">
          {/* <OAuthButton
            provider="google"
            onClick={() => handleOAuthClick("google")}
            disabled={isLoading || isSuccess}
          />
          <OAuthButton
            provider="apple"
            onClick={() => handleOAuthClick("apple")}
            disabled={isLoading || isSuccess}
          /> */}
        </div>

        {/* Explore Without Account */}
        <div className="text-center">
          <Button
            variant="light"
            onPress={handleExploreWithoutAccount}
            className="text-sm text-default-500 hover:text-default-700"
            isDisabled={isLoading}
          >
            Explore without account
          </Button>
        </div>

        {/* Legal Links */}
        <div className="text-center text-xs text-default-400">
          By continuing, you agree to our{" "}
          <Link href="#" size="sm" className="text-xs">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" size="sm" className="text-xs">
            Privacy Policy
          </Link>
          .
        </div>
      </CardBody>

      <CardFooter className="flex justify-between pt-4">
        <LanguageSwitcher />
        <ThemeSwitch />
      </CardFooter>
    </Card>
  );
}