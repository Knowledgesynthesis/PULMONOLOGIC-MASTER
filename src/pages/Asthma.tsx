import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import Select from '@/components/ui/Select'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { Wind, AlertCircle, TrendingUp, Pill } from 'lucide-react'
import { classifyAsthmaSeverity } from '@/lib/utils'

export default function Asthma() {
  const [daySymptoms, setDaySymptoms] = useState('none')
  const [nightSymptoms, setNightSymptoms] = useState('none')
  const [sabaUse, setSabaUse] = useState('none')
  const [limitation, setLimitation] = useState('none')
  const [severity, setSeverity] = useState<string | null>(null)

  const handleClassify = () => {
    const result = classifyAsthmaSeverity(daySymptoms, nightSymptoms, sabaUse, limitation)
    setSeverity(result)
  }

  const getSeverityVariant = (sev: string) => {
    if (sev.includes('Severe')) return 'danger'
    if (sev.includes('Moderate')) return 'warning'
    if (sev.includes('Mild')) return 'info'
    return 'success'
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
          <Wind className="h-6 w-6 text-blue-500" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Asthma</h1>
          <p className="text-muted-foreground">Master asthma pathophysiology, diagnosis, and management</p>
        </div>
      </div>

      {/* Pathophysiology */}
      <Card>
        <CardHeader>
          <CardTitle>Pathophysiology</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Asthma is a chronic inflammatory disorder of the airways characterized by:
          </p>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside ml-4">
            <li><strong>Airway inflammation</strong> - Eosinophilic infiltration, mast cell activation</li>
            <li><strong>Bronchial hyperresponsiveness</strong> - Exaggerated bronchospasm to stimuli</li>
            <li><strong>Variable airflow limitation</strong> - Reversible with bronchodilators</li>
            <li><strong>Airway remodeling</strong> - Chronic changes with persistent disease</li>
          </ul>
        </CardContent>
      </Card>

      {/* Diagnostic Criteria */}
      <Card>
        <CardHeader>
          <CardTitle>Diagnostic Criteria</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Key Diagnostic Features:</h4>
            <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside ml-4">
              <li>History of variable respiratory symptoms (wheeze, dyspnea, chest tightness, cough)</li>
              <li>Documented variable expiratory airflow limitation</li>
              <li><strong>Bronchodilator reversibility:</strong> ≥12% AND ≥200 mL increase in FEV1</li>
              <li>Excessive variability in lung function (peak flow variability &gt;10%)</li>
              <li>Positive bronchial provocation test (methacholine, exercise)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Severity Classifier */}
      <Card className="border-primary/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5" />
            <span>Asthma Severity Classifier</span>
          </CardTitle>
          <CardDescription>
            Classify asthma severity based on symptoms and functional impairment
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Daytime Symptoms"
              value={daySymptoms}
              onChange={(e) => setDaySymptoms(e.target.value)}
              options={[
                { value: 'none', label: 'None or minimal (≤2 days/week)' },
                { value: 'some', label: 'Some (>2 days/week but not daily)' },
                { value: 'daily', label: 'Daily' },
                { value: 'continuous', label: 'Throughout the day' },
              ]}
            />

            <Select
              label="Nighttime Symptoms"
              value={nightSymptoms}
              onChange={(e) => setNightSymptoms(e.target.value)}
              options={[
                { value: 'none', label: 'None or rare' },
                { value: 'monthly', label: '1-2 times per month' },
                { value: 'weekly', label: '1-2 times per week' },
                { value: 'nightly', label: 'Frequent or nightly' },
              ]}
            />

            <Select
              label="SABA Use for Symptoms"
              value={sabaUse}
              onChange={(e) => setSabaUse(e.target.value)}
              options={[
                { value: 'none', label: '≤2 days/week' },
                { value: 'some', label: '>2 days/week but not daily' },
                { value: 'daily', label: 'Daily' },
                { value: 'multiple', label: 'Several times per day' },
              ]}
            />

            <Select
              label="Activity Limitation"
              value={limitation}
              onChange={(e) => setLimitation(e.target.value)}
              options={[
                { value: 'none', label: 'None' },
                { value: 'some', label: 'Some limitation' },
                { value: 'moderate', label: 'Moderate limitation' },
                { value: 'extremely', label: 'Extremely limited' },
              ]}
            />
          </div>

          <Button onClick={handleClassify} className="w-full md:w-auto">
            Classify Severity
          </Button>

          {severity && (
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold">Classification:</span>
                <Badge variant={getSeverityVariant(severity)}>{severity}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {severity === 'Intermittent' && 'Symptoms ≤2 days/week, minimal activity limitation'}
                {severity === 'Mild Persistent' && 'Symptoms >2 days/week but not daily'}
                {severity === 'Moderate Persistent' && 'Daily symptoms or frequent nighttime awakenings'}
                {severity === 'Severe Persistent' && 'Symptoms throughout the day, extremely limited activity'}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Stepwise Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Pill className="h-5 w-5" />
            <span>Stepwise Management (Conceptual)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-secondary rounded-lg">
              <h4 className="font-semibold mb-2">Step 1 - Intermittent</h4>
              <p className="text-sm text-muted-foreground">SABA as needed</p>
            </div>

            <div className="p-4 bg-secondary rounded-lg">
              <h4 className="font-semibold mb-2">Step 2 - Mild Persistent</h4>
              <p className="text-sm text-muted-foreground">Low-dose ICS or LTRA</p>
            </div>

            <div className="p-4 bg-secondary rounded-lg">
              <h4 className="font-semibold mb-2">Step 3 - Moderate Persistent</h4>
              <p className="text-sm text-muted-foreground">Low-dose ICS-LABA or Medium-dose ICS</p>
            </div>

            <div className="p-4 bg-secondary rounded-lg">
              <h4 className="font-semibold mb-2">Step 4 - Severe Persistent</h4>
              <p className="text-sm text-muted-foreground">Medium-dose ICS-LABA + consider LAMA</p>
            </div>

            <div className="p-4 bg-secondary rounded-lg">
              <h4 className="font-semibold mb-2">Step 5 - Severe Persistent</h4>
              <p className="text-sm text-muted-foreground">
                High-dose ICS-LABA + LAMA + consider biologics (anti-IgE, anti-IL-5)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Peak Flow Zones */}
      <Card>
        <CardHeader>
          <CardTitle>Peak Flow Zones</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg border border-green-500/30">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div>
                <p className="font-semibold text-green-600 dark:text-green-400">Green Zone (80-100%)</p>
                <p className="text-sm text-muted-foreground">Good control, continue current plan</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div>
                <p className="font-semibold text-yellow-600 dark:text-yellow-400">Yellow Zone (50-80%)</p>
                <p className="text-sm text-muted-foreground">Caution, may need to increase therapy</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-red-500/10 rounded-lg border border-red-500/30">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div>
                <p className="font-semibold text-red-600 dark:text-red-400">Red Zone (&lt;50%)</p>
                <p className="text-sm text-muted-foreground">Medical alert, use rescue medication and seek care</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Points */}
      <Card className="border-blue-500/50 bg-blue-500/5">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-blue-500" />
            <CardTitle>Key Takeaways</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
            <li>Asthma is characterized by reversible airflow limitation and bronchial hyperresponsiveness</li>
            <li>Diagnosis requires both symptoms and objective lung function evidence</li>
            <li>Severity classification guides initial therapy choice</li>
            <li>ICS forms the cornerstone of persistent asthma management</li>
            <li>Assess control regularly and adjust therapy accordingly (step up or step down)</li>
            <li>Consider biologics for severe, uncontrolled asthma with Type 2 inflammation</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
