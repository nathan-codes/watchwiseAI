import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Search, Filter, Grid3X3, List, MoreHorizontal, Eye, TrendingUp, Calendar, Play } from "lucide-react"
import Link from "next/link"

const videos = [
  {
    id: 1,
    title: "iPhone 15 Pro Max Review: The Ultimate Camera Test",
    thumbnail: "/placeholder.svg?height=180&width=320&text=iPhone+Review",
    views: "2.4M views",
    published: "3 days ago",
    duration: "12:45",
    ctr: "9.2%",
    retention: "8.3m",
    avgViewDuration: "78.3%",
    status: "published",
    category: "Tech Review",
  },
  {
    id: 2,
    title: "MacBook Pro M3 vs Gaming Laptop: Which Wins?",
    thumbnail: "/placeholder.svg?height=180&width=320&text=MacBook+vs+Gaming",
    views: "1.8M views",
    published: "1 week ago",
    duration: "15:23",
    ctr: "7.8%",
    retention: "11.2m",
    avgViewDuration: "72.8%",
    status: "published",
    category: "Comparison",
  },
  {
    id: 3,
    title: "AirPods Pro 3 vs Sony WH-1000XM5: Audio Battle",
    thumbnail: "/placeholder.svg?height=180&width=320&text=AirPods+Battle",
    views: "950K views",
    published: "2 weeks ago",
    duration: "9:17",
    ctr: "8.9%",
    retention: "6.8m",
    avgViewDuration: "73.2%",
    status: "published",
    category: "Audio",
  },
  {
    id: 4,
    title: "Best Budget Smartphones 2024: Top 5 Picks",
    thumbnail: "/placeholder.svg?height=180&width=320&text=Budget+Phones",
    views: "1.2M views",
    published: "3 weeks ago",
    duration: "11:30",
    ctr: "6.4%",
    retention: "8.9m",
    avgViewDuration: "77.4%",
    status: "published",
    category: "Roundup",
  },
  {
    id: 5,
    title: "Tesla Model Y vs BMW iX: Electric SUV Showdown",
    thumbnail: "/placeholder.svg?height=180&width=320&text=Tesla+vs+BMW",
    views: "890K views",
    published: "1 month ago",
    duration: "18:42",
    ctr: "5.8%",
    retention: "13.2m",
    avgViewDuration: "70.6%",
    status: "published",
    category: "Automotive",
  },
  {
    id: 6,
    title: "Gaming Setup Tour 2024: $15K Ultimate Build",
    thumbnail: "/placeholder.svg?height=180&width=320&text=Gaming+Setup",
    views: "2.1M views",
    published: "1 month ago",
    duration: "14:15",
    ctr: "10.3%",
    retention: "10.8m",
    avgViewDuration: "75.9%",
    status: "published",
    category: "Gaming",
  },
]

export function VideosPage() {
  return (
    <div className="min-h-screen p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <SidebarTrigger />
          <div>
            <h1 className="text-2xl font-bold text-white">My Videos</h1>
            <p className="text-gray-400">Manage and analyze your video content</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search videos..."
              className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-gray-400 w-64"
            />
          </div>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <div className="flex border border-white/20 rounded-lg">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white border-r border-white/20">
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Filter Tags */}
      <div className="flex items-center space-x-3">
        <Badge variant="secondary" className="bg-orange-500/20 text-orange-300 cursor-pointer">
          All Videos
        </Badge>
        <Badge variant="outline" className="border-white/20 text-gray-400 hover:text-white cursor-pointer">
          Tech Review
        </Badge>
        <Badge variant="outline" className="border-white/20 text-gray-400 hover:text-white cursor-pointer">
          Comparison
        </Badge>
        <Badge variant="outline" className="border-white/20 text-gray-400 hover:text-white cursor-pointer">
          Gaming
        </Badge>
        <Badge variant="outline" className="border-white/20 text-gray-400 hover:text-white cursor-pointer">
          Automotive
        </Badge>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <Card
            key={video.id}
            className="card-gradient overflow-hidden group hover:scale-105 transition-all duration-200"
          >
            <div className="relative">
              <img src={video.thumbnail || "/placeholder.svg"} alt={video.title} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
              <div className="absolute top-2 left-2">
                <Badge variant="secondary" className="bg-purple-500/80 text-white text-xs">
                  {video.category}
                </Badge>
              </div>
            </div>

            <CardContent className="p-4 space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-white line-clamp-2 group-hover:text-orange-400 transition-colors">
                  {video.title}
                </h3>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{video.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{video.published}</span>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-2 rounded-lg bg-white/5">
                  <p className="text-xs text-gray-400">CTR</p>
                  <p className="text-sm font-semibold text-green-400">{video.ctr}</p>
                </div>
                <div className="p-2 rounded-lg bg-white/5">
                  <p className="text-xs text-gray-400">Retention</p>
                  <p className="text-sm font-semibold text-blue-400">{video.retention}</p>
                </div>
                <div className="p-2 rounded-lg bg-white/5">
                  <p className="text-xs text-gray-400">Avg View</p>
                  <p className="text-sm font-semibold text-purple-400">{video.avgViewDuration}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <Link href={`/analysis/${video.id}`}>
                  <Button size="sm" className="orange-gradient text-white hover:opacity-90">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    Analyze
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-6">
        <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
          Load More Videos
        </Button>
      </div>
    </div>
  )
}
