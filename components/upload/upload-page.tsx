"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Upload, LinkIcon, FileVideo, CheckCircle, Loader2, Tag, Type, FileText } from "lucide-react"

export function UploadPage() {
  const [uploadMethod, setUploadMethod] = useState<"file" | "url">("file")
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const handleUpload = async () => {
    setIsUploading(true)
    setUploadProgress(0)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          setIsComplete(true)
          return 100
        }
        return prev + 10
      })
    }, 300)
  }

  return (
    <div className="min-h-screen p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <SidebarTrigger />
        <div>
          <h1 className="text-2xl font-bold text-white">Upload Video</h1>
          <p className="text-gray-400">Add a new video for analysis</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Upload Section */}
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle className="text-white">Video Source</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Upload Method Toggle */}
            <div className="flex space-x-2">
              <Button
                variant={uploadMethod === "file" ? "default" : "outline"}
                onClick={() => setUploadMethod("file")}
                className={
                  uploadMethod === "file"
                    ? "orange-gradient text-white"
                    : "border-white/20 text-white hover:bg-white/10"
                }
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload File
              </Button>
              <Button
                variant={uploadMethod === "url" ? "default" : "outline"}
                onClick={() => setUploadMethod("url")}
                className={
                  uploadMethod === "url" ? "orange-gradient text-white" : "border-white/20 text-white hover:bg-white/10"
                }
              >
                <LinkIcon className="w-4 h-4 mr-2" />
                YouTube URL
              </Button>
            </div>

            {/* Upload Area */}
            {uploadMethod === "file" ? (
              <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-orange-500/50 transition-colors">
                {isComplete ? (
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Upload Complete!</p>
                      <p className="text-gray-400 text-sm">Your video is ready for analysis</p>
                    </div>
                  </div>
                ) : isUploading ? (
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                      <Loader2 className="w-8 h-8 text-orange-500 animate-spin" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Uploading... {uploadProgress}%</p>
                      <div className="w-full bg-white/10 rounded-full h-2 mt-2">
                        <div
                          className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${uploadProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                      <FileVideo className="w-8 h-8 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Drag and drop your video here</p>
                      <p className="text-gray-400 text-sm">or click to browse files</p>
                      <p className="text-gray-500 text-xs mt-2">Supports MP4, MOV, AVI up to 2GB</p>
                    </div>
                    <Button onClick={handleUpload} className="orange-gradient text-white hover:opacity-90">
                      Choose File
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                <Label htmlFor="youtube-url" className="text-white">
                  YouTube Video URL
                </Label>
                <Input
                  id="youtube-url"
                  placeholder="https://www.youtube.com/watch?v=..."
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button onClick={handleUpload} className="w-full orange-gradient text-white hover:opacity-90">
                  <LinkIcon className="w-4 h-4 mr-2" />
                  Import from YouTube
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Video Details */}
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle className="text-white">Video Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-white flex items-center">
                <Type className="w-4 h-4 mr-2" />
                Title
              </Label>
              <Input
                id="title"
                placeholder="Enter video title"
                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-white flex items-center">
                <FileText className="w-4 h-4 mr-2" />
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Enter video description"
                rows={4}
                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags" className="text-white flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                Tags
              </Label>
              <Input
                id="tags"
                placeholder="Enter tags separated by commas"
                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>

            <div className="pt-4 border-t border-white/10">
              <Button className="w-full orange-gradient text-white hover:opacity-90" disabled={!isComplete}>
                Start Analysis
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upload Progress Indicator */}
      {isUploading && (
        <Card className="card-gradient">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <Loader2 className="w-6 h-6 text-orange-500 animate-spin" />
              <div className="flex-1">
                <p className="text-white font-medium">Processing video...</p>
                <p className="text-gray-400 text-sm">This may take a few minutes depending on video length</p>
              </div>
              <div className="text-right">
                <p className="text-white font-medium">{uploadProgress}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
