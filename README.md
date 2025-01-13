# React + Vite

# Quiz App

## Overview
The **BuzzHive Quiz Game** is an interactive web application that allows users to take quizzes on various topics and view their scores. This project leverages modern web technologies to create a seamless and engaging user experience. Users can select topics of interest, answer questions one by one, and see their results at the end of the quiz.

This project was developed as part of a capstone assignment, showcasing the ability to build a full-featured web application using a JavaScript library for building user interfaces, **React**, **CSS** along with **Tailwind CSS** for styling.

## Features
- **Topic Selection:** Users can choose from a variety of quiz topics to start their quizzes.
- **Dynamic Questions:** Quiz questions are fetched from a public API (e.g., Open Trivia Database) to ensure a wide variety of content.
- **Interactive UI:** Questions are displayed one at a time, providing a clean and focused experience.
- **Score Display:** Users can view their final score after completing the quiz.
- **Responsive Design:** Tailwind CSS andd CSS ensures the application works seamlessly across different devices.

## Technologies Used
- **React:** A JavaScript library for building user interfaces and managing application state.
- **TailwindCSS and CSS:** For designing a responsive and visually appealing layout.
- **Public Quiz API (Open Trivia Database API):** To fetch quiz questions dynamically.
- **Netlify:** For deployment and hosting of the application.

## Installation and Setup
Follow these steps to set up the Quiz App locally:

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd beehive-quiz-game
   ```

2. **Install Dependencies:**
   Make sure you have Node.js and npm installed. Then run:
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   This will start the application on `http://localhost:5173`.

4. **Build for Production:**
   To create a production build, run:
   ```bash
   npm run build
   ```

## Deployment
The application will be deployed on **Netlify**, providing a live link for users to access the game online. Deployment involves pushing the production build to the chosen platform, where it is automatically optimized for the web. The application has been deployed to this address (https://buzzhivetrivia-game.netlify.app/). 

## Project Structure
```
huzzhive-quiz-game/
├── public/         # Static files
├── src/            # Application source code
│   ├── components/ # Reusable components (e.g., QuestionCard, Footer, Header,)
│   ├── pages/      # Page components (e.g., Home, QuizPage, Results)
│   ├── App.jsx      # Main application component
│   ├── index.jsx    # Entry point
├── tailwind.config.js # Tailwind CSS configuration
├── package.json    # Project dependencies
└── README.md       # Project documentation
```

## How It Works
1. The user types his username, selects a category and difficulty level and starts the quiz.
2. Quiz questions are fetched dynamically from the API and displayed one at a time.
3. The user answers each question, and their responses are recorded.
4. At the end of the quiz, the user is shown their final score.

## API Integration
The app uses a public quiz API ([Open Trivia Database API](https://opentdb.com/)) to fetch quiz questions. This ensures the content is varied and up-to-date.

## Responsive Design
The app uses **TailwindCSS and CSS** to ensure a responsive and modern design. Users can enjoy a consistent experience across desktops, tablets, and mobile devices.

## Future Enhancements
- Add user authentication to save scores and track progress.
- Implement a leaderboard to encourage competition among users.
- Include a timer for each question to increase challenge.
- Support multiple languages for a wider audience.

## Contributing
Contributions are welcome! If you'd like to improve the project, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## Acknowledgements
- [Open Trivia Database API](https://opentdb.com/) for providing quiz content.
- Tailwind CSS and CSS for making responsive design effortless.
- Material UI for styled reusable components
- Netlify for free and seamless deployment solutions.

---
Feel free to reach out with feedback or suggestions for improvement!