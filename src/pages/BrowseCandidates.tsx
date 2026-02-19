import { Navbar } from "@/components/Navbar";
import { CandidateCard } from "@/components/CandidateCard";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const mockCandidates = [
  {
    id: "1",
    username: "cipher_dev_42",
    technicalSkills: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    softSkills: ["Leadership", "Communication"],
    interests: ["AI/ML", "Web3"],
    matchScore: 95,
  },
  {
    id: "2",
    username: "anon_architect",
    technicalSkills: ["Python", "AWS", "Docker", "Kubernetes"],
    softSkills: ["Problem Solving", "Mentoring"],
    interests: ["DevOps", "Cloud Native"],
    matchScore: 88,
  },
  {
    id: "3",
    username: "stealth_designer",
    technicalSkills: ["Figma", "React", "Tailwind CSS", "Framer"],
    softSkills: ["Creativity", "Empathy"],
    interests: ["Design Systems", "Accessibility"],
    matchScore: 82,
  },
  {
    id: "4",
    username: "ghost_eng_99",
    technicalSkills: ["Rust", "Go", "C++", "Systems Design"],
    softSkills: ["Analytical Thinking", "Autonomy"],
    interests: ["Performance", "Low-Level Systems"],
    matchScore: 76,
  },
  {
    id: "5",
    username: "shadow_data",
    technicalSkills: ["Python", "TensorFlow", "SQL", "Spark"],
    softSkills: ["Research", "Collaboration"],
    interests: ["Machine Learning", "Data Engineering"],
    matchScore: 71,
  },
  {
    id: "6",
    username: "phantom_mobile",
    technicalSkills: ["React Native", "Swift", "Kotlin", "Firebase"],
    softSkills: ["Adaptability", "Time Management"],
    interests: ["Mobile UX", "Cross-Platform"],
    matchScore: 68,
  },
];

export default function BrowseCandidates() {
  const [search, setSearch] = useState("");

  const filtered = mockCandidates.filter(
    (c) =>
      c.username.toLowerCase().includes(search.toLowerCase()) ||
      c.technicalSkills.some((s) => s.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container px-4 pt-24 pb-16">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Browse <span className="text-gradient-primary">Talent</span>
          </h1>
          <p className="text-muted-foreground">
            Discover anonymous candidates and send them your pitch.
          </p>
        </div>

        {/* Search bar */}
        <div className="flex gap-3 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search skills, interests..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-11 pl-10 pr-4 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
          <button className="h-11 px-4 rounded-xl glass border border-border hover:border-primary/30 transition-colors flex items-center gap-2 text-sm text-muted-foreground">
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((candidate) => (
            <CandidateCard key={candidate.id} {...candidate} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No candidates match your search.</p>
          </div>
        )}
      </main>
    </div>
  );
}
