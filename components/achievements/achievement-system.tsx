"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Trophy,
  Star,
  Target,
  TrendingUp,
  Zap,
  Award,
  Medal,
  Crown,
  Sparkles,
  CheckCircle,
  X,
  Share,
  ExternalLink,
} from "lucide-react";

// Achievement types and data
const achievements = [
  {
    id: "first_goal",
    title: "Goal Crusher",
    description: "Achieved your first retention goal",
    icon: Target,
    color: "orange",
    rarity: "common",
    unlocked: true,
    unlockedAt: "2024-01-15",
    progress: 100,
  },
  {
    id: "streak_5",
    title: "Consistency King",
    description: "5 videos in a row with improved retention",
    icon: TrendingUp,
    color: "green",
    rarity: "rare",
    unlocked: true,
    unlockedAt: "2024-01-20",
    progress: 100,
  },
  {
    id: "retention_80",
    title: "Retention Master",
    description: "Reached 80% retention on any video",
    icon: Crown,
    color: "purple",
    rarity: "epic",
    unlocked: false,
    progress: 75,
  },
  {
    id: "analysis_10",
    title: "Analytics Pro",
    description: "Analyzed 10 videos",
    icon: Zap,
    color: "blue",
    rarity: "common",
    unlocked: false,
    progress: 60,
  },
  {
    id: "team_collab",
    title: "Team Player",
    description: "Shared analysis with team members",
    icon: Share,
    color: "teal",
    rarity: "common",
    unlocked: false,
    progress: 0,
  },
  {
    id: "weekly_streak",
    title: "Weekly Warrior",
    description: "Used the app for 4 consecutive weeks",
    icon: Star,
    color: "yellow",
    rarity: "rare",
    unlocked: false,
    progress: 25,
  },
];

const rarityColors = {
  common: "bg-gray-500/20 text-gray-300 border-gray-500/30",
  rare: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  epic: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  legendary: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
};

const rarityIcons = {
  common: "⭐",
  rare: "⭐⭐",
  epic: "⭐⭐⭐",
  legendary: "⭐⭐⭐⭐",
};

interface AchievementSystemProps {
  userId?: string;
  onAchievementUnlocked?: (achievementId: string) => void;
}

export function AchievementSystem({ userId, onAchievementUnlocked }: AchievementSystemProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [recentAchievement, setRecentAchievement] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Simulate achievement unlocking
  useEffect(() => {
    const checkForNewAchievements = () => {
      const newAchievements = achievements.filter(a => !a.unlocked && a.progress >= 100);
      if (newAchievements.length > 0) {
        const achievement = newAchievements[0];
        unlockAchievement(achievement.id);
      }
    };

    // Check every 30 seconds for demo purposes
    const interval = setInterval(checkForNewAchievements, 30000);
    return () => clearInterval(interval);
  }, []);

  const unlockAchievement = (achievementId: string) => {
    const achievement = achievements.find(a => a.id === achievementId);
    if (achievement && !achievement.unlocked) {
      setRecentAchievement(achievement);
      setShowConfetti(true);
      setIsDialogOpen(true);
      
      // Hide confetti after 3 seconds
      setTimeout(() => {
        setShowConfetti(false);
      }, 3000);

      // Close dialog after 5 seconds
      setTimeout(() => {
        setIsDialogOpen(false);
      }, 5000);

      if (onAchievementUnlocked) {
        onAchievementUnlocked(achievementId);
      }
    }
  };

  const getAchievementIcon = (achievement: any) => {
    const IconComponent = achievement.icon;
    return (
      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
        achievement.unlocked 
          ? `bg-${achievement.color}-500/20 border-2 border-${achievement.color}-500/30`
          : "bg-gray-500/20 border-2 border-gray-500/30"
      }`}>
        <IconComponent className={`w-6 h-6 ${
          achievement.unlocked ? `text-${achievement.color}-400` : "text-gray-400"
        }`} />
      </div>
    );
  };

  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const totalCount = achievements.length;

  return (
    <div className="space-y-6">
      {/* Achievement Summary */}
      <Card className="card-gradient hover-lift">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span>Achievements</span>
            <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
              {unlockedCount}/{totalCount}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`p-4 rounded-lg border-2 transition-all ${
                  achievement.unlocked
                    ? "bg-white/10 border-orange-500/50"
                    : "bg-white/5 border-gray-700"
                }`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  {getAchievementIcon(achievement)}
                  <div className="flex-1">
                    <h3 className={`font-medium ${
                      achievement.unlocked ? "text-white" : "text-gray-400"
                    }`}>
                      {achievement.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{achievement.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge className={rarityColors[achievement.rarity as keyof typeof rarityColors]}>
                      {rarityIcons[achievement.rarity as keyof typeof rarityIcons]} {achievement.rarity.toUpperCase()}
                    </Badge>
                    {achievement.unlocked && (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    )}
                  </div>
                  
                  {!achievement.unlocked && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>Progress</span>
                        <span>{achievement.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${achievement.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  {achievement.unlocked && (
                    <div className="text-xs text-gray-400">
                      Unlocked {achievement.unlockedAt}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            >
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            </div>
          ))}
        </div>
      )}

      {/* Achievement Unlocked Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-gray-900 border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-white text-center">
              🎉 Achievement Unlocked! 🎉
            </DialogTitle>
          </DialogHeader>
          {recentAchievement && (
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <recentAchievement.icon className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-white text-xl font-bold">{recentAchievement.title}</h3>
                <p className="text-gray-400">{recentAchievement.description}</p>
              </div>
              <Badge className={rarityColors[recentAchievement.rarity as keyof typeof rarityColors]}>
                {rarityIcons[recentAchievement.rarity as keyof typeof rarityIcons]} {recentAchievement.rarity.toUpperCase()}
              </Badge>
              <div className="flex justify-center space-x-2">
                <Button
                  onClick={() => setIsDialogOpen(false)}
                  className="orange-gradient text-white"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Awesome!
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <Share className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
