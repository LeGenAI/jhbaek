'use client';

import React from 'react';
import { Navigation } from '@/components/navigation';
import { Trophy, Award, GraduationCap, Sparkles } from 'lucide-react';

export default function AwardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Header Spacing */}
      <div className="pt-20"></div>

      {/* Awards Gallery Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 rounded-2xl m-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <Trophy className="w-8 h-8 text-yellow-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Awards & Recognition
            </h1>
            <Trophy className="w-8 h-8 text-yellow-600" />
          </div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            한국지능시스템학회 우수논문상, GS AI Commercial Festival 장려상, 서강대학교 Dean's List 선정 등 
            데이터 기반 모델링 역량과 AI 비즈니스 전문성을 인정받았습니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="award-card award-shimmer certificate-border bg-white rounded-xl shadow-lg border border-yellow-200">
            <div className="relative overflow-hidden rounded-t-xl">
              <img 
                src="/[서강대 백재현] 우수논문상.png" 
                alt="KIIS 2024 Best Paper Award"
                className="w-full h-64 object-contain bg-white p-4 hover:scale-105 transition-transform duration-300 certificate-glow"
              />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                🏆 2024
              </div>
            </div>
            <div className="p-6 text-center bg-gradient-to-b from-white to-yellow-50">
              <div className="flex justify-center mb-3">
                <div className="p-2 bg-yellow-100 rounded-full">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Best Paper Award</h4>
              <p className="text-sm font-semibold text-gray-700 mb-2">한국지능시스템학회 (KIIS)</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                "RAG 기반 LLM 성능 최적화" 논문으로 우수논문상 수상
              </p>
            </div>
          </div>

          <div className="award-card award-shimmer certificate-border bg-white rounded-xl shadow-lg border border-orange-200">
            <div className="relative overflow-hidden rounded-t-xl">
              <img 
                src="/KIIS_춘계우수14_감천 수위 예측을 위한 LLM 방법론.png" 
                alt="KIIS 2025 Best Paper Award"
                className="w-full h-64 object-contain bg-white p-4 hover:scale-105 transition-transform duration-300 certificate-glow"
              />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                🏆 2025
              </div>
            </div>
            <div className="p-6 text-center bg-gradient-to-b from-white to-orange-50">
              <div className="flex justify-center mb-3">
                <div className="p-2 bg-orange-100 rounded-full">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Best Paper Award</h4>
              <p className="text-sm font-semibold text-gray-700 mb-2">한국지능시스템학회 (KIIS)</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                "AI 활용 수위 예측" 연구로 2년 연속 우수논문상 수상
              </p>
            </div>
          </div>

          <div className="award-card award-shimmer certificate-border bg-white rounded-xl shadow-lg border border-blue-200">
            <div className="relative overflow-hidden rounded-t-xl">
              <img 
                src="/제1회AICF_장려상_백재현.png" 
                alt="GS AI Commercial Festival 2024"
                className="w-full h-64 object-contain bg-white p-4 hover:scale-105 transition-transform duration-300 certificate-glow"
              />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                🎉 2024
              </div>
            </div>
            <div className="p-6 text-center bg-gradient-to-b from-white to-blue-50">
              <div className="flex justify-center mb-3">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Sparkles className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Encouragement Prize</h4>
              <p className="text-sm font-semibold text-gray-700 mb-2">제1회 AI Commercial Festival</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                AI 기반 광고 비즈니스 역량을 인정받아 장려상 수상
              </p>
            </div>
          </div>
        </div>

        {/* Dean's List Recognition with Photos */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-yellow-300">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">서강대학교 자연과학부 Dean's List 2024</h2>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-4 font-semibold">
                서강대학교 자연과학부 Dean's List 선정 (전공별 재학생 상위 3%)
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                자연과학부 Dean's List 운영은 서강대학교 자연과학부 학생 중 성적이 우수하고 품행이 올바른 학생을 선정하여 격려함으로써 
                면학분위기를 조성하고 학문 후속 세대를 양성하고자 하는데 목적이 있습니다.
              </p>
              <p className="text-xs text-gray-500">
                선정인원은 해당 학년도 4월 1일 기준 전공별 재학생 인원의 3%로 하며 자연과학부 학과장회의에서 최종 선정됩니다.
              </p>
            </div>
          </div>
          
          {/* Dean's List Ceremony Photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/deanslist_1.jpg" 
                  alt="Dean's List Award Ceremony"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  🎓 2024
                </div>
              </div>
              <div className="text-center">
                <h5 className="font-semibold text-gray-900">Dean's List 인증서 수여식</h5>
                <p className="text-xs text-gray-600">자연과학부 교수진과 함께하는 시상식</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/deanslist_2.jpg" 
                  alt="Dean's List Recognition Ceremony"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  🏆 상위 3%
                </div>
              </div>
              <div className="text-center">
                <h5 className="font-semibold text-gray-900">자연과학대학 이덕형 학장으로부터 수상</h5>
                <p className="text-xs text-gray-600">데이터 사이언스 분야 학문적 우수성 표창</p>
              </div>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">4.1/4.3</div>
                <div className="text-sm text-gray-600">석사과정 GPA</div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">상위 3%</div>
                <div className="text-sm text-gray-600">전공별 재학생 중</div>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">2024</div>
                <div className="text-sm text-gray-600">Dean's List 선정</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}