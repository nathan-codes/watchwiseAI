"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Filter, Plus, Play, Calendar, Eye, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const videos = [
  {
    id: 1,
    title: "iPhone 15 Pro Max Review: The Ultimate Camera Test",
    thumbnail: "/images/iphonevideo.jpg",
    views: "2.4M views",
    published: "3 days ago",
    duration: "12:45",
    status: "published",
    engagement: 95,
    retention: 75,
  },
  {
    id: 2,
    title: "MacBook Pro M3 vs Gaming Laptop: Which Wins?",
    thumbnail: "/images/macbookvideo.jpg",
    views: "1.8M views",
    published: "1 week ago",
    duration: "15:23",
    status: "published",
    engagement: 87,
    retention: 68,
  },
  {
    id: 3,
    title: "AirPods Pro 3 vs Sony WH-1000XM5: Audio Battle",
    thumbnail: "/images/airpodsvideo.avif",
    views: "950K views",
    published: "2 weeks ago",
    duration: "9:17",
    status: "published",
    engagement: 78,
    retention: 62,
  },
];

const metrics = [
  {
    title: "Subscribers",
    value: "847.2K",
    change: "+12.5%",
    icon: TrendingUp,
    gradient: "purple-gradient",
    trend: "up",
  },
  {
    title: "Total Views",
    value: "24.8M",
    change: "+8.3%",
    icon: Eye,
    gradient: "blue-gradient",
    trend: "up",
  },
  {
    title: "Total Videos",
    value: "342",
    change: "+3",
    icon: Play,
    gradient: "orange-gradient",
    trend: "up",
  },
  {
    title: "Avg Retention",
    value: "75%",
    change: "+2.1%",
    icon: TrendingUp,
    gradient: "green-gradient",
    trend: "up",
  },
];

export function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [channelData, setChannelData] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    // Simulate loading channel data
    setTimeout(() => {
      setChannelData({
        name: "Tech Reviews Pro",
        subscribers: "847.2K",
        totalViews: "24.8M",
        totalVideos: 342,
        retention: 75,
        isVerified: true,
        isTrending: true,
        lastUpdated: "2 minutes ago",
      });
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleVideoClick = (videoId: number) => {
    router.push(`/analysis/${videoId}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-white text-lg">Loading your channel data...</p>
          <p className="text-gray-400">This may take a few moments</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 space-y-8">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between animate-fade-in-up">
        <div className="flex items-center space-x-4">
          <SidebarTrigger />
          <div>
            <h1 className="text-3xl font-bold text-white">Channel Overview</h1>
            <p className="text-gray-400 flex items-center mt-1">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              {channelData?.name} • Live Analytics
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm hover:scale-105 transition-all duration-300"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button className="orange-gradient text-white hover:scale-105 transition-all duration-300 shadow-lg">
            <Plus className="w-4 h-4 mr-2" />
            Connect Channel
          </Button>
        </div>
      </div>

 

     

      {/* Videos Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Your Videos</h2>
          <p className="text-gray-400">
            Click on any video to analyze performance
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="card-gradient hover-lift cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => handleVideoClick(video.id)}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white font-medium text-sm line-clamp-2 mb-2">
                      {video.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                      <span>{video.views}</span>
                      <span>{video.published}</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Retention</span>
                        <span className="text-white font-medium">
                          {video.retention}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-orange-500 h-2 rounded-full"
                          style={{ width: `${video.retention}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-white/10">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">Engagement</span>
                        <span className="text-white">{video.engagement}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
