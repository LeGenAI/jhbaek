'use client';

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, MapPin, Mail } from 'lucide-react';
import { Navigation } from '@/components/navigation';

export default function Home() {
  useEffect(() => {
    // Dynamic SEO optimization for homepage
    document.title = 'Jae-Hyun Baek | AI Researcher & Mathematics Expert';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Portfolio of Jae-Hyun Baek, AI/ML researcher specializing in VLM, Multimodal AI, and Mathematics. Team Leader at DeepFountain Inc, EXAONE Lab applicant.');
    }
  }, []);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jae-Hyun Baek",
    "alternateName": "백재현",
    "jobTitle": ["AI Researcher", "CTO", "Mathematics Expert"],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "DeepFountain Inc",
        "url": "https://deep-fountain.com"
      },
      {
        "@type": "Organization", 
        "name": "Sogang University",
        "url": "https://sogang.ac.kr"
      }
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "Sogang University",
      "department": "Department of Mathematics"
    },
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning", 
      "Computer Vision",
      "Mathematics",
      "VLM (Vision Language Models)",
      "Multimodal AI",
      "AI Security",
      "Deep Learning"
    ],
    "url": "https://jhbaek.up.railway.app",
    "image": "https://jhbaek.up.railway.app/jhbaek_profile.jpg",
    "sameAs": [
      "https://github.com/LeGenAI",
      "https://www.linkedin.com/in/재현-백-516899227"
    ],
    "email": "bjh3641@gmail.com"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: 'url(/background.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/60 via-amber-900/70 to-yellow-900/60"></div>
        <div className="absolute inset-0 backdrop-blur-[0.5px]"></div>
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-8 py-6 border border-white/20 shadow-2xl">
                <h1 className="text-6xl font-bold tracking-tight text-white mb-3 drop-shadow-lg">
                  백 재 현
                </h1>
                <h2 className="text-2xl font-light text-amber-100 mb-4 drop-shadow-md">
                  (Jae-Hyun Baek)
                </h2>
                <div className="flex items-center justify-center gap-1 text-lg text-white/90 font-medium">
                  <span className="bg-gradient-to-r from-amber-400 to-orange-400 text-black px-3 py-1 rounded-full text-sm font-semibold">VLM Researcher</span>
                  <span className="text-amber-200">•</span>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-black px-3 py-1 rounded-full text-sm font-semibold">Full-Stack Dev</span>
                  <span className="text-amber-200">•</span>
                  <span className="bg-gradient-to-r from-emerald-400 to-teal-400 text-black px-3 py-1 rounded-full text-sm font-semibold">EXAONE 지원자</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center items-center gap-6">
              <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 border border-white/20">
                <MapPin className="w-4 h-4 text-amber-300" />
                <span className="text-sm font-medium">Sogang University, Department of Mathematics</span>
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-md rounded-xl px-6 py-6 max-w-4xl mx-auto border border-white/20">
              <p className="text-xl text-white leading-relaxed text-center">
                <span className="text-3xl text-amber-300 font-bold block mb-4 drop-shadow-lg">
                  "압도적 성능의 LLM, 함께 만들어가겠습니다."
                </span>
                <span className="text-lg text-white/90 leading-relaxed">
                  VLM 벤치마크 최적화와 대규모 AI 시스템 구축 경험을 바탕으로<br/>
                  <strong className="text-amber-200">EXAONE VL의 General 성능 개선</strong>에 기여하고자 합니다.<br/><br/>
                  빠른 의사결정과 실행력으로 오픈소스 LLM 생태계의 혁신을 이끄는 연구자가 되겠습니다.
                </span>
              </p>
            </div>

            <div className="flex justify-center gap-4 flex-wrap">
              <Button asChild size="lg" className="gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-black hover:from-amber-600 hover:to-orange-600 font-semibold shadow-xl border-2 border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <a href="https://github.com/LeGenAI" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  GitHub Portfolio
                </a>
              </Button>
              <Button asChild size="lg" className="gap-2 bg-white/20 backdrop-blur-md text-white hover:bg-white/30 font-semibold shadow-xl border-2 border-white/40 transition-all duration-300 hover:scale-105">
                <a href="https://huggingface.co/datasets/LeBrony/buddha_oss_dataset" target="_blank" rel="noopener noreferrer">
                  <span className="text-orange-300">🤗</span>
                  HuggingFace Dataset
                </a>
              </Button>
              <Button asChild size="lg" className="gap-2 bg-white/20 backdrop-blur-md text-white hover:bg-white/30 font-semibold shadow-xl border-2 border-white/40 transition-all duration-300 hover:scale-105">
                <a href="https://deep-fountain.com" target="_blank" rel="noopener noreferrer">
                  <img src="/deepfountain-logo.png" alt="DeepFountain" className="w-5 h-5" />
                  DeepFountain Corp
                </a>
              </Button>
            </div>
            
            <div className="mt-8 flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
                <div className="bg-black/30 backdrop-blur-md rounded-xl px-5 py-4 shadow-2xl border border-white/20 hover:bg-black/40 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="flex items-center justify-center w-8 h-8 bg-emerald-400/80 rounded-full">
                      <span className="w-3 h-3 bg-emerald-600 rounded-full animate-pulse"></span>
                    </div>
                    <span className="text-white font-semibold">WSI Medical AI 논문 심사 중</span>
                  </div>
                </div>
                <div className="bg-black/30 backdrop-blur-md rounded-xl px-5 py-4 shadow-2xl border border-white/20 hover:bg-black/40 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="flex items-center justify-center w-8 h-8 bg-orange-400/80 rounded-full">
                      <span className="text-lg">🤗</span>
                    </div>
                    <span className="text-white font-semibold">HuggingFace 100+ Downloads</span>
                  </div>
                </div>
                <div className="bg-black/30 backdrop-blur-md rounded-xl px-5 py-4 shadow-2xl border border-white/20 hover:bg-black/40 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-400/80 rounded-full">
                      <span className="text-lg">🚀</span>
                    </div>
                    <span className="text-white font-semibold">DeepFountain Team Leader</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Business Cards Section */}
      <section className="py-16 bg-gradient-to-br from-slate-100 to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Business Card</h2>
            <p className="text-lg text-gray-600">Professional Identity & Contact Information</p>
          </div>
          
          <div className="flex justify-center gap-8 max-w-5xl mx-auto">
            <div className="group cursor-pointer">
              <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200">
                <img 
                  src="/namecard-front.jpg" 
                  alt="백재현 명함 앞면" 
                  className="w-80 h-50 object-cover rounded-xl shadow-lg"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">Front Side</h3>
                  <p className="text-sm text-gray-600">기본 정보 & 로고</p>
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200">
                <img 
                  src="/namecard-back.jpg" 
                  alt="백재현 명함 뒷면" 
                  className="w-80 h-50 object-cover rounded-xl shadow-lg"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">Back Side</h3>
                  <p className="text-sm text-gray-600">전문 역량 & 비전</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              전문적인 비즈니스 커뮤니케이션을 위한 명함 디자인. 
              DeepFountain Team Leader로서의 전문성과 AI/ML 전문가로서의 역량을 담았습니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}