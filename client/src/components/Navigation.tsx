import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'الرئيسية', href: '/' },
    { label: 'الخدمات', href: '#services' },
    { label: 'من نحن', href: '#about' },
    { label: 'الأعمال', href: '#portfolio' },
    { label: 'كيف نعمل', href: '#how-it-works' },
    { label: 'الأسئلة الشائعة', href: '#faq' },
    { label: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="text-2xl font-bold gradient-text">ACADEMIX</div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button className="hidden md:block px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-background font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
          اطلب الخدمة
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-white/10">
          <div className="container py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-foreground/80 hover:text-accent hover:bg-white/5 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-background font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
              اطلب الخدمة
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
