import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

const messages = {
  en: "Current time",
  it: "Ora corrente",
  es: "Hora actual",
};

export default function Clock() {
  const [date, setDate] = useState(new Date());
  const language = useContext(LanguageContext);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div>
      <h2>
        {messages[language]}: {date.toLocaleTimeString()}
      </h2>
    </div>
  );
}
