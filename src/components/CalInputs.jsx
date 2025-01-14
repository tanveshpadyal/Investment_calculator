import React, { useState } from "react";

const CalInputs = ({ InputData }) => {
  const [inpdata, setInpData] = useState({
    ini: 0,
    ai: 0,
    Exr: 0,
    dur: 0,
  });

  const [err, setErr] = useState("");

  // get data from input box
  function handleInputs(e) {
    const { name, value } = e.target;

    setInpData((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0, // Ensure numeric values
    }));
  }

  function checkValidation() {
    // Check if any field is invalid
    if (!inpdata.ini || !inpdata.ai || !inpdata.Exr || !inpdata.dur) {
      setErr("Please fill all fields with valid values.");
      return;
    }

    // Ensure all fields have positive numbers
    if (
      inpdata.ini <= 0 ||
      inpdata.ai <= 0 ||
      inpdata.Exr <= 0 ||
      inpdata.dur <= 0
    ) {
      setErr("All values must be greater than zero.");
      return;
    }

    // If valid, pass data to parent and clear errors
    InputData(inpdata.ini, inpdata.ai, inpdata.Exr, inpdata.dur);
    setErr(""); // Clear error message
  }

  return (
    <>
      {err ? (
        <p className="w-full bg-red-600 p-2 font-semibold rounded">{err}</p>
      ) : undefined}

      <div
        className="inv-inp  grid gap-5 md:grid-cols-2 relative"
        id="user-input"
        aria-required
      >
        <label htmlFor="ini">
          Initial Investment <br />
          <input type="number" name="ini" id="ini" onChange={handleInputs} />
        </label>
        <label htmlFor="ai">
          Annual Investment <br />
          <input
            type="number"
            name="ai"
            id="ai"
            onChange={handleInputs}
            required
          />
        </label>
        <label htmlFor="Exr">
          Expected Return (%) <br />
          <input
            type="number"
            name="Exr"
            id="Exr"
            onChange={handleInputs}
            required
          />
        </label>
        <label htmlFor="dur">
          Duration (Years) <br />
          <input
            type="number"
            name="dur"
            id="dur"
            onChange={handleInputs}
            required
          />
        </label>
        <button
          className="bg-black px-10 py-3 rounded-lg text-lg font-semibold hover:bg-neutral-900"
          onClick={checkValidation}
        >
          calculate
        </button>
      </div>
    </>
  );
};

export default CalInputs;
