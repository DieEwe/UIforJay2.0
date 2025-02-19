
import { useState } from "react";
import { User, Search, LayoutDashboard, Settings, Star, LogOut, Sun } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-[240px] bg-navy-light p-6 flex flex-col gap-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/9d0e5bb4-ef8c-45d0-a96f-de1785ae0a73.png" 
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
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-300 hover:bg-white/5 transition-colors"
              >
                <LayoutDashboard className="w-5 h-5" />
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-300 hover:bg-white/5 transition-colors"
              >
                <Settings className="w-5 h-5" />
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-300 hover:bg-white/5 transition-colors"
              >
                <Star className="w-5 h-5" />
                Favourites
              </a>
            </li>
          </ul>
        </nav>

        {/* Theme Toggle */}
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="w-10 h-10 rounded-lg bg-orange-400 hover:bg-orange-500 transition-colors flex items-center justify-center"
        >
          <Sun className="w-5 h-5 text-white" />
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-semibold">Applications</h1>
          
          {/* Search and Logout */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search something..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-navy-light rounded-lg border border-slate-700 focus:outline-none focus:border-slate-600 transition-colors w-[250px]"
              />
            </div>
            <button className="px-4 py-2 bg-orange-400 hover:bg-orange-500 transition-colors rounded-lg font-medium">
              Logout
            </button>
          </div>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl aspect-square flex flex-col items-center justify-center group hover:scale-105 transition-transform cursor-pointer"
          >
            <img 
              src="/lovable-uploads/f2726f64-f23a-4d46-96b0-8d29b08272ee.png" 
              alt="JobSync Piece" 
              className="w-full h-full object-contain"
            />
          </motion.div>
          
          {/* Empty Application Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl aspect-square flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
          >
            <img 
              src="/lovable-uploads/7e3b3893-0383-42f2-ac7d-b6528caa010d.png" 
              alt="Empty Piece" 
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Index;
