import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ThemeStore {
  theme: 'light' | 'dark'
  toggleTheme: () => void
  setTheme: (theme: 'light' | 'dark') => void
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'dark',
      toggleTheme: () =>
        set((state) => {
          const newTheme = state.theme === 'light' ? 'dark' : 'light'
          updateDocumentTheme(newTheme)
          return { theme: newTheme }
        }),
      setTheme: (theme) => {
        updateDocumentTheme(theme)
        set({ theme })
      },
    }),
    {
      name: 'pulmonologic-theme',
      onRehydrateStorage: () => (state) => {
        if (state) {
          updateDocumentTheme(state.theme)
        }
      },
    }
  )
)

function updateDocumentTheme(theme: 'light' | 'dark') {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// Initialize theme on load
if (typeof window !== 'undefined') {
  const stored = localStorage.getItem('pulmonologic-theme')
  if (stored) {
    try {
      const { state } = JSON.parse(stored)
      updateDocumentTheme(state.theme)
    } catch (e) {
      updateDocumentTheme('dark')
    }
  } else {
    updateDocumentTheme('dark')
  }
}
