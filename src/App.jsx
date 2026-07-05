import React, { useState, useEffect } from 'react';
import profileImg from './assets/profile.png';

const translations = {
  bn: {
    // Header & Navigation
    'nav_services': 'সার্ভিস সমূহ',
    'nav_how_it_works': 'যেভাবে কাজ করে',
    'nav_faqs': 'প্রশ্নোত্তর',
    'nav_contact': 'যোগাযোগ',
    'free_consultation': 'ফ্রি পরামর্শ',
    'by_avijit_short': 'অভিজিৎ চৌধুরী দ্বারা',
    'by_avijit': 'অভিজিৎ চৌধুরী দ্বারা',
    'free_advice': 'ফ্রি পরামর্শ নিন',

    // Hero Section
    'hero_title_1': 'আপনার সিবিল বুঝুন।',
    'hero_title_2': 'স্কোর উন্নত করুন।',
    'hero_desc': 'ভুলত্রুটির জন্য আপনার সিবিল (CIBIL) রিপোর্টটি পরীক্ষা করে দেখুন। আমরা আপনাকে সঠিক করতে সাহায্য করব যেন আপনি আত্মবিশ্বাসের সাথে লোনের আবেদন করতে পারেন।',
    'hero_btn_advice': 'ফ্রি পরামর্শ',
    'hero_btn_wa': 'হোয়াটসঅ্যাপ পরামর্শ',
    'stat_checked': 'রিপোর্ট চেক করা হয়েছে',
    'stat_confidential': 'গোপনীয়',
    'stat_experience': 'অভিজ্ঞতা',
    'stat_checked_v': '৫০০+',
    'stat_confidential_v': '১০০%',
    'stat_experience_v': '৫+ বছর',
    'hero_badge_score': '৭৫০+ স্কোর',
    'hero_badge_verified': 'যাচাইকৃত স্কোর',
    'hero_badge_excellent': '↑ চমৎকার প্রোফাইল',
    'hero_badge_target': 'টার্গেট স্কোর',
    'hero_badge_safe': '১০০% নিরাপদ ও গোপনীয়',
    'lead_credit_expert': 'প্রধান সিবিল কনসালটেন্ট',
    'expert_badge': 'সিবিল কনসালটেন্ট',
    'pro_help': 'পেশাদার ক্রেডিট সহায়তা',

    // Services Section
    'services_heading': 'আমাদের সেবাসমূহ',
    'services_subheading': 'আমরা আপনার ক্রেডিট রিপোর্ট পরীক্ষা এবং সংশোধন করার বিষয়ে পরামর্শ দিয়ে থাকি।',
    'service_check_title': 'ক্রেডিট রিপোর্ট চেক',
    'service_score_title': 'স্কোর বৃদ্ধির পরিকল্পনা',
    'service_fix_title': 'রিপোর্টের ভুল সংশোধন',
    'service_why_title': 'কেন লোন বাতিল হলো',
    'service_fake_title': 'ফেক লোন চেক',
    'service_step_title': 'ধাপে ধাপে গাইড',
    'tag_important': 'গুরুত্বপূর্ণ',
    'tag_most_popular': 'সবচেয়ে জনপ্রিয়',
    'tag_fix_errors': 'ভুল সংশোধন',
    'tag_loan_help': 'লোন সহায়তা',
    'tag_safety': 'নিরাপত্তা',
    'tag_your_plan': 'আপনার পরিকল্পনা',
    'talk_now': 'কথা বলুন',
    'expert_guidance_by': 'বিশেষজ্ঞ পরামর্শদাতা',
    'spotlight_quote': '“আমি ব্যক্তিগতভাবে প্রতিটি রিপোর্ট পরীক্ষা করি এবং আপনাকে সৎ ও গোপনীয় পরামর্শ দিই।”',
    'spotlight_btn': 'ব্যক্তিগত পরামর্শ বুক করুন',

    // How It Works Section
    'how_heading': 'যেভাবে আমরা আপনাকে সাহায্য করি',
    'how_subheading': 'আপনার ক্রেডিট হিস্ট্রি পরিষ্কার করতে সাধারণ ৩টি ধাপের পরামর্শ।',
    'how_step_1_title': 'জনাব অভিজিতের সাথে যুক্ত হন',
    'how_step_2_title': 'ক্রেডিট রিপোর্ট শেয়ার করুন',
    'how_step_3_title': 'সম্পূর্ণ রিপোর্ট চেক',
    'how_step_4_title': 'ব্যক্তিগত কল ও পরামর্শ',
    'how_step_5_title': 'ধাপে ধাপে পরিকল্পনা',
    'step_label': 'ধাপ',
    'bridge_next_step': 'পরবর্তী পদক্ষেপ: কাজ শুরু করা',
    'how_cta_btn': 'আজই স্কোর উন্নয়ন শুরু করুন',

    // Why Choose Us Section
    'why_heading': 'কেন সিবিল ইম্প্রুভ',
    'why_subheading': 'আমরা প্রতিটি ক্লায়েন্টের জন্য সততা, গোপনীয়তা এবং নিবেদিত পরামর্শ প্রদানে বিশ্বাসী।',
    'why_direct_title': 'সরাসরি ব্যক্তিগত পরামর্শ',
    'why_safe_title': '১০০% নিরাপদ ও গোপনীয় ডাটা',
    'why_plan_title': 'শুধুমাত্র আপনার জন্য তৈরি পরিকল্পনা',
    'why_honest_title': '১০০% সৎ ও স্বচ্ছ',
    'why_help_title': 'শুরু থেকে শেষ পর্যন্ত সহায়তা',
    'why_rbi_title': '১০০% আরবিআই (RBI) নিয়ম অনুসারী',

    // FAQ Section
    'faq_heading': 'সাধারণ কিছু প্রশ্ন',
    'faq_more_q': 'আপনার রিপোর্ট নিয়ে কোনো নির্দিষ্ট প্রশ্ন আছে কি?',
    'faq_more_btn': 'হোয়াটসঅ্যাপে জিজ্ঞাসা করুন',
    'faq_q1': 'আপনারা কি আমার ক্রেডিট স্কোর বাড়াতে পারেন?',
    'faq_a1': 'কেউ এর কোনো গ্যারান্টি দিতে পারে না। আমরা ভুলগুলো খুঁজে বের করি এবং সততার সাথে পরামর্শ দিই।',
    'faq_q2': 'আপনারা কি খারাপ রেকর্ড মুছে দিতে পারেন?',
    'faq_a2': 'শুধুমাত্র ভুল বা ডুপ্লিকেট তথ্যগুলোই অফিসিয়াল প্রক্রিয়ার মাধ্যমে সংশোধন করা সম্ভব।',
    'faq_q3': 'আমার তথ্য কি নিরাপদ থাকবে?',
    'faq_a3': 'হ্যাঁ। আপনার ডাটা ১০০% ব্যক্তিগত থাকবে এবং কখনো শেয়ার করা হবে না।',
    'faq_q4': 'আপনারা কি কোনো ব্যাংকের সাথে কাজ করেন?',
    'faq_a4': 'না। আমরা সম্পূর্ণ স্বাধীন এবং শুধুমাত্র আপনার সুবিধার জন্য কাজ করি।',

    // Contact Section
    'contact_heading': 'যোগাযোগ করুন',
    'contact_subheading': 'আজই একটি ভালো ক্রেডিট প্রোফাইল গড়ার যাত্রা শুরু করুন। আমাদের বার্তা পাঠান।',
    'contact_btn_title': 'যোগাযোগের মাধ্যম',
    'contact_form_title': 'আপনার রিভিউ বুক করুন',
    'form_label_name': 'আপনার পুরো নাম *',
    'form_label_phone': 'ফোন নম্বর *',
    'form_label_email': 'ইমেল ঠিকানা *',
    'form_label_message': 'আপনার সমস্যাটি আমাদের জানান *',
    'form_placeholder_name': 'উদা: রাজেশ কুমার',
    'form_placeholder_phone': '+৯১ XXXXX XXXXX',
    'form_placeholder_email': 'yourname@gmail.com',
    'form_placeholder_message': 'উদা: ২০২৩ সালে কার্ড সেটেলমেন্টের কারণে সিবিল স্কোর ৬২০ হয়েছে। হোম লোন পেতে পরামর্শ প্রয়োজন।',
    'form_consent_part1': 'আমি আমার রিপোর্টের বিষয়ে যোগাযোগ করার অনুমতি দিচ্ছি। স্কোর পরিবর্তনের কোনো গ্যারান্টি',
    'form_consent_guarantee': 'নেই',
    'form_submit': 'পরামর্শ বুক করুন',
    'channel_wa': 'অফিসিয়াল হোয়াটসঅ্যাপ',
    'channel_tel': 'সরাসরি টেলিফোন',
    'channel_email': 'অফিসিয়াল ইমেল',
    'reply_instant': 'তাৎক্ষণিক উত্তর',
    'disclaimer_label': 'দাবিত্যাগ:',
    'disclaimer_text': 'এটি একটি স্বাধীন ক্রেডিট পরামর্শ সেবা। ট্রান্সইউনিয়ন সিবিল (TransUnion CIBIL) বা কোনো ব্যাংকের সাথে যুক্ত নয়। আমরা কোনো নির্দিষ্ট স্কোর পরিবর্তন বা লোন অনুমোদনের গ্যারান্টি দিই না।',
    'rights_reserved': 'সর্বস্বত্ব সংরক্ষিত।',

    // Modal
    'modal_ready': 'আবেদন প্রস্তুত!',
    'modal_desc': 'আপনার বিবরণ এখন পাঠান।',
    'modal_btn_wa': 'হোয়াটসঅ্যাপের মাধ্যমে পাঠান',
    'modal_btn_email': 'ইমেলের মাধ্যমে পাঠান',
  }
};

function CibilMeter() {
  const [score, setScore] = useState(300);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScore(782);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const needleRotation = -90 + ((score - 300) / 600) * 180;

  return (
    <div className="bg-white/95 backdrop-blur-sm border border-slate-200/80 shadow-2xl rounded-2xl p-4 w-[240px] flex flex-col items-center select-none">
      <div className="relative w-full aspect-[200/120] flex justify-center overflow-visible">
        <svg viewBox="0 0 200 120" className="w-[180px] h-[108px] overflow-visible">
          {/* Semicircle Track Segments */}
          <path d="M 30 100 A 70 70 0 0 1 50.5 50.5" fill="none" stroke="#ef4444" strokeWidth="12" strokeLinecap="round" />
          <path d="M 50.5 50.5 A 70 70 0 0 1 100 30" fill="none" stroke="#f97316" strokeWidth="12" />
          <path d="M 100 30 A 70 70 0 0 1 149.5 50.5" fill="none" stroke="#84cc16" strokeWidth="12" />
          <path d="M 149.5 50.5 A 70 70 0 0 1 170 100" fill="none" stroke="#22c55e" strokeWidth="12" strokeLinecap="round" />

          {/* Segment Labels */}
          <text x="20" y="115" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle" className="font-heading">POOR</text>
          <text x="45" y="42" fill="#f97316" fontSize="8" fontWeight="bold" textAnchor="middle" className="font-heading">FAIR</text>
          <text x="155" y="42" fill="#84cc16" fontSize="8" fontWeight="bold" textAnchor="middle" className="font-heading">GOOD</text>
          <text x="180" y="115" fill="#22c55e" fontSize="8" fontWeight="bold" textAnchor="middle" className="font-heading">EXCELLENT</text>

          {/* Center Hub & Needle */}
          <g 
            style={{ 
              transform: `rotate(${needleRotation}deg)`, 
              transformOrigin: '100px 100px',
              transition: 'transform 1.8s cubic-bezier(0.25, 1, 0.5, 1)' 
            }}
          >
            <path d="M 97 100 L 100 25 L 103 100 Z" fill="#1e293b" />
            <circle cx="100" cy="100" r="5" fill="#ffffff" />
          </g>
          <circle cx="100" cy="100" r="9" fill="#1e293b" />
          <circle cx="100" cy="100" r="3.5" fill="#cbd5e1" />
        </svg>

        <div className="absolute bottom-0 text-center flex flex-col items-center">
          <span className="text-[10px] tracking-wider text-slate-400 font-bold uppercase">CIBIL SCORE</span>
          <span className="text-3xl font-extrabold text-slate-800 leading-none mt-0.5">{score}</span>
          <span className="mt-1.5 px-3 py-0.5 rounded-full text-[10px] font-extrabold tracking-wide bg-emerald-100 text-emerald-800 border border-emerald-200">
            GOOD
          </span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState('en');
  const t = (key, defaultVal) => {
    return translations[lang]?.[key] || defaultVal;
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '', consent: false });
  const [showModal, setShowModal] = useState(false);
  const [leadUrls, setLeadUrls] = useState({ whatsapp: '#', email: '#' });

  const faqs = [
    { q: t('faq_q1', 'Can you increase my credit score?'), a: t('faq_a1', 'No one can guarantee that. We find mistakes and guide you honestly.') },
    { q: t('faq_q2', 'Can you remove bad records?'), a: t('faq_a2', 'Only wrong or duplicate entries can be corrected through official process.') },
    { q: t('faq_q3', 'Is my information safe?'), a: t('faq_a3', 'Yes. Your data is 100% private and never shared.') },
    { q: t('faq_q4', 'Do you work with any bank?'), a: t('faq_a4', 'No. We are fully independent and work only for your benefit.') },
  ];

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(p => ({ ...p, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, message, consent } = formData;
    if (!name || !phone || !email || !message || !consent) return alert('Please fill all fields.');
    const msg = `*Consultation Request*\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n*Message:* ${message}`;
    setLeadUrls({
      whatsapp: `https://wa.me/919609290670?text=${encodeURIComponent(msg)}`,
      email: `mailto:avijit.chowdhury007@gmail.com?subject=${encodeURIComponent(`Consultation - ${name}`)}&body=${encodeURIComponent(msg.replace(/\*/g, ''))}`,
    });
    setShowModal(true);
    setFormData({ name: '', phone: '', email: '', message: '', consent: false });
  };

  return (
    <div className={`min-h-screen bg-white font-body text-slate-600 ${lang === 'bn' ? 'font-bangla' : ''}`}>

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
        <div className="max-w-6xl mx-auto px-5 h-16 sm:h-20 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
            <span className="font-heading text-navy-900 text-lg sm:text-2xl tracking-tight font-extrabold whitespace-nowrap">Cibil <span className="text-blue-600">Improve</span></span>
            <span className="text-[9px] sm:text-xs text-slate-700 font-bold bg-gold-100/80 px-1.5 py-0.5 rounded-md border border-gold-300/60 whitespace-nowrap">{t('by_avijit_short', 'by Mr. Avijit Chowdhury')}</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-base font-bold text-slate-600">
            <a href="#services" className="hover:text-blue-600 transition-colors">{t('nav_services', 'Services')}</a>
            <a href="#how-it-works" className="hover:text-blue-600 transition-colors">{t('nav_how_it_works', 'How It Works')}</a>
            <a href="#faqs" className="hover:text-blue-600 transition-colors">{t('nav_faqs', 'FAQs')}</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">{t('nav_contact', 'Contact')}</a>
          </nav>

          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs font-semibold">
              <button 
                type="button"
                onClick={() => setLang('en')} 
                className={`px-2 py-1 rounded transition-all ${lang === 'en' ? 'bg-white text-navy-900 shadow-xs font-bold' : 'text-slate-500 hover:text-navy-900 font-normal'}`}
              >
                EN
              </button>
              <button 
                type="button"
                onClick={() => setLang('bn')} 
                className={`px-2 py-1 rounded transition-all ${lang === 'bn' ? 'bg-white text-navy-900 shadow-xs font-bold' : 'text-slate-500 hover:text-navy-900 font-normal'}`}
              >
                বাংলা
              </button>
            </div>

            <a href="#contact" className="hidden md:inline-flex btn-primary-navy text-sm font-heading font-extrabold px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-105">
              {t('free_consultation', 'Free Consultation')}
            </a>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-navy-900 p-1.5 focus:outline-none">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 px-5 py-5 flex flex-col gap-4 text-base font-bold text-navy-900 shadow-xl">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600 py-1.5 border-b border-slate-100 last:border-0">{t('nav_services', 'Services')}</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600 py-1.5 border-b border-slate-100 last:border-0">{t('nav_how_it_works', 'How It Works')}</a>
            <a href="#faqs" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600 py-1.5 border-b border-slate-100 last:border-0">{t('nav_faqs', 'FAQs')}</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600 py-1.5 border-b border-slate-100 last:border-0">{t('nav_contact', 'Contact')}</a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/50 via-white to-white border-b border-slate-100">
        {/* Subtle background dot matrix pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

        <div className="max-w-6xl mx-auto px-5 pt-3 pb-6 md:py-10 lg:py-14 relative z-10">

          {/* === MOBILE HERO (Tier 1 Composition, Zero Overlap, Rich BG) === */}
          <div className="lg:hidden flex flex-col items-center">
            
            {/* Image Container with editorial background layer */}
            <div className="relative w-full flex justify-center pt-1 pb-0">
              
              {/* Typographic Backdrop Watermark (Editorial/Magazine style) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] select-none pointer-events-none text-center w-full">
                <span className="font-heading font-extrabold text-[68px] sm:text-[90px] tracking-tighter text-slate-100/80 leading-none block">
                  {t('hero_badge_score', '750+ SCORE')}
                </span>
              </div>

              {/* Glowing gradient blobs & geometric rings */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-full bg-gradient-to-tr from-gold-400/30 via-amber-200/40 to-blue-200/30 blur-2xl"></div>
                <div className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full border border-dashed border-slate-200/80"></div>
              </div>

              {/* Floating Fintech Widget 1 (Top Left) */}
              <div className="absolute top-6 left-2 sm:left-10 z-20 bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-lg rounded-xl p-2.5 flex items-center gap-2.5 animate-float">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 font-heading font-bold text-xs">
                  780+
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-heading font-semibold text-navy-900">{t('hero_badge_target', 'Target Score')}</div>
                  <div className="text-[8px] text-emerald-600 font-medium">{t('hero_badge_excellent', '↑ Excellent Profile')}</div>
                </div>
              </div>

              {/* Floating Fintech Widget 2 (Left Side) */}
              <div className="absolute top-32 left-2 sm:left-10 z-20 bg-navy-900/90 backdrop-blur-md border border-white/10 shadow-lg rounded-xl px-3 py-2 flex items-center gap-1.5 animate-float" style={{ animationDelay: '1.5s' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                <span className="text-[9px] font-heading text-white tracking-wide">{t('hero_badge_safe', '100% Safe & Private')}</span>
              </div>

              {/* CIBIL Meter Card floating in the background on mobile */}
              <div className="absolute top-6 left-1/2 -translate-x-4 sm:-translate-x-2 z-0 scale-90 sm:scale-95 origin-center">
                <div className="animate-float" style={{ animationDelay: '0.8s' }}>
                  <CibilMeter />
                </div>
              </div>

              {/* Person image framed with balanced 22% bottom fade */}
              <div className="relative z-10 flex justify-center w-full">
                <img
                  src={profileImg}
                  alt="Mr. Avijit Chowdhury"
                  className="w-[280px] sm:w-[320px] max-h-[300px] sm:max-h-[340px] object-cover object-top drop-shadow-2xl [mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)]"
                />
              </div>

              {/* Single-Line Name & Designation Badge */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 w-max max-w-[95%]">
                <div className="bg-navy-900/95 backdrop-blur-md text-white px-4 py-2 rounded-full shadow-xl border border-white/15 flex items-center justify-center gap-2 text-[11px] sm:text-xs font-heading whitespace-nowrap">
                  <span className="font-semibold text-white">Mr. Avijit Chowdhury</span>
                  <span className="text-gold-400">|</span>
                  <span className="text-gold-400 uppercase tracking-wider text-[9px] sm:text-[10px]">{t('expert_badge', 'Cibil Consultant')}</span>
                </div>
              </div>
            </div>

            {/* Content Section (Sits cleanly below with normal spacing, ZERO collision) */}
            <div className="relative z-20 mt-2 sm:mt-4 w-full max-w-md text-center">
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl shadow-slate-200/50 border border-slate-100">
                
                <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-[10px] font-heading font-semibold uppercase tracking-wider mb-2.5">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
                  {t('pro_help', 'Professional Credit Help')}
                </div>

                <h1 className="font-heading text-navy-900 text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-2.5">
                  {t('hero_title_1', 'Understand Your CIBIL.')}<br />
                  <span className="text-blue-600">{t('hero_title_2', 'Improve Your Score.')}</span>
                </h1>

                <div className="flex flex-col sm:flex-row gap-2.5">
                  <a href="#contact" className="flex-1 justify-center items-center btn-primary-navy font-heading text-xs sm:text-sm py-3.5 rounded-xl transition-all shadow-md shadow-navy-900/10">
                    {t('free_consultation', 'Free Consultation')}
                  </a>
                  <a href="https://wa.me/919609290670" target="_blank" rel="noopener" className="flex-1 justify-center items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-heading text-xs sm:text-sm py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg shadow-green-600/15 flex">
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.123.553 4.118 1.518 5.851L0 24l6.335-1.652C8.012 23.32 9.96 24 11.999 24 18.626 24 24 18.627 24 12S18.626 0 11.999 0zm0 21.818c-1.802 0-3.492-.511-4.931-1.385l-.353-.213-3.766.983 1.005-3.668-.231-.368C2.753 15.632 2.182 13.87 2.182 12c0-5.414 4.404-9.818 9.818-9.818 5.414 0 9.818 4.404 9.818 9.818 0 5.414-4.404 9.818-9.818 9.818zm5.385-7.362c-.295-.148-1.745-.862-2.016-.96-.27-.098-.468-.148-.664.148-.197.295-.762.96-.935 1.157-.172.197-.344.221-.64.074-.295-.148-1.246-.459-2.373-1.465-.877-.783-1.47-1.75-1.643-2.046-.172-.295-.018-.455.13-.602.133-.133.295-.344.443-.516.148-.172.197-.295.295-.492.098-.197.049-.369-.025-.516-.074-.148-.664-1.6-0.91-2.19-.24-.574-.484-.496-.664-.505-.164-.008-.352-.008-.548-.008-.197 0-.516.074-.787.369-.27.295-1.033 1.008-1.033 2.46 0 1.451 1.057 2.853 1.205 3.05.148.197 2.08 3.176 5.041 4.455.705.304 1.255.486 1.685.623.708.225 1.353.193 1.862.117.57-.085 1.745-.713 1.991-1.402.246-.689.246-1.28.172-1.402-.074-.123-.27-.197-.566-.344z"/></svg>
                    {t('hero_btn_wa', 'WhatsApp Us')}
                  </a>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2 mt-3.5 pt-3.5 border-t border-slate-100">
                  {[{ v: t('stat_checked_v', '500+'), l: t('stat_checked', 'Reports Checked') }, { v: t('stat_confidential_v', '100%'), l: t('stat_confidential', 'Confidential') }, { v: t('stat_experience_v', '5+ yrs'), l: t('stat_experience', 'Experience') }].map((s, i) => (
                    <div key={i} className="text-center">
                      <div className="font-heading text-navy-900 text-sm sm:text-base font-bold">{s.v}</div>
                      <div className="text-[9px] text-slate-400 mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Disclaimer pill */}
              <div className="inline-flex items-center gap-1.5 bg-slate-100/80 border border-slate-200/60 rounded-full px-3.5 py-1.5 mt-3 text-slate-500 text-[10px]">
                <svg className="w-3 h-3 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1 9a.75.75 0 01-.75-.75V9a.75.75 0 011.5 0v5.25a.75.75 0 01-.75.75z" clipRule="evenodd" /></svg>
                <span>{t('disclaimer_pill', 'We give expert advice — score changes are not guaranteed.')}</span>
              </div>
            </div>

          </div>

          {/* === DESKTOP HERO (Tier 1 Editorial Layout) === */}
          <div className="hidden lg:grid grid-cols-12 gap-8 items-center py-2">
            
            {/* Left text column */}
            <div className="col-span-6 xl:col-span-7 pr-4">
              <div className="inline-flex items-center gap-2 bg-navy-900/5 border border-navy-900/10 text-navy-800 px-3.5 py-1.5 rounded-full text-[11px] font-heading tracking-widest uppercase mb-4">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                {t('pro_help', 'Professional Credit Help')}
              </div>

              <h1 className="font-heading text-navy-900 text-5xl xl:text-[56px] leading-[1.1] tracking-tight mb-5">
                {t('hero_title_1', 'Understand Your CIBIL.')}<br />
                <span className="text-blue-600">{t('hero_title_2', 'Improve Your Score.')}</span>
              </h1>

              <div className="flex gap-4 mb-6">
                <a href="#contact" className="inline-flex items-center btn-primary-navy font-heading text-sm px-8 py-4 rounded-xl transition-all shadow-lg shadow-navy-900/15 hover:-translate-y-0.5">
                  {t('free_advice', 'Get Free Advice')}
                </a>
                <a href="https://wa.me/919609290670" target="_blank" rel="noopener" className="inline-flex items-center gap-2.5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-heading text-sm px-8 py-4 rounded-xl transition-all shadow-md hover:shadow-lg shadow-green-600/15 hover:-translate-y-0.5">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.123.553 4.118 1.518 5.851L0 24l6.335-1.652C8.012 23.32 9.96 24 11.999 24 18.626 24 24 18.627 24 12S18.626 0 11.999 0zm0 21.818c-1.802 0-3.492-.511-4.931-1.385l-.353-.213-3.766.983 1.005-3.668-.231-.368C2.753 15.632 2.182 13.87 2.182 12c0-5.414 4.404-9.818 9.818-9.818 5.414 0 9.818 4.404 9.818 9.818 0 5.414-4.404 9.818-9.818 9.818zm5.385-7.362c-.295-.148-1.745-.862-2.016-.96-.27-.098-.468-.148-.664.148-.197.295-.762.96-.935 1.157-.172.197-.344.221-.64.074-.295-.148-1.246-.459-2.373-1.465-.877-.783-1.47-1.75-1.643-2.046-.172-.295-.018-.455.13-.602.133-.133.295-.344.443-.516.148-.172.197-.295.295-.492.098-.197.049-.369-.025-.516-.074-.148-.664-1.6-0.91-2.19-.24-.574-.484-.496-.664-.505-.164-.008-.352-.008-.548-.008-.197 0-.516.074-.787.369-.27.295-1.033 1.008-1.033 2.46 0 1.451 1.057 2.853 1.205 3.05.148.197 2.08 3.176 5.041 4.455.705.304 1.255.486 1.685.623.708.225 1.353.193 1.862.117.57-.085 1.745-.713 1.991-1.402.246-.689.246-1.28.172-1.402-.074-.123-.27-.197-.566-.344z"/></svg>
                  {t('hero_btn_wa', 'WhatsApp Advice')}
                </a>
              </div>

              {/* Stats & Disclaimer */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between max-w-lg">
                <div className="flex gap-8">
                  {[{ v: t('stat_checked_v', '500+'), l: t('stat_checked', 'Reports Checked') }, { v: t('stat_confidential_v', '100%'), l: t('stat_confidential', 'Confidential') }, { v: t('stat_experience_v', '5+ yrs'), l: t('stat_experience', 'Experience') }].map((s, i) => (
                    <div key={i}>
                      <div className="font-heading text-navy-900 text-xl font-bold">{s.v}</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column — Large person with out-of-the-box UI layers */}
            <div className="col-span-6 xl:col-span-5 relative flex justify-center items-center">
              
              {/* Typographic Backdrop Watermark */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] select-none pointer-events-none text-center w-full z-0">
                <span className="font-heading font-extrabold text-[100px] xl:text-[120px] tracking-tighter text-slate-100 leading-none block">
                  CIBIL
                </span>
              </div>

              {/* Glowing gradient blobs & geometric rings */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
                <div className="w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-gold-400/30 via-amber-200/40 to-blue-200/30 blur-3xl"></div>
                <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-slate-200"></div>
              </div>

              {/* Floating Fintech Widget 1 (Top Left) */}
              <div className="absolute top-10 -left-6 z-20 bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xl rounded-2xl p-3.5 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 font-heading font-bold text-sm">
                  780+
                </div>
                <div className="text-left">
                  <div className="text-xs font-heading font-bold text-navy-900">{t('hero_badge_target', 'Target Score')}</div>
                  <div className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
                    <span>{t('hero_badge_excellent', '↑ Excellent Profile')}</span>
                  </div>
                </div>
              </div>

              {/* Floating Fintech Widget 2 (Left side) */}
              <div className="absolute top-[220px] -left-12 z-20 bg-navy-900/95 backdrop-blur-md border border-white/10 shadow-xl rounded-xl px-4 py-3 flex items-center gap-2 animate-float" style={{ animationDelay: '1.5s' }}>
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                <span className="text-xs font-heading text-white tracking-wide">{t('hero_badge_safe', '100% Safe & Private')}</span>
              </div>

              {/* CIBIL Meter Card floating in the background on desktop */}
              <div className="absolute top-2 right-12 z-0 scale-105 xl:scale-115 origin-center">
                <div className="animate-float" style={{ animationDelay: '0.8s' }}>
                  <CibilMeter />
                </div>
              </div>

              {/* Person image framed with balanced 22% bottom fade */}
              <div className="relative z-10 flex justify-center w-full">
                <img
                  src={profileImg}
                  alt="Mr. Avijit Chowdhury"
                  className="w-[380px] xl:w-[420px] max-h-[420px] xl:max-h-[460px] object-cover object-top drop-shadow-2xl [mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)]"
                />
              </div>

              {/* Single-Line Name & Designation Pill Badge */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-max">
                <div className="bg-navy-900/95 backdrop-blur-md text-white px-6 py-3 rounded-full shadow-2xl border border-white/15 flex items-center gap-2.5 text-xs xl:text-sm font-heading tracking-wide whitespace-nowrap">
                  <span className="font-bold text-white">Mr. Avijit Chowdhury</span>
                  <span className="text-gold-400">|</span>
                  <span className="text-gold-400 uppercase tracking-widest text-[10px] xl:text-xs">{t('lead_credit_expert', 'Cibil Consultant')}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-8 md:py-14 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Background decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-gold-400/10 via-blue-400/5 to-purple-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-5 relative z-10">
          <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 bg-navy-900 text-white px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-heading tracking-wider uppercase mb-3 shadow-md border border-gold-400/40">
              <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-pulse"></span>
              <span className="text-slate-300">{t('services_tag', 'Expert Guidance by')}</span>
              <span className="font-bold text-gold-400">Mr. Avijit Chowdhury</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl text-navy-900 font-extrabold tracking-tight">
              {t('services_heading_part1', 'How We')} <span className="text-blue-600">{t('services_heading_part2', 'Help')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              {
                num: '01',
                title: t('service_check_title', 'Credit Report Check'),
                tag: t('tag_important', 'IMPORTANT'),
                cardBg: 'from-blue-50/90 via-white to-blue-50/40 border-blue-200/80 hover:border-blue-400 shadow-blue-500/5',
                tagBg: 'bg-blue-100/90 text-blue-700 border border-blue-200/80',
                theme: 'from-blue-500/20 via-sky-500/10 to-transparent border-blue-500/30 text-blue-600 bg-blue-50/50',
                icon: (
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    <circle cx="14" cy="14" r="4" className="stroke-blue-600" strokeWidth="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 17l2.5 2.5" className="stroke-blue-600" strokeWidth="2.5" />
                  </svg>
                )
              },
              {
                num: '02',
                title: t('service_score_title', 'Score Improvement Plan'),
                tag: t('tag_most_popular', 'MOST POPULAR'),
                cardBg: 'from-amber-50/90 via-white to-gold-50/40 border-gold-300/80 hover:border-gold-500 shadow-gold-500/5',
                tagBg: 'bg-gold-100/90 text-gold-800 border border-gold-300/80',
                theme: 'from-gold-500/25 via-amber-500/10 to-transparent border-gold-500/40 text-gold-600 bg-gold-50/60',
                icon: (
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" className="stroke-gold-600" strokeWidth="2.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20a8 8 0 100-16 8 8 0 000 16z" className="opacity-40" />
                  </svg>
                )
              },
              {
                num: '03',
                title: t('service_fix_title', 'Fix Report Mistakes'),
                tag: t('tag_fix_errors', 'FIX ERRORS'),
                cardBg: 'from-emerald-50/90 via-white to-teal-50/40 border-emerald-200/80 hover:border-emerald-400 shadow-emerald-500/5',
                tagBg: 'bg-emerald-100/90 text-emerald-700 border border-emerald-200/80',
                theme: 'from-emerald-500/20 via-teal-500/10 to-transparent border-emerald-500/30 text-emerald-600 bg-emerald-50/50',
                icon: (
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" className="stroke-emerald-600" strokeWidth="2" />
                  </svg>
                )
              },
              {
                num: '04',
                title: t('service_why_title', 'Why Loan Was Rejected'),
                tag: t('tag_loan_help', 'LOAN HELP'),
                cardBg: 'from-purple-50/90 via-white to-indigo-50/40 border-purple-200/80 hover:border-purple-400 shadow-purple-500/5',
                tagBg: 'bg-purple-100/90 text-purple-700 border border-purple-200/80',
                theme: 'from-purple-500/20 via-indigo-500/10 to-transparent border-purple-500/30 text-purple-600 bg-purple-50/50',
                icon: (
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" className="stroke-purple-600" strokeWidth="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v-4" className="opacity-40" />
                  </svg>
                )
              },
              {
                num: '05',
                title: t('service_fake_title', 'Check for Fake Loans'),
                tag: t('tag_safety', 'SAFETY'),
                cardBg: 'from-rose-50/90 via-white to-pink-50/40 border-rose-200/80 hover:border-rose-400 shadow-rose-500/5',
                tagBg: 'bg-rose-100/90 text-rose-700 border border-rose-200/80',
                theme: 'from-rose-500/20 via-pink-500/10 to-transparent border-rose-500/30 text-rose-600 bg-rose-50/50',
                icon: (
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" className="opacity-40" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" className="stroke-rose-600" strokeWidth="2" />
                  </svg>
                )
              },
              {
                num: '06',
                title: t('service_step_title', 'Step-by-Step Guide'),
                tag: t('tag_your_plan', 'YOUR PLAN'),
                cardBg: 'from-orange-50/90 via-white to-amber-50/40 border-orange-200/80 hover:border-orange-400 shadow-orange-500/5',
                tagBg: 'bg-orange-100/90 text-orange-700 border border-orange-200/80',
                theme: 'from-amber-500/20 via-orange-500/10 to-transparent border-amber-500/30 text-amber-600 bg-amber-50/50',
                icon: (
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" className="stroke-amber-600" strokeWidth="2" />
                  </svg>
                )
              },
            ].map((s, i) => (
              <div
                key={i}
                className={`group relative bg-gradient-to-b ${s.cardBg} rounded-2xl p-3.5 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center justify-between hover:-translate-y-1.5 border`}
              >
                {/* Top: Tag & Icon box centered */}
                <div className="flex flex-col items-center w-full">
                  <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[8px] sm:text-[9px] font-heading font-bold tracking-wider uppercase mb-2.5 ${s.tagBg}`}>
                    <span>{s.tag}</span>
                  </div>
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${s.theme} border flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 mb-2.5`}>
                    {s.icon}
                  </div>

                  {/* Title centered */}
                  <div className="flex items-center justify-center">
                    <h3 className="font-heading text-navy-900 text-xs sm:text-base font-bold group-hover:text-blue-600 transition-colors leading-snug">
                      {s.title}
                    </h3>
                  </div>
                </div>

                {/* Bottom link centered */}
                <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-center gap-1 text-[11px] sm:text-xs font-heading text-navy-900 group-hover:text-blue-600 transition-colors w-full">
                  <span>{t('talk_now', 'Talk Now')}</span>
                  <span className="w-4 h-4 rounded-full bg-white group-hover:bg-blue-50 flex items-center justify-center group-hover:translate-x-1 transition-all shadow-2xs">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Executive Consultant Spotlight Banner */}
          <div className="mt-8 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 text-white rounded-2xl p-5 sm:p-7 shadow-xl border border-gold-400/30 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-5 text-left">
            {/* Background decorative glow */}
            <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex items-center gap-4 relative z-10 w-full sm:w-auto">
              <img
                src={profileImg}
                alt="Mr. Avijit Chowdhury"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover object-top border-2 border-gold-400 shadow-md flex-shrink-0 bg-navy-950"
              />
              <div>
                <div className="inline-flex items-center gap-1.5 bg-gold-400/10 border border-gold-400/30 text-gold-400 px-2 py-0.5 rounded text-[9px] font-heading font-bold uppercase tracking-wider mb-1">
                  {t('lead_credit_expert', '★ Lead Credit Expert')}
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-extrabold text-white tracking-tight">
                  Mr. Avijit Chowdhury
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-300 italic mt-0.5">
                  {t('spotlight_quote', '“I personally check every report to give you honest and private advice.”')}
                </p>
              </div>
            </div>

            <div className="relative z-10 w-full sm:w-auto text-center sm:text-right flex-shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-navy-950 font-heading font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-gold-500/20 hover:scale-102 w-full sm:w-auto"
              >
                <span>{t('spotlight_btn', 'Book Personal Consultation')}</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS (Executive Advisory Process) ── */}
      <section id="how-it-works" className="py-10 md:py-16 bg-gradient-to-b from-white via-gold-50/50 to-white relative overflow-hidden border-t border-gold-200/60">
        {/* Subtle ambient lighting */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-gold-400/15 via-blue-400/10 to-amber-400/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-5 relative z-10">
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <span className="text-[10px] tracking-widest uppercase text-blue-600 font-heading font-extrabold bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/80">{t('how_it_works_tag', 'SIMPLE STEPS')}</span>
            <h2 className="font-heading text-3xl sm:text-4xl text-navy-900 font-extrabold tracking-tight mt-2">
              {t('how_it_works_title_part1', 'How It')} <span className="text-blue-600">{t('how_it_works_title_part2', 'Works')}</span>
            </h2>
          </div>

          {/* Desktop Layout: Top Row (Steps 1, 2, 3 with perfectly centered arrows in explicit grid columns) */}
          <div className="hidden lg:grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-center mb-5">
            {[
              {
                num: '01',
                title: t('how_step_1_title', 'Connect with Mr. Avijit'),
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                )
              },
              {
                num: '02',
                title: t('how_step_2_title', 'Share Credit Report'),
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              },
              {
                num: '03',
                title: t('how_step_3_title', 'Complete Report Check'),
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 10l2 2 4-4" />
                  </svg>
                )
              },
            ].map((s, i) => (
              <React.Fragment key={i}>
                {/* Step Card - Yellow/Gold Style, Left: Number & Title, Right: BIG Icon */}
                <div className="h-full bg-gradient-to-br from-gold-50/90 via-amber-50/80 to-yellow-100/80 rounded-2xl p-5 xl:p-6 border border-gold-300/80 shadow-md shadow-gold-900/5 hover:border-gold-500 hover:shadow-xl transition-all duration-300 flex items-center justify-between gap-4 group hover:-translate-y-1 min-h-[130px]">
                  {/* Left Side: Number in Blue & Title in Black/Navy */}
                  <div className="flex flex-col justify-center text-left">
                    <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-blue-600 mb-1">
                      {t('step_label', 'STEP')} {s.num}
                    </span>
                    <h3 className="font-heading text-lg xl:text-xl font-extrabold text-navy-900 tracking-tight leading-snug">
                      {s.title}
                    </h3>
                  </div>

                  {/* Right Side: Respective Icon in MUCH BIGGER SIZE */}
                  <div className="w-16 h-16 xl:w-20 xl:h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-navy-900 text-gold-400 shadow-lg shadow-blue-900/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all">
                    {s.icon}
                  </div>
                </div>

                {/* Mathematically Centered Connecting Arrow (Between cards 1->2 and 2->3) */}
                {i < 2 && (
                  <div className="flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white border border-blue-300 shadow-md text-blue-600 font-bold text-lg flex items-center justify-center hover:scale-110 hover:border-blue-500 hover:bg-blue-50 transition-all">
                      ➔
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Journey Link Bridge between Top Row and Bottom Row (Desktop Only) */}
          <div className="hidden lg:flex items-center justify-center mb-5">
            <div className="inline-flex items-center gap-2 bg-navy-900 text-gold-400 px-5 py-2 rounded-full font-heading font-bold text-xs tracking-wider uppercase shadow-xl border border-gold-400/50 hover:scale-105 transition-all">
              <span>{t('bridge_next_step', 'Next Step: Starting The Work')}</span>
              <span className="text-sm">⬇</span>
            </div>
          </div>

          {/* Desktop Layout: Bottom Row (Steps 4, 5 with perfectly centered arrow in explicit grid columns) */}
          <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] gap-5 max-w-4xl mx-auto items-center">
            {[
              {
                num: '04',
                title: t('how_step_4_title', 'Personal Call & Advice'),
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              {
                num: '05',
                title: t('how_step_5_title', 'Step-by-Step Plan'),
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20a8 8 0 100-16 8 8 0 000 16z" />
                  </svg>
                )
              },
            ].map((s, i) => (
              <React.Fragment key={i}>
                {/* Step Card - Yellow/Gold Style, Left: Number & Title, Right: BIG Icon */}
                <div className="h-full bg-gradient-to-br from-gold-50/90 via-amber-50/80 to-yellow-100/80 rounded-2xl p-5 xl:p-6 border border-gold-300/80 shadow-md shadow-gold-900/5 hover:border-gold-500 hover:shadow-xl transition-all duration-300 flex items-center justify-between gap-4 group hover:-translate-y-1 min-h-[130px]">
                  {/* Left Side: Number in Blue & Title in Black/Navy */}
                  <div className="flex flex-col justify-center text-left">
                    <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-blue-600 mb-1">
                      {t('step_label', 'STEP')} {s.num}
                    </span>
                    <h3 className="font-heading text-lg xl:text-xl font-extrabold text-navy-900 tracking-tight leading-snug">
                      {s.title}
                    </h3>
                  </div>

                  {/* Right Side: Respective Icon in MUCH BIGGER SIZE */}
                  <div className="w-16 h-16 xl:w-20 xl:h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-navy-900 text-gold-400 shadow-lg shadow-blue-900/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all">
                    {s.icon}
                  </div>
                </div>

                {/* Mathematically Centered Connecting Arrow (Between cards 4->5) */}
                {i === 0 && (
                  <div className="flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white border border-blue-300 shadow-md text-blue-600 font-bold text-lg flex items-center justify-center hover:scale-110 hover:border-blue-500 hover:bg-blue-50 transition-all">
                      ➔
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile & Tablet Layout: Vertical Stack (All 5 cards chronologically with tightly spaced down arrows) */}
          <div className="flex lg:hidden flex-col gap-2 max-w-lg mx-auto">
            {[
              {
                num: '01',
                title: t('how_step_1_title', 'Connect with Mr. Avijit'),
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                )
              },
              {
                num: '02',
                title: t('how_step_2_title', 'Share Credit Report'),
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              },
              {
                num: '03',
                title: t('how_step_3_title', 'Complete Report Check'),
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 10l2 2 4-4" />
                  </svg>
                )
              },
              {
                num: '04',
                title: t('how_step_4_title', 'Personal Call & Advice'),
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              {
                num: '05',
                title: t('how_step_5_title', 'Step-by-Step Plan'),
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20a8 8 0 100-16 8 8 0 000 16z" />
                  </svg>
                )
              },
            ].map((s, i) => (
              <React.Fragment key={i}>
                {/* Step Card - Yellow/Gold Style, Left: Number & Title, Right: BIG Icon */}
                <div className="bg-gradient-to-br from-gold-50/90 via-amber-50/80 to-yellow-100/80 rounded-2xl p-4 sm:p-5 border border-gold-300/80 shadow-md shadow-gold-900/5 flex items-center justify-between gap-3 group">
                  {/* Left Side: Number in Blue & Title in Black/Navy */}
                  <div className="flex flex-col justify-center text-left">
                    <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-blue-600 mb-1">
                      {t('step_label', 'STEP')} {s.num}
                    </span>
                    <h3 className="font-heading text-base sm:text-lg font-extrabold text-navy-900 tracking-tight leading-snug">
                      {s.title}
                    </h3>
                  </div>

                  {/* Right Side: Respective Icon in MUCH BIGGER SIZE */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-blue-600 to-navy-900 text-gold-400 shadow-md shadow-blue-900/15 flex items-center justify-center flex-shrink-0">
                    {s.icon}
                  </div>
                </div>

                {/* Vertically Centered Down Arrow between mobile/tablet cards */}
                {i < 4 && (
                  <div className="flex items-center justify-center -my-2">
                    <div className="w-7 h-7 rounded-full bg-blue-600 text-white shadow-sm flex items-center justify-center text-xs font-bold hover:scale-110 transition-all">
                      ↓
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 sm:mt-10 text-center">
            <a href="#contact" className="inline-flex items-center gap-3 btn-primary-navy font-heading font-bold text-xs sm:text-sm px-8 py-4 rounded-xl transition-all shadow-xl shadow-navy-900/15 hover:-translate-y-0.5">
              <span>{t('how_cta_btn', 'Start Score Improvement Today')}</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section id="why-us" className="py-16 md:py-24 bg-blue-600 relative overflow-hidden border-t border-blue-500/30">
        {/* Ambient lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-gold-400/20 via-white/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-5 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-[10px] tracking-widest uppercase text-gold-300 font-heading font-extrabold bg-gold-400/20 px-3.5 py-1 rounded-full border border-gold-400/40 shadow-sm">{t('why_tag', 'WHY CHOOSE US')}</span>
            <h2 className="font-heading text-3xl sm:text-4xl text-white font-extrabold tracking-tight mt-2.5">
              {t('why_title_part1', 'Why')} <span className="text-gold-300">{t('why_title_part2', 'Cibil Improve')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              {
                title: t('why_direct_title', 'Direct Personal Advice'),
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )
              },
              {
                title: t('why_safe_title', '100% Safe & Private Data'),
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: t('why_plan_title', 'Plan Made Just For You'),
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              },
              {
                title: t('why_honest_title', '100% Honest & Clear'),
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                )
              },
              {
                title: t('why_help_title', 'Help From Start to Finish'),
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              {
                title: t('why_rbi_title', 'Follows RBI Rules 100%'),
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              },
            ].map((card, i) => (
              <div key={i} className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-gold-300 rounded-2xl p-5 sm:p-6 transition-all duration-300 flex items-center justify-between gap-4 group hover:-translate-y-1 shadow-xl backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-amber-500 text-navy-950 flex items-center justify-center flex-shrink-0 shadow-lg shadow-black/10 group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <h3 className="font-heading text-white text-base sm:text-lg font-extrabold tracking-tight group-hover:text-gold-300 transition-colors">
                    {card.title}
                  </h3>
                </div>
                <div className="text-gold-300 font-bold text-sm flex-shrink-0">✓</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faqs" className="py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white relative">
        <div className="max-w-3xl mx-auto px-5">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
            <span className="text-[10px] tracking-widest uppercase text-blue-600 font-heading font-extrabold bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/80">{t('faq_tag', 'COMMON QUESTIONS')}</span>
            <h2 className="font-heading text-3xl sm:text-4xl text-navy-900 font-extrabold tracking-tight mt-2.5">
              {t('faq_title_part1', 'Frequently Asked')} <span className="text-blue-600">{t('faq_title_part2', 'Questions')}</span>
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-blue-600 bg-gradient-to-r from-blue-50/50 via-white to-gold-50/30 shadow-lg ring-1 ring-blue-600/20' : 'border-slate-200/80 bg-white shadow-sm hover:border-blue-300 hover:shadow-md'}`}>
                  <button onClick={() => setOpenFaq(isOpen ? null : i)} className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group">
                    <span className={`font-heading text-base sm:text-lg font-bold transition-colors ${isOpen ? 'text-blue-600' : 'text-navy-900 group-hover:text-blue-600'}`}>{faq.q}</span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-blue-600 text-white rotate-180 shadow-md shadow-blue-600/30' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600'}`}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100/80 mt-1">{faq.a}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Need more answers box */}
          <div className="mt-8 p-5 rounded-2xl bg-gradient-navy-banner text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <h4 className="font-heading font-bold text-base sm:text-lg">{t('faq_more_q', 'Have a specific question about your report?')}</h4>
            <a href="https://wa.me/919609290670" target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-heading font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-md whitespace-nowrap flex-shrink-0">
              <span>{t('faq_more_btn', 'Ask on WhatsApp')}</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT / GET IN TOUCH ── */}
      <section id="contact" className="py-16 md:py-24 bg-slate-100 relative overflow-hidden border-t border-slate-200">
        {/* Subtle decorative background gradient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-5 relative z-10">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
            <span className="text-[10px] tracking-widest uppercase text-blue-600 font-heading font-extrabold bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/80">{t('contact_tag', 'CONTACT US')}</span>
            <h2 className="font-heading text-3xl sm:text-4xl text-navy-900 font-extrabold tracking-tight mt-2.5">
              {t('contact_title_part1', 'Get in')} <span className="text-blue-600">{t('contact_title_part2', 'Touch')}</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Official Contact Channels */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Primary Channel: Official WhatsApp */}
              <a href="https://wa.me/919609290670" target="_blank" rel="noopener" className="bg-gradient-to-br from-green-600 to-emerald-800 text-white rounded-2xl p-5 shadow-xl shadow-green-900/15 border border-green-500/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-32 h-32 text-white/10 select-none pointer-events-none group-hover:scale-110 transition-transform">
                  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.123.553 4.118 1.518 5.851L0 24l6.335-1.652C8.012 23.32 9.96 24 11.999 24 18.626 24 24 18.627 24 12S18.626 0 11.999 0zm0 21.818c-1.802 0-3.492-.511-4.931-1.385l-.353-.213-3.766.983 1.005-3.668-.231-.368C2.753 15.632 2.182 13.87 2.182 12c0-5.414 4.404-9.818 9.818-9.818 5.414 0 9.818 4.404 9.818 9.818 0 5.414-4.404 9.818-9.818 9.818zm5.385-7.362c-.295-.148-1.745-.862-2.016-.96-.27-.098-.468-.148-.664.148-.197.295-.762.96-.935 1.157-.172.197-.344.221-.64.074-.295-.148-1.246-.459-2.373-1.465-.877-.783-1.47-1.75-1.643-2.046-.172-.295-.018-.455.13-.602.133-.133.295-.344.443-.516.148-.172.197-.295.295-.492.098-.197.049-.369-.025-.516-.074-.148-.664-1.6-0.91-2.19-.24-.574-.484-.496-.664-.505-.164-.008-.352-.008-.548-.008-.197 0-.516.074-.787.369-.27.295-1.033 1.008-1.033 2.46 0 1.451 1.057 2.853 1.205 3.05.148.197 2.08 3.176 5.041 4.455.705.304 1.255.486 1.685.623.708.225 1.353.193 1.862.117.57-.085 1.745-.713 1.991-1.402.246-.689.246-1.28.172-1.402-.074-.123-.27-.197-.566-.344z" /></svg>
                </div>
                <div className="flex items-center justify-between mb-3 relative z-10">
                  <span className="text-[10px] font-heading font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-md">{t('reply_instant', 'INSTANT REPLY')}</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
                </div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white text-green-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    {/* Official WhatsApp SVG Logo */}
                    <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                      <path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.123.553 4.118 1.518 5.851L0 24l6.335-1.652C8.012 23.32 9.96 24 11.999 24 18.626 24 24 18.627 24 12S18.626 0 11.999 0zm0 21.818c-1.802 0-3.492-.511-4.931-1.385l-.353-.213-3.766.983 1.005-3.668-.231-.368C2.753 15.632 2.182 13.87 2.182 12c0-5.414 4.404-9.818 9.818-9.818 5.414 0 9.818 4.404 9.818 9.818 0 5.414-4.404 9.818-9.818 9.818zm5.385-7.362c-.295-.148-1.745-.862-2.016-.96-.27-.098-.468-.148-.664.148-.197.295-.762.96-.935 1.157-.172.197-.344.221-.64.074-.295-.148-1.246-.459-2.373-1.465-.877-.783-1.47-1.75-1.643-2.046-.172-.295-.018-.455.13-.602.133-.133.295-.344.443-.516.148-.172.197-.295.295-.492.098-.197.049-.369-.025-.516-.074-.148-.664-1.6-0.91-2.19-.24-.574-.484-.496-.664-.505-.164-.008-.352-.008-.548-.008-.197 0-.516.074-.787.369-.27.295-1.033 1.008-1.033 2.46 0 1.451 1.057 2.853 1.205 3.05.148.197 2.08 3.176 5.041 4.455.705.304 1.255.486 1.685.623.708.225 1.353.193 1.862.117.57-.085 1.745-.713 1.991-1.402.246-.689.246-1.28.172-1.402-.074-.123-.27-.197-.566-.344z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-green-200 font-medium">{t('channel_wa', 'Official WhatsApp')}</div>
                    <div className="text-xl font-heading font-extrabold tracking-tight">+91 96092 90670</div>
                  </div>
                </div>
              </a>

              {/* Phone Card */}
              <a href="tel:+919609290670" className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300 flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-navy-900 text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-400 font-heading font-bold">{t('channel_tel', 'DIRECT TELEPHONE')}</div>
                  <div className="text-navy-900 font-heading font-extrabold text-base mt-0.5 group-hover:text-blue-600 transition-colors">+91 96092 90670</div>
                </div>
              </a>

              {/* Email Card */}
              <a href="mailto:avijit.chowdhury007@gmail.com" className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:border-gold-400 hover:shadow-md transition-all duration-300 flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500 to-amber-600 text-navy-950 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform font-bold">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <div className="text-[10px] uppercase tracking-widest text-slate-400 font-heading font-bold">{t('channel_email', 'OFFICIAL EMAIL')}</div>
                  <div className="text-navy-900 font-heading font-extrabold text-sm sm:text-base mt-0.5 group-hover:text-amber-700 transition-colors truncate font-body">avijit.chowdhury007@gmail.com</div>
                </div>
              </a>
            </div>

            {/* Right Column: Executive Client Consultation Portal Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/80 shadow-xl relative">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-6">
                <div>
                  <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-md">{t('booking_form_tag', 'BOOKING FORM')}</span>
                  <h3 className="font-heading text-navy-900 text-xl sm:text-2xl font-extrabold tracking-tight mt-1.5">{t('contact_form_title', 'Book Your Private Review')}</h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-gold-50 border border-gold-200 text-gold-600 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  🛡️
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-heading font-bold text-navy-900 uppercase tracking-wider mb-1.5">{t('form_label_name', 'Your Full Name *')}</label>
                  <input name="name" value={formData.name} onChange={handleInput} placeholder={t('form_placeholder_name', 'e.g. Rajesh Kumar')} required className="w-full border border-slate-200 rounded-xl px-4 py-3.5 text-sm bg-slate-50/50 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all font-medium text-navy-900" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-bold text-navy-900 uppercase tracking-wider mb-1.5">{t('form_label_phone', 'Phone Number *')}</label>
                    <input name="phone" type="tel" value={formData.phone} onChange={handleInput} placeholder={t('form_placeholder_phone', '+91 XXXXX XXXXX')} required className="w-full border border-slate-200 rounded-xl px-4 py-3.5 text-sm bg-slate-50/50 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all font-medium text-navy-900" />
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-bold text-navy-900 uppercase tracking-wider mb-1.5">{t('form_label_email', 'Email Address *')}</label>
                    <input name="email" type="email" value={formData.email} onChange={handleInput} placeholder={t('form_placeholder_email', 'yourname@gmail.com')} required className="w-full border border-slate-200 rounded-xl px-4 py-3.5 text-sm bg-slate-50/50 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all font-medium text-navy-900" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold text-navy-900 uppercase tracking-wider mb-1.5">{t('form_label_message', 'Tell Us Your Problem *')}</label>
                  <textarea name="message" value={formData.message} onChange={handleInput} rows="3" placeholder={t('form_placeholder_message', 'e.g. CIBIL score is 620 due to settled card in 2023. Need guidance for home loan approval.')} required className="w-full border border-slate-200 rounded-xl px-4 py-3.5 text-sm bg-slate-50/50 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all resize-none font-medium text-navy-900" />
                </div>

                <div className="flex gap-3 items-start bg-slate-50 p-3.5 rounded-xl border border-slate-200/60 mt-1">
                  <input name="consent" type="checkbox" checked={formData.consent} onChange={handleInput} required className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600 mt-0.5 flex-shrink-0 cursor-pointer" />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    {t('form_consent_part1', 'I agree to be contacted by Mr. Avijit Chowdhury about my report. Score changes are')} <strong>{t('form_consent_guarantee', 'not guaranteed')}</strong>.
                  </span>
                </div>

                <button type="submit" className="w-full mt-2 btn-gradient-navy font-heading font-extrabold text-base py-4 rounded-xl shadow-xl shadow-navy-900/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-3 group">
                  <span>{t('form_submit', 'Book Consultation')}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-navy-950 py-12 text-xs border-t border-navy-900">
        <div className="max-w-6xl mx-auto px-5 flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <span className="font-heading text-white text-base tracking-wider font-extrabold">Cibil <span className="text-gold-400">Improve</span></span>
              <div className="text-xs text-gold-300 font-semibold mt-1">{t('by_avijit_short', 'by Mr. Avijit Chowdhury')}</div>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-slate-300 font-medium">
              <a href="#services" className="hover:text-gold-400 transition-colors">{t('nav_services', 'Services')}</a>
              <a href="#how-it-works" className="hover:text-gold-400 transition-colors">{t('nav_how_it_works', 'How It Works')}</a>
              <a href="#faqs" className="hover:text-gold-400 transition-colors">{t('nav_faqs', 'FAQs')}</a>
              <a href="#contact" className="hover:text-gold-400 transition-colors">{t('nav_contact', 'Contact')}</a>
            </div>
          </div>
          <div className="border-t border-slate-800/80 pt-6">
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              <strong className="text-white font-semibold">{t('disclaimer_label', 'Disclaimer:')}</strong> {t('disclaimer_text', 'Independent credit advice service. Not affiliated with TransUnion CIBIL or any bank. We do not guarantee specific score changes or loan approvals.')}
            </p>
          </div>
          <div className="text-center text-slate-400 text-xs font-medium pt-2">&copy; 2026 Cibil Improve {t('by_avijit_short', 'by Mr. Avijit Chowdhury')}. {t('rights_reserved', 'All rights reserved.')}</div>
        </div>
      </footer>

      {/* ── MODAL ── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/25 backdrop-blur-sm">
          <div className="bg-white max-w-sm w-full rounded-2xl p-7 relative shadow-2xl text-center animate-slide-up">
            <button onClick={() => setShowModal(false)} className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 text-lg">&times;</button>
            <div className="w-10 h-10 bg-gold-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="font-heading text-navy-900 text-lg mb-1">{t('modal_ready', 'Request Ready!')}</h2>
            <p className="text-[11px] text-slate-400 mb-5">{t('modal_desc', 'Send your details now.')}</p>
            <div className="flex flex-col gap-2">
              <a href={leadUrls.whatsapp} target="_blank" rel="noopener" className="bg-green-600 hover:bg-green-700 text-white font-heading text-xs py-3 rounded-xl transition-colors">{t('modal_btn_wa', 'Send via WhatsApp')}</a>
              <a href={leadUrls.email} className="bg-slate-100 hover:bg-slate-200 text-navy-900 font-heading text-xs py-3 rounded-xl transition-colors">{t('modal_btn_email', 'Send via Email')}</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
