## React Multi-Page App with Redux and React Router

### Project Overview

This project involves creating a multi-page React app that fetches data from the JSONPlaceholder API and displays it in different views. The app utilizes React Router for navigation and Redux for state management.

### Views and Routes

1. **Home Page (/):**
   - Displays a list of items fetched from the API.
   - Each item shows the title of the post with a "Read More..." link if the description doesn't fit inside the card view.
   - Clicking on an item navigates to the detail page for that item.

2. **Details Page (/item/:id):**
   - Displays detailed information about a single item.
   - The item details include the user ID, post ID, title, body, and an image fetched from picsum.photos.

### Redux State Management

- Redux is used to manage the app's state.
- A Redux store is created to hold the data fetched from the API.
- The app utilizes Redux Thunk middleware for handling asynchronous actions.

### API Endpoint

- Data is fetched from the JSONPlaceholder API.
- The API response consists of an array of objects, each containing properties such as `userId`, `id`, `title`, and `body`.

### Folder Structure

- The folder in GitHub follows the format: "YourName_React4_DateOfSubmission" (e.g., "JohnDoe_React4_30thJuly").

### Responsive Design and Loading State

- The app is designed to be responsive, ensuring a seamless experience on both desktop and mobile devices.
- Loading states are managed using Redux to provide a smooth user experience while fetching and displaying data.

### Figma Design

- The UI design is based on the provided Figma link, ensuring the app aligns with the specified requirements.
- https://www.figma.com/file/kzcTHekxPjEWSdHE9JBDPv/F4---Module-Test---March-(Copy)?type=design&node-id=0%3A1&t=wiY2ki6XmTA87SzP-1

### Deployment and Submission

1. **GitHub Repository:**
   - The entire project is uploaded to GitHub, with the committed changes.
   - The repository link is (https://github.com/vaibhavchvn86/Vaibhav_Chavan_React_4_5th_Dec).

2. **Readme File:**
   - A detailed `readme.md` file is included in the repository, providing insights into the thought process during the assignment creation.

3. **Submission:**
   - The GitHub link is submitted through the dashboard.

### Thoughts and Considerations

- The project focused on implementing React Router for navigation, Redux for state management, and ensuring a responsive design.
- Careful attention was given to the UI/UX design based on the Figma specifications.
- Thorough testing was conducted to verify that the app works seamlessly on different devices.

  ## Getting Started

To run the project locally, follow these steps:

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vaibhavchvn86/Vaibhav_Chavan_React_4_5th_Dec
   cd Vaibhav_Chavan_React_4_5th_Dec
   npm install

2. Running the App
Once the installation is complete, you can start the app:
npm start

This will launch the app locally. Open your browser and go to http://localhost:3000 to view the application.


