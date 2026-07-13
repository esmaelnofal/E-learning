import React, { useState, useRef, useEffect } from 'react';
import {
  GraduationCap,
  LayoutDashboard,
  Bot,
  FileText,
  Shield,
  Settings,
  HelpCircle,
  Search,
  Bell,
  Moon,
  Sun,
  User,
  Mic,
  MicOff,
  Video,
  VideoOff,
  MonitorUp,
  Hand,
  BarChart2,
  PhoneOff,
  Send,
  X,
  Volume2,
  VolumeX,
  CheckCircle,
  Sparkles
} from 'lucide-react';

const INITIAL_PARTICIPANTS = [
  { 
    id: 1, 
    name: 'Dr. Aris Thorne (Host)', 
    initials: 'AT', 
    color: 'bg-blue-600 dark:bg-blue-500', 
    role: 'host', 
    micOn: true, 
    videoOn: true, 
    raisedHand: false, 
    highlight: false 
  },
  { 
    id: 2, 
    name: 'Alex Mercer', 
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', 
    role: 'participant', 
    micOn: false, 
    videoOn: false, 
    raisedHand: false, 
    highlight: false 
  },
  { 
    id: 3, 
    name: 'Sarah Jenkins', 
    initials: 'SJ', 
    color: 'bg-emerald-400 dark:bg-emerald-500', 
    role: 'participant', 
    textDark: true, 
    micOn: false, 
    videoOn: false, 
    raisedHand: true, 
    highlight: true 
  },
  { 
    id: 4, 
    name: 'Marcus Reed', 
    initials: 'MR', 
    color: 'bg-slate-200 dark:bg-slate-700', 
    role: 'participant', 
    textDark: true, 
    micOn: false, 
    videoOn: false, 
    raisedHand: false, 
    highlight: false 
  },
];

const INITIAL_CHAT_MESSAGES = [
  { id: 1, sender: 'Dr. Aris Thorne', time: '01:15 PM', text: 'Welcome everyone! We will begin the architecture breakdown shortly.', isHost: true },
  { id: 2, sender: 'Alex Mercer', time: '01:18 PM', text: 'Sound and video look good here.', isHost: false },
  { id: 3, sender: 'Sarah Jenkins', time: '01:21 PM', text: 'Will the slides be shared after the session?', isHost: false },
  { id: 4, sender: 'Dr. Aris Thorne', time: '01:22 PM', text: 'Yes, I will upload them to the My Library section.', isHost: true },
];

const Sidebar = ({ activeNav, setActiveNav }) => {
  const navItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'courses', icon: GraduationCap, label: 'Courses' },
    { id: 'tutor', icon: Bot, label: 'AI Tutor' },
    { id: 'exams', icon: FileText, label: 'Exams' },
    { id: 'admin', icon: Shield, label: 'Admin' },
  ];

  return (
    <div className="w-64 bg-[#1e293b] text-slate-400 flex flex-col h-screen font-sans shrink-0 border-r border-slate-800">
      <div className="p-6 flex items-center gap-3 mb-4">
        <div className="bg-[#1d4ed8] p-2 rounded-lg shadow-md shadow-blue-900/30">
          <GraduationCap className="text-white h-6 w-6" />
        </div>
        <div>
          <h1 className="text-white font-bold text-xl tracking-tight leading-tight">EduSphere</h1>
          <p className="text-xs text-slate-400">Enterprise Learning</p>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => {
          const isActive = activeNav === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 text-left ${
                isActive
                  ? 'bg-[#1d4ed8] text-white font-medium shadow-lg shadow-blue-900/20'
                  : 'hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <item.icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-4 space-y-4">
        <button className="w-full bg-[#1d4ed8] hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition-all duration-200 shadow-md shadow-blue-900/10 hover:shadow-lg active:scale-[0.98]">
          Upgrade Plan
        </button>
        <div className="space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-500 hover:text-slate-200 transition-colors text-left">
            <Settings className="h-4 w-4" /> Settings
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-500 hover:text-slate-200 transition-colors text-left">
            <HelpCircle className="h-4 w-4" /> Support
          </button>
        </div>
      </div>
    </div>
  );
};

const Header = ({ isDarkMode, toggleDarkMode, onJoinSession, onSearch, notificationCount, setNotificationCount }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchValue);
  };

  return (
    <header className="h-16 border-b border-gray-200 dark:border-slate-800/80 bg-white dark:bg-[#1e293b] flex items-center justify-between px-6 transition-all duration-200 z-10 shadow-sm shrink-0">
      <div className="flex items-center gap-8 h-full">
        <div className="flex items-center gap-2">
          <h1 className="text-[#1d4ed8] dark:text-blue-400 font-bold text-xl tracking-tight">EduSphere</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium h-full">
          <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-[#1d4ed8] dark:hover:text-blue-400 transition-colors h-full flex items-center">My Library</a>
          <a href="#" className="text-[#1d4ed8] dark:text-blue-400 border-b-2 border-[#1d4ed8] dark:border-blue-400 h-full flex items-center font-semibold">Schedule</a>
          <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-[#1d4ed8] dark:hover:text-blue-400 transition-colors h-full flex items-center">Community</a>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <form onSubmit={handleSearchSubmit} className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 dark:text-slate-500" />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search classes, events, tutors..."
            className="pl-9 pr-4 py-1.5 bg-[#f1f5f9] dark:bg-[#0f172a] border border-transparent dark:border-slate-800 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 w-[240px] lg:w-[300px] text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 transition-all duration-200"
          />
        </form>

        <button 
          onClick={() => setNotificationCount(0)}
          className="relative text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <Bell className="h-5 w-5" />
          {notificationCount > 0 && (
            <span className="absolute top-1 right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
          )}
        </button>

        <button 
          onClick={toggleDarkMode}
          className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDarkMode ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5" />}
        </button>

        <button 
          onClick={onJoinSession}
          className="bg-[#1d4ed8] hover:bg-blue-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-md shadow-blue-900/10 active:scale-95"
        >
          Join Session
        </button>

        <div className="h-8 w-8 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-600 cursor-pointer">
           <User className="h-5 w-5 text-slate-500 dark:text-slate-300" />
        </div>
      </div>
    </header>
  );
};

const VideoMeeting = ({ 
  micEnabled, 
  setMicEnabled, 
  videoEnabled, 
  setVideoEnabled, 
  screenSharing, 
  setScreenSharing, 
  handRaised, 
  setHandRaised,
  onShowPoll,
  onAddToast,
  showPollPanel
}) => {
  const [sessionTime, setSessionTime] = useState('01:24:10');

  useEffect(() => {
    const interval = setInterval(() => {
      setSessionTime(prev => {
        const parts = prev.split(':').map(Number);
        let [h, m, s] = parts;
        s += 1;
        if (s >= 60) {
          s = 0;
          m += 1;
        }
        if (m >= 60) {
          m = 0;
          h += 1;
        }
        return [
          h.toString().padStart(2, '0'),
          m.toString().padStart(2, '0'),
          s.toString().padStart(2, '0')
        ].join(':');
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleMic = () => {
    setMicEnabled(prev => {
      const next = !prev;
      onAddToast(next ? 'Microphone enabled' : 'Microphone muted', 'info');
      return next;
    });
  };

  const toggleVideo = () => {
    setVideoEnabled(prev => {
      const next = !prev;
      onAddToast(next ? 'Camera enabled' : 'Camera disabled', 'info');
      return next;
    });
  };

  const toggleScreenShare = () => {
    setScreenSharing(prev => {
      const next = !prev;
      onAddToast(next ? 'You started sharing your screen' : 'Screen sharing stopped', 'success');
      return next;
    });
  };

  const toggleHandRaise = () => {
    setHandRaised(prev => {
      const next = !prev;
      onAddToast(next ? 'Hand raised to speak' : 'Hand lowered', 'info');
      return next;
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0f172a] rounded-xl m-4 overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl relative transition-all duration-200">
      
      {/* Top Overlay Tag */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
        <div className="bg-[#1e293b]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-2 text-xs font-medium text-slate-300 border border-slate-700/50 shadow-lg">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse"></div>
          <span>Advanced Machine Learning Architecture</span>
          <span className="text-slate-500 ml-1">|</span>
          <span className="text-slate-400 font-mono tracking-wider">{sessionTime}</span>
        </div>
        {handRaised && (
          <div className="bg-amber-500/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-semibold text-white border border-amber-400/50 shadow-lg animate-bounce">
            <Hand className="h-3.5 w-3.5 fill-current" />
            <span>Your hand is raised</span>
          </div>
        )}
      </div>

      {/* Main Screen Feed / Active Canvas */}
      <div className="flex-1 relative bg-[#090d16] border-b border-slate-800 overflow-hidden flex items-center justify-center">
        {screenSharing ? (
          /* Custom screen-sharing representation overlay */
          <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center p-6 z-0 animate-fade-in">
            <div className="max-w-2xl w-full bg-[#1e293b] rounded-xl border border-blue-500/40 p-6 shadow-2xl relative">
              <div className="absolute top-3 right-4 flex items-center gap-1.5 bg-green-500/20 text-green-400 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse"></span>
                Presenting
              </div>
              <h3 className="text-blue-400 font-semibold mb-2 flex items-center gap-2">
                <MonitorUp className="h-4 w-4" /> Screen Sharing: Lecture_Slide_04.pdf
              </h3>
              <div className="bg-[#0f172a] p-4 rounded-lg font-mono text-xs text-emerald-400 border border-slate-800 h-64 overflow-y-auto">
                <p className="text-slate-500 mb-2">// Active Model Architecture Preview</p>
                <p className="text-blue-400">class DeepTransformer(nn.Module):</p>
                <p className="pl-4 text-slate-300">def __init__(self, d_model=512, nhead=8):</p>
                <p className="pl-8 text-slate-300">super().__init__()</p>
                <p className="pl-8 text-emerald-400">self.self_attn = MultiheadAttention(d_model, nhead)</p>
                <p className="pl-8 text-emerald-400">self.feed_forward = PositionwiseFeedForward(d_model)</p>
                <p className="pl-4 text-slate-300">def forward(self, x, mask=None):</p>
                <p className="pl-8 text-slate-300">x = x + self.self_attn(x, x, x, mask)</p>
                <p className="pl-8 text-slate-300">return x + self.feed_forward(x)</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm mt-4">You are currently presenting code constructs to all students</p>
          </div>
        ) : (
          /* Render verbatim requested image */
          <div 
             className="absolute inset-0 bg-cover bg-center transition-all duration-300"
             style={{ 
                 backgroundImage: `url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')`,
             }}
          >
             <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d]/60 via-transparent to-[#0a0f1d]/20 mix-blend-multiply"></div>
          </div>
        )}

        {/* Video feed overlay status for local camera */}
        {videoEnabled && (
          <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md p-2 rounded-lg text-xs text-white border border-slate-700 flex items-center gap-1.5 z-10 shadow-md">
            <Video className="h-3.5 w-3.5 text-green-400" />
            <span>Camera Active</span>
          </div>
        )}

        {/* Picture-in-Picture Speaker View */}
        <div className="absolute bottom-6 right-6 w-60 h-[135px] bg-slate-800 rounded-lg overflow-hidden border-2 border-[#1d4ed8] shadow-2xl transition-transform duration-300 hover:scale-105 group z-10">
           <img 
             src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
             alt="Speaker" 
             className="w-full h-full object-cover group-hover:brightness-105 transition-all"
           />
           <div className="absolute bottom-2 left-2 bg-slate-900/80 px-2 py-1 rounded text-[10px] font-semibold text-white backdrop-blur-sm flex items-center gap-1.5 border border-slate-700">
              <Mic className="h-3 w-3 text-blue-400" />
              <span>Dr. Aris Thorne</span>
           </div>
        </div>
      </div>

      {/* Bottom Controls Panel Dock */}
      <div className="h-20 bg-[#1e293b] flex items-center justify-between px-6 shrink-0 border-t border-slate-800/80">
        
        {/* Audio / Video Toggles */}
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleMic}
            className={`h-10 w-10 rounded-full flex items-center justify-center transition-all duration-200 ${
              micEnabled 
                ? 'bg-[#334155] text-slate-300 hover:bg-slate-600 hover:text-white' 
                : 'bg-red-600/90 text-white hover:bg-red-700'
            }`}
            title={micEnabled ? 'Mute Microphone' : 'Unmute Microphone'}
          >
            {micEnabled ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
          </button>
          <button 
            onClick={toggleVideo}
            className={`h-10 w-10 rounded-full flex items-center justify-center transition-all duration-200 ${
              videoEnabled 
                ? 'bg-[#334155] text-slate-300 hover:bg-slate-600 hover:text-white' 
                : 'bg-red-600/90 text-white hover:bg-red-700'
            }`}
            title={videoEnabled ? 'Stop Video Camera' : 'Start Video Camera'}
          >
            {videoEnabled ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
          </button>
          <div className="h-6 w-px bg-slate-700 ml-2"></div>
        </div>

        {/* Feature Triggers */}
        <div className="flex items-center gap-3">
           <button 
             onClick={toggleScreenShare}
             className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
               screenSharing 
                 ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-md shadow-emerald-900/20' 
                 : 'bg-[#1d4ed8] hover:bg-blue-700 text-white shadow-md shadow-blue-900/20'
             }`}
           >
             <MonitorUp className="h-4 w-4" />
             <span>{screenSharing ? 'Sharing Screen' : 'Share Screen'}</span>
           </button>
           
           <button 
             onClick={toggleHandRaise}
             className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
               handRaised 
                 ? 'bg-amber-600 text-white hover:bg-amber-700 shadow-md shadow-amber-900/20' 
                 : 'bg-[#334155] hover:bg-slate-600 text-slate-300 hover:text-white'
             }`}
           >
             <Hand className={`h-4 w-4 ${handRaised ? 'fill-current' : ''}`} />
             <span>Raise Hand</span>
           </button>

           <button 
             onClick={onShowPoll}
             className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
               showPollPanel 
                 ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-900/20' 
                 : 'bg-[#334155] hover:bg-slate-600 text-slate-300 hover:text-white'
             }`}
           >
             <BarChart2 className="h-4 w-4" />
             <span>Live Poll</span>
           </button>
        </div>

        {/* Action Button: End Call */}
        <div className="flex items-center">
           <button 
             onClick={() => onAddToast('You have left the active workspace', 'info')}
             className="h-10 w-12 rounded-lg bg-red-600 hover:bg-red-700 flex items-center justify-center text-white transition-all duration-200 shadow-lg active:scale-95"
             title="Leave Session"
           >
             <PhoneOff className="h-5 w-5" />
           </button>
        </div>

      </div>
    </div>
  );
};

const ParticipantsPanel = ({ 
  handRaised, 
  onAddToast, 
  activeTab, 
  setActiveTab,
  showPollPanel,
  setShowPollPanel 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [participants, setParticipants] = useState(INITIAL_PARTICIPANTS);
  const [chatMessages, setChatMessages] = useState(INITIAL_CHAT_MESSAGES);
  
  // Custom Live Poll State
  const [pollVoted, setPollVoted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [pollResults, setPollResults] = useState({
    A: 12,
    B: 35,
    C: 48,
    D: 5
  });

  const chatEndRef = useRef(null);

  // Sync handraised state to local active participant list representation
  useEffect(() => {
    setParticipants(prev => {
      const exists = prev.some(p => p.id === 999);
      if (handRaised) {
        if (!exists) {
          return [
            ...prev,
            { id: 999, name: 'You', initials: 'Y', color: 'bg-indigo-600', role: 'participant', micOn: false, videoOn: false, raisedHand: true, highlight: true }
          ];
        } else {
          return prev.map(p => p.id === 999 ? { ...p, raisedHand: true, highlight: true } : p);
        }
      } else {
        return prev.filter(p => p.id !== 999);
      }
    });
  }, [handRaised]);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (activeTab === 'chat') {
      scrollToBottom();
    }
  }, [chatMessages, activeTab]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    const msg = {
      id: Date.now(),
      sender: 'You',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: newMessage,
      isHost: false,
      isMe: true
    };
    
    setChatMessages(prev => [...prev, msg]);
    setNewMessage('');

    // Simulated automated response from AI Host/Tutor for highly functional feel
    setTimeout(() => {
      const replies = [
        "I'll address that query on slide 6!",
        "Excellent point of view. Let's dig deeper into CNN pipelines.",
        "Check out the shared document on theoretical neural topologies.",
        "That relates exactly to backward propagation calculations!"
      ];
      const randomReply = replies[Math.floor(Math.random() * replies.length)];
      
      setChatMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'Dr. Aris Thorne',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          text: randomReply,
          isHost: true
        }
      ]);
      onAddToast('New message from Dr. Aris Thorne', 'info');
    }, 2500);
  };

  const handlePollVote = (option) => {
    if (pollVoted) return;
    setSelectedOption(option);
    setPollResults(prev => ({
      ...prev,
      [option]: prev[option] + 1
    }));
    setPollVoted(true);
    onAddToast('Vote recorded for Option ' + option, 'success');
  };

  const totalVotes = Object.values(pollResults).reduce((a, b) => a + b, 0);

  const filteredParticipants = participants.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-[340px] bg-white dark:bg-[#1e293b] border-l border-gray-200 dark:border-slate-800/80 flex flex-col h-full shrink-0 transition-all duration-200">
      {/* Navigation Tabs bar */}
      <div className="flex border-b border-gray-200 dark:border-slate-800/80 shrink-0">
        <button 
          onClick={() => { setActiveTab('participants'); setShowPollPanel(false); }}
          className={`flex-1 py-3 text-xs font-semibold text-center transition-all duration-150 ${
            activeTab === 'participants' && !showPollPanel
              ? 'text-[#1d4ed8] dark:text-blue-400 border-b-2 border-[#1d4ed8] dark:border-blue-400 bg-slate-50/50 dark:bg-[#1a2333]/20' 
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          Participants ({participants.length + 20})
        </button>
        <button 
          onClick={() => { setActiveTab('chat'); setShowPollPanel(false); }}
          className={`flex-1 py-3 text-xs font-semibold text-center transition-all duration-150 ${
            activeTab === 'chat' && !showPollPanel
              ? 'text-[#1d4ed8] dark:text-blue-400 border-b-2 border-[#1d4ed8] dark:border-blue-400 bg-slate-50/50 dark:bg-[#1a2333]/20' 
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          Live Chat
        </button>
        {showPollPanel && (
          <button 
            className="flex-1 py-3 text-xs font-bold text-center border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400 bg-indigo-50/25 dark:bg-indigo-900/10"
          >
            Active Poll
          </button>
        )}
      </div>

      {/* Render Active View based on Selected Tab */}
      {showPollPanel ? (
        <div className="flex-1 flex flex-col overflow-y-auto p-4 bg-slate-50 dark:bg-[#172130]">
          <div className="bg-white dark:bg-[#1e293b] p-4 rounded-xl border border-indigo-100 dark:border-indigo-900/50 shadow-md">
            <div className="flex items-center gap-2 mb-3 text-indigo-600 dark:text-indigo-400">
              <Sparkles className="h-5 w-5 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider">Interactive Live Poll</span>
            </div>
            
            <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-4 leading-relaxed">
              Which neural network optimizer generally converges faster for deep convolutional pipelines?
            </h4>

            <div className="space-y-3">
              {[
                { key: 'A', text: 'SGD with Momentum' },
                { key: 'B', text: 'Adam (Adaptive Moment)' },
                { key: 'C', text: 'RMSprop' },
                { key: 'D', text: 'Adagrad' }
              ].map((opt) => {
                const pct = Math.round((pollResults[opt.key] / totalVotes) * 100);
                const isSelected = selectedOption === opt.key;
                return (
                  <button
                    key={opt.key}
                    disabled={pollVoted}
                    onClick={() => handlePollVote(opt.key)}
                    className={`w-full text-left p-3 rounded-lg border transition-all text-xs relative overflow-hidden ${
                      isSelected 
                        ? 'border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/30 font-semibold' 
                        : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-[#1a2436]'
                    }`}
                  >
                    {pollVoted && (
                      <div 
                        className={`absolute top-0 bottom-0 left-0 transition-all duration-1000 ${
                          isSelected ? 'bg-indigo-500/15' : 'bg-slate-200/10 dark:bg-slate-700/10'
                        }`} 
                        style={{ width: `${pct}%` }}
                      ></div>
                    )}
                    <div className="relative flex justify-between items-center z-10">
                      <span>{opt.key}. {opt.text}</span>
                      {pollVoted && (
                        <span className="font-mono text-slate-500 dark:text-slate-400">{pct}%</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {pollVoted ? (
              <div className="mt-4 text-center text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Your response has been registered.</span>
              </div>
            ) : (
              <p className="mt-4 text-center text-[11px] text-slate-400 dark:text-slate-500">
                Select an option to cast your vote and view results.
              </p>
            )}
          </div>
          
          <button 
            onClick={() => setShowPollPanel(false)}
            className="mt-4 text-xs font-semibold text-[#1d4ed8] dark:text-blue-400 hover:underline text-center"
          >
            ← Back to panel
          </button>
        </div>
      ) : activeTab === 'participants' ? (
        <>
          {/* Search bar inside panel */}
          <div className="p-4 pb-2 border-b border-gray-100 dark:border-slate-800/50 shrink-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 dark:text-slate-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search participants..."
                className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-slate-400 dark:placeholder-slate-500 text-slate-900 dark:text-slate-200 transition-colors duration-200"
              />
            </div>
          </div>

          {/* Participant List Loop */}
          <div className="flex-1 overflow-y-auto py-2">
            <ul className="px-3 space-y-1">
              {filteredParticipants.map((p) => (
                <li 
                  key={p.id} 
                  className={`flex items-center justify-between p-2 rounded-lg transition-all ${
                    p.highlight 
                      ? 'bg-amber-50 dark:bg-amber-950/20 border border-amber-200/40 dark:border-amber-900/30' 
                      : 'hover:bg-slate-50 dark:hover:bg-slate-800/50 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {p.avatar ? (
                      <img src={p.avatar} alt={p.name} className="h-8 w-8 rounded-full object-cover border border-slate-200 dark:border-slate-700" />
                    ) : (
                      <div className={`h-8 w-8 rounded-full ${p.color} flex items-center justify-center text-xs font-bold text-white`}>
                        {p.initials}
                      </div>
                    )}
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{p.name}</span>
                      <span className="text-[10px] text-slate-400 capitalize">{p.role}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {p.raisedHand && (
                       <Hand className="h-4 w-4 text-amber-500 fill-current animate-bounce" />
                    )}
                    {p.micOn ? (
                      <Mic className="h-4 w-4 text-blue-500 dark:text-blue-400" />
                    ) : (
                      <MicOff className="h-4 w-4 text-red-500 dark:text-red-400" />
                    )}
                    {p.videoOn ? (
                      <Video className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                    ) : (
                      <VideoOff className="h-4 w-4 text-red-500 dark:text-red-400" />
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div className="flex-1 flex flex-col overflow-hidden bg-slate-50 dark:bg-transparent">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {chatMessages.map((msg) => (
              <div key={msg.id} className={`flex flex-col ${msg.isMe ? 'items-end' : 'items-start'}`}>
                <div className="flex items-baseline gap-2 mb-1 px-1">
                  <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                    {msg.sender} {msg.isHost && <span className="text-[#1d4ed8] dark:text-blue-400 font-bold text-[10px] bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded ml-1">(Host)</span>}
                  </span>
                  <span className="text-[9px] text-slate-400 font-mono">{msg.time}</span>
                </div>
                <div 
                  className={`px-3.5 py-2 text-xs max-w-[85%] shadow-sm leading-relaxed ${
                    msg.isMe
                      ? 'bg-[#1d4ed8] text-white rounded-2xl rounded-br-none font-medium'
                      : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-100 dark:border-slate-700/50 rounded-2xl rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Form input for sending chat messages */}
          <div className="p-4 bg-white dark:bg-[#1e293b] border-t border-gray-200 dark:border-slate-800/80 shrink-0">
            <form onSubmit={handleSendMessage} className="relative flex items-center">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your question..."
                className="w-full pl-4 pr-12 py-2.5 bg-slate-100 dark:bg-[#0f172a] border border-transparent dark:border-slate-700/50 rounded-full text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-slate-400 dark:placeholder-slate-500 text-slate-900 dark:text-slate-200 transition-all duration-200"
              />
              <button 
                type="submit" 
                disabled={!newMessage.trim()}
                className="absolute right-2 h-8 w-8 flex items-center justify-center rounded-full bg-[#1d4ed8] hover:bg-blue-700 text-white disabled:bg-slate-200 dark:disabled:bg-slate-800 disabled:text-slate-400 transition-all"
              >
                <Send className="h-3.5 w-3.5 -ml-0.5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const CustomToast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgStyles = {
    success: 'bg-emerald-600 border-emerald-500 text-white',
    info: 'bg-slate-800 border-slate-700 text-slate-100 dark:bg-[#1e293b]',
    error: 'bg-red-600 border-red-500 text-white'
  }[type] || 'bg-slate-800 text-white';

  return (
    <div className={`flex items-center justify-between gap-3 px-4 py-3 rounded-lg border shadow-xl ${bgStyles} transition-all duration-300 animate-slide-in-right max-w-sm z-50`}>
      <span className="text-xs font-semibold">{message}</span>
      <button onClick={onClose} className="hover:opacity-80 transition-opacity">
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState('courses');
  
  // Audio/video/interactive state
  const [micEnabled, setMicEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(false);
  const [screenSharing, setScreenSharing] = useState(false);
  const [handRaised, setHandRaised] = useState(false);
  const [showPollPanel, setShowPollPanel] = useState(false);
  const [activeTab, setActiveTab] = useState('participants');

  // Custom Notifications & Modals
  const [toasts, setToasts] = useState([]);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [sessionInputCode, setSessionInputCode] = useState('');
  const [notificationCount, setNotificationCount] = useState(2);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    addToast(!isDarkMode ? 'Dark mode enabled' : 'Light mode enabled', 'info');
  };

  const addToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const handleJoinSessionSubmit = (e) => {
    e.preventDefault();
    if (!sessionInputCode.trim()) return;
    
    addToast(`Successfully joined session: ${sessionInputCode.toUpperCase()}`, 'success');
    setShowJoinModal(false);
    setSessionInputCode('');
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''} h-screen w-full relative overflow-hidden font-sans`}>
      <div className="flex h-full bg-[#f8fafc] dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 overflow-hidden transition-all duration-200">
        
        {/* Left Nav Sidebar */}
        <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />
        
        {/* Main Content Workspace Layout container */}
        <div className="flex-1 flex flex-col min-w-0 h-full">
          {/* Header Bar */}
          <Header 
            isDarkMode={isDarkMode} 
            toggleDarkMode={toggleDarkMode} 
            onJoinSession={() => setShowJoinModal(true)}
            onSearch={(query) => addToast(`Searching for: "${query}"`, 'info')}
            notificationCount={notificationCount}
            setNotificationCount={setNotificationCount}
          />
          
          {/* Main workspace with active course meeting and statistics layout */}
          <div className="flex-1 flex overflow-hidden p-4 pt-2">
            <div className="flex-1 flex bg-white dark:bg-[#1a2333]/40 border border-gray-200 dark:border-slate-800/80 rounded-2xl overflow-hidden shadow-lg transition-all duration-200">
              
              {/* Virtual Classroom Feed */}
              <VideoMeeting 
                micEnabled={micEnabled} 
                setMicEnabled={setMicEnabled} 
                videoEnabled={videoEnabled} 
                setVideoEnabled={setVideoEnabled} 
                screenSharing={screenSharing} 
                setScreenSharing={setScreenSharing} 
                handRaised={handRaised} 
                setHandRaised={setHandRaised}
                onShowPoll={() => setShowPollPanel(true)}
                onAddToast={addToast}
                showPollPanel={showPollPanel}
              />
              
              {/* Side Action Panel */}
              <ParticipantsPanel 
                handRaised={handRaised} 
                onAddToast={addToast} 
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                showPollPanel={showPollPanel}
                setShowPollPanel={setShowPollPanel}
              />

            </div>
          </div>
        </div>
      </div>

      {/* Floating toast notification layer */}
      <div className="absolute bottom-6 left-6 flex flex-col gap-2 z-50">
        {toasts.map(toast => (
          <CustomToast 
            key={toast.id} 
            message={toast.message} 
            type={toast.type} 
            onClose={() => removeToast(toast.id)} 
          />
        ))}
      </div>

      {}
      {showJoinModal && (
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white dark:bg-[#1e293b] max-w-md w-full mx-4 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xl relative">
            <button 
              onClick={() => setShowJoinModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="h-5 w-5" />
            </button>
            
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">Join an Active Session</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
              Enter your unique course room code or select a pre-scheduled learning environment to proceed.
            </p>

            <form onSubmit={handleJoinSessionSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 uppercase tracking-wider">
                  Session Access Code
                </label>
                <input 
                  type="text"
                  required
                  value={sessionInputCode}
                  onChange={(e) => setSessionInputCode(e.target.value)}
                  placeholder="e.g., AML-302"
                  className="w-full px-4 py-2.5 bg-slate-100 dark:bg-[#0f172a] border border-transparent dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button 
                  type="button"
                  onClick={() => setShowJoinModal(false)}
                  className="px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-5 py-2 bg-[#1d4ed8] hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-all shadow-md shadow-blue-900/10"
                >
                  Confirm & Join
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}