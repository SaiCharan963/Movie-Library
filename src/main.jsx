import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider from './components/ContextProvider.jsx';



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="min-h-screen w-full bg-gray-900 text-white">
      <ContextProvider>
        <App />
      </ContextProvider>
    </div>
  </StrictMode>
);
