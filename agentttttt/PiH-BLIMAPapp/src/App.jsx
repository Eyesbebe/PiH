import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AgentSidebar from './components/agent/components/AgentSidebar';
import Topbar from "./components/agent/components/Topbar"
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from "./theme";
import Map from './components/agent/pages/map/Map';
import ApprovedClient from './components/agent/pages/clientlist/ApprovedClient';
import DeclinedClient from './components/agent/pages/clientlist/DeclinedClient';

function App() {
  const [theme, colorMode] = useMode();
  const [isAgentSidebar, setIsAgentSidebar] = useState(true);

  return (
    <Router>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className='app'>
            <AgentSidebar isAdminSidebar={isAgentSidebar} />
            <main className="content">
              <Topbar setIsAdminSidebar={setIsAgentSidebar} />
              <Routes>
                <Route path='/' element={<Map />}/>
                <Route path='/approvedclients' element={<ApprovedClient />}/>
                <Route path='/declinedclients' element={<DeclinedClient />}/>
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Router>

  );
}

export default App;