import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import DataListPage from './pages/DataListPage';
import DetailedViewPage from './pages/DetailedViewPage';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/AboutPage';
import NotFound from './pages/NotFound';
import EmployeeListPage from './pages/employees/EmployeeListPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import ContactUsPage from './pages/ContactUs';
import FAQPage from './pages/FAQ';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/data')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<WelcomePage />} />
        <Route path="/list" element={<DataListPage data={data} setData={setData} />} />
        <Route path="/details/:id" element={<DetailedViewPage data={data} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/employees" element={<EmployeeListPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;