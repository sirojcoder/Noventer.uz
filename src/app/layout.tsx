
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { LanguageProvider } from '@/context/LanguageContext'
import { Metadata } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import './globals.css'
import Bactop from '@/components/Bactop'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})
const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Noventer',
	icons: { icon: '/favcion.svg' },
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html>
			<LanguageProvider>
				<BodyWrapper>{children}</BodyWrapper>
			</LanguageProvider>
		</html>
	)
}

function BodyWrapper({ children }: { children: React.ReactNode }) {
	return (
		<body
			className={`bg-[#0E041D] ${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
		>
			<NextTopLoader />
			<Navbar />
			{children}
			<div id='footer'>
				<Footer />
				<Bactop />
			</div>
		</body>
	)
}
