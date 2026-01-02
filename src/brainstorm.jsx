import React, { useState, useEffect, useRef, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { 
  Plus, 
  MessageSquare, 
  Cpu, 
  Layout, 
  Send, 
  Loader2, 
  Trash2, 
  History, 
  CheckCircle2,
  FileText,
  ChevronLeft,
  ChevronRight,
  PanelLeft,
  PanelRight,
  Moon,
  Sun,
  Copy,
  Check,
  AlertTriangle,
  X,
  Key,
  LogOut,
  Settings
} from 'lucide-react';
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  GoogleAuthProvider
} from "firebase/auth";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  query, 
  orderBy, 
  onSnapshot, 
  doc, 
  updateDoc, 
  setDoc,
  serverTimestamp,
  deleteDoc,
  where
} from "firebase/firestore";

// --- Firebase Configuration & Initialization ---
// Values are injected at build time via Vite environment variables (VITE_ prefixed).
// For local development create a `.env.local` with the same VITE_* keys.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// --- Helper: Simple Markdown Renderer ---
const parseBold = (text) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="font-bold opacity-100">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const SimpleMarkdown = ({ content, isDarkMode }) => {
  const h1Color = isDarkMode ? 'text-slate-100' : 'text-slate-900';
  const h2Color = isDarkMode ? 'text-slate-200 border-slate-700' : 'text-slate-800 border-slate-100';
  const h3Color = isDarkMode ? 'text-slate-300' : 'text-slate-800';
  const pColor = isDarkMode ? 'text-slate-300' : 'text-slate-700';
  const bulletColor = isDarkMode ? 'text-indigo-400' : 'text-indigo-500';

  if (!content) return (
    <div className={`flex flex-col items-center justify-center h-64 italic ${isDarkMode ? 'text-slate-600' : 'text-slate-400'}`}>
      <FileText className="w-12 h-12 mb-2 opacity-20" />
      <p>Start adding notes to generate a summary...</p>
    </div>
  );
  
  return (
    <div className="space-y-3 pb-8">
      {content.split('\n').map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={i} className="h-2"></div>;
        
        // Headers
        if (trimmed.startsWith('###')) return <h3 key={i} className={`text-lg font-bold mt-4 mb-2 ${h3Color}`}>{trimmed.replace(/^###\s*/, '')}</h3>;
        if (trimmed.startsWith('##')) return <h2 key={i} className={`text-xl font-bold mt-6 mb-3 border-b pb-1 ${h2Color}`}>{trimmed.replace(/^##\s*/, '')}</h2>;
        if (trimmed.startsWith('#')) return <h1 key={i} className={`text-2xl font-bold mt-6 mb-4 ${h1Color}`}>{trimmed.replace(/^#\s*/, '')}</h1>;
        
        // Lists
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          return (
            <div key={i} className="flex gap-3 ml-1">
              <span className={`font-bold mt-1.5 text-[10px] ${bulletColor}`}>•</span>
              <div className={`leading-relaxed flex-1 ${pColor}`}>
                {parseBold(trimmed.substring(2))}
              </div>
            </div>
          );
        }

        // Paragraphs
        return <p key={i} className={`leading-relaxed ${pColor}`}>{parseBold(trimmed)}</p>;
      })}
    </div>
  );
};

// --- Gemini API Helper (Now accepts key as arg) ---
const callGemini = async (apiKey, currentSummary, newNote) => {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
  
  const systemPrompt = `
    You are an expert brainstorming assistant. Your goal is to maintain a coherent, evolving summary of a user's thoughts.
    
    Current State:
    - You will receive the "Current Summary" (which might be empty).
    - You will receive a "New Note" from the user.
    
    Task:
    - Integrate the "New Note" into the "Current Summary".
    - If the summary is empty, start a new structure.
    - If the note is a task, add it to a simplified "Action Items" section.
    - If the note is a concept, merge it with related concepts.
    - CRITICAL: Keep the summary extremely concise and brief. Avoid wordy descriptions. Use fragments or short sentences.
    - Prioritize bullet points over paragraphs.
    - Return ONLY the updated summary text.
    - Use Markdown formatting:
      - Use '##' for main sections.
      - Use '-' for list items.
      - Use '**' for bold key terms.
  `;

  const userPrompt = `
    Current Summary:
    ${currentSummary || "(Empty)"}

    New Note:
    ${newNote}
  `;

  const payload = {
    contents: [{ parts: [{ text: userPrompt }] }],
    systemInstruction: { parts: [{ text: systemPrompt }] }
  };

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  
  for (let i = 0; i < 3; i++) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error(`API Error: ${response.status}`);
      
      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || currentSummary;
    } catch (err) {
      if (i === 2) throw err;
      await delay(1000 * Math.pow(2, i));
    }
  }
};

// --- Main Component ---
export default function App() {
  const [user, setUser] = useState(null);
  const [topics, setTopics] = useState([]);
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [summary, setSummary] = useState("");
  const [pendingNotes, setPendingNotes] = useState([]);
  const [processedNotes, setProcessedNotes] = useState([]);
  const [inputNote, setInputNote] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Layout & UI States
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isHistoryOpen, setIsHistoryOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const [topicToDelete, setTopicToDelete] = useState(null); 
  
  // API Key States
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('gemini_api_key') || "");
  const [tempApiKey, setTempApiKey] = useState("");
  const [isKeyModalOpen, setIsKeyModalOpen] = useState(!localStorage.getItem('gemini_api_key'));
  
  const [newTopicName, setNewTopicName] = useState("");
  const [isCreatingTopic, setIsCreatingTopic] = useState(false);

  const processingRef = useRef(false);

  // --- Theme Constants ---
  const theme = useMemo(() => {
    return isDarkMode ? {
      bgApp: 'bg-slate-950',
      bgSidebar: 'bg-slate-900',
      bgHeader: 'bg-slate-900',
      bgCard: 'bg-slate-900',
      bgInput: 'bg-slate-800',
      border: 'border-slate-800',
      textPrimary: 'text-slate-100',
      textSecondary: 'text-slate-400',
      textMuted: 'text-slate-500',
      hoverBg: 'hover:bg-slate-800',
      activeBg: 'bg-slate-800',
      inputRing: 'focus:ring-indigo-500',
      modalBg: 'bg-slate-900',
    } : {
      bgApp: 'bg-white',
      bgSidebar: 'bg-slate-50',
      bgHeader: 'bg-white',
      bgCard: 'bg-white',
      bgInput: 'bg-slate-50',
      border: 'border-slate-200',
      textPrimary: 'text-slate-900',
      textSecondary: 'text-slate-600',
      textMuted: 'text-slate-400',
      hoverBg: 'hover:bg-slate-100',
      activeBg: 'bg-white',
      inputRing: 'focus:ring-indigo-500',
      modalBg: 'bg-white',
    };
  }, [isDarkMode]);

  // 1. Auth Init - Listen for user status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  // 2. Login Handler - Google Auth
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login failed", error);
      alert(error.message);
    }
  };

  // 3. Logout Handler
  const handleLogout = async () => {
    setTopics([]);
    setSelectedTopicId(null);
    setSummary("");
    setPendingNotes([]);
    setProcessedNotes([]);
    await signOut(auth);
  };

  // 4. Fetch Topics
  useEffect(() => {
    if (!user) return;
    const q = query(
      collection(db, 'artifacts', appId, 'users', user.uid, 'topics'),
      orderBy('createdAt', 'desc')
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const loadedTopics = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTopics(loadedTopics);
    }, (err) => console.error("Topic fetch error:", err));
    return () => unsubscribe();
  }, [user]);

  // 3. Fetch Data for Selected Topic
  useEffect(() => {
    if (!user || !selectedTopicId) {
      setSummary("");
      setPendingNotes([]);
      setProcessedNotes([]);
      return;
    }

    const summaryRef = doc(db, 'artifacts', appId, 'users', user.uid, 'summaries', selectedTopicId);
    const unsubSummary = onSnapshot(summaryRef, (docSnap) => {
      if (docSnap.exists()) {
        setSummary(docSnap.data().content || "");
      } else {
        setSummary("");
      }
    }, (err) => console.error("Summary fetch error", err));

    const notesRef = collection(db, 'artifacts', appId, 'users', user.uid, 'notes');
    const qNotes = query(notesRef, where('topicId', '==', selectedTopicId));

    const unsubNotes = onSnapshot(qNotes, (snapshot) => {
      const allNotes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
      allNotes.sort((a, b) => {
        const timeA = a.createdAt?.seconds || Number.MAX_SAFE_INTEGER;
        const timeB = b.createdAt?.seconds || Number.MAX_SAFE_INTEGER;
        return timeA - timeB;
      });

      setPendingNotes(allNotes.filter(n => n.status === 'pending'));
      setProcessedNotes(allNotes.filter(n => n.status === 'processed').reverse());
    }, (err) => console.error("Notes fetch error", err));

    return () => {
      unsubSummary();
      unsubNotes();
    };
  }, [user, selectedTopicId]);

  // 4. Background Processor (Updated to use dynamic apiKey)
  useEffect(() => {
    const processQueue = async () => {
      if (!user || !selectedTopicId || processingRef.current || pendingNotes.length === 0) return;
      if (!apiKey) return; // Wait for key

      processingRef.current = true;
      setIsProcessing(true);

      const noteToProcess = pendingNotes[0];

      try {
        const newSummaryContent = await callGemini(apiKey, summary, noteToProcess.content);

        await setDoc(
          doc(db, 'artifacts', appId, 'users', user.uid, 'summaries', selectedTopicId), 
          { content: newSummaryContent, lastUpdated: serverTimestamp() },
          { merge: true }
        );

        await updateDoc(
          doc(db, 'artifacts', appId, 'users', user.uid, 'notes', noteToProcess.id),
          { status: 'processed', processedAt: serverTimestamp() }
        );

      } catch (error) {
        console.error("Processing failed:", error);
      } finally {
        processingRef.current = false;
        setIsProcessing(false);
      }
    };

    processQueue();
  }, [pendingNotes, summary, user, selectedTopicId, apiKey]); 

  // --- Handlers ---

  const handleSaveApiKey = () => {
    if (!tempApiKey.trim()) return;
    localStorage.setItem('gemini_api_key', tempApiKey.trim());
    setApiKey(tempApiKey.trim());
    setIsKeyModalOpen(false);
  };

  const handleClearApiKey = () => {
    if(confirm("Remove API Key from this device?")) {
      localStorage.removeItem('gemini_api_key');
      setApiKey("");
      setTempApiKey("");
      setIsKeyModalOpen(true);
    }
  };

  const handleAddNote = async (e) => {
    e.preventDefault();
    if (!inputNote.trim() || !selectedTopicId || !user) return;

    const content = inputNote;
    setInputNote(""); 

    try {
      await addDoc(collection(db, 'artifacts', appId, 'users', user.uid, 'notes'), {
        topicId: selectedTopicId,
        content: content,
        status: 'pending',
        createdAt: serverTimestamp()
      });
    } catch (err) {
      console.error("Failed to add note", err);
      setInputNote(content); 
    }
  };

  const handleCreateTopic = async (e) => {
    e.preventDefault();
    if (!newTopicName.trim() || !user) return;
    
    try {
      const docRef = await addDoc(collection(db, 'artifacts', appId, 'users', user.uid, 'topics'), {
        name: newTopicName,
        createdAt: serverTimestamp()
      });
      setNewTopicName("");
      setIsCreatingTopic(false);
      setSelectedTopicId(docRef.id);
      setIsSidebarOpen(false); 
    } catch (err) {
      console.error("Error creating topic", err);
    }
  };

  const initiateDeleteTopic = (e, topicId) => {
    e.stopPropagation();
    setTopicToDelete(topicId);
  };

  const confirmDeleteTopic = async () => {
    if (!topicToDelete || !user) return;
    
    const idToDelete = topicToDelete;
    setTopicToDelete(null); 

    try {
      await deleteDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'topics', idToDelete));
      if (selectedTopicId === idToDelete) {
        setSelectedTopicId(null);
      }
    } catch (err) {
      console.error("Error deleting topic", err);
    }
  };

  const handleCopySummary = () => {
    if (!summary) return;
    const textarea = document.createElement('textarea');
    textarea.value = summary;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Show login screen if not authenticated
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-sm w-full text-center">
          <div className="mb-6 bg-indigo-100 p-3 rounded-full w-fit mx-auto text-indigo-600">
            <Cpu size={32} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Brainstorm</h1>
          <p className="text-gray-500 mb-8">Sign in with Google to access your notes.</p>
          
          <button 
            onClick={handleLogin}
            className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
          >
            <span>Sign in with Google</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex h-screen w-full font-sans overflow-hidden transition-colors duration-300 ${theme.bgApp} ${theme.textPrimary}`}>
      
      {/* --- API Key Modal --- */}
      {isKeyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className={`w-full max-w-md p-8 rounded-xl shadow-2xl ${theme.modalBg} border ${theme.border}`}>
            <div className="flex flex-col items-center mb-6">
              <div className="p-3 bg-indigo-500/10 rounded-full mb-4">
                <Key className="w-8 h-8 text-indigo-500" />
              </div>
              <h2 className={`text-xl font-bold ${theme.textPrimary}`}>Enter Gemini API Key</h2>
              <p className={`text-center text-sm ${theme.textSecondary} mt-2`}>
                To use ThoughtStream, you need a Google Gemini API key. Your key is stored locally in your browser.
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${theme.textMuted}`}>API Key</label>
                <input 
                  type="password"
                  value={tempApiKey}
                  onChange={(e) => setTempApiKey(e.target.value)}
                  placeholder="AIzaSy..."
                  className={`w-full px-4 py-3 rounded-lg border ${theme.border} ${theme.bgInput} ${theme.textPrimary} focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all`}
                />
              </div>
              
              <button 
                onClick={handleSaveApiKey}
                disabled={!tempApiKey.trim()}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-indigo-500/20"
              >
                Start Brainstorming
              </button>
              
              <div className="text-center">
                <a 
                  href="https://aistudio.google.com/app/apikey" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-indigo-400 hover:text-indigo-300 underline"
                >
                  Get a free API key here
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- Delete Confirmation Modal --- */}
      {topicToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className={`w-full max-w-sm p-6 rounded-xl shadow-2xl ${theme.modalBg} border ${theme.border} transform transition-all`}>
            <div className="flex items-center gap-3 text-amber-500 mb-4">
              <AlertTriangle className="w-6 h-6" />
              <h3 className={`text-lg font-bold ${theme.textPrimary}`}>Delete Topic?</h3>
            </div>
            <p className={`mb-6 text-sm ${theme.textSecondary}`}>
              Are you sure you want to delete this topic? This action cannot be undone and you will lose the summary and history.
            </p>
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setTopicToDelete(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${theme.textSecondary} hover:${theme.bgInput} transition-colors`}
              >
                Cancel
              </button>
              <button 
                onClick={confirmDeleteTopic}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-500/20 transition-all"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- LEFT SIDEBAR (Topics) --- */}
      <div className={`${isSidebarOpen ? 'w-72 border-r' : 'w-0'} ${theme.bgSidebar} ${theme.border} transition-all duration-300 flex flex-col flex-shrink-0 z-20 overflow-hidden`}>
        <div className={`p-4 border-b ${theme.border} flex items-center justify-between`}>
          <h1 className={`font-bold ${theme.textPrimary} flex items-center gap-2`}>
            <Cpu className="w-5 h-5 text-indigo-500" />
            <span className="whitespace-nowrap">Brainstorm</span>
          </h1>
          <button onClick={() => setIsCreatingTopic(!isCreatingTopic)} className={`p-1.5 rounded-md transition-colors ${theme.hoverBg}`}>
            <Plus className={`w-4 h-4 ${theme.textSecondary}`} />
          </button>
        </div>

        {isCreatingTopic && (
          <form onSubmit={handleCreateTopic} className={`p-3 border-b ${theme.border} ${theme.bgCard}`}>
            <input 
              autoFocus
              type="text" 
              value={newTopicName}
              onChange={(e) => setNewTopicName(e.target.value)}
              placeholder="New Topic Name..."
              className={`w-full px-3 py-2 text-sm border ${theme.border} ${theme.bgInput} ${theme.textPrimary} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-2 placeholder:text-slate-500`}
            />
            <div className="flex justify-end gap-2">
              <button 
                type="button" 
                onClick={() => setIsCreatingTopic(false)} 
                className={`text-xs ${theme.textSecondary} px-2 py-1 hover:${theme.textPrimary}`}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="text-xs bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
              >
                Create
              </button>
            </div>
          </form>
        )}

        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {topics.map(topic => (
            <div 
              key={topic.id}
              onClick={() => setSelectedTopicId(topic.id)}
              className={`group flex items-center justify-between p-2.5 rounded-md cursor-pointer transition-colors ${selectedTopicId === topic.id ? `${isDarkMode ? 'bg-slate-800' : 'bg-white shadow-sm ring-1 ring-slate-200'}` : `hover:${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}`}
            >
              <div className={`truncate text-sm ${selectedTopicId === topic.id ? `font-semibold ${isDarkMode ? 'text-indigo-300' : 'text-indigo-900'}` : theme.textSecondary}`}>{topic.name}</div>
              {selectedTopicId === topic.id && (
                <button 
                  onClick={(e) => initiateDeleteTopic(e, topic.id)}
                  className="opacity-0 group-hover:opacity-100 p-1 hover:bg-red-500/10 rounded text-red-400 hover:text-red-500 transition-all"
                  title="Delete Topic"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          ))}
          {topics.length === 0 && !isCreatingTopic && (
            <div className={`text-center py-10 ${theme.textMuted} text-xs`}>
              <p>No topics.</p>
            </div>
          )}
        </div>

        {/* --- Sidebar Footer (Settings) --- */}
        <div className={`p-4 border-t ${theme.border} space-y-2`}>
          <button 
            onClick={handleClearApiKey}
            className={`flex items-center gap-2 text-xs ${theme.textSecondary} hover:${theme.textPrimary} transition-colors w-full`}
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Update API Key</span>
          </button>
          
          <div className="text-[10px] text-slate-400 mt-3 pb-2">
            <span>{user.email}</span>
          </div>
          
          <button 
            onClick={handleLogout}
            className={`flex items-center gap-2 text-xs text-red-500 hover:text-red-600 transition-colors w-full`}
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* --- MAIN CONTENT CENTER --- */}
      <div className={`flex-1 flex flex-col h-full relative min-w-0 ${theme.bgApp}`}>
        
        {/* Header */}
        <div className={`h-14 border-b ${theme.border} ${theme.bgHeader} flex items-center px-4 justify-between flex-shrink-0 z-10`}>
          <div className="flex items-center gap-3 min-w-0">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
              className={`p-1.5 rounded-md ${theme.textSecondary} transition-colors ${theme.hoverBg}`}
              title={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
            >
              <PanelLeft className="w-5 h-5" />
            </button>
            <h2 className={`font-semibold text-lg truncate ${theme.textPrimary}`}>
              {topics.find(t => t.id === selectedTopicId)?.name || "Select a Topic"}
            </h2>
          </div>
          
          <div className="flex items-center gap-2">
            
            {/* Dark Mode Toggle */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-md transition-colors ${theme.hoverBg} ${theme.textSecondary}`}
              title="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1"></div>

            {selectedTopicId && (
              <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium transition-colors ${isProcessing || pendingNotes.length > 0 ? 'bg-amber-500/10 text-amber-600' : 'bg-green-500/10 text-green-600'}`}>
                {isProcessing ? <Loader2 className="w-3 h-3 animate-spin" /> : pendingNotes.length > 0 ? <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" /> : <CheckCircle2 className="w-3 h-3" />}
                <span className="hidden sm:inline">
                  {isProcessing ? "Synthesizing" : pendingNotes.length > 0 ? "Queued" : "Saved"}
                </span>
              </div>
            )}
            
            <button 
              onClick={() => setIsHistoryOpen(!isHistoryOpen)} 
              className={`p-1.5 rounded-md ${theme.textSecondary} transition-colors ${theme.hoverBg}`}
              title={isHistoryOpen ? "Close History" : "Open History"}
            >
              <PanelRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Workspace Area */}
        {selectedTopicId ? (
          <div className="flex-1 flex flex-col relative overflow-hidden">
            
            {/* Live Summary Scrollable Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-8 custom-scrollbar">
              <div className="max-w-3xl mx-auto">
                {/* Status/Actions Banner */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${theme.textMuted}`}>
                    <FileText className="w-4 h-4" />
                    Live Summary
                  </div>
                  {summary && (
                    <button 
                      onClick={handleCopySummary}
                      className={`flex items-center gap-1.5 text-xs px-2 py-1 rounded-md transition-all ${isCopied ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : `${theme.hoverBg} ${theme.textSecondary}`}`}
                    >
                      {isCopied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      {isCopied ? "Copied!" : "Copy"}
                    </button>
                  )}
                </div>
                
                <div className="prose-sm sm:prose max-w-none">
                  <SimpleMarkdown content={summary} isDarkMode={isDarkMode} />
                </div>
                
                {/* Spacer for comfortable scrolling */}
                <div className="h-12" />
              </div>
            </div>

            {/* Bottom Input Area (Chat Style) */}
            <div className={`p-4 ${theme.bgCard} border-t ${theme.border} z-10`}>
              <div className="max-w-3xl mx-auto relative">
                <form onSubmit={handleAddNote} className="relative flex gap-2 items-end">
                  <div className="relative flex-1">
                    <textarea
                      value={inputNote}
                      onChange={(e) => setInputNote(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleAddNote(e);
                        }
                      }}
                      placeholder="Type a note, idea, or task..."
                      className={`w-full pl-4 pr-4 py-3 border ${theme.border} ${theme.bgInput} ${theme.textPrimary} rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none text-sm shadow-sm transition-all placeholder:text-slate-500`}
                      rows={1}
                      style={{ minHeight: '44px', maxHeight: '120px' }}
                      onInput={(e) => {
                        e.target.style.height = 'auto'; 
                        e.target.style.height = e.target.scrollHeight + 'px';
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={!inputNote.trim()}
                    className="flex-shrink-0 p-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:hover:bg-indigo-600 transition-colors shadow-sm"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </form>
                <div className={`text-[10px] ${theme.textMuted} text-center mt-2`}>
                  Press Enter to send • Processing happens in background
                </div>
              </div>
            </div>

          </div>
        ) : (
          <div className={`flex-1 flex flex-col items-center justify-center ${theme.textMuted}`}>
            <Cpu className={`w-16 h-16 mb-4 opacity-20`} />
            <h3 className={`text-lg font-medium ${theme.textSecondary}`}>No Topic Selected</h3>
            <p className="text-sm">Select or create a topic to start brainstorming.</p>
          </div>
        )}
      </div>

      {/* --- RIGHT SIDEBAR (History) --- */}
      <div className={`${isHistoryOpen ? 'w-72 border-l' : 'w-0'} ${theme.bgSidebar} ${theme.border} transition-all duration-300 flex flex-col flex-shrink-0 z-20 overflow-hidden`}>
        <div className={`p-4 border-b ${theme.border} flex items-center justify-between h-14`}>
          <div className={`text-xs font-bold uppercase tracking-wider ${theme.textMuted} flex items-center gap-2`}>
            <History className="w-4 h-4" />
            Queue & History
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          {/* Pending Notes */}
          {pendingNotes.length > 0 && (
            <div className="space-y-2">
              <div className="text-[10px] font-semibold text-amber-600 uppercase tracking-wider pl-1">Processing</div>
              {pendingNotes.map(note => (
                <div key={note.id} className={`p-3 rounded-lg border border-amber-500/30 ${theme.bgCard} shadow-sm opacity-90 relative overflow-hidden group`}>
                  <div className="absolute top-0 right-0 p-1.5 opacity-50">
                    <Loader2 className="w-3 h-3 text-amber-500 animate-spin" />
                  </div>
                  <p className={`text-sm ${theme.textSecondary} pr-4`}>{note.content}</p>
                </div>
              ))}
            </div>
          )}

          {/* Processed Notes */}
          {processedNotes.length > 0 && (
            <div className="space-y-2 pt-2">
              <div className={`text-[10px] font-semibold ${theme.textMuted} uppercase tracking-wider pl-1`}>Processed</div>
              {processedNotes.map(note => (
                <div key={note.id} className={`p-3 rounded-lg border ${theme.border} ${theme.bgCard} shadow-sm group hover:${theme.border === 'border-slate-800' ? 'border-slate-600' : 'border-indigo-200'} transition-colors`}>
                  <p className={`text-sm ${theme.textSecondary}`}>{note.content}</p>
                  <div className={`mt-2 text-[10px] ${theme.textMuted} flex justify-end`}>
                    {note.createdAt?.seconds ? new Date(note.createdAt.seconds * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : 'Just now'}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {selectedTopicId && pendingNotes.length === 0 && processedNotes.length === 0 && (
            <div className={`text-center py-10 ${theme.textMuted} text-xs italic`}>
              History is empty.
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

// If this file is included directly in the HTML, mount the app into #root.
const rootEl = typeof document !== 'undefined' ? document.getElementById('root') : null;
if (rootEl) {
  createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}