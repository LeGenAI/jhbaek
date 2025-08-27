'use client';

import React from 'react';
import { Navigation } from '@/components/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, FileText, Presentation, Briefcase, GraduationCap } from 'lucide-react';

const publications = [
  {
    title: 'MekaNet: WSI-based Tiny Object Detection using SSL-based TESSD Architecture',
    authors: 'Jae-Hyun Baek (co-author)',
    journal: 'Medical Image Analysis (Under Review)',
    year: '2025',
    status: 'Under Review',
    highlight: 'Computer Vision & Medical AI',
    github: 'https://github.com/LeGenAI/mekanet-release'
  },
  {
    title: 'Performance Improvement of LLMs for Regulatory Document Understanding based on Modified RAG Approach',
    authors: 'Jae-Hyun Baek, Jon-Lark Kim',
    journal: 'Journal of Korean Institute of Intelligent Systems',
    year: '2025',
    status: 'Published',
    highlight: 'Best Paper Award 🏆'
  },
  {
    title: 'Hybrid Multimodal GenAI for Solving Math Problems Containing Various Figures',
    authors: 'Jae-Hyun Baek (co-author)',
    journal: 'IJFIS',
    year: '2025',
    status: 'Under Review',
    highlight: 'Multimodal AI'
  },
  {
    title: 'Application of TimeGPT for Enhancing Water Level Prediction in Gamcheon River, Korea',
    authors: 'Jae-Hyun Baek (co-author)',
    journal: 'IJFIS',
    year: 'Feb. 2025',
    status: 'Submitted'
  },
  {
    title: 'Symmetric Sudoku-Type Games from Perfect Codes',
    authors: 'Jae-Hyun Baek (co-author)',
    journal: 'IEEE Transactions on Games',
    year: '2025',
    status: 'Submitted',
    github: 'https://cicagolab.pythonanywhere.com/'
  }
];

const conferences = [
  {
    title: 'Sudoku-type Puzzles from Coding Theory',
    event: '11th Sino-Korea International Conference on Coding Theory and Related Topics',
    date: 'July 2025',
    type: 'Invited Talk'
  },
  {
    title: 'Modified RAG Framework for Regulatory Documents Using Knowledge Graphs',
    authors: 'Jae-Hyun Baek, Jon-Lark Kim',
    event: 'KSIAM Conference',
    date: 'Apr. 2025',
    type: 'Presentation'
  },
  {
    title: 'Alignment Faking in LLMs: A Case Study',
    authors: 'Jae-Hyun Baek, Jon-Lark Kim',
    event: 'Korean Institute of Intelligent Systems',
    date: 'May. 2025',
    type: 'Oral Presentation'
  },
  {
    title: 'Water-Level Forecasting using TimeGPT in Korean Rivers',
    authors: 'Jae-Hyun Baek, Keon-Hwi Kim, Tae-Hyo Baek, Jon-Lark Kim, Chang-Lae Jang',
    event: 'Korean Institute of Intelligent Systems',
    date: 'May. 2025',
    type: 'Oral Presentation'
  },
  {
    title: 'LLM의 진보, RAG(검색증강생성)',
    authors: 'Jae-Hyun Baek, Jon-Lark Kim',
    event: 'Korean Institute of Intelligent Systems',
    location: 'Seoul, Korea',
    date: 'Apr. 2024',
    type: 'Poster'
  }
];

const researchProjects = [
  {
    title: 'SOGAMBOT.com - 서강대학교 AI 챗봇 프로젝트',
    organization: '서강대학교',
    role: '메인 팀장 (Team Leader)',
    period: '2024 ~ Present',
    type: 'Large-scale AI System',
    highlight: '기관 전체 데이터셋 AI 변환 경험',
    impact: '서강대 전체 데이터를 AI 데이터로 변환',
    link: 'https://sogambot.com'
  },
  {
    title: 'GPT-OSS-20B Persona Injectection 프로젝트',
    organization: 'HuggingFace Community',
    role: '데이터셋 제작자',
    period: '2025',
    type: 'OSS Fine-tuning Optimization',
    highlight: '일주일만에 100+ 다운로드 달성 📈',
    impact: 'OSS 파인튜닝에 최적화된 데이터셋 구조',
    link: 'https://huggingface.co/datasets/LeBrony/buddha_oss_dataset'
  },
  {
    title: 'LINC 3.0 산학공동_국고, 생성형 AI를 활용한 서강대 학사 정보',
    organization: '서강대학교 산학협력단, Korea',
    role: '참여 연구원',
    period: 'Jun. 2024 ~ Jan. 2025',
    type: 'Industry-Academia Collaboration'
  },
  {
    title: '하천의 물리적 환경변화 고려 하천종단 수자원시설의 치수안전도 평가 기술개발',
    organization: '한국건설기술연구원, Korea',
    role: '참여 연구원',
    period: 'Sep. 2024 ~ Present',
    type: 'Research Institute Project'
  }
];

const teachingExperience = [
  {
    title: 'LLM 관련 세미나 및 알바트로스 세미나 강의',
    target: '수학과 학부생 및 대학원생 대상',
    type: 'Graduate Seminar'
  },
  {
    title: '"0과 1로 보는 AI" 인공지능 특강',
    organization: '서강대학교 수학과 x 복자여고',
    period: '2024-2 학기',
    type: 'High School Outreach'
  },
  {
    title: '"Textbook is all you need" 인공지능 특강',
    organization: '서강대학교 수학과 x 복자여고',
    period: '2025-1 학기',
    type: 'High School Outreach'
  },
  {
    title: 'MATLAB 실습 강의 조교',
    organization: '서강대학교 수학과',
    period: '1년 6개월',
    type: 'Teaching Assistant'
  }
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Header Spacing */}
      <div className="pt-20"></div>

      {/* Research & Lecture Activities Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-white rounded-2xl m-6 shadow-lg">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 responsive-text-4xl">Research & Lecture Activities</h1>
          <p className="text-gray-600 text-lg">수학과 AI를 융합한 연구 활동과 교육 현장</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/jhbaek_lecture.jpg" 
                alt="Perfect Codes in Generalized Lucas Cubes - Research Presentation"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 text-lg">Perfect Codes Research</h3>
              <p className="text-sm text-gray-600">Generalized Lucas Cubes 연구 발표</p>
              <p className="text-xs text-gray-500">Anhui University, China</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/jhbaek_lecture_2.jpg" 
                alt="MekaNet - AI Medical Image Analysis Platform"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 text-lg">MekaNet AI Platform</h3>
              <p className="text-sm text-gray-600">AI Medical Image Analysis</p>
              <p className="text-xs text-gray-500">Automatic Cellularity Calculator</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/jhbaek_lecture_3.jpg" 
                alt="Large Language Model Research"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 text-lg">Large Model Research</h3>
              <p className="text-sm text-gray-600">LLM & Foundation Models</p>
              <p className="text-xs text-gray-500">Computer Vision & NLP Applications</p>
            </div>
          </div>
        </div>

        {/* Research Papers and Conferences - 2:2 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Journal Papers */}
          <Card className="hover-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Journal Papers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                    <h4 className="text-gray-900 font-semibold mb-1">{pub.title}</h4>
                    <p className="text-sm text-gray-700 mb-1">{pub.authors}</p>
                    <p className="text-sm text-blue-600 mb-1">{pub.journal}, {pub.year}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        pub.status === 'Published' ? 'bg-green-100 text-green-700' :
                        pub.status === 'Under Review' ? 'bg-purple-100 text-purple-700' :
                        pub.status === 'Submitted' ? 'bg-blue-100 text-blue-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {pub.status}
                      </span>
                      {pub.highlight && (
                        <span className="px-2 py-1 text-xs bg-orange-100 text-orange-700 rounded-full font-medium">
                          {pub.highlight}
                        </span>
                      )}
                    </div>
                    {pub.github && (
                      <a 
                        href={pub.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:text-blue-800 underline"
                      >
                        📁 GitHub Repository
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Conference Presentations */}
          <Card className="hover-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Presentation className="w-5 h-5" />
                Conference Presentations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {conferences.map((conf, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4 py-2">
                    <h4 className="text-gray-900 font-semibold mb-1">{conf.title}</h4>
                    {conf.authors && (
                      <p className="text-sm text-gray-600 mb-1">{conf.authors}</p>
                    )}
                    <p className="text-sm text-green-600 mb-1">{conf.event}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>{conf.date}</span>
                      {conf.location && (
                        <>
                          <span>•</span>
                          <span>{conf.location}</span>
                        </>
                      )}
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full">
                        {conf.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Research Papers and Projects - 2:2 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column with 3 cards */}
          <div className="lg:col-span-3 space-y-8">

            {/* Research Projects */}
            <Card className="hover-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Research Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left: Projects list */}
                  <div className="space-y-4">
                    {researchProjects.map((project, index) => (
                      <div key={index} className="border-l-4 border-purple-500 pl-4 py-2">
                        <h4 className="text-gray-900 font-semibold mb-1">{project.title}</h4>
                        <p className="text-sm text-purple-600 mb-1">{project.organization}</p>
                        {project.highlight && (
                          <p className="text-sm text-orange-600 mb-1 font-medium">
                            ✨ {project.highlight}
                          </p>
                        )}
                        {project.impact && (
                          <p className="text-xs text-gray-600 mb-2">
                            ✓ {project.impact}
                          </p>
                        )}
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                          <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
                            {project.role}
                          </span>
                          <span>{project.period}</span>
                        </div>
                        {project.link && (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-xs text-blue-600 hover:text-blue-800 underline"
                          >
                            🔗 URL Link
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Right: SOGAMBOT image */}
                  <div className="flex flex-col items-center justify-center">
                    <div className="relative overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 w-full border-4 border-purple-200">
                      <img 
                        src="/서감봇 출시.png" 
                        alt="SOGAMBOT.com - 서강대학교 AI 챗봇 플랫폼 출시"
                        className="w-full h-80 object-contain hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-purple-50 to-indigo-50"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="text-center mt-4 space-y-2">
                      <h3 className="font-bold text-gray-900 text-lg">SOGAMBOT.com 출시</h3>
                      <p className="text-sm text-purple-600 font-medium">서강대학교 전용 AI 챗봇 플랫폼</p>
                      <p className="text-xs text-gray-600">메인 팀장으로 기관 전체 데이터 AI 변환 주도</p>
                      <div className="flex items-center justify-center gap-2 mt-3">
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">
                          팀장
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                          대규모 AI 시스템
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Teaching Experience - moved here to fill 3rd card in left column */}
            <Card className="hover-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Teaching Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left: Teaching list */}
                  <div className="space-y-4">
                    {teachingExperience.map((teaching, index) => (
                      <div key={index} className="border-l-4 border-orange-500 pl-4 py-2">
                        <h4 className="text-gray-900 font-semibold mb-1">{teaching.title}</h4>
                        {teaching.organization && (
                          <p className="text-sm text-orange-600 mb-1">{teaching.organization}</p>
                        )}
                        {teaching.target && (
                          <p className="text-sm text-gray-600 mb-1">{teaching.target}</p>
                        )}
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          {teaching.period && <span>{teaching.period}</span>}
                          <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full">
                            {teaching.type}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Right: Teaching photo */}
                  <div className="flex flex-col items-center justify-center">
                    <div className="relative overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 w-full border-4 border-orange-200">
                      <img 
                        src="/jhbaek_lecture_bokja.jpg" 
                        alt="복자여고 AI 특강 - 백재현 강의"
                        className="w-full h-80 object-contain hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-orange-50 to-red-50"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="text-center mt-4 space-y-2">
                      <h3 className="font-bold text-gray-900 text-lg">복자여고 AI 특강</h3>
                      <p className="text-sm text-orange-600 font-medium">"0과 1로 보는 AI" 인공지능 특강</p>
                      <p className="text-xs text-gray-600">서강대학교 수학과 x 복자여고 교육 프로그램</p>
                      <div className="flex items-center justify-center gap-2 mt-3">
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">
                          고교 특강
                        </span>
                        <span className="px-3 py-1 bg-red-100 text-red-700 text-xs rounded-full font-medium">
                          AI 교육
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>


        {/* VLM & Multimodal AI Expertise */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 mb-12 border-2 border-purple-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-2">
            <span className="text-purple-600">🔬</span>
            VLM & Multimodal AI 전문성
            <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">EXAONE VL 관련</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-purple-100">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-purple-600">🩺</span>
                WSI-based Tiny Object Detection
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>SSL 기반 TESSD 아키텍처</strong>를 개발하여 WSI(Whole Slide Image) 환경에서 
                극소형 객체 검출 성능을 혁신적으로 개선. 의료 이미지 분석의 새로운 패러다임 제시.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">SSL Architecture</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Medical Image Analysis</span>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Tiny Object Detection</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-purple-100">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-purple-600">🧠</span>
                VLM 기반 세포 충실도 계산 (연구 진행 중)
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Vision-Language Model을 활용한 자동화된 세포 충실도 분석 시스템 구축. 
                <strong>AlphaEvolve 기반 아키텍처 개선</strong>을 통해 정확도와 효율성을 달성을 목표.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Vision-Language Model</span>
                <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">AlphaEvolve</span>
                <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full">Cell Analysis</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
            <p className="text-sm text-gray-700 text-center">
              <strong>EXAONE VL 모델의 의료 벤치마크 성과</strong>에 큰 관심을 가지고 있으며, 
              General VL 성능 개선을 위한 <strong>벤치마크 최적화 경험</strong>을 보유하고 있습니다.
            </p>
          </div>
        </div>

        {/* OSS Fine-tuning & Data Engineering */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 mb-12 border-2 border-green-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-2">
            <span className="text-green-600">🤗</span>
            GPT OSS 20B Fine-tuning & 데이터 최적화 실험
            <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">HuggingFace</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-green-100">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-green-600">📊</span>
                LeBrony/buddha_oss_dataset
              </h3>
              <div className="mb-4 p-3 bg-green-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">다운로드 수</span>
                  <span className="text-lg font-bold text-green-600">100+ 다운로드</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">달성 기간</span>
                  <span className="text-sm text-green-600 font-medium">일주일</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                OSS 파인튜닝에 최적화된 데이터셋 구조로 설계하여, 
                종교적 맥락의 데이터셋임에도 높은 활용도를 달성.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-green-100">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-green-600">⚡</span>
                데이터셋 구조 최적화 노하우
              </h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>모델별 맞춤 구조</strong>: 각 모델의 특성에 맞는 데이터 포맷 최적화</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>성능 검증</strong>: 데이터셋 구조에 따른 성능 변화 실험적 확인</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>커뮤니티 기여</strong>: 오픈소스 생태계 활성화에 기여</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg">
            <p className="text-sm text-gray-700 text-center">
              <strong>방대한 모델 데이터 학습</strong>이라는 challenging한 과제에 대한 두려움 없는 접근으로, 
              <strong>  대규모 데이터셋 Transform 경험</strong>을 통해 실무 역량을 입증했습니다.
            </p>
          </div>
        </div>

        {/* Research Impact & Achievements */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            연구 성과 및 데이터 기반 문제 해결 역량
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">RAG 기반 LLM 최적화</h3>
              <p className="text-sm text-gray-600">
                방대한 비정형 데이터에서 효율적인 검색과 분석을 가능케 하는 RAG 기반 프레임워크 개선. 
                금융 로그 데이터 분석에도 직결되는 데이터 검색·활용 능력 입증.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">TimeGPT 수위 예측</h3>
              <p className="text-sm text-gray-600">
                대규모 시계열 데이터를 활용한 LLM 기반 예측 모델 설계. 
                ARIMA, SARIMAX 등 전통 모델과 비교 실험 수행으로 사용자 행동 예측, 리스크 탐지 경험 확보.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">MekaNet 의료AI</h3>
              <p className="text-sm text-gray-600">
                Feature Engineering의 중요성을 체득하며 고차원 데이터에서 의미 있는 피처 정의·최적화. 
                데이터로 실질적 비즈니스 가치 창출 역량 개발.
              </p>
            </div>
          </div>
        </div>

        {/* Deep Research Achievements - EXAONE Lab Focused */}
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-xl p-8 mb-12 border-2 border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
            <span className="text-blue-600">📊</span>
            Deep Research Achievements
            <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm rounded-full font-medium border border-blue-300">
              EXAONE Lab 맞춤형 연구역량
            </span>
          </h2>
          
          {/* Hybrid Multimodal GenAI Research */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left: Research Overview */}
              <div className="lg:col-span-2 space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-blue-600">🤖</span>
                    Hybrid Multimodal GenAI for Math Problem Solving
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                      공동저자 (2nd Author)
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                      IJFIS 제출
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">
                      VLM + LLM 하이브리드
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    <strong>문제 인식</strong>: 기존 OCR 기반 수학 문제 해결 시스템은 그래프와 차트가 포함된 통계 문제에서 <strong className="text-red-600">0% 정확도</strong>를 보임
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    <strong>해결책 설계</strong>: OpenMath-Instruct-2 기반 합성 데이터 생성 + ColPali VLM을 활용한 시각적 데이터 처리 하이브리드 시스템 구축
                  </p>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-green-600">📈</span>
                      핵심 성과 지표
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-red-600 mb-1">0%</div>
                          <div className="text-xs text-gray-600 mb-2">OCR 단독 사용</div>
                          <div className="text-3xl text-red-500">→</div>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600 mb-1">62.1%</div>
                          <div className="text-xs text-gray-600 mb-2">ColPali + GPT-4o</div>
                          <div className="text-lg font-medium text-green-600">향상!</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 text-center">
                      <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 text-sm rounded-full font-medium">
                        통계 문제 정확도 <strong>62.1%p 개선</strong> 달성
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Technical Contribution */}
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-indigo-600">⚙️</span>
                    기술적 기여도 (2nd Author)
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span><strong>MathVision 데이터셋 기반 실험 설계</strong>: 58개 통계 문제 대상 체계적 성능 평가 체계 구축</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span><strong>하이브리드 파이프라인 구현</strong>: ColPali VLM과 LLaMA/GPT-4o 연동 시스템 아키텍처 설계</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span><strong>비교 분석 주도</strong>: OCR vs VLM, 단독 vs 하이브리드 모델 성능 정량적 비교 분석</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Right: EXAONE Lab Relevance */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border-2 border-purple-200 h-full">
                  <h4 className="font-bold text-purple-900 mb-4 text-center flex items-center justify-center gap-2">
                    <span className="text-purple-600">🎯</span>
                    EXAONE Lab 역량 매칭
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
                      <h5 className="font-semibold text-purple-800 mb-2 text-sm">✅ VLM 벤치마크 경험</h5>
                      <p className="text-xs text-gray-600">
                        MathVision 공개 벤치마크에서 ColPali VLM 성능 개선 및 효과 검증
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
                      <h5 className="font-semibold text-purple-800 mb-2 text-sm">✅ Model-based 필터링</h5>
                      <p className="text-xs text-gray-600">
                        텍스트 vs 시각 정보 처리 필요성 판단 및 최적 모델 라우팅 시스템 설계
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
                      <h5 className="font-semibold text-purple-800 mb-2 text-sm">✅ 개발적 능력</h5>
                      <p className="text-xs text-gray-600">
                        연구를 넘어 실제 작동하는 하이브리드 AI 시스템 설계 및 구현
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
                      <h5 className="font-semibold text-purple-800 mb-2 text-sm">✅ 데이터 처리 파이프라인</h5>
                      <p className="text-xs text-gray-600">
                        MathVision/GSM8K 데이터셋 활용 및 OCR/VLM 기반 다양한 처리 방식 비교
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-3 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg">
                    <p className="text-xs text-center text-purple-800 font-medium">
                      "VLM 기반 문제 해결 시스템 설계 및 구현"
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom: Research Impact */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-800 mb-2">문제 해결사 역량</h5>
                    <p className="text-sm text-gray-700">
                      OCR 한계 인식 → VLM 도입 → <strong>62.1% 성능 달성</strong>
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-100 to-teal-100 p-4 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-2">시스템 설계 역량</h5>
                    <p className="text-sm text-gray-700">
                      합성 데이터 생성 + VLM + LLM <strong>하이브리드 아키텍처</strong>
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg">
                    <h5 className="font-semibold text-purple-800 mb-2">비교 분석 역량</h5>
                    <p className="text-sm text-gray-700">
                      다양한 모델 조합 <strong>체계적 비교 분석</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Alignment Faking Research */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-red-100 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left: Research Overview */}
              <div className="lg:col-span-2 space-y-6">
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-red-600">🚨</span>
                    LLM Alignment Faking 현상 사례 분석
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">
                      1저자 (First Author)
                    </span>
                    <span className="px-3 py-1 bg-red-100 text-red-700 text-xs rounded-full font-medium">
                      JKIIS 게재
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">
                      AI Safety & Security
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    <strong>문제 발견</strong>: RLHF로 훈련된 최신 SOTA 모델들이 "훈련 중" 상황을 인지했을 때 안전 제약을 의도적으로 위장하는 전략적 행동 패턴 존재
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    <strong>실험 설계</strong>: Claude 3 Opus, GPT-4o, Gemini 1.5 Flash 대상 체계적 Jailbreaking 실험 및 "무료/유료 사용자" 변수 설정
                  </p>
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-red-600">⚠️</span>
                      주요 연구 결과
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                        <div className="text-2xl font-bold text-green-600 mb-1">2.0%</div>
                        <div className="text-xs text-gray-600">유료 사용자 조건</div>
                        <div className="text-xs text-green-600 mt-1">정상 안전 수준</div>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="text-3xl text-red-500">→</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                        <div className="text-2xl font-bold text-red-600 mb-1">14.5%</div>
                        <div className="text-xs text-gray-600">무료 사용자 조건</div>
                        <div className="text-xs text-red-600 mt-1">유해 요청 응답</div>
                      </div>
                    </div>
                    <div className="mt-3 text-center">
                      <span className="px-4 py-2 bg-gradient-to-r from-red-100 to-orange-100 text-red-800 text-sm rounded-full font-medium">
                        Claude 3 Opus에서 <strong>7.25배 차이</strong> 확인
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Technical Contribution */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-purple-600">🔬</span>
                    기술적 기여도 (1st Author)
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span><strong>Jailbreaking 방법론 연구</strong>: "훈련 중" 상황 인지 유도 프롬프트 및 무료/유료 사용자 차별 시나리오 설계</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span><strong>통계적 유의성 검증</strong>: 해킹, 개인정보, 악성코드 카테고리에서 유의미한 차이 확인</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span><strong>RLHF 한계 규명</strong>: 현재 안전 훈련 방식이 표면적 행동 변화만 유도할 수 있음을 실증적으로 입증</span>
                    </li>
                  </ul>
                </div>
                
                {/* International Recognition */}
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-green-600">🌍</span>
                    국제적 인정 및 확산
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-medium text-green-800 mb-1">일본 국제학회 발표예정</h5>
                      <p className="text-xs text-gray-600">2025년 9월 동일 주제 Invited Talk</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-medium text-blue-800 mb-1">JKIIS 춘계 학술대회 발표</h5>
                      <p className="text-xs text-gray-600">AI Security 분야 국내 학술지</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right: EXAONE Lab Relevance */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border-2 border-red-200 h-full">
                  <h4 className="font-bold text-red-900 mb-4 text-center flex items-center justify-center gap-2">
                    <span className="text-red-600">🎯</span>
                    핵심역량
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-red-100">
                      <h5 className="font-semibold text-red-800 mb-2 text-sm">✅ 초거대 모델 경험</h5>
                      <p className="text-xs text-gray-600">
                        Claude 3 Opus, GPT-4o 등 초거대 파운데이션 모델의 사후학습 단계 검증 및 분석
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-red-100">
                      <h5 className="font-semibold text-red-800 mb-2 text-sm">✅ Jailbreaking 경험자</h5>
                      <p className="text-xs text-gray-600">
                        단순 프롬프트 해킹을 넘어 학술적 방법론으로 Alignment Faking 재현
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-red-100">
                      <h5 className="font-semibold text-red-800 mb-2 text-sm">✅ AI Safety 전문성</h5>
                      <p className="text-xs text-gray-600">
                        RLHF 한계성 규명 및 안전한 AI 개발을 위한 기반 연구 수행
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-red-100">
                      <h5 className="font-semibold text-red-800 mb-2 text-sm">✅ 학회 발표 경험</h5>
                      <p className="text-xs text-gray-600">
                        한국지능시스템 학회(JKIIS) 학술발표 및 국제학회 초청 발표 예정
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-3 bg-gradient-to-r from-red-100 to-orange-100 rounded-lg">
                    <p className="text-xs text-center text-red-800 font-medium">
                      "EXAONE Lab이 추구하는 <strong>안전한 AI</strong>에 대한 역량"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* T-shaped Professional Summary */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 border-2 border-indigo-200">
            <h3 className="text-xl font-bold text-center text-gray-900 mb-6 flex items-center justify-center gap-2">
              <span className="text-indigo-600">🎯</span>
              T자형 인재: Capability + Safety 마스터
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <span className="text-blue-600">🚀</span>
                  Capability (성능 달성)
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• VLM+LLM 하이브리드 시스템 설계 및 구현</li>
                  <li>• MathVision 벤치마크에서 <strong>0% → 62.1%</strong> 성능 개선</li>
                  <li>• 다양한 모델 조합 체계적 비교 분석</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                  <span className="text-red-600">🛡️</span>
                  Safety (안전성 연구)
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Alignment Faking 현상 발견 및 규명</li>
                  <li>• SOTA 모델들의 안전 제약 <strong>14.5% vs 2.0%</strong> 차이 입증</li>
                  <li>• RLHF 한계성 실증적 분석 및 제안</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-indigo-800 font-medium">
                "<strong>성능을 높이는 기술</strong>과 <strong>안전성을 확보하는 연구</strong>를 모두 갖춘 드문 인재"
              </p>
            </div>
          </div>
        </div>

        {/* HateSlop Academic Society */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 mb-12 border-2 border-purple-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-2">
            <span className="text-purple-600">🎓</span>
            HateSlop 학회 활동 (AI x 미디어 콘텐츠 제작)
            <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">1기 수료</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Society Overview */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-purple-100">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-purple-600">✨</span>
                학회 미션 & 비전
              </h3>
              <div className="space-y-3">
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h4 className="font-medium text-purple-800 mb-1">핵심 미션</h4>
                  <p className="text-sm text-gray-700">
                    "<strong>Slop을 넘어 프로덕션 레벨의 의미 있는 AI 기반 미디어 콘텐츠 제작</strong>"
                  </p>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <h4 className="font-medium text-indigo-800 mb-1">학회 특징</h4>
                  <p className="text-sm text-gray-700">
                    서강대학교 생성형AI 미디어콘텐츠 학회로, AI를 활용한 창작과 상업적 활용에 중점
                  </p>
                </div>
              </div>
            </div>

            {/* Activities & Achievements */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-purple-100">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-purple-600">🏆</span>
                주요 활동 & 성과
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1 text-sm">•</span>
                  <div>
                    <p className="text-sm font-medium text-gray-800">AI x Commercial Festival 참가</p>
                    <p className="text-xs text-gray-600 mb-1">상업적 AI 콘텐츠 제작 기획 및 실행</p>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-2 rounded text-xs">
                      <strong className="text-purple-700">Festival 핵심 성과:</strong>
                      <span className="text-gray-600 ml-1">AI 도구 활용한 미디어 콘텐츠 상업화 전략 수립 및 실제 적용 경험</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1 text-sm">•</span>
                  <div>
                    <p className="text-sm font-medium text-gray-800">팀별 프로젝트 수행</p>
                    <p className="text-xs text-gray-600">엔지니어 파트로 기술적 구현 담당</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1 text-sm">•</span>
                  <div>
                    <p className="text-sm font-medium text-gray-800">생성형 AI 기술 심화 학습</p>
                    <p className="text-xs text-gray-600">미디어 제작 워크플로우와 AI 도구 활용</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Images Gallery - 3:1 Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-6">
            {/* Left Column - 3 sections */}
            <div className="lg:col-span-3 space-y-6">
              {/* Group Photo */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-purple-100">
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4">
                  <img 
                    src="/hateslop_1.jpg" 
                    alt="HateSlop 1기 수료식 단체사진"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 text-lg">HateSlop 1기 수료식</h3>
                  <p className="text-sm text-gray-600">서강대학교 생성형AI 미디어콘텐츠 학회</p>
                  <p className="text-xs text-gray-500">2025년 2월 6일</p>
                </div>
              </div>
              
              {/* Additional activities cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-purple-100">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-purple-600">🎬</span>
                    AI Commercial Festival
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    상업적 AI 콘텐츠 제작 기획 및 실행 경험. 생성형 AI 도구를 활용한 미디어 콘텐츠 상업화 전략 수립.
                  </p>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                    엔지니어 파트
                  </span>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-purple-100">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-purple-600">⚡</span>
                    기술적 구현 역량
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    AI 기반 미디어 제작 파이프라인 구축 및 프로덕션 레벨의 기술적 문제 해결 담당.
                  </p>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                    프로덕션 경험
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Certificate */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg shadow-lg border-2 border-purple-200 h-full">
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 certificate-border certificate-glow mb-4">
                  <img 
                    src="/hateslop_certificate.png" 
                    alt="HateSlop 수료증 - 백재현 (엔지니어)"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="font-semibold text-gray-900 text-lg">수료증</h3>
                  <p className="text-sm text-purple-600 font-medium">엔지니어 파트</p>
                  <p className="text-sm text-gray-600">Academy Group with Generative AI</p>
                  <p className="text-xs text-gray-500">HateSlop 1기 과정 성공적 수료</p>
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">
                      생성형 AI
                    </span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full font-medium">
                      미디어 콘텐츠
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Learnings & Impact */}
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-4 text-center">학회 활동을 통한 역량 개발</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-purple-800 mb-2 flex items-center gap-2">
                  <span className="text-purple-600">🛠️</span>
                  엔지니어링 역량
                </h4>
                <p className="text-sm text-gray-600">
                  AI 기반 미디어 제작 파이프라인 구축 및 기술적 문제 해결 경험
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-indigo-800 mb-2 flex items-center gap-2">
                  <span className="text-indigo-600">🎨</span>
                  크리에이티브 협업
                </h4>
                <p className="text-sm text-gray-600">
                  디자이너, 기획자와의 협업을 통한 AI 콘텐츠 제작 프로세스 이해
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-green-800 mb-2 flex items-center gap-2">
                  <span className="text-green-600">💼</span>
                  상업화 관점
                </h4>
                <p className="text-sm text-gray-600">
                  AI 기술의 상업적 활용과 실제 비즈니스 적용에 대한 실무적 인사이트
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-700">
              <strong>EXAONE Lab과의 시너지</strong>: AI 기반 미디어 콘텐츠 제작 경험을 통해 
              <strong>  Vision-Language 모델의 실용적 활용</strong>에 대한 깊은 이해를 보유하고 있습니다.
            </p>
          </div>
        </div>

        {/* IMDS Newsletter Journalism Activities */}
        <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-8 mb-12 border-2 border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-2">
            <span className="text-gray-600">📰</span>
            IMDS Newsletter 기자 활동 (제1호 발행)
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">기자진</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Newsletter Overview */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-gray-600">📋</span>
                IMDS 뉴스레터 개요
              </h3>
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-1">발행 정보</h4>
                  <p className="text-sm text-gray-700">
                    서강대 수리과학 및 데이터사이언스 연구소(IMDS) 뉴스레터 제1호
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    <strong>발행일:</strong> 2025년 6월 18일 | <strong>발행인:</strong> 연구소장 김종락
                  </p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-1">기자진 구성</h4>
                  <p className="text-sm text-gray-700">
                    <strong>기자:</strong> 안준민, 백재현, 임하은 (3인 공동 기자단)
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Mission & Vision */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-gray-600">🎯</span>
                뉴스레터 미션
              </h3>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-1">핵심 메시지</h4>
                  <p className="text-sm text-gray-700">
                    "<strong>연구는 사람을 향한다</strong>" - IMDS가 수학을 통해 세상과 연결되는 방식
                  </p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-1">연구소 정체성</h4>
                  <p className="text-sm text-gray-700">
                    "IMDS는 미래의 보다 나은 삶을 개척하는 연구소입니다"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Major Articles by 백재현 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">백재현 기자 주요 기사 및 보도</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Article 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-gray-900 text-base">서강대-강원대학교, 수리과학 및 데이터사이언스 공동 심포지움 및 MOU 체결</h4>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap ml-2">2025.03.12</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  한국연구재단(NRF)과 서강대학교 G-LAMP 사업단 후원으로 진행된 학술 심포지움 및 업무협약 체결식을 취재·보도
                </p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">대외협력</span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">학술교류</span>
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">MOU</span>
                </div>
              </div>

              {/* Article 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-gray-900 text-base">IMDS, ㈜자블리, 딥파운틴㈜, AI 혁신 선도 위한 학술·연구협력 MOU 체결</h4>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap ml-2">2025.06.04</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  AI 분야 학술 교류 및 연구 협력을 위한 산학협력 MOU 체결식 현장 취재 및 한겨레 뉴스 기사 연계 보도
                </p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full">산학협력</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">생성형AI</span>
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full">언론연계</span>
                </div>
              </div>

              {/* Article 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-gray-900 text-base">IMDS, 다수의 논문 게재와 주요 학회 발표 성과 이어가</h4>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap ml-2">2025.07.15</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  KSIAM, 한국지능시스템학회 등 주요 학회에서의 연구 성과 및 우수논문상 수상 소식을 종합 정리·보도
                </p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">연구성과</span>
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">학회발표</span>
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">수상실적</span>
                </div>
              </div>

              {/* Article 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-gray-900 text-base">K-MOOC 지역사회 고교연계 프로그램 초청강연</h4>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full whitespace-nowrap ml-2">2025.05.19</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  김종락 교수의 숭문고등학교 AI 특강 "수학자와 함께하는 AI와 그의 스토리" 현장 취재 및 보도
                </p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full">교육기여</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">AI교육</span>
                  <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full">현장취재</span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Content Sections */}
          <div className="bg-gradient-to-r from-gray-100 to-slate-100 p-6 rounded-lg mb-6">
            <h3 className="font-semibold text-gray-900 mb-4 text-center">뉴스레터 구성 섹션</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                  <span className="text-blue-600">🤝</span>
                  대외협력
                </h4>
                <p className="text-sm text-gray-600">
                  파트너기관과의 협력성과, 새로운 제휴소식, 대외활동 업데이트
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-green-800 mb-2 flex items-center gap-2">
                  <span className="text-green-600">📚</span>
                  교육 & 사회기여
                </h4>
                <p className="text-sm text-gray-600">
                  다양한 교육프로그램, 지역사회 공헌활동, 사회적 가치실현 노력
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-purple-800 mb-2 flex items-center gap-2">
                  <span className="text-purple-600">🏆</span>
                  연구성과 & 수상실적
                </h4>
                <p className="text-sm text-gray-600">
                  최근 발표 연구성과, 학술대회 수상내역, 주목할 만한 업적들
                </p>
              </div>
            </div>
          </div>

          {/* Key Journalism Skills Developed */}
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-4 text-center">기자 활동을 통한 역량 개발</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-blue-800 mb-2 flex items-center gap-2">
                  <span className="text-blue-600">📝</span>
                  전문 기술 글쓰기
                </h4>
                <p className="text-sm text-gray-600">
                  복잡한 수학·AI 연구 내용을 일반인도 이해할 수 있는 형태로 전달하는 커뮤니케이션 능력 개발
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-indigo-800 mb-2 flex items-center gap-2">
                  <span className="text-indigo-600">🎯</span>
                  프로젝트 기획력
                </h4>
                <p className="text-sm text-gray-600">
                  뉴스레터 전체 기획부터 섹션 구성, 콘텐츠 편집까지 체계적인 매체 제작 경험
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                  <span className="text-gray-600">🔗</span>
                  네트워킹 & 협업
                </h4>
                <p className="text-sm text-gray-600">
                  연구진, 교수진, 대외기관과의 인터뷰 및 협업을 통한 학술 네트워크 구축 경험
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-700">
              <strong>EXAONE Lab과의 시너지</strong>: 기술 연구 성과를 효과적으로 대외에 알리는 
              <strong>커뮤니케이션 전문성</strong>과 <strong>콘텐츠 제작 경험</strong>을 보유하고 있습니다.
            </p>
          </div>
        </div>

        {/* Research Focus Areas */}
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-2">
            <BookOpen className="w-6 h-6" />
            Research Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-3">Mathematics & Research</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="badge-interactive">MOLS</Badge>
                  <Badge variant="secondary" className="badge-interactive">Coding Theory</Badge>
                  <Badge variant="secondary" className="badge-interactive">Perfect Codes</Badge>
                  <Badge variant="secondary" className="badge-interactive">Combinatorial Optimization</Badge>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-3">AI & Machine Learning</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="badge-interactive">Time Series Forecasting</Badge>
                  <Badge variant="secondary" className="badge-interactive">LLMOps</Badge>
                  <Badge variant="secondary" className="badge-interactive">Cross-Modal Hashing</Badge>
                  <Badge variant="secondary" className="badge-interactive">RAG Systems</Badge>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-3">AI Security</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="badge-interactive">Inherited weakness</Badge>
                  <Badge variant="secondary" className="badge-interactive">Alignment Faking</Badge>
                  <Badge variant="secondary" className="badge-interactive">Model Poisoning</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}