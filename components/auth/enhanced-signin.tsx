"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  BarChart3,
  Loader2,
  AlertCircle,
  CheckCircle,
  XCircle,
  Users,
  Building2,
  ExternalLink,
  RefreshCw,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface AccountInfo {
  id: string;
  name: string;
  email: string;
  type: "personal" | "brand";
  hasYouTubeAccess: boolean;
  permissions: string[];
  channels: Array<{
    id: string;
    name: string;
    subscribers: string;
    isOwner: boolean;
  }>;
}

export function EnhancedSignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<"signin" | "account_select" | "permissions" | "success" | "error">("signin");
  const [selectedAccount, setSelectedAccount] = useState<AccountInfo | null>(null);
  const [accounts, setAccounts] = useState<AccountInfo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate Google OAuth flow
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate account detection
      const mockAccounts: AccountInfo[] = [
        {
          id: "1",
          name: "John Doe",
          email: "john.doe@gmail.com",
          type: "personal",
          hasYouTubeAccess: true,
          permissions: ["youtube.readonly"],
          channels: [
            {
              id: "UC123456789",
              name: "Tech Reviews Pro",
              subscribers: "847.2K",
              isOwner: true,
            },
          ],
        },
        {
          id: "2",
          name: "Tech Reviews Pro",
          email: "techreviewspro@gmail.com",
          type: "brand",
          hasYouTubeAccess: true,
          permissions: ["youtube.readonly", "youtube.force-ssl"],
          channels: [
            {
              id: "UC987654321",
              name: "Tech Reviews Pro",
              subscribers: "847.2K",
              isOwner: true,
            },
          ],
        },
      ];

      setAccounts(mockAccounts);
      
      if (mockAccounts.length === 1) {
        // Auto-select if only one account
        setSelectedAccount(mockAccounts[0]);
        await handleAccountSelection(mockAccounts[0]);
      } else {
        setStep("account_select");
      }
    } catch (err) {
      setError("Failed to sign in with Google. Please try again.");
      setStep("error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAccountSelection = async (account: AccountInfo) => {
    setSelectedAccount(account);
    setIsLoading(true);
    
    try {
      // Check YouTube permissions
      if (!account.hasYouTubeAccess) {
        setError("This account doesn't have access to YouTube data. Please use a different account or contact the channel owner for permissions.");
        setStep("error");
        return;
      }

      if (account.permissions.length === 0) {
        setError("Insufficient permissions. Please ensure you have access to YouTube Analytics.");
        setStep("error");
        return;
      }

      // Simulate permission check
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStep("success");
      
      // Redirect to dashboard after success
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } catch (err) {
      setError("Failed to verify account permissions. Please try again.");
      setStep("error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    setStep("signin");
    setError(null);
    setSelectedAccount(null);
    setAccounts([]);
  };

  const handleSwitchAccount = () => {
    setStep("signin");
    setError(null);
    setSelectedAccount(null);
    setAccounts([]);
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      <Card className="w-full max-w-md card-gradient">
        <CardHeader className="text-center space-y-4 pb-8">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-white">Welcome to WatchWise</h1>
            <p className="text-gray-400">Sign in to access your YouTube analytics dashboard</p>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {step === "signin" && (
            <>
              <Button
                onClick={handleGoogleSignIn}
                disabled={isLoading}
                className="w-full orange-gradient text-white hover:opacity-90 py-6 text-lg"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Sign in with Google
                  </>
                )}
              </Button>

              <div className="text-center text-sm text-gray-400">
                Don't have an account?{" "}
                <Link href="/auth/signup" className="text-orange-500 hover:text-orange-400">
                  Sign up
                </Link>
              </div>
            </>
          )}

          {step === "account_select" && (
            <div className="space-y-4">
              <div className="text-center">
                <h2 className="text-white font-semibold mb-2">Select Account</h2>
                <p className="text-gray-400 text-sm">Choose which account to use with WatchWise</p>
              </div>
              
              {accounts.map((account) => (
                <div
                  key={account.id}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedAccount?.id === account.id
                      ? "border-orange-500 bg-orange-500/10"
                      : "border-gray-700 bg-white/5 hover:bg-white/10"
                  }`}
                  onClick={() => handleAccountSelection(account)}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      account.type === "brand" ? "bg-blue-500/20" : "bg-green-500/20"
                    }`}>
                      {account.type === "brand" ? (
                        <Building2 className="w-5 h-5 text-blue-400" />
                      ) : (
                        <Users className="w-5 h-5 text-green-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-medium">{account.name}</h3>
                      <p className="text-gray-400 text-sm">{account.email}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge className={
                          account.type === "brand" 
                            ? "bg-blue-500/20 text-blue-300 border-blue-500/30"
                            : "bg-green-500/20 text-green-300 border-green-500/30"
                        }>
                          {account.type === "brand" ? "Brand Account" : "Personal Account"}
                        </Badge>
                        {account.hasYouTubeAccess && (
                          <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            YouTube Access
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <Button
                onClick={handleSwitchAccount}
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Use Different Account
              </Button>
            </div>
          )}

          {step === "permissions" && selectedAccount && (
            <div className="space-y-4">
              <div className="text-center">
                <h2 className="text-white font-semibold mb-2">Checking Permissions</h2>
                <p className="text-gray-400 text-sm">Verifying YouTube access...</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-gray-300">YouTube Data Access</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Analytics Permissions</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-gray-300">Channel Access</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
              </div>
            </div>
          )}

          {step === "success" && (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-white font-semibold text-xl">Welcome to WatchWise!</h2>
                <p className="text-gray-400">Redirecting to your dashboard...</p>
              </div>
            </div>
          )}

          {step === "error" && (
            <div className="space-y-4">
              <Alert className="border-red-500/30 bg-red-500/10">
                <AlertCircle className="h-4 w-4 text-red-400" />
                <AlertDescription className="text-red-300">
                  {error}
                </AlertDescription>
              </Alert>
              
              <div className="space-y-2">
                <Button
                  onClick={handleRetry}
                  className="w-full orange-gradient text-white"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again
                </Button>
                <Button
                  onClick={handleSwitchAccount}
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Use Different Account
                </Button>
              </div>
              
              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  Need help?{" "}
                  <a href="#" className="text-orange-400 hover:text-orange-300">
                    Contact support
                  </a>
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
