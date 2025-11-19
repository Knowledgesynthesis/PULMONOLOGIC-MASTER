import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { GitBranch, AlertCircle } from 'lucide-react'

export default function ACO() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
          <GitBranch className="h-6 w-6 text-purple-500" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Asthma-COPD Overlap (ACO)</h1>
          <p className="text-muted-foreground">Differentiate asthma from COPD and recognize overlap syndrome</p>
        </div>
      </div>

      {/* Definition */}
      <Card>
        <CardHeader>
          <CardTitle>What is ACO?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Asthma-COPD Overlap (ACO) describes patients who have features of both asthma and COPD.
            These patients often have more symptoms, frequent exacerbations, worse quality of life,
            and more rapid decline in lung function compared to either condition alone.
          </p>
          <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/30">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> ACO is not a distinct disease entity but rather a descriptive term
              for patients with characteristics of both conditions.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle>Asthma vs COPD: Key Differences</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b">
                <tr>
                  <th className="text-left py-2 px-3">Feature</th>
                  <th className="text-left py-2 px-3">Asthma</th>
                  <th className="text-left py-2 px-3">COPD</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 px-3 font-medium">Age of Onset</td>
                  <td className="py-3 px-3">Usually childhood/young adult</td>
                  <td className="py-3 px-3">Usually &gt;40 years</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-3 font-medium">Smoking History</td>
                  <td className="py-3 px-3">Not causal</td>
                  <td className="py-3 px-3">Usually significant (≥10 pack-years)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-3 font-medium">Pattern of Symptoms</td>
                  <td className="py-3 px-3">Variable, episodic</td>
                  <td className="py-3 px-3">Progressive, persistent</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-3 font-medium">Triggers</td>
                  <td className="py-3 px-3">Allergens, exercise, cold air</td>
                  <td className="py-3 px-3">Exertion, infections</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-3 font-medium">Atopy/Allergies</td>
                  <td className="py-3 px-3">Common</td>
                  <td className="py-3 px-3">Less common</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-3 font-medium">Bronchodilator Response</td>
                  <td className="py-3 px-3">Significant (≥12% and ≥200 mL)</td>
                  <td className="py-3 px-3">Limited</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-3 font-medium">Blood Eosinophils</td>
                  <td className="py-3 px-3">Often elevated</td>
                  <td className="py-3 px-3">Usually normal (unless ACO)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-3 font-medium">FeNO</td>
                  <td className="py-3 px-3">Often elevated</td>
                  <td className="py-3 px-3">Usually normal</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-medium">Reversibility</td>
                  <td className="py-3 px-3">Largely reversible</td>
                  <td className="py-3 px-3">Poorly reversible</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Identifying ACO */}
      <Card className="border-primary/50">
        <CardHeader>
          <CardTitle>Identifying ACO Features</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Consider ACO when a patient has features from both columns:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-3 flex items-center space-x-2">
                <Badge variant="info">Asthma Features</Badge>
              </h4>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                <li>Early age of onset (&lt;40 years)</li>
                <li>Variable symptoms</li>
                <li>History of atopy/allergies</li>
                <li>Significant bronchodilator response</li>
                <li>Elevated eosinophils (&gt;300 cells/μL)</li>
                <li>Previous diagnosis of asthma</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 flex items-center space-x-2">
                <Badge variant="warning">COPD Features</Badge>
              </h4>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                <li>Age &gt;40 years</li>
                <li>Persistent airflow limitation (post-BD FEV1/FVC &lt;0.70)</li>
                <li>Significant smoking history (≥10 pack-years)</li>
                <li>Persistent symptoms despite therapy</li>
                <li>Emphysema on CT imaging</li>
                <li>Progressive decline in lung function</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Biomarkers */}
      <Card>
        <CardHeader>
          <CardTitle>Biomarkers to Help Differentiate</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-secondary rounded-lg">
              <h4 className="font-semibold mb-2">Blood Eosinophils</h4>
              <p className="text-sm text-muted-foreground">
                <strong>≥300 cells/μL:</strong> Suggests Type 2 inflammation (asthma-like)<br />
                <strong>&lt;100 cells/μL:</strong> Less likely to be Type 2 inflammation<br />
                <strong>Clinical use:</strong> Predicts ICS responsiveness in COPD
              </p>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <h4 className="font-semibold mb-2">Fractional Exhaled Nitric Oxide (FeNO)</h4>
              <p className="text-sm text-muted-foreground">
                <strong>≥50 ppb:</strong> Suggests eosinophilic airway inflammation (asthma-like)<br />
                <strong>&lt;25 ppb:</strong> Less likely to have eosinophilic inflammation<br />
                <strong>Clinical use:</strong> Helps identify patients likely to respond to ICS
              </p>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <h4 className="font-semibold mb-2">IgE Levels</h4>
              <p className="text-sm text-muted-foreground">
                Elevated in allergic asthma; may guide biologic therapy (omalizumab)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Management Approach */}
      <Card>
        <CardHeader>
          <CardTitle>Management Approach for ACO</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Management should include elements from both asthma and COPD treatment strategies:
          </p>
          <div className="space-y-3">
            <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
              <h4 className="font-semibold mb-1">1. Always Include ICS</h4>
              <p className="text-sm text-muted-foreground">
                Unlike pure COPD, ICS is recommended from the start in ACO due to Type 2 inflammation
              </p>
            </div>
            <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
              <h4 className="font-semibold mb-1">2. Add Long-Acting Bronchodilators</h4>
              <p className="text-sm text-muted-foreground">
                LABA + LAMA combination for optimal bronchodilation (ICS-LABA-LAMA triple therapy)
              </p>
            </div>
            <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
              <h4 className="font-semibold mb-1">3. Consider Biologics</h4>
              <p className="text-sm text-muted-foreground">
                If elevated eosinophils and persistent exacerbations despite triple therapy
              </p>
            </div>
            <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
              <h4 className="font-semibold mb-1">4. Non-Pharmacologic Interventions</h4>
              <p className="text-sm text-muted-foreground">
                Smoking cessation, pulmonary rehabilitation, vaccination
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Points */}
      <Card className="border-purple-500/50 bg-purple-500/5">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-purple-500" />
            <CardTitle>Key Takeaways</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
            <li>ACO represents patients with features of both asthma and COPD</li>
            <li>Key differentiators: age of onset, smoking history, symptom pattern, reversibility</li>
            <li>Biomarkers (eosinophils, FeNO) help identify Type 2 inflammation</li>
            <li>Always use ICS in ACO (unlike COPD Group A where it may not be needed)</li>
            <li>Triple therapy (ICS-LABA-LAMA) is often required for ACO</li>
            <li>ACO patients have worse outcomes and require more aggressive management</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
