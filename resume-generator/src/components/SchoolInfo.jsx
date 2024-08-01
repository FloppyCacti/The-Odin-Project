import React, { useRef } from "react";
import "../styles/container.css";
import "../styles/SchoolInfo.css";
import "./Resume";

function SchoolInfo({
  school,
  setSchool,
  degree,
  setDegree,
  schoolStartDate,
  setSchoolStartDate,
  schoolEndDate,
  setSchoolEndDate,
  container,
  setContainer,
}) {
  const schoolRef = useRef(null);
  const degreeRef = useRef(null);
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);

  const insertIntoEducationContainer = (school, degree, startDate, endDate) => {
    const obj = {
      school: school,
      degree: degree,
      startDate: startDate,
      endDate: endDate,
    };
    setContainer((prev) => [...prev, obj]);
  };

  const handleAdd = () => {
    insertIntoEducationContainer(
      schoolRef.current.value,
      degreeRef.current.value,
      startDateRef.current.value,
      endDateRef.current.value
    );

    // Clear the input fields
    setSchool("");
    setDegree("");
    setSchoolStartDate("");
    setSchoolEndDate("");
  };

  const handleRemove = (index) => {
    setContainer((prev) => prev.filter((item, i) => i !== index));
  };

  return (
    <>
      <div className="container">
        <div>
          <h2>School:</h2>
          <input
            ref={schoolRef}
            id="schoolInput"
            type="text"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          ></input>
        </div>
        <div>
          <h2>Degree: </h2>
          <input
            ref={degreeRef}
            id="degreeInput"
            type="text"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          ></input>
        </div>
        <div>
          <h2>Start Date:</h2>
          <input
            ref={startDateRef}
            id="schoolStartInput"
            type="date"
            value={schoolStartDate}
            onChange={(e) => setSchoolStartDate(e.target.value)}
          ></input>
        </div>
        <div>
          <h2>Finish Date:</h2>
          <input
            ref={endDateRef}
            id="schoolEndInput"
            type="date"
            value={schoolEndDate}
            onChange={(e) => setSchoolEndDate(e.target.value)}
          ></input>
        </div>
        <button onClick={handleAdd}>Add</button>
        {container.length !== 0 && (
          <div id="educationContainer">
            {container.map((element, index) => (
              <div key={index}>
                <div>
                  <h4>
                    {element.school} - {element.degree}
                  </h4>
                  <h4>
                    {element.startDate} - {element.endDate}
                  </h4>
                </div>
                <button onClick={() => handleRemove(index)}>Remove</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export { SchoolInfo };
