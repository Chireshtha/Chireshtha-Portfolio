import { createContext, useState } from 'react';
import './App.css';
import NavigationBar from './components/Layouts/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Layouts/Footer';


export const resumeContect = createContext();

function App() {
  const [theme, setTheme] = useState("light")
  return (
    <resumeContect.Provider value={{theme, setTheme}}>
      <NavigationBar />
      <Outlet />
      <Footer />
    </resumeContect.Provider>
  );
}

export default App;
