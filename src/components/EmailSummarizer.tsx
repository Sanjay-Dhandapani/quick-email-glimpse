
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Sparkles, Mail, Zap, ArrowRight, Brain, CheckCircle2, AlertCircle } from 'lucide-react';

const EmailSummarizer = () => {
  const [emailContent, setEmailContent] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState('');

  const handleSummarize = async () => {
    if (!emailContent.trim()) return;
    
    setIsLoading(true);
    setError('');
    console.log('Summarizing email content:', emailContent);
    
    try {
      const response = await fetch('https://n8nsanjaytest.onrender.com/webhook/4f410bbc-47e1-4856-93b0-7e53515390ce', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailContent }),
      });

      if (!response.ok) {
        throw new Error('Failed to summarize email');
      }

      const data = await response.json();
      setSummary(data.summary || "Summary generated successfully from your n8n backend.");
    } catch (err) {
      setError('Failed to connect to backend. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const clearAll = () => {
    setEmailContent('');
    setSummary('');
    setError('');
  };

  return (
    <div className="min-h-screen lovable-gradient-dark animate-gradient relative overflow-hidden">
      {/* Enhanced Logo */}
      <div className="logo-container">
        <div className="glass-effect-dark rounded-xl px-3 py-2 animate-logo-pulse hover:scale-110 transition-all duration-500">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-lg animate-pulse-glow">
              <Brain className="w-4 h-4 text-white animate-bounce" style={{ animationDelay: '0.5s' }} />
            </div>
            <div>
              <div className="logo-text text-sm bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">SmartSum</div>
              <div className="text-xs text-white/70 font-medium">Email Intelligence</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-br from-purple-900/30 to-blue-900/20 rounded-full blur-3xl animate-float opacity-70"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-emerald-900/30 to-teal-900/20 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-br from-violet-900/25 to-indigo-900/20 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-10 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-900/20 to-purple-900/15 rounded-full blur-2xl animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-gradient-to-br from-teal-900/25 to-emerald-900/15 rounded-full blur-2xl animate-float opacity-45" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 pt-20 md:pt-4">
        {/* Enhanced Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <div className="p-2 glass-effect-dark rounded-full mr-3 animate-pulse-glow">
              <Mail className="w-5 h-5 text-white animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white animate-gradient bg-gradient-to-r from-emerald-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Email <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Summarizer</span>
            </h1>
          </div>
          <p className="text-sm md:text-base lg:text-lg text-white/80 max-w-xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Transform lengthy emails into clear, actionable summaries with AI intelligence
          </p>
        </div>

        {/* Enhanced Main Input Card */}
        <Card className={`w-full max-w-2xl glass-effect-dark border-white/20 transition-all duration-700 transform ${
          isFocused ? 'animate-pulse-glow scale-105 border-white/40' : 'hover:border-white/30 hover:scale-102'
        } animate-scale-in hover:shadow-2xl hover:shadow-purple-500/20`} style={{ animationDelay: '0.5s' }}>
          <div className="p-6">
            <div className="space-y-4">
              {/* Enhanced Email Input */}
              <div className="space-y-2">
                <label className="text-white/90 text-sm font-medium flex items-center animate-slide-up" style={{ animationDelay: '0.7s' }}>
                  <Sparkles className="w-4 h-4 mr-2 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
                  Paste your email content here
                </label>
                <div className="relative group">
                  <Textarea
                    placeholder="Copy and paste your email content here... I'll analyze and summarize the key points, action items, and important details for you."
                    value={emailContent}
                    onChange={(e) => setEmailContent(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-white/50 text-sm resize-none focus:bg-white/15 focus:border-white/40 transition-all duration-500 group-hover:bg-white/12 group-hover:border-white/30 hover:shadow-lg hover:shadow-blue-500/20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-emerald-500/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none animate-gradient"></div>
                </div>
              </div>

              {/* Enhanced Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 animate-slide-up" style={{ animationDelay: '0.9s' }}>
                <Button
                  onClick={handleSummarize}
                  disabled={!emailContent.trim() || isLoading}
                  className="flex-1 bg-gradient-to-r from-emerald-700 via-blue-700 to-purple-700 hover:from-emerald-800 hover:via-blue-800 hover:to-purple-800 text-white font-semibold py-3 text-sm rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none animate-gradient hover:animate-pulse-glow"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                      <span className="animate-pulse">Analyzing...</span>
                      <div className="ml-2 flex space-x-1">
                        <div className="w-1 h-1 bg-white rounded-full animate-bounce"></div>
                        <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Zap className="w-4 h-4 mr-2 animate-pulse" />
                      Summarize Email
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  )}
                </Button>
                
                {(emailContent || summary) && (
                  <Button
                    onClick={clearAll}
                    variant="outline"
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 py-3 px-6 rounded-xl transition-all duration-500 text-sm hover:scale-105"
                  >
                    Clear All
                  </Button>
                )}
              </div>

              {/* Error Display */}
              {error && (
                <div className="flex items-center space-x-2 text-red-400 text-sm animate-slide-up">
                  <AlertCircle className="w-4 h-4" />
                  <span>{error}</span>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Enhanced Summary Results */}
        {summary && (
          <Card className="w-full max-w-2xl mt-6 glass-effect-dark border-white/20 animate-slide-up">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg mr-2 animate-pulse-glow">
                  <CheckCircle2 className="w-4 h-4 text-white animate-bounce" />
                </div>
                <h3 className="text-lg font-bold text-white">Email Summary</h3>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <p className="text-white/90 text-sm leading-relaxed whitespace-pre-wrap">
                  {summary}
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Enhanced Footer */}
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '1.1s' }}>
          <p className="text-white/60 text-xs flex items-center justify-center space-x-2">
            <span>Powered by AI</span>
            <Sparkles className="w-3 h-3 animate-spin" style={{ animationDuration: '2s' }} />
            <span>Connected to n8n</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailSummarizer;
