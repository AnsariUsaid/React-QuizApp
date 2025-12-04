# 🧠 React Quiz App

An interactive, timed quiz application built with React that tests your knowledge of React concepts. Features a modern UI with progress tracking, scoring system, and high score persistence.

![React Quiz App](https://img.shields.io/badge/React-19.2.1-blue.svg) ![JSON Server](https://img.shields.io/badge/JSON%20Server-1.0.0--beta.3-green.svg)

## ✨ Features

- **🎯 Interactive Quiz Interface** - Clean, responsive design with smooth user experience
- **⏰ Timed Questions** - 30-second countdown timer per question with automatic progression
- **📊 Progress Tracking** - Visual progress bar showing current question and score
- **🏆 Scoring System** - Points-based scoring with immediate feedback
- **💾 High Score Persistence** - Tracks and displays your best performance
- **🎨 Modern UI** - Dark theme with custom CSS variables and smooth animations
- **📱 Responsive Design** - Works seamlessly across different screen sizes
- **🔄 State Management** - Robust state management using React's useReducer hook
- **🗂️ Component Architecture** - Modular, reusable React components

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AnsariUsaid/React-QuizApp.git
   cd React-QuizApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the JSON Server (Backend)**
   ```bash
   npm run server
   ```
   This starts the mock API server on `http://localhost:8000`

4. **Start the React App (Frontend)**
   ```bash
   npm start
   ```
   The app will open in your browser at `http://localhost:3000`

## 📋 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Runs the app in development mode on `http://localhost:3000` |
| `npm run server` | Starts JSON Server on port 8000 for the quiz questions API |
| `npm test` | Launches the test runner in interactive watch mode |
| `npm run build` | Builds the app for production to the `build` folder |
| `npm run eject` | **One-way operation** - Ejects from Create React App |

## 🏗️ Project Structure

```
React-QuizApp/
├── public/
│   ├── index.html
│   ├── logo512.png
│   └── ...
├── src/
│   ├── Components/
│   │   ├── App.js              # Main application component
│   │   ├── Header.js           # App header with logo and title
│   │   ├── MainSection.js      # Main content wrapper
│   │   ├── StartScreen.js      # Welcome screen with quiz info
│   │   ├── Question.js         # Individual question component
│   │   ├── options.js          # Multiple choice options
│   │   ├── NextButton.js       # Navigation button (Next/Finish)
│   │   ├── ProgressBar.js      # Progress and score display
│   │   ├── Timer.js            # Countdown timer component
│   │   ├── FinishScreen.js     # Results and restart screen
│   │   ├── Footer.js           # Footer wrapper component
│   │   ├── Loader.js           # Loading state component
│   │   ├── Error.js            # Error state component
│   │   └── DateCounter.js      # Utility component
│   ├── index.js                # React app entry point
│   └── index.css               # Global styles and CSS variables
├── Data/
│   └── questions.json          # Quiz questions database
├── package.json                # Project dependencies and scripts
└── README.md                   # Project documentation
```

## 🎮 How to Play

1. **Start the Quiz**: Click "Let's Start" on the welcome screen
2. **Answer Questions**: Select your answer from multiple choice options
3. **Track Progress**: Monitor your progress and score in the top bar
4. **Beat the Timer**: Answer each question within 30 seconds
5. **View Results**: See your final score and high score
6. **Play Again**: Restart the quiz to improve your score

## 🔧 Technical Implementation

### State Management

The app uses React's `useReducer` hook for complex state management with the following state structure:

```javascript
const initialState = {
  questions: [],           // Quiz questions from JSON server
  status: 'loading',       // App status: loading, error, ready, active, finished
  index: 0,               // Current question index
  Answer: null,           // Selected answer for current question
  points: 0,              // Current score
  highScore: 0,           // Best score achieved
  secondsRemaining: null  // Timer countdown
}
```

### Key Features Implementation

- **Timer Logic**: Uses `setInterval` with `useEffect` cleanup
- **Progress Calculation**: Real-time progress bar updates
- **Score Calculation**: Immediate feedback on answer selection
- **State Transitions**: Smooth flow between different app states

### API Integration

The app fetches quiz data from a local JSON server:

```javascript
fetch("http://localhost:8000/questions")
  .then(res => res.json())
  .then(data => dispatch({type: 'dataReceived', payload: data}))
  .catch(err => dispatch({type: 'dataFailed'}))
```

## 📊 Quiz Content

The quiz currently includes questions about:

- React fundamentals
- Component architecture
- State management
- Props and data flow
- React ecosystem
- Best practices

### Adding New Questions

To add new questions, edit `Data/questions.json`:

```json
{
  "question": "Your question here?",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "correctOption": 1,
  "points": 10
}
```

## 🎨 Styling & Theming

The app uses a modern dark theme with CSS custom properties:

```css
:root {
  --color-darkest: #343a40;
  --color-dark: #495057;
  --color-medium: #ced4da;
  --color-light: #f1f3f5;
  --color-theme: #1098ad;
  --color-accent: #ffa94d;
}
```

## 🔮 Future Enhancements

- [ ] Question categories and difficulty levels
- [ ] User authentication and profiles
- [ ] Leaderboard functionality
- [ ] Question randomization
- [ ] Multiple quiz topics
- [ ] Sound effects and animations
- [ ] Mobile app version
- [ ] Social sharing features
- [ ] Analytics and progress tracking
- [ ] Custom timer settings

## 🛠️ Development

### Technologies Used

- **React 19.2.1** - Frontend framework
- **JSON Server 1.0.0-beta.3** - Mock REST API
- **CSS3** - Styling with custom properties
- **Create React App** - Build toolchain

### Testing

Run the test suite:

```bash
npm test
```

### Building for Production

Create an optimized production build:

```bash
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- Built with React and modern web technologies
- Powered by Create React App for optimal development experience
- Uses JSON Server for local API simulation

## 📧 Support

For questions, suggestions, or issues, please open an issue on [GitHub](https://github.com/AnsariUsaid/React-QuizApp/issues).

---

**Happy Quizzing! 🎉**
