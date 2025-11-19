import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Asthma from './pages/Asthma'
import COPD from './pages/COPD'
import ACO from './pages/ACO'
import PFT from './pages/PFT'
import FlowLoops from './pages/FlowLoops'
import Differentials from './pages/Differentials'
import Pharmacology from './pages/Pharmacology'
import Emergency from './pages/Emergency'
import Cases from './pages/Cases'
import Assessment from './pages/Assessment'
import Glossary from './pages/Glossary'
import Settings from './pages/Settings'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="asthma" element={<Asthma />} />
          <Route path="copd" element={<COPD />} />
          <Route path="aco" element={<ACO />} />
          <Route path="pft" element={<PFT />} />
          <Route path="flow-loops" element={<FlowLoops />} />
          <Route path="differentials" element={<Differentials />} />
          <Route path="pharmacology" element={<Pharmacology />} />
          <Route path="emergency" element={<Emergency />} />
          <Route path="cases" element={<Cases />} />
          <Route path="assessment" element={<Assessment />} />
          <Route path="glossary" element={<Glossary />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  )
}
