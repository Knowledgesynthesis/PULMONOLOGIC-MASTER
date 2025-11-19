import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { AlertCircle } from 'lucide-react'

export default function Emergency() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center">
          <AlertCircle className="h-6 w-6 text-yellow-500" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Emergency Care</h1>
          <p className="text-muted-foreground">Acute exacerbation management and escalation pathways</p>
        </div>
      </div>

      {/* Acute Asthma Exacerbation */}
      <Card className="border-red-500/50">
        <CardHeader>
          <CardTitle>Acute Asthma Exacerbation Algorithm</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Severity Assessment */}
          <div>
            <h4 className="font-semibold mb-3">Step 1: Assess Severity</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                <Badge variant="warning" className="mb-2">Mild-Moderate</Badge>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Speaks in phrases</li>
                  <li>• Prefers sitting to lying</li>
                  <li>• Not agitated</li>
                  <li>• RR increased</li>
                  <li>• SpO2 90-95%</li>
                  <li>• PEF &gt;50%</li>
                </ul>
              </div>
              <div className="p-3 bg-orange-500/10 rounded-lg border border-orange-500/30">
                <Badge variant="danger" className="mb-2">Severe</Badge>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Speaks in words</li>
                  <li>• Sits hunched forward</li>
                  <li>• Agitated</li>
                  <li>• RR &gt;30</li>
                  <li>• HR &gt;120</li>
                  <li>• SpO2 &lt;90%</li>
                  <li>• PEF &lt;50%</li>
                </ul>
              </div>
              <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/30">
                <Badge variant="danger" className="mb-2">Life-Threatening</Badge>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Silent chest</li>
                  <li>• Poor respiratory effort</li>
                  <li>• Altered consciousness</li>
                  <li>• Cyanosis</li>
                  <li>• Bradycardia</li>
                  <li>• Hypotension</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Initial Management */}
          <div>
            <h4 className="font-semibold mb-3">Step 2: Initial Management (First Hour)</h4>
            <div className="space-y-3">
              <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                <h5 className="font-semibold text-sm mb-1">1. Oxygen</h5>
                <p className="text-sm text-muted-foreground">
                  Target SpO2 93-95% (or 94-98% if no risk of hypercapnia)
                </p>
              </div>
              <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                <h5 className="font-semibold text-sm mb-1">2. SABA (Albuterol/Salbutamol)</h5>
                <p className="text-sm text-muted-foreground">
                  4-8 puffs via MDI with spacer every 20 minutes for 1 hour<br />
                  OR nebulized 2.5-5 mg every 20 minutes for 1 hour<br />
                  OR continuous nebulization for severe cases
                </p>
              </div>
              <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                <h5 className="font-semibold text-sm mb-1">3. Ipratropium (SAMA)</h5>
                <p className="text-sm text-muted-foreground">
                  Add for moderate-severe exacerbations: 0.5 mg nebulized every 20 minutes for 1 hour
                </p>
              </div>
              <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                <h5 className="font-semibold text-sm mb-1">4. Systemic Corticosteroids</h5>
                <p className="text-sm text-muted-foreground">
                  Prednisone 40-60 mg PO or Methylprednisolone 60-80 mg IV<br />
                  Start within 1 hour of presentation
                </p>
              </div>
            </div>
          </div>

          {/* Reassess */}
          <div>
            <h4 className="font-semibold mb-3">Step 3: Reassess After 1 Hour</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/30">
                <h5 className="font-semibold text-sm mb-1 text-green-600 dark:text-green-400">Good Response</h5>
                <p className="text-sm text-muted-foreground mb-2">
                  Sustained improvement, SpO2 &gt;94%, PEF &gt;70%
                </p>
                <p className="text-sm font-semibold">→ Consider discharge with:</p>
                <ul className="text-xs text-muted-foreground space-y-1 mt-1">
                  <li>• Prednisone 40-60 mg/day for 5-7 days</li>
                  <li>• Continue ICS-LABA or start if not on it</li>
                  <li>• Follow up in 1-2 days</li>
                </ul>
              </div>
              <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/30">
                <h5 className="font-semibold text-sm mb-1 text-red-600 dark:text-red-400">Poor Response</h5>
                <p className="text-sm text-muted-foreground mb-2">
                  Persistent symptoms, SpO2 &lt;94%, PEF &lt;50%
                </p>
                <p className="text-sm font-semibold">→ Escalate care:</p>
                <ul className="text-xs text-muted-foreground space-y-1 mt-1">
                  <li>• Admit to hospital</li>
                  <li>• Continue frequent SABA + ipratropium</li>
                  <li>• Consider IV magnesium sulfate 2g over 20 min</li>
                  <li>• Consider ICU if severe/life-threatening</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ICU Criteria */}
          <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/30">
            <h5 className="font-semibold mb-2 text-red-600 dark:text-red-400">ICU Indications</h5>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Severe exacerbation not responding to initial therapy</li>
              <li>Respiratory acidosis (pH &lt;7.35)</li>
              <li>Hypercapnia (PaCO2 &gt;45 mmHg) or rising CO2</li>
              <li>Altered mental status, exhaustion</li>
              <li>Need for intubation and mechanical ventilation</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* COPD Exacerbation */}
      <Card className="border-orange-500/50">
        <CardHeader>
          <CardTitle>COPD Exacerbation ED Pathway</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Definition */}
          <div>
            <h4 className="font-semibold mb-2">Definition</h4>
            <p className="text-sm text-muted-foreground">
              Acute worsening of respiratory symptoms requiring change in medication:
              increased dyspnea, cough, sputum volume/purulence
            </p>
          </div>

          {/* Management Steps */}
          <div>
            <h4 className="font-semibold mb-3">Management Steps</h4>
            <div className="space-y-3">
              <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                <h5 className="font-semibold text-sm mb-1">1. Oxygen Therapy</h5>
                <p className="text-sm text-muted-foreground">
                  <strong>Target SpO2 88-92%</strong> (avoid over-oxygenation)<br />
                  Monitor for CO2 retention with serial ABGs
                </p>
              </div>
              <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                <h5 className="font-semibold text-sm mb-1">2. Bronchodilators</h5>
                <p className="text-sm text-muted-foreground">
                  <strong>SABA:</strong> Albuterol 2.5-5 mg nebulized every 2-4 hours<br />
                  <strong>SAMA:</strong> Ipratropium 0.5 mg nebulized every 4-6 hours<br />
                  (Combination therapy preferred)
                </p>
              </div>
              <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                <h5 className="font-semibold text-sm mb-1">3. Systemic Corticosteroids</h5>
                <p className="text-sm text-muted-foreground">
                  Prednisone 40 mg PO daily for 5 days<br />
                  Shortens recovery time, improves lung function, reduces treatment failure
                </p>
              </div>
              <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                <h5 className="font-semibold text-sm mb-1">4. Antibiotics (if indicated)</h5>
                <p className="text-sm text-muted-foreground mb-1">
                  <strong>Indications:</strong> Increased sputum purulence + (increased volume OR increased dyspnea)
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Choice:</strong> Amoxicillin-clavulanate, Doxycycline, Azithromycin, or Respiratory FQ
                </p>
              </div>
            </div>
          </div>

          {/* Ventilatory Support */}
          <div>
            <h4 className="font-semibold mb-3">Step 3: Consider Ventilatory Support</h4>
            <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
              <h5 className="font-semibold mb-2">Non-Invasive Ventilation (NIV/BiPAP)</h5>
              <p className="text-sm text-muted-foreground mb-2"><strong>Indications:</strong></p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-2 mb-3">
                <li>Respiratory acidosis (pH &lt;7.35)</li>
                <li>Severe dyspnea with signs of increased work of breathing</li>
                <li>Hypercapnia (PaCO2 &gt;45 mmHg)</li>
              </ul>
              <p className="text-sm font-semibold">Benefits: Reduces intubation rate, mortality, hospital length of stay</p>
            </div>
          </div>

          {/* Admission Criteria */}
          <div>
            <h4 className="font-semibold mb-3">Admission Criteria</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3 bg-secondary rounded-lg">
                <h5 className="font-semibold text-sm mb-1">Consider Admission if:</h5>
                <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Inadequate response to ED therapy</li>
                  <li>Significant comorbidities</li>
                  <li>New arrhythmias</li>
                  <li>Inability to manage at home</li>
                  <li>Frequent recent exacerbations</li>
                </ul>
              </div>
              <div className="p-3 bg-secondary rounded-lg">
                <h5 className="font-semibold text-sm mb-1">ICU Admission if:</h5>
                <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Severe dyspnea unresponsive to therapy</li>
                  <li>Altered mental status</li>
                  <li>Respiratory acidosis (pH &lt;7.30)</li>
                  <li>Persistent hypoxemia despite O2</li>
                  <li>Need for invasive ventilation</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ABG Interpretation for Severity */}
      <Card>
        <CardHeader>
          <CardTitle>ABG Interpretation in Exacerbations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b">
                <tr>
                  <th className="text-left py-2 px-3">Finding</th>
                  <th className="text-left py-2 px-3">Interpretation</th>
                  <th className="text-left py-2 px-3">Action</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 px-3">PaO2 &lt;60 mmHg</td>
                  <td className="py-3 px-3">Hypoxemia</td>
                  <td className="py-3 px-3">Increase O2, consider admission</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-3">PaCO2 &gt;45 mmHg</td>
                  <td className="py-3 px-3">Hypercapnia/Respiratory failure</td>
                  <td className="py-3 px-3">Consider NIV, ICU evaluation</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-3">pH &lt;7.35</td>
                  <td className="py-3 px-3">Respiratory acidosis</td>
                  <td className="py-3 px-3">NIV indicated, ICU likely</td>
                </tr>
                <tr>
                  <td className="py-3 px-3">pH &lt;7.25</td>
                  <td className="py-3 px-3">Severe acidosis</td>
                  <td className="py-3 px-3">ICU, consider intubation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Key Points */}
      <Card className="border-yellow-500/50 bg-yellow-500/5">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-yellow-500" />
            <CardTitle>Key Takeaways</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
            <li>Start systemic corticosteroids within 1 hour for all moderate-severe exacerbations</li>
            <li>SABA is first-line; adding ipratropium improves outcomes in severe cases</li>
            <li>In COPD, target SpO2 88-92% to avoid CO2 retention</li>
            <li>NIV (BiPAP) reduces intubation and mortality in COPD with respiratory acidosis</li>
            <li>Serial ABGs guide severity assessment and need for ventilatory support</li>
            <li>Magnesium sulfate may be added for severe asthma not responding to initial therapy</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
