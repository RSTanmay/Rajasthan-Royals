export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-650/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-650/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Background logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.06]">
        <img 
          src="https://upload.wikimedia.org/wikipedia/en/6/60/Rajasthan_Royals_Logo.svg" 
          alt="Rajasthan Royals Watermark" 
          className="w-[450px] h-[450px] object-contain max-w-full"
        />
      </div>

      <div className="max-w-md w-full text-center z-10 space-y-8">
        {/* Header Title */}
        <h1 className="text-xl font-bold tracking-wider text-slate-400 uppercase">
          Rajasthan Royals Campaign
        </h1>

        {/* Informative & Humorous Card */}
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
          <p className="text-lg sm:text-xl font-medium leading-relaxed bg-gradient-to-r from-indigo-200 via-slate-150 to-purple-200 bg-clip-text text-transparent">
            "If you want RR to win , Donate money to bribe all the empires and Arun Singh Dhamal"
          </p>

          {/* Centered QR Photo */}
          <div className="flex justify-center">
            <div className="p-3 bg-white rounded-2xl shadow-xl hover:scale-102 transition-transform duration-300">
              <img 
                src="/qr.jpg" 
                alt="Donation QR Code" 
                className="w-64 h-64 rounded-xl object-contain"
              />
            </div>
          </div>

          <div className="text-xs text-indigo-400 font-semibold tracking-wide animate-pulse">
            ▲ SCAN QR TO SUPPORT THE CAMPAIGN ▲
          </div>
        </div>

        {/* Footer */}
        <p className="text-xs text-slate-600">
          Powered by RRwins. Verify transactions securely on the ledger.
        </p>
      </div>
    </div>
  )
}