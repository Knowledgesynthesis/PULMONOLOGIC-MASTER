import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { Activity, AlertCircle, TrendingUp } from 'lucide-react'
import { classifyGOLD } from '@/lib/utils'

export default function COPD() {
  const [fev1Percent, setFev1Percent] = useState('')
  const [exacerbations, setExacerbations] = useState('0')
  const [symptoms, setSymptoms] = useState('low')
  const [goldStage, setGoldStage] = useState<{ stage: string; description: string } | null>(null)
  const [goldGroup, setGoldGroup] = useState<string | null>(null)

  const handleClassify = () => {
    const fev1 = parseFloat(fev1Percent)
    if (isNaN(fev1) || fev1 < 0 || fev1 > 150) {
      return
    }

    const stage = classifyGOLD(fev1)
    setGoldStage(stage)

    // Classify GOLD group based on exacerbations and symptoms
    const exacCount = parseInt(exacerbations)
    let group = 'A'

    if (exacCount >= 2 || (exacCount === 1 && symptoms === 'high')) {
      group = symptoms === 'high' ? 'E' : 'E'
    } else if (exacCount === 1) {
      group = symptoms === 'high' ? 'B' : 'B'
    } else {
      group = symptoms === 'high' ? 'B' : 'A'
    }

    setGoldGroup(group)
  }

  const getStageColor = (stage: string) => {
    if (stage.includes('1')) return 'success'
    if (stage.includes('2')) return 'info'
    if (stage.includes('3')) return 'warning'
    return 'danger'
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
          <Activity className="h-6 w-6 text-green-500" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">COPD</h1>
          <p className="text-muted-foreground">Chronic Obstructive Pulmonary Disease management and GOLD guidelines</p>
        </div>
      </div>

      {/* Pathophysiology */}
      <Card>
        <CardHeader>
          <CardTitle>Pathophysiology</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            COPD is characterized by persistent respiratory symptoms and airflow limitation due to:
          </p>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside ml-4">
            <li><strong>Chronic bronchitis</strong> - Airway inflammation, mucus hypersecretion</li>
            <li><strong>Emphysema</strong> - Alveolar destruction, loss of elastic recoil</li>
            <li><strong>Small airway disease</strong> - Fibrosis and narrowing</li>
            <li><strong>Irreversible airflow limitation</strong> - Minimal bronchodilator response</li>
          </ul>
          <div className="p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/30 flex items-start space-x-2">
            <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              <strong>Key Difference from Asthma:</strong> COPD involves structural damage and is largely irreversible,
              while asthma is primarily inflammatory and reversible.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Diagnostic Criteria */}
      <Card>
        <CardHeader>
          <CardTitle>Diagnostic Criteria</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">COPD Diagnosis Requirements:</h4>
            <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside ml-4">
              <li>Appropriate symptoms (dyspnea, chronic cough, sputum production)</li>
              <li>Significant exposure to noxious stimuli (typically cigarette smoke)</li>
              <li><strong className="text-foreground">Post-bronchodilator FEV1/FVC &lt; 0.70</strong> confirms persistent airflow limitation</li>
              <li>Exclusion of other causes of chronic airflow limitation</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* GOLD Navigator */}
      <Card className="border-primary/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5" />
            <span>GOLD Classification Navigator</span>
          </CardTitle>
          <CardDescription>
            Classify COPD severity and determine GOLD stage and group
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="number"
              label="Post-BD FEV1 (% predicted)"
              value={fev1Percent}
              onChange={(e) => setFev1Percent(e.target.value)}
              placeholder="e.g., 65"
              min="0"
              max="150"
            />

            <Select
              label="Exacerbations in Past Year"
              value={exacerbations}
              onChange={(e) => setExacerbations(e.target.value)}
              options={[
                { value: '0', label: '0 exacerbations' },
                { value: '1', label: '1 exacerbation (not leading to hospital)' },
                { value: '2', label: '≥2 exacerbations or ≥1 leading to hospital' },
              ]}
            />

            <Select
              label="Symptom Burden"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              options={[
                { value: 'low', label: 'Low symptoms (mMRC 0-1, CAT <10)' },
                { value: 'high', label: 'High symptoms (mMRC ≥2, CAT ≥10)' },
              ]}
            />
          </div>

          <Button onClick={handleClassify} className="w-full md:w-auto">
            Classify GOLD Stage & Group
          </Button>

          {goldStage && goldGroup && (
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">GOLD Stage (Spirometric):</span>
                  <Badge variant={getStageColor(goldStage.stage)}>{goldStage.stage}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{goldStage.description}</p>
              </div>

              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">GOLD Group (Symptom/Exacerbation):</span>
                  <Badge variant={goldGroup === 'A' ? 'success' : goldGroup === 'B' ? 'info' : 'danger'}>
                    Group {goldGroup}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {goldGroup === 'A' && 'Low symptoms, low exacerbation risk'}
                  {goldGroup === 'B' && 'High symptoms or moderate exacerbation risk'}
                  {goldGroup === 'E' && 'High exacerbation risk (≥2 exacerbations or ≥1 hospitalization)'}
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Pharmacologic Management */}
      <Card>
        <CardHeader>
          <CardTitle>Pharmacologic Management by GOLD Group</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-secondary rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center space-x-2">
                <Badge variant="success">Group A</Badge>
                <span>Low Risk, Fewer Symptoms</span>
              </h4>
              <p className="text-sm text-muted-foreground">
                <strong>Initial:</strong> Bronchodilator (LAMA or LABA) as needed or regularly
              </p>
            </div>

            <div className="p-4 bg-secondary rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center space-x-2">
                <Badge variant="info">Group B</Badge>
                <span>Low-Moderate Risk, More Symptoms</span>
              </h4>
              <p className="text-sm text-muted-foreground">
                <strong>Initial:</strong> LAMA or LABA monotherapy<br />
                <strong>If inadequate:</strong> LAMA + LABA combination
              </p>
            </div>

            <div className="p-4 bg-secondary rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center space-x-2">
                <Badge variant="danger">Group E</Badge>
                <span>High Exacerbation Risk</span>
              </h4>
              <p className="text-sm text-muted-foreground">
                <strong>Initial:</strong> LAMA + LABA<br />
                <strong>If inadequate:</strong> LAMA + LABA + ICS (if eosinophilic or frequent exacerbations)<br />
                <strong>Consider:</strong> Roflumilast, azithromycin for selected patients
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Non-Pharmacologic Management */}
      <Card>
        <CardHeader>
          <CardTitle>Non-Pharmacologic Management</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
            <li><strong>Smoking cessation</strong> - Most important intervention to slow disease progression</li>
            <li><strong>Pulmonary rehabilitation</strong> - Improves exercise capacity and quality of life</li>
            <li><strong>Vaccination</strong> - Influenza (annual), pneumococcal, COVID-19</li>
            <li><strong>Oxygen therapy</strong> - For chronic hypoxemia (PaO2 &lt;55 mmHg or SpO2 &lt;88%)</li>
            <li><strong>Nutritional support</strong> - Address cachexia if present</li>
          </ul>
        </CardContent>
      </Card>

      {/* Exacerbation Management */}
      <Card>
        <CardHeader>
          <CardTitle>Acute Exacerbation Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-secondary rounded-lg">
              <h4 className="font-semibold mb-1">Bronchodilators</h4>
              <p className="text-sm text-muted-foreground">
                Increase dose/frequency of SABA ± SAMA; consider nebulized therapy
              </p>
            </div>
            <div className="p-3 bg-secondary rounded-lg">
              <h4 className="font-semibold mb-1">Corticosteroids</h4>
              <p className="text-sm text-muted-foreground">
                Systemic steroids (prednisone 40mg x 5 days) for moderate-severe exacerbations
              </p>
            </div>
            <div className="p-3 bg-secondary rounded-lg">
              <h4 className="font-semibold mb-1">Antibiotics</h4>
              <p className="text-sm text-muted-foreground">
                If increased sputum purulence + volume, or signs of bacterial infection
              </p>
            </div>
            <div className="p-3 bg-secondary rounded-lg">
              <h4 className="font-semibold mb-1">Oxygen</h4>
              <p className="text-sm text-muted-foreground">
                Target SpO2 88-92%; monitor for CO2 retention
              </p>
            </div>
            <div className="p-3 bg-secondary rounded-lg">
              <h4 className="font-semibold mb-1">Ventilatory Support</h4>
              <p className="text-sm text-muted-foreground">
                NIV (BiPAP) for respiratory acidosis or severe dyspnea despite initial therapy
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Points */}
      <Card className="border-green-500/50 bg-green-500/5">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-green-500" />
            <CardTitle>Key Takeaways</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
            <li>COPD diagnosis requires post-BD FEV1/FVC &lt; 0.70</li>
            <li>GOLD classification uses spirometry (stage) and clinical assessment (group)</li>
            <li>LAMA and LABA are first-line bronchodilators; ICS added for frequent exacerbations</li>
            <li>Smoking cessation is the most effective intervention to slow progression</li>
            <li>Long-term oxygen therapy improves survival in chronic hypoxemia</li>
            <li>Systemic corticosteroids and antibiotics are key for managing exacerbations</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
