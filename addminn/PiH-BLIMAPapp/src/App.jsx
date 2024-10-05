import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminSidebar from './components/admin/components/AdminSidebar';
import Topbar from "./components/admin/components/Topbar"
import Dashboard from "./components/admin/pages/dashboard/Dashboard";
import ManageAdminAcc from "./components/admin/pages/manage_admin/ManageAdminAcc";
import ManageAgentAcc from "./components/admin/pages/manage_agent/ManageAgentAcc";
import ManageBranches from "./components/admin/pages/manage_branches/ManageBranches";
import ManageEmployeeAcc from "./components/admin/pages/manage_employee/ManageEmployeeAcc";
import BackupRestore from "./components/admin/pages/backuprestore/BackupRestore";
import Reports from "./components/admin/pages/reports/Reports";
import Form from "./components/admin/pages/form/Form";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isAdminSidebar, setIsAdminSidebar] = useState(true);

  return (
    <Router>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className='app'>
            <AdminSidebar isAdminSidebar={isAdminSidebar} />
            <main className="content">
              <Topbar setIsAdminSidebar={setIsAdminSidebar} />
              <Routes>
                <Route path='/' element={<Dashboard />}/>
                <Route path='/manageadminacc' element={<ManageAdminAcc />}/>
                <Route path='/manageagentacc' element={<ManageAgentAcc />}/>
                <Route path='/managebranches' element={<ManageBranches />}/>
                <Route path='/manageemployeeacc' element={<ManageEmployeeAcc />}/>
                <Route path='/backuprestore' element={<BackupRestore />}/>
                <Route path='/reports' element={<Reports />}/>
                <Route path='/form' element={<Form />} />
              
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Router>

  );
}

export default App;