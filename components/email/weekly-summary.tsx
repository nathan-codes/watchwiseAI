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
  Mail,
  Share,
  Download,
  Users,
  TrendingUp,
  Target,
  Calendar,
  BarChart3,
  Zap,
  Trophy,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

interface WeeklySummaryData {
  week: string;
  videosAnalyzed: number;
  averageRetention: number;
  goalAchievement: number;
  topPerformer: {
    title: string;
    retention: number;
    views: string;
  };
  improvements: Array<{
    area: string;
    impact: string;
    suggestion: string;
  }>;
  achievements: Array<{
    title: string;
    description: string;
    unlocked: boolean;
  }>;
}

interface PersonaFeedback {
  editor: Array<{
    title: string;
    action: string;
    priority: "high" | "medium" | "low";
  }>;
  scriptWriter: Array<{
    title: string;
    action: string;
    priority: "high" | "medium" | "low";
  }>;
  general: Array<{
    title: string;
    action: string;
    priority: "high" | "medium" | "low";
  }>;
}

const weeklyData: WeeklySummaryData = {
  week: "January 15-21, 2024",
  videosAnalyzed: 3,
  averageRetention: 75,
  goalAchievement: 80,
  topPerformer: {
    title: "iPhone 15 Pro Max Review: The Ultimate Camera Test",
    retention: 82,
    views: "2.4M",
  },
  improvements: [
    {
      area: "Opening Hook",
      impact: "+15% retention potential",
      suggestion: "Start with the most exciting result or finding",
    },
    {
      area: "Pacing",
      impact: "+12% retention potential",
      suggestion: "Break up long explanations with visuals",
    },
    {
      area: "Conclusion",
      impact: "+8% retention potential",
      suggestion: "Add a strong call-to-action earlier",
    },
  ],
  achievements: [
    {
      title: "Goal Crusher",
      description: "Achieved your first retention goal",
      unlocked: true,
    },
    {
      title: "Consistency King",
      description: "5 videos in a row with improved retention",
      unlocked: true,
    },
  ],
};

const personaFeedback: PersonaFeedback = {
  editor: [
    {
      title: "Optimize Video Pacing",
      action: "Add transition elements between topics at 4:30 and 8:15",
      priority: "high",
    },
    {
      title: "Improve Visual Elements",
      action: "Include more benchmark segments throughout the video",
      priority: "medium",
    },
  ],
  scriptWriter: [
    {
      title: "Strengthen Opening",
      action: "Start with the most exciting result or finding in the first 30 seconds",
      priority: "high",
    },
    {
      title: "Enhance Conclusion",
      action: "Add a compelling question or teaser at the end",
      priority: "medium",
    },
  ],
  general: [
    {
      title: "Retention Goal Progress",
      action: "You're 80% of the way to your 80% retention goal",
      priority: "medium",
    },
  ],
};

interface WeeklySummaryProps {
  onShare?: (type: 'email' | 'download' | 'link') => void;
}

export function WeeklySummary({ onShare }: WeeklySummaryProps) {
  const [selectedPersona, setSelectedPersona] = useState<keyof PersonaFeedback>('general');
  const [isSharing, setIsSharing] = useState(false);

  const handleShare = async (type: 'email' | 'download' | 'link') => {
    setIsSharing(true);
    // Simulate sharing
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSharing(false);
    if (onShare) {
      onShare(type);
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500/20 text-red-300 border-red-500/30";
      case "medium":
        return "bg-orange-500/20 text-orange-300 border-orange-500/30";
      case "low":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="card-gradient hover-lift">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-white flex items-center space-x-2">
                <Mail className="w-5 h-5 text-orange-400" />
                <span>Weekly Summary</span>
              </CardTitle>
              <p className="text-gray-400 mt-1">{weeklyData.week}</p>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                onClick={() => handleShare('download')}
                disabled={isSharing}
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="orange-gradient text-white">
                    <Share className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-900 border-gray-700">
                  <DialogHeader>
                    <DialogTitle className="text-white">Share Weekly Summary</DialogTitle>
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
                        onClick={() => handleShare('link')}
                        disabled={isSharing}
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Copy Share Link
                      </Button>
                    </div>
                    <div className="text-sm text-gray-400">
                      <p>Share this summary with your team members to collaborate on improvements.</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="card-gradient hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-blue-400" />
              </div>
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                +12%
              </Badge>
            </div>
            <h3 className="text-white font-semibold text-2xl">{weeklyData.videosAnalyzed}</h3>
            <p className="text-gray-400">Videos Analyzed</p>
          </CardContent>
        </Card>

        <Card className="card-gradient hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-orange-400" />
              </div>
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                {weeklyData.averageRetention}%
              </Badge>
            </div>
            <h3 className="text-white font-semibold text-2xl">{weeklyData.averageRetention}%</h3>
            <p className="text-gray-400">Average Retention</p>
          </CardContent>
        </Card>

        <Card className="card-gradient hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-green-400" />
              </div>
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                {weeklyData.goalAchievement}%
              </Badge>
            </div>
            <h3 className="text-white font-semibold text-2xl">{weeklyData.goalAchievement}%</h3>
            <p className="text-gray-400">Goal Achievement</p>
          </CardContent>
        </Card>
      </div>

      {/* Top Performer */}
      <Card className="card-gradient hover-lift">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span>Top Performer This Week</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <img
              src="/images/iphonevideo.jpg"
              alt={weeklyData.topPerformer.title}
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="text-white font-medium">{weeklyData.topPerformer.title}</h3>
              <div className="flex items-center space-x-4 mt-2">
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                  {weeklyData.topPerformer.retention}% retention
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  {weeklyData.topPerformer.views} views
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Persona-Based Feedback */}
      <Card className="card-gradient hover-lift">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Users className="w-5 h-5 text-orange-400" />
            <span>Team Feedback</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Persona Selector */}
            <div className="flex space-x-2">
              <Button
                variant={selectedPersona === 'editor' ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPersona('editor')}
                className="text-xs"
              >
                Editor
              </Button>
              <Button
                variant={selectedPersona === 'scriptWriter' ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPersona('scriptWriter')}
                className="text-xs"
              >
                Script Writer
              </Button>
              <Button
                variant={selectedPersona === 'general' ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPersona('general')}
                className="text-xs"
              >
                General
              </Button>
            </div>

            {/* Feedback Items */}
            <div className="space-y-4">
              {personaFeedback[selectedPersona].map((item, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-white font-medium">{item.title}</h4>
                      <p className="text-gray-300 text-sm mt-1">{item.action}</p>
                    </div>
                    <Badge className={getPriorityColor(item.priority)}>
                      {item.priority.toUpperCase()}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="card-gradient hover-lift">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span>Recent Achievements</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {weeklyData.achievements.map((achievement, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{achievement.title}</h4>
                    <p className="text-gray-400 text-sm">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Improvements */}
      <Card className="card-gradient hover-lift">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Zap className="w-5 h-5 text-orange-400" />
            <span>Key Improvements</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {weeklyData.improvements.map((improvement, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-medium">{improvement.area}</h4>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                    {improvement.impact}
                  </Badge>
                </div>
                <p className="text-gray-300 text-sm">{improvement.suggestion}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
