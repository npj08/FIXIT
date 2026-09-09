function IssueCard(props) {
  return (
    <div className="issue-card">
      <h3>Issue #{props.number}</h3>

      <p><strong>Reporter:</strong> {props.email}</p>
      <p><strong>Problem:</strong> {props.problem}</p>
      <p><strong>Location:</strong> {props.location}</p>
      <p><strong>Description:</strong> {props.description}</p>
      <p>
        <strong>Status:</strong>{" "}
        <span className="status">{props.status}</span>
      </p>

      <button onClick={() => props.changeStatus(props.number)}>
        Change Status
      </button>
      <button
  className="delete-btn"
  onClick={() => props.deleteIssue(props.number)}
>
  Delete
</button>
    </div>
  );
}

export default IssueCard;