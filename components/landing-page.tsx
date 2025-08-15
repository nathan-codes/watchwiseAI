import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  BarChart3,
  Users,
  Zap,
  CheckCircle,
  XCircle,
  Star,
  ArrowRight,
  Sparkles,
  Building2,
  TrendingUp,
  Target,
  Award,
  Globe,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function LandingPage() {
  return (
    <div className="min-h-screen gradient-bg overflow-hidden">
      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-40 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 backdrop-blur-xl bg-white/5">
        <div className="container mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-2 animate-fade-in-scale">
            <div className="w-10 h-10 orange-gradient rounded-xl flex items-center justify-center shadow-lg">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">WatchWise</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 animate-slide-in-right">
            <Link
              href="#features"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Features
            </Link>
            <Link
              href="#use-cases"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Use Cases
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Testimonials
            </Link>
          </nav>

          <div className="flex items-center space-x-4 animate-slide-in-right">
            <Link href="/auth/signin">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10 transition-all duration-300"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button className="orange-gradient text-white hover:scale-105 transition-all duration-300 shadow-lg">
                <Sparkles className="w-4 h-4 mr-2" />
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 animate-pulse-glow">
                  ✨ New: AI-Powered Insights
                </Badge>
                <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Built for YouTube{" "}
                  <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                    Teams
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Deep video analytics for content teams, marketing agencies,
                  and brands managing multiple YouTube channels. Get actionable
                  insights that drive real business results.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/auth/signup">
                  <Button
                    size="lg"
                    className="orange-gradient text-white hover:scale-105 transition-all duration-300 text-lg px-8 py-6 shadow-2xl"
                  >
                    <BarChart3 className="w-6 h-6 mr-2" />
                    Start Free Analysis
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 bg-transparent backdrop-blur-sm hover:scale-105 transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-12 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Setup in 5 minutes</span>
                </div>
              </div>
            </div>

            <div
              className="relative animate-fade-in-scale"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl hover-lift">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-purple-500/20 opacity-50"></div>
                <Image
                  src="/images/dashboard-preview.png"
                  alt="WatchWise Dashboard Preview"
                  width={700}
                  height={500}
                  className="w-full h-auto relative z-10"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
              <div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="relative z-10 py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-16 mb-16">
            <div className="space-y-4 animate-fade-in-up">
              <Badge className="bg-red-500/20 text-red-300 border-red-500/30 mb-4">
                🔥 The Challenge
              </Badge>
              <h2 className="text-5xl font-bold text-white">
                YouTube Analytics Are Broken
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Traditional analytics leave you guessing. Here's what's wrong
                with current tools and how we fix it.
              </p>
            </div>
          </div>

          {/* Timeline-style layout */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500/50 to-green-500/50"></div>

            <div className="space-y-24">
              {/* Problem Side */}
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="lg:order-1 order-2 space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center border border-red-500/30">
                        <XCircle className="w-8 h-8 text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          The Problem
                        </h3>
                        <p className="text-gray-400">What's holding you back</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {[
                        {
                          title: "Limited Team Collaboration",
                          description:
                            "YouTube Studio is built for individuals, not teams. No way to share insights or collaborate effectively.",
                          icon: Users,
                          color: "red",
                        },
                        {
                          title: "No Timeline Insights",
                          description:
                            "Can't see exactly when viewers drop off or what content keeps them engaged.",
                          icon: BarChart3,
                          color: "red",
                        },
                        {
                          title: "Missing AI Intelligence",
                          description:
                            "No smart recommendations or predictive analytics to guide your content strategy.",
                          icon: Zap,
                          color: "red",
                        },
                        {
                          title: "Poor Reporting",
                          description:
                            "Difficult to export professional reports for stakeholders and clients.",
                          icon: Star,
                          color: "red",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="group p-6 rounded-2xl bg-red-500/5 border border-red-500/20 hover:bg-red-500/10 transition-all duration-300 hover:scale-105"
                        >
                          <div className="flex items-start space-x-4">
                            <div
                              className={`w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center border border-red-500/30 group-hover:bg-red-500/30 transition-colors`}
                            >
                              <item.icon className="w-6 h-6 text-red-500" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-white mb-2">
                                {item.title}
                              </h4>
                              <p className="text-gray-300 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:order-2 order-1 relative">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-3xl blur-3xl"></div>
                    <div className="relative bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-3xl p-8 border border-red-500/20 backdrop-blur-sm">
                      <div className="text-center space-y-6">
                        <div className="w-24 h-24 mx-auto bg-red-500/20 rounded-3xl flex items-center justify-center border border-red-500/30">
                          <XCircle className="w-12 h-12 text-red-500" />
                        </div>
                        <h3 className="text-3xl font-bold text-white">
                          Current State
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          You're flying blind with basic analytics that don't
                          give you the insights you need to grow your channel.
                        </p>
                        <div className="flex items-center justify-center space-x-2 text-red-400">
                          <span className="text-sm font-medium">Result:</span>
                          <span className="text-sm">
                            Frustration & Missed Opportunities
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solution Side */}
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="relative">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-3xl blur-3xl"></div>
                    <div className="relative bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-3xl p-8 border border-green-500/20 backdrop-blur-sm">
                      <div className="text-center space-y-6">
                        <div className="w-24 h-24 mx-auto bg-green-500/20 rounded-3xl flex items-center justify-center border border-green-500/30">
                          <CheckCircle className="w-12 h-12 text-green-500" />
                        </div>
                        <h3 className="text-3xl font-bold text-white">
                          With WatchWise
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          AI-powered insights that transform your content
                          strategy and drive measurable business results.
                        </p>
                        <div className="flex items-center justify-center space-x-2 text-green-400">
                          <span className="text-sm font-medium">Result:</span>
                          <span className="text-sm">Growth & Success</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center border border-green-500/30">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          Our Solution
                        </h3>
                        <p className="text-gray-400">How we fix it</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {[
                        {
                          title: "Team-First Analytics",
                          description:
                            "Built for collaboration with shared dashboards, team insights, and professional reporting.",
                          icon: Users,
                          color: "green",
                        },
                        {
                          title: "Interactive Timeline Analysis",
                          description:
                            "See exactly when viewers engage or drop off with AI-powered second-by-second analysis.",
                          icon: BarChart3,
                          color: "green",
                        },
                        {
                          title: "AI-Powered Intelligence",
                          description:
                            "Get smart recommendations and predictive insights to optimize your content strategy.",
                          icon: Zap,
                          color: "green",
                        },
                        {
                          title: "Professional Reports",
                          description:
                            "Export beautiful, client-ready reports that prove the value of your content marketing.",
                          icon: Star,
                          color: "green",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="group p-6 rounded-2xl bg-green-500/5 border border-green-500/20 hover:bg-green-500/10 transition-all duration-300 hover:scale-105"
                        >
                          <div className="flex items-start space-x-4">
                            <div
                              className={`w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center border border-green-500/30 group-hover:bg-green-500/30 transition-colors`}
                            >
                              <item.icon className="w-6 h-6 text-green-500" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-white mb-2">
                                {item.title}
                              </h4>
                              <p className="text-gray-300 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-8 mb-20">
            <div className="space-y-4 animate-fade-in-up">
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-4">
                🚀 AI-Powered Features
              </Badge>
              <h2 className="text-5xl font-bold text-white">
                Transform Your Content Strategy
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stop guessing what works. Our AI analyzes your videos
                second-by-second to deliver actionable insights that drive real
                business results.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {[
              {
                icon: BarChart3,
                title: "AI Video Timestamp Analysis",
                description:
                  "Our AI analyzes every second of your video to identify exactly what went wrong and caused drops in retention. See the specific content, timing, and context that made viewers leave with surgical precision.",
                benefits: [
                  "Identify exact moments that cause viewer drop-off",
                  "Understand what content keeps viewers engaged",
                  "See retention patterns and engagement spikes",
                  "Make data-driven editing decisions based on timestamp analysis",
                ],
                gradient: "from-orange-500 to-red-500",
                delay: "0.1s",
              },
              {
                icon: Zap,
                title: "AI Content Recommendations",
                description:
                  "Get intelligent suggestions for improving your videos based on AI analysis. Our system learns from your content patterns to recommend specific improvements that will boost performance.",
                benefits: [
                  "Get specific suggestions for video improvements",
                  "Optimize content based on AI insights",
                  "Learn what works best for your audience",
                  "Scale successful content patterns across your channel",
                ],
                gradient: "from-blue-500 to-purple-500",
                delay: "0.2s",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                style={{ animationDelay: feature.delay }}
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative p-8 h-full flex flex-col">
                  {/* Header Section */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}
                      >
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {feature.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed text-center max-w-md mx-auto">
                      {feature.description}
                    </p>
                  </div>

                  {/* Business Impact Section */}
                  <div className="flex-1 flex flex-col">
                    <h4 className="text-lg font-semibold text-white text-center mb-6">
                      Business Impact
                    </h4>

                    <div className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div
                          key={benefitIndex}
                          className="group/benefit flex items-start space-x-3 p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/2 border border-white/10 hover:border-white/20 hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 transition-all duration-300"
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center group-hover/benefit:scale-110 transition-transform duration-200">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                          </div>
                          <span className="text-gray-300 text-sm leading-relaxed font-medium">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 py-32 px-6">
        <div className="container mx-auto max-w-7xl text-center space-y-20">
          <div className="space-y-4 animate-fade-in-up">
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-4">
              💬 Customer Love
            </Badge>
            <h2 className="text-5xl font-bold text-white">
              Trusted by Marketing Teams
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how teams are transforming their YouTube strategy with
              WatchWise
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {[
                {
                  name: "Sarah Chen",
                  role: "Creative Director, BrandFlow",
                  avatar: "SC",
                  quote:
                    "Finally, analytics that make sense for our team workflow. The timeline insights have completely changed how we approach content strategy.",
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  name: "Marcus Rodriguez",
                  role: "VP Marketing, TechCorp",
                  avatar: "MR",
                  quote:
                    "The AI recommendations have helped us increase our average view duration by 40%. This tool pays for itself.",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  name: "Emily Watson",
                  role: "Head of Content, CreativeStudio",
                  avatar: "EW",
                  quote:
                    "Professional reports that our clients actually understand. The export features save us hours every week.",
                  gradient: "from-green-500 to-emerald-500",
                },
                {
                  name: "David Kim",
                  role: "Senior Marketing Manager, DigitalFlow",
                  avatar: "DK",
                  quote:
                    "The timestamp analysis feature is incredible. We can now pinpoint exactly when viewers lose interest and optimize our content accordingly.",
                  gradient: "from-orange-500 to-red-500",
                },
                {
                  name: "Lisa Thompson",
                  role: "Content Strategy Director, GrowthHub",
                  avatar: "LT",
                  quote:
                    "WatchWise has transformed how we approach content creation. The AI insights help us make data-driven decisions that actually work.",
                  gradient: "from-indigo-500 to-purple-500",
                },
                {
                  name: "Alex Johnson",
                  role: "Founder & CEO, CreativeScale",
                  avatar: "AJ",
                  quote:
                    "We've scaled our content production by 3x while maintaining quality. WatchWise helps us understand what works and what doesn't.",
                  gradient: "from-teal-500 to-blue-500",
                },
                {
                  name: "Sarah Chen",
                  role: "Creative Director, BrandFlow",
                  avatar: "SC",
                  quote:
                    "Finally, analytics that make sense for our team workflow. The timeline insights have completely changed how we approach content strategy.",
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  name: "Marcus Rodriguez",
                  role: "VP Marketing, TechCorp",
                  avatar: "MR",
                  quote:
                    "The AI recommendations have helped us increase our average view duration by 40%. This tool pays for itself.",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  name: "Emily Watson",
                  role: "Head of Content, CreativeStudio",
                  avatar: "EW",
                  quote:
                    "Professional reports that our clients actually understand. The export features save us hours every week.",
                  gradient: "from-green-500 to-emerald-500",
                },
              ].map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-96 mx-6">
                  <Card className="card-gradient hover-lift h-full">
                    <CardContent className="p-8 space-y-6">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                        >
                          {testimonial.avatar}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white text-lg">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <p className="text-gray-300 leading-relaxed italic">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-current" />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <Card className="card-gradient hover-lift text-center">
            <CardContent className="p-16 space-y-10">
              <div className="space-y-4">
                <h2 className="text-5xl font-bold text-white">
                  Ready to Transform Your YouTube Analytics?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Join marketing teams who've already upgraded their content
                  strategy with AI-powered insights
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/auth/signup">
                  <Button
                    size="lg"
                    className="orange-gradient text-white hover:scale-105 transition-all duration-300 text-lg px-8 py-6 shadow-2xl"
                  >
                    <BarChart3 className="w-6 h-6 mr-2" />
                    Sign in with Google - It's Free
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 bg-transparent backdrop-blur-sm hover:scale-105 transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Book a Demo
                </Button>
              </div>

              <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Setup in 5 minutes</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-16 px-6 backdrop-blur-xl bg-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 orange-gradient rounded-xl flex items-center justify-center shadow-lg">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">WatchWise</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Professional YouTube analytics for marketing teams and agencies.
                Transform your content strategy with AI-powered insights.
              </p>
            </div>

            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "API", "Integrations"],
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Press"],
              },
              {
                title: "Support",
                links: ["Help Center", "Contact", "Privacy", "Terms"],
              },
            ].map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-white text-lg">
                  {section.title}
                </h4>
                <div className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href="#"
                      className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 WatchWise. All rights reserved. Made with ❤️ for YouTube
              creators.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
