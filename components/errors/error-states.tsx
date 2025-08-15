"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertCircle,
  Frown,
  RefreshCw,
  HelpCircle,
  ExternalLink,
  Users,
  BarChart3,
  Target,
} from "lucide-react";

interface ErrorStateProps {
  type: "insufficient_data" | "api_error" | "private_videos" | "no_videos";
  onRetry?: () => void;
  onContactSupport?: () => void;
}

export function ErrorState({ type, onRetry, onContactSupport }: ErrorStateProps) {
  const errorConfig = {
    insufficient_data: {
      icon: Frown,
      title: "Not Enough Data Yet",
      description: "We need at least 100 views to provide meaningful retention analysis.",
      message: "Your videos are still gathering views. Once you reach 100+ views, we'll be able to provide detailed retention insights and AI-powered recommendations.",
      action: "Get LLM feedback on your script instead",
      color: "orange",
      emoji: "😔",
    },
    api_error: {
      icon: AlertCircle,
      title: "API Connection Issue",
      description: "We're having trouble connecting to YouTube's servers.",
      message: "This might be due to temporary YouTube API issues or rate limiting. Please try again in a few minutes.",
      action: "Try Again",
      color: "red",
      emoji: "😰",
    },
    private_videos: {
      icon: Frown,
      title: "Private Videos Detected",
      description: "Some of your videos are private or unlisted.",
      message: "We can only analyze public videos. Please make your videos public to get retention insights and recommendations.",
      action: "Make Videos Public",
      color: "yellow",
      emoji: "😔",
    },
    no_videos: {
      icon: BarChart3,
      title: "No Videos Found",
      description: "We couldn't find any videos in your channel.",
      message: "Make sure your YouTube channel is properly connected and has published videos.",
      action: "Connect Channel",
      color: "blue",
      emoji: "📹",
    },
  };

  const config = errorConfig[type];
  const IconComponent = config.icon;

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Card className="card-gradient hover-lift max-w-md w-full">
        <CardHeader className="text-center">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-4">
            <span className="text-4xl">{config.emoji}</span>
          </div>
          <CardTitle className="text-white text-xl">{config.title}</CardTitle>
          <p className="text-gray-400">{config.description}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-white/5 rounded-lg p-4">
            <p className="text-gray-300 text-sm leading-relaxed">
              {config.message}
            </p>
          </div>

          {type === "insufficient_data" && (
            <div className="space-y-4">
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="w-4 h-4 text-orange-400" />
                  <span className="text-orange-300 font-medium">Alternative Solution</span>
                </div>
                <p className="text-gray-300 text-sm">
                  While we wait for more data, we can analyze your video script and provide AI-powered suggestions for improvement.
                </p>
              </div>
              <Button className="w-full orange-gradient text-white">
                <BarChart3 className="w-4 h-4 mr-2" />
                Analyze Script with AI
              </Button>
            </div>
          )}

          {type === "api_error" && (
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Button
                  onClick={onRetry}
                  className="flex-1 orange-gradient text-white"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again
                </Button>
                <Button
                  onClick={onContactSupport}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
              </div>
              <p className="text-gray-400 text-xs text-center">
                If the problem persists, please contact our support team.
              </p>
            </div>
          )}

          {type === "private_videos" && (
            <div className="space-y-4">
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-yellow-400" />
                  <span className="text-yellow-300 font-medium">Action Required</span>
                </div>
                <p className="text-gray-300 text-sm">
                  To get retention insights, please make your videos public in YouTube Studio.
                </p>
              </div>
              <div className="flex space-x-2">
                <Button className="flex-1 orange-gradient text-white">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open YouTube Studio
                </Button>
                <Button
                  onClick={onRetry}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
              </div>
            </div>
          )}

          {type === "no_videos" && (
            <div className="space-y-4">
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-300 font-medium">Get Started</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Connect your YouTube channel to start analyzing your videos and improving retention.
                </p>
              </div>
              <Button className="w-full orange-gradient text-white">
                <ExternalLink className="w-4 h-4 mr-2" />
                Connect YouTube Channel
              </Button>
            </div>
          )}

          <div className="text-center">
            <p className="text-gray-400 text-xs">
              Need help?{" "}
              <a href="#" className="text-orange-400 hover:text-orange-300">
                Contact our support team
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
