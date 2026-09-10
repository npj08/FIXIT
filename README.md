# FixIt – From Breakdowns to Breakthroughs

FixIt is a React-based campus issue reporting website that allows users to report maintenance problems, view reported issues, update their status, and manage them through a simple interface. 

## Problem Statement

In many colleges and campuses, maintenance issues such as electrical faults, plumbing leaks, cleaning requests, and other infrastructure problems are often reported through informal conversations or multiple communication channels. This can make it difficult to keep track of reported issues and their progress.

FixIt provides a simple platform where issues can be reported, viewed, and tracked in one place.

## Solution

The website provides a centralized interface for reporting and managing campus maintenance issues.

Users can:

* Report a new issue with the reporter's email, problem type, location, and description.
* View all reported issues.
* Track the progress of each issue through different status stages.
* Delete issues when they are no longer needed.

## Features

* Report maintenance issues through a simple form.
* Input validation for required fields and email format.
* Automatically generated issue cards.
* Status updates: Reported, In Progress, Resolved
* Delete individual issue cards.
* Responsive and simple user interface.

## Setup Instructions
*Clone the repository.
*Open the project in VS Code or GitHub Codespaces.
*Install dependencies:
  npm install
*Start the development server:
  npm run dev
*Open the local URL shown in the terminal.

## How It Works

1. Open the FixIt website.
2. Click **Report**.
3. Enter:
   * Reporter Mail ID
   * Type of Problem
   * Location
   * Description
4. Click **Submit**.
5. The new issue appears in the **Recent Issues** section.
6. Use **Change Status** to cycle through:
   * Reported
   * In Progress
   * Resolved
7. Use **Delete** to remove an issue.

## Challenges Faced

* Converting a vanilla JavaScript project into React components.
* Managing state across multiple components.
* Passing functions through props.
* Recreating dynamic issue cards using React instead of direct DOM manipulation.
* Maintaining the original layout while adapting it to React.

## Future Improvements

The project can be extended with:

* Persistent storage using Local Storage or a database.
* User authentication for students and administrators.
* Separate admin dashboard.
* Issue filtering and search.
* Image upload for reported issues.
* Email notifications.
* Mobile-friendly responsive improvements.
* Enhanced email validation

## Limitations

* No backend or database.
* No user authentication.
* Status updates are available to all users.
* Basic email validation

## Conclusion

FixIt demonstrates how React can be used to build a practical campus issue reporting system with a clean interface and dynamic user experience. The project focuses on simplicity while implementing core React concepts such as components, state management, event handling, and dynamic rendering, making it a strong foundation for future enhancements.

## Demo Video Link
https://drive.google.com/drive/folders/115ZwwyuKCbtHHORUrxHkw5C3f9SDAsGH?usp=sharing
