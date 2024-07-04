import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { traerInfo } from "./functions/peticiones";
import { FaAppStore } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0);
  const numero = traerInfo()

  return (
    <>
      <h1 className="text-3xl font-bold underline text-verde">
        Hello world!
      </h1>
      <h1 className="text-3xl font-bold underline text-verde_opaco">
        Hello world!
      </h1>
      <h1 className="text-3xl font-bold underline text-verde_oscuro font-Ga_Maamli">
        Hello world!
      </h1>
      <h1 className="text-3xl font-bold underline text-verde_oscuro font-Ga_Maamli">
        {numero}
      </h1>
      <FaAppStore className="text-5xl" />
    </>
  );
}

export default App;
