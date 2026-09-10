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
      <IssueList issues={issues} changeStatus={changeStatus} deleteIssue={deleteIssue}/>
      <ReportForm addIssue={addIssue} issueCount={issues.length + 1} />
      </main>
    </>
  );
}

export default App;