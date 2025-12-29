'use client';

import React, { useEffect } from 'react';
import { Navigation } from '@/components/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  BookOpen,
  FileText,
  Presentation,
  Briefcase,
  GraduationCap,
  ExternalLink,
  Mic,        // For Conference/Speaking
  Newspaper,   // For Journalism
  Users,       // For Teaching/Society
  Award        // For Awards/Certificates
} from 'lucide-react';

export default function ResearchPage() {
  useEffect(() => {
    // SEO optimization for research page
    document.title = 'Research & Publications | Jae-Hyun Baek';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Research publications and projects by Jae-Hyun Baek: AI Safety, Alignment Faking, Formal Methods, SolEvolve, and Mathematics.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Header Spacing */}
      <div className="pt-20"></div>

      {/* Research & Lecture Activities Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-white rounded-2xl m-6 shadow-lg">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 responsive-text-4xl">Research & Projects</h1>
          <p className="text-gray-600 text-lg">AI Safety, Formal Methods, and Engineering</p>
        </div>

        {/* Thesis Highlight - SolEvolve */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 mb-16 text-white shadow-2xl overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-indigo-300 font-medium text-sm">
                Master's Thesis (2025)
              </div>
              <h2 className="text-3xl font-bold leading-tight">
                SolEvolve: An LLM-driven Evolutionary Discovery of Algorithms
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                An autonomous discovery system where the LLM acts as an active researcher.
                Rediscovered the "Shortened Golay Code" ($[22,11,6]$) autonomously using SAT-seeded Genetic Algorithms
                and Black-Box Optimization.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <span><strong>Autonomous Discovery</strong>: Closed-loop system with Generator, Evolver, and Verifier agents.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <span><strong>Formal Verification</strong>: Rigorous mathematical checks with UNSAT certificates.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">✓</span>
                  <span><strong>Performance</strong>: Outperformed algebraic software in discovering Optimal Binary Linear Codes.</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-2">
                <img
                  src="/thesis/graphical_abstract.png"
                  alt="SolEvolve Architecture"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Highlight: Alignment Faking (ISIS 2025) */}
        <div className="bg-white rounded-2xl border border-red-100 shadow-xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 bg-red-50 p-8 flex flex-col justify-center border-r border-red-100">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-red-100 text-red-700 text-xs rounded-full font-bold uppercase tracking-wider">
                  Best Presentation Award 🏆
                </span>
                <span className="px-3 py-1 bg-white text-gray-600 border border-gray-200 text-xs rounded-full font-medium">
                  ISIS 2025
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Alignment Faking in LLMs: A Case Study
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Mathematical formalization of the "Santa Claus" problem: where an LLM's external behavior (compliance)
                diverges from its internal state due to awareness of monitoring.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  Strategic Compliance Analysis
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  Mathematical Definition of "Faking"
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 p-8 bg-white flex items-center justify-center">
              <img
                src="/ISIS/slide1.PNG"
                alt="Alignment Faking Presentation"
                className="w-full max-h-80 object-contain rounded-lg shadow-md border border-gray-100 hover:scale-[1.02] transition-transform"
              />
            </div>
          </div>
        </div>

        {/* Accepted Papers Section - NEW */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <FileText className="w-6 h-6 text-indigo-600" />
            Recently Accepted Papers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Paper 1: TimeGPT */}
            <Card className="hover-card overflow-hidden">
              <div className="h-48 overflow-hidden bg-gray-50 border-b border-gray-100">
                <img
                  src="/accepted/Application_of_TimeGPT_for_enhancing_water_level_prediction_in_Gamcheon_River__Korea/TimeGPT_overall.png"
                  alt="TimeGPT for Water Level"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Accepted</Badge>
                  <span className="text-xs text-gray-500">Hydrology & AI</span>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2 leading-tight">
                  Application of TimeGPT for Enhancing Water Level Prediction in Gamcheon River, Korea
                </h4>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  Investigating the efficacy of Foundation Models (TimeGPT) in hydrological time-series forecasting compared to traditional statistical methods.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">Time-Series</Badge>
                  <Badge variant="outline" className="text-xs">Foundation Models</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Paper 2: Hybrid GenAI */}
            <Card className="hover-card overflow-hidden">
              <div className="h-48 overflow-hidden bg-gray-50 border-b border-gray-100">
                <img
                  src="/accepted/Hybrid multimodal GenAI for solving math problems containing various figures_v2_20250209/colpalianstwo.png"
                  alt="Hybrid Multi-modal GenAI"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Accepted</Badge>
                  <span className="text-xs text-gray-500">Multi-modal AI</span>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2 leading-tight">
                  Hybrid Multimodal GenAI for Solving Math Problems Containing Various Figures
                </h4>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  A novel approach combining visual encoders and language models to solve complex geometry and algebra problems involving diagrams.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">VLM</Badge>
                  <Badge variant="outline" className="text-xs">Math Reasoning</Badge>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

        {/* Papers & Projects Grid - RESTORED & ENHANCED */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

          {/* Detailed Publication List */}
          <Card className="hover-card h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                Journal Papers & Conferences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">

                {/* Journal Papers */}
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide border-b border-gray-100 pb-2">Journal Papers</h4>

                  <div className="border-l-4 border-blue-500 pl-4 py-1">
                    <h5 className="text-gray-900 font-bold text-base mb-1">Performance Improvement of LLMs for Regulatory Document Understanding based on Modified RAG Approach</h5>
                    <p className="text-xs text-gray-600 mb-1">Jae-Hyun Baek, Jon-Lark Kim | JKIIS 2025 (Published)</p>
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 text-xs">Best Paper Award 🏆</Badge>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4 py-1">
                    <h5 className="text-gray-900 font-bold text-base mb-1">MekaNet: WSI-based Tiny Object Detection</h5>
                    <p className="text-xs text-gray-600 mb-1">Jae-Hyun Baek (co-author) | Medical Image Analysis (Under Review)</p>
                    <Badge variant="outline" className="text-xs">Computer Vision</Badge>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4 py-1">
                    <h5 className="text-gray-900 font-bold text-base mb-1">Symmetric Sudoku-Type Games from Perfect Codes</h5>
                    <p className="text-xs text-gray-600 mb-1">Jae-Hyun Baek (co-author) | IEEE Transactions on Games (Submitted)</p>
                    <Badge variant="outline" className="text-xs">Combinatorial Games</Badge>
                  </div>
                </div>

                {/* Conference Presentations */}
                <div className="space-y-4 pt-4">
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide border-b border-gray-100 pb-2">Conference Presentations</h4>

                  <div className="border-l-4 border-green-500 pl-4 py-1">
                    <h5 className="text-gray-900 font-bold text-base mb-1">Sudoku-type Puzzles from Coding Theory (Invited Talk)</h5>
                    <p className="text-xs text-gray-600">11th Sino-Korea International Conference on Coding Theory | July 2025</p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4 py-1">
                    <h5 className="text-gray-900 font-bold text-base mb-1">Alignment Faking in LLMs: A Case Study (Oral)</h5>
                    <p className="text-xs text-gray-600">Korean Institute of Intelligent Systems | May 2025</p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4 py-1">
                    <h5 className="text-gray-900 font-bold text-base mb-1">Modified RAG Framework for Regulatory Documents</h5>
                    <p className="text-xs text-gray-600">KSIAM Conference | Apr 2025</p>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>

          {/* Featured Projects - RESTORED */}
          <Card className="hover-card h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-purple-600" />
                Engineering Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">

                <div className="group">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-gray-900 font-bold text-lg group-hover:text-purple-600 transition-colors">
                      EntropyMath
                    </h4>
                    <Badge className="bg-purple-100 text-purple-700">New!</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Agentic Tool Use Evaluation Leaderboard.</strong><br />
                    Built pipelines to measure "honest" reasoning capabilities of LLM Agents to solve benchmark contamination.
                  </p>
                  <a href="https://entropymath.com" target="_blank" className="text-xs text-blue-600 hover:underline flex items-center gap-1">
                    entropymath.com <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="w-full h-px bg-gray-100 my-4"></div>

                <div className="group">
                  <h4 className="text-gray-900 font-bold text-lg mb-2">SOGAMBOT.com</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>AI Chatbot for Sogang University (Team Leader).</strong><br />
                    Led the transformation of university-wide data into AI-ready formats. Managed full-stack development and RAG implementation.
                  </p>
                  <p className="text-xs text-gray-500 italic">Impact: Digital transformation of university administrative data.</p>
                </div>

                <div className="w-full h-px bg-gray-100 my-4"></div>

                <div className="group">
                  <h4 className="text-gray-900 font-bold text-lg mb-2">GPT-OSS-20B Persona Injection</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>HuggingFace Community Project.</strong><br />
                    Created and optimized fine-tuning datasets for persona injection, achieving 100+ downloads/week.
                  </p>
                  <a href="https://huggingface.co/datasets/LeBrony/buddha_oss_dataset" target="_blank" className="text-xs text-blue-600 hover:underline flex items-center gap-1">
                    View on HuggingFace <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="w-full h-px bg-gray-100 my-4"></div>

                <div className="group">
                  <h4 className="text-gray-900 font-bold text-lg mb-2">River-GNN Flood Forecasting</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Industry-Academia Collaboration (KICT).</strong><br />
                    Developing AI models for water level prediction and flood safety assessment using GNNs and TimeGPT.
                  </p>
                </div>

              </div>
            </CardContent>
          </Card>

        </div>

        {/* Teaching Experience & HateSlop Society - RESTORED & TRANSLATED */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

          {/* HateSlop Academic Society */}
          <Card className="hover-card h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-pink-600" />
                HateSlop: AI x Media Society
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-pink-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-gray-800 font-medium italic">
                    "Creating production-level media content beyond Slop using Generative AI."
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1 shrink-0">Engineer</Badge>
                    <div>
                      <h5 className="font-bold text-gray-900 text-sm">AI Commercial Festival</h5>
                      <p className="text-xs text-gray-600">
                        Planned and executed commercial AI content strategies. Built workflows for high-quality media generation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1 shrink-0">Tech</Badge>
                    <div>
                      <h5 className="font-bold text-gray-900 text-sm">Media Production Pipeline</h5>
                      <p className="text-xs text-gray-600">
                        Implemented technical pipelines for integrating various GenAI tools into creative workflows.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
                  <Award className="w-4 h-4 text-purple-600" />
                  <span className="text-xs text-gray-600 font-medium">1st Batch Certificate Completed (Engineer Track)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Teaching Experience */}
          <Card className="hover-card h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-orange-600" />
                Teaching Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">

                <div className="border-l-4 border-orange-500 pl-4 py-1">
                  <h5 className="text-gray-900 font-bold text-sm mb-1">Graduate Seminar Lecturer</h5>
                  <p className="text-xs text-gray-600">
                    Sogang University | "LLM Trends & Albatross Seminar" for undergraduates & graduates.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4 py-1">
                  <h5 className="text-gray-900 font-bold text-sm mb-1">High School AI Outreach</h5>
                  <p className="text-xs text-gray-600 mb-1">
                    Sogang Math Dept x Bokja Girls' High School
                  </p>
                  <ul className="text-xs text-gray-500 list-disc list-inside">
                    <li>"Viewing AI through 0 and 1" (2024)</li>
                    <li>"Textbook is all you need" (2025)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-4 py-1">
                  <h5 className="text-gray-900 font-bold text-sm mb-1">Teaching Assistant (MATLAB)</h5>
                  <p className="text-xs text-gray-600">
                    Sogang University Department of Mathematics | 1.5 Years
                  </p>
                </div>

              </div>
            </CardContent>
          </Card>

        </div>


        {/* Conference & Professional Activities - JOURNALISM */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <Newspaper className="w-6 h-6 text-indigo-600" />
            AI Technology Journalism
          </h2>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-bold text-gray-900">The Sogang Herald & IMDS Newsletter</h3>
              </div>
              <p className="text-gray-600 mt-2 text-sm">
                Analyzed global AI trends and communicated complex technologies to the public.
                Bridging the gap between technical research and broader impact.
              </p>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">

              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-xs text-blue-600 font-bold mb-2 uppercase tracking-wide">Coverage</div>
                <h4 className="font-bold text-gray-900 mb-2">AI Expo 2024</h4>
                <p className="text-sm text-gray-600">
                  Analyzed the latest trends in LLM applications and Generative AI solutions across industries.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-xs text-green-600 font-bold mb-2 uppercase tracking-wide">Coverage</div>
                <h4 className="font-bold text-gray-900 mb-2">World IT Show 2024</h4>
                <p className="text-sm text-gray-600">
                  Investigated on-device AI innovations and the integration of AI in consumer electronics.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-xs text-purple-600 font-bold mb-2 uppercase tracking-wide">Report</div>
                <h4 className="font-bold text-gray-900 mb-2">Google Cloud Summit 2024</h4>
                <p className="text-sm text-gray-600">
                  Reported on Google's enterprise AI strategies and cloud infrastructure advancements.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* AIM Intelligence Strategic Fit */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -ml-32 -mb-32"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Why AIM Intelligence?</h2>
            <p className="text-lg text-gray-300">
              Transforming "Formal Methods" into practical "AI Safety" guarantees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3">Safety via Formalism</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                I don't just find vulnerabilities; I structuralize them.
                Applying mathematical rigor to explain <strong>why</strong> alignment failures occur (e.g., Alignment Faking).
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3">Global Communication</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Experience in presenting at global venues (ISIS 2025).
                Ready to collaborate with global AI safety researchers and communicate complex ideas effectively in English.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">8-Week Impact</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Proposed Goal: Research methodology to induce Alignment Faking via Red Teaming.
                Delivering not just reports, but reproducible evaluation pipelines.
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}