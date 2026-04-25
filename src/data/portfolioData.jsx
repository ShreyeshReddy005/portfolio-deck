import { motion } from 'framer-motion';

// --- ANIMATION VARIANTS ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

export const CARDS_DATA = [
  {
    id: 'about',
    title: 'ABOUT ME',
    number: '01',
    bgColor: 'bg-[#E11D48]', // Rose 600
    textColor: 'text-rose-200',
    Content: () => (
      <motion.div 
        variants={staggerContainer} initial="hidden" animate="visible"
        className="h-full overflow-y-auto custom-scrollbar text-neutral-200 focus:outline-none relative bg-black" 
        tabIndex={0}
      >
        <div className="px-5 pb-16 pt-10 md:px-14 md:pb-24 md:pt-16 relative z-10 flex flex-col gap-12 md:gap-16">
          
          {/* Top Section: Text (Left) and Profile Picture (Right) */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
            
            {/* Left: Intro Text */}
            <div className="flex-1 w-full text-center lg:text-left">
              <motion.div variants={itemAnim} className="mb-8">
                <p className="text-[10px] font-mono tracking-[0.2em] text-rose-500 uppercase mb-4 font-bold drop-shadow-md">01 // The Architect & PM</p>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] font-display text-white drop-shadow-lg">
                  T Shreyesh<br/>Reddy
                </h2>
                <p className="inline-block bg-white/5 backdrop-blur-md text-rose-400 font-bold tracking-widest uppercase mt-6 text-[10px] md:text-xs border border-white/10 rounded-full px-4 py-1.5 shadow-xl">
                  Architecture • Product • Strategy
                </p>
              </motion.div>

              <motion.variants variants={itemAnim}>
                <p className="text-lg md:text-xl text-neutral-400 font-medium leading-relaxed text-balance max-w-2xl mx-auto lg:mx-0">
                  I build systems that scale—whether it's physical architecture, federated search engines, or digital logistics networks. I am obsessed with finding the intersection where human behavior, clean design, and ruthless operational efficiency meet. I don't just design interfaces; I map real-world failure points and build solutions that feel inevitable.
                </p>
              </motion.variants>
            </div>

            {/* Right: Profile Picture */}
            <motion.div variants={itemAnim} className="w-full max-w-[280px] lg:w-[320px] shrink-0 mx-auto lg:mx-0">
              <div className="relative w-full aspect-[4/5] flex items-center justify-center">
                {/* Subtle cinematic backglow */}
                <div className="absolute inset-0 bg-rose-500/10 blur-[60px] rounded-full"></div>
                
                {/* Masked Image for flawless edge blending */}
                <img 
                  src="/profile.jpg" 
                  alt="T Shreyesh Reddy" 
                  className="relative z-10 w-full h-full object-contain scale-110"
                  style={{
                    maskImage: 'radial-gradient(ellipse at center, black 45%, transparent 75%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 45%, transparent 75%)'
                  }}
                />
              </div>
            </motion.div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12">
            {/* Education Timeline */}
            <motion.div variants={itemAnim}>
              <h3 className="text-[10px] font-black text-rose-500 mb-8 uppercase tracking-widest border-b border-white/10 pb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-rose-500 rounded-full shadow-[0_0_10px_rgba(225,29,72,0.8)]"></span> Education
              </h3>
              <div className="space-y-8 pl-3 border-l-2 border-white/5">
                <div className="relative group">
                  <div className="absolute -left-[17px] top-2 w-3 h-3 bg-neutral-900 border-2 border-rose-500 rounded-full group-hover:bg-rose-500 transition-colors shadow-[0_0_10px_rgba(225,29,72,0.5)]"></div>
                  <p className="font-black text-xl leading-tight uppercase tracking-tight font-display text-white">B.Arch (Hons)</p>
                  <p className="text-sm font-bold text-neutral-500 mt-1">IIT Kharagpur</p>
                  <p className="text-xs font-mono text-rose-400 tracking-wider mt-2 bg-white/5 border border-white/10 inline-block px-2 py-0.5 rounded">2022-2027 / CGPA: 8.27</p>
                </div>
                <div className="relative group">
                  <div className="absolute -left-[17px] top-2 w-3 h-3 bg-neutral-900 border-2 border-neutral-600 rounded-full group-hover:border-rose-400 transition-colors"></div>
                  <p className="font-black text-xl leading-tight uppercase tracking-tight font-display text-white">TSBIE</p>
                  <p className="text-sm font-bold text-neutral-500 mt-1">Sri Chaitanya Junior College</p>
                  <p className="text-xs font-mono text-neutral-500 tracking-wider mt-2">2022 / 97.7%</p>
                </div>
              </div>
            </motion.div>

            {/* Stack */}
            <motion.div variants={itemAnim}>
              <h3 className="text-[10px] font-black text-rose-500 mb-8 uppercase tracking-widest border-b border-white/10 pb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-rose-500 rounded-full shadow-[0_0_10px_rgba(225,29,72,0.8)]"></span> The Stack
              </h3>
              
              <div className="mb-8">
                <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-4">Product & Data</p>
                <div className="flex flex-wrap gap-2">
                  {['SQL', 'Excel', 'Power BI', 'Tableau', 'Airtable', 'n8n', 'Analytics', 'Jira'].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/10 shadow-sm text-neutral-300 text-xs font-bold tracking-wide rounded-md hover:bg-white/10 hover:border-rose-500/50 hover:text-white transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-4">Design & Arch</p>
                <div className="flex flex-wrap gap-2">
                  {['Figma', 'Replit', 'SketchUp', 'AutoCAD', 'Revit', 'Rhinoceros', 'Grasshopper'].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/10 shadow-sm text-neutral-300 text-xs font-bold tracking-wide rounded-md hover:bg-white/10 hover:border-rose-500/50 hover:text-white transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    )
  },
  {
    id: 'ventures',
    title: 'VENTURES',
    number: '02',
    bgColor: 'bg-[#2563EB]', // Blue 600
    textColor: 'text-blue-200',
    Content: () => (
      <motion.div 
        variants={staggerContainer} initial="hidden" animate="visible"
        className="h-full overflow-y-auto custom-scrollbar px-5 pb-10 pt-20 md:px-14 md:pt-32 md:pb-16 text-neutral-200 focus:outline-none relative bg-neutral-900" 
        tabIndex={0}
      >
        <motion.div variants={itemAnim} className="mb-16">
          <p className="text-[10px] font-mono tracking-[0.2em] text-blue-500 uppercase mb-4 font-bold drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">02 // Entrepreneurial Builds</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] font-display text-white">
            Ventures &<br/>Products
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-white/10 pl-6 md:pl-8 space-y-16">
          
          {/* MediVault */}
          <motion.div variants={itemAnim} className="relative group">
            <div className="absolute -left-[35px] md:-left-[43px] top-2 w-4 h-4 bg-neutral-900 border-4 border-blue-500 rounded-full group-hover:scale-125 group-hover:bg-blue-500 transition-all shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4 gap-2">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white group-hover:text-blue-400 transition-colors font-display">MediVault</h3>
              <span className="text-[11px] font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full font-bold uppercase tracking-widest">May '25 - Present</span>
            </div>
            <p className="text-base italic text-neutral-400 mb-6 font-serif border-l-2 border-white/10 pl-4">
              "Because decoding your meds shouldn't need a doctor or a magnifying glass."
            </p>
            <ul className="space-y-3 text-sm text-neutral-400 font-medium max-w-3xl list-none">
              <li className="flex items-start"><span className="text-blue-500 mr-3">✦</span> Built AI-driven OCR+NLP tech (91.3% accuracy) to extract dosage and frequency from handwritten prescriptions.</li>
              <li className="flex items-start"><span className="text-blue-500 mr-3">✦</span> Integrated low-stock alerts and temporal nudges, boosting adherence by 40%.</li>
              <li className="flex items-start"><span className="text-blue-500 mr-3">✦</span> Enabled 1-tap WhatsApp sync for seamless care continuity.</li>
            </ul>
          </motion.div>

          {/* Pirateverse */}
          <motion.div variants={itemAnim} className="relative group">
            <div className="absolute -left-[35px] md:-left-[43px] top-2 w-4 h-4 bg-neutral-900 border-4 border-neutral-600 rounded-full group-hover:border-blue-400 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] transition-all"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4 gap-2">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white group-hover:text-blue-400 transition-colors font-display">Pirateverse</h3>
              <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">May '24 - Jun '24</span>
            </div>
            <p className="text-base italic text-neutral-400 mb-6 font-serif border-l-2 border-white/10 pl-4">
              "Everyone had a favorite pirated site. I built a search engine for all of them."
            </p>
            <ul className="space-y-3 text-sm text-neutral-400 font-medium max-w-3xl list-none">
              <li className="flex items-start"><span className="text-neutral-600 mr-3">✦</span> Built scalable crawler across 12+ domains with alias mapping—cut search latency by ~80%.</li>
              <li className="flex items-start"><span className="text-neutral-600 mr-3">✦</span> Designed adaptive failovers preserving 1K+ item index despite domain takedowns.</li>
              <li className="flex items-start"><span className="text-neutral-600 mr-3">✦</span> Solved edge-content discovery gaps for 100+ users where legacy engines failed.</li>
            </ul>
          </motion.div>

          {/* Infinite Closet */}
          <motion.div variants={itemAnim} className="relative group">
            <div className="absolute -left-[35px] md:-left-[43px] top-2 w-4 h-4 bg-neutral-900 border-4 border-neutral-600 rounded-full group-hover:border-blue-400 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] transition-all"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4 gap-2">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white group-hover:text-blue-400 transition-colors font-display">The Infinite Closet</h3>
              <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">Mar '22 - Aug '22</span>
            </div>
            <p className="text-base italic text-neutral-400 mb-6 font-serif border-l-2 border-white/10 pl-4">
              "When outfits became currency, I built the logistics to trade them."
            </p>
            <ul className="space-y-3 text-sm text-neutral-400 font-medium max-w-3xl list-none">
              <li className="flex items-start"><span className="text-neutral-600 mr-3">✦</span> Ran decentralized P2P rental network across 3 hostels, achieving 82% utilization.</li>
              <li className="flex items-start"><span className="text-neutral-600 mr-3">✦</span> Diagnosed scale bottlenecks in hygiene, routing, and mapped real-world failure points.</li>
              <li className="flex items-start"><span className="text-neutral-600 mr-3">✦</span> Prototyped "FashionLoop" thesis for high-churn wardrobe sharing with behavioral tokens.</li>
            </ul>
          </motion.div>

          {/* Gatepass */}
          <motion.div variants={itemAnim} className="relative group">
            <div className="absolute -left-[35px] md:-left-[43px] top-2 w-4 h-4 bg-neutral-900 border-4 border-neutral-600 rounded-full group-hover:border-blue-400 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] transition-all"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4 gap-2">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white group-hover:text-blue-400 transition-colors font-display">GatePass OS</h3>
              <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">May '25 - Jun '25</span>
            </div>
            <p className="text-base italic text-neutral-400 mb-6 font-serif border-l-2 border-white/10 pl-4">
              "From lines and signatures to QR and sync—outing made instant."
            </p>
            <ul className="space-y-3 text-sm text-neutral-400 font-medium max-w-3xl list-none">
              <li className="flex items-start"><span className="text-neutral-600 mr-3">✦</span> Built 4-role credentialed workflow replacing paper ops with live digital approvals.</li>
              <li className="flex items-start"><span className="text-neutral-600 mr-3">✦</span> Deployed QR+OTP access processing 60+ transactions/week with 0% error rate.</li>
            </ul>
          </motion.div>

        </div>
      </motion.div>
    )
  },
  {
    id: 'projects',
    title: 'PROJECTS',
    number: '03',
    bgColor: 'bg-[#D97706]', // Amber 600
    textColor: 'text-amber-200',
    Content: () => (
      <motion.div 
        variants={staggerContainer} initial="hidden" animate="visible"
        className="h-full overflow-y-auto custom-scrollbar px-6 pb-12 pt-28 md:px-14 md:pt-32 md:pb-16 text-neutral-200 focus:outline-none bg-neutral-900" 
        tabIndex={0}
      >
        <motion.div variants={itemAnim} className="mb-16">
          <p className="text-[10px] font-mono tracking-[0.2em] text-amber-500 uppercase mb-4 font-bold drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">03 // Systems & Arch</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] font-display text-white">
            Architecture &<br/>Systems
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* CO2 Roof */}
          <motion.div variants={itemAnim} className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:shadow-2xl hover:border-amber-500/50 hover:bg-white/10 transition-all group backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white group-hover:text-amber-400 transition-colors font-display mb-2">The CO2 Capture Roof</h3>
            <p className="text-[10px] font-mono text-amber-500 uppercase tracking-widest mb-6 font-bold">Jul '21 - Present</p>
            
            <p className="text-lg italic text-neutral-400 mb-6 font-serif">
              "They saw concrete. I saw carbon credits and climate grids."
            </p>
            <p className="text-sm text-neutral-400 font-medium leading-relaxed">
              Researched modular green roofing system (biochar + moss) with IoT sensors tracking CO2, thermal load, and moisture. Reframed underused rooftops (74% underused) as climate buffers, estimating ~1.4 kg/m²/year CO2 drawdown via carbon offsets.
            </p>
          </motion.div>

          {/* Ops Magic Lab */}
          <motion.div variants={itemAnim} className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:shadow-2xl hover:border-amber-500/50 hover:bg-white/10 transition-all group backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white group-hover:text-amber-400 transition-colors font-display mb-2">Ops Magic Lab</h3>
            <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-6 font-bold">Automations</p>
            
            <p className="text-lg italic text-neutral-400 mb-6 font-serif">
              "If it took too long or made no sense, I built something that fixed it."
            </p>
            <p className="text-sm text-neutral-400 font-medium leading-relaxed">
              Built Loan Prepayment Visualizers simulating amortization vs. payoff (uncovering ~22% savings), and Poster-to-SmartCard parsers converting static event images into calendar-ready invites with metadata.
            </p>
          </motion.div>

          {/* Academic Studios */}
          <motion.div variants={itemAnim} className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:shadow-2xl hover:border-amber-500/50 hover:bg-white/10 transition-all group md:col-span-2 backdrop-blur-sm">
            <div className="md:flex gap-8 items-start">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white group-hover:text-amber-400 transition-colors font-display mb-2">Project Terra & Bonsai</h3>
                <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold">Design Studios</p>
              </div>
              <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
                <p className="text-lg italic text-neutral-400 mb-4 font-serif">
                  "Exploring sustainable environments and adaptable spaces."
                </p>
                <p className="text-sm text-neutral-400 font-medium leading-relaxed">
                  Conceptual pop-up architecture maximizing utility in minimal space, alongside comprehensive residential and commercial design works executed over 4 semesters at IIT Kharagpur. Focus on programmatic efficiency, material honesty, and context-driven form.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    )
  },
  {
    id: 'awards',
    title: 'AWARDS',
    number: '04',
    bgColor: 'bg-[#7C3AED]', // Purple 600
    textColor: 'text-purple-200',
    Content: () => (
      <motion.div 
        variants={staggerContainer} initial="hidden" animate="visible"
        className="h-full overflow-y-auto custom-scrollbar px-6 pb-12 pt-28 md:px-14 md:pt-32 md:pb-16 text-neutral-200 focus:outline-none bg-neutral-900" 
        tabIndex={0}
      >
        <motion.div variants={itemAnim} className="mb-16">
          <p className="text-[10px] font-mono tracking-[0.2em] text-purple-500 uppercase mb-4 font-bold drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">04 // Recognition & Roles</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] font-display text-white">
            Leadership &<br/>Awards
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          
          {/* Leadership */}
          <motion.div variants={itemAnim}>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 shadow-[inset_0_0_20px_rgba(168,85,247,0.05)] mb-8">
              <h3 className="text-sm font-black text-purple-400 mb-6 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span> Positions of Responsibility
              </h3>
              <div className="space-y-8">
                <div className="relative pl-4 border-l-2 border-purple-500/50">
                  <p className="text-[10px] font-mono text-purple-400 tracking-widest uppercase mb-1 font-bold">Aug '24 - Aug '25</p>
                  <h4 className="font-black text-xl uppercase tracking-tight leading-tight mb-2 font-display text-white">Gen. Sec. | Meghnad Saha Hall</h4>
                  <p className="text-sm text-neutral-400 font-medium leading-relaxed">Launched first digital feedback loop streaming mess ops. Led 2.5L infra upgrade demonstrating end-to-end execution across vendor ops and alignment.</p>
                </div>
                <div className="relative pl-4 border-l-2 border-white/10">
                  <p className="text-[10px] font-mono text-neutral-500 tracking-widest uppercase mb-1 font-bold">Nov '22 - Feb '23</p>
                  <h4 className="font-black text-xl uppercase tracking-tight leading-tight mb-2 font-display text-white">GES Intern | E-Cell IITKGP</h4>
                  <p className="text-sm text-neutral-400 font-medium leading-relaxed">Orchestrated execution across 56 colleges, crafted strategy for major entrepreneurship summit amplifying national visibility.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div variants={itemAnim}>
            <h3 className="text-sm font-black text-neutral-500 mb-6 uppercase tracking-widest border-b border-white/10 pb-3">Achievements</h3>
            <div className="space-y-6">
              <div className="group">
                <strong className="text-white flex items-center gap-2 font-black text-lg uppercase tracking-tight mb-1 font-display group-hover:text-purple-400 transition-colors">
                  <span className="text-purple-500">🏆</span> Xartup Fellowship
                </strong>
                <p className="text-sm text-neutral-400 font-medium leading-relaxed pl-8">Selected for early entry into national startup cohort for building a hyperlocal co-working framework in high school.</p>
              </div>
              <div className="group">
                <strong className="text-white flex items-center gap-2 font-black text-lg uppercase tracking-tight mb-1 font-display group-hover:text-purple-400 transition-colors">
                  <span className="text-purple-500">🚀</span> ZEE5 Pitchers Quarterfinalist
                </strong>
                <p className="text-sm text-neutral-400 font-medium leading-relaxed pl-8">Pitched anti-piracy solution to boost OTT adoption and content security at national showcase.</p>
              </div>
              <div className="group">
                <strong className="text-white flex items-center gap-2 font-black text-lg uppercase tracking-tight mb-1 font-display group-hover:text-purple-400 transition-colors">
                  <span className="text-purple-500">🏛️</span> Design Studio Winner
                </strong>
                <p className="text-sm text-neutral-400 font-medium leading-relaxed pl-8">Led and won 5+ studio projects, steering interdisciplinary teams to top-jury ratings across internal competitions.</p>
              </div>
            </div>
          </motion.div>

          {/* Sports */}
          <motion.div variants={itemAnim} className="md:col-span-2">
            <h3 className="text-[10px] font-black text-neutral-500 mb-6 uppercase tracking-widest text-center tracking-[0.3em]">Sports Excellence</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/50 hover:bg-white/10 transition-all">
                <p className="text-[10px] font-mono text-purple-400 tracking-widest uppercase mb-2 font-bold">Cricket (IITKGP)</p>
                <p className="font-black text-white text-xl uppercase tracking-tight mb-3 font-display">Best Bowler</p>
                <p className="text-xs text-neutral-400 font-medium leading-relaxed">Recognized as the youngest season's top fast bowler for exceptional performance.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/50 hover:bg-white/10 transition-all">
                <p className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase mb-2 font-bold">Kabaddi (MSH)</p>
                <p className="font-black text-white text-xl uppercase tracking-tight mb-3 font-display">Gold & Capt.</p>
                <p className="text-xs text-neutral-400 font-medium leading-relaxed">Led the inaugural season to championship victory through strategic leadership.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/50 hover:bg-white/10 transition-all">
                <p className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase mb-2 font-bold">Cricket (NSO)</p>
                <p className="font-black text-white text-xl uppercase tracking-tight mb-3 font-display">Core Squad</p>
                <p className="text-xs text-neutral-400 font-medium leading-relaxed">Chosen as a core squad member for National Sports Organization.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    )
  },
  {
    id: 'contact',
    title: 'CONTACT',
    number: '05',
    bgColor: 'bg-[#059669]', // Emerald 600
    textColor: 'text-emerald-200',
    Content: () => (
      <motion.div 
        variants={staggerContainer} initial="hidden" animate="visible"
        className="h-full flex flex-col justify-between overflow-y-auto custom-scrollbar px-5 pb-10 pt-20 md:px-14 md:pt-32 md:pb-16 text-neutral-200 focus:outline-none relative bg-neutral-900" 
        tabIndex={0}
      >
        {/* Subtle geometric pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none"></div>

        <motion.div variants={itemAnim} className="relative z-10">
          <p className="text-[10px] font-mono tracking-[0.2em] text-emerald-500 uppercase mb-4 font-bold drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">05 // Open Lines</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] font-display text-white">
            Let's<br/>Connect.
          </h2>
          <p className="text-lg text-neutral-400 font-medium max-w-md mt-6 leading-relaxed">
            Open for architectural projects, PM roles, design collaborations, or exploring ideas that move people.
          </p>
        </motion.div>
        
        {/* Editorial Contact Details */}
        <div className="mt-16 space-y-2 max-w-xl relative z-10">
          
          <motion.div variants={itemAnim} className="flex flex-col md:flex-row md:items-center py-6 border-b border-white/10 group hover:bg-white/5 transition-colors px-4 -mx-4 rounded-xl">
            <span className="text-[10px] font-mono text-emerald-500 font-bold uppercase tracking-widest w-32 mb-2 md:mb-0 shrink-0">Email</span>
            <a href="mailto:shreyeshreddytappati@gmail.com" className="text-xl md:text-2xl font-black tracking-tight text-white group-hover:text-emerald-400 transition-colors break-all font-display outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md">
              shreyeshreddytappati@gmail.com
            </a>
          </motion.div>

          <motion.div variants={itemAnim} className="flex flex-col md:flex-row md:items-center py-6 border-b border-white/10 group hover:bg-white/5 transition-colors px-4 -mx-4 rounded-xl">
            <span className="text-[10px] font-mono text-emerald-500 font-bold uppercase tracking-widest w-32 mb-2 md:mb-0 shrink-0">Phone</span>
            <a href="tel:+919346206902" className="text-xl md:text-2xl font-black tracking-tight text-white group-hover:text-emerald-400 transition-colors font-display outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md">
              +91 9346206902
            </a>
          </motion.div>

          <motion.div variants={itemAnim} className="flex flex-col md:flex-row md:items-center py-6 border-b border-transparent px-4 -mx-4 rounded-xl">
            <span className="text-[10px] font-mono text-neutral-500 font-bold uppercase tracking-widest w-32 mb-2 md:mb-0 shrink-0">Location</span>
            <span className="text-lg md:text-xl font-bold tracking-tight text-neutral-400 font-display">
              Hyderabad, TS — Kharagpur, WB
            </span>
          </motion.div>

        </div>

        {/* Minimal Socials */}
        <motion.div variants={itemAnim} className="flex space-x-6 mt-16 pt-4 relative z-10">
          <a href="https://www.linkedin.com/in/shreyesh-reddy-306b561a5" target="_blank" rel="noopener noreferrer" className="text-xs font-black tracking-[0.2em] uppercase text-neutral-500 hover:text-emerald-400 hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.8)] transition-all outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-sm">
            [ LinkedIn ]
          </a>
          <a href="#" className="text-xs font-black tracking-[0.2em] uppercase text-neutral-500 hover:text-emerald-400 hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.8)] transition-all outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-sm">
            [ Twitter ]
          </a>
        </motion.div>
      </motion.div>
    )
  }
];
