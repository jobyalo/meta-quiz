import React, { useState } from 'react';
import { questions, Question, getQuestionsWithShuffledOptions } from './questions';
import './Quiz.css';

export default function Quiz() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string[] }>({});
  const [showResults, setShowResults] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

  const activeQuestions = quizStarted ? shuffledQuestions : questions;
  const currentQuestion = activeQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === activeQuestions.length - 1;

  const handleChange = (id: number, option: string, checked: boolean) => {
    setAnswers(prev => {
      const updated = prev[id] || [];
      return {
        ...prev,
        [id]: checked
          ? [...updated, option]
          : updated.filter(o => o !== option),
      };
    });
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowResults(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const isAnswerCorrect = (question: Question, userAnswer: string[]) => {
    if (!userAnswer || userAnswer.length === 0) return false;
    const correct = question.correctAnswers;
    return (
      userAnswer.length === correct.length &&
      userAnswer.every(ans => correct.includes(ans))
    );
  };

  const calculateScore = () => {
    return activeQuestions.filter(q => isAnswerCorrect(q, answers[q.id] || [])).length;
  };

  const calculateTopicPerformance = () => {
    const topicStats: { [topic: string]: { correct: number; total: number } } = {};
    
    activeQuestions.forEach(q => {
      const isCorrect = isAnswerCorrect(q, answers[q.id] || []);
      q.topics.forEach(topic => {
        if (!topicStats[topic]) {
          topicStats[topic] = { correct: 0, total: 0 };
        }
        topicStats[topic].total += 1;
        if (isCorrect) {
          topicStats[topic].correct += 1;
        }
      });
    });
    
    return Object.entries(topicStats)
      .map(([topic, stats]) => ({
        topic,
        correct: stats.correct,
        total: stats.total,
        percentage: Math.round((stats.correct / stats.total) * 100)
      }))
      .sort((a, b) => b.percentage - a.percentage);
  };

  const startQuiz = () => {
    setShuffledQuestions(getQuestionsWithShuffledOptions());
    setQuizStarted(true);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
    setQuizStarted(false);
    setShuffledQuestions([]);
  };

  if (!quizStarted) {
    return (
      <div className="quiz-container">
        <div className="home-container">
          <div className="home-content">
            <h1 className="home-title">Practice Exam</h1>
            <h2 className="home-subtitle">Meta Technical Certification</h2>
            <div className="home-info">
              <p className="info-item">📝 {questions.length} Questions</p>
              <p className="info-item">⏱️ No Time Limit</p>
              <p className="info-item">✅ Instant Results</p>
            </div>
            <button className="btn btn-start" onClick={startQuiz}>
              Start Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const total = questions.length;
    const topicPerformance = calculateTopicPerformance();

    return (
      <div className="quiz-container">
        <div className="results-container">
          <h1>Quiz Results</h1>
          <div className="score-summary">
            <h2>Your Score: {score} / {total}</h2>
            <p className="score-percentage">
              {((score / total) * 100).toFixed(0)}%
            </p>
            {score === total ? (
              <p className="perfect-score">🎉 Perfect score! Excellent work!</p>
            ) : (
              <p className="review-message">Review the questions below to improve!</p>
            )}
          </div>

          <div className="topics-dashboard results-topics">
            <h3 className="topics-title">📊 Performance by Topic</h3>
            <div className="topics-grid">
              {topicPerformance.map(({ topic, correct, total, percentage }) => (
                <div key={topic} className={`topic-card performance-card ${percentage >= 70 ? 'good' : percentage >= 50 ? 'okay' : 'needs-work'}`}>
                  <div className="topic-info">
                    <span className="topic-name">{topic}</span>
                    <span className="topic-score">{correct} / {total}</span>
                  </div>
                  <div className="topic-progress-bar">
                    <div 
                      className="topic-progress-fill" 
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="topic-percentage">{percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="results-list">
            <h3>Detailed Results</h3>
            {activeQuestions.map((q, index) => {
              const userAnswer = answers[q.id] || [];
              const isCorrect = isAnswerCorrect(q, userAnswer);
              
              return (
                <div key={q.id} className={`result-item ${isCorrect ? 'correct' : 'incorrect'}`}>
                  <div className="result-header">
                    <span className="result-number">Question {index + 1}</span>
                    <span className={`result-status ${isCorrect ? 'status-correct' : 'status-incorrect'}`}>
                      {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                    </span>
                  </div>
                  <p className="result-question">{q.question}</p>
                  
                  {!isCorrect && (
                    <div className="answer-details">
                      <div className="your-answer">
                        <strong>Your answer:</strong>
                        {userAnswer.length === 0 ? (
                          <p className="no-answer">No answer provided</p>
                        ) : (
                          <ul>
                            {userAnswer.map(ans => (
                              <li key={ans}>{ans}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <div className="correct-answer">
                        <strong>Correct answer:</strong>
                        <ul>
                          {q.correctAnswers.map(ans => (
                            <li key={ans}>{ans}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <button className="btn btn-primary" onClick={restartQuiz}>
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1>Meta Certification Practice Test</h1>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentQuestionIndex + 1) / activeQuestions.length) * 100}%` }}
          />
        </div>
        <p className="progress-text">
          Question {currentQuestionIndex + 1} of {activeQuestions.length}
        </p>
      </div>

      <div className="question-card">
        <h2 className="question-text">{currentQuestion.question}</h2>
        
        <div className="options-container">
          {currentQuestion.options.map(opt => (
            <label key={opt} className="option-label">
              <input
                type="checkbox"
                checked={answers[currentQuestion.id]?.includes(opt) || false}
                onChange={e => handleChange(currentQuestion.id, opt, e.target.checked)}
              />
              <span className="option-text">{opt}</span>
            </label>
          ))}
        </div>

        {currentQuestion.correctAnswers.length > 1 && (
          <p className="hint">Select all that apply</p>
        )}
      </div>

      <div className="navigation-buttons">
        <button 
          className="btn btn-secondary" 
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        <button 
          className="btn btn-primary" 
          onClick={handleNext}
        >
          {isLastQuestion ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
}

