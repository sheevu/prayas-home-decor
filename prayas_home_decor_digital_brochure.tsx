import React, { useState } from 'react';
import { 
  Calculator, 
  Smartphone, 
  MapPin, 
  Globe, 
  TrendingUp, 
  Layers, 
  MessageCircle, 
  CheckCircle, 
  ArrowRight,
  ShieldCheck,
  Zap,
  BarChart3,
  ChevronRight,
  Star,
  Sparkles,
  Target,
  Users,
  Compass,
  Building2,
  PhoneCall,
  Navigation,
  Share2,
  Check,
  Award,
  Clock,
  Eye,
  Sliders,
  DollarSign,
  Briefcase,
  ExternalLink,
  ChevronDown,
  X,
  FileText,
  Play,
  RotateCw,
  Search,
  CheckSquare,
  Repeat,
  HeartHandshake
} from 'lucide-react';

export default function App() {
  // Navigation & Active State
  const [activeTab, setActiveTab] = useState('workflow');
  const [activeStep, setActiveStep] = useState(1);
  const [activeFunnelStage, setActiveFunnelStage] = useState(1);
  const [selectedLocality, setSelectedLocality] = useState('gomti_nagar');
  const [selectedTileCategory, setSelectedTileCategory] = useState('eternity_slabs');
  const [adFormat, setAdFormat] = useState('meta_reels');
  
  // Interactive ROI Calculator State
  const [adBudget, setAdBudget] = useState(25000);
  const [avgOrder, setAvgOrder] = useState(75000);
  const [convRate, setConvRate] = useState(18);
  const [pricingCycle, setPricingCycle] = useState('monthly');

  // WhatsApp Qualification Bot Simulator State
  const [botStep, setBotStep] = useState(1);
  const [botChoiceProject, setBotChoiceProject] = useState('New Construction');
  const [botChoiceSize, setBotChoiceSize] = useState('1,500 - 3,000 sq.ft.');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [contactName, setContactName] = useState('Prayas Management');
  const [contactPhone, setContactPhone] = useState('');

  // ROI Calculations
  const costPerLead = 145; // Lucknow benchmark CPL for tile intent
  const totalLeads = Math.floor(adBudget / costPerLead);
  const totalWalkins = Math.floor(totalLeads * (convRate / 100));
  const closedDeals = Math.floor(totalWalkins * 0.45); // 45% walk-in to order closing rate
  const totalRevenue = closedDeals * avgOrder;
  const netAdProfit = totalRevenue - adBudget;
  const roas = ((totalRevenue / adBudget) || 0).toFixed(1);

  // Localities Data for Gomti Nagar Audit
  const localities: Record<string, { name: string; volume: string; intent: string; leadCost: string }> = {
    gomti_nagar: { name: "Gomti Nagar Main", volume: "4,800 searches/mo", intent: "High (Luxury Villa Owners)", leadCost: "₹140" },
    gomti_ext: { name: "Gomti Nagar Extension", volume: "3,900 searches/mo", intent: "Very High (New High-Rises)", leadCost: "₹135" },
    golf_city: { name: "Sushant Golf City", volume: "2,700 searches/mo", intent: "Ultra High (Kajaria Eternity Slabs)", leadCost: "₹150" },
    indira_nagar: { name: "Indira Nagar Hub", volume: "2,200 searches/mo", intent: "Medium-High (Home Renovation)", leadCost: "₹145" }
  };

  // Workflow Steps Data
  const workflowSteps = [
    {
      id: 1,
      tag: "PHASE 01 • AUDIT & INTENT",
      title: "Market Footfall & Local Search Audit",
      subtitle: "Capturing high-intent Gomti Nagar buyers actively searching for Kajaria Eternity tiles before competitors.",
      icon: Target,
      color: "from-amber-500 to-orange-500",
      bgLight: "bg-amber-500/10",
      border: "border-amber-500/30"
    },
    {
      id: 2,
      tag: "PHASE 02 • DIGITAL SHOWROOM",
      title: "High-Conversion Mobile Showroom Website",
      subtitle: "A fast 0.8s mobile-first showroom with 3D Eternity texture previews & instant 1-click WhatsApp quote requests.",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      bgLight: "bg-blue-500/10",
      border: "border-blue-500/30"
    },
    {
      id: 3,
      tag: "PHASE 03 • DOMINANCE",
      title: "Google Maps (GBP) & B2B Trade Saturation",
      subtitle: "Dominating the #1 position on Google Maps for 'Kajaria showroom near me' plus IndiaMART B2B architect deals.",
      icon: MapPin,
      color: "from-emerald-500 to-teal-500",
      bgLight: "bg-emerald-500/10",
      border: "border-emerald-500/30"
    },
    {
      id: 4,
      tag: "PHASE 04 • GEO-ADS",
      title: "Hyper-Targeted Geo-Fenced Meta & Google Ads",
      subtitle: "Visual Meta Reels & Google Search ads geo-fenced strictly within 10km of Prayas Home Decor showroom.",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
      bgLight: "bg-purple-500/10",
      border: "border-purple-500/30"
    },
    {
      id: 5,
      tag: "PHASE 05 • AUTOMATION",
      title: "Automated WhatsApp Qualification & Footfall",
      subtitle: "Capturing project size, tile preferences, and auto-dispatching showroom Google Map directions & appointment tickets.",
      icon: MessageCircle,
      color: "from-emerald-400 to-green-500",
      bgLight: "bg-emerald-500/10",
      border: "border-emerald-500/30"
    }
  ];

  // 6-Stage Continuous Funnel Loop Data (Integrated from Lead-funnel-proposal/index.html)
  const funnelStages = [
    {
      num: 1,
      name: "Awareness — Get Found",
      desc: "Where new tile buyers first discover Prayas Home Decor across Lucknow.",
      tag: "Top of Funnel",
      services: [
        { title: "Google Search Ads", desc: "Targeting 'tiles Gomti Nagar', 'bathroom fittings Lucknow', 'Kajaria Eternity near me'.", impact: "↑ High-intent clicks" },
        { title: "Google Business Profile", desc: "Verified listing, product categories, photos, weekly offer posts, Q&A, and direct WhatsApp button.", impact: "↑ Maps Local Rank #1" },
        { title: "Meta Ads (IG & FB)", desc: "Video Reels of luxury tile combinations and showroom walk-throughs, geo-targeted to Gomti Nagar.", impact: "↑ Brand Recall & Footfall" }
      ]
    },
    {
      num: 2,
      name: "Interest — Build Trust",
      desc: "What convinces a visitor that Prayas Home Decor is their premier tile showroom.",
      tag: "Middle of Funnel",
      services: [
        { title: "5-Page Showroom Website", desc: "Home, Eternity Tiles, Sanitaryware & Bath, Paints & Plywood, Gallery/Contact — 0.8s mobile-first.", impact: "↑ Time on site" },
        { title: "Dedicated Landing Pages", desc: "Targeted Bathroom, Kitchen, and Builder Contractor pages matching each campaign.", impact: "↑ Conversion rate" },
        { title: "Social & Trade Content", desc: "Regular design posts, before/after reels, IndiaMART & trade listings kept fresh.", impact: "↑ Repeat discovery" }
      ]
    },
    {
      num: 3,
      name: "Action — Capture Lead",
      desc: "The single-tap moment a browser becomes a qualified WhatsApp enquiry.",
      tag: "Lead Capture",
      services: [
        { title: "Click-to-WhatsApp Buttons", desc: "Pre-filled WA.me links on every web page, ad creative, and Google listing.", impact: "↑ Zero-friction contact" },
        { title: "4-Field Lead Form", desc: "Name, Location Area, Project Type, Budget range — quick 15-second completion.", impact: "↑ Form completion" },
        { title: "Direct WhatsApp Ads", desc: "Meta campaigns that open a WhatsApp chat directly — eliminating complex drop-off forms.", impact: "↓ Cost per lead" }
      ]
    },
    {
      num: 4,
      name: "Nurture — Qualify Fast",
      desc: "Turning a raw online enquiry into a verified high-budget buyer.",
      tag: "Lead Qualification",
      services: [
        { title: "Auto-Greeting & Quick Replies", desc: "Instant automated response asking area, project type & floor size — zero idle lead wait time.", impact: "↑ Response speed (<5s)" },
        { title: "WhatsApp Digital Catalogue", desc: "Tiles, Sanitaryware, Paints, Plywood sections mirrored directly inside WhatsApp.", impact: "↑ Faster quotes" },
        { title: "Sheet-Based Lead CRM", desc: "Every chat logged: name, phone, source, project type, status — complete ROI transparency.", impact: "↑ Zero lead leakage" }
      ]
    },
    {
      num: 5,
      name: "Conversion — Close Sale",
      desc: "Guiding the prospect from WhatsApp chat straight into your Gomti Nagar showroom.",
      tag: "Showroom Visit",
      services: [
        { title: "Directions & Visit Push", desc: "Google Maps link shared in-chat with VIP appointment ticket for showroom visit.", impact: "↑ Showroom walk-ins" },
        { title: "Bulk & Contractor Rate Sheets", desc: "PDF pricing sent directly to architects, builders, and interior designers.", impact: "↑ High-margin B2B deals" }
      ]
    },
    {
      num: 6,
      name: "Retention — Loop It Back",
      desc: "Turning every closed sale into future Google reviews and repeat referrals.",
      tag: "Re-engagement",
      services: [
        { title: "Google Review Requests", desc: "Post-sale WhatsApp nudge with direct review link — boosting local Google search ranking.", impact: "↑ 4.9⭐ Star Rating" },
        { title: "Remarketing Campaigns", desc: "Meta & Display ads to non-converting visitors with fresh arrival updates & season offers.", impact: "↑ Return buyer visits" }
      ]
    }
  ];

  // Impact Matrix Table Data
  const impactMatrix = [
    { service: "Google Search + Maps Ads", stage: "Awareness", impact: "More high-intent local clicks & calls" },
    { service: "Google Business Profile Optimisation", stage: "Awareness", impact: "Higher rank in 'near me' map results (#1 Pack)" },
    { service: "Meta Ads (Reels / Feed)", stage: "Awareness", impact: "Brand recall across Gomti Nagar & Golf City" },
    { service: "5-Page Website + Landing Pages", stage: "Interest", impact: "Longer visits, stronger trust before contact" },
    { service: "Local & Trade Directory Listings", stage: "Interest", impact: "Contractor & bulk-buyer discovery" },
    { service: "Click-to-WhatsApp Buttons / Ads", stage: "Action", impact: "Lower cost-per-lead, instant contact" },
    { service: "WhatsApp Auto-Reply + Catalogue", stage: "Nurture", impact: "Faster response (<5s), higher qualification" },
    { service: "Sheet-Based CRM Tracking", stage: "Nurture", impact: "Full visibility into ROI, no lost leads" },
    { service: "Directions & Rate Sheet Push", stage: "Conversion", impact: "More showroom visits & bulk orders" },
    { service: "Review Requests + Remarketing", stage: "Retention", impact: "Better ratings, repeat & referral business" }
  ];

  // Tile Collection Data
  const tileCollections = [
    { id: 'eternity_slabs', name: 'Kajaria Eternity Slabs', sizes: '800x2400mm / 1200x2400mm', use: 'Living Room Walls & Grand Floors', badge: 'High Profit Margin' },
    { id: 'gvt_vitrified', name: 'Polished GVT Vitrified', sizes: '600x1200mm / 800x1600mm', use: 'High-Traffic Floors & Apartments', badge: 'Top Seller' },
    { id: 'luxury_bath', name: 'Glazed Bath & Wall Series', sizes: '300x900mm / 400x1200mm', use: 'Designer Bathrooms & Kitchens', badge: 'Popular Upgrade' },
    { id: 'wood_facade', name: 'Wood Finish & Facade Planks', sizes: '200x1200mm Planks', use: 'Elevations & Outdoor Patios', badge: 'Architect Favorite' }
  ];

  return (
    <div className="min-h-screen bg-[#05070a] text-gray-100 font-sans selection:bg-amber-500/30 selection:text-black overflow-x-hidden relative">
      
      {/* Dynamic Background Mesh Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full mesh-glow-amber animate-pulse-glow" />
        <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] rounded-full mesh-glow-violet animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-10 right-1/4 w-[700px] h-[700px] rounded-full mesh-glow-cyan animate-pulse-glow" style={{ animationDelay: '4s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      {/* Floating Glass Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/10 px-6 py-4 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 shadow-lg shadow-amber-500/20">
              <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center font-serif text-amber-400 font-bold text-xl">
                P
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-lg tracking-wide text-white">PRAYAS</span>
                <span className="text-xs px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-semibold uppercase tracking-wider">HOME DECOR</span>
              </div>
              <p className="text-[10px] text-gray-400 font-mono">Gomti Nagar Showroom • Kajaria Eternity Authorized</p>
            </div>
          </div>

          {/* Navigation Links with New 6-Stage Funnel Menu Item */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1.5 backdrop-blur-md">
            {[
              { id: 'workflow', label: 'Guided Strategy' },
              { id: 'funnel', label: '6-Stage Funnel Loop' },
              { id: 'impact', label: 'Impact Matrix' },
              { id: 'pillars', label: '6 Growth Pillars' },
              { id: 'showroom', label: 'Virtual Showroom' },
              { id: 'calculator', label: 'ROI Simulator' },
              { id: 'pricing', label: 'Investment Slabs' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold shadow-lg shadow-amber-500/25' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Header Actions including New 6-Stage Funnel Button */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => { setActiveTab('funnel'); document.getElementById('funnel')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 hover:bg-teal-500/20 text-xs font-bold transition-all"
            >
              <RotateCw className="w-3.5 h-3.5 text-teal-400 animate-spin-slow" />
              <span>Explore 6-Stage Funnel</span>
            </button>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-black font-bold text-xs tracking-wide uppercase transition-all shadow-[0_0_20px_rgba(245,158,11,0.35)] flex items-center gap-2 group"
            >
              <span>Approve Plan</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-8 pb-24">
        
        {/* HERO BANNER SECTION (Includes Sudarshan AI Labs Credits & Proposal Pills) */}
        <section className="relative rounded-3xl p-8 md:p-14 mb-16 overflow-hidden border border-amber-500/20 bg-gradient-to-b from-gray-900/80 via-black/80 to-gray-950/90 backdrop-blur-2xl shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Sparkles className="w-96 h-96 text-amber-500" />
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-6 shadow-inner">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Prepared by Sudarshan AI Labs Pvt. Ltd. • Kajaria Eternity Boutique</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-serif font-extrabold mb-6 leading-[1.12] text-white">
              Turning Prayas Home Decor's Showroom Into An <br />
              <span className="figma-gradient-text">Always-Open Digital Lead Engine</span>
            </h1>

            <p className="text-gray-300 text-base md:text-xl leading-relaxed mb-8 max-w-3xl font-light">
              A complete online-to-showroom lead funnel system — built by <strong className="text-teal-400 font-semibold">Sudarshan AI Labs</strong> — that converts Google searches, Maps views, and social scrolls into WhatsApp enquiries and footfall for tiles, sanitaryware, paints, and plywood.
            </p>

            {/* Pill Highlights from Lead-funnel-proposal */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {[
                "Website + Landing Pages",
                "Google Business & Maps",
                "WhatsApp Automation",
                "Local & Trade Directories",
                "Search + Meta Ads",
                "B2B Contractor Funnel"
              ].map((pill, i) => (
                <span key={i} className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium">
                  {pill}
                </span>
              ))}
            </div>

            {/* Hero Quick Call-to-Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={() => { setActiveTab('funnel'); document.getElementById('funnel')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-6 py-3.5 rounded-full bg-teal-500 hover:bg-teal-400 text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-teal-500/25"
              >
                <RotateCw className="w-4 h-4" />
                <span>View 6-Stage Funnel</span>
              </button>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-amber-500/25"
              >
                <span>Approve Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 1: INTERACTIVE GUIDED WORKFLOW EXPERIENCE */}
        <section id="workflow" className="mb-24 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">Guided Step-by-Step Experience</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mt-4 mb-4">
              The 5-Step Growth Workflow
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Click through each step below to inspect how we take a customer from an online search in Lucknow straight into your Gomti Nagar showroom.
            </p>
          </div>

          {/* Stepper Navigation Pills */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">
            {workflowSteps.map((step) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`p-4 rounded-2xl text-left border transition-all relative overflow-hidden flex flex-col justify-between h-32 ${
                    isActive 
                      ? `${step.bgLight} ${step.border} shadow-xl scale-[1.02]` 
                      : 'bg-gray-900/40 border-white/5 hover:border-white/20 hover:bg-gray-900/80'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className={`text-xs font-mono font-bold ${isActive ? 'text-amber-400' : 'text-gray-500'}`}>0{step.id}</span>
                    <Icon className={`w-5 h-5 ${isActive ? 'text-amber-400' : 'text-gray-500'}`} />
                  </div>
                  <div>
                    <div className={`text-xs font-bold line-clamp-1 ${isActive ? 'text-white' : 'text-gray-300'}`}>{step.title}</div>
                    <div className="text-[10px] text-gray-400 mt-1">{step.tag.split('•')[1]}</div>
                  </div>
                  {isActive && <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500" />}
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Interactive Panel */}
          {(() => {
            const currentStep = workflowSteps.find(s => s.id === activeStep) || workflowSteps[0];
            const StepIcon = currentStep.icon;

            return (
              <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 bg-gradient-to-br from-gray-900/90 to-black relative">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left Column: Context & Explanations */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
                      <StepIcon className="w-4 h-4" />
                      <span>{currentStep.tag}</span>
                    </div>

                    <h3 className="text-3xl font-serif font-bold text-white leading-tight">
                      {currentStep.title}
                    </h3>

                    <p className="text-gray-300 text-base leading-relaxed">
                      {currentStep.subtitle}
                    </p>

                    {/* Step Specific Walkthrough Details */}
                    {activeStep === 1 && (
                      <div className="space-y-4 pt-4 border-t border-white/10">
                        <div className="text-xs font-bold uppercase tracking-wider text-amber-400">Select Lucknow Target Hub:</div>
                        <div className="grid grid-cols-2 gap-2">
                          {Object.entries(localities).map(([key, loc]) => (
                            <button
                              key={key}
                              onClick={() => setSelectedLocality(key)}
                              className={`p-3 rounded-xl border text-left text-xs transition-all ${
                                selectedLocality === key 
                                  ? 'bg-amber-500/20 border-amber-500 text-white font-bold' 
                                  : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                              }`}
                            >
                              <div className="font-semibold text-white">{loc.name}</div>
                              <div className="text-[10px] text-amber-400 mt-1">{loc.volume}</div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeStep === 2 && (
                      <div className="space-y-3 pt-4 border-t border-white/10 text-sm text-gray-300">
                        <div className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-emerald-400" /> <span>0.8s Ultra-fast mobile performance score</span></div>
                        <div className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-emerald-400" /> <span>Kajaria Eternity Authorized Brand Compliant design</span></div>
                        <div className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-emerald-400" /> <span>1-Tap WhatsApp quote generator & PDF brochure download</span></div>
                      </div>
                    )}

                    {activeStep === 3 && (
                      <div className="space-y-3 pt-4 border-t border-white/10 text-sm text-gray-300">
                        <div className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-emerald-400" /> <span>Google Maps #1 position for 'Kajaria Eternity Gomti Nagar'</span></div>
                        <div className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-emerald-400" /> <span>IndiaMART Verified Supplier B2B lead stream</span></div>
                        <div className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-emerald-400" /> <span>Automated geotagged photo uploads & weekly client reviews</span></div>
                      </div>
                    )}

                    {activeStep === 4 && (
                      <div className="space-y-4 pt-4 border-t border-white/10">
                        <div className="text-xs font-bold uppercase tracking-wider text-amber-400">Select Ad Campaign Preview Format:</div>
                        <div className="flex gap-2">
                          {[
                            { id: 'meta_reels', label: 'Instagram Reel Ad' },
                            { id: 'google_search', label: 'Google Search Ad' }
                          ].map(fmt => (
                            <button
                              key={fmt.id}
                              onClick={() => setAdFormat(fmt.id)}
                              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                                adFormat === fmt.id ? 'bg-amber-500 text-black border-amber-500' : 'bg-white/5 border-white/10 text-gray-400'
                              }`}
                            >
                              {fmt.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeStep === 5 && (
                      <div className="space-y-3 pt-4 border-t border-white/10 text-sm text-gray-300">
                        <div className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-emerald-400" /> <span>Automated project qualification in under 5 seconds</span></div>
                        <div className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-emerald-400" /> <span>Instant Google Maps direction link dispatch</span></div>
                        <div className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-emerald-400" /> <span>Direct lead notification sent to Prayas sales team WhatsApp</span></div>
                      </div>
                    )}

                    {/* Step Navigation Controls */}
                    <div className="flex items-center gap-4 pt-6">
                      <button 
                        onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
                        disabled={activeStep === 1}
                        className="px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-gray-300 text-xs font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10"
                      >
                        Previous Step
                      </button>
                      <button 
                        onClick={() => setActiveStep(prev => Math.min(5, prev + 1))}
                        disabled={activeStep === 5}
                        className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg shadow-amber-500/20"
                      >
                        <span>Next Step</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Dynamic Interactive Preview UI */}
                  <div className="lg:col-span-6">
                    {activeStep === 1 && (
                      <div className="bg-black/60 p-6 rounded-2xl border border-amber-500/20 space-y-6">
                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                          <div>
                            <div className="text-xs font-bold uppercase text-amber-400">Lucknow Search Intensity</div>
                            <div className="text-lg font-serif font-bold text-white">{localities[selectedLocality].name}</div>
                          </div>
                          <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20">
                            Active Lead Demand
                          </span>
                        </div>

                        <div className="space-y-4">
                          <div className="bg-gray-900/60 p-4 rounded-xl border border-white/5 flex justify-between items-center">
                            <span className="text-sm text-gray-400">Monthly High-Intent Queries</span>
                            <span className="text-lg font-mono font-bold text-white">{localities[selectedLocality].volume}</span>
                          </div>
                          <div className="bg-gray-900/60 p-4 rounded-xl border border-white/5 flex justify-between items-center">
                            <span className="text-sm text-gray-400">Buyer Intent Profile</span>
                            <span className="text-sm font-semibold text-amber-400">{localities[selectedLocality].intent}</span>
                          </div>
                          <div className="bg-gray-900/60 p-4 rounded-xl border border-white/5 flex justify-between items-center">
                            <span className="text-sm text-gray-400">Estimated Target CPL</span>
                            <span className="text-lg font-mono font-bold text-emerald-400">{localities[selectedLocality].leadCost}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeStep === 2 && (
                      <div className="w-full max-w-xs mx-auto bg-black p-4 rounded-[2.5rem] border-4 border-gray-800 shadow-2xl space-y-4">
                        <div className="bg-gray-900 p-3 rounded-2xl border border-white/10 flex items-center justify-between">
                          <div className="text-xs font-bold font-serif text-amber-400">PRAYAS HOME DECOR</div>
                          <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">0.8s⚡</span>
                        </div>
                        <div className="bg-gradient-to-br from-amber-500/20 to-black p-4 rounded-xl border border-amber-500/30 text-center">
                          <div className="text-xs font-bold text-white mb-1">Kajaria Eternity Slabs</div>
                          <div className="text-[10px] text-gray-400 mb-3">Authorized Gomti Nagar Showroom</div>
                          <button className="w-full py-2 bg-amber-500 text-black text-[10px] font-bold rounded-lg flex items-center justify-center gap-1">
                            <MessageCircle className="w-3 h-3" /> Get WhatsApp Quote
                          </button>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[10px] text-gray-300">
                          <div className="bg-gray-900 p-2 rounded-lg border border-white/5 text-center">800x2400 Slabs</div>
                          <div className="bg-gray-900 p-2 rounded-lg border border-white/5 text-center">Bathroom GVT</div>
                        </div>
                      </div>
                    )}

                    {activeStep === 3 && (
                      <div className="bg-gray-950 p-6 rounded-2xl border border-emerald-500/30 space-y-4">
                        <div className="flex items-center gap-2 text-xs text-gray-400 border-b border-white/10 pb-3">
                          <MapPin className="w-4 h-4 text-emerald-400" />
                          <span>Google Maps Local Search Pack • Gomti Nagar</span>
                        </div>

                        <div className="bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/40 space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="font-bold text-white text-base">Prayas Home Decor - Kajaria Eternity</div>
                            <span className="text-[10px] bg-emerald-500 text-black px-2 py-0.5 rounded font-bold">#1 RESULT</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-amber-400">
                            <span className="font-bold">4.9</span>
                            <div className="flex text-amber-400">★★★★★</div>
                            <span className="text-gray-400">(148 reviews)</span>
                          </div>
                          <div className="text-xs text-gray-300">Tile Shop • Gomti Nagar Main Rd, Lucknow</div>
                          <div className="pt-2 flex gap-2">
                            <button className="px-3 py-1.5 bg-emerald-500 text-black text-xs font-bold rounded-lg flex items-center gap-1">
                              <Navigation className="w-3 h-3" /> Directions
                            </button>
                            <button className="px-3 py-1.5 bg-gray-800 text-white text-xs font-medium rounded-lg flex items-center gap-1">
                              <PhoneCall className="w-3 h-3" /> Call Showroom
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeStep === 4 && (
                      <div className="bg-black p-6 rounded-2xl border border-purple-500/30 space-y-4">
                        {adFormat === 'meta_reels' ? (
                          <div className="max-w-xs mx-auto bg-gray-900 rounded-2xl border border-purple-500/40 overflow-hidden">
                            <div className="p-3 bg-gray-950 flex items-center justify-between text-xs text-gray-300">
                              <span className="font-bold text-purple-400">Sponsored • Instagram Reel</span>
                              <span className="text-[10px] text-gray-500">10km Geo Radius</span>
                            </div>
                            <div className="h-48 bg-gradient-to-br from-purple-900/40 via-amber-900/30 to-black p-4 flex flex-col justify-end text-left relative">
                              <div className="text-xs font-bold text-white mb-1">Redesigning your Living Room in Gomti Nagar?</div>
                              <div className="text-[10px] text-gray-300 mb-3">Explore 800x2400mm Kajaria Eternity Slabs at Prayas Home Decor.</div>
                              <button className="w-full py-2 bg-amber-500 text-black text-xs font-bold rounded-lg">
                                Visit Showroom / Get Brochure
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="bg-gray-900 p-4 rounded-xl border border-blue-500/40 space-y-2">
                            <div className="text-[10px] text-gray-400 font-mono">Ad • www.prayashomedecor.com/kajaria-eternity</div>
                            <div className="text-sm font-bold text-blue-400 hover:underline">Kajaria Eternity Showroom Lucknow | Prayas Home Decor Gomti Nagar</div>
                            <div className="text-xs text-gray-300">Official Authorized Dealer. Huge Collection of 800x2400mm Slabs, Bath GVT & Floor Tiles. Instant Pricing on WhatsApp.</div>
                          </div>
                        )}
                      </div>
                    )}

                    {activeStep === 5 && (
                      <div className="bg-black p-6 rounded-2xl border border-emerald-500/30 space-y-4">
                        <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                          <div className="w-8 h-8 rounded-full bg-emerald-500 text-black flex items-center justify-center font-bold text-xs">P</div>
                          <div>
                            <div className="text-xs font-bold text-white">Prayas Qualification Engine</div>
                            <div className="text-[10px] text-emerald-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Auto Lead Dispatcher</div>
                          </div>
                        </div>

                        <div className="space-y-3 text-xs">
                          <div className="bg-gray-800/80 p-3 rounded-2xl rounded-tl-none border border-white/5 text-gray-200 max-w-[85%]">
                            Namaste! 🙏 Welcome to Prayas Home Decor (Kajaria Eternity Gomti Nagar). What is your project type?
                          </div>
                          <div className="bg-emerald-600/90 p-2.5 rounded-2xl rounded-tr-none text-white max-w-[80%] ml-auto text-right font-medium">
                            {botChoiceProject} • {botChoiceSize}
                          </div>
                          <div className="bg-gray-800/80 p-3 rounded-2xl rounded-tl-none border border-white/5 text-gray-200 max-w-[85%]">
                            📍 Excellent! Here is our Google Maps location link & VIP Appointment Ticket for our Gomti Nagar showroom.
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            );
          })()}
        </section>

        {/* SECTION 2: 6-STAGE CONTINUOUS FUNNEL LOOP (From Lead-funnel-proposal/index.html) */}
        <section id="funnel" className="mb-24 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">The Complete Lead Engine</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mt-4 mb-4">
              Six Stages, One Continuous Loop
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Every service below plugs into a single connected system — a customer who sees a Google ad ends up messaging on WhatsApp, and every closed sale feeds the next stage of visibility.
            </p>
          </div>

          {/* Staggered Funnel Timeline Grid */}
          <div className="space-y-8 max-w-5xl mx-auto">
            {funnelStages.map((stage) => {
              const isActive = activeFunnelStage === stage.num;
              return (
                <div 
                  key={stage.num}
                  className={`glass-card p-6 md:p-8 rounded-3xl border transition-all ${
                    isActive ? 'border-teal-500/40 bg-gradient-to-r from-teal-950/30 to-black shadow-xl' : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-teal-500 text-black font-serif font-bold text-xl flex items-center justify-center shadow-lg shadow-teal-500/20 shrink-0">
                        {stage.num}
                      </div>
                      <div>
                        <div className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-2.5 py-0.5 rounded border border-teal-500/20 mb-1">
                          {stage.tag}
                        </div>
                        <h3 className="text-xl font-serif font-bold text-white">{stage.name}</h3>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 max-w-md">{stage.desc}</p>
                  </div>

                  {/* Stage Service Cards */}
                  <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                    {stage.services.map((svc, i) => (
                      <div key={i} className="bg-black/50 p-4 rounded-2xl border border-white/5 space-y-2 hover:border-teal-500/30 transition-all">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-white">{svc.title}</h4>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                            {svc.impact}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed">{svc.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 3: SERVICE-TO-IMPACT MATRIX TABLE (From Lead-funnel-proposal/index.html) */}
        <section id="impact" className="mb-24 scroll-mt-24">
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-teal-500/20 bg-gradient-to-b from-gray-900/80 to-black">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-mono uppercase tracking-widest text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">Empirical Business Results</span>
              <h2 className="text-3xl font-serif font-bold text-white mt-3 mb-2">Service-to-Impact Breakdown</h2>
              <p className="text-gray-400 text-sm">A transparent overview of what each component delivers for Prayas Home Decor.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-xs font-mono uppercase tracking-wider text-amber-400 bg-white/5">
                    <th className="p-4 rounded-tl-xl">Service Component</th>
                    <th className="p-4">Funnel Stage</th>
                    <th className="p-4 rounded-tr-xl">Concrete Business Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {impactMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="p-4 font-semibold text-white flex items-center gap-2">
                        <CheckSquare className="w-4 h-4 text-teal-400" />
                        <span>{row.service}</span>
                      </td>
                      <td className="p-4">
                        <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
                          {row.stage}
                        </span>
                      </td>
                      <td className="p-4 font-mono font-medium text-emerald-400">{row.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 4: THE 6 PILLARS OF DIGITAL DOMINANCE */}
        <section id="pillars" className="mb-24 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">Full Spectrum Engine</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mt-4 mb-4">
              The 6 Pillars of Growth
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Every channel optimized for local tile buyer acquisition across Lucknow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: "1. Showcase Website",
                desc: "High-conversion 5-page digital showroom featuring Kajaria Eternity collections, fast mobile load, and instant catalog downloads.",
                kpi: "0.8s Speed Score",
                color: "from-blue-500/20 to-cyan-500/10"
              },
              {
                icon: MapPin,
                title: "2. Local SEO & GBP",
                desc: "Dominating Google Maps Local Pack in Gomti Nagar & surrounding luxury hubs to drive direct footfall & phone enquiries.",
                kpi: "#1 Maps Pack Position",
                color: "from-amber-500/20 to-orange-500/10"
              },
              {
                icon: Layers,
                title: "3. B2B Trade Saturation",
                desc: "IndiaMART & trade directory setup for bulk orders from Gomti Nagar architects, interior designers, and builders.",
                kpi: "High-Margin Bulk Orders",
                color: "from-emerald-500/20 to-teal-500/10"
              },
              {
                icon: Zap,
                title: "4. Aspirational Social Feeds",
                desc: "High-end Instagram & Meta reels showcasing 800x2400mm Eternity slab installations targeting luxury villa owners.",
                kpi: "High Brand Recall",
                color: "from-purple-500/20 to-pink-500/10"
              },
              {
                icon: TrendingUp,
                title: "5. Geo-Fenced Performance Ads",
                desc: "Tightly geo-fenced Meta & Google Search campaigns capturing ready-to-buy tile customers within a 10km radius.",
                kpi: "₹145 Target CPL",
                color: "from-red-500/20 to-rose-500/10"
              },
              {
                icon: MessageCircle,
                title: "6. WhatsApp CRM Engine",
                desc: "Automated qualification bot filtering serious buyers by project size, sending Google directions & booking appointments.",
                kpi: "5-Sec Lead Response",
                color: "from-emerald-400/20 to-green-500/10"
              }
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="glass-card glass-card-hover p-8 rounded-3xl relative overflow-hidden group flex flex-col justify-between"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  
                  <div>
                    <div className="flex items-center justify-between mb-6 relative z-10">
                      <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        {pillar.kpi}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 relative z-10 group-hover:text-amber-400 transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed relative z-10 font-light">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-gray-500 relative z-10">
                    <span>Prayas Growth Standard</span>
                    <ChevronRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 5: VIRTUAL ETERNITY COLLECTION SHOWCASE */}
        <section id="showroom" className="mb-24 scroll-mt-24">
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-amber-500/20 bg-gradient-to-b from-gray-900/60 to-black">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400">Featured Collections</span>
                <h2 className="text-3xl font-serif font-bold text-white mt-1">Kajaria Eternity Category Showcase</h2>
              </div>
              
              {/* Category Pills */}
              <div className="flex flex-wrap gap-2">
                {tileCollections.map((col) => (
                  <button
                    key={col.id}
                    onClick={() => setSelectedTileCategory(col.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                      selectedTileCategory === col.id 
                        ? 'bg-amber-500 text-black border-amber-500 shadow-md' 
                        : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                    }`}
                  >
                    {col.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Display Selected Tile Info */}
            {(() => {
              const tile = tileCollections.find(t => t.id === selectedTileCategory) || tileCollections[0];
              return (
                <div className="grid md:grid-cols-2 gap-8 items-center bg-black/40 p-8 rounded-2xl border border-white/10">
                  <div className="space-y-4">
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase">
                      {tile.badge}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-white">{tile.name}</h3>
                    <div className="text-sm text-gray-300"><strong>Available Sizes:</strong> {tile.sizes}</div>
                    <div className="text-sm text-gray-300"><strong>Primary Application:</strong> {tile.use}</div>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Optimized in digital campaigns to attract high-budget villa owners and interior designers seeking premium seamless finishes in Gomti Nagar.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-amber-900/30 via-gray-900 to-black p-8 rounded-xl border border-amber-500/20 text-center space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto font-serif text-2xl font-bold">
                      K
                    </div>
                    <div className="text-sm font-bold text-white">Digital Lead Conversion Angle</div>
                    <div className="text-xs text-gray-400">"Direct Showroom Stock Reservation on WhatsApp"</div>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>

        {/* SECTION 6: ADVANCED ROI & REVENUE PROJECTION ENGINE */}
        <section id="calculator" className="mb-24 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">Empirical Business Model</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mt-4 mb-4">
              ROI & Revenue Simulator
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Adjust the monthly ad spend and average order value sliders to calculate projected showroom walk-ins and revenue.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Sliders Input Panel */}
            <div className="lg:col-span-7 glass-card p-8 md:p-10 rounded-3xl border border-white/10 space-y-8">
              
              {/* Slider 1: Monthly Ad Spend */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-mono font-bold text-gray-300 uppercase tracking-widest">Monthly Ad Budget (₹)</label>
                  <span className="text-2xl font-mono font-bold text-amber-400">₹{adBudget.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="10000" 
                  max="100000" 
                  step="5000" 
                  value={adBudget} 
                  onChange={(e) => setAdBudget(Number(e.target.value))} 
                  className="w-full h-2.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-500" 
                />
                <div className="flex justify-between text-[10px] text-gray-500 mt-2 font-mono">
                  <span>₹10,000 (Starter)</span>
                  <span>₹50,000 (Dominance)</span>
                  <span>₹1,00,000 (Monopoly)</span>
                </div>
              </div>

              {/* Slider 2: Average Order Value */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-mono font-bold text-gray-300 uppercase tracking-widest">Avg. Order Value (₹)</label>
                  <span className="text-2xl font-mono font-bold text-amber-400">₹{avgOrder.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="25000" 
                  max="300000" 
                  step="5000" 
                  value={avgOrder} 
                  onChange={(e) => setAvgOrder(Number(e.target.value))} 
                  className="w-full h-2.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-500" 
                />
                <div className="flex justify-between text-[10px] text-gray-500 mt-2 font-mono">
                  <span>₹25k (Single Bath)</span>
                  <span>₹150k (Villa Floor)</span>
                  <span>₹300k (Full House Slabs)</span>
                </div>
              </div>

              {/* Slider 3: Conversion Rate */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-mono font-bold text-gray-300 uppercase tracking-widest">Showroom Walk-in Conv. Rate (%)</label>
                  <span className="text-2xl font-mono font-bold text-emerald-400">{convRate}%</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="35" 
                  step="1" 
                  value={convRate} 
                  onChange={(e) => setConvRate(Number(e.target.value))} 
                  className="w-full h-2.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-500" 
                />
              </div>

            </div>

            {/* Output Results Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-amber-950/40 via-gray-900 to-black p-8 md:p-10 rounded-3xl border border-amber-500/30 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                <BarChart3 className="w-64 h-64 text-amber-500" />
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  Projected Monthly Revenue
                </span>
                <div className="text-4xl md:text-5xl font-serif font-extrabold text-amber-400 my-4">
                  ₹{totalRevenue.toLocaleString()}
                </div>
                <div className="text-xs text-gray-400">Estimated Gross Tile Sales Generated</div>
              </div>

              <div className="space-y-4 my-8 pt-6 border-t border-white/10 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Qualified Enquiries</span>
                  <span className="font-mono font-bold text-white">{totalLeads} leads</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Showroom Walk-ins</span>
                  <span className="font-mono font-bold text-white">{totalWalkins} visits</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Estimated Closed Deals</span>
                  <span className="font-mono font-bold text-emerald-400">{closedDeals} orders</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Target ROAS Multiplier</span>
                  <span className="font-mono font-bold text-amber-400">{roas}x ROAS</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-center">
                <div className="text-xs text-gray-300">Est. Net Profit (After Ad Cost)</div>
                <div className="text-2xl font-mono font-bold text-emerald-400 mt-1">₹{netAdProfit.toLocaleString()}</div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 7: INVESTMENT SLABS & SETUP FEE BREAKDOWN */}
        <section id="pricing" className="mb-24 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">Transparent Growth Plans</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mt-4 mb-4">
              Investment Slabs & Setup
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-8">
              Select the optimal plan to scale Prayas Home Decor's digital presence. Ad spend is separate and fully controlled by you.
            </p>

            {/* Billing Cycle Switcher */}
            <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-white/5 border border-white/10">
              <button
                onClick={() => setPricingCycle('monthly')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  pricingCycle === 'monthly' ? 'bg-amber-500 text-black' : 'text-gray-400'
                }`}
              >
                Monthly Retainer
              </button>
              <button
                onClick={() => setPricingCycle('quarterly')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  pricingCycle === 'quarterly' ? 'bg-amber-500 text-black' : 'text-gray-400'
                }`}
              >
                Quarterly (15% Off)
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Starter Plan */}
            <div className="glass-card glass-card-hover p-8 md:p-10 rounded-3xl border border-white/10 flex flex-col justify-between relative">
              <div>
                <span className="text-xs font-mono uppercase text-gray-400">Starter Foundation</span>
                <h3 className="text-2xl font-serif font-bold text-white mt-1 mb-2">Starter Plan</h3>
                <p className="text-gray-400 text-sm mb-4">Build a clean, optimized digital footprint across Lucknow.</p>

                <div className="text-4xl font-mono font-bold text-white mb-2">
                  ₹{pricingCycle === 'monthly' ? '9,999' : '8,499'}
                  <span className="text-xs font-normal text-gray-500">/month</span>
                </div>
                <div className="text-xs font-mono text-amber-400 mb-6">+ ₹8,999 one-time setup fee</div>

                <ul className="space-y-4 text-sm text-gray-300 mb-8 border-t border-white/10 pt-6">
                  {[
                    "5-Page Mobile Showroom Website + Landing Pages",
                    "Google Business Profile & Maps Optimisation",
                    "Top 10 Local & Trade Directory Listings",
                    "8-12 Social Media Posts / Reels Monthly",
                    "WhatsApp Setup & Basic Ads Management",
                    "Monthly Performance & Lead Summary Report"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full py-4 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                Select Starter Plan
              </button>
            </div>

            {/* Growth / Accelerated Plan (Recommended) */}
            <div className="glass-card glass-card-hover p-8 md:p-10 rounded-3xl border-2 border-amber-500 bg-gradient-to-b from-amber-500/10 via-gray-900/60 to-black flex flex-col justify-between relative shadow-2xl">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-600 text-black px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                ★ RECOMMENDED FOR GOMTI NAGAR HUB
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-amber-400">Full Saturation Slab</span>
                <h3 className="text-2xl font-serif font-bold text-white mt-1 mb-2">Growth Plan</h3>
                <p className="text-gray-300 text-sm mb-4">Complete market dominance & direct WhatsApp lead generation.</p>

                <div className="text-4xl font-mono font-bold text-amber-400 mb-2">
                  ₹{pricingCycle === 'monthly' ? '14,999' : '12,699'}
                  <span className="text-xs font-normal text-gray-500">/month</span>
                </div>
                <div className="text-xs font-mono text-amber-400 mb-6">+ ₹11,999 one-time setup fee</div>

                <ul className="space-y-4 text-sm text-gray-200 mb-8 border-t border-white/10 pt-6">
                  {[
                    "Everything in Starter Plan with Deeper Content",
                    "Full Search + Meta Ad Campaign Management",
                    "WhatsApp Automation Bot & CRM Tracking Sheet",
                    "Google Review Management & Retargeting Ads",
                    "IndiaMART B2B Trade Catalog Integration",
                    "Monthly Performance Report with Verified Lead Numbers",
                    "Dedicated Account Lead Manager & Priority Support"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-black font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(245,158,11,0.35)]"
              >
                Approve Growth Plan Proposal
              </button>
            </div>

          </div>

          <div className="text-center text-xs text-gray-400 mt-8 font-mono">
            * Recommended starting ad media budget: ₹10,000 – ₹15,000 / month (fully controlled by Prayas Home Decor).
          </div>
        </section>

      </main>

      {/* PROPOSAL APPROVAL MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
          <div className="bg-gray-900 border border-amber-500/30 rounded-3xl p-8 max-w-md w-full relative shadow-2xl">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-2"
            >
              <X className="w-5 h-5" />
            </button>

            {!isApproved ? (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto mb-3">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">Approve Digital Proposal</h3>
                  <p className="text-xs text-gray-400 mt-1">Sudarshan AI Labs • Prayas Home Decor Growth Slot</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-gray-300 block mb-1">Your Name / Representative</label>
                    <input 
                      type="text" 
                      value={contactName} 
                      onChange={(e) => setContactName(e.target.value)} 
                      className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white text-sm focus:border-amber-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-300 block mb-1">WhatsApp Mobile Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 98765 43210" 
                      value={contactPhone} 
                      onChange={(e) => setContactPhone(e.target.value)} 
                      className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white text-sm focus:border-amber-500 outline-none"
                    />
                  </div>
                </div>

                <button 
                  onClick={() => setIsApproved(true)}
                  className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20"
                >
                  Confirm & Lock Proposal
                </button>
              </div>
            ) : (
              <div className="text-center space-y-4 py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">Proposal Approved!</h3>
                <p className="text-sm text-gray-300">
                  Thank you, <strong className="text-white">{contactName}</strong>. The Sudarshan AI Labs team will connect via WhatsApp at <span className="text-amber-400">{contactPhone || '+91 registered number'}</span> to initiate onboarding.
                </p>
                <button 
                  onClick={() => { setIsModalOpen(false); setIsApproved(false); }}
                  className="px-6 py-2.5 rounded-xl bg-gray-800 text-white text-xs font-bold mt-4"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer (Includes Sudarshan AI Labs credits) */}
      <footer className="border-t border-white/10 bg-black/80 py-8 px-6 text-center text-xs text-gray-500 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>Prepared by Sudarshan AI Labs Pvt. Ltd. for Prayas Home Decor, Gomti Nagar, Lucknow.</div>
          <div className="flex items-center gap-4">
            <span>Confidential Proposal</span>
            <span>•</span>
            <span className="text-amber-400">Digital Lead Funnel System</span>
          </div>
        </div>
      </footer>

    </div>
  );
}