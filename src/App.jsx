import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardV1 from './pages/DashboardV1';
import DashboardV2 from './pages/DashboardV2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route redirects to V1 (Original) */}
        <Route path="/" element={<Navigate to="/v1" replace />} />
        
        {/* Route for Dashboard V1 */}
        <Route path="/v1" element={<DashboardV1 />} />
        
        {/* Route for Dashboard V2 - Multi Branch */}
        <Route path="/v2" element={<Navigate to="/v2/nasional" replace />} />
        <Route path="/v2/:branch" element={<DashboardV2 />} />
        
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/v1" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
