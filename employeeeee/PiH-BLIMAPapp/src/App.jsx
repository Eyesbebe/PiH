import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InformationOfficerSidebar from './components/information_officer/components/InformationOfficerSidebar';
import Topbar from "./components/information_officer/components/Topbar"
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from "./theme";
import Map from './components/information_officer/pages/map/Map';
import AgentList from './components/information_officer/pages/agentlist/AgentList';
import ApprovedClient from './components/information_officer/pages/clientlist/ApprovedClient';


function App() {
  const [theme, colorMode] = useMode();
  const [isInformationOfficerSidebar, setIsInformationOfficerSidebar] = useState(true);

  return (
    <Router>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className='app'>
            <InformationOfficerSidebar isInformationOfficerSidebar={isInformationOfficerSidebar} />
            <main className="content">
              <Topbar setIsAdminSidebar={setIsInformationOfficerSidebar} />
              <Routes>
                <Route path='/' element={<Map />}/>
                <Route path='/agentlist' element={<AgentList />} />
                <Route path='/approvedclients' element={<ApprovedClient />}/>
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Router>

  );
}

export default App;