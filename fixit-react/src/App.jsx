import { useState } from "react";
import Header from "./components/Header";
import IssueList from "./components/IssueList";

function App() {
  const [issues] = useState([
    {
      number: 1,
      email: "demo@college.ac.in",
      problem: "Electrical",
      location: "Lab A",
      description: "Light is not working.",
      status: "Reported"
    }
  ]);

  return (
    <>
      <Header />
      <IssueList issues={issues} />
    </>
  );
}

export default App;