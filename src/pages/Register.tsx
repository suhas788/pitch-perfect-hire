import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Building2, ArrowRight } from "lucide-react";

type UserType = "candidate" | "company";

export default function Register() {
  const [userType, setUserType] = useState<UserType | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container px-4 pt-24 pb-16 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-2">Get Started</h1>
          <p className="text-muted-foreground text-center mb-8">
            Choose how you want to use ReverseBoard
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {([
              { type: "candidate" as const, icon: User, label: "Candidate", desc: "List skills & receive pitches" },
              { type: "company" as const, icon: Building2, label: "Company", desc: "Browse talent & pitch" },
            ]).map((option) => (
              <button
                key={option.type}
                onClick={() => setUserType(option.type)}
                className={`glass rounded-2xl p-6 text-center transition-all duration-300 ${
                  userType === option.type
                    ? "border-primary/50 glow-primary"
                    : "hover:border-primary/20"
                }`}
              >
                <option.icon className={`w-8 h-8 mx-auto mb-3 ${
                  userType === option.type ? "text-primary" : "text-muted-foreground"
                }`} />
                <div className="font-semibold text-foreground mb-1">{option.label}</div>
                <div className="text-xs text-muted-foreground">{option.desc}</div>
              </button>
            ))}
          </div>

          {userType && (
            <div className="glass rounded-2xl p-6 space-y-4 animate-slide-up">
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">
                  {userType === "candidate" ? "Anonymous Username" : "Company Name"}
                </label>
                <input
                  type="text"
                  placeholder={userType === "candidate" ? "e.g. cipher_dev_42" : "e.g. TechCorp"}
                  className="w-full h-11 px-4 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full h-11 px-4 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full h-11 px-4 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <Link to={userType === "candidate" ? "/dashboard/candidate" : "/dashboard/company"}>
                <Button variant="hero" size="lg" className="w-full mt-2">
                  Create Account
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          )}

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">Sign in</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
