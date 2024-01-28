import "./Dashboard.css";
import students from "../../assets/students-on-lecture-svgrepo.svg";
import teacher from "../../assets/teacher-social-svgrepo.svg";
import classLogo from "../../assets/class-scene-svgrepo.svg";
import LineChart from "../../components/Charts/Line";
import CardAnalysis from "../../components/Card/CardAnalysis";
import BasicDateCalendar from "../../components/Calender/Calendar";
import DropdownButton from "../../components/Buttons/DropDown";
import PieChartComponent from "../../components/Charts/ChartPie";

const Dashboard = () => {
   const years = Array.from({ length: 5 }, (_, index) => new Date().getFullYear() - index); // Array of last 5 years
   const grade = ["Grade 1","Grade 2","Grade 3"];
   const StudentClass = ["Class 1","Class 2","Class 3"];
  return (
    <div className="container mb-3">
      <div className="row">
        <div className="col-sm-12 col-md-7 col-lg-9">
          <div className="row cards-analysis">
            <CardAnalysis logo={students} header="Total Students" count="5.k" />
            <CardAnalysis logo={teacher} header="Total Teachers" count="500" />
            <CardAnalysis logo={classLogo} header="Total Classes" count="350" />
          </div>
          <div className="row chart">
            <div className="col p-3">
              <div className="chart-header d-flex justify-content-between align-items-center">
                <h3 className="chart-title">Total Earnings</h3>
                <DropdownButton label="2023" items={years} buttonClass="year-btn"/>
              </div>
              <LineChart />
            </div>
          </div>
          <div className="row student-grade">
           <div className="col-md-12 col-lg-6">
             <div className="card p-4 my-3 mx-2" style={{backgroundColor:"#EFF4FE"}}>
               <div className="card-title mb-3">
                 <h2 className="title">Students Performance</h2>
                <DropdownButton label="Grade 1" items={grade} buttonClass="grade-btn"/>
               </div>
               <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="class-title">Class A</h5>
                  <div className="d-flex flex-column align-items-center info">
                     <p>Average Grades </p>
                     <span>90%</span> 
                  </div>
               </div>
                <div className="d-flex justify-content-between align-items-center mb-3 ">
                  <h5 className="class-title">Class B</h5>
                  <div className="d-flex flex-column align-items-center info">
                     <p>Average Grades </p>
                     <span>90%</span> 
                  </div>
               </div>
                <div className="d-flex justify-content-between align-items-center ">
                  <h5 className="class-title">Class C</h5>
                  <div className="d-flex flex-column align-items-center info">
                     <p>Average Grades </p>
                     <span>90%</span> 
                  </div>
               </div>
             </div>
           </div>
           <div className="col-md-12 col-lg-6">
               <div className="card p-4 my-3 mx-2" style={{backgroundColor:"#EFF4FE"}}>
                 <div className="card-title mb-3 d-flex flex-column align-items-center justify-content-center">
                    <h2 className="title">Students Attendance</h2>
                    <div className="d-flex justify-content-between">
                      <DropdownButton label="Grade 1" items={grade} buttonClass="grade-btn"/>
                      <DropdownButton label="Grade 1" items={StudentClass} buttonClass="StudentClass-btn"/>
                    </div>
                 </div>
                <div className="d-flex justify-content-center align-items-center">
                   <PieChartComponent/>
                </div>
             </div>
           </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-5 col-lg-3">
          <BasicDateCalendar />
          <div className="card event mt-4 shadow">
            <h2 className="event-title">Events</h2>
            <div className="card-body">
              <h5 className="card-title event">Final Exams</h5>
              <h6 className="card-subtitle event mb-2 text-muted">
                Upcoming on 15th June
              </h6>
            </div>
            <div className="card-body">
              <h5 className="card-title event">School Trib</h5>
              <h6 className="card-subtitle event mb-2 text-muted">
                Class 6A on 30th June
              </h6>
            </div>
            <div className="card-body">
              <h5 className="card-title event">Tedx Speak</h5>
              <h6 className="card-subtitle event mb-2 text-muted">
                Upcoming on 15th June
              </h6>
            </div>
            <div className="card-body">
              <h5 className="card-title event">Summer Training</h5>
              <h6 className="card-subtitle event mb-2 text-muted">
                Upcoming on 15th June
              </h6>
            </div>
            <div className="card-body">
              <h5 className="card-title event">Tedx Speak</h5>
              <h6 className="card-subtitle event mb-2 text-muted">
                Upcoming on 15th June
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
