'use client'

import { Button } from '@/components/Style/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/Style/dropdown-menu'
import { useLanguage } from '@/context/LanguageContext'
import { cn } from '@/lib/utils'
import { Check, ChevronDown } from 'lucide-react'
import Image from 'next/image'

type Language = {
	code: string
	name: string
	flag: string
	nativeName: string
}

const languages: Language[] = [
	{
		code: 'en',
		name: 'English',
		nativeName: 'English',
		flag: '/inglish.webp',
	},
	{
		code: 'uz',
		name: 'Uzbek',
		nativeName: "O'zbek",
		flag: '/uzb.png',
	},
]

export function LanguageSwitcher() {
	const { language, setLanguage } = useLanguage()

	const currentLanguage = languages.find(lang => lang.code === language)!

	const handleLanguageChange = (lang: Language) => {
		setLanguage(lang.code)
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='default'
					className='flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200/20 bg-white/10'
				>
					<Image
						src={currentLanguage.flag}
						alt='til'
						width={30}
						height={30}
					/>
					<span className='font-medium font-[Inter] text-white'>
						{currentLanguage.nativeName}
					</span>
					<ChevronDown className='h-4 w-4 text-gray-500' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end' className='w-[130px] bg-[#0E041D]'>
				{languages.map(lang => (
					<DropdownMenuItem
						key={lang.code}
						className={cn(
							'flex items-center gap-2 px-3 py-2 cursor-pointer',
							language === lang.code && 'bg-white/10'
						)}
						onClick={() => handleLanguageChange(lang)}
					>
						<Image
							src={lang.flag}
							alt='til'
							width={20}
							height={20}
						/>
						<span className='font-medium text-white font-[Inter]'>
							{lang.nativeName}
						</span>
						{language === lang.code && (
							<Check className='h-4 w-4 ml-auto' />
						)}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
