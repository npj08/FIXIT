import { useState, useEffect } from "react";
import Header from "./components/Header";
import IssueList from "./components/IssueList";
import ReportForm from "./components/ReportForm";

function App() {
  const [issues, setIssues] = useState(function () {
    const savedIssues = localStorage.getItem("fixitIssues");

    if (savedIssues) {
      return JSON.parse(savedIssues);}

    return [];
  });

  function addIssue(newIssue) {
    setIssues([newIssue, ...issues]);
  }

  function changeStatus(issueNumber) {
    const updatedIssues = issues.map(function(issue) {
      if (issue.number === issueNumber) {
        if (issue.status === "Reported") {
          return { ...issue, status: "In Progress" };
        } else if (issue.status === "In Progress") {
          return { ...issue, status: "Resolved" };
        } else {
          return { ...issue, status: "Reported" };
        }
      }

      return issue;
    });

    setIssues(updatedIssues);
  }

  function deleteIssue(issueNumber) {
  const updatedIssues = issues.filter(function(issue) {
    return issue.number !== issueNumber;
  });

  setIssues(updatedIssues);
}

useEffect(function () {
  localStorage.setItem("fixitIssues", JSON.stringify(issues));
}, [issues]);

return (
  <>
    <Header />

    <main>
      <section className="about-section">
        <h2>About FixIt</h2>
        <p>
          FixIt is a campus maintenance reporting platform that helps students
          report infrastructure issues quickly and track their progress until
          they are resolved.
        </p>

        <ul className="about-list">
          <li>Report campus maintenance issues in one place.</li>
          <li>Track issue progress from Reported to Resolved.</li>
          <li>Simple, organized, and easy for everyone to use.</li>
        </ul>
      </section>

      <section className="how-section">
        <h2>How It Works</h2>

        <div className="steps">
          <div className="step">
            <h3>1. Report</h3>
            <p>Submit the issue with its type, location, and description.</p>
          </div>

          <div className="step">
            <h3>2. Track</h3>
            <p>View the issue instantly in the Recent Issues section.</p>
          </div>

          <div className="step">
            <h3>3. Resolve</h3>
            <p>Update the status until the issue is marked as resolved.</p>
          </div>
        </div>
      </section>

      <IssueList
        issues={issues}
        changeStatus={changeStatus}
        deleteIssue={deleteIssue}
      />

      <ReportForm
        addIssue={addIssue}
        issueCount={issues.length + 1}
      />

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          For further assistance regarding reported issues, please contact the
          campus maintenance team.
        </p>

        <p>
          <strong>Email:</strong> maintenanceemail@vit.ac.in
        </p>

        <p>
          <strong>Office:</strong> Maintenance Office, Admin block
        </p>
      </section>
      
    </main>
    <footer>
      <p>© 2026 FixIt |  VIT CHENNAI</p>
      <p>From Breakdowns to Breakthroughs</p>
    </footer>
  </>
);
}

export default App;