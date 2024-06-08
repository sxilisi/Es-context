import { useState } from "react";
import "./App.css";
import Clock from "./assets/components/Clock";
import { LanguageContext } from "./assets/components/LanguageContext";

function App() {
  const [language, setLanguage] = useState("en");

  function handleLanguage(event) {
    setLanguage(event.target.value);
  }
  return (
    <div>
      <LanguageContext.Provider value={language}>
        <select onChange={handleLanguage} value={language}>
          <option value={"it"}>Italiano</option>
          <option value={"en"}>English</option>
          <option value={"es"}>Espanol</option>
        </select>
        <Clock />;
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
