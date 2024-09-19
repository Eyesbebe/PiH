import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListOfApplication from './components/cashier/pages/ListOfApplication';
import CashierSidebar from './components/cashier/components/CashierSidebar';
import ApprovedClients from './components/cashier/pages/ApprovedClients';
import CommissionRecord from './components/cashier/pages/CommissionRecord';
import './components/cashier/styles/main.css';

function App() {
    return (
        <Router>
          <div className="App">
            <CashierSidebar />
            <div className="mainContent">
            <Routes>
              <Route path='/' element={<ListOfApplication/>} />
              <Route path='/listofclients/approved' element={<ApprovedClients/>}/>
              <Route path='/commisionrecord' element={<CommissionRecord/>}/>
            </Routes>
            </div>
          </div>
        </Router>
      );
    };
    
    export default App;
    