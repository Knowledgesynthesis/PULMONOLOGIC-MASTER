import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { LineChart, TrendingUp, Info } from 'lucide-react'
import { classifyPFT, calculatePercentChange, interpretBronchodilatorResponse } from '@/lib/utils'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function PFT() {
  const [fev1, setFev1] = useState('')
  const [fvc, setFvc] = useState('')
  const [preBDFev1, setPreBDFev1] = useState('')
  const [postBDFev1, setPostBDFev1] = useState('')
  const [result, setResult] = useState<{
    pattern: string
    ratio: number
    interpretation: string
  } | null>(null)
  const [bdResponse, setBDResponse] = useState<{
    percentChange: number
    absoluteChange: number
    interpretation: string
  } | null>(null)

  const handleClassify = () => {
    const fev1Val = parseFloat(fev1)
    const fvcVal = parseFloat(fvc)

    if (isNaN(fev1Val) || isNaN(fvcVal) || fev1Val <= 0 || fvcVal <= 0) {
      return
    }

    const classification = classifyPFT(fev1Val, fvcVal)
    setResult(classification)
  }

  const handleBDResponse = () => {
    const preVal = parseFloat(preBDFev1)
    const postVal = parseFloat(postBDFev1)

    if (isNaN(preVal) || isNaN(postVal) || preVal <= 0 || postVal <= 0) {
      return
    }

    const percentChange = calculatePercentChange(preVal, postVal)
    const absoluteChange = postVal - preVal
    const interpretation = interpretBronchodilatorResponse(percentChange, absoluteChange)

    setBDResponse({ percentChange, absoluteChange, interpretation })
  }

  const getPatternColor = (pattern: string) => {
    if (pattern === 'Normal') return 'success'
    if (pattern === 'Obstructive') return 'warning'
    if (pattern === 'Restrictive') return 'danger'
    return 'info'
  }

  const chartData = result
    ? [
        {
          name: 'FEV1',
          value: parseFloat(fev1),
          normal: 4.0,
        },
        {
          name: 'FVC',
          value: parseFloat(fvc),
          normal: 5.0,
        },
        {
          name: 'FEV1/FVC',
          value: result.ratio * 100,
          normal: 80,
        },
      ]
    : []

  const bdChartData = bdResponse
    ? [
        {
          name: 'Pre-BD',
          FEV1: parseFloat(preBDFev1),
        },
        {
          name: 'Post-BD',
          FEV1: parseFloat(postBDFev1),
        },
      ]
    : []

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
          <LineChart className="h-6 w-6 text-orange-500" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">PFT Interpretation</h1>
          <p className="text-muted-foreground">Master pulmonary function test interpretation</p>
        </div>
      </div>

      {/* Spirometry Fundamentals */}
      <Card>
        <CardHeader>
          <CardTitle>Spirometry Fundamentals</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Key Measurements:</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li><strong>FEV1</strong> - Forced Expiratory Volume in 1 second</li>
                <li><strong>FVC</strong> - Forced Vital Capacity</li>
                <li><strong>FEV1/FVC ratio</strong> - Primary discriminator</li>
                <li><strong>TLC</strong> - Total Lung Capacity (body plethysmography)</li>
                <li><strong>DLCO</strong> - Diffusing capacity</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Pattern Recognition:</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li><strong>Obstructive:</strong> FEV1/FVC &lt; 0.70</li>
                <li><strong>Restrictive:</strong> Reduced TLC with normal ratio</li>
                <li><strong>Mixed:</strong> Reduced ratio AND reduced TLC</li>
                <li><strong>Normal:</strong> Ratio ≥ 0.70, normal volumes</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* PFT Interpreter */}
      <Card className="border-primary/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5" />
            <span>PFT Pattern Classifier</span>
          </CardTitle>
          <CardDescription>
            Enter spirometry values to classify obstructive vs restrictive patterns
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="number"
              step="0.1"
              label="FEV1 (Liters)"
              value={fev1}
              onChange={(e) => setFev1(e.target.value)}
              placeholder="e.g., 2.5"
            />
            <Input
              type="number"
              step="0.1"
              label="FVC (Liters)"
              value={fvc}
              onChange={(e) => setFvc(e.target.value)}
              placeholder="e.g., 4.0"
            />
          </div>

          <Button onClick={handleClassify} className="w-full md:w-auto">
            Classify Pattern
          </Button>

          {result && (
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold">Pattern:</span>
                  <Badge variant={getPatternColor(result.pattern)}>{result.pattern}</Badge>
                </div>
                <div className="space-y-2">
                  <p className="text-sm">
                    <strong>FEV1/FVC Ratio:</strong> {(result.ratio * 100).toFixed(1)}%
                  </p>
                  <p className="text-sm text-muted-foreground">{result.interpretation}</p>
                </div>
              </div>

              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="name" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                    />
                    <Legend />
                    <Bar dataKey="value" fill="hsl(var(--primary))" name="Measured" />
                    <Bar dataKey="normal" fill="hsl(var(--muted))" name="Normal Reference" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Bronchodilator Response */}
      <Card className="border-primary/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5" />
            <span>Bronchodilator Response Calculator</span>
          </CardTitle>
          <CardDescription>
            Assess reversibility of airflow limitation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="number"
              step="0.1"
              label="Pre-Bronchodilator FEV1 (L)"
              value={preBDFev1}
              onChange={(e) => setPreBDFev1(e.target.value)}
              placeholder="e.g., 2.0"
            />
            <Input
              type="number"
              step="0.1"
              label="Post-Bronchodilator FEV1 (L)"
              value={postBDFev1}
              onChange={(e) => setPostBDFev1(e.target.value)}
              placeholder="e.g., 2.3"
            />
          </div>

          <Button onClick={handleBDResponse} className="w-full md:w-auto">
            Calculate Response
          </Button>

          {bdResponse && (
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="space-y-2">
                  <p className="text-sm">
                    <strong>Percent Change:</strong> {bdResponse.percentChange.toFixed(1)}%
                  </p>
                  <p className="text-sm">
                    <strong>Absolute Change:</strong> {bdResponse.absoluteChange.toFixed(2)} L (
                    {(bdResponse.absoluteChange * 1000).toFixed(0)} mL)
                  </p>
                  <div className="pt-2 border-t border-border">
                    <Badge
                      variant={
                        bdResponse.interpretation.includes('Significant') ? 'success' : 'warning'
                      }
                    >
                      {bdResponse.interpretation}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={bdChartData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="name" className="text-xs" />
                    <YAxis className="text-xs" label={{ value: 'FEV1 (L)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                    />
                    <Bar dataKey="FEV1" fill="hsl(var(--primary))" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Pattern Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle>PFT Pattern Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b">
                <tr>
                  <th className="text-left py-2 px-3">Pattern</th>
                  <th className="text-left py-2 px-3">FEV1/FVC</th>
                  <th className="text-left py-2 px-3">FVC</th>
                  <th className="text-left py-2 px-3">TLC</th>
                  <th className="text-left py-2 px-3">Examples</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 px-3 font-medium">Normal</td>
                  <td className="py-3 px-3">≥ 0.70</td>
                  <td className="py-3 px-3">Normal</td>
                  <td className="py-3 px-3">Normal</td>
                  <td className="py-3 px-3">Healthy lungs</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-3 font-medium">Obstructive</td>
                  <td className="py-3 px-3">&lt; 0.70</td>
                  <td className="py-3 px-3">Normal/↓</td>
                  <td className="py-3 px-3">Normal/↑</td>
                  <td className="py-3 px-3">Asthma, COPD, Bronchiectasis</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-3 font-medium">Restrictive</td>
                  <td className="py-3 px-3">Normal/↑</td>
                  <td className="py-3 px-3">↓</td>
                  <td className="py-3 px-3">↓</td>
                  <td className="py-3 px-3">ILD, Chest wall disease, Obesity</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-medium">Mixed</td>
                  <td className="py-3 px-3">&lt; 0.70</td>
                  <td className="py-3 px-3">↓</td>
                  <td className="py-3 px-3">↓</td>
                  <td className="py-3 px-3">COPD + ILD, Cystic fibrosis</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* DLCO Interpretation */}
      <Card>
        <CardHeader>
          <CardTitle>DLCO (Diffusing Capacity) - Conceptual</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-3 bg-secondary rounded-lg">
            <h4 className="font-semibold mb-1">DLCO Reduced</h4>
            <p className="text-sm text-muted-foreground">
              Emphysema, ILD, pulmonary vascular disease, anemia
            </p>
          </div>
          <div className="p-3 bg-secondary rounded-lg">
            <h4 className="font-semibold mb-1">DLCO Normal</h4>
            <p className="text-sm text-muted-foreground">
              Asthma, chronic bronchitis, chest wall restriction
            </p>
          </div>
          <div className="p-3 bg-secondary rounded-lg">
            <h4 className="font-semibold mb-1">DLCO Increased</h4>
            <p className="text-sm text-muted-foreground">
              Polycythemia, pulmonary hemorrhage, left-to-right shunt
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Key Points */}
      <Card className="border-orange-500/50 bg-orange-500/5">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Info className="h-5 w-5 text-orange-500" />
            <CardTitle>Key Takeaways</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
            <li>FEV1/FVC ratio is the primary discriminator between obstructive and restrictive patterns</li>
            <li>Obstructive: FEV1/FVC &lt; 0.70; Restrictive: reduced TLC with normal/high ratio</li>
            <li>Significant bronchodilator response: ≥12% AND ≥200 mL increase in FEV1</li>
            <li>TLC measurement (body plethysmography) is required to confirm restrictive pattern</li>
            <li>DLCO helps differentiate causes: reduced in emphysema/ILD, normal in asthma</li>
            <li>Always interpret PFTs in clinical context with symptoms and imaging</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
