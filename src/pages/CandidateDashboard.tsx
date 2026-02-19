import { Navbar } from "@/components/Navbar";
import { PitchCard } from "@/components/PitchCard";
import { SkillBadge } from "@/components/SkillBadge";
import { Button } from "@/components/ui/button";
import { Plus, Bell, Settings, Eye, EyeOff, Shield } from "lucide-react";
import { useState } from "react";

const mockSkills = {
  technical: [
    { name: "React", visibility: "public" },
    { name: "TypeScript", visibility: "public" },
    { name: "Node.js", visibility: "selective" },
    { name: "PostgreSQL", visibility: "private" },
    { name: "GraphQL", visibility: "public" },
  ],
  soft: [
    { name: "Leadership", visibility: "public" },
    { name: "Communication", visibility: "public" },
  ],
  interests: ["AI/ML", "Web3", "Open Source"],
};

const mockPitches = [
  {
    companyName: "TechCorp Alpha",
    role: "Senior Frontend Engineer",
    pitch: "We're building the next generation of developer tools. Your React and TypeScript expertise is exactly what we need. Join a team of 15 engineers working on cutting-edge IDE technology.",
    compensation: "$180k - $220k + equity",
    perks: ["Remote", "4-day week", "Learning budget"],
    status: "sent" as const,
    timestamp: "2 hours ago",
  },
  {
    companyName: "StartupX",
    role: "Full Stack Lead",
    pitch: "We're a YC-backed startup disrupting fintech. We need someone who can lead our engineering team and shape our technical vision from the ground up.",
    compensation: "$160k + 1.5% equity",
    perks: ["Equity", "Small team", "High impact"],
    status: "viewed" as const,
    timestamp: "1 day ago",
  },
  {
    companyName: "MegaCorp Industries",
    role: "Staff Engineer",
    pitch: "Join our platform team working on systems that serve 100M+ users daily. We value deep technical expertise and offer unmatched scale challenges.",
    compensation: "$250k total comp",
    perks: ["Benefits", "401k match", "Sabbatical"],
    status: "accepted" as const,
    timestamp: "3 days ago",
  },
];

export default function CandidateDashboard() {
  const [activeTab, setActiveTab] = useState<"pitches" | "skills" | "settings">("pitches");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container px-4 pt-24 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">
              Welcome, <span className="text-gradient-primary">cipher_dev_42</span>
            </h1>
            <p className="text-muted-foreground flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Your identity is protected
            </p>
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
          {(["pitches", "skills", "settings"] as const).map((tab) => (
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

        {activeTab === "pitches" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Incoming Pitches</h2>
              <span className="text-sm text-muted-foreground">{mockPitches.length} pitches</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {mockPitches.map((pitch, i) => (
                <PitchCard key={i} {...pitch} />
              ))}
            </div>
          </div>
        )}

        {activeTab === "skills" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Your Skills Profile</h2>
              <Button variant="hero" size="sm">
                <Plus className="w-4 h-4" />
                Add Skill
              </Button>
            </div>

            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Technical Skills</h3>
                <div className="space-y-3">
                  {mockSkills.technical.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <SkillBadge skill={skill.name} variant="technical" />
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        {skill.visibility === "public" ? (
                          <Eye className="w-3.5 h-3.5 text-primary" />
                        ) : (
                          <EyeOff className="w-3.5 h-3.5" />
                        )}
                        <span className="capitalize">{skill.visibility}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {mockSkills.soft.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill.name} variant="soft" />
                  ))}
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Interests & Goals</h3>
                <div className="flex flex-wrap gap-2">
                  {mockSkills.interests.map((interest) => (
                    <SkillBadge key={interest} skill={interest} variant="interest" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="glass rounded-2xl p-6 max-w-lg">
            <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Anonymous Username</label>
                <input
                  type="text"
                  defaultValue="cipher_dev_42"
                  className="w-full h-11 px-4 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Default Skill Visibility</label>
                <select className="w-full h-11 px-4 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option value="public">Public</option>
                  <option value="selective">Selective</option>
                  <option value="private">Private</option>
                </select>
              </div>
              <Button variant="hero" className="w-full">Save Changes</Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
