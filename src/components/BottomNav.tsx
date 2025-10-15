import { Home, Users, Compass, Bookmark, Plus } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: "home", icon: Home, label: "Home", path: "/" },
    { id: "guides", icon: Users, label: "Guides", path: "/guides" },
    { id: "discover", icon: Compass, label: "Discover", path: "/discover" },
    { id: "watchlist", icon: Bookmark, label: "Watchlist", path: "/watchlist" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-700 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all ${
                  active 
                    ? "text-amber-400" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Icon className={`w-6 h-6 ${active ? "scale-110" : ""}`} />
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
