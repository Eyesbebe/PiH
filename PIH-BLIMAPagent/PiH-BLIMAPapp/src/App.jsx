import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Map from './components/agent/pages/Map';
import ListOfClient from './components/agent/pages/ListOfClient';
import AgentSidebar from './components/agent/components/AgentSidebar';
import ApprovedClients from './components/agent/pages/AprrovedClients';
import DeclinedClients from './components/agent/pages/DeclinedClients';
import './components/agent/styles/main.css';

function App() {
    return (
        <Router>
          <div className="App">
            <AgentSidebar />
            <div className="mainContent">
            <Routes>
              <Route path='/' element={<Map/>} />
              <Route path='/listofclient' element={<ListOfClient />} />
              <Route path='/listofclient/approved' element={<ApprovedClients/>}/>
              <Route path='/listofclient/declined' element={<DeclinedClients/>}/>
            </Routes>
            </div>
          </div>
        </Router>
      );
    };
    
    export default App;
    