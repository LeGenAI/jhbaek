'use client';

import React from 'react';
import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Phone, 
  MapPin,
  MessageCircle,
  Send
} from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Header Spacing */}
      <div className="pt-20"></div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Interested in collaboration, have questions about my research, or want to discuss opportunities? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="hover-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">bjh3641@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                  <Phone className="w-6 h-6 text-green-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+82 10-5326-2465</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
                  <MapPin className="w-6 h-6 text-purple-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Seoul, South Korea</p>
                    <p className="text-sm text-gray-500">Sogang University, Department of Mathematics</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="hover-card">
              <CardHeader>
                <CardTitle>Connect with Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild size="lg" className="w-full gap-2 text-left justify-start">
                  <a href="mailto:bjh3641@gmail.com">
                    <Mail className="w-5 h-5" />
                    Send me an Email
                  </a>
                </Button>

                <Button asChild variant="outline" size="lg" className="w-full gap-2 text-left justify-start">
                  <a href="https://github.com/LeGenAI" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                    Follow on GitHub
                  </a>
                </Button>

                <Button asChild variant="outline" size="lg" className="w-full gap-2 text-left justify-start">
                  <a href="https://www.linkedin.com/in/재현-백-516899227" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Collaboration Areas */}
          <div className="space-y-8">
            <Card className="hover-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Areas of Collaboration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-blue-600">🛠️</span>
                      Trillion Labs Product Engineer - Perfect Match
                    </h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p><strong>"Swiss Army Knife"</strong>로서의 풀스택 역량: TypeScript/React, Python, Ruby on Rails</p>
                      <p><strong>"Thrive in ambiguity"</strong>: 불확실성 속에서도 빠른 프로토타이핑과 반복 개발</p>
                      <p><strong>"Novel AI UX"</strong>: AI 모델을 직관적이고 즐거운 인터페이스로 연결하는 경험</p>
                      <p><strong>"Bridge research and product"</strong>: 수학 연구진과 제품팀 사이의 완벽한 가교 역할</p>
                    </div>
                    <div className="flex flex-wrap gap-1 text-xs mt-3">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full">Product Engineering</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full">AI UX Design</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full">Fast Iteration</span>
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full">Research Bridge</span>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">AI & Machine Learning</h4>
                    <p className="text-sm text-gray-600">
                      LLM API 연동, RAG 시스템, 멀티모달 AI, 오픈소스 모델 활용 경험
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Large-Scale AI Systems</h4>
                    <p className="text-sm text-gray-600">
                      기관 전체 AI 데이터 변환, OSS Fine-tuning, 대규모 시스템 설계
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Full-Stack + AI Development</h4>
                    <p className="text-sm text-gray-600">
                      Ruby on Rails + Python API, RAG 기반 웹서비스, AI 모델 배포
                    </p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Research & Academia</h4>
                    <p className="text-sm text-gray-600">
                      수학 백그라운드, 논문 발표, 국제 학회 초청 강연
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-card bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle>Current Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Position</span>
                    <span className="text-sm text-gray-600">Team Leader, DeepFountain Corp.</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Education</span>
                    <span className="text-sm text-gray-600">M.S. in Data Science (In Progress)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Career Vision</span>
                    <span className="text-sm text-purple-600">컨설팅 → 스타트업 → 교육</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Current Focus</span>
                    <span className="text-sm text-purple-600">Trillion Labs Product Engineer</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Response Time</span>
                    <span className="text-sm text-green-600">Usually within 24 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Availability</span>
                    <span className="text-sm text-blue-600">빠른 의사결정 & 실행력 준비 완료</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full transform -translate-x-12 translate-y-12"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4">수학으로 세상을 이롭게 하는 Integrator</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                <strong>"Move fast, write clean code"</strong> 철학으로 빠른 프로토타이핑과 제품화를 주도합니다.  
                <strong>AI의 힘을 직관적이고 즐거운 UX로 연결</strong>하여 
                Trillion Labs의 혁신적인 AI 인터페이스 구축에 기여하고자 합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <a href="mailto:bjh3641@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    연구 협업 논의하기
                  </a>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a href="https://github.com/LeGenAI" target="_blank" rel="noopener noreferrer">
                    <span className="mr-2">🚀</span>
                    프로젝트 포트폴리오 보기
                  </a>
                </Button>
              </div>
              <div className="mt-4 text-sm text-blue-200">
                Mission: 수학으로 세상을 이롭게 하는 통합형 인재 | Career: 컨설팅 → 스타트업 → 교육
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}