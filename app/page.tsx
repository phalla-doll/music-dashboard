import React from 'react';
import Image from 'next/image';
import {
  Home, Heart, Compass, User, MessageSquare, Settings, LogOut,
  Search, Bell, ChevronDown, Play, ChevronRight,
  SkipBack, Pause, SkipForward, Volume2, Shuffle, Repeat
} from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#e5e7eb] p-4 md:p-8 flex items-center justify-center font-sans">
      <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-[1400px] h-[90vh] flex overflow-hidden relative">
        
        {/* Sidebar */}
        <aside className="w-24 flex flex-col items-center py-8 z-10 bg-white border-r border-gray-100 shrink-0">
          {/* Logo */}
          <div className="flex flex-col items-center gap-1 mb-12">
            <svg viewBox="0 0 100 100" className="w-10 h-10 text-red-600" fill="currentColor">
              <clipPath id="circle-clip">
                <circle cx="50" cy="50" r="45" />
              </clipPath>
              <g clipPath="url(#circle-clip)">
                <rect x="0" y="10" width="100" height="12" />
                <rect x="0" y="28" width="100" height="12" />
                <rect x="0" y="46" width="100" height="12" />
                <rect x="0" y="64" width="100" height="12" />
                <rect x="0" y="82" width="100" height="12" />
              </g>
            </svg>
            <span className="text-red-600 font-medium text-xs tracking-wide">Lunio</span>
          </div>

          {/* Top Nav */}
          <nav className="flex-1 flex flex-col gap-6">
            <button className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center shadow-md shadow-red-200 hover:scale-105 transition-transform">
              <Home size={20} fill="currentColor" />
            </button>
            <button className="w-12 h-12 text-gray-400 hover:text-gray-800 flex items-center justify-center transition-colors">
              <Heart size={20} fill="currentColor" />
            </button>
            <button className="w-12 h-12 text-gray-400 hover:text-gray-800 flex items-center justify-center transition-colors">
              <Compass size={20} fill="currentColor" />
            </button>
            <button className="w-12 h-12 text-gray-400 hover:text-gray-800 flex items-center justify-center transition-colors">
              <User size={20} fill="currentColor" />
            </button>
            <button className="w-12 h-12 text-gray-400 hover:text-gray-800 flex items-center justify-center transition-colors">
              <MessageSquare size={20} fill="currentColor" />
            </button>
          </nav>

          {/* Bottom Nav */}
          <div className="flex flex-col gap-6 mt-auto">
            <button className="w-12 h-12 text-gray-400 hover:text-gray-800 flex items-center justify-center transition-colors">
              <Settings size={20} fill="currentColor" />
            </button>
            <button className="w-12 h-12 text-gray-400 hover:text-gray-800 flex items-center justify-center transition-colors">
              <LogOut size={20} fill="currentColor" />
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col relative bg-[#fcfcfc] overflow-hidden">
          <div className="flex-1 overflow-y-auto p-8 md:p-10 pb-32">
            
            {/* Header */}
            <header className="flex justify-between items-center mb-10">
              <h1 className="text-4xl font-medium text-gray-900 tracking-tight">
                Hello, <span className="text-red-600">Alex!</span>
              </h1>
              
              <div className="flex items-center gap-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search music..." 
                    className="pl-11 pr-4 py-3 bg-white rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-100 w-64 shadow-sm border border-gray-100"
                  />
                </div>
                
                <button className="relative w-10 h-10 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
                  <Bell size={18} fill="currentColor" />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-600 rounded-full border-2 border-white"></span>
                </button>
                
                <div className="flex items-center gap-2 cursor-pointer bg-white shadow-sm border border-gray-100 rounded-full p-1 pr-3 hover:bg-gray-50 transition-colors">
                  <Image src="https://picsum.photos/seed/user/100/100" alt="User" width={32} height={32} className="rounded-full" unoptimized />
                  <ChevronDown size={16} className="text-gray-500" />
                </div>
              </div>
            </header>

            {/* Top Section: Hero & Top Artists */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 mb-12">
              
              {/* Hero Banner */}
              <div className="relative bg-gradient-to-br from-[#8b1818] to-[#5a0f0f] rounded-[2rem] p-8 overflow-hidden text-white flex flex-col justify-center min-h-[280px] shadow-lg shadow-red-900/20">
                {/* Background decorative elements */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-black/40 to-transparent z-0"></div>
                
                {/* Large G letters in background */}
                <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none flex items-center justify-center gap-8">
                  <span className="text-[20rem] font-black leading-none translate-y-12">G</span>
                  <span className="text-[20rem] font-black leading-none translate-y-12">G</span>
                </div>

                <div className="relative z-10 max-w-[60%]">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium mb-4">
                    <span>🔥</span> New Release
                  </div>
                  <h2 className="text-4xl font-medium leading-tight mb-3">
                    Turn Up the Volume<br/>with Gaga
                  </h2>
                  <p className="text-white/70 text-sm mb-8 max-w-xs">
                    Step into her world of bold sound and fearless style.
                  </p>
                  <button className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:scale-105 transition-transform shadow-md">
                    <Play size={18} fill="currentColor" /> Play
                  </button>
                </div>
                
                {/* Hero Image */}
                <div className="absolute right-0 bottom-0 h-[120%] w-[50%] translate-y-[10%] z-0">
                  <Image 
                    src="https://picsum.photos/seed/gaga/400/600" 
                    alt="Featured Artist" 
                    fill 
                    className="object-cover object-left-top mix-blend-luminosity opacity-80"
                    unoptimized
                  />
                </div>
              </div>

              {/* Top Artists */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-gray-900">Your Top Artists</h3>
                  <button className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1 font-medium">
                    See More <ChevronRight size={16} />
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                  {[
                    { name: 'Rosalia', listeners: '3.7M', seed: 'rosalia' },
                    { name: 'Kendrick Lamar', listeners: '2.3M', seed: 'kendrick' },
                    { name: 'Travis Scott', listeners: '1.7M', seed: 'travis' },
                    { name: 'Billie Eilish', listeners: '4.5M', seed: 'billie' },
                    { name: 'Beyonce', listeners: '8.4M', seed: 'beyonce' },
                    { name: 'Taylor Swift', listeners: '6.2M', seed: 'taylor' },
                  ].map((artist, i) => (
                    <div key={i} className="flex items-center justify-between group cursor-pointer">
                      <div className="flex items-center gap-3">
                        <Image 
                          src={`https://picsum.photos/seed/${artist.seed}/100/100`} 
                          alt={artist.name} 
                          width={48} 
                          height={48} 
                          className="rounded-full object-cover shadow-sm"
                          unoptimized
                        />
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm group-hover:text-red-600 transition-colors">{artist.name}</h4>
                          <p className="text-xs text-gray-500">{artist.listeners} Listeners</p>
                        </div>
                      </div>
                      <ChevronRight size={16} className="text-gray-300 group-hover:text-gray-600 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Listening Highlights */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium text-gray-900">Listening Highlights</h3>
                <button className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1 font-medium">
                  See More <ChevronRight size={16} />
                </button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { title: 'Starboy', artist: 'The Weeknd', seed: 'starboy' },
                  { title: 'Fame', artist: 'Ariana Grande', seed: 'fame' },
                  { title: 'To Pimp a Butterfly', artist: 'Kendrick Lamar', seed: 'tpab' },
                  { title: 'Cowboy Carter', artist: 'Beyonce', seed: 'cowboy' },
                ].map((album, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-3 shadow-sm group-hover:shadow-md transition-shadow">
                      <Image 
                        src={`https://picsum.photos/seed/${album.seed}/300/300`} 
                        alt={album.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                    </div>
                    <h4 className="font-medium text-gray-900 text-sm truncate">{album.title}</h4>
                    <p className="text-xs text-gray-500 truncate">{album.artist}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Player Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-white/90 backdrop-blur-xl border-t border-gray-100 flex items-center justify-between px-8 z-20 rounded-br-[2.5rem]">
            
            {/* Song Info */}
            <div className="flex items-center gap-4 w-1/4 min-w-[200px]">
              <Image 
                src="https://picsum.photos/seed/lanadelrey/100/100" 
                alt="Born To Die" 
                width={48} 
                height={48} 
                className="rounded-full object-cover shadow-sm"
                unoptimized
              />
              <div>
                <h4 className="font-medium text-gray-900 text-sm">Born To Die</h4>
                <p className="text-xs text-gray-500">Lana Del Rey</p>
              </div>
            </div>

            {/* Controls & Progress */}
            <div className="flex-1 max-w-2xl flex items-center gap-6">
              <div className="flex items-center gap-4 text-gray-800">
                <button className="hover:text-red-600 transition-colors"><SkipBack size={20} fill="currentColor" /></button>
                <button className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-md">
                  <Pause size={18} fill="currentColor" />
                </button>
                <button className="hover:text-red-600 transition-colors"><SkipForward size={20} fill="currentColor" /></button>
              </div>
              
              <div className="flex-1 flex items-center gap-3 text-xs text-gray-500 font-medium">
                <span>1:25</span>
                <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden cursor-pointer relative group">
                  <div className="h-full bg-red-600 w-[40%] rounded-full relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
                <span>3:12</span>
              </div>
            </div>

            {/* Actions & Volume */}
            <div className="flex items-center justify-end gap-6 w-1/4 min-w-[200px] text-gray-400">
              <div className="flex items-center gap-2">
                <Volume2 size={18} className="text-gray-600" />
                <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden cursor-pointer">
                  <div className="h-full bg-red-600 w-[60%] rounded-full"></div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <button className="text-red-600 hover:scale-110 transition-transform"><Heart size={18} fill="currentColor" /></button>
                <button className="hover:text-gray-800 transition-colors"><Shuffle size={18} /></button>
                <button className="hover:text-gray-800 transition-colors"><Repeat size={18} /></button>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
