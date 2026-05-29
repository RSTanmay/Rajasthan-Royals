export default function App() {
  return (
    <div className="min-h-screen bg-[#020b18] text-slate-100 flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
      {/* Background ambient glows in official RR colors */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#074EA2]/15 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[6000ms]"></div>
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#E60693]/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[8000ms]"></div>

      <div className="max-w-md w-full text-center z-10 space-y-8">
        {/* Header Title with Official Colors Gradient */}
        <h1 className="text-2xl font-black tracking-widest bg-gradient-to-r from-blue-400 via-[#E60693] to-[#C3A11F] bg-clip-text text-transparent uppercase drop-shadow-sm">
          Rajasthan Royals Campaign
        </h1>

        {/* Glow-bordered Card Wrapper */}
        <div className="relative group">
          {/* Card Neon Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#074EA2] to-[#E60693] rounded-[32px] blur-lg opacity-40 group-hover:opacity-60 transition duration-700"></div>
          
          {/* Main Card Content */}
          <div className="relative bg-slate-950/85 backdrop-blur-2xl border border-slate-800/80 rounded-[30px] p-8 shadow-2xl space-y-6">
            <p className="text-lg sm:text-xl font-bold leading-relaxed text-slate-100">
              "If you want <span className="text-[#E60693] drop-shadow-[0_0_8px_rgba(230,6,147,0.4)]">RR</span> to win, <br />
              Donate money to bribe all the <span className="text-[#C3A11F] drop-shadow-[0_0_8px_rgba(195,161,31,0.4)]">empires</span> and <span className="text-blue-450 drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]">Arun Singh Dhamal</span>"
            </p>

            {/* Centered QR Photo */}
            <div className="flex justify-center">
              <div className="p-3.5 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-[1.03] transition-transform duration-300 relative group/qr">
                {/* Subtle border glow on QR frame */}
                <div className="absolute -inset-0.5 bg-gradient-to-tr from-[#074EA2] to-[#E60693] rounded-2xl blur opacity-0 group-hover/qr:opacity-30 transition duration-500"></div>
                <img 
                  src="/qr.jpg" 
                  alt="Donation QR Code" 
                  className="w-64 h-64 rounded-xl object-contain relative z-10"
                />
              </div>
            </div>

            <div className="text-xs text-[#E60693] font-bold tracking-widest animate-pulse">
              ▲ SCAN QR TO SUPPORT THE CAMPAIGN ▲
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-xs text-slate-500 font-medium">
          Powered by RRwins. Verify transactions securely on the ledger.
        </p>
      </div>
    </div>
  )
}