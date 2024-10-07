import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CashierSidebar from './components/cashier/components/CashierSidebar';
import Topbar from "./components/cashier/components/Topbar"
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from "./theme";
import PaymentApplication from './components/cashier/pages/paymentapplication/PaymentApplication';
import ApprovedClient from './components/cashier/pages/clientlist/ApprovedClient';
import Commision from './components/cashier/pages/commision/Commision';

function App() {
  const [theme, colorMode] = useMode();
  const [isCashierSidebar, setIsCashierSidebar] = useState(true);

  return (
    <Router>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className='app'>
            <CashierSidebar isCashierSidebar={isCashierSidebar} />
            <main className="content">
              <Topbar setIsAdminSidebar={setIsCashierSidebar} />
              <Routes>
                <Route path='/' element={<PaymentApplication />}/>
                <Route path='/approvedclients' element={<ApprovedClient />}/>
                <Route path='/commisions' element={<Commision />}/>
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Router>

  );
}

export default App;