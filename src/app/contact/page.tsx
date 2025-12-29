'use client';

import React, { useEffect } from 'react';
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
  Send,
  Shield,
  Globe,
  Brain
} from 'lucide-react';

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact | Jae-Hyun Baek - AI Safety Researcher';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact Jae-Hyun Baek for collaboration on AI Safety, Alignment Faking research, and Formal Methods.');
    }
  }, []);

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
            Interested in <strong>AI Safety</strong>, <strong>Formal Verification</strong>, or discussing <strong>Alignment Faking</strong>?
            I am ready to collaborate with the AIM Intelligence team.
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
                  <a href="https://www.linkedin.com/in/jae-hyun-baek-516899227" target="_blank" rel="noopener noreferrer">
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
                  Areas of Contribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-indigo-600">🛡️</span>
                      AIM Intelligence Fit
                    </h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p><strong>Formal Methods</strong>: Applying mathematical rigor to AI Safety guarantees.</p>
                      <p><strong>Red Teaming</strong>: Designing evaluation pipelines for "Alignment Faking".</p>
                      <p><strong>Engineering</strong>: Bridging abstract research with scalable, production-grade code (EntropyMath).</p>
                    </div>
                    <div className="flex flex-wrap gap-1 text-xs mt-3">
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">AI Safety</span>
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full">Red Teaming</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full">Formal Verification</span>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Evaluation & Metrics</h4>
                    <p className="text-sm text-gray-600">
                      Building leaderboards (EntropyMath) and designing novel metrics for "Honest" reasoning in Agents.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Global Research</h4>
                    <p className="text-sm text-gray-600">
                      Experience presenting at international venues (ISIS 2025) and collaborating in English.
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
                    <span className="text-sm text-gray-600">M.S. Student & Team Leader</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Availability</span>
                    <span className="text-sm text-blue-600">Ready for Internship (Winter 2026)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Focus</span>
                    <span className="text-sm text-purple-600">AIM Intelligence Application</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Response Time</span>
                    <span className="text-sm text-green-600">Usually within 24 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-900 via-blue-900 to-black rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-20 rounded-full transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500 opacity-20 rounded-full transform -translate-x-12 translate-y-12"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4">Let's Build Safe & Trustworthy AI</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                I am eager to contribute my <strong>mathematical background</strong> and <strong>engineering skills</strong> to
                AIM Intelligence's mission of securing the AI ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="hover:bg-blue-50">
                  <a href="mailto:bjh3641@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Contact for Internship
                  </a>
                </Button>
                <Button asChild size="lg" variant="secondary" className="hover:bg-blue-50">
                  <a href="https://github.com/LeGenAI" target="_blank" rel="noopener noreferrer">
                    <span className="mr-2">🚀</span>
                    View Portfolio Code
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}