import { useRef } from "react";
import "../styles/container.css";
import "../styles/workInfo.css";

function WorkInfo({
  position,
  setPosition,
  company,
  setCompany,
  jobStartDate,
  setJobStartDate,
  jobEndDate,
  setJobEndDate,
  container,
  setContainer,
}) {
  const positionRef = useRef(null);
  const companyRef = useRef(null);
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);

  const insertIntoWorkContainer = (position, company, startDate, endDate) => {
    const obj = {
      position: position,
      company: company,
      startDate: startDate,
      endDate: endDate,
    };
    setContainer((prev) => [...prev, obj]);
  };

  const handleAdd = () => {
    insertIntoWorkContainer(
      positionRef.current.value,
      companyRef.current.value,
      startDateRef.current.value,
      endDateRef.current.value
    );

    // Clear the input fields
    setPosition("");
    setCompany("");
    setJobStartDate("");
    setJobEndDate("");
  };

  const handleRemove = (index) => {
    setContainer((prev) => prev.filter((item, i) => i !== index));
  };
  return (
    <>
      <div className="container">
        <div>
          <h2>Position/Title:</h2>
          <input
            ref={positionRef}
            id="positionInput"
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          ></input>
        </div>
        <div>
          <h2>Company: </h2>
          <input
            ref={companyRef}
            id="comanyInput"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          ></input>
        </div>
        <div>
          <h2>Started at: </h2>
          <input
            ref={startDateRef}
            id="jobStartInput"
            type="date"
            value={jobStartDate}
            onChange={(e) => setJobStartDate(e.target.value)}
          ></input>
        </div>
        <div>
          <h2>Ended at: </h2>
          <input
            ref={endDateRef}
            id="jobEndInput"
            type="date"
            value={jobEndDate}
            onChange={(e) => setJobEndDate(e.target.value)}
          ></input>
        </div>
        <button onClick={handleAdd}>Add</button>
        {container.length !== 0 && (
          <div id="workContainer">
            {container.map((element, index) => (
              <div key={index}>
                <div>
                  <h4>
                    {element.position} - {element.company}
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

export { WorkInfo };
