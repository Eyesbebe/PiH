import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Map from './components/information_officer/pages/Map';
import InformationOfficerSidebar from './components/information_officer/components/InformationOfficerSidebar';
import ApprovedClients from './components/information_officer/pages/AprrovedClients';
import ListOfAgents from './components/information_officer/pages/ListOfAgents';
import './components/information_officer/styles/main.css';

function App() {
    return (
        <Router>
          <div className="App">
            <InformationOfficerSidebar />
            <div className="mainContent">
            <Routes>
              <Route path='/' element={<Map/>} />
              <Route path='/listofagents' element={<ListOfAgents/>}/>
              <Route path='/listofclients/approved' element={<ApprovedClients/>}/>
            </Routes>
            </div>
          </div>
        </Router>
      );
    };
    
    export default App;
    