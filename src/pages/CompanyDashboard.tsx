import { Navbar } from "@/components/Navbar";
import { PitchCard } from "@/components/PitchCard";
import { Button } from "@/components/ui/button";
import { Building2, Send, Users, TrendingUp, Bell, Settings } from "lucide-react";
import { useState } from "react";

const mockSentPitches = [
  {
    companyName: "Your Company",
    role: "Senior Frontend Engineer",
    pitch: "We're building the next generation of developer tools...",
    compensation: "$180k - $220k + equity",
    perks: ["Remote", "4-day week"],
    status: "viewed" as const,
    timestamp: "2 hours ago",
  },
  {
    companyName: "Your Company",
    role: "Full Stack Lead",
    pitch: "Join our growing team to lead our next product launch...",
    compensation: "$160k + equity",
    perks: ["Equity", "Small team"],
    status: "accepted" as const,
    timestamp: "1 day ago",
  },
  {
    companyName: "Your Company",
    role: "DevOps Engineer",
    pitch: "Scale our infrastructure from thousands to millions...",
    compensation: "$170k",
    perks: ["Benefits", "Remote"],
    status: "rejected" as const,
    timestamp: "3 days ago",
  },
  {
    companyName: "Your Company",
    role: "ML Engineer",
    pitch: "Help us build AI-powered features for our platform...",
    compensation: "$200k total comp",
    perks: ["Learning budget", "Conferences"],
    status: "sent" as const,
    timestamp: "5 hours ago",
  },
];

const stats = [
  { label: "Pitches Sent", value: "24", icon: Send, change: "+3 this week" },
  { label: "Viewed", value: "18", icon: Users, change: "75% rate" },
  { label: "Accepted", value: "5", icon: TrendingUp, change: "21% rate" },
];

export default function CompanyDashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "pitches" | "settings">("overview");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container px-4 pt-24 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-accent" />
              </div>
              Company Dashboard
            </h1>
            <p className="text-muted-foreground">Manage your pitches and discover talent</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="glass" size="icon">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="glass" size="icon">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 p-1 rounded-xl bg-secondary/50 mb-8 w-fit">
          {(["overview", "pitches", "settings"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div>
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-2xl p-5 border-glow">
                  <div className="flex items-center justify-between mb-3">
                    <stat.icon className="w-5 h-5 text-primary" />
                    <span className="text-xs text-primary font-medium">{stat.change}</span>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-semibold mb-4">Recent Pitches</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {mockSentPitches.slice(0, 4).map((pitch, i) => (
                <PitchCard key={i} {...pitch} isCompanyView />
              ))}
            </div>
          </div>
        )}

        {activeTab === "pitches" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">All Pitches</h2>
              <Button variant="hero" size="sm">
                <Send className="w-4 h-4" />
                New Pitch
              </Button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {mockSentPitches.map((pitch, i) => (
                <PitchCard key={i} {...pitch} isCompanyView />
              ))}
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="glass rounded-2xl p-6 max-w-lg">
            <h2 className="text-xl font-semibold mb-4">Company Profile</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Company Name</label>
                <input
                  type="text"
                  defaultValue="TechCorp Alpha"
                  className="w-full h-11 px-4 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Industry</label>
                <input
                  type="text"
                  defaultValue="Developer Tools"
                  className="w-full h-11 px-4 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">About</label>
                <textarea
                  rows={3}
                  defaultValue="Building the next generation of developer tools."
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                />
              </div>
              <Button variant="hero" className="w-full">Save Changes</Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
