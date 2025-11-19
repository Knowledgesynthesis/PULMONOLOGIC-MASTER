import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPercentage(value: number, decimals: number = 0): string {
  return `${value.toFixed(decimals)}%`
}

export function calculatePercentChange(pre: number, post: number): number {
  if (pre === 0) return 0
  return ((post - pre) / pre) * 100
}

export function interpretBronchodilatorResponse(percentChange: number, absoluteChange: number): string {
  if (percentChange >= 12 && absoluteChange >= 0.2) {
    return 'Significant bronchodilator response (≥12% and ≥200 mL)'
  }
  return 'Minimal or no bronchodilator response'
}

export function classifyPFT(fev1: number, fvc: number): {
  pattern: string
  ratio: number
  interpretation: string
} {
  const ratio = fev1 / fvc

  if (ratio < 0.70) {
    return {
      pattern: 'Obstructive',
      ratio,
      interpretation: 'FEV1/FVC < 0.70 indicates obstructive defect. Consider asthma, COPD, bronchiectasis.'
    }
  }

  if (fvc < 80 && ratio >= 0.70) {
    return {
      pattern: 'Restrictive',
      ratio,
      interpretation: 'Reduced FVC with preserved ratio suggests restrictive pattern. Confirm with TLC measurement.'
    }
  }

  return {
    pattern: 'Normal',
    ratio,
    interpretation: 'FEV1/FVC ≥ 0.70 with normal volumes.'
  }
}

export function classifyGOLD(fev1Percent: number): {
  stage: string
  description: string
} {
  if (fev1Percent >= 80) {
    return { stage: 'GOLD 1', description: 'Mild - FEV1 ≥ 80% predicted' }
  }
  if (fev1Percent >= 50) {
    return { stage: 'GOLD 2', description: 'Moderate - 50% ≤ FEV1 < 80% predicted' }
  }
  if (fev1Percent >= 30) {
    return { stage: 'GOLD 3', description: 'Severe - 30% ≤ FEV1 < 50% predicted' }
  }
  return { stage: 'GOLD 4', description: 'Very Severe - FEV1 < 30% predicted' }
}

export function classifyAsthmaSeverity(
  daySymptoms: string,
  nightSymptoms: string,
  _sabaUse: string,
  limitation: string
): string {
  if (daySymptoms === 'none' && nightSymptoms === 'none') {
    return 'Intermittent'
  }

  if (daySymptoms === 'daily' || nightSymptoms === 'weekly' || limitation === 'extremely') {
    return 'Severe Persistent'
  }

  if (daySymptoms === 'daily' || nightSymptoms === 'monthly') {
    return 'Moderate Persistent'
  }

  return 'Mild Persistent'
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }

    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
