import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Guides from "./pages/Guides";
import Kids from "./pages/Kids";
import Discover from "./pages/Discover";
import Watchlist from "./pages/Watchlist";
import NotFound from "./pages/NotFound";
import BottomNav from "./components/BottomNav";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/guides" element={<Guides />} />
                  <Route path="/kids" element={<Kids />} />
                  <Route path="/discover" element={<Discover />} />
                  <Route path="/watchlist" element={<Watchlist />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
        <BottomNav />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
