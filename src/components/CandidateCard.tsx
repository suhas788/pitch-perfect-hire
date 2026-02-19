import { SkillBadge } from "@/components/SkillBadge";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Send } from "lucide-react";

interface CandidateCardProps {
  id: string;
  username: string;
  technicalSkills: string[];
  softSkills: string[];
  interests: string[];
  matchScore: number;
  isAnonymous?: boolean;
}

export function CandidateCard({
  username,
  technicalSkills,
  softSkills,
  interests,
  matchScore,
  isAnonymous = true,
}: CandidateCardProps) {
  return (
    <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            {isAnonymous ? (
              <EyeOff className="w-4 h-4 text-primary" />
            ) : (
              <Eye className="w-4 h-4 text-primary" />
            )}
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{username}</h3>
            <p className="text-xs text-muted-foreground">
              {isAnonymous ? "Anonymous Candidate" : "Verified Profile"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
          <span className="text-sm font-semibold text-primary">{matchScore}%</span>
          <span className="text-xs text-muted-foreground">match</span>
        </div>
      </div>

      <div className="space-y-3 mb-5">
        <div>
          <p className="text-xs text-muted-foreground mb-1.5 uppercase tracking-wider">Technical</p>
          <div className="flex flex-wrap gap-1.5">
            {technicalSkills.map((s) => (
              <SkillBadge key={s} skill={s} variant="technical" size="sm" />
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1.5 uppercase tracking-wider">Soft Skills</p>
          <div className="flex flex-wrap gap-1.5">
            {softSkills.map((s) => (
              <SkillBadge key={s} skill={s} variant="soft" size="sm" />
            ))}
          </div>
        </div>
        {interests.length > 0 && (
          <div>
            <p className="text-xs text-muted-foreground mb-1.5 uppercase tracking-wider">Interests</p>
            <div className="flex flex-wrap gap-1.5">
              {interests.map((s) => (
                <SkillBadge key={s} skill={s} variant="interest" size="sm" />
              ))}
            </div>
          </div>
        )}
      </div>

      <Button variant="hero" size="sm" className="w-full">
        <Send className="w-4 h-4" />
        Send Pitch
      </Button>
    </div>
  );
}
