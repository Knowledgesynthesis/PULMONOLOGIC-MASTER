import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { Layers, AlertCircle } from 'lucide-react'

export default function Differentials() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center">
          <Layers className="h-6 w-6 text-teal-500" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Common Differentials</h1>
          <p className="text-muted-foreground">Conditions that mimic asthma and COPD</p>
        </div>
      </div>

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle>Why Consider Differentials?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Many conditions can present with dyspnea, wheezing, or chronic cough similar to asthma or COPD.
            Accurate diagnosis is crucial because treatment differs significantly.
          </p>
        </CardContent>
      </Card>

      {/* Vocal Cord Dysfunction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Badge variant="warning">VCD</Badge>
            <span>Vocal Cord Dysfunction</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold mb-1">Clinical Features:</h4>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-2">
              <li>Inspiratory stridor or wheeze (not expiratory like asthma)</li>
              <li>Sudden onset, often exercise-induced</li>
              <li>Throat tightness, feeling of choking</li>
              <li>Symptoms resolve quickly (minutes)</li>
              <li>Normal spirometry between episodes</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Diagnosis:</h4>
            <p className="text-sm text-muted-foreground">
              Laryngoscopy during symptoms shows paradoxical vocal cord adduction during inspiration
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Flow-Volume Loop:</h4>
            <p className="text-sm text-muted-foreground">
              Flattening of inspiratory curve (variable extrathoracic obstruction pattern)
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Treatment:</h4>
            <p className="text-sm text-muted-foreground">
              Speech therapy, breathing exercises, treat underlying triggers (GERD, anxiety)
            </p>
          </div>
        </CardContent>
      </Card>

      {/* CHF with Wheezing */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Badge variant="danger">Cardiac Asthma</Badge>
            <span>CHF with Wheezing</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold mb-1">Clinical Features:</h4>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-2">
              <li>Dyspnea, wheezing, cough (especially at night)</li>
              <li>Orthopnea, paroxysmal nocturnal dyspnea</li>
              <li>Peripheral edema, elevated JVP</li>
              <li>History of heart disease, hypertension</li>
              <li>Symptoms worsen when lying flat</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Diagnosis:</h4>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-2">
              <li>Chest X-ray: pulmonary edema, cardiomegaly</li>
              <li>BNP/NT-proBNP elevated</li>
              <li>Echocardiography shows reduced ejection fraction or diastolic dysfunction</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Key Difference from Asthma:</h4>
            <p className="text-sm text-muted-foreground">
              Responds to diuretics and heart failure management, not bronchodilators alone
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Obesity Hypoventilation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Badge variant="warning">OHS</Badge>
            <span>Obesity Hypoventilation Syndrome</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold mb-1">Clinical Features:</h4>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-2">
              <li>BMI ≥30 kg/m²</li>
              <li>Chronic daytime hypercapnia (PaCO2 &gt;45 mmHg)</li>
              <li>Daytime hypoxemia</li>
              <li>Sleep-disordered breathing</li>
              <li>Exertional dyspnea, fatigue</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">PFT Pattern:</h4>
            <p className="text-sm text-muted-foreground">
              Restrictive pattern (reduced FVC) with normal FEV1/FVC ratio
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Treatment:</h4>
            <p className="text-sm text-muted-foreground">
              Weight loss, positive airway pressure (PAP) therapy, treatment of sleep apnea
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Interstitial Lung Disease */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Badge variant="danger">ILD</Badge>
            <span>Interstitial Lung Disease</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold mb-1">Clinical Features:</h4>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-2">
              <li>Progressive exertional dyspnea</li>
              <li>Dry cough (non-productive)</li>
              <li>Bibasilar fine crackles ("Velcro crackles")</li>
              <li>Digital clubbing (in some cases)</li>
              <li>No significant response to bronchodilators</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">PFT Pattern:</h4>
            <p className="text-sm text-muted-foreground">
              Restrictive pattern: reduced FVC and TLC, normal/elevated FEV1/FVC ratio, reduced DLCO
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Diagnosis:</h4>
            <p className="text-sm text-muted-foreground">
              HRCT chest shows reticular opacities, honeycombing, or ground-glass opacities depending on ILD subtype
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Examples:</h4>
            <p className="text-sm text-muted-foreground">
              Idiopathic pulmonary fibrosis (IPF), sarcoidosis, hypersensitivity pneumonitis
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Upper Airway Obstruction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Badge variant="danger">UAO</Badge>
            <span>Upper Airway Obstruction</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold mb-1">Causes:</h4>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-2">
              <li>Tracheal stenosis (post-intubation, tumor)</li>
              <li>Goiter compressing trachea</li>
              <li>Tracheomalacia</li>
              <li>Laryngeal tumor or edema</li>
              <li>Angioedema</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Clinical Features:</h4>
            <p className="text-sm text-muted-foreground">
              Inspiratory stridor, dyspnea, no improvement with bronchodilators
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Flow-Volume Loop:</h4>
            <p className="text-sm text-muted-foreground">
              Fixed obstruction: flattening of both inspiratory and expiratory curves<br />
              Variable obstruction: flattening depends on location (intra- vs extrathoracic)
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Diagnosis:</h4>
            <p className="text-sm text-muted-foreground">
              CT neck/chest, direct laryngoscopy/bronchoscopy
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Bronchiectasis */}
      <Card>
        <CardHeader>
          <CardTitle>Bronchiectasis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold mb-1">Clinical Features:</h4>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-2">
              <li>Chronic productive cough with copious sputum</li>
              <li>Recurrent respiratory infections</li>
              <li>Hemoptysis</li>
              <li>Coarse crackles on exam</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">PFT Pattern:</h4>
            <p className="text-sm text-muted-foreground">
              Obstructive pattern, similar to COPD
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Diagnosis:</h4>
            <p className="text-sm text-muted-foreground">
              HRCT chest shows dilated, thickened airways ("tramtrack" sign, "signet ring" sign)
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Differential Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b">
                <tr>
                  <th className="text-left py-2 px-3">Condition</th>
                  <th className="text-left py-2 px-3">Key Feature</th>
                  <th className="text-left py-2 px-3">PFT Pattern</th>
                  <th className="text-left py-2 px-3">Diagnostic Test</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 px-3 font-medium">VCD</td>
                  <td className="py-3 px-3">Inspiratory stridor</td>
                  <td className="py-3 px-3">Flat inspiratory curve</td>
                  <td className="py-3 px-3">Laryngoscopy</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-3 font-medium">CHF</td>
                  <td className="py-3 px-3">Orthopnea, edema</td>
                  <td className="py-3 px-3">Normal or restrictive</td>
                  <td className="py-3 px-3">BNP, Echo</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-3 font-medium">OHS</td>
                  <td className="py-3 px-3">Obesity, hypercapnia</td>
                  <td className="py-3 px-3">Restrictive</td>
                  <td className="py-3 px-3">ABG, sleep study</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-3 font-medium">ILD</td>
                  <td className="py-3 px-3">Dry cough, crackles</td>
                  <td className="py-3 px-3">Restrictive, ↓DLCO</td>
                  <td className="py-3 px-3">HRCT chest</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-medium">UAO</td>
                  <td className="py-3 px-3">Stridor</td>
                  <td className="py-3 px-3">Flat curves</td>
                  <td className="py-3 px-3">CT, bronchoscopy</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Key Points */}
      <Card className="border-teal-500/50 bg-teal-500/5">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-teal-500" />
            <CardTitle>Key Takeaways</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
            <li>Not all wheezing is asthma - consider cardiac causes, VCD, and upper airway obstruction</li>
            <li>Flow-volume loops are invaluable for identifying upper airway obstruction patterns</li>
            <li>ILD presents with restrictive pattern and reduced DLCO, unlike asthma/COPD</li>
            <li>VCD mimics asthma but shows inspiratory stridor and flattened inspiratory curve</li>
            <li>Always consider CHF in older patients with dyspnea and wheezing</li>
            <li>Imaging (CXR, CT) and additional testing (echo, laryngoscopy) often needed for diagnosis</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
