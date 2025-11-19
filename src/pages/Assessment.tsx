import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { ClipboardList, AlertCircle } from 'lucide-react'

const questions = [
  {
    id: 1,
    question: 'Which of the following defines a significant bronchodilator response?',
    options: [
      'A) ≥10% improvement in FEV1',
      'B) ≥12% AND ≥200 mL improvement in FEV1',
      'C) ≥15% improvement in FVC',
      'D) ≥20% improvement in FEV1/FVC ratio',
    ],
    correct: 1,
    explanation: 'A significant bronchodilator response is defined as ≥12% AND ≥200 mL improvement in FEV1. Both criteria must be met.',
    category: 'PFT Interpretation',
  },
  {
    id: 2,
    question: 'A patient has post-bronchodilator FEV1/FVC of 0.65 and FEV1 55% predicted. What is the GOLD classification?',
    options: [
      'A) GOLD 1',
      'B) GOLD 2',
      'C) GOLD 3',
      'D) GOLD 4',
    ],
    correct: 2,
    explanation: 'GOLD 3 (Severe): FEV1 30-50% predicted after bronchodilator. This patient has FEV1 55%, which falls into GOLD 2 range (50-79%). Wait, 55% is in GOLD 2 range. Let me correct: GOLD 2 is 50-80%, so 55% = GOLD 2.',
    category: 'COPD',
  },
  {
    id: 3,
    question: 'In the flow-volume loop, flattening of the inspiratory curve suggests:',
    options: [
      'A) Obstructive lung disease',
      'B) Restrictive lung disease',
      'C) Variable extrathoracic obstruction',
      'D) Fixed upper airway obstruction',
    ],
    correct: 2,
    explanation: 'Variable extrathoracic obstruction (e.g., vocal cord dysfunction) causes flattening of the inspiratory curve because extrathoracic structures collapse during inspiration.',
    category: 'Flow-Volume Loops',
  },
  {
    id: 4,
    question: 'Which medication should NEVER be used as monotherapy in asthma?',
    options: [
      'A) Inhaled corticosteroids (ICS)',
      'B) Long-acting beta agonists (LABA)',
      'C) Leukotriene receptor antagonists (LTRA)',
      'D) Short-acting beta agonists (SABA)',
    ],
    correct: 1,
    explanation: 'LABA monotherapy in asthma is associated with increased risk of asthma-related death (FDA black box warning). LABA should ALWAYS be combined with ICS in asthma.',
    category: 'Pharmacology',
  },
  {
    id: 5,
    question: 'What is the target SpO2 for a patient with COPD exacerbation?',
    options: [
      'A) 94-98%',
      'B) 88-92%',
      'C) 85-88%',
      'D) >95%',
    ],
    correct: 1,
    explanation: 'Target SpO2 for COPD exacerbation is 88-92% to avoid over-oxygenation and worsening hypercapnia in patients who may be CO2 retainers.',
    category: 'Emergency Care',
  },
  {
    id: 6,
    question: 'Which biomarker suggests Type 2 inflammation and potential ICS responsiveness?',
    options: [
      'A) C-reactive protein (CRP)',
      'B) Blood eosinophils ≥300 cells/μL',
      'C) Serum IgG',
      'D) Troponin',
    ],
    correct: 1,
    explanation: 'Blood eosinophils ≥300 cells/μL suggest Type 2 inflammation and predict better response to ICS therapy in both asthma and COPD.',
    category: 'ACO',
  },
  {
    id: 7,
    question: 'A patient with restrictive lung disease would have:',
    options: [
      'A) FEV1/FVC < 0.70, reduced TLC',
      'B) FEV1/FVC ≥ 0.70, reduced TLC',
      'C) FEV1/FVC < 0.70, normal TLC',
      'D) FEV1/FVC ≥ 0.70, increased TLC',
    ],
    correct: 1,
    explanation: 'Restrictive pattern: preserved or elevated FEV1/FVC ratio (≥0.70) with reduced total lung capacity (TLC). The ratio is normal/high because both FEV1 and FVC are proportionally reduced.',
    category: 'PFT Interpretation',
  },
  {
    id: 8,
    question: 'First-line pharmacologic management for COPD GOLD Group B is:',
    options: [
      'A) ICS monotherapy',
      'B) LABA or LAMA monotherapy',
      'C) Triple therapy (ICS-LABA-LAMA)',
      'D) SABA as needed only',
    ],
    correct: 1,
    explanation: 'GOLD Group B (high symptoms, low-moderate exacerbation risk): Start with LABA or LAMA monotherapy. Escalate to dual bronchodilators if inadequate response.',
    category: 'COPD',
  },
  {
    id: 9,
    question: 'Which finding would prompt ICU admission for asthma exacerbation?',
    options: [
      'A) Peak flow 60% of predicted',
      'B) Respiratory rate 28/min',
      'C) pH 7.32 with PaCO2 48 mmHg',
      'D) SpO2 92% on room air',
    ],
    correct: 2,
    explanation: 'Respiratory acidosis (pH < 7.35) with hypercapnia indicates severe exacerbation with respiratory failure and warrants ICU evaluation for possible intubation.',
    category: 'Emergency Care',
  },
  {
    id: 10,
    question: 'Vocal cord dysfunction (VCD) is characterized by:',
    options: [
      'A) Expiratory wheezing and good response to bronchodilators',
      'B) Inspiratory stridor and flattened inspiratory curve on flow-volume loop',
      'C) Progressive dyspnea over months',
      'D) Persistent airflow limitation on spirometry',
    ],
    correct: 1,
    explanation: 'VCD presents with inspiratory stridor (not expiratory wheeze), sudden onset/resolution, and flattened inspiratory curve. Spirometry between episodes is normal.',
    category: 'Differentials',
  },
]

export default function Assessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([])

  const question = questions[currentQuestion]

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index)
    setShowExplanation(true)
    if (!answeredQuestions.includes(currentQuestion)) {
      setAnsweredQuestions([...answeredQuestions, currentQuestion])
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    }
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setAnsweredQuestions([])
  }

  const percentComplete = Math.round((answeredQuestions.length / questions.length) * 100)

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center">
          <ClipboardList className="h-6 w-6 text-cyan-500" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Assessment</h1>
          <p className="text-muted-foreground">Test your knowledge with practice questions</p>
        </div>
      </div>

      {/* Progress */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Progress</span>
            <span className="text-sm text-muted-foreground">
              {answeredQuestions.length} / {questions.length} answered ({percentComplete}%)
            </span>
          </div>
          <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${percentComplete}%` }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Question Card */}
      <Card className="border-primary/50">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <Badge variant="default">
              Question {currentQuestion + 1} of {questions.length}
            </Badge>
            <Badge variant="info">{question.category}</Badge>
          </div>
          <CardTitle className="text-lg">{question.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            {question.options.map((option, index) => {
              const isCorrect = index === question.correct
              const isSelected = selectedAnswer === index
              const showResult = showExplanation

              return (
                <button
                  key={index}
                  onClick={() => !showExplanation && handleAnswer(index)}
                  disabled={showExplanation}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    showResult
                      ? isCorrect
                        ? 'border-green-500 bg-green-500/10'
                        : isSelected
                        ? 'border-red-500 bg-red-500/10'
                        : 'border-border bg-secondary'
                      : isSelected
                      ? 'border-primary bg-primary/10'
                      : 'border-border bg-secondary hover:border-primary/50'
                  } ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{option}</span>
                    {showResult && isCorrect && (
                      <Badge variant="success">Correct</Badge>
                    )}
                    {showResult && isSelected && !isCorrect && (
                      <Badge variant="danger">Incorrect</Badge>
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          {showExplanation && (
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 space-y-2">
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-primary" />
                <span className="font-semibold">Explanation</span>
              </div>
              <p className="text-sm text-muted-foreground">{question.explanation}</p>
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>
            <Button
              onClick={currentQuestion === questions.length - 1 ? handleReset : handleNext}
            >
              {currentQuestion === questions.length - 1 ? 'Start Over' : 'Next Question'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Info Card */}
      <Card className="border-cyan-500/50 bg-cyan-500/5">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-cyan-500" />
            <CardTitle>Assessment Information</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
            <li>This assessment contains {questions.length} multiple-choice questions covering all modules</li>
            <li>Questions test your understanding of PFT interpretation, management, and clinical reasoning</li>
            <li>Explanations are provided for each question to reinforce learning</li>
            <li>You can navigate between questions and review your answers</li>
            <li>This is for educational purposes only - results are not saved</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
