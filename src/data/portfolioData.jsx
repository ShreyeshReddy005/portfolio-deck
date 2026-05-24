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

              <motion.div variants={itemAnim}>
                <p className="text-lg md:text-xl text-neutral-400 font-medium leading-relaxed text-balance max-w-2xl mx-auto lg:mx-0">
                  I build systems that scale—whether it's physical architecture, real estate tech ventures, or digital operations networks. From co-founding Pause Hours to directing cross-functional teams at Studio Vihara and driving business development at SSR Projects, I operate at the intersection of architectural thinking, product strategy, and ruthless execution.
                </p>
              </motion.div>
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
                  <p className="font-black text-xl leading-tight uppercase tracking-tight font-display text-white">B.Arch, Architecture & Regional Planning</p>
                  <p className="text-sm font-bold text-neutral-500 mt-1">Indian Institute of Technology Kharagpur</p>
                  <p className="text-xs font-mono text-rose-400 tracking-wider mt-2 bg-white/5 border border-white/10 inline-block px-2 py-0.5 rounded">Present / CGPA: 8.3</p>
                </div>
                <div className="relative group">
                  <div className="absolute -left-[17px] top-2 w-3 h-3 bg-neutral-900 border-2 border-neutral-600 rounded-full group-hover:border-rose-400 transition-colors"></div>
                  <p className="font-black text-xl leading-tight uppercase tracking-tight font-display text-white">Class XII, TSBIE</p>
                  <p className="text-sm font-bold text-neutral-500 mt-1">Sri Chaitanya Junior College, Hyderabad</p>
                  <p className="text-xs font-mono text-neutral-500 tracking-wider mt-2">2022 / 98.00%</p>
                </div>
                <div className="relative group">
                  <div className="absolute -left-[17px] top-2 w-3 h-3 bg-neutral-900 border-2 border-neutral-600 rounded-full group-hover:border-rose-400 transition-colors"></div>
                  <p className="font-black text-xl leading-tight uppercase tracking-tight font-display text-white">Class X, TSBSE</p>
                  <p className="text-sm font-bold text-neutral-500 mt-1">DR.KKR's Gowtham Concept School, Hyderabad</p>
                  <p className="text-xs font-mono text-neutral-500 tracking-wider mt-2">2020 / 10/10</p>
                </div>
              </div>
            </motion.div>

            {/* Stack */}
            <motion.div variants={itemAnim}>
              <h3 className="text-[10px] font-black text-rose-500 mb-8 uppercase tracking-widest border-b border-white/10 pb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-rose-500 rounded-full shadow-[0_0_10px_rgba(225,29,72,0.8)]"></span> The Stack
              </h3>
              
              <div className="mb-8">
                <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-4">Software & Tools</p>
                <div className="flex flex-wrap gap-2">
                  {['AutoCAD', 'SketchUp', 'Excel', 'PowerPoint', 'Replit', 'Figma', 'Base44', 'Lovable.dev', 'n8n'].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/10 shadow-sm text-neutral-300 text-xs font-bold tracking-wide rounded-md hover:bg-white/10 hover:border-rose-500/50 hover:text-white transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-4">Strategy & Analysis</p>
                <div className="flex flex-wrap gap-2">
                  {['Market Research', 'Startup Analysis', 'Business Strategy', 'Business Dev', 'User Research', 'Rapid MVP Dev'].map((skill) => (
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
    id: 'experience',
    title: 'EXPERIENCE',
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
          <p className="text-[10px] font-mono tracking-[0.2em] text-blue-500 uppercase mb-4 font-bold drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">02 // Internships & Ventures</p>
          <h2 className="text-2xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] font-display text-white">
            Professional<br/>Journey
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-white/10 pl-6 md:pl-8 space-y-16">
          
          {/* Pause Hours - Startup */}
          <motion.div variants={itemAnim} className="relative group">
            <div className="absolute -left-[35px] md:-left-[43px] top-2 w-4 h-4 bg-neutral-900 border-4 border-blue-500 rounded-full group-hover:scale-125 group-hover:bg-blue-500 transition-all shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4 gap-2">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white group-hover:text-blue-400 transition-colors font-display">Pause Hours</h3>
              <span className="text-[11px] font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full font-bold uppercase tracking-widest">Apr '26 - Present</span>
            </div>
            <p className="text-[10px] font-mono text-blue-400 tracking-widest uppercase mb-4 font-bold">Travel Hospitality • Co-Founder • Start-up</p>
            <ul className="space-y-3 text-sm text-neutral-400 font-medium max-w-3xl list-none">
              <li className="flex items-start"><span className="text-blue-500 mr-3">✦</span> Co-Founded a premium real estate technology venture monetizing urban transit downtime utilizing innovative architectural solutions.</li>
              <li className="flex items-start"><span className="text-blue-500 mr-3">✦</span> Designed the end-to-end user experience, translating behavioral insights into product and brand decisions.</li>
              <li className="flex items-start"><span className="text-blue-500 mr-3">✦</span> Led 20+ operator interviews to map behavioral patterns, identify drop-off points in the user journey, and validate pricing assumptions.</li>
              <li className="flex items-start"><span className="text-blue-500 mr-3">✦</span> Mapped complex urban transit zones and defined targeted growth strategies to capture the nomad demographic.</li>
            </ul>
          </motion.div>

          {/* Studio Vihara - Internship */}
          <motion.div variants={itemAnim} className="relative group">
            <div className="absolute -left-[35px] md:-left-[43px] top-2 w-4 h-4 bg-neutral-900 border-4 border-blue-500 rounded-full group-hover:scale-125 group-hover:bg-blue-500 transition-all shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4 gap-2">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white group-hover:text-blue-400 transition-colors font-display">Studio Vihara</h3>
              <span className="text-[11px] font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full font-bold uppercase tracking-widest">Dec '25 - Apr '26</span>
            </div>
            <p className="text-[10px] font-mono text-neutral-500 tracking-widest uppercase mb-4 font-bold">Architecture & Building Systems Intern</p>
            <ul className="space-y-3 text-sm text-neutral-400 font-medium max-w-3xl list-none">
              <li className="flex items-start"><span className="text-blue-500 mr-3">✦</span> Directed cross-functional teams of 5+ distinct stakeholders, successfully executing a major commercial project from conception.</li>
              <li className="flex items-start"><span className="text-blue-500 mr-3">✦</span> Conducted extensive market scouting and vendor negotiations, optimizing supply chains to meet strict execution deadlines.</li>
              <li className="flex items-start"><span className="text-blue-500 mr-3">✦</span> Launched an innovative commercial exhibition space at CREDAI HITEX, successfully securing the Best Stall Award.</li>
              <li className="flex items-start"><span className="text-blue-500 mr-3">✦</span> Delivered high-impact presentations to secure 3 corporate contracts, earning a Pre-Placement Offer for exceptional performance.</li>
            </ul>
          </motion.div>

          {/* SSR Projects - Internship */}
          <motion.div variants={itemAnim} className="relative group">
            <div className="absolute -left-[35px] md:-left-[43px] top-2 w-4 h-4 bg-neutral-900 border-4 border-neutral-600 rounded-full group-hover:border-blue-400 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] transition-all"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4 gap-2">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white group-hover:text-blue-400 transition-colors font-display">SSR Projects</h3>
              <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">May '25 - Jul '25</span>
            </div>
            <p className="text-[10px] font-mono text-neutral-500 tracking-widest uppercase mb-4 font-bold">Facility Management • Business Dev & Tech Strategy Intern</p>
            <ul className="space-y-3 text-sm text-neutral-400 font-medium max-w-3xl list-none">
              <li className="flex items-start"><span className="text-neutral-600 mr-3">✦</span> Built a customized digital project tracking dashboard, reducing weekly administrative reporting time by 30%.</li>
              <li className="flex items-start"><span className="text-neutral-600 mr-3">✦</span> Created targeted corporate pitch materials, successfully onboarding 2 new major commercial properties within the region.</li>
              <li className="flex items-start"><span className="text-neutral-600 mr-3">✦</span> Integrated invoice discounting to unlock working capital, successfully scaling concurrent operational capacity by 30%.</li>
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
          <p className="text-[10px] font-mono tracking-[0.2em] text-amber-500 uppercase mb-4 font-bold drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">03 // Research & Builds</p>
          <h2 className="text-2xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] font-display text-white">
            Architecture &<br/>Systems
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Negligible Spaces */}
          <motion.div variants={itemAnim} className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 hover:shadow-2xl hover:border-amber-500/50 hover:bg-white/10 transition-all group">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white group-hover:text-amber-400 transition-colors font-display mb-2">Negligible Spaces</h3>
            <p className="text-[10px] font-mono text-amber-500 uppercase tracking-widest mb-6 font-bold">Apr '21 - Present • Research</p>
            
            <p className="text-base md:text-lg italic text-neutral-400 mb-6 font-serif">
              "They saw concrete. I saw carbon credits and climate grids."
            </p>
            <ul className="space-y-3 text-xs md:text-sm text-neutral-400 font-medium list-none">
              <li className="flex items-start"><span className="text-amber-500 mr-3">✦</span> Worked on the potential of rooftops as carbon capture, enhanced urban living, a third space, and green roofs & their market.</li>
              <li className="flex items-start"><span className="text-amber-500 mr-3">✦</span> Evaluated underutilized urban rooftop assets to unlock sustainable commercial value through predictive market analysis.</li>
              <li className="flex items-start"><span className="text-amber-500 mr-3">✦</span> Formulated strategic product roadmap visions transforming neglected spatial environments into lucrative municipal infrastructure projects.</li>
            </ul>
          </motion.div>

          {/* Built Small Useful Tools */}
          <motion.div variants={itemAnim} className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 hover:shadow-2xl hover:border-amber-500/50 hover:bg-white/10 transition-all group">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white group-hover:text-amber-400 transition-colors font-display mb-2">Useful Tools</h3>
            <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-6 font-bold">Apr '22 - Apr '23 • Self-Built</p>
            
            <p className="text-base md:text-lg italic text-neutral-400 mb-6 font-serif">
              "If it took too long or made no sense, I built something that fixed it."
            </p>
            <p className="text-xs md:text-sm text-neutral-400 font-medium leading-relaxed">
              Built two consumer tools from scratch: a Home Loan Tracker with pre-payment simulation and an AI-powered prescription management application for digitizing and organizing prescriptions, tracking medications, and generating health reports for doctor consultations.
            </p>
          </motion.div>

          {/* Academic Studios - Full Width */}
          <motion.div variants={itemAnim} className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 hover:shadow-2xl hover:border-amber-500/50 hover:bg-white/10 transition-all group md:col-span-2">
            <div className="md:flex gap-8 items-start">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white group-hover:text-amber-400 transition-colors font-display mb-2">Coursework & Studios</h3>
                <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold">IIT Kharagpur</p>
              </div>
              <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
                <div className="flex flex-wrap gap-2">
                  {['Architectural Design', 'Housing & Community Planning', 'Urban Planning', 'Advanced Low-Cost Building Materials', 'Climatology', 'Data Analytics in Building Science'].map((course) => (
                    <span key={course} className="px-3 py-1.5 bg-white/5 border border-white/10 shadow-sm text-neutral-300 text-xs font-bold tracking-wide rounded-md hover:bg-white/10 hover:border-amber-500/50 hover:text-white transition-colors cursor-default">
                      {course}
                    </span>
                  ))}
                </div>
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
          <h2 className="text-2xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] font-display text-white">
            Leadership &<br/>Awards
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          
          {/* Leadership */}
          <motion.div variants={itemAnim}>
            <div className="bg-white/5 rounded-xl p-6 border border-purple-500/30 shadow-[inset_0_0_20px_rgba(168,85,247,0.05)] mb-8">
              <h3 className="text-sm font-black text-purple-400 mb-6 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span> Positions of Responsibility
              </h3>
              <div className="space-y-8">
                <div className="relative pl-4 border-l-2 border-purple-500/50">
                  <p className="text-[10px] font-mono text-purple-400 tracking-widest uppercase mb-1 font-bold">Aug '24 - Aug '25</p>
                  <h4 className="font-black text-xl uppercase tracking-tight leading-tight mb-2 font-display text-white">Gen. Sec. | Meghnad Saha Hall</h4>
                  <p className="text-sm text-neutral-400 font-medium leading-relaxed">First ever to digitize the feedback system in IITKGP Mess. Led ₹2.5L infra upgrade—the biggest development since 2016. Managed 4 large-scale events with 800-900 student footfall.</p>
                </div>
                <div className="relative pl-4 border-l-2 border-white/10">
                  <p className="text-[10px] font-mono text-neutral-500 tracking-widest uppercase mb-1 font-bold">Aug '23 - Jul '24</p>
                  <h4 className="font-black text-xl uppercase tracking-tight leading-tight mb-2 font-display text-white">Secretary | Meghnad Saha Hall</h4>
                  <p className="text-sm text-neutral-400 font-medium leading-relaxed">Led logistics & expertise for Short Film Making Competition. Won Silver Medal—the only medal won out of all Social & Cultural Events.</p>
                </div>
                <div className="relative pl-4 border-l-2 border-white/10">
                  <p className="text-[10px] font-mono text-neutral-500 tracking-widest uppercase mb-1 font-bold">Nov '22 - Feb '23</p>
                  <h4 className="font-black text-xl uppercase tracking-tight leading-tight mb-2 font-display text-white">GES Intern | E-Cell IITKGP</h4>
                  <p className="text-sm text-neutral-400 font-medium leading-relaxed">Coordinated with 56 colleges and 100s of students for the Global Entrepreneurship Summit 2023.</p>
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
                  <span className="text-purple-500">🎯</span> JEE Advanced — Top 1%
                </strong>
                <p className="text-sm text-neutral-400 font-medium leading-relaxed pl-8">Secured in the Top 1% of JEE Advanced 2022 (out of 186,000 candidates).</p>
              </div>
              <div className="group">
                <strong className="text-white flex items-center gap-2 font-black text-lg uppercase tracking-tight mb-1 font-display group-hover:text-purple-400 transition-colors">
                  <span className="text-purple-500">🏛️</span> CREDAI HITEX Award
                </strong>
                <p className="text-sm text-neutral-400 font-medium leading-relaxed pl-8">Designed an award-winning low-cost sustainable stall for Bonsai Housing at CREDAI Exhibition, Hyderabad.</p>
              </div>
              <div className="group">
                <strong className="text-white flex items-center gap-2 font-black text-lg uppercase tracking-tight mb-1 font-display group-hover:text-purple-400 transition-colors">
                  <span className="text-purple-500">📊</span> Dept Rank #2
                </strong>
                <p className="text-sm text-neutral-400 font-medium leading-relaxed pl-8">Department Rank #2 in 8th semester and Rank #4 Overall.</p>
              </div>
              <div className="group">
                <strong className="text-white flex items-center gap-2 font-black text-lg uppercase tracking-tight mb-1 font-display group-hover:text-purple-400 transition-colors">
                  <span className="text-purple-500">🏆</span> Xartup & Play2Progress
                </strong>
                <p className="text-sm text-neutral-400 font-medium leading-relaxed pl-8">Selected in Xartup Fellowship and Play2Progress India 2025 First Edition, both competitive entrepreneurship programs.</p>
              </div>
              <div className="group">
                <strong className="text-white flex items-center gap-2 font-black text-lg uppercase tracking-tight mb-1 font-display group-hover:text-purple-400 transition-colors">
                  <span className="text-purple-500">🚀</span> ZEE5 Pitchers Semifinalist
                </strong>
                <p className="text-sm text-neutral-400 font-medium leading-relaxed pl-8">Pitched anti-piracy solution to boost OTT adoption and content security at national showcase.</p>
              </div>
            </div>
          </motion.div>

          {/* Sports */}
          <motion.div variants={itemAnim} className="md:col-span-2">
            <h3 className="text-[10px] font-black text-neutral-500 mb-6 uppercase tracking-widest text-center tracking-[0.3em]">Sports Excellence</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/50 hover:bg-white/10 transition-all">
                <p className="text-[10px] font-mono text-purple-400 tracking-widest uppercase mb-2 font-bold">Cricket (IITKGP)</p>
                <p className="font-black text-white text-xl uppercase tracking-tight mb-3 font-display">Best Fast Bowler</p>
                <p className="text-xs text-neutral-400 font-medium leading-relaxed">Part of the General Championship Cricket, IIT KGP. Awarded Best Fast Bowler of The Season.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/50 hover:bg-white/10 transition-all">
                <p className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase mb-2 font-bold">Kabaddi (MSH)</p>
                <p className="font-black text-white text-xl uppercase tracking-tight mb-3 font-display">Gold & Captain</p>
                <p className="text-xs text-neutral-400 font-medium leading-relaxed">Led the Gold Winning Kabbadi Team, MSH, IITKGP through strategic leadership.</p>
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
            Open for architectural projects, PM roles, startup collaborations, or exploring ideas that move people.
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
        </motion.div>
      </motion.div>
    )
  }
];
