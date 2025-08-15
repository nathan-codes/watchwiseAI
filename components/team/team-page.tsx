import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Users, Plus, MoreHorizontal, MessageSquare, AtSign, Video } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "Sarah Chen",
    email: "sarah@techreviews.com",
    role: "Content Manager",
    avatar: "/placeholder.svg?height=40&width=40&text=SC",
    status: "online",
    videosAssigned: 12,
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    email: "marcus@techreviews.com",
    role: "Video Editor",
    avatar: "/placeholder.svg?height=40&width=40&text=MR",
    status: "away",
    videosAssigned: 8,
  },
  {
    id: 3,
    name: "Emily Watson",
    email: "emily@techreviews.com",
    role: "Analytics Specialist",
    avatar: "/placeholder.svg?height=40&width=40&text=EW",
    status: "online",
    videosAssigned: 15,
  },
  {
    id: 4,
    name: "David Kim",
    email: "david@techreviews.com",
    role: "Content Creator",
    avatar: "/placeholder.svg?height=40&width=40&text=DK",
    status: "offline",
    videosAssigned: 6,
  },
]

const comments = [
  {
    id: 1,
    user: "Sarah Chen",
    avatar: "/placeholder.svg?height=32&width=32&text=SC",
    time: "2 hours ago",
    video: "iPhone 15 Pro Max Review",
    comment: "Great retention spike at 4:30! The visual comparison really worked well here.",
    mentions: ["@marcus"],
    reactions: [
      { emoji: "👍", count: 3 },
      { emoji: "❤️", count: 1 },
    ],
  },
  {
    id: 2,
    user: "Marcus Rodriguez",
    avatar: "/placeholder.svg?height=32&width=32&text=MR",
    time: "4 hours ago",
    video: "MacBook Pro M3 vs Gaming Laptop",
    comment: "The pacing feels a bit slow in the middle section. Should we add more B-roll footage?",
    mentions: ["@emily", "@sarah"],
    reactions: [{ emoji: "🤔", count: 2 }],
  },
  {
    id: 3,
    user: "Emily Watson",
    avatar: "/placeholder.svg?height=32&width=32&text=EW",
    time: "1 day ago",
    video: "AirPods Pro 3 vs Sony WH-1000XM5",
    comment:
      "Analytics show 23% drop-off during the technical specs section. Let's try breaking it into smaller chunks next time.",
    mentions: [],
    reactions: [
      { emoji: "📊", count: 4 },
      { emoji: "💡", count: 2 },
    ],
  },
]

export function TeamPage() {
  return (
    <div className="min-h-screen p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <SidebarTrigger />
          <div>
            <h1 className="text-2xl font-bold text-white">Team Collaboration</h1>
            <p className="text-gray-400">Manage team members and video assignments</p>
          </div>
        </div>

        <Button className="orange-gradient text-white hover:opacity-90">
          <Plus className="w-4 h-4 mr-2" />
          Invite Member
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Team Members */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Team Members
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={member.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="bg-purple-500 text-white">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-gray-800 ${
                          member.status === "online"
                            ? "bg-green-500"
                            : member.status === "away"
                              ? "bg-yellow-500"
                              : "bg-gray-500"
                        }`}
                      ></div>
                    </div>
                    <div>
                      <p className="font-medium text-white">{member.name}</p>
                      <p className="text-sm text-gray-400">{member.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                      {member.role}
                    </Badge>
                    <div className="text-right">
                      <p className="text-sm text-white">{member.videosAssigned}</p>
                      <p className="text-xs text-gray-400">videos assigned</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Comments */}
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                Recent Comments
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="p-4 rounded-lg bg-white/5">
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={comment.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-blue-500 text-white text-xs">
                        {comment.user
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center space-x-2">
                        <p className="font-medium text-white text-sm">{comment.user}</p>
                        <p className="text-xs text-gray-400">{comment.time}</p>
                        <Badge variant="secondary" className="bg-orange-500/20 text-orange-300 text-xs">
                          <Video className="w-3 h-3 mr-1" />
                          {comment.video}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-300">{comment.comment}</p>

                      {comment.mentions.length > 0 && (
                        <div className="flex items-center space-x-2">
                          <AtSign className="w-3 h-3 text-blue-400" />
                          {comment.mentions.map((mention, index) => (
                            <Badge key={index} variant="secondary" className="bg-blue-500/20 text-blue-300 text-xs">
                              {mention}
                            </Badge>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center space-x-3">
                        {comment.reactions.map((reaction, index) => (
                          <button
                            key={index}
                            className="flex items-center space-x-1 text-xs text-gray-400 hover:text-white transition-colors"
                          >
                            <span>{reaction.emoji}</span>
                            <span>{reaction.count}</span>
                          </button>
                        ))}
                        <button className="text-xs text-gray-400 hover:text-white transition-colors">Reply</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Activity Feed */}
        <div className="space-y-6">
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle className="text-white">Team Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-white">Sarah assigned video to Marcus</p>
                    <p className="text-xs text-gray-400">2 minutes ago</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-white">Emily completed analysis review</p>
                    <p className="text-xs text-gray-400">15 minutes ago</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-white">David uploaded new video</p>
                    <p className="text-xs text-gray-400">1 hour ago</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-white">Marcus left comment on iPhone review</p>
                    <p className="text-xs text-gray-400">2 hours ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10 justify-start bg-transparent"
              >
                <Plus className="w-4 h-4 mr-2" />
                Assign Video
              </Button>
              <Button
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10 justify-start bg-transparent"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Start Discussion
              </Button>
              <Button
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10 justify-start bg-transparent"
              >
                <Users className="w-4 h-4 mr-2" />
                View All Members
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
