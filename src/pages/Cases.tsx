import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { FileText, ChevronRight, AlertCircle } from 'lucide-react'

const cases = [
  {
    id: 1,
    title: 'Case 1: Young Patient with Episodic Wheeze',
    difficulty: 'Easy',
    category: 'Asthma',
    presentation: 'A 22-year-old college student presents with episodic shortness of breath and wheezing for the past 6 months. Symptoms occur 2-3 times per week, often triggered by exercise or cold air. She has a history of seasonal allergies and eczema as a child. No smoking history.',
    vitals: 'BP 120/75, HR 88, RR 16, SpO2 98% on room air',
    exam: 'Mild expiratory wheeze bilaterally. No accessory muscle use.',
    pft: 'FEV1 2.8 L (85% predicted), FVC 3.8 L (90% predicted), FEV1/FVC 0.74. Post-bronchodilator: FEV1 3.2 L (improvement of 14% and 400 mL).',
    questions: [
      { q: 'What is the most likely diagnosis?', a: 'Asthma - episodic symptoms, triggers (exercise, cold air), history of atopy, significant bronchodilator response (≥12% and ≥200 mL)' },
      { q: 'How would you classify the severity?', a: 'Mild Persistent Asthma - symptoms >2 days/week but not daily, minimal nighttime symptoms' },
      { q: 'What is the appropriate initial therapy?', a: 'Low-dose ICS (e.g., fluticasone 100-250 mcg/day) + SABA as needed for rescue' },
    ],
  },
  {
    id: 2,
    title: 'Case 2: Long-Time Smoker with Progressive Dyspnea',
    difficulty: 'Medium',
    category: 'COPD',
    presentation: 'A 65-year-old man with 40 pack-year smoking history presents with progressive dyspnea on exertion over 3 years. He reports chronic morning cough with clear sputum. Two exacerbations requiring antibiotics and steroids in the past year. Still smoking half a pack per day.',
    vitals: 'BP 135/85, HR 92, RR 20, SpO2 91% on room air',
    exam: 'Barrel chest, prolonged expiratory phase, diminished breath sounds bilaterally, no wheezes.',
    pft: 'Post-BD: FEV1 1.4 L (45% predicted), FVC 3.2 L (75% predicted), FEV1/FVC 0.44. Minimal bronchodilator response.',
    cxr: 'Hyperinflation, flattened diaphragms',
    questions: [
      { q: 'What is the diagnosis?', a: 'COPD - significant smoking history, progressive symptoms, post-BD FEV1/FVC < 0.70, minimal reversibility' },
      { q: 'What is the GOLD classification?', a: 'GOLD 3 (Severe) based on FEV1 45% predicted. Group E based on ≥2 exacerbations in past year.' },
      { q: 'What is the most important non-pharmacologic intervention?', a: 'Smoking cessation - most effective intervention to slow disease progression' },
      { q: 'What pharmacologic therapy would you recommend?', a: 'LAMA + LABA combination (dual bronchodilator) as first-line for Group E. Consider adding ICS given frequent exacerbations.' },
    ],
  },
  {
    id: 3,
    title: 'Case 3: Dyspnea with Normal Spirometry',
    difficulty: 'Medium',
    category: 'Differentials',
    presentation: 'A 28-year-old competitive swimmer presents with episodic throat tightness and difficulty breathing during intense training. Symptoms begin suddenly during exercise, peak within minutes, and resolve within 15-20 minutes of stopping. She describes it as "can\'t get air in" rather than "can\'t get air out." No history of asthma or allergies.',
    vitals: 'BP 118/72, HR 78, RR 14, SpO2 99% on room air (at rest)',
    exam: 'Normal exam at rest. No wheezes. Normal cardiac exam.',
    pft: 'Spirometry at rest is completely normal. Flow-volume loop shows mild flattening of inspiratory curve.',
    questions: [
      { q: 'What is the most likely diagnosis?', a: 'Vocal Cord Dysfunction (VCD) - inspiratory symptoms ("can\'t get air in"), rapid onset and resolution, normal spirometry at rest, flattened inspiratory curve' },
      { q: 'How does this differ from exercise-induced asthma?', a: 'VCD: inspiratory stridor, rapid resolution, normal spirometry. EIB: expiratory wheeze, longer duration, responds to bronchodilators' },
      { q: 'What diagnostic test would confirm this?', a: 'Laryngoscopy during symptoms showing paradoxical vocal cord adduction during inspiration' },
      { q: 'What is the appropriate treatment?', a: 'Speech therapy with breathing exercises, treat underlying triggers (GERD if present), reassurance. NOT bronchodilators.' },
    ],
  },
  {
    id: 4,
    title: 'Case 4: Severe Asthma Exacerbation',
    difficulty: 'Hard',
    category: 'Emergency',
    presentation: 'A 35-year-old woman with known severe asthma presents to ED with worsening dyspnea over 2 days. Unable to speak in full sentences. Has been using albuterol inhaler every hour with minimal relief. Ran out of ICS last week.',
    vitals: 'BP 145/92, HR 128, RR 32, SpO2 88% on room air, Temperature 37.2°C',
    exam: 'Sitting upright, tripoding, using accessory muscles. Diffuse expiratory wheeze. Peak flow 35% of personal best.',
    labs: 'WBC 12,000 with left shift. No eosinophilia.',
    questions: [
      { q: 'What is the severity classification?', a: 'Severe Asthma Exacerbation - speaks in words only, RR>30, HR>120, SpO2<90%, PEF<50%' },
      { q: 'What are the key initial management steps?', a: '1) Oxygen to SpO2 93-95%, 2) SABA q20min x3 doses, 3) Ipratropium q20min x3 doses, 4) Systemic corticosteroids (prednisone 60mg or methylprednisolone 80mg IV) within 1 hour' },
      { q: 'After 1 hour, patient remains dyspneic with SpO2 90% and PEF 40%. What should you do?', a: 'Admit to hospital. Continue frequent bronchodilators. Consider IV magnesium sulfate 2g over 20 min. Monitor closely for ICU transfer if worsening.' },
      { q: 'What ABG findings would prompt ICU transfer?', a: 'Respiratory acidosis (pH<7.35), hypercapnia (PaCO2>45 or rising), altered mental status, exhaustion despite therapy' },
    ],
  },
  {
    id: 5,
    title: 'Case 5: Asthma vs COPD vs ACO?',
    difficulty: 'Hard',
    category: 'ACO',
    presentation: 'A 52-year-old woman with 15 pack-year smoking history (quit 5 years ago) presents with chronic dyspnea. She reports a history of "asthma" since age 30, but symptoms have worsened progressively over the past 5 years despite treatment. Frequent exacerbations (3-4 per year). Childhood allergies.',
    vitals: 'BP 130/80, HR 86, RR 18, SpO2 93% on room air',
    exam: 'Mild expiratory wheeze, no accessory muscle use',
    pft: 'Post-BD: FEV1 1.8 L (60% predicted), FVC 3.0 L (75% predicted), FEV1/FVC 0.60. Post-BD improvement: 8% and 140 mL.',
    labs: 'Blood eosinophils 420 cells/μL, FeNO 55 ppb',
    questions: [
      { q: 'Does she have asthma, COPD, or ACO?', a: 'ACO (Asthma-COPD Overlap) - early onset asthma, history of atopy, smoking history, persistent obstruction (FEV1/FVC<0.70), elevated eosinophils and FeNO suggesting Type 2 inflammation' },
      { q: 'What features suggest asthma component?', a: 'Early onset (<40 years), childhood allergies, elevated eosinophils (>300), elevated FeNO (>50), some bronchodilator response' },
      { q: 'What features suggest COPD component?', a: 'Age>40, significant smoking history (15 pack-years), progressive symptoms, persistent airflow limitation, limited reversibility' },
      { q: 'What would be appropriate initial therapy?', a: 'Triple therapy: ICS-LABA-LAMA. ICS is essential given Type 2 inflammation. Consider biologics if inadequate response to triple therapy.' },
    ],
  },
]

export default function Cases() {
  const [selectedCase, setSelectedCase] = useState<typeof cases[0] | null>(null)
  const [showAnswers, setShowAnswers] = useState(false)

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center">
          <FileText className="h-6 w-6 text-indigo-500" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Clinical Cases</h1>
          <p className="text-muted-foreground">Apply your knowledge to realistic scenarios</p>
        </div>
      </div>

      {!selectedCase ? (
        /* Case List */
        <div className="grid grid-cols-1 gap-4">
          {cases.map((caseItem) => (
            <Card
              key={caseItem.id}
              hover
              onClick={() => {
                setSelectedCase(caseItem)
                setShowAnswers(false)
              }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{caseItem.title}</CardTitle>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant={
                          caseItem.difficulty === 'Easy'
                            ? 'success'
                            : caseItem.difficulty === 'Medium'
                            ? 'warning'
                            : 'danger'
                        }
                      >
                        {caseItem.difficulty}
                      </Badge>
                      <Badge variant="default">{caseItem.category}</Badge>
                      <Badge variant="info">{caseItem.questions.length} Questions</Badge>
                    </div>
                  </div>
                  <ChevronRight className="h-6 w-6 text-muted-foreground flex-shrink-0 ml-3" />
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      ) : (
        /* Case Detail */
        <div className="space-y-6">
          <div>
            <Button variant="ghost" onClick={() => setSelectedCase(null)} className="mb-4">
              ← Back to Cases
            </Button>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold mb-2">{selectedCase.title}</h2>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant={
                      selectedCase.difficulty === 'Easy'
                        ? 'success'
                        : selectedCase.difficulty === 'Medium'
                        ? 'warning'
                        : 'danger'
                    }
                  >
                    {selectedCase.difficulty}
                  </Badge>
                  <Badge variant="default">{selectedCase.category}</Badge>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Presentation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{selectedCase.presentation}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vital Signs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{selectedCase.vitals}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Physical Examination</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{selectedCase.exam}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pulmonary Function Testing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{selectedCase.pft}</p>
            </CardContent>
          </Card>

          {selectedCase.cxr && (
            <Card>
              <CardHeader>
                <CardTitle>Chest X-Ray</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{selectedCase.cxr}</p>
              </CardContent>
            </Card>
          )}

          {selectedCase.labs && (
            <Card>
              <CardHeader>
                <CardTitle>Laboratory Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{selectedCase.labs}</p>
              </CardContent>
            </Card>
          )}

          <Card className="border-primary/50">
            <CardHeader>
              <CardTitle>Clinical Questions</CardTitle>
              <CardDescription>Test your clinical reasoning</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedCase.questions.map((item, index) => (
                <div key={index} className="p-4 bg-secondary rounded-lg space-y-2">
                  <div className="flex items-start space-x-2">
                    <Badge variant="default">{index + 1}</Badge>
                    <p className="text-sm font-semibold flex-1">{item.q}</p>
                  </div>
                  {showAnswers && (
                    <div className="ml-8 p-3 bg-primary/5 rounded border border-primary/20">
                      <p className="text-sm text-muted-foreground">{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
              <Button onClick={() => setShowAnswers(!showAnswers)} className="w-full md:w-auto">
                {showAnswers ? 'Hide Answers' : 'Show Answers'}
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {!selectedCase && (
        <Card className="border-indigo-500/50 bg-indigo-500/5">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-5 w-5 text-indigo-500" />
              <CardTitle>Learning Tips</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
              <li>Read the case thoroughly before looking at questions</li>
              <li>Pay attention to age, smoking history, symptom pattern, and reversibility</li>
              <li>Try to answer questions yourself before revealing answers</li>
              <li>Focus on the reasoning process, not just the final answer</li>
              <li>Cases integrate knowledge from multiple modules</li>
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
