import { useState } from "react";
import Header from "./components/Header";
import CalInputs from "./components/CalInputs";
import DataTable from "./components/DataTable";

function App() {
  const [inpentries, setInputEntries] = useState({
    inValue: 0,
    anualvalue: 0,
    Expectedreturn: 0,
    duration: 0,
  });

  function handleData(
    inValue = 0,
    anualvalue = 0,
    Expectedreturn = 0,
    duration = 0
  ) {
    setInputEntries(() => ({
      inValue,
      anualvalue,
      Expectedreturn,
      duration,
    }));
  }

  // console.log(inp);

  return (
    <>
      <Header />
      <div className="inc_cal center md:w-4/5 lg:w-2/5 ">
        <CalInputs InputData={handleData} />
        <DataTable
          initialvalue={inpentries.inValue}
          anualValue={inpentries.anualvalue}
          expectedReturn={inpentries.Expectedreturn}
          duration={inpentries.duration}
        />
      </div>
    </>
  );
}

export default App;
