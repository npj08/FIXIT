import { useState } from "react";

function ReportForm(props) {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [problem, setProblem] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit() {
    if (!email || !problem || !location || !description) {
      alert("Please fill all fields.");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

    props.addIssue({
      number: props.issueCount,
      email,
      problem,
      location,
      description,
      status: "Reported"
    });

    setEmail("");
    setProblem("");
    setLocation("");
    setDescription("");
    setShowForm(false);
  }

  return (
    <section className="report-section">
      <h2>Report an Issue</h2>

      <button onClick={() => setShowForm(true)}>
        Report an Issue
      </button>

      {showForm && (
        <>
          <h3>Report a Problem</h3>

          <label htmlFor="reporter-email">
            Reporter Mail ID:
          </label>
          <input
            type="email"
            id="reporter-email"
            placeholder="Enter your mail ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="problem-type">
            Type of problem:
          </label>
          <select
            id="problem-type"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
          >
            <option value="">Choose a problem</option>
            <option value="Electrical">Electrical</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="location">
            Location of the problem:
          </label>
          <input
            id="location"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <label htmlFor="description">
            Description:
          </label>
          <textarea
            id="description"
            placeholder="Describe the problem"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button onClick={handleSubmit}>
            Submit Issue
          </button>
        </>
      )}
    </section>
  );
}

export default ReportForm;