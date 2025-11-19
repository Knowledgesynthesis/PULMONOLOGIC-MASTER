import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Badge from '@/components/ui/Badge'
import { BookOpen, Search } from 'lucide-react'

const glossaryTerms = [
  { term: 'ACO', full: 'Asthma-COPD Overlap', definition: 'Condition characterized by features of both asthma and COPD, including persistent airflow limitation with features of asthma (reversibility, eosinophilia) and COPD (smoking history, progressive symptoms).', category: 'Diagnosis' },
  { term: 'Bronchodilator Response', full: '', definition: 'Significant improvement in FEV1 after bronchodilator administration, defined as ≥12% AND ≥200 mL increase. Indicates reversible airflow obstruction typical of asthma.', category: 'PFT' },
  { term: 'COPD', full: 'Chronic Obstructive Pulmonary Disease', definition: 'Chronic respiratory disease characterized by persistent airflow limitation (post-BD FEV1/FVC < 0.70) that is progressive and associated with chronic inflammation from noxious stimuli.', category: 'Diagnosis' },
  { term: 'DLCO', full: 'Diffusing Capacity of Lungs for Carbon Monoxide', definition: 'Measure of gas transfer from alveoli to blood. Reduced in emphysema, ILD, pulmonary vascular disease. Normal in asthma and chronic bronchitis.', category: 'PFT' },
  { term: 'Eosinophils', full: '', definition: 'White blood cells involved in allergic and inflammatory responses. Elevated levels (≥300 cells/μL) suggest Type 2 inflammation and predict ICS responsiveness.', category: 'Biomarkers' },
  { term: 'FeNO', full: 'Fractional Exhaled Nitric Oxide', definition: 'Biomarker of eosinophilic airway inflammation. Elevated (≥50 ppb) in asthma with Type 2 inflammation. Helps predict ICS response.', category: 'Biomarkers' },
  { term: 'FEV1', full: 'Forced Expiratory Volume in 1 second', definition: 'Volume of air exhaled in the first second of forced expiration. Key measure of airflow and severity in obstructive diseases.', category: 'PFT' },
  { term: 'FVC', full: 'Forced Vital Capacity', definition: 'Total volume of air exhaled during forced expiration from full inspiration. Reduced in both obstructive (air trapping) and restrictive diseases.', category: 'PFT' },
  { term: 'FEV1/FVC Ratio', full: '', definition: 'Primary measure to distinguish obstructive from restrictive patterns. <0.70 indicates obstruction; ≥0.70 with reduced FVC suggests restriction (confirm with TLC).', category: 'PFT' },
  { term: 'GOLD', full: 'Global Initiative for Chronic Obstructive Lung Disease', definition: 'International guidelines for COPD classification and management. Uses spirometry (stages 1-4) and clinical assessment (groups A, B, E) to guide therapy.', category: 'Guidelines' },
  { term: 'GINA', full: 'Global Initiative for Asthma', definition: 'International guidelines for asthma diagnosis and management. Emphasizes stepwise approach based on symptom control and exacerbation risk.', category: 'Guidelines' },
  { term: 'ICS', full: 'Inhaled Corticosteroids', definition: 'Anti-inflammatory medications that are the cornerstone of persistent asthma management. Examples: fluticasone, budesonide, beclomethasone.', category: 'Medications' },
  { term: 'LABA', full: 'Long-Acting Beta-2 Agonist', definition: 'Bronchodilator with 12-24 hour duration. Examples: salmeterol, formoterol. NEVER use as monotherapy in asthma (black box warning).', category: 'Medications' },
  { term: 'LAMA', full: 'Long-Acting Muscarinic Antagonist', definition: 'Bronchodilator that blocks acetylcholine-mediated bronchoconstriction. First-line for COPD. Examples: tiotropium, umeclidinium.', category: 'Medications' },
  { term: 'NIV', full: 'Non-Invasive Ventilation', definition: 'Ventilatory support without intubation (e.g., BiPAP). Used in COPD exacerbation with respiratory acidosis. Reduces intubation rate and mortality.', category: 'Treatment' },
  { term: 'Obstructive Pattern', full: '', definition: 'Spirometry showing FEV1/FVC < 0.70. Caused by airway narrowing or early airway closure. Examples: asthma, COPD, bronchiectasis.', category: 'PFT' },
  { term: 'Peak Flow', full: 'Peak Expiratory Flow Rate (PEFR)', definition: 'Maximum flow rate during forced expiration. Used for asthma monitoring. Green zone (80-100%), Yellow zone (50-80%), Red zone (<50%).', category: 'Monitoring' },
  { term: 'Restrictive Pattern', full: '', definition: 'Reduced lung volumes (TLC) with preserved or elevated FEV1/FVC ratio. Causes include ILD, chest wall disease, neuromuscular disease, obesity.', category: 'PFT' },
  { term: 'SABA', full: 'Short-Acting Beta-2 Agonist', definition: 'Rapid-onset bronchodilator for acute symptom relief. Examples: albuterol (salbutamol). Onset 5-15 min, duration 4-6 hours. Overuse indicates poor control.', category: 'Medications' },
  { term: 'TLC', full: 'Total Lung Capacity', definition: 'Total volume of air in lungs at maximal inspiration. Measured by body plethysmography. Required to confirm restrictive pattern. Reduced in restriction, increased in emphysema.', category: 'PFT' },
  { term: 'Triple Therapy', full: '', definition: 'Combination of ICS + LABA + LAMA. Used in severe asthma or COPD with frequent exacerbations. Available as single inhaler.', category: 'Treatment' },
  { term: 'VCD', full: 'Vocal Cord Dysfunction', definition: 'Paradoxical vocal cord adduction causing inspiratory stridor. Mimics asthma but shows flattened inspiratory curve on flow-volume loop. Treated with speech therapy.', category: 'Diagnosis' },
  { term: 'Type 2 Inflammation', full: '', definition: 'Inflammatory pattern characterized by eosinophilia, elevated IgE, and Th2 cytokines (IL-4, IL-5, IL-13). Seen in allergic asthma. Predicts response to ICS and biologics.', category: 'Pathophysiology' },
]

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = ['all', ...Array.from(new Set(glossaryTerms.map((t) => t.category)))]

  const filteredTerms = glossaryTerms.filter((item) => {
    const matchesSearch =
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.full.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getCategoryColor = (category: string) => {
    const colors: Record<string, any> = {
      Diagnosis: 'info',
      PFT: 'warning',
      Biomarkers: 'success',
      Guidelines: 'default',
      Medications: 'danger',
      Treatment: 'success',
      Monitoring: 'info',
      Pathophysiology: 'default',
    }
    return colors[category] || 'default'
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center">
          <BookOpen className="h-6 w-6 text-violet-500" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Glossary</h1>
          <p className="text-muted-foreground">Quick reference for key terms and concepts</p>
        </div>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search terms, abbreviations, or definitions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Showing {filteredTerms.length} of {glossaryTerms.length} terms
          </p>
        </CardContent>
      </Card>

      {/* Glossary Terms */}
      <div className="space-y-3">
        {filteredTerms.length > 0 ? (
          filteredTerms.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">{item.term}</CardTitle>
                    {item.full && (
                      <p className="text-sm text-muted-foreground italic">{item.full}</p>
                    )}
                  </div>
                  <Badge variant={getCategoryColor(item.category)}>{item.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.definition}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-muted-foreground">No terms found matching your search.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
