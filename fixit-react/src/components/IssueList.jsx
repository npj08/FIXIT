import IssueCard from "./IssueCard";

function IssueList(props) {
  return (
    <section className="issues-section">
      <h2>Recent Issues</h2>
      <p>View and track reported problems.</p>

      {props.issues.map(function(issue) {
        return (
          <IssueCard
            key={issue.number}
            number={issue.number}
            email={issue.email}
            problem={issue.problem}
            location={issue.location}
            description={issue.description}
            status={issue.status}
            changeStatus={props.changeStatus}
            deleteIssue={props.deleteIssue}
          />
        );
      })}
    </section>
  );
}

export default IssueList;