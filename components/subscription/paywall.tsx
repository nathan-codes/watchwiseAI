"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  CreditCard,
  Shield,
  Zap,
  CheckCircle,
  Star,
  Users,
  BarChart3,
  Target,
  TrendingUp,
  Lock,
  ArrowRight,
  X,
  AlertCircle,
  Info,
} from "lucide-react";

const pricingPlans = [
  {
    id: "monthly",
    name: "Monthly",
    price: 29,
    period: "month",
    popular: false,
    features: [
      "Unlimited video analysis",
      "AI-powered insights",
      "Team collaboration",
      "Email summaries",
      "Priority support",
    ],
  },
  {
    id: "annual",
    name: "Annual",
    price: 290,
    period: "year",
    popular: true,
    savings: "Save 17%",
    features: [
      "Everything in Monthly",
      "Advanced analytics",
      "Custom goals",
      "API access",
      "Dedicated support",
    ],
  },
];

const benefits = [
  {
    icon: Zap,
    title: "AI-Powered Insights",
    description: "Get actionable recommendations to improve your video retention",
  },
  {
    icon: Target,
    title: "Smart Goal Setting",
    description: "Set realistic retention goals based on your performance",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share insights with editors, script writers, and team members",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep dive into retention data with organic traffic analysis",
  },
];

interface PaywallProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribe: (planId: string) => void;
}

export function Paywall({ isOpen, onClose, onSubscribe }: PaywallProps) {
  const [selectedPlan, setSelectedPlan] = useState("annual");
  const [isProcessing, setIsProcessing] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubscribe = async () => {
    if (!agreedToTerms) return;
    
    setIsProcessing(true);
    // Simulate Stripe payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    onSubscribe(selectedPlan);
  };

  const selectedPlanData = pricingPlans.find(plan => plan.id === selectedPlan);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-900 border-gray-700 max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-white text-2xl flex items-center space-x-2">
              <Star className="w-6 h-6 text-yellow-400" />
              <span>Unlock Full Potential</span>
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Benefits */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-white text-xl font-semibold mb-2">
                Ready to boost your video retention?
              </h2>
              <p className="text-gray-400">
                Join thousands of creators who have improved their retention rates by an average of 35%
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Money Back Guarantee */}
            <Card className="bg-green-500/10 border-green-500/30">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-green-400" />
                  <div>
                    <h3 className="text-white font-medium">30-Day Money-Back Guarantee</h3>
                    <p className="text-gray-300 text-sm">
                      Not satisfied? Get a full refund and cancel anytime. No questions asked.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Proof */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-white ml-2">4.9/5</span>
              </div>
              <p className="text-gray-400 text-sm">
                Trusted by 10,000+ creators worldwide
              </p>
            </div>
          </div>

          {/* Right Column - Pricing */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-white text-lg font-semibold mb-4">Choose Your Plan</h3>
            </div>

            <div className="space-y-4">
              {pricingPlans.map((plan) => (
                <Card
                  key={plan.id}
                  className={`cursor-pointer transition-all hover:scale-105 ${
                    selectedPlan === plan.id
                      ? "border-orange-500 bg-orange-500/10"
                      : "border-gray-700 bg-white/5"
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-white font-semibold text-lg">{plan.name}</h3>
                        {plan.popular && (
                          <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 mt-1">
                            Most Popular
                          </Badge>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white">
                          ${plan.price}
                          <span className="text-lg text-gray-400">/{plan.period}</span>
                        </div>
                        {plan.savings && (
                          <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                            {plan.savings}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Terms and Subscribe */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                />
                <label htmlFor="terms" className="text-sm text-gray-300">
                  I agree to the{" "}
                  <a href="#" className="text-orange-400 hover:text-orange-300">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-orange-400 hover:text-orange-300">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <Button
                onClick={handleSubscribe}
                disabled={!agreedToTerms || isProcessing}
                className="w-full orange-gradient text-white py-6 text-lg font-semibold"
              >
                {isProcessing ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <CreditCard className="w-5 h-5" />
                    <span>Start {selectedPlanData?.name} Plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </Button>

              <p className="text-center text-gray-400 text-xs">
                Secure payment powered by Stripe. Your data is encrypted and secure.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
