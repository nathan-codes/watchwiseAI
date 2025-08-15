"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Target,
  TrendingUp,
  TrendingDown,
  Trophy,
  Star,
  Zap,
  AlertCircle,
  CheckCircle,
  XCircle,
  Smile,
  Frown,
  Meh,
  Play,
  Clock,
  Users,
  BarChart3,
} from "lucide-react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Area,
  AreaChart,
  ReferenceLine,
  Tooltip,
  Line,
  LineChart,
} from "recharts";

// Dummy data for retention graphs
const retentionData = [
  { time: "0:00", retention: 100, viewers: 127000, timestamp: 0 },
  { time: "0:30", retention: 94, viewers: 119000, timestamp: 30 },
  { time: "1:00", retention: 88, viewers: 112000, timestamp: 60 },
  { time: "1:30", retention: 82, viewers: 104000, timestamp: 90 },
  { time: "2:00", retention: 75, viewers: 95000, timestamp: 120 },
  { time: "2:30", retention: 68, viewers: 86000, timestamp: 150 },
  { time: "3:00", retention: 61, viewers: 77500, timestamp: 180 },
  { time: "3:30", retention: 54, viewers: 68500, timestamp: 210 },
  { time: "4:00", retention: 47, viewers: 59700, timestamp: 240 },
  { time: "4:30", retention: 40, viewers: 50800, timestamp: 270 },
  { time: "5:00", retention: 33, viewers: 41900, timestamp: 330 },
];

const recentVideos = [
  {
    id: 1,
    title: "iPhone 15 Pro Max Review: The Ultimate Camera Test",
    thumbnail: "/images/iphonevideo.jpg",
    retention: 75,
    goal: 80,
    published: "3 days ago",
    duration: "12:45",
    views: "2.4M",
    improvement: "+8%",
  },
  {
    id: 2,
    title: "MacBook Pro M3 vs Gaming Laptop: Which Wins?",
    thumbnail: "/images/macbookvideo.jpg",
    retention: 68,
    goal: 70,
    published: "1 week ago",
    duration: "15:23",
    views: "1.8M",
    improvement: "+12%",
  },
  {
    id: 3,
    title: "AirPods Pro 3 vs Sony WH-1000XM5: Audio Battle",
    thumbnail: "/images/airpodsvideo.avif",
    retention: 62,
    goal: 65,
    published: "2 weeks ago",
    duration: "9:17",
    views: "950K",
    improvement: "+5%",
  },
];

interface RetentionDashboardProps {
  userId?: string;
}

export function RetentionDashboard({ userId }: RetentionDashboardProps) {
  const [currentGoal, setCurrentGoal] = useState(30);
  const [selectedTimeframe, setSelectedTimeframe] = useState("30s");
  const [isLoading, setIsLoading] = useState(false);
  const [achievements, setAchievements] = useState<string[]>([]);
  const [maxRetention, setMaxRetention] = useState(25);

  useEffect(() => {
    // Simulate loading data
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Calculate max retention from data
      const max = Math.max(...retentionData.map(d => d.retention));
      setMaxRetention(max);
      // Set default goal as max retention + 5% (capped at 80%)
      const defaultGoal = Math.min(Math.ceil(max / 10) * 10 + 10, 80);
      setCurrentGoal(defaultGoal);
    }, 2000);
  }, []);

  const getGoalEmoji = (goal: number) => {
    if (goal >= 80) return "😰";
    if (goal >= 60) return "😐";
    if (goal >= 40) return "😊";
    return "😄";
  };

  const getGoalStatus = (goal: number) => {
    if (goal >= 80) return "unrealistic";
    if (goal >= 60) return "challenging";
    if (goal >= 40) return "achievable";
    return "easy";
  };

  const getAchievementMessage = () => {
    const recentImprovements = recentVideos.filter(v => v.retention >= v.goal).length;
    if (recentImprovements >= 5) {
      return `${recentImprovements} videos in a row at or exceeding your goal`;
    }
    if (recentImprovements >= 3) {
      return `${recentImprovements} videos in a row with improved retention`;
    }
    const closestGoal = Math.min(...recentVideos.map(v => v.goal));
    const currentAvg = recentVideos.reduce((sum, v) => sum + v.retention, 0) / recentVideos.length;
    const percentageToGoal = Math.round(((closestGoal - currentAvg) / closestGoal) * 100);
    return `${percentageToGoal}% until you reach ${closestGoal}% retention goal`;
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 shadow-xl">
          <p className="text-white font-medium">{label}</p>
          <p className="text-orange-400">
            Retention: {payload[0].value}%
          </p>
          <p className="text-gray-300">
            Viewers: {payload[0].payload.viewers?.toLocaleString() || "N/A"}
          </p>
        </div>
      );
    }
    return null;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-white text-lg">Processing your YouTube data...</p>
          <p className="text-gray-400">This may take a few moments</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Goal Setting Section */}
      <Card className="card-gradient hover-lift">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-white flex items-center space-x-2">
              <Target className="w-5 h-5 text-orange-400" />
              <span>Retention Goal</span>
            </CardTitle>
            <div className="flex items-center space-x-2">
              <span className="text-4xl">{getGoalEmoji(currentGoal)}</span>
              <Badge 
                className={
                  getGoalStatus(currentGoal) === "unrealistic" 
                    ? "bg-red-500/20 text-red-300 border-red-500/30"
                    : getGoalStatus(currentGoal) === "challenging"
                    ? "bg-orange-500/20 text-orange-300 border-orange-500/30"
                    : "bg-green-500/20 text-green-300 border-green-500/30"
                }
              >
                {getGoalStatus(currentGoal).toUpperCase()}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Target Retention: {currentGoal}%</span>
              {currentGoal >= 80 && (
                <div className="flex items-center space-x-2 text-red-400">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">Unrealistic goal</span>
                </div>
              )}
            </div>
            <Slider
              value={[currentGoal]}
              onValueChange={(value) => setCurrentGoal(value[0])}
              max={90}
              min={10}
              step={5}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-400">
              <span>10%</span>
              <span>50%</span>
              <span>90%</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white/5 rounded-lg">
              <p className="text-gray-400 text-sm">First 30s</p>
              <p className="text-2xl font-bold text-white">94%</p>
              <p className="text-green-400 text-sm">+2% vs goal</p>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg">
              <p className="text-gray-400 text-sm">First 60s</p>
              <p className="text-2xl font-bold text-white">88%</p>
              <p className="text-green-400 text-sm">+3% vs goal</p>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg">
              <p className="text-gray-400 text-sm">Overall</p>
              <p className="text-2xl font-bold text-white">75%</p>
              <p className="text-orange-400 text-sm">-5% vs goal</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievement Message */}
      <Card className="card-gradient hover-lift">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3">
            <Trophy className="w-6 h-6 text-yellow-400" />
            <div>
              <p className="text-white font-medium">{getAchievementMessage()}</p>
              <p className="text-gray-400 text-sm">Keep up the great work!</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Retention Graph */}
      <Card className="card-gradient hover-lift">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-white flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-orange-400" />
              <span>Audience Retention</span>
            </CardTitle>
            <div className="flex space-x-2">
              <Button
                variant={selectedTimeframe === "30s" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTimeframe("30s")}
                className="text-xs"
              >
                30s
              </Button>
              <Button
                variant={selectedTimeframe === "60s" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTimeframe("60s")}
                className="text-xs"
              >
                60s
              </Button>
              <Button
                variant={selectedTimeframe === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTimeframe("all")}
                className="text-xs"
              >
                All
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={retentionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="time" 
                  stroke="#9CA3AF"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#9CA3AF"
                  fontSize={12}
                  domain={[0, 100]}
                />
                <Tooltip content={<CustomTooltip />} />
                <ReferenceLine 
                  y={currentGoal} 
                  stroke="#F97316" 
                  strokeDasharray="3 3"
                  label={{ value: `Goal: ${currentGoal}%`, position: 'top', fill: '#F97316' }}
                />
                <Area
                  type="monotone"
                  dataKey="retention"
                  stroke="#F97316"
                  fill="url(#retentionGradient)"
                  strokeWidth={2}
                />
                <defs>
                  <linearGradient id="retentionGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F97316" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#F97316" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Recent Videos */}
      <Card className="card-gradient hover-lift">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Play className="w-5 h-5 text-orange-400" />
            <span>Recent Videos</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentVideos.map((video) => (
              <div key={video.id} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all">
                <div className="flex items-center space-x-3 mb-3">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-medium text-sm truncate">
                      {video.title}
                    </h3>
                    <p className="text-gray-400 text-xs">{video.published}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Retention</span>
                    <span className="text-white font-medium">{video.retention}%</span>
                  </div>
                  <Progress 
                    value={video.retention} 
                    className="h-2"
                    indicatorClassName={video.retention >= video.goal ? "bg-green-500" : "bg-orange-500"}
                  />
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Goal: {video.goal}%</span>
                    <span className={video.retention >= video.goal ? "text-green-400" : "text-orange-400"}>
                      {video.improvement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
