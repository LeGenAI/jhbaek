'use client';

import React from 'react';
import { Navigation } from '@/components/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Users, 
  GraduationCap, 
  Briefcase, 
  Code, 
  Brain,
  BookOpen,
  Atom,
  Sparkles,
  Zap
} from 'lucide-react';


const projects = [
  {
    title: 'SOGAMBOT.com - 서강대학교 AI 챗봇',
    description: '대학·연구기관 대상 맞춤형 RAG 기반 챗봇 솔루션',
    tech: ['RAG', 'NLP', 'Full-Stack', 'Vector DB', 'Team Leadership'],
    impact: '메인 팀장으로 전체 시스템 설계 및 운영',
    highlight: '기관 전체 데이터를 AI 데이터로 변환',
    link: 'https://sogambot.com',
    news: 'https://www.hani.co.kr/arti/economy/biznews/1192551.html',
    image: '/sogambot_events.jpg'
  },
  {
    title: 'MekaNet - WSI Medical AI Platform',
    description: 'SSL 기반 TESSD 아키텍처로 WSI Tiny Object Detection 혁신',
    tech: ['WSI Analysis', 'SSL Architecture', 'Medical AI', 'Computer Vision'],
    impact: 'BMC Bioinformatics 저널 논문 심사 중',
    highlight: '모델 구현 및 실험 전 과정 리드',
    github: 'https://github.com/LeGenAI/mekanet-release',
    image: '/mekanet.png'
  },
  {
    title: '수학 교사 어시스턴트 서비스',
    description: 'Ruby on Rails + Next.js + Supabase 기반 AI 교육 서비스',
    tech: ['Ruby on Rails', 'Next.js', 'Supabase', 'Vector DB', 'Education AI'],
    impact: '전체 스택 설계부터 배포까지 전담',
    highlight: '실시간 음성-텍스트 분석 및 자동 평가',
    demo: 'https://math-teacher-lecture-assistant-agent-production.up.railway.app',
    image: '/teacher-assistant.png'
  },
  {
    title: '의료진단 자동 보고서 생성 서비스',
    description: 'Multi-Modal LLM 기반 세포 충실도 계산 및 보고서 자동화 시스템',
    tech: ['Multi-Modal LLM', 'Medical Report', 'AlphaEvolve', 'Automated Analysis'],
    impact: '의료진 업무 효율성 향상 및 자동화',
    highlight: 'Multi-Modal LLM 기반 세포 충실도 분석 시스템',
    image: '/meka-release.png'
  },
  {
    title: '자동화된 AI 리서처 구축',
    description: 'Notion + LLM + Python AI 모델 + n8n 기반 연구 보고서 생성 시스템',
    tech: ['Notion API', 'LLM Integration', 'Python', 'n8n Automation', 'Research AI'],
    impact: '연구 워크플로우 완전 자동화',
    highlight: '멀티모달 AI를 활용한 자동 보고서 생성',
    link: 'https://www.wishket.com/partners/wishket-portfolio/267783/'
  },
  {
    title: 'AI 기반 교사 자동 평가 시스템',
    description: '수학교사 실시간 어시스턴트 및 자동 평가 시스템 구축',
    tech: ['Real-time AI', 'Education Tech', 'Auto Assessment', 'Teacher Assistant', 'Math AI'],
    impact: '교육 현장 업무 효율성 혁신',
    highlight: '실시간 수학 문제 해결 및 자동 평가',
    link: 'https://www.wishket.com/partners/wishket-portfolio/267782/'
  },
  {
    title: '연구소 및 도서관 AI Agent',
    description: '사용자 친화적 안내 챗봇 및 RAG 기반 응답 시스템 개발',
    tech: ['RAG System', 'AI Chatbot', 'User Experience', 'Library AI', 'Institution AI'],
    impact: '연구기관 사용자 경험 개선 및 접근성 향상',
    highlight: '지식 기반 맞춤형 AI 상담 서비스',
    link: 'https://www.wishket.com/partners/wishket-portfolio/267780/'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Header Spacing */}
      <div className="pt-20"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Jae-Hyun Baek</h1>
          <p className="text-lg text-gray-600">서강대학교 수학과 데이터 사이언스 석사과정</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Personal Info, Education & Experience */}
          <div className="space-y-8">
            {/* Personal Information */}
            <Card className="hover-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Profile Image */}
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <img 
                      src="/jhbaek_profile.jpg" 
                      alt="백재현 프로필 사진"
                      className="w-24 h-24 rounded-full object-cover border-4 border-blue-200 shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                </div>

                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900">백재현 (Jae-Hyun Baek)</h3>
                  <p className="text-sm text-blue-600 font-medium">Team Leader & Researcher</p>
                </div>

                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Current Position</h4>
                    <div className="text-sm text-gray-700 space-y-1">
                      <p>• Team Leader, DeepFountain Corp.</p>
                      <p>• M.S. Student, Sogang University</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
                    <div className="text-sm text-gray-700 space-y-1">
                      <p>• Born: 2000.07.17</p>
                      <p>• Phone: +82 10-5326-2465</p>
                      <p>• Email: bjh3641@gmail.com</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Research Focus</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary" className="bg-purple-100 text-purple-700">Mathematics</Badge>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">AI/ML</Badge>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">AI Security</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="hover-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">M.S. in Mathematics (2024.03 ~ Present)</h4>
                    <p className="text-gray-600">Sogang University, Department of Mathematics</p>
                    <p className="text-sm text-gray-500">Data Science Track • Advisor: Prof. Jong-Rak Kim • GPA: 4.1/4.3</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">B.S. in Mathematics (2022.03 ~ 2024.02)</h4>
                    <p className="text-gray-600">Sogang University, Department of Mathematics</p>
                    <p className="text-sm text-gray-500">GPA: 3.8/4.3 • Transfer Student</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Work Experience */}
            <Card className="hover-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900">Team Leader, DeepFountain Corp.</h4>
                  <p className="text-sm text-gray-500 mb-2">2025.03 - Present</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• AI Agent 플랫폼 개발 및 전략 수립</li>
                    <li>• Ruby on Rails + Toss Payments MCP 기반 시스템 구축</li>
                    <li>• 서강대학교 챗봇(sogambot.com) 성공 구축</li>
                  </ul>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-gray-900">Research Intern, DeepHelix Corp.</h4>
                  <p className="text-sm text-gray-500 mb-2">2025.01 - 2025.02</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• AI 기반 교육 솔루션 초기 개발</li>
                    <li>• LLM 기반 음성-텍스트 분석 모델 연구</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Development Capabilities */}
            <Card className="hover-card bg-gradient-to-br from-slate-50 to-blue-50 border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-600" />
                  개발 역량 소개
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    수학적 사고력과 최신 AI 기술에 대한 깊은 이해를 기반으로, 다양한 웹/앱 서비스와 
                    <strong className="text-blue-600"> <a href="https://saas.deep-fountain.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">AI 기반 SaaS</a></strong>를 설계하고 구현해 왔습니다. 
                    Backend & Frontend 개발 역량, 머신러닝·딥러닝 전문성, 그리고 LLM 기반 프로젝트 경험을 통해 
                    복잡한 시스템을 안정적이고 확장 가능한 형태로 구현하는 데 강점을 가지고 있습니다.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-blue-600">⚡</span>
                      Full-Stack Development (Trillion Labs Stack)
                    </h4>
                    <div className="text-sm text-gray-700 space-y-1">
                      <div>• <strong>TypeScript/React</strong>: Next.js 기반 프론트엔드, 컴포넌트 설계 및 상태 관리</div>
                      <div>• <strong>Python APIs</strong>: FastAPI, Flask 기반 REST/gRPC API 서버 구축</div>
                      <div>• <strong>Ruby on Rails</strong>: 빠른 프로토타이핑과 MVC 패턴 기반 웹서비스 개발</div>
                      <div>• <strong>MCP (Model Context Protocol)</strong>: Toss Payments MCP 등 프로토콜 기반 시스템 통합</div>
                      <div>• <strong>Mobile-Ready</strong>: 반응형 웹, PWA, Android/iOS 적응 학습 준비 완료</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-purple-600">🧠</span>
                      AI & 머신러닝
                    </h4>
                    <div className="text-sm text-gray-700 space-y-1">
                      <div>• LLM 기반 RAG 시스템, 도메인 특화 AI Agent, 멀티모달 검색 시스템 개발</div>
                      <div>• 시계열 예측(Time-LLM, DLinear, ARIMA), 컴퓨터 비전(Megakaryocyte 탐지 YOLO 기반)</div>
                      <div>• 실험 관리(TensorBoard), 하이퍼파라미터 튜닝, 모델 성능 평가</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-green-600">🔬</span>
                      연구 및 문제 해결
                    </h4>
                    <div className="text-sm text-gray-700 space-y-1">
                      <div>• AI와 결합한 조합론적 문제 해결(MOLS-10 등)</div>
                      <div>• 생성형 AI 기반 탐색(FunSearch, AlphaEvolve 활용 가능성 탐구)</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-orange-600">🚀</span>
                      기획 & 커뮤니케이션
                    </h4>
                    <div className="text-sm text-gray-700 space-y-1">
                      <div>• 산학협력 프로젝트 리딩, 기술문서 및 논문 집필, 대외 협상 경험</div>
                      <div>• <strong><a href="https://saas.deep-fountain.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">SaaS 플랫폼 설계 → 운영 → 배포</a></strong>까지 전 주기 프로젝트 수행</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 via-pink-50 to-rose-50 p-5 rounded-xl border-2 border-red-200">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-red-600" />
                    최근 집중 분야: AI 리터러시 + Vibe Coding + Ruby on Rails
                  </h4>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p>
                      최근 저는 <strong className="text-red-600">AI 리터러시</strong>라는 키워드에 주목하고 있습니다. 
                      단순히 코드를 작성하는 것을 넘어, <strong>Context Optimization</strong>과 
                      <strong>Prompt Engineering</strong>을 통해 AI와 협업하는 새로운 개발 패러다임을 실험하고 있습니다.
                    </p>
                    <p>
                      이러한 과정에서 <strong className="text-blue-600">Vibe Coding</strong> 즉, 직관적이고 생산성 높은 개발 환경을 
                      제공하는 <strong className="text-red-600">Ruby on Rails</strong>에 깊이 매료되었습니다.
                    </p>
                    <div className="bg-white p-3 rounded-lg border border-red-100">
                      <p className="text-xs italic text-gray-600 mb-2">
                        Rails는 "Convention over Configuration" 철학을 바탕으로, 복잡한 설정을 최소화하고 
                        개발자가 본질에 집중할 수 있는 경험을 제공합니다.
                      </p>
                      <p className="text-xs text-gray-600">
                        특히, 기존의 Python(langchain) 백엔드 경험과 결합하여 <strong>Rails + langchain (+ n8n)</strong>의 
                        하이브리드 아키텍처를 설계함으로써, <strong>사용자 커스터마이징 AI Agent SaaS, <a href="https://saas.deep-fountain.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">교육용 AI SaaS</a></strong>와 
                        같은 프로젝트를 구현하고 있습니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <a 
                    href="https://github.com/LeGenAI" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg hover:from-gray-900 hover:to-black font-medium text-sm transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <Code className="w-4 h-4" />
                    GitHub에서 증빙 자료 확인하기
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Skills, Mission & Assessment */}
          <div className="space-y-8">
            {/* Leadership & Growth Experience */}
            <Card className="hover-card bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-orange-600" />
                  리더십 & 성장 경험
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-orange-600">🎯</span>
                      군 복무 전환점 (2019-2021)
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      30세까지의 인생 설계와 체계적 실행 계획 수립. 700만원 저축으로 편입 준비 자금 마련
                    </p>
                    <div className="text-xs text-orange-600">
                      • 장기 비전 수립 • 자원 관리 능력 • 목표 중심 생활 패턴 확립
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-blue-600">📚</span>
                      편입 도전과 자기계발
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      편입 준비를 통한 목표 달성과 체계적 학습 관리 경험
                    </p>
                    <div className="text-xs text-blue-600">
                      • 체계적 계획 수립 • 끈질긴 실행력 • 목표 지향적 사고
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">인생 전환점: 안주에서 도전으로</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    군 복무를 통해 <strong>"오늘의 선택이 미래를 증명한다"</strong>는 철학을 확립. 
                    전역 후 1년간 단 하루도 쉬지 않고 편입 준비에 전념하여 성공적 합격. 
                    <strong>승부욕을 학업에 적용</strong>하여 극적인 변화를 이뤄냈습니다.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
                    <div className="flex items-center gap-1">
                      <span className="text-blue-600">✓</span>
                      <span className="text-gray-700">확고한 목표 의식</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-blue-600">✓</span>
                      <span className="text-gray-700">극한의 집중력과 끈기</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-blue-600">✓</span>
                      <span className="text-gray-700">패턴 분석 및 전략적 접근</span>
                    </div>
                  </div>
                  
                  <div className="mt-3 p-2 bg-white rounded-md">
                    <p className="text-xs text-gray-600 italic">
                      "내가 상대보다 조금이라도 잘할 수 있는 것이 있다면 그것을 극대화하고 집요하게 파고든다. 
                      이것이 나를 합격으로 이끈 방식이다."
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <span className="px-3 py-1 bg-orange-600 text-white text-xs rounded-full font-medium">
                    다양한 경험을 통한 통합적 리더십
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Personal Mission & Vision */}
            <Card className="hover-card bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  개인 미션 & 비전
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
                  <h4 className="font-bold text-gray-900 mb-2 text-center">
                    "수학으로 세상을 이롭게 하는 Integrator가 되자"
                  </h4>
                  <p className="text-sm text-gray-600 text-center">
                    수학적 사고와 AI 기술을 융합하여 실제 문제를 해결하는 통합형 인재
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-lg border border-blue-200">
                    <div className="font-semibold text-blue-800 mb-1">1단계: 컨설팅</div>
                    <div className="text-blue-700">전략적 사고력과 문제해결 역량 구축</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-3 rounded-lg border border-green-200">
                    <div className="font-semibold text-green-800 mb-1">2단계: 스타트업</div>
                    <div className="text-green-700">혁신적 AI 솔루션 개발 및 리더십</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-3 rounded-lg border border-orange-200">
                    <div className="font-semibold text-orange-800 mb-1">3단계: 교육</div>
                    <div className="text-orange-700">지식 전수와 차세대 인재 양성</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">"3%나 된다" 철학</h4>
                  <p className="text-sm text-gray-600">
                    어려운 상황에서도 <strong>3%의 희망과 가능성을 찾아내는 긍정적 사고</strong>로 
                    혁신적 솔루션을 창출하고 팀을 이끕니다.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Job Fitness Assessment Results */}
            <Card className="hover-card bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-green-600" />
                  직무 적합성 분석 (2022 워크넷)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-green-100">
                    <h4 className="font-bold text-gray-900 mb-2 text-center">ES 유형</h4>
                    <div className="text-xs text-center mb-3 text-gray-600">진취형(E) + 사회형(S)</div>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">리더십</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">75점</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">외향성</span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">80점</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">목표지향</span>
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full font-medium">72점</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-green-100">
                    <h4 className="font-bold text-gray-900 mb-2 text-center">핵심 역량</h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">타인 배려</span>
                        <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full font-medium">98점</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">책임감</span>
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">73점</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">경험 개방성</span>
                        <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full font-medium">74점</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Trillion Labs 적합성 분석</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      <span className="text-gray-700">목표 중심의 프로젝트 리딩 능력</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      <span className="text-gray-700">팀 협업과 소통에 탁월한 역량</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      <span className="text-gray-700">새로운 기술 도전에 높은 개방성</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      <span className="text-gray-700">책임감 있는 업무 완수 의지</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <span className="px-4 py-2 bg-green-600 text-white text-xs rounded-full font-medium">
                    Trillion Labs 인턴십 지원 포트폴리오
                  </span>
                </div>
              </CardContent>
            </Card>


            {/* Trillion Labs-Aligned Development Expertise */}
            <Card className="hover-card bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  Trillion Labs 개발 역량 정렬
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">AI 리터러시 & SLM 파인튜닝</h4>
                    <p className="text-xs text-gray-600">
                      AI 리터러시 기반 빠른 기술 적응과 Small Language Model 파인튜닝 경험을 통한 한국어 특화 AI 개발 역량
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">풀스택 웹개발 & AI 통합</h4>
                    <p className="text-xs text-gray-600">
                      Next.js, React, Ruby on Rails 풀스택 경험과 LLM API 연동을 통한 혁신적 사용자 경험 창조
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">빠른 학습과 도전 정신</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>팀장 경험</strong>을 통해 빠른 학습과 "이거 재밌겠다!" 하는 도전 정신을 갖춘 인재. 
                    <strong>AI 리터러시와 웹개발 경험</strong>을 기반으로 Kotlin 등 새로운 기술에 빠른 적응 가능.
                  </p>
                  <div className="text-center">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full font-medium">
                      Trillion Labs 인턴십 지원 준비 중
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trillion Labs Vision Alignment - Enhanced */}
            <Card className="hover-card bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  Trillion Labs Product Engineer 역량 매칭
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-blue-600">🛠️</span>
                    "Swiss Army Knife of Product Engineering"
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>풀스택 다재다능:</strong> TypeScript/React 프론트엔드부터 Python 백엔드, Ruby on Rails 서비스까지 
                    전 스택을 아우르는 개발 경험. <strong>직관적인 UX, 성능 최적화된 API, 프로덕션급 백엔드 시스템</strong> 구축 가능.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700">TypeScript/React</Badge>
                    <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">Python APIs</Badge>
                    <Badge variant="secondary" className="text-xs bg-red-100 text-red-700">Ruby on Rails</Badge>
                    <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-700">Production Systems</Badge>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-purple-600">✨</span>
                    Novel AI UX & Interactive Interfaces
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>AI를 위한 새로운 UX 설계:</strong> SOGAMBOT.com, 의료 AI 진단 시스템, 교사 어시스턴트 등 
                    강력한 AI 모델과의 상호작용을 <strong>직관적이고 자연스럽고 즐거운</strong> 인터페이스로 구현한 경험.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-700">AI UX Design</Badge>
                    <Badge variant="secondary" className="text-xs bg-pink-100 text-pink-700">Interactive Tools</Badge>
                    <Badge variant="secondary" className="text-xs bg-indigo-100 text-indigo-700">Creative Applications</Badge>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-orange-600">⚡</span>
                    Fast Prototyping to Productization
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>"애매함 속에서도 번창":</strong> 불확실성을 즐기며 아이디어를 빠르게 구현하고 반복 개발하는 능력. 
                    DeepFountain Team Leader로서 <strong>빠른 제품 아이디어 테스트와 end-to-end 엔지니어링</strong>을 주도.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-700">Rapid Prototyping</Badge>
                    <Badge variant="secondary" className="text-xs bg-yellow-100 text-yellow-700">Fast Iteration</Badge>
                    <Badge variant="secondary" className="text-xs bg-red-100 text-red-700">End-to-End Engineering</Badge>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-emerald-100">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-emerald-600">🔬</span>
                    Research-Product Bridge Builder
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>연구와 제품 연결:</strong> 수학과 석사과정으로서의 연구 경험과 AI 모델을 실제 제품으로 
                    구현하는 능력을 겸비. <strong>복잡한 시스템과 API를 유지 관리</strong>하며 빠르게 발전하는 도메인에서 
                    기술적·제품적 방향성을 정의하는 데 기여.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs bg-emerald-100 text-emerald-700">Research Background</Badge>
                    <Badge variant="secondary" className="text-xs bg-teal-100 text-teal-700">Product Integration</Badge>
                    <Badge variant="secondary" className="text-xs bg-cyan-100 text-cyan-700">System Architecture</Badge>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-gray-900 mb-2">핵심 역량 요약</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">✓</span>
                      <span className="text-gray-700"><strong>강력한 제품 직관</strong>과 사용자 경험에 대한 깊은 관심</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">✓</span>
                      <span className="text-gray-700"><strong>빠르게 움직이고 깔끔한 코드</strong>를 작성하는 능력</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">✓</span>
                      <span className="text-gray-700"><strong>고도로 협력적이고 탐구적인</strong> 환경에서 번창</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">✓</span>
                      <span className="text-gray-700">LLM 및 <strong>ML 시스템 구축 경험</strong></span>
                    </div>
                  </div>
                  <div className="mt-3 p-3 bg-white rounded-lg border border-blue-100">
                    <p className="text-xs text-gray-600 italic text-center">
                      <strong>"Move fast, write clean code, and thrive in highly collaborative, exploratory environment"</strong>
                      <br />- 이것이 바로 제가 추구하는 개발 철학입니다.
                    </p>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <a 
                    href="https://lnkd.in/g6vA5qcu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 font-medium text-sm transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <Sparkles className="w-4 h-4" />
                    Trillion Labs Product Engineer 지원 준비 완료
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Ruby on Rails Interest Section */}
            <Card className="hover-card bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-red-600" />
                  최근 관심 개발 언어: Ruby on Rails
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    AI 리터러시와 Vibe Coding
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Context Optimization과 Prompt Engineering을 통해 AI와 협업하는 새로운 개발 패러다임을 실험하고 있습니다. 
                    직관적이고 생산성 높은 개발 환경을 제공하는 Ruby on Rails에 깊이 매료되었습니다.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Convention over Configuration</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    복잡한 설정을 최소화하고 개발자가 본질에 집중할 수 있는 Rails의 철학이 매력적입니다. 
                    RESTful 아키텍처, MVC 패턴, Active Record ORM을 통해 개발 속도를 비약적으로 높일 수 있습니다.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-red-100 to-orange-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">하이브리드 아키텍처</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    기존 Python 백엔드 경험과 결합하여 <strong>Rails + Python API</strong> 하이브리드 아키텍처를 설계하고 있습니다.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs bg-red-100 text-red-700">RAG 기반 챗봇</Badge>
                    <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-700">ETF GNN 대시보드</Badge>
                    <Badge variant="secondary" className="text-xs bg-yellow-100 text-yellow-700">교육용 AI SaaS</Badge>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <a 
                    href="https://github.com/LeGenAI" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium text-sm"
                  >
                    <Code className="w-4 h-4" />
                    GitHub에서 최신 프로젝트 보기
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Full Width Projects Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Development Portfolio</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              AI/ML을 핵심으로 한 풀스택 개발 프로젝트들. 실제 사용자에게 가치를 전달하는 솔루션에 집중합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Core Projects - First 4 most important ones */}
            {projects.slice(0, 4).map((project, index) => (
              <Card key={index} className="hover-card bg-gradient-to-br from-gray-50 to-blue-50 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>
                  
                  {project.highlight && (
                    <div className="bg-orange-50 border-l-4 border-orange-400 p-3 rounded-r-lg">
                      <p className="text-sm text-orange-800 font-medium">
                        ✨ {project.highlight}
                      </p>
                    </div>
                  )}
                  
                  {project.impact && (
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-lg">
                      <p className="text-sm text-blue-800 font-medium">
                        📊 {project.impact}
                      </p>
                    </div>
                  )}

                  {project.image && (
                    <div className="mb-4">
                      <img 
                        src={project.image} 
                        alt={`${project.title} 이벤트 사진`}
                        className="w-full h-64 object-contain rounded-lg border border-gray-200 shadow-sm bg-gray-50"
                      />
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-2 flex-wrap">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                      >
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        Live Demo
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 font-medium text-sm transition-colors"
                      >
                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                        Live Demo
                      </a>
                    )}
                    {project.news && (
                      <a 
                        href={project.news} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-800 font-medium text-sm transition-colors"
                      >
                        <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                        News Coverage
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium text-sm transition-colors"
                      >
                        <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
                        GitHub Repository
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Projects */}
          <Card className="hover-card bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 text-center">Additional AI Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.slice(4).map((project, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-2">{project.title}</h4>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                      >
                        → View Project
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}