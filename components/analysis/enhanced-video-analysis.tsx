"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Share,
  Download,
  Eye,
  Clock,
  FileText,
  BarChart3,
  Users,
  Play,
  TrendingUp,
  Zap,
  Target,
  Brain,
  TrendingDown,
  Sparkles,
  Activity,
  Gauge,
  PlayCircle,
  PauseCircle,
  CheckCircle,
  XCircle,
  Lightbulb,
  Search,
  ArrowUp,
  ArrowDown,
  Minus,
  MessageSquare,
  Mail,
  Copy,
  ExternalLink,
  AlertCircle,
  Trophy,
  Star,
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

// Dummy data for enhanced analysis
const retentionData = [
  { time: "0:00", retention: 100, viewers: 127000, organic: 100, timestamp: 0 },
  { time: "0:30", retention: 94, viewers: 119000, organic: 94, timestamp: 30 },
  { time: "1:00", retention: 88, viewers: 112000, organic: 88, timestamp: 60 },
  { time: "1:30", retention: 82, viewers: 104000, organic: 82, timestamp: 90 },
  { time: "2:00", retention: 75, viewers: 95000, organic: 75, timestamp: 120 },
  { time: "2:30", retention: 68, viewers: 86000, organic: 68, timestamp: 150 },
  { time: "3:00", retention: 61, viewers: 77500, organic: 61, timestamp: 180 },
  { time: "3:30", retention: 54, viewers: 68500, organic: 54, timestamp: 210 },
  { time: "4:00", retention: 47, viewers: 59700, organic: 47, timestamp: 240 },
  { time: "4:30", retention: 40, viewers: 50800, organic: 40, timestamp: 270 },
  { time: "5:00", retention: 33, viewers: 41900, organic: 33, timestamp: 330 },
];

const improvementAreas = [
  {
    id: 1,
    title: "Major Drop at 4:30",
    description: "Setup section is losing viewers rapidly",
    impact: "Could boost retention by 18%",
    suggestion: "Move setup to separate video or condense it",
    priority: "high",
    color: "red",
    timestamp: "4:30",
    percentage: 18,
  },
  {
    id: 2,
    title: "Peak Engagement at 8:15",
    description: "Benchmark results section performing exceptionally well",
    impact: "Viewers love performance comparisons",
    suggestion: "Add more benchmark segments throughout the video",
    priority: "medium",
    color: "green",
    timestamp: "8:15",
    percentage: 12,
  },
  {
    id: 3,
    title: "Final 2 Minutes Decline",
    description: "Losing viewers before conclusion",
    impact: "23% drop in final 2 minutes",
    suggestion: "Add call-to-action earlier and strengthen conclusion",
    priority: "high",
    color: "orange",
    timestamp: "10:00",
    percentage: 23,
  },
];

const recommendations = [
  {
    id: 1,
    title: "Optimize Opening Hook",
    description: "Your first 30 seconds are crucial for retention",
    steps: [
      "Start with the most exciting result or finding",
      "Use a compelling question or statement",
      "Show a quick preview of what's coming",
    ],
    impact: "+15% retention potential",
    difficulty: "easy",
  },
  {
    id: 2,
    title: "Improve Pacing in Middle Section",
    description: "The 4-6 minute mark shows significant drop-off",
    steps: [
      "Break up long explanations with visuals",
      "Add transition elements between topics",
      "Include more interactive elements",
    ],
    impact: "+12% retention potential",
    difficulty: "medium",
  },
  {
    id: 3,
    title: "Strengthen Conclusion",
    description: "Viewers are leaving before the final call-to-action",
    steps: [
      "Summarize key points more concisely",
      "Add a strong call-to-action at 8:30",
      "End with a compelling question or teaser",
    ],
    impact: "+8% retention potential",
    difficulty: "easy",
  },
];

interface EnhancedVideoAnalysisProps {
  videoId: string;
  videoTitle?: string;
}

export function EnhancedVideoAnalysis({ videoId, videoTitle = "iPhone 15 Pro Max Review: The Ultimate Camera Test" }: EnhancedVideoAnalysisProps) {
  const [selectedArea, setSelectedArea] = useState<number | null>(null);
  const [showOrganic, setShowOrganic] = useState(true);
  const [isSharing, setIsSharing] = useState(false);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 shadow-xl">
          <p className="text-white font-medium">{label}</p>
          <p className="text-orange-400">
            Overall Retention: {payload[0].value}%
          </p>
          {payload[1] && (
            <p className="text-blue-400">
              Organic Retention: {payload[1].value}%
            </p>
          )}
          <p className="text-gray-300">
            Viewers: {payload[0].payload.viewers?.toLocaleString() || "N/A"}
          </p>
        </div>
      );
    }
    return null;
  };

  const handleShare = async (type: 'email' | 'copy' | 'link') => {
    setIsSharing(true);
    // Simulate sharing
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSharing(false);
  };

  return (
    <div className="space-y-8">
      {/* Video Header */}
      <Card className="card-gradient hover-lift">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="/images/iphonevideo.jpg"
                alt={videoTitle}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h1 className="text-xl font-bold text-white">{videoTitle}</h1>
                <p className="text-gray-400">Published 3 days ago • 12:45 duration</p>
                <div className="flex items-center space-x-2 mt-2">
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                    <Eye className="w-3 h-3 mr-1" />
                    2.4M views
                  </Badge>
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    75% retention
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                onClick={() => handleShare('copy')}
                disabled={isSharing}
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Link
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="orange-gradient text-white">
                    <Share className="w-4 h-4 mr-2" />
                    Share Analysis
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-900 border-gray-700">
                  <DialogHeader>
                    <DialogTitle className="text-white">Share Analysis</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-3">
                      <Button
                        onClick={() => handleShare('email')}
                        disabled={isSharing}
                        className="w-full justify-start"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Share via Email
                      </Button>
                      <Button
                        onClick={() => handleShare('copy')}
                        disabled={isSharing}
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy Analysis Link
                      </Button>
                    </div>
                    <div className="text-sm text-gray-400">
                      <p>Share this analysis with your team members to collaborate on improvements.</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
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
              <span>Audience Retention Analysis</span>
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button
                variant={showOrganic ? "default" : "outline"}
                size="sm"
                onClick={() => setShowOrganic(!showOrganic)}
                className="text-xs"
              >
                <Eye className="w-3 h-3 mr-1" />
                {showOrganic ? "Hide" : "Show"} Organic
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
                <Area
                  type="monotone"
                  dataKey="retention"
                  stroke="#F97316"
                  fill="url(#retentionGradient)"
                  strokeWidth={2}
                />
                {showOrganic && (
                  <Area
                    type="monotone"
                    dataKey="organic"
                    stroke="#3B82F6"
                    fill="url(#organicGradient)"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                  />
                )}
                <defs>
                  <linearGradient id="retentionGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F97316" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#F97316" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="organicGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Top Improvement Areas */}
      <Card className="card-gradient hover-lift">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Target className="w-5 h-5 text-orange-400" />
            <span>Top 3 Improvement Areas</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {improvementAreas.map((area) => (
              <div
                key={area.id}
                className={`bg-white/5 rounded-lg p-4 border-2 transition-all cursor-pointer hover:bg-white/10 ${
                  selectedArea === area.id
                    ? "border-orange-500 bg-orange-500/10"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedArea(selectedArea === area.id ? null : area.id)}
              >
                <div className="flex items-center justify-between mb-3">
                  <Badge
                    className={
                      area.priority === "high"
                        ? "bg-red-500/20 text-red-300 border-red-500/30"
                        : area.priority === "medium"
                        ? "bg-orange-500/20 text-orange-300 border-orange-500/30"
                        : "bg-green-500/20 text-green-300 border-green-500/30"
                    }
                  >
                    {area.priority.toUpperCase()}
                  </Badge>
                  <span className="text-2xl">
                    {area.priority === "high" ? "🔴" : area.priority === "medium" ? "🟡" : "🟢"}
                  </span>
                </div>
                <h3 className="text-white font-medium mb-2">{area.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{area.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Impact</span>
                    <span className="text-orange-400 font-medium">{area.impact}</span>
                  </div>
                  <Progress value={area.percentage} className="h-2" />
                </div>
                {selectedArea === area.id && (
                  <div className="mt-4 p-3 bg-white/5 rounded-lg">
                    <p className="text-white text-sm font-medium mb-2">Suggestion:</p>
                    <p className="text-gray-300 text-sm">{area.suggestion}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Detailed Recommendations */}
      <Card className="card-gradient hover-lift">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Lightbulb className="w-5 h-5 text-orange-400" />
            <span>Actionable Recommendations</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {recommendations.map((rec) => (
              <div key={rec.id} className="bg-white/5 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-white font-medium text-lg">{rec.title}</h3>
                    <p className="text-gray-400 text-sm">{rec.description}</p>
                  </div>
                  <Badge
                    className={
                      rec.difficulty === "easy"
                        ? "bg-green-500/20 text-green-300 border-green-500/30"
                        : rec.difficulty === "medium"
                        ? "bg-orange-500/20 text-orange-300 border-orange-500/30"
                        : "bg-red-500/20 text-red-300 border-red-500/30"
                    }
                  >
                    {rec.difficulty.toUpperCase()}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-white font-medium">Key Steps:</h4>
                  <ol className="list-decimal list-inside space-y-2">
                    {rec.steps.map((step, index) => (
                      <li key={index} className="text-gray-300 text-sm ml-4">
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
                
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-medium">{rec.impact}</span>
                  </div>
                  <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <MessageSquare className="w-3 h-3 mr-1" />
                    Get More Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Encouraging Message */}
      <Card className="card-gradient hover-lift">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium text-lg">Great Progress!</h3>
              <p className="text-gray-300">
                Your retention rate of 75% is above the industry average of 60%. 
                With these improvements, you could reach 85%+ retention and significantly 
                boost your video performance!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
