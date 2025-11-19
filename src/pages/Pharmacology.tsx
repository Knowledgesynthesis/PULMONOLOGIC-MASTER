import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { Pill, AlertCircle } from 'lucide-react'

export default function Pharmacology() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center">
          <Pill className="h-6 w-6 text-red-500" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Respiratory Pharmacology</h1>
          <p className="text-muted-foreground">Understand mechanisms and effects of respiratory medications</p>
        </div>
      </div>

      {/* SABA */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Badge variant="info">SABA</Badge>
            <span>Short-Acting Beta-2 Agonists</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold mb-1">Examples:</h4>
            <p className="text-sm text-muted-foreground">Albuterol (salbutamol), Levalbuterol</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Mechanism:</h4>
            <p className="text-sm text-muted-foreground">
              Stimulate β2-adrenergic receptors → ↑ cAMP → smooth muscle relaxation → bronchodilation
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Onset & Duration:</h4>
            <p className="text-sm text-muted-foreground">
              Onset: 5-15 minutes | Duration: 4-6 hours
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Clinical Use:</h4>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-2">
              <li>Rescue therapy for acute symptoms</li>
              <li>Prevention of exercise-induced bronchospasm</li>
              <li>First-line in acute exacerbations</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Adverse Effects:</h4>
            <p className="text-sm text-muted-foreground">
              Tachycardia, tremor, hypokalemia (at high doses), anxiety
            </p>
          </div>
        </CardContent>
      </Card>

      {/* LABA */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Badge variant="info">LABA</Badge>
            <span>Long-Acting Beta-2 Agonists</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold mb-1">Examples:</h4>
            <p className="text-sm text-muted-foreground">
              Formoterol, Salmeterol, Vilanterol, Indacaterol
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Mechanism:</h4>
            <p className="text-sm text-muted-foreground">
              Similar to SABA but longer duration due to high lipophilicity and receptor binding
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Duration:</h4>
            <p className="text-sm text-muted-foreground">
              12-24 hours (twice daily or once daily depending on formulation)
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Clinical Use:</h4>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-2">
              <li>Maintenance therapy for asthma (ALWAYS with ICS)</li>
              <li>COPD maintenance therapy</li>
              <li>NOT for acute symptoms or exacerbations</li>
            </ul>
          </div>
          <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/30">
            <p className="text-sm font-semibold text-red-600 dark:text-red-400">
              ⚠️ Black Box Warning: LABA monotherapy in asthma increases risk of asthma-related death.
              ALWAYS combine with ICS in asthma.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* ICS */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Badge variant="success">ICS</Badge>
            <span>Inhaled Corticosteroids</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold mb-1">Examples:</h4>
            <p className="text-sm text-muted-foreground">
              Fluticasone, Budesonide, Beclomethasone, Mometasone, Ciclesonide
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Mechanism:</h4>
            <p className="text-sm text-muted-foreground">
              Reduce airway inflammation by suppressing inflammatory mediators and cells (eosinophils, mast cells)
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Clinical Use:</h4>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-2">
              <li><strong>Asthma:</strong> Cornerstone of persistent asthma therapy (all steps except intermittent)</li>
              <li><strong>COPD:</strong> Added for frequent exacerbations or elevated eosinophils</li>
              <li>Most effective controller medication for asthma</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Adverse Effects:</h4>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-2">
              <li>Oral candidiasis (thrush) - prevent with spacer and mouth rinsing</li>
              <li>Dysphonia (hoarse voice)</li>
              <li>Increased pneumonia risk in COPD (controversial)</li>
              <li>Systemic effects at high doses (osteoporosis, adrenal suppression)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* LAMA */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Badge variant="success">LAMA</Badge>
            <span>Long-Acting Muscarinic Antagonists</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold mb-1">Examples:</h4>
            <p className="text-sm text-muted-foreground">
              Tiotropium, Umeclidinium, Aclidinium, Glycopyrronium
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Mechanism:</h4>
            <p className="text-sm text-muted-foreground">
              Block muscarinic M3 receptors → inhibit acetylcholine-mediated bronchoconstriction
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Duration:</h4>
            <p className="text-sm text-muted-foreground">24 hours (once daily)</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Clinical Use:</h4>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-2">
              <li><strong>COPD:</strong> First-line maintenance therapy for all GOLD groups</li>
              <li><strong>Asthma:</strong> Add-on therapy for uncontrolled severe asthma</li>
              <li>Reduces exacerbations and hospitalizations</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Adverse Effects:</h4>
            <p className="text-sm text-muted-foreground">
              Dry mouth, urinary retention (especially in BPH), narrow-angle glaucoma risk, constipation
            </p>
          </div>
        </CardContent>
      </Card>

      {/* LTRA */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Badge variant="info">LTRA</Badge>
            <span>Leukotriene Receptor Antagonists</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold mb-1">Examples:</h4>
            <p className="text-sm text-muted-foreground">Montelukast, Zafirlukast</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Mechanism:</h4>
            <p className="text-sm text-muted-foreground">
              Block cysteinyl leukotriene receptors → reduce bronchoconstriction, inflammation, mucus production
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Clinical Use:</h4>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-2">
              <li>Alternative to low-dose ICS for mild persistent asthma</li>
              <li>Add-on therapy for allergic/exercise-induced asthma</li>
              <li>Useful in aspirin-exacerbated respiratory disease (AERD)</li>
              <li>Oral medication (convenient for patients who can't use inhalers)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Adverse Effects:</h4>
            <p className="text-sm text-muted-foreground">
              Headache, GI upset, neuropsychiatric effects (mood changes, suicidal ideation - FDA warning)
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Systemic Corticosteroids */}
      <Card>
        <CardHeader>
          <CardTitle>Systemic Corticosteroids</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h4 className="font-semibold mb-1">Examples:</h4>
            <p className="text-sm text-muted-foreground">Prednisone, Methylprednisolone, Dexamethasone</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Clinical Use:</h4>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-2">
              <li>Acute asthma exacerbations</li>
              <li>COPD exacerbations</li>
              <li>Short course: 5-7 days for exacerbations (no taper needed if &lt;2 weeks)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Typical Regimen:</h4>
            <p className="text-sm text-muted-foreground">
              Prednisone 40-60 mg daily for 5 days
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Combination Therapies */}
      <Card className="border-primary/50">
        <CardHeader>
          <CardTitle>Common Combination Therapies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-secondary rounded-lg">
              <h4 className="font-semibold mb-1">ICS/LABA Combinations</h4>
              <p className="text-sm text-muted-foreground">
                Fluticasone/Salmeterol, Budesonide/Formoterol, Fluticasone/Vilanterol
              </p>
            </div>
            <div className="p-3 bg-secondary rounded-lg">
              <h4 className="font-semibold mb-1">LAMA/LABA Combinations</h4>
              <p className="text-sm text-muted-foreground">
                Umeclidinium/Vilanterol, Tiotropium/Olodaterol, Glycopyrronium/Indacaterol
              </p>
            </div>
            <div className="p-3 bg-secondary rounded-lg">
              <h4 className="font-semibold mb-1">Triple Therapy (ICS/LAMA/LABA)</h4>
              <p className="text-sm text-muted-foreground">
                Fluticasone/Umeclidinium/Vilanterol, Budesonide/Glycopyrronium/Formoterol
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Step-Up vs Step-Down Logic */}
      <Card>
        <CardHeader>
          <CardTitle>Step-Up vs Step-Down Decision Making</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/30">
              <h4 className="font-semibold mb-2 text-red-600 dark:text-red-400">Step Up When:</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Persistent symptoms despite adherence</li>
                <li>Frequent exacerbations</li>
                <li>Nighttime awakenings</li>
                <li>Activity limitation</li>
                <li>Frequent SABA use (&gt;2 days/week)</li>
              </ul>
            </div>
            <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/30">
              <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">Step Down When:</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Well-controlled for ≥3 months</li>
                <li>Minimal symptoms</li>
                <li>No exacerbations</li>
                <li>Minimal SABA use</li>
                <li>Normal lung function</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Points */}
      <Card className="border-red-500/50 bg-red-500/5">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <CardTitle>Key Takeaways</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
            <li>ICS is the cornerstone of persistent asthma management</li>
            <li>NEVER use LABA monotherapy in asthma - always combine with ICS</li>
            <li>LAMA and LABA are first-line for COPD; ICS added for frequent exacerbations</li>
            <li>SABA is for rescue therapy only - overuse indicates poor control</li>
            <li>ICS in COPD may increase pneumonia risk but reduces exacerbations</li>
            <li>Assess control regularly and adjust therapy (step up or down) accordingly</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
