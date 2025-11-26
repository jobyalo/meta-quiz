# Meta Technical Certification Practice Exam

An interactive practice test application for the Meta WhatsApp Business Platform Technical Certification. This web-based quiz helps developers prepare for the Meta certification by providing a realistic testing environment with instant feedback and performance analytics.

## 📋 About

This practice exam simulates the Meta Technical Certification test environment and covers key topics including:
- Message Templates
- Webhooks
- Click-to-WhatsApp (CTWA) Ads
- WhatsApp Flows
- Message Quality & Delivery
- Phone Number & WABA Management
- Embedded Signup
- Opt-in & User Consent
- Cloud vs On-Premise Hosting

## ✨ Features

### 🎯 Interactive Quiz Experience
- **One Question at a Time**: Focused testing experience with single question display
- **Randomized Questions**: Questions are shuffled each session
- **Randomized Answers**: Answer options are randomized to prevent pattern memorization
- **Progress Tracking**: Visual progress bar showing completion status
- **Navigation**: Move forward and backward through questions

### 📊 Comprehensive Results
- **Overall Score**: Instant scoring with percentage calculation
- **Performance by Topic**: Detailed breakdown showing your strengths and weaknesses
- **Color-Coded Results**: Visual indicators for good (70%+), okay (50-69%), and needs work (<50%) performance
- **Question Review**: See all questions with your answers and correct solutions
- **Detailed Explanations**: For incorrect answers, view what you selected vs. the correct answer

### 💎 Modern UI/UX
- Clean, professional design
- Responsive layout (works on desktop, tablet, and mobile)
- Smooth animations and transitions
- Gradient color schemes
- Intuitive navigation

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository or download the project:
```bash
git clone <repository-url>
cd meta-quiz
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm start
```

The application will open in your default browser at [http://localhost:3000](http://localhost:3000)

If it doesn't open automatically, navigate to the URL manually.

### Building for Production

To create an optimized production build:
```bash
npm run build
```

The build files will be created in the `build/` folder and are ready to be deployed to any static hosting service.

## 🚀 Deploying to GitHub Pages

This project is configured for easy deployment to GitHub Pages.

### Prerequisites
- A GitHub account
- Git installed on your computer
- Your project pushed to a GitHub repository

### Deployment Steps

1. **Create a GitHub repository** (if you haven't already):
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `meta-quiz` (or any name you prefer)

2. **Update the homepage URL** in `package.json`:
   ```json
   "homepage": "https://YOUR-USERNAME.github.io/YOUR-REPO-NAME"
   ```
   Replace `YOUR-USERNAME` with your GitHub username and `YOUR-REPO-NAME` with your repository name.

3. **Push your code to GitHub** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```

4. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

   This command will:
   - Build your project
   - Create a `gh-pages` branch
   - Push the build files to that branch
   - Your site will be live in a few minutes!

5. **Access your deployed site**:
   - Visit: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`
   - Example: `https://jobmendez.github.io/meta-quiz`

### Updating Your Deployed Site

Whenever you make changes and want to update the live site:

```bash
git add .
git commit -m "Your update message"
git push
npm run deploy
```

### Troubleshooting

- **404 Error**: Make sure the `homepage` field in `package.json` matches your GitHub Pages URL
- **Blank Page**: Check the browser console for errors and ensure the homepage URL is correct
- **Not Updating**: Clear your browser cache or wait a few minutes for GitHub Pages to update

## 📁 Project Structure

```
meta-quiz/
├── public/              # Static files
├── src/
│   ├── App.tsx         # Main app component
│   ├── Quiz.tsx        # Quiz component with all logic
│   ├── Quiz.css        # Styling for quiz
│   ├── questions.ts    # Question bank and scoring logic
│   ├── index.tsx       # Entry point
│   └── ...
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

## 📝 Adding More Questions

To add new questions to the quiz, edit `src/questions.ts`:

```typescript
{
  id: 99,  // Unique ID
  question: "Your question text here?",
  options: [
    "Option A",
    "Option B",
    "Option C",
    "Option D"
  ],
  correctAnswers: ["Option B"],  // Array of correct answers
  topics: ["Topic Name"]  // Array of topic tags
}
```

### Question Format Rules:
- Each question must have a unique `id`
- Support for single or multiple correct answers
- Use `"(Choose two.)"` or similar in the question text for multi-select questions
- Topics help categorize questions for performance analytics

### Current Question Pool:
- The app randomly selects 20 questions from a pool of 38+ questions
- Questions and answers are shuffled each session for variety

## 🛠️ Technologies Used

- **React** (v18) - UI framework
- **TypeScript** - Type-safe JavaScript
- **CSS3** - Styling with gradients, flexbox, and grid
- **Create React App** - Build tooling

## 🎨 Key Components

### Quiz Component (`Quiz.tsx`)
- Manages quiz state and navigation
- Handles answer selection and validation
- Calculates scores and topic performance
- Renders different views (home, quiz, results)

### Questions Module (`questions.ts`)
- Contains the question bank
- Shuffling logic for questions and answers
- Scoring functions
- Topic performance calculations

## 📊 Quiz Flow

1. **Home Page**
   - Welcome screen with test information
   - Shows total number of questions
   - "Start Test" button

2. **Quiz Page**
   - One question displayed at a time
   - Progress bar and counter
   - Checkbox selection for answers
   - Previous/Next navigation buttons
   - Submit button on final question

3. **Results Page**
   - Overall score with percentage
   - Performance breakdown by topic
   - Visual progress bars for each topic
   - Detailed question-by-question review
   - Shows correct answers for missed questions
   - "Restart Quiz" button

## 🎯 Best Practices for Taking the Quiz

- Read each question carefully
- Note questions marked with "(Choose two.)" for multiple selections
- Use the Previous button to review earlier questions
- Take your time - there's no time limit
- Review the topic performance dashboard to identify areas for improvement
- Retake the quiz to practice with different question sets

## 📄 License

This project is for educational purposes.

## 🤝 Contributing

To contribute additional questions or improvements:
1. Fork the repository
2. Add questions to `questions.ts`
3. Test thoroughly
4. Submit a pull request

---

Built with ❤️ for Meta WhatsApp Business Platform certification preparation
