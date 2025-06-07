
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Sparkles, Mail, Zap, ArrowRight, Inbox } from 'lucide-react';

const EmailSummarizer = () => {
  const [emailContent, setEmailContent] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSummarize = async () => {
    if (!emailContent.trim()) return;
    
    setIsLoading(true);
    console.log('Summarizing email content:', emailContent);
    
    // Placeholder for n8n backend integration
    setTimeout(() => {
      setSummary("This is a placeholder summary. Your n8n backend integration will replace this with actual AI-powered email summarization.");
      setIsLoading(false);
    }, 2000);
  };

  const clearAll = () => {
    setEmailContent('');
    setSummary('');
  };

  return (
    <div className="min-h-screen lovable-gradient animate-gradient relative overflow-hidden">
      {/* Logo */}
      <div className="logo-container">
        <div className="glass-effect-dark rounded-xl px-3 py-2 animate-logo-pulse">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
              <Inbox className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="logo-text text-sm">InboxAI</div>
              <div className="text-xs text-white/70 font-medium">Smart Summaries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating background elements - smaller */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-48 h-48 bg-purple-900/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-indigo-900/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-violet-900/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 pt-20 md:pt-4">
        {/* Header - smaller */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <div className="p-2 glass-effect-dark rounded-full mr-3">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Email <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Summarizer</span>
            </h1>
          </div>
          <p className="text-sm md:text-base lg:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
            Transform lengthy emails into clear, actionable summaries with one click
          </p>
        </div>

        {/* Main Input Card - smaller */}
        <Card className={`w-full max-w-2xl glass-effect-dark border-white/20 transition-all duration-500 ${
          isFocused ? 'animate-pulse-glow scale-105' : ''
        } animate-scale-in hover:border-white/30 hover:shadow-2xl hover:shadow-purple-500/20`}>
          <div className="p-6">
            <div className="space-y-4">
              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-white/90 text-sm font-medium flex items-center">
                  <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
                  Paste your email content here
                </label>
                <div className="relative group">
                  <Textarea
                    placeholder="Copy and paste your email content here... I'll summarize the key points, action items, and important details for you."
                    value={emailContent}
                    onChange={(e) => setEmailContent(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-white/50 text-sm resize-none focus:bg-white/15 focus:border-white/40 transition-all duration-300 group-hover:bg-white/12 group-hover:border-white/30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleSummarize}
                  disabled={!emailContent.trim() || isLoading}
                  className="flex-1 bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 text-white font-semibold py-3 text-sm rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                      Analyzing...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      Summarize Email
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  )}
                </Button>
                
                {(emailContent || summary) && (
                  <Button
                    onClick={clearAll}
                    variant="outline"
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 py-3 px-6 rounded-xl transition-all duration-300 text-sm"
                  >
                    Clear All
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Card>

        {/* Summary Results - smaller */}
        {summary && (
          <Card className="w-full max-w-2xl mt-6 glass-effect-dark border-white/20 animate-slide-up">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg mr-2">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">Email Summary</h3>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-white/90 text-sm leading-relaxed whitespace-pre-wrap">
                  {summary}
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Footer */}
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <p className="text-white/60 text-xs">
            Powered by AI • Ready for n8n integration
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailSummarizer;
