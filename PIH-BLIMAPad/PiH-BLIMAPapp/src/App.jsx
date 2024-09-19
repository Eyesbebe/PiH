import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/admin/pages/Dashboard';
import ManageAdminAcc from "./components/admin/pages/ManageAdminAcc";
import ManageAgentAcc from './components/admin/pages/ManageAgentAcc';
import ManageBranches from './components/admin/pages/ManageBranches';
import ManageEmployeeAcc from './components/admin/pages/ManageEmployeeAcc';
import BackupRestore from './components/admin/pages/BackupRestore';
import Reports from './components/admin/pages/Reports';
import AdminSidebar from './components/admin/components/AdminSidebar';
import './components/admin/styles/main.css';

function App() {
    return (
        <Router>
          <div className="App">
            <AdminSidebar />
            <div className="mainContent">
            <Routes>
              <Route path='/' element={<Dashboard/>} />
              <Route path='/manageadmin' element={<ManageAdminAcc />} />
              <Route path='/manageagent' element={<ManageAgentAcc />} />
              <Route path='/managebranches' element={<ManageBranches />} />
              <Route path='/manageemployee' element={<ManageEmployeeAcc />} />
              <Route path='/backrestore' element={<BackupRestore />} />
              <Route path='/reports' element={<Reports />} />
            </Routes>
            </div>
          </div>
        </Router>
      );
    };
    
    export default App;
    