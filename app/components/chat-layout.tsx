"use client"

import type React from "react"
import { X, Settings, Download, Share2, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useRouter } from "next/navigation"

interface ChatLayoutProps {
  children: React.ReactNode
  onClearChat?: () => void
  onExportChat?: () => void
}

export default function ChatLayout({ children, onClearChat, onExportChat }: ChatLayoutProps) {
  const router = useRouter()

  const handleExport = () => {
    if (onExportChat) {
      onExportChat()
    } else {
      // Default export behavior
      const chatContent = document.querySelector('.chat-content')?.textContent || ''
      const blob = new Blob([chatContent], { type: 'text/plain' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'chat-export.txt'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }
  }

  const handleClearChat = () => {
    if (onClearChat) {
      onClearChat()
    } else {
      // Default clear behavior
      if (confirm('Are you sure you want to clear the chat history?')) {
        // Implement clear logic here
        console.log('Clearing chat...')
      }
    }
  }

  return (
    <div className="flex-1 flex">
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-14 border-b px-4 flex items-center justify-between">
          <h1 className="text-sm font-medium">LLM Recommendation</h1>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              Save conversation
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </header>
        {children}
      </div>

      {/* Right Panel */}
      <div className="w-80 border-l bg-background">
        <div className="h-14 border-b px-4 flex items-center justify-between sticky top-0 bg-background z-10">
          <h2 className="font-medium">Conversation details</h2>
          <Link href="/settings">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Settings className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <ScrollArea className="h-[calc(100vh-56px)]">
          <div className="p-4 space-y-6">
            <div className="flex gap-2 border-b pb-4">
              <Button variant="secondary" size="sm" className="rounded-full">
                Actions
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full">
                History
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full">
                Settings
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Recent Conversations</h3>
                <div className="space-y-2">
                  <div className="p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors">
                    <p className="text-sm font-medium">GPT-4 vs Claude 3</p>
                    <p className="text-xs text-muted-foreground mt-1">Yesterday, 3:45 PM</p>
                  </div>
                  <div className="p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors">
                    <p className="text-sm font-medium">Budget LLMs for Startups</p>
                    <p className="text-xs text-muted-foreground mt-1">Aug 15, 2024</p>
                  </div>
                  <div className="p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors">
                    <p className="text-sm font-medium">RAG Implementation Models</p>
                    <p className="text-xs text-muted-foreground mt-1">Aug 10, 2024</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-auto py-2"
                    onClick={handleExport}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    <span className="text-sm">Export Chat</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-auto py-2"
                    onClick={() => {
                      // Implement share functionality
                      if (navigator.share) {
                        navigator.share({
                          title: 'Chat Export',
                          text: 'Check out this chat conversation',
                          url: window.location.href
                        })
                      } else {
                        // Fallback for browsers that don't support Web Share API
                        navigator.clipboard.writeText(window.location.href)
                        alert('Link copied to clipboard!')
                      }
                    }}
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    <span className="text-sm">Share</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-auto py-2"
                    onClick={handleClearChat}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    <span className="text-sm">Clear History</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-auto py-2"
                    onClick={() => router.push('/settings')}
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    <span className="text-sm">Settings</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
