
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Sparkles, Mail, Zap, ArrowRight } from 'lucide-react';

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
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 glass-effect-dark rounded-full mr-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Email <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">Summarizer</span>
            </h1>
          </div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Transform lengthy emails into clear, actionable summaries with one click
          </p>
        </div>

        {/* Main Input Card */}
        <Card className={`w-full max-w-4xl glass-effect-dark border-white/20 transition-all duration-500 ${
          isFocused ? 'animate-pulse-glow scale-105' : ''
        } animate-scale-in`}>
          <div className="p-8">
            <div className="space-y-6">
              {/* Email Input */}
              <div className="space-y-3">
                <label className="text-white/90 text-lg font-medium flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-yellow-400" />
                  Paste your email content here
                </label>
                <Textarea
                  placeholder="Copy and paste your email content here... I'll summarize the key points, action items, and important details for you."
                  value={emailContent}
                  onChange={(e) => setEmailContent(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="min-h-[200px] bg-white/10 border-white/20 text-white placeholder:text-white/50 text-lg resize-none focus:bg-white/15 focus:border-white/40 transition-all duration-300"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleSummarize}
                  disabled={!emailContent.trim() || isLoading}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                      Analyzing Email...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Zap className="w-5 h-5 mr-2" />
                      Summarize Email
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  )}
                </Button>
                
                {(emailContent || summary) && (
                  <Button
                    onClick={clearAll}
                    variant="outline"
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 py-4 px-8 rounded-xl transition-all duration-300"
                  >
                    Clear All
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Card>

        {/* Summary Results */}
        {summary && (
          <Card className="w-full max-w-4xl mt-8 glass-effect-dark border-white/20 animate-slide-up">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg mr-3">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Email Summary</h3>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <p className="text-white/90 text-lg leading-relaxed whitespace-pre-wrap">
                  {summary}
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Footer */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <p className="text-white/60 text-sm">
            Powered by AI • Ready for n8n integration
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailSummarizer;
