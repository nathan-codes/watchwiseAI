import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { User, CreditCard, Bell, Key, Copy, RefreshCw, Crown, Check } from "lucide-react"

export function SettingsPage() {
  return (
    <div className="min-h-screen p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <SidebarTrigger />
        <div>
          <h1 className="text-2xl font-bold text-white">Settings</h1>
          <p className="text-gray-400">Manage your account and preferences</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <User className="w-5 h-5 mr-2" />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">JD</span>
                </div>
                <div className="space-y-2">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                    Change Avatar
                  </Button>
                  <p className="text-xs text-gray-400">JPG, PNG up to 2MB</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white">
                    First Name
                  </Label>
                  <Input id="firstName" defaultValue="John" className="bg-white/5 border-white/20 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white">
                    Last Name
                  </Label>
                  <Input id="lastName" defaultValue="Doe" className="bg-white/5 border-white/20 text-white" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="john.doe@example.com"
                  className="bg-white/5 border-white/20 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-white">
                  Company
                </Label>
                <Input id="company" defaultValue="Tech Reviews Pro" className="bg-white/5 border-white/20 text-white" />
              </div>

              <Button className="orange-gradient text-white hover:opacity-90">Save Changes</Button>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Email Notifications</p>
                    <p className="text-sm text-gray-400">Receive email updates about your videos</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Weekly Reports</p>
                    <p className="text-sm text-gray-400">Get weekly analytics summaries</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Team Mentions</p>
                    <p className="text-sm text-gray-400">Notifications when team members mention you</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Video Analysis Complete</p>
                    <p className="text-sm text-gray-400">Alert when video analysis is finished</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Marketing Updates</p>
                    <p className="text-sm text-gray-400">Product updates and feature announcements</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* API Keys */}
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Key className="w-5 h-5 mr-2" />
                API Key Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-white font-medium">Production API Key</p>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-300">
                      Active
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <code className="flex-1 p-2 bg-black/20 rounded text-gray-300 text-sm font-mono">
                      ww_prod_1234567890abcdef...
                    </code>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">Created on Jan 15, 2024 • Last used 2 hours ago</p>
                </div>

                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-white font-medium">Development API Key</p>
                    <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300">
                      Limited
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <code className="flex-1 p-2 bg-black/20 rounded text-gray-300 text-sm font-mono">
                      ww_dev_abcdef1234567890...
                    </code>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">Created on Dec 8, 2023 • Last used 1 week ago</p>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Regenerate Key
                </Button>
                <Button className="orange-gradient text-white hover:opacity-90">Create New Key</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Subscription & Billing */}
        <div className="space-y-6">
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Crown className="w-5 h-5 mr-2 text-yellow-500" />
                Subscription Plan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center space-y-2">
                <Badge className="bg-yellow-500/20 text-yellow-300 px-3 py-1">Pro Plan</Badge>
                <p className="text-2xl font-bold text-white">$49/month</p>
                <p className="text-sm text-gray-400">Billed monthly</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-300">Unlimited video analysis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-300">Team collaboration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-300">AI-powered insights</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-300">Priority support</span>
                </div>
              </div>

              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  Change Plan
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-red-500/20 text-red-400 hover:bg-red-500/10 bg-transparent"
                >
                  Cancel Subscription
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <CreditCard className="w-5 h-5 mr-2" />
                Billing Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">•••• •••• •••• 4242</p>
                      <p className="text-xs text-gray-400">Expires 12/25</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300">
                    Default
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-gray-400">Next billing date: Feb 15, 2024</p>
                <p className="text-sm text-gray-400">Amount: $49.00</p>
              </div>

              <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent">
                Update Payment Method
              </Button>
            </CardContent>
          </Card>

          <Card className="card-gradient">
            <CardHeader>
              <CardTitle className="text-white">Usage This Month</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Videos Analyzed</span>
                    <span className="text-white">47 / Unlimited</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: "47%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">API Calls</span>
                    <span className="text-white">12,847 / 50,000</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "26%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Team Members</span>
                    <span className="text-white">4 / 10</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "40%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
