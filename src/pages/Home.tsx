import { Link } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import {
  Wind,
  Activity,
  GitBranch,
  LineChart,
  Eye,
  Layers,
  Pill,
  AlertCircle,
  FileText,
  ClipboardList,
  BookOpen,
} from 'lucide-react'

const modules = [
  {
    title: 'Asthma',
    description: 'Learn about pathophysiology, diagnosis, severity classification, and stepwise management',
    icon: Wind,
    href: '/asthma',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    title: 'COPD',
    description: 'Master GOLD classifications, pharmacologic management, and exacerbation protocols',
    icon: Activity,
    href: '/copd',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    title: 'Asthma-COPD Overlap (ACO)',
    description: 'Differentiate asthma from COPD and understand overlap syndrome',
    icon: GitBranch,
    href: '/aco',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    title: 'PFT Interpretation',
    description: 'Interpret spirometry results and classify obstructive, restrictive, and mixed patterns',
    icon: LineChart,
    href: '/pft',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    title: 'Flow-Volume Loops',
    description: 'Master visual pattern recognition of flow-volume loop abnormalities',
    icon: Eye,
    href: '/flow-loops',
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
  },
  {
    title: 'Differentials',
    description: 'Explore common differentials including VCD, CHF, ILD, and upper airway obstruction',
    icon: Layers,
    href: '/differentials',
    color: 'text-teal-500',
    bgColor: 'bg-teal-500/10',
  },
  {
    title: 'Pharmacology',
    description: 'Understand SABA, LABA, ICS, and LAMA mechanisms and adverse effects',
    icon: Pill,
    href: '/pharmacology',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
  },
  {
    title: 'Emergency Care',
    description: 'Practice acute exacerbation algorithms and escalation pathways',
    icon: AlertCircle,
    href: '/emergency',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
  },
  {
    title: 'Clinical Cases',
    description: 'Apply your knowledge to realistic clinical scenarios',
    icon: FileText,
    href: '/cases',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10',
  },
  {
    title: 'Assessment',
    description: 'Test your knowledge with MCQs, PFT calculations, and loop identification',
    icon: ClipboardList,
    href: '/assessment',
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10',
  },
  {
    title: 'Glossary',
    description: 'Quick reference for terms, definitions, and key concepts',
    icon: BookOpen,
    href: '/glossary',
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
  },
]

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Pulmonologic Master
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Master asthma, COPD, pulmonary function testing, and flow-volume loop interpretation through
          interactive, evidence-based modules
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <div className="flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-lg">
            <Wind className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Mobile-First</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-lg">
            <Activity className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Interactive Learning</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-lg">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Evidence-Based</span>
          </div>
        </div>
      </div>

      {/* Modules Grid */}
      <div id="modules" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-6">Learning Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => {
            const Icon = module.icon
            return (
              <Link
                key={module.title}
                to={module.href}
                className="group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Card hover className="h-full">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${module.bgColor} flex items-center justify-center mb-3`}>
                      <Icon className={`h-6 w-6 ${module.color}`} />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {module.title}
                    </CardTitle>
                    <CardDescription>{module.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <p className="text-4xl font-bold text-primary">11</p>
              <p className="text-sm text-muted-foreground">Learning Modules</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <p className="text-4xl font-bold text-primary">100+</p>
              <p className="text-sm text-muted-foreground">Clinical Scenarios</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <p className="text-4xl font-bold text-primary">∞</p>
              <p className="text-sm text-muted-foreground">Practice Questions</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Disclaimer */}
      <Card className="border-yellow-500/50 bg-yellow-500/5">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
            <div className="space-y-1">
              <p className="font-semibold text-yellow-600 dark:text-yellow-400">Educational Purpose Only</p>
              <p className="text-sm text-muted-foreground">
                This app is designed for educational purposes and should not be used for clinical decision-making.
                All data is synthetic and conceptually aligned with GINA, GOLD, and ATS/ERS guidelines.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
