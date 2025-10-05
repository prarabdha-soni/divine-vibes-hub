import { Home, Bookmark, Grid3x3, User } from "lucide-react";
import { useState } from "react";

const BottomNav = () => {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "watchlist", icon: Bookmark, label: "Watchlist" },
    { id: "browse", icon: Grid3x3, label: "Browse" },
    { id: "profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all ${
                  isActive 
                    ? "text-secondary" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className={`w-6 h-6 ${isActive ? "scale-110" : ""}`} />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
