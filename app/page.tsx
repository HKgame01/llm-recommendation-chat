import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Bot, Cpu, Sparkles } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 text-center">
        <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
          <Sparkles className="h-5 w-5 text-primary mr-2" />
          <span className="text-sm font-medium">AI-Powered Recommendations</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Find the Perfect LLM <br className="hidden md:inline" />
          for Your Needs
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px] mb-8">
          Our intelligent system analyzes your requirements and recommends the most suitable language models for your
          specific use case.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/chat">
            <Button size="lg" className="gap-2">
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Describe Your Needs</h3>
              <p className="text-muted-foreground">
                Tell us about your project requirements, budget constraints, and specific features you need.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
              <p className="text-muted-foreground">
                Our system analyzes your requirements and matches them with the capabilities of various LLMs.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Recommendations</h3>
              <p className="text-muted-foreground">
                Receive personalized recommendations with detailed comparisons and implementation advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
