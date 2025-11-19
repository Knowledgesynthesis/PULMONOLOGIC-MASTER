import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import Select from '@/components/ui/Select'
import Badge from '@/components/ui/Badge'
import { Eye, Info } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'

type LoopPattern = 'normal' | 'obstructive' | 'restrictive' | 'fixed' | 'variable-intra' | 'variable-extra'

const loopPatterns = {
  normal: {
    name: 'Normal',
    description: 'Normal flow-volume loop with sharp peak and smooth curves',
    color: 'success',
    meaning: 'No airflow limitation',
    examples: ['Healthy lungs'],
  },
  obstructive: {
    name: 'Obstructive',
    description: 'Reduced peak flow with scooped-out expiratory curve',
    color: 'warning',
    meaning: 'Airflow obstruction with early airway collapse',
    examples: ['Asthma', 'COPD', 'Bronchiectasis'],
  },
  restrictive: {
    name: 'Restrictive',
    description: 'Narrow loop with preserved shape but reduced volumes',
    color: 'danger',
    meaning: 'Reduced lung volumes with preserved flow rates',
    examples: ['Interstitial lung disease', 'Neuromuscular disease', 'Chest wall restriction'],
  },
  fixed: {
    name: 'Fixed Upper Airway Obstruction',
    description: 'Flattened inspiratory AND expiratory curves',
    color: 'danger',
    meaning: 'Fixed narrowing of upper airway (intrathoracic or extrathoracic)',
    examples: ['Tracheal stenosis', 'Tracheal tumor', 'Goiter'],
  },
  'variable-intra': {
    name: 'Variable Intrathoracic Obstruction',
    description: 'Flattened expiratory curve, normal inspiratory curve',
    color: 'warning',
    meaning: 'Dynamic airway collapse during expiration',
    examples: ['Tracheomalacia', 'Polychondritis'],
  },
  'variable-extra': {
    name: 'Variable Extrathoracic Obstruction',
    description: 'Flattened inspiratory curve, normal expiratory curve',
    color: 'warning',
    meaning: 'Upper airway collapse during inspiration',
    examples: ['Vocal cord dysfunction', 'Laryngeal tumor', 'Laryngeal edema'],
  },
}

// Generate loop data based on pattern
function generateLoopData(pattern: LoopPattern) {
  const points = 100
  const data = []

  for (let i = 0; i <= points; i++) {
    const volume = (i / points) * 6 // 0 to 6 liters

    let flow = 0
    // Expiratory curve (positive flow)
    if (i <= points / 2) {
      const t = i / (points / 2)
      switch (pattern) {
        case 'normal':
          flow = 8 * Math.sin(t * Math.PI) * (1 - 0.3 * t)
          break
        case 'obstructive':
          flow = 5 * Math.sin(t * Math.PI) * Math.pow(1 - t, 2) // Scooped
          break
        case 'restrictive':
          flow = 8 * Math.sin(t * Math.PI) * (1 - 0.3 * t)
          data.push({ volume: volume * 0.6, flow }) // Reduced volume
          continue
        case 'fixed':
          flow = Math.min(4, 8 * Math.sin(t * Math.PI)) // Flattened
          break
        case 'variable-intra':
          flow = Math.min(3.5, 8 * Math.sin(t * Math.PI)) // Flattened expiratory
          break
        case 'variable-extra':
          flow = 8 * Math.sin(t * Math.PI) * (1 - 0.3 * t) // Normal expiratory
          break
      }
    }
    // Inspiratory curve (negative flow)
    else {
      const t = (i - points / 2) / (points / 2)
      switch (pattern) {
        case 'normal':
          flow = -6 * Math.sin(t * Math.PI)
          break
        case 'obstructive':
          flow = -5 * Math.sin(t * Math.PI)
          break
        case 'restrictive':
          flow = -6 * Math.sin(t * Math.PI)
          data.push({ volume: (1 - t) * 6 * 0.6, flow }) // Reduced volume
          continue
        case 'fixed':
          flow = -Math.min(4, 6 * Math.sin(t * Math.PI)) // Flattened
          break
        case 'variable-intra':
          flow = -6 * Math.sin(t * Math.PI) // Normal inspiratory
          break
        case 'variable-extra':
          flow = -Math.min(3, 6 * Math.sin(t * Math.PI)) // Flattened inspiratory
          break
      }
    }

    data.push({ volume, flow })
  }

  return data
}

export default function FlowLoops() {
  const [selectedPattern, setSelectedPattern] = useState<LoopPattern>('normal')

  const patternInfo = loopPatterns[selectedPattern]
  const loopData = generateLoopData(selectedPattern)

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center">
          <Eye className="h-6 w-6 text-pink-500" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Flow-Volume Loops</h1>
          <p className="text-muted-foreground">Master visual pattern recognition of respiratory physiology</p>
        </div>
      </div>

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle>Understanding Flow-Volume Loops</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Flow-volume loops plot airflow (Y-axis) against lung volume (X-axis) during forced expiration and inspiration.
            The shape of the loop provides diagnostic information about the type and location of airway obstruction.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-3 bg-secondary rounded-lg">
              <h4 className="font-semibold mb-1">Expiratory Curve (Top)</h4>
              <p className="text-sm text-muted-foreground">
                Positive flow values representing forced expiration from TLC to RV
              </p>
            </div>
            <div className="p-3 bg-secondary rounded-lg">
              <h4 className="font-semibold mb-1">Inspiratory Curve (Bottom)</h4>
              <p className="text-sm text-muted-foreground">
                Negative flow values representing forced inspiration from RV to TLC
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Loop Visualizer */}
      <Card className="border-primary/50">
        <CardHeader>
          <CardTitle>Interactive Loop Visualizer</CardTitle>
          <CardDescription>Select different patterns to see how the loop shape changes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Select
            label="Select Loop Pattern"
            value={selectedPattern}
            onChange={(e) => setSelectedPattern(e.target.value as LoopPattern)}
            options={[
              { value: 'normal', label: 'Normal' },
              { value: 'obstructive', label: 'Obstructive (Asthma/COPD)' },
              { value: 'restrictive', label: 'Restrictive (ILD)' },
              { value: 'fixed', label: 'Fixed Upper Airway Obstruction' },
              { value: 'variable-intra', label: 'Variable Intrathoracic Obstruction' },
              { value: 'variable-extra', label: 'Variable Extrathoracic Obstruction' },
            ]}
          />

          {/* Pattern Information */}
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">{patternInfo.name}</h3>
              <Badge variant={patternInfo.color as any}>{patternInfo.meaning}</Badge>
            </div>
            <p className="text-sm text-muted-foreground">{patternInfo.description}</p>
            <div>
              <span className="text-sm font-medium">Examples: </span>
              <span className="text-sm text-muted-foreground">{patternInfo.examples.join(', ')}</span>
            </div>
          </div>

          {/* Flow-Volume Loop Chart */}
          <div className="h-96 bg-secondary/30 rounded-lg p-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={loopData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis
                  dataKey="volume"
                  label={{ value: 'Volume (L)', position: 'insideBottom', offset: -5 }}
                  className="text-xs"
                />
                <YAxis
                  label={{ value: 'Flow (L/s)', angle: -90, position: 'insideLeft' }}
                  className="text-xs"
                  domain={[-8, 10]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                  formatter={(value: any) => [`${value.toFixed(2)} L/s`, 'Flow']}
                  labelFormatter={(label) => `Volume: ${parseFloat(label).toFixed(2)} L`}
                />
                <ReferenceLine y={0} stroke="hsl(var(--muted-foreground))" strokeDasharray="3 3" />
                <Line
                  type="monotone"
                  dataKey="flow"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={false}
                  isAnimationActive={true}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-start space-x-2 text-sm text-muted-foreground">
            <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <p>
              The curve above represents a typical {patternInfo.name.toLowerCase()} pattern.
              Notice the shape changes in both expiratory (top) and inspiratory (bottom) portions.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Pattern Recognition Guide */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Pattern Recognition Guide</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {Object.entries(loopPatterns).map(([key, pattern]) => (
              <div
                key={key}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedPattern === key
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => setSelectedPattern(key as LoopPattern)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{pattern.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{pattern.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {pattern.examples.map((example) => (
                        <Badge key={example} variant="default">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Badge variant={pattern.color as any} className="ml-3">
                    {key}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Clinical Pearls */}
      <Card className="border-pink-500/50 bg-pink-500/5">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Info className="h-5 w-5 text-pink-500" />
            <CardTitle>Clinical Pearls</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
            <li><strong>Obstructive pattern:</strong> Look for "scooping" or concavity in the expiratory curve</li>
            <li><strong>Restrictive pattern:</strong> The loop is narrow and tall, maintaining normal shape but reduced volume</li>
            <li><strong>Fixed obstruction:</strong> Both inspiratory and expiratory curves are flattened (plateau)</li>
            <li><strong>Variable intrathoracic:</strong> Expiratory flow limited (collapse during expiration), inspiratory normal</li>
            <li><strong>Variable extrathoracic:</strong> Inspiratory flow limited (collapse during inspiration), expiratory normal</li>
            <li><strong>Remember:</strong> Intrathoracic structures collapse during expiration, extrathoracic during inspiration</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
