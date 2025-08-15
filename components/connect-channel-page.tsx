"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { BarChart3, Youtube, Shield, Eye, Users, Loader2, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export function ConnectChannelPage() {
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const router = useRouter()

  const handleConnect = async () => {
    setIsConnecting(true)
    // Simulate connection process
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsConnected(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    router.push("/dashboard")
  }

  if (isConnected) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
        <Card className="w-full max-w-md card-gradient text-center">
          <CardContent className="py-12 space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white">Channel Connected!</h2>
              <p className="text-gray-400">Redirecting to your dashboard...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl card-gradient">
        <CardHeader className="text-center space-y-4 pb-8">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center">
              <Youtube className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-white">Connect Your YouTube Channel</h1>
            <p className="text-gray-400">Grant WatchWise access to your YouTube analytics to get started</p>
          </div>
        </CardHeader>

        <CardContent className="space-y-8">
          {/* Permissions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Shield className="w-5 h-5 mr-2 text-green-500" />
              WatchWise will be able to:
            </h3>

            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/5">
                <Eye className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">View your YouTube Analytics</p>
                  <p className="text-sm text-gray-400">Access retention data, view counts, and engagement metrics</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/5">
                <Users className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Read channel information</p>
                  <p className="text-sm text-gray-400">Channel name, subscriber count, and basic metadata</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/5">
                <BarChart3 className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Access video performance data</p>
                  <p className="text-sm text-gray-400">Individual video analytics and audience retention graphs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="space-y-1">
                <p className="text-sm font-medium text-blue-300">Your data is secure</p>
                <p className="text-xs text-blue-200/80">
                  We only read your analytics data and never modify your channel or videos. You can revoke access at any
                  time.
                </p>
              </div>
            </div>
          </div>

          {/* Connect Button */}
          <Button
            onClick={handleConnect}
            disabled={isConnecting}
            className="w-full orange-gradient text-white hover:opacity-90 py-6 text-lg"
          >
            {isConnecting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Connecting Channel...
              </>
            ) : (
              <>
                <Youtube className="w-5 h-5 mr-2" />
                Connect Channel
              </>
            )}
          </Button>

          <div className="text-center text-xs text-gray-500">By connecting, you agree to our data processing terms</div>
        </CardContent>
      </Card>
    </div>
  )
}
