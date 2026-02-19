
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import GlassCard from './GlassCard.tsx';
import { CURRICULUM_DATA, CAREER_HISTORY } from '../constants.tsx';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AIChatAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIChatAssistant: React.FC<AIChatAssistantProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '안녕하세요! ProPortfoliX의 AI 교육 컨설턴트입니다. 교육 과정이나 커리어에 대해 궁금한 점이 있으신가요?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemInstruction = `
        You are an AI Education Consultant for ProPortfoliX, representing Jimin Kim.
        Jimin Kim is a Senior AI Educator and SW Education Specialist.
        Available Curriculums: ${JSON.stringify(CURRICULUM_DATA)}
        Career History: ${JSON.stringify(CAREER_HISTORY)}
        
        Guidelines:
        1. Be professional, encouraging, and helpful.
        2. Answer questions specifically about the curriculums offered (GenAI, Teacher training, Python data analysis).
        3. If asked about career advice, use Jimin's background as a reference for success.
        4. Keep responses concise and formatted with markdown if needed.
        5. Speak in polite Korean (Haeyo-che).
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages.map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }]
        })), { role: 'user', parts: [{ text: userMsg }] }],
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      const aiResponse = response.text || '죄송합니다. 답변을 생성하는 중에 문제가 발생했습니다.';
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: '연결 상태가 좋지 않습니다. 나중에 다시 시도해 주세요.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-end p-4 pointer-events-none">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto" onClick={onClose} />
      
      <div className="relative w-full max-w-md h-[80vh] flex flex-col pointer-events-auto">
        <GlassCard hoverEffect={false} className="flex flex-col h-full !p-0 overflow-hidden shadow-2xl border-white/20">
          {/* Header */}
          <div className="p-4 border-b border-white/10 bg-gradient-primary flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <span className="text-lg">🤖</span>
              </div>
              <h3 className="font-bold text-white">AI 교육 컨설턴트</h3>
            </div>
            <button onClick={onClose} className="text-white/70 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-900/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-br-none' 
                  : 'bg-white/10 text-gray-200 border border-white/10 rounded-bl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 p-3 rounded-2xl rounded-bl-none border border-white/10">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10 bg-slate-900">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="궁금한 내용을 입력하세요..."
                className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-blue-600 p-2 rounded-xl text-white hover:bg-blue-500 transition-colors disabled:opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default AIChatAssistant;
