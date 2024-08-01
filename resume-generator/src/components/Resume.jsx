import "../styles/Resume.css";

function ShowResume({
  name,
  email,
  phone,
  school,
  degree,
  schoolStartDate,
  schoolEndDate,
  position,
  company,
  jobStartDate,
  jobEndDate,
  educationContainer,
  workContainer,
}) {
  return (
    <>
      <div id="resume-container">
        <div id="resume-info">
          <h1>{name}</h1>
          <div className="resume-horizontal">
            <h3>{email}</h3>
            <h3>{phone}</h3>
          </div>
        </div>
        <hr></hr>
        <div id="resume-school">
          <h2 id="section-title">Education</h2>
          {educationContainer.map((element, index) => (
            <div key={index}>
              <div className="resume-horizontal">
                <h3>{element.degree}</h3>
                <h3>
                  {element.startDate} - {element.endDate}
                </h3>
              </div>
              <h3>{element.school}</h3>
            </div>
          ))}
          <div className="resume-horizontal">
            <h3>{degree}</h3>
            <h3>
              {schoolStartDate} - {schoolEndDate}
            </h3>
          </div>
          <h3>{school}</h3>
        </div>
        <hr></hr>
        <div id="resume-job">
          <h2 id="section-title">Experience</h2>
          {workContainer.map((element, index) => (
            <div key={index}>
              <div className="resume-horizontal">
                <h3>{element.position}</h3>
                <h3>
                  {element.startDate} - {element.endDate}
                </h3>
              </div>
              <h3>{element.company}</h3>
            </div>
          ))}
          <div className="resume-horizontal">
            <h3>{position}</h3>
            <h3>
              {jobStartDate} - {jobEndDate}
            </h3>
          </div>
          <h3>{company}</h3>
        </div>
      </div>
    </>
  );
}

export { ShowResume };
