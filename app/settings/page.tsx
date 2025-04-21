import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function SettingsPage() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-full max-w-4xl p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Settings</h1>
          <Button>Save Changes</Button>
        </div>

        <Tabs defaultValue="general" className="space-y-4">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="models">Models</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>Configure your general application preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Default Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Time Zone</Label>
                  <Select defaultValue="utc">
                    <SelectTrigger>
                      <SelectValue placeholder="Select time zone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc">UTC</SelectItem>
                      <SelectItem value="est">EST</SelectItem>
                      <SelectItem value="pst">PST</SelectItem>
                      <SelectItem value="gmt">GMT</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Auto-save Conversations</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically save your conversation history
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="models" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Model Preferences</CardTitle>
                <CardDescription>Configure your default LLM models and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Default Model</Label>
                  <Select defaultValue="gpt-4">
                    <SelectTrigger>
                      <SelectValue placeholder="Select default model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gpt-4">GPT-4</SelectItem>
                      <SelectItem value="claude-3">Claude 3</SelectItem>
                      <SelectItem value="gpt-3.5">GPT-3.5</SelectItem>
                      <SelectItem value="llama-2">Llama 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Temperature</Label>
                  <Input type="number" defaultValue="0.7" min="0" max="1" step="0.1" />
                  <p className="text-sm text-muted-foreground">
                    Controls randomness in model responses (0 = deterministic, 1 = creative)
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Max Tokens</Label>
                  <Input type="number" defaultValue="2000" min="100" max="4000" step="100" />
                  <p className="text-sm text-muted-foreground">
                    Maximum number of tokens in model responses
                  </p>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>API Keys</Label>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Input type="password" placeholder="OpenAI API Key" />
                      <Button variant="outline">Save</Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input type="password" placeholder="Anthropic API Key" />
                      <Button variant="outline">Save</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appearance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>Customize how the application looks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Theme</Label>
                  <Select defaultValue="system">
                    <SelectTrigger>
                      <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Font Size</Label>
                  <Select defaultValue="medium">
                    <SelectTrigger>
                      <SelectValue placeholder="Select font size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="large">Large</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Compact Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Reduce spacing and padding for a more compact interface
                    </p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Configure your notification preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive email notifications for important updates
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>In-App Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Show notifications within the application
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Model Updates</Label>
                    <p className="text-sm text-muted-foreground">
                      Notify me about new model releases and updates
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 