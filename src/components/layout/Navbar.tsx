import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Car, Phone, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { ThemePresetSelector } from '@/components/theme/ThemePresetSelector';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Trang chủ' },
    { path: '/search', label: 'Tìm xe' },
    { path: '/news', label: 'Tin tức' },
    { path: '/about', label: 'Về chúng tôi' },
    { path: '/become-owner', label: 'Trở thành chủ xe' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-smooth',
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-primary hover:opacity-80 transition-opacity"
          >
            <Car className="h-8 w-8" />
            <span className="font-bold text-xl">RentCarVN</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'font-medium transition-colors hover:text-primary',
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-foreground/70'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              1900-1234
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Globe className="h-4 w-4" />
              VI
            </Button>
            <ThemePresetSelector />
            <ThemeToggle />
            <Link to="/login">
              <Button variant="ghost" size="sm" className="gap-2">
                <User className="h-4 w-4" />
                Đăng nhập
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm">
                Đăng ký
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-card/95 backdrop-blur-md border-t"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'px-4 py-2 rounded-lg font-medium transition-colors hover:bg-secondary',
                      location.pathname === link.path
                        ? 'text-primary bg-secondary'
                        : 'text-foreground/70'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 border-t flex flex-col space-y-2">
                  <div className="flex items-center justify-between px-4 py-2">
                    <span className="text-sm font-medium">Giao diện</span>
                    <div className="flex items-center gap-2">
                      <ThemePresetSelector />
                      <ThemeToggle />
                    </div>
                  </div>
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start gap-2">
                      <User className="h-4 w-4" />
                      Đăng nhập
                    </Button>
                  </Link>
                  <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full justify-start gap-2">
                      Đăng ký
                    </Button>
                  </Link>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <Phone className="h-4 w-4" />
                    Hotline: 1900-1234
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;