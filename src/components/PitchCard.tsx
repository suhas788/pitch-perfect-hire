import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Building2, Clock, Check, X, Eye } from "lucide-react";

type PitchStatus = "sent" | "viewed" | "accepted" | "rejected";

interface PitchCardProps {
  companyName: string;
  role: string;
  pitch: string;
  compensation?: string;
  perks?: string[];
  status: PitchStatus;
  timestamp: string;
  isCompanyView?: boolean;
}

const statusConfig: Record<PitchStatus, { label: string; icon: React.ElementType; className: string }> = {
  sent: { label: "Sent", icon: Clock, className: "bg-muted text-muted-foreground" },
  viewed: { label: "Viewed", icon: Eye, className: "bg-primary/10 text-primary" },
  accepted: { label: "Accepted", icon: Check, className: "bg-success/10 text-success" },
  rejected: { label: "Declined", icon: X, className: "bg-destructive/10 text-destructive" },
};

export function PitchCard({
  companyName,
  role,
  pitch,
  compensation,
  perks,
  status,
  timestamp,
  isCompanyView = false,
}: PitchCardProps) {
  const statusInfo = statusConfig[status];

  return (
    <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
            <Building2 className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{companyName}</h3>
            <p className="text-sm text-primary">{role}</p>
          </div>
        </div>
        <div className={cn("flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium", statusInfo.className)}>
          <statusInfo.icon className="w-3 h-3" />
          {statusInfo.label}
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">{pitch}</p>

      {compensation && (
        <div className="text-sm mb-3">
          <span className="text-muted-foreground">Compensation: </span>
          <span className="text-foreground font-medium">{compensation}</span>
        </div>
      )}

      {perks && perks.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {perks.map((perk) => (
            <span key={perk} className="px-2.5 py-0.5 rounded-full text-xs bg-secondary text-secondary-foreground">
              {perk}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between pt-3 border-t border-border/50">
        <span className="text-xs text-muted-foreground">{timestamp}</span>
        {!isCompanyView && status === "sent" && (
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
              Decline
            </Button>
            <Button variant="hero" size="sm">Accept</Button>
          </div>
        )}
      </div>
    </div>
  );
}
