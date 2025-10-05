import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-divine flex items-center justify-center">
            <span className="text-lg">🕉️</span>
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-primary-foreground tracking-wide">
            DIVINE HARMONY
          </h1>
        </div>
        
        <button className="p-2 hover:bg-primary-foreground/10 rounded-full transition-colors">
          <Search className="w-6 h-6 text-primary-foreground" />
        </button>
      </div>
    </header>
  );
};

export default Header;
