import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { BrandLogo } from '../brand/BrandLogo';

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Brand Strategy & Governance Systems',
    budget: '$50k - $100k',
    timeline: '1-2 Months',
    brief: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleReset = () => {
    setStep(1);
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B0B0F]/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="bg-[#FCFCFD] text-[#0B0B0F] w-full max-w-2xl rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#0B0B0F]/20 relative overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#0B0B0F]/5 text-[#0B0B0F] flex items-center justify-center hover:bg-[#F31A3E] hover:text-white transition-colors"
        >
          <span className="text-base font-bold leading-none">✕</span>
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6 flex flex-col items-center text-center">
              <BrandLogo variant="transparent" width={160} />
              <h3 className="text-2xl font-heading font-black text-[#0B0B0F] mt-2">
                INITIATE PROJECT <span className="apex-gradient-text">BRIEF</span>
              </h3>
              <p className="text-xs text-[#0B0B0F]/60 mt-1">
                Partner with APEX CREATIVE for high-precision brand identity and web flagships.
              </p>
            </div>

            {/* Step Progress Bar */}
            <div className="flex items-center justify-between mb-8 px-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all ${
                    step >= s ? 'bg-[#0B0B0F] text-[#FCFCFD]' : 'bg-[#0B0B0F]/10 text-[#0B0B0F]/40'
                  }`}>
                    {s}
                  </div>
                  <span className="text-[11px] font-heading font-semibold text-[#0B0B0F]/70 hidden sm:inline">
                    {s === 1 ? 'Services' : s === 2 ? 'Budget & Scope' : 'Contact Details'}
                  </span>
                  {s < 3 && <div className="w-8 sm:w-16 h-[2px] bg-[#0B0B0F]/10 mx-1" />}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* STEP 1: SERVICE SELECTOR */}
              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                  <label className="text-xs font-heading font-bold uppercase tracking-wider text-[#0B0B0F]/80 block">
                    Select Primary Capability Scope
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Brand Strategy & Governance Systems',
                      'Dynamic Visuals & 3D Motion Design',
                      'Next-Gen Digital Flagship Web Apps',
                      'Integrated Campaign Architecture'
                    ].map((serv) => (
                      <button
                        type="button"
                        key={serv}
                        onClick={() => setFormData({ ...formData, service: serv })}
                        className={`p-4 rounded-xl text-left border text-xs font-heading font-bold transition-all ${
                          formData.service === serv 
                            ? 'bg-[#0B0B0F] text-[#FCFCFD] border-[#0B0B0F] shadow-md' 
                            : 'bg-[#0B0B0F]/5 text-[#0B0B0F] border-[#0B0B0F]/10 hover:bg-[#0B0B0F]/10'
                        }`}
                      >
                        {serv}
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3 rounded-full bg-[#0B0B0F] text-[#FCFCFD] text-xs font-heading font-bold uppercase tracking-wider hover:bg-[#7A2397] transition-colors"
                    >
                      <span>Next: Scope & Budget</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: BUDGET & TIMELINE */}
              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <div>
                    <label className="text-xs font-heading font-bold uppercase tracking-wider text-[#0B0B0F]/80 block mb-2">
                      Estimated Investment Budget
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {['$25k - $50k', '$50k - $100k', '$100k+'].map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`p-3 rounded-xl border text-xs font-mono font-bold text-center transition-all ${
                            formData.budget === b 
                              ? 'bg-[#F31A3E] text-white border-[#F31A3E] shadow-md' 
                              : 'bg-[#0B0B0F]/5 text-[#0B0B0F] border-[#0B0B0F]/10 hover:bg-[#0B0B0F]/10'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-heading font-bold uppercase tracking-wider text-[#0B0B0F]/80 block mb-2">
                      Target Execution Timeline
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {['Urgent (<1 Mo)', '1-2 Months', '3+ Months'].map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setFormData({ ...formData, timeline: t })}
                          className={`p-3 rounded-xl border text-xs font-mono font-bold text-center transition-all ${
                            formData.timeline === t 
                              ? 'bg-[#0B0B0F] text-[#FCFCFD] border-[#0B0B0F] shadow-md' 
                              : 'bg-[#0B0B0F]/5 text-[#0B0B0F] border-[#0B0B0F]/10 hover:bg-[#0B0B0F]/10'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-2.5 rounded-full bg-[#0B0B0F]/5 text-[#0B0B0F] text-xs font-heading font-bold"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-3 rounded-full bg-[#0B0B0F] text-[#FCFCFD] text-xs font-heading font-bold uppercase tracking-wider hover:bg-[#7A2397] transition-colors"
                    >
                      <span>Next: Contact Details</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: DETAILS & SUBMIT */}
              {step === 3 && (
                <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono font-bold text-[#0B0B0F]/70 uppercase block mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alexandra Vance"
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0B0F]/5 border border-[#0B0B0F]/15 text-xs focus:ring-2 focus:ring-[#F31A3E] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono font-bold text-[#0B0B0F]/70 uppercase block mb-1">Corporate Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alexandra@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0B0F]/5 border border-[#0B0B0F]/15 text-xs focus:ring-2 focus:ring-[#F31A3E] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono font-bold text-[#0B0B0F]/70 uppercase block mb-1">Company / Organization</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Global Corp"
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0B0F]/5 border border-[#0B0B0F]/15 text-xs focus:ring-2 focus:ring-[#F31A3E] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono font-bold text-[#0B0B0F]/70 uppercase block mb-1">Project Brief Summary</label>
                    <textarea
                      rows={3}
                      value={formData.brief}
                      onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                      placeholder="Describe your vision, goals, and key deliverables..."
                      className="w-full h-24 px-4 py-3 rounded-xl bg-[#0B0B0F]/5 border border-[#0B0B0F]/15 text-xs focus:ring-2 focus:ring-[#F31A3E] focus:outline-none resize-none leading-relaxed"
                    />
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-2.5 rounded-full bg-[#0B0B0F]/5 text-[#0B0B0F] text-xs font-heading font-bold"
                    >
                      Back
                    </button>
                    
                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-full apex-gradient-bg text-[#FCFCFD] font-heading font-bold text-xs uppercase tracking-wider shadow-xl shadow-[#F31A3E]/30 hover:scale-105 transition-transform"
                    >
                      <span>Submit Project Brief</span>
                    </button>
                  </div>
                </motion.div>
              )}

            </form>
          </div>
        ) : (
          /* Confirmation Success State */
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#03A7AE]/20 border-2 border-[#03A7AE] flex items-center justify-center mx-auto text-[#03A7AE]">
              <span className="text-2xl font-black">✓</span>
            </div>

            <h3 className="text-3xl font-heading font-black text-[#0B0B0F]">
              PROJECT BRIEF <span className="apex-gradient-text">RECEIVED</span>
            </h3>

            <p className="text-sm text-[#0B0B0F]/70 max-w-md mx-auto">
              Thank you, <strong className="text-[#0B0B0F]">{formData.name}</strong>. Our senior brand architect team has logged your inquiry for <strong className="text-[#7A2397]">{formData.company}</strong>.
            </p>

            <div className="p-4 rounded-2xl bg-[#0B0B0F] text-[#FCFCFD] text-left text-xs font-mono space-y-2 max-w-md mx-auto">
              <div className="text-[#F31A3E] font-bold">CONFIRMATION BLUEPRINT:</div>
              <div>Scope: {formData.service}</div>
              <div>Budget: {formData.budget}</div>
              <div>Timeline: {formData.timeline}</div>
              <div>Assigned Architect Response: Within 24 Hours</div>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-full bg-[#0B0B0F] text-[#FCFCFD] font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#7A2397] transition-colors"
            >
              Return to Website
            </button>
          </div>
        )}

      </motion.div>
    </div>
  );
};

