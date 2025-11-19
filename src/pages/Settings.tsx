import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { useThemeStore } from '@/store/themeStore'
import { Moon, Sun, Info, AlertTriangle, Shield } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function Settings() {
  const { theme, toggleTheme } = useThemeStore()

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">Customize your learning experience</p>
      </div>

      {/* Theme Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>Customize the visual theme of the application</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {theme === 'dark' ? (
                <Moon className="h-5 w-5 text-primary" />
              ) : (
                <Sun className="h-5 w-5 text-primary" />
              )}
              <div>
                <p className="font-medium">Theme</p>
                <p className="text-sm text-muted-foreground">
                  Current: {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                </p>
              </div>
            </div>
            <Button onClick={toggleTheme} variant="outline">
              Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* About Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Info className="h-5 w-5 text-primary" />
            <CardTitle>About Pulmonologic Master</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Mission</h3>
            <p className="text-sm text-muted-foreground">
              Pulmonologic Master is an educational platform designed to help medical students, residents,
              respiratory therapists, and healthcare professionals master respiratory medicine through
              interactive, evidence-based learning modules.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Features</h3>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Comprehensive coverage of asthma and COPD management</li>
              <li>Interactive PFT interpretation tools</li>
              <li>Flow-volume loop visual training</li>
              <li>Clinical case scenarios for practical application</li>
              <li>Assessment tools for self-evaluation</li>
              <li>Mobile-first, offline-capable design</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Guidelines Alignment</h3>
            <p className="text-sm text-muted-foreground">
              This app is conceptually aligned with:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside mt-2">
              <li>GINA (Global Initiative for Asthma) guidelines</li>
              <li>GOLD (Global Initiative for Chronic Obstructive Lung Disease) guidelines</li>
              <li>ATS/ERS (American Thoracic Society / European Respiratory Society) standards</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Version</h3>
            <p className="text-sm text-muted-foreground">Version 1.0.0 - 2024</p>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimers */}
      <Card className="border-yellow-500/50 bg-yellow-500/5">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            <CardTitle className="text-yellow-600 dark:text-yellow-400">Important Disclaimers</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2 text-yellow-600 dark:text-yellow-400">
              Educational Purpose Only
            </h3>
            <p className="text-sm text-muted-foreground">
              This application is designed solely for educational purposes. It should NOT be used for clinical
              decision-making, diagnosis, or treatment of patients. Always consult current clinical guidelines,
              supervising physicians, and appropriate medical literature for patient care decisions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-yellow-600 dark:text-yellow-400">
              Synthetic Data
            </h3>
            <p className="text-sm text-muted-foreground">
              All patient cases, scenarios, and examples in this app use synthetic data and do not represent
              real patients or protected health information (PHI). Any resemblance to actual patients is
              purely coincidental.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-yellow-600 dark:text-yellow-400">
              No Warranty
            </h3>
            <p className="text-sm text-muted-foreground">
              While we strive for accuracy and alignment with current guidelines, this app is provided "as is"
              without warranty of any kind. The creators are not liable for any errors, omissions, or outcomes
              resulting from the use of this educational tool.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-yellow-600 dark:text-yellow-400">
              Medical Advice Disclaimer
            </h3>
            <p className="text-sm text-muted-foreground">
              The information provided in this app does not constitute medical advice. Users should seek
              appropriate medical care and consultation from qualified healthcare providers for all health
              conditions and concerns.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Privacy & Security */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-primary" />
            <CardTitle>Privacy & Security</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Data Storage</h3>
            <p className="text-sm text-muted-foreground">
              This app stores only your theme preference locally on your device. No personal data,
              assessment results, or usage information is collected, transmitted, or stored on external servers.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Offline Capability</h3>
            <p className="text-sm text-muted-foreground">
              Pulmonologic Master is designed to work offline once loaded. All educational content and
              interactive tools function without an internet connection.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">No Account Required</h3>
            <p className="text-sm text-muted-foreground">
              No user account, registration, or login is required. The app is freely accessible to all users
              for educational purposes.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
