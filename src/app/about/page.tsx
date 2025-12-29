'use client';

import React, { useEffect } from 'react';
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
  Sparkles,
  Zap,
  Target, // For Mission/Vision
  Globe, // For Global Communication
  Shield, // For AI Safety
  Cpu // For Engineering
} from 'lucide-react';

const projects = [
  {
    title: 'SolEvolve (Master\'s Thesis)',
    description: 'Autonomous algorithm discovery system using LLM and Evolutionary computation. Rediscovered optimal codes ($[22,11,6]$) via Black-box optimization.',
    tech: ['Evolutionary Comp.', 'LLM Agents', 'SAT Solvers', 'Python'],
    impact: 'Research',
    highlight: 'Autonomous Discovery of Mathematical Theorems',
    image: '/thesis/graphical_abstract.png'
  },
  {
    title: 'EntropyMath (AI Safety Eval)',
    description: 'Leaderboard for evaluating Agentic Tool Use, designed to solve Data Contamination issues in LLM benchmarks.',
    tech: ['Evaluation Pipeline', 'Next.js', 'Python', 'AI Safety'],
    impact: 'Leaderboard Launch',
    highlight: 'Measuring "Honest" Reasoning Capabilities',
    link: 'https://entropymath.com',
    image: '/1212/1212_workshop_fig_1.png'
  },
  {
    title: 'SOGAMBOT.com',
    description: 'University-wide AI Chatbot and RAG solution for Sogang University.',
    tech: ['RAG', 'Vector DB', 'Full-Stack', 'System Architecture'],
    impact: 'Service Launched',
    highlight: 'Transformed institutional data into AI-ready assets',
    link: 'https://sogambot.com',
    image: '/sogambot_events.jpg'
  },
  {
    title: 'MekaNet (Medical AI)',
    description: 'WSI-based Tiny Object Detection using SSL architecture. Focused on medical image analysis.',
    tech: ['Computer Vision', 'PyTorch', 'Medical AI'],
    impact: 'Paper Under Review',
    highlight: 'implemented TESSD architecture for Gigapixel images',
    image: '/mekanet.png'
  }
];

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About | Jae-Hyun Baek - AI Safety Researcher';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'AI Safety Researcher Jae-Hyun Baek. Specializing in Alignment Faking, Formal Methods, and Engineering. M.S. in Mathematics.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Header Spacing */}
      <div className="pt-20"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 px-3 py-1 text-sm">
            AI Safety Researcher & Mathematician
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Building <span className="text-indigo-600">Trustworthy AI</span> via<br />
            Formal Verification & Mathematical Rigor
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            "I study the discrepancy between an LLM's internal motives and external behaviors (<span className="font-semibold text-gray-900">Alignment Faking</span>)
            and build trustworthy AI systems by mathematically formalizing these phenomena."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Profile & Core Competencies */}
          <div className="space-y-8">

            {/* Personal Information */}
            <Card className="hover-card border-l-4 border-l-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-indigo-600" />
                  Profile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                  <div className="relative">
                    <img
                      src="/jhbaek_profile.jpg"
                      alt="Profile"
                      className="w-24 h-24 rounded-full object-cover border-4 border-indigo-100 shadow-md"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full" title="Available for Hire"></div>
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-bold text-gray-900">Jae-Hyun Baek</h3>
                    <p className="text-indigo-600 font-medium">M.S. in Mathematics, Sogang Univ.</p>
                    <div className="text-sm text-gray-500 mt-1">
                      Born 2000.07.17 | bjh3641@gmail.com
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3 justify-center sm:justify-start">
                      <Badge variant="outline" className="text-gray-600">Optimization</Badge>
                      <Badge variant="outline" className="text-gray-600">Formal Methods</Badge>
                      <Badge variant="outline" className="text-gray-600">Red Teaming</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="hover-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-gray-700" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-gray-900">M.S. in Mathematics</h4>
                    <span className="text-sm text-indigo-600 font-medium">2024.03 - 2026.02 (Expected)</span>
                  </div>
                  <p className="text-gray-700">Sogang University</p>
                  <p className="text-sm text-gray-500 mt-1">
                    GPA: 4.1 / 4.3 (Top 3%)<br />
                    Advisor: Prof. Jon-Lark Kim<br />
                    Focus: Coding Theory, AI Safety, Optimization
                  </p>
                </div>
                <Separator />
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-gray-900">B.S. in Mathematics</h4>
                    <span className="text-sm text-gray-500 font-medium">2022.03 - 2024.02</span>
                  </div>
                  <p className="text-gray-700">Sogang University</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Transfer Student | GPA: 3.8 / 4.3
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Key Strengths for AIM */}
            <Card className="hover-card bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-indigo-700" />
                  Why AIM Intelligence?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">

                <div className="bg-white/60 p-4 rounded-lg border border-indigo-100">
                  <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
                    <span className="text-xl">1.</span> Formal Methods as a Weapon
                  </h4>
                  <p className="text-sm text-indigo-800 leading-relaxed">
                    Unlike typical engineers, I approach AI Safety from a <strong>mathematical foundation</strong>.
                    I don't just find vulnerabilities; I aim to provide <strong>Formal Guarantees</strong> and explain <em>why</em> alignment failures occur structurally.
                  </p>
                </div>

                <div className="bg-white/60 p-4 rounded-lg border border-indigo-100">
                  <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
                    <span className="text-xl">2.</span> Global Communication
                  </h4>
                  <p className="text-sm text-indigo-800 leading-relaxed">
                    Proven ability to present complex research in English at international venues (<strong className="underline">ISIS 2025 Award</strong>).
                    Ready to collaborate with global leaders like Anthropic & DeepMind.
                  </p>
                </div>

                <div className="bg-white/60 p-4 rounded-lg border border-indigo-100">
                  <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
                    <span className="text-xl">3.</span> Engineering to Research
                  </h4>
                  <p className="text-sm text-indigo-800 leading-relaxed">
                    Capable of building the full evaluation pipeline (<strong className="underline">EntropyMath</strong>).
                    I bridge the gap between abstract theoretical safety and practical, scalable engineering.
                  </p>
                </div>

              </CardContent>
            </Card>

          </div>

          {/* Right Column - Vision, Proposal, Experience */}
          <div className="space-y-8">

            {/* 8-Week Research Proposal */}
            <Card className="hover-card border-l-4 border-l-red-500 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-red-600" />
                  8-Week Research Proposal
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="mb-2">
                  <p className="text-gray-700 mb-3">
                    Goal: Research methodology to <strong>induce Alignment Faking</strong> via Red Teaming.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                    <span className="bg-red-200 text-red-800 text-xs font-bold px-2 py-1 rounded mt-0.5">Week 1-2</span>
                    <p className="text-sm text-gray-700"><strong>Taxonomy & Setup:</strong> Define "Strategic Compliance" triggers in finance/medical domains.</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                    <span className="bg-red-200 text-red-800 text-xs font-bold px-2 py-1 rounded mt-0.5">Week 3-6</span>
                    <p className="text-sm text-gray-700"><strong>Red Teaming Experiments:</strong> Develop automated jailbreaking prompts that target "Sycohphancy" and "Faking".</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                    <span className="bg-red-200 text-red-800 text-xs font-bold px-2 py-1 rounded mt-0.5">Week 7-8</span>
                    <p className="text-sm text-gray-700"><strong>Evaluation & Paper Draft:</strong> Quantify the "Faking Rate" and draft a submission for NeurIPS/ICML 2026.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="hover-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-gray-700" />
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">

                <div className="relative border-l-2 border-gray-200 pl-4 py-1">
                  <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-blue-500 border-2 border-white"></div>
                  <h4 className="font-bold text-gray-900">Team Leader & Eng. Lead</h4>
                  <p className="text-sm text-blue-600 font-medium mb-1">DeepFountain Corp. (2025.03 - Present)</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Led the development of AI Agent Platforms (SaaS).
                    Orchestrated <strong>Ruby on Rails + Python</strong> hybrid architecture for scalable RAG systems.
                  </p>
                </div>

                <div className="relative border-l-2 border-gray-200 pl-4 py-1">
                  <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-gray-300 border-2 border-white"></div>
                  <h4 className="font-bold text-gray-900">Research Intern</h4>
                  <p className="text-sm text-gray-500 font-medium mb-1">DeepHelix (2025.01 - 2025.02)</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Developed Multi-modal LLM pipelines for medical education assistants.
                  </p>
                </div>

              </CardContent>
            </Card>

            {/* Tech Stack */}
            <Card className="hover-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-gray-700" />
                  Technical Stack
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm font-bold text-gray-900 mb-2">AI & Research</h5>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">PyTorch</Badge>
                      <Badge variant="secondary">HuggingFace</Badge>
                      <Badge variant="secondary">SAT Solvers</Badge>
                      <Badge variant="secondary">LangChain</Badge>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-gray-900 mb-2">Web Engineering</h5>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Next.js (React)</Badge>
                      <Badge variant="outline">TypeScript</Badge>
                      <Badge variant="outline">FastAPI</Badge>
                      <Badge variant="outline">Ruby on Rails</Badge>
                      <Badge variant="outline">Supabase</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

        {/* Selected Projects Grid */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <Brain className="w-6 h-6 text-indigo-600" />
            Selected Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-gray-200">
                <div className="h-48 overflow-hidden bg-gray-100 rounded-t-xl relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-800 shadow-sm hover:bg-white">
                      {project.impact}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 min-h-[40px]">{project.description}</p>

                  <div className="mb-4">
                    <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                      Must See: {project.highlight}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs text-gray-600">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}