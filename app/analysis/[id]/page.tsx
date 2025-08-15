import { EnhancedVideoAnalysis } from "@/components/analysis/enhanced-video-analysis";

interface AnalysisPageProps {
  params: {
    id: string;
  };
}

export default function AnalysisPage({ params }: AnalysisPageProps) {
  return (
    <div className="min-h-screen p-6">
      <EnhancedVideoAnalysis videoId={params.id} />
    </div>
  );
}
