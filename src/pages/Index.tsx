import { useState } from "react";
import { User, Search, LayoutDashboard, Settings, Star, LogOut, Sun, Menu } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-navy-light">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-slate-300 p-2"
        >
          <Menu className="w-6 h-6" />
        </button>
        <img 
          src="/images/InkluLogo.svg" 
          alt="Logo" 
          className="w-10 h-10 object-contain"
        />
      </div>

      {/* Sidebar */}
      <aside className={`${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 fixed md:relative top-0 left-0 h-screen w-[240px] bg-navy-light p-6 flex flex-col gap-8 transition-transform duration-300 z-50`}>
        {/* Logo (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-2">
          <img 
            src="/images/InkluLogo.svg" 
            alt="Logo" 
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* User Profile */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-300 to-blue-300 p-1">
            <div className="w-full h-full rounded-full bg-navy-light flex items-center justify-center">
              <User className="w-8 h-8 text-slate-300" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg">Len Lu</h3>
            <button className="text-sm text-slate-400 hover:text-slate-300 transition-colors">
              Edit
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-300 hover:bg-white/5 transition-colors">
                <LayoutDashboard className="w-5 h-5" />
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-300 hover:bg-white/5 transition-colors">
                <Settings className="w-5 h-5" />
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-300 hover:bg-white/5 transition-colors">
                <Star className="w-5 h-5" />
                Favourites
              </a>
            </li>
          </ul>
        </nav>

        {/* Theme Toggle */}
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="w-10 h-10 rounded-lg transition-colors flex items-center justify-center bg-[#ffc470] text-slate-950">
          <Sun className="w-5 h-5 text-black" />
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl font-semibold">Applications</h1>
          
          {/* Search and Logout */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search something..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full md:w-[250px] pl-10 pr-4 py-2 bg-navy-light rounded-lg border border-slate-700 focus:outline-none focus:border-slate-600 transition-colors"
              />
            </div>
            <button className="px-4 py-2 transition-colors rounded-lg font-medium bg-[#ffc470] text-zinc-950">
              Logout
            </button>
          </div>
        </div>

        {/* Applications Grid */}
        <div className="max-w-[1200px] lg:mx-0 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  justify-items-center lg:justify-items-start">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} className="rounded-2xl h-[180px] max-w-[200px]  flex flex-col items-center justify-center group hover:scale-105 transition-transform cursor-pointer">
              <img alt="JobSync Piece" className="w-full h-full object-contain" src="/images/JobSync.svg" />
            </motion.div>
            
            {/* Empty Application Card */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.1
          }} className="rounded-2xl h-[180px] max-w-[200px]  flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
              <img src="/images/emptyApp.svg" alt="Empty Piece" className="w-full h-full object-contain" />
            </motion.div>

            {/* Third Empty Application Card */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }} className="rounded-2xl h-[180px] max-w-[200px]  flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
              <img src="/images/emptyApp.svg" alt="Empty Piece" className="w-full h-full object-contain" />
            </motion.div>
          </div>
        </div>
      </main>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Index;
