import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";
import CarDetails from "./pages/CarDetails";
import About from "./pages/About";
import BecomeOwner from "./pages/BecomeOwner";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Dispute from "./pages/Dispute";
import FAQ from "./pages/FAQ";
import Guide from "./pages/Guide";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/car/:slug" element={<CarDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/become-owner" element={<BecomeOwner />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:id" element={<NewsDetail />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/policy" element={<Policy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/dispute" element={<Dispute />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/guide" element={<Guide />} />
                <Route path="/help" element={<Help />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
