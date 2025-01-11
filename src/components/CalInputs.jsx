import React, { useState } from "react";

const CalInputs = ({ InputData }) => {
  const [inpdata, setInpData] = useState({
    ini: 0,
    ai: 0,
    Exr: 0,
    dur: 0,
  });

  // get data from input box
  function handleInputs(e) {
    const { name, value } = e.target;
    setInpData((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0, // Ensure numeric values
    }));
  }

  return (
    <div className="inv-inp grid gap-5 md:grid-cols-2" id="user-input">
      <label htmlFor="ini">
        Initial Investment <br />
        <input type="number" name="ini" id="ini" onChange={handleInputs} />
      </label>
      <label htmlFor="ai">
        Annual Investment <br />
        <input type="number" name="ai" id="ai" onChange={handleInputs} />
      </label>
      <label htmlFor="Exr">
        Expected Return (%) <br />
        <input type="number" name="Exr" id="Exr" onChange={handleInputs} />
      </label>
      <label htmlFor="dur">
        Duration (Years) <br />
        <input type="number" name="dur" id="dur" onChange={handleInputs} />
      </label>
      <button
        className="bg-black px-10 py-3 rounded-lg text-lg font-semibold hover:bg-neutral-900"
        onClick={() =>
          InputData(inpdata.ini, inpdata.ai, inpdata.Exr, inpdata.dur)
        }
      >
        calculate
      </button>
    </div>
  );
};

export default CalInputs;
