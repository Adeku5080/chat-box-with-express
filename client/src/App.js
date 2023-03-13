import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [command, setCommand] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:4000/api/v1/command");
      setCommand(data.commands);
      console.log(command);
    
    };
    fetchData();
  }, []);

  return <div>
    {
      command.map((command)=>(
        <li key={command.id}>{command.command_value}</li>
      ))
    }
    </div>;
};

export default App;
