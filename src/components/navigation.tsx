'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  User, 
  GraduationCap, 
  Briefcase, 
  Trophy, 
  Code, 
  BookOpen, 
  FileText,
  Mail,
  Github,
  Linkedin
} from 'lucide-react';

const navigationItems = [
  { href: '/', label: 'Home', icon: User },
  { href: '/awards', label: 'Awards', icon: Trophy },
  { href: '/research', label: 'Research', icon: BookOpen },
  { href: '/about', label: 'About', icon: GraduationCap },
  { href: '/contact', label: 'Contact', icon: Mail }
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  // 홈페이지인지 확인
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage
          ? // 홈페이지용 헤더 (기존 스타일 유지)
            isScrolled 
              ? 'bg-black/20 backdrop-blur-md shadow-2xl border-b border-white/20' 
              : 'bg-gradient-to-r from-black/30 via-orange-900/20 to-black/30 backdrop-blur-sm'
          : // 일반 페이지용 헤더 (흰 배경에 최적화)
            isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
              : 'bg-white/90 backdrop-blur-sm shadow-md border-b border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className={`text-xl font-bold transition-colors ${
                  isHomePage
                    ? // 홈페이지용 로고 (흰색 텍스트)
                      isScrolled ? 'text-white drop-shadow-lg' : 'text-white drop-shadow-lg'
                    : // 일반 페이지용 로고 (검은색 텍스트)
                      'text-gray-900'
                } ${
                  isHomePage ? 'hover:text-amber-300' : 'hover:text-blue-600'
                }`}
              >
                백 재 현 (Jae-Hyun Baek)
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? isHomePage
                            ? 'bg-amber-400/20 text-amber-300 shadow-md backdrop-blur-sm border border-amber-400/30'
                            : 'bg-blue-100 text-blue-700 shadow-md border border-blue-200'
                          : isHomePage
                          ? isScrolled
                            ? 'text-white/90 hover:text-amber-300 hover:bg-white/10 drop-shadow-sm'
                            : 'text-white/90 hover:text-amber-300 hover:bg-white/10 drop-shadow-sm'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="hidden md:flex items-center gap-2">
              <Button asChild variant="ghost" size="sm" className={
                isHomePage 
                  ? "text-white/90 hover:text-amber-300 hover:bg-white/10"
                  : "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
              }>
                <a href="https://github.com/LeGenAI" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm" className={
                isHomePage 
                  ? "text-white/90 hover:text-amber-300 hover:bg-white/10"
                  : "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
              }>
                <a href="https://www.linkedin.com/in/재현-백-516899227" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm" className={
                isHomePage 
                  ? "text-white/90 hover:text-amber-300 hover:bg-white/10"
                  : "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
              }>
                <a href="mailto:bjh3641@gmail.com">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Menu className={`w-5 h-5 ${
                      isHomePage
                        ? isScrolled ? 'text-white drop-shadow-lg' : 'text-white drop-shadow-lg'
                        : 'text-gray-700'
                    }`} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex flex-col space-y-4 mt-8">
                    <div className="text-center pb-4 border-b">
                      <h3 className="text-lg font-bold text-gray-900">재현 백</h3>
                      <p className="text-sm text-gray-600">Team Leader • Researcher</p>
                    </div>

                    {/* Mobile Navigation Items */}
                    {navigationItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = pathname === item.href;
                      
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                            isActive
                              ? 'bg-blue-50 text-blue-700 border border-blue-200'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="font-medium">{item.label}</span>
                        </Link>
                      );
                    })}

                    {/* Mobile Social Links */}
                    <div className="pt-4 border-t">
                      <p className="text-sm text-gray-500 mb-3">Connect with me</p>
                      <div className="flex gap-2">
                        <Button asChild variant="outline" size="sm" className="flex-1">
                          <a href="https://github.com/LeGenAI" target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            GitHub
                          </a>
                        </Button>
                        <Button asChild variant="outline" size="sm" className="flex-1">
                          <a href="https://www.linkedin.com/in/재현-백-516899227" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-4 h-4 mr-2" />
                            LinkedIn
                          </a>
                        </Button>
                      </div>
                      <Button asChild variant="default" size="sm" className="w-full mt-2">
                        <a href="mailto:bjh3641@gmail.com">
                          <Mail className="w-4 h-4 mr-2" />
                          Email Me
                        </a>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}