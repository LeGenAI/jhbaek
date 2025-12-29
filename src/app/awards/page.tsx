'use client';

import React, { useEffect } from 'react';
import { Navigation } from '@/components/navigation';
import { Trophy, Award, GraduationCap, Sparkles } from 'lucide-react';

export default function AwardsPage() {
  useEffect(() => {
    // SEO optimization for awards page
    document.title = 'Awards & Recognition | Jae-Hyun Baek';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Academic awards and recognition of Jae-Hyun Baek including ISIS 2025 Best Presentation, KIIS Best Paper Awards, and Dean\'s List.');
    }
  }, []);

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
            Recognized for excellence in AI Safety, Data Modeling, and Business Innovation via Best Paper Awards and Dean's List honors.
          </p>
        </div>

        {/* ISIS 2025 Award Highlight */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border-2 border-red-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 rounded-bl-lg font-bold">New!</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Best Presentation Award 🏆</h3>
              <p className="text-lg font-semibold text-gray-700 mb-4">ISIS 2025 (International Symposium on Advanced Intelligent Systems)</p>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 mb-4">
                <p className="text-gray-800 font-medium italic">"A Case Study on Alignment Faking in LLMs"</p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Honored for the research on <strong>AI Safety and Alignment</strong>, specifically focusing on the mathematical formulation of 'Alignment Faking' where LLMs strategically comply under monitoring.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/ISIS/IMG_8109.png"
                alt="ISIS 2025 Award Presentation"
                className="rounded-lg shadow-lg max-h-64 object-cover"
              />
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

          <div className="award-card award-shimmer certificate-border bg-white rounded-xl shadow-lg border border-yellow-200">
            <div className="relative overflow-hidden rounded-t-xl">
              <img
                src="/award_kiis_2024.png"
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
              <p className="text-sm font-semibold text-gray-700 mb-2">Korean Institute of Intelligent Systems (KIIS)</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Awarded for "Performance Optimization of RAG-based LLMs"
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
              <p className="text-sm font-semibold text-gray-700 mb-2">Korean Institute of Intelligent Systems (KIIS)</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                2nd Consecutive Win for "Water Level Forecasting using AI"
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
              <p className="text-sm font-semibold text-gray-700 mb-2">1st AI Commercial Festival</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Recognized for AI-driven Advertising Business capabilities.
              </p>
            </div>
          </div>
        </div>

        {/* Dean's List Recognition with Photos */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-yellow-300">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Dean's List 2024</h2>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-4 font-semibold">
                Sogang University, College of Natural Sciences (Top 3%)
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Awarded to students with excellent academic achievements and exemplary conduct.
                Selected from the top 3% of students in the department.
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
                <h5 className="font-semibold text-gray-900">Dean's List Ceremony</h5>
                <p className="text-xs text-gray-600">With Faculty of Natural Sciences</p>
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
                  🏆 Top 3%
                </div>
              </div>
              <div className="text-center">
                <h5 className="font-semibold text-gray-900">Awarded by Dean of Natural Sciences</h5>
                <p className="text-xs text-gray-600">Academic Excellence in Data Science</p>
              </div>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">4.1/4.3</div>
                <div className="text-sm text-gray-600">Master's GPA</div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">Top 3%</div>
                <div className="text-sm text-gray-600">Class Rank</div>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">2024</div>
                <div className="text-sm text-gray-600">Dean's List Year</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}