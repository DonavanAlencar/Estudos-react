import React, { useEffect, useState } from "react";
import api from "./services/api";

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    api
      .post("/engine-rest/process-definition/key/impulsionaproject-process/start")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="App">
      <p>{variables[0].personal-message.value}</p>      
    </div>
  );
}