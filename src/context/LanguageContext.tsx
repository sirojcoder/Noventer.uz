'use client'
import { createContext, useContext, useEffect, useState } from 'react'

type LanguageContextType = {
	language: string
	setLanguage: (lang: string) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined
)

export const LanguageProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const [language, setLanguageState] = useState('uz')

	useEffect(() => {
		const savedLanguage = localStorage.getItem('lang')
		if (savedLanguage) {
			setLanguageState(savedLanguage)
		}
	}, [])

	const setLanguage = (lang: string) => {
		setLanguageState(lang)
		localStorage.setItem('lang', lang)
	}

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	)
}

export const useLanguage = () => {
	const context = useContext(LanguageContext)
	if (!context)
		throw new Error('useLanguage must be used within LanguageProvider')
	return context
}
