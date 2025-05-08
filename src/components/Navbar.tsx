'use client'
import { useTranslation } from '@/hooks/useTranslation'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { LanguageSwitcher } from './Language'
import Sidebar from './Sidebar'

const Navbar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
	const [isAnimating, setIsAnimating] = useState<boolean>(false)
	const t = useTranslation()

	useEffect(() => {
		if (!isMenuOpen) {
			setIsAnimating(true)
			const timer = setTimeout(() => setIsAnimating(false), 3000)
			return () => clearTimeout(timer)
		}
	}, [isMenuOpen])

	const router = useRouter()
	const pathname = usePathname()

	const handleScrollToFooter = () => {
		if (pathname !== '/') {
			router.push('/#footer')
		} else {
			const footer = document.getElementById('footer')
			if (footer) {
				footer.scrollIntoView({ behavior: 'smooth' })
			}
		}
		if (pathname == '/service') {
			router.push('/service#footer')
		} else {
			const footer = document.getElementById('footer')
			if (footer) {
				footer.scrollIntoView({ behavior: 'smooth' })
			}
		}
		if (pathname == '/portfolio') {
			router.push('/portfolio#footer')
		} else {
			const footer = document.getElementById('footer')
			if (footer) {
				footer.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}

	return (
		<div>
			<div className='bg-[#180e28f9] w-auto h-20  rounded-md border-[0.5px] border-white/20 fixed inset-0 z-30 backdrop-blur-md'>
				<div className='container w-10/12 mx-auto h-full flex items-center justify-between'>
					<Link href='/' className='flex items-center gap-1'>
						<Image
							src='/logo.svg'
							width={150}
							height={120}
							alt='logo'
						/>
					</Link>

					<ul className='hidden md:flex gap-3'>
						<Link
							href='/'
							className='relative text-[16px] px-4 py-2 cursor-pointer font-[Inter] text-white font-semibold rounded-md border-none hover:bg-white/10 shadow-lg overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:rounded-md before:border before:border-gray-400 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100'
						>
							{t.home}
						</Link>
						<Link
							href='/portfolio'
							className='relative text-[16px] px-4 py-2 cursor-pointer font-[Inter] text-white font-semibold rounded-md border-none hover:bg-white/10 shadow-lg overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:rounded-md before:border before:border-gray-400 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100'
						>
							{t.portfolio}
						</Link>
						<Link
							href='/service'
							className='relative text-[16px] px-4 py-2 cursor-pointer font-[Inter] text-white font-semibold rounded-md border-none hover:bg-white/10 shadow-lg overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:rounded-md before:border before:border-gray-400 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100'
						>
							{t.services}
						</Link>
						<li
							onClick={handleScrollToFooter}
							className='relative text-[16px] px-4 py-2 cursor-pointer font-[Inter] text-white font-semibold rounded-md border-none hover:bg-white/10 shadow-lg overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:rounded-md before:border before:border-gray-400 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100'
						>
							{t.contact}
						</li>
					</ul>

					<div className='flex items-center gap-3'>
						<div className='hidden md:flex'>
							<LanguageSwitcher />
						</div>
						<div className='md:hidden flex gap-3'>
							<Menu
								className='text-xl cursor-pointer text-white'
								onClick={() => setIsMenuOpen(!isMenuOpen)}
							/>
						</div>
						<button className='hidden md:block px-4 py-2 backdrop-blur-xs bg-white/10 text-white font-[Inter] text-[16px] font-semibold rounded-xl border border-gray-500 shadow-lg transition cursor-pointer relative overflow-hidden hover:border-gray-300 before:absolute before:inset-0 before:border before:border-gray-400 before:rounded-xl before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100'>
							{t.project}
						</button>
					</div>
				</div>
			</div>

			{(isMenuOpen || isAnimating) && (
				<div
					className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ease-in-out ${
						isMenuOpen
							? 'opacity-100 visible'
							: 'opacity-0 invisible'
					}`}
					onClick={() => setIsMenuOpen(false)}
				>
					<div
						className={`fixed inset-y-0 left-0 z-50 w-72 p-5 shadow-lg border-r border-gray-300 bg-white transform transition-transform duration-600 ease-in-out ${
							isMenuOpen ? 'translate-x-0' : '-translate-x-full'
						}`}
					>
						<Sidebar
							isOpen={isMenuOpen}
							onClose={() => setIsMenuOpen(false)}
						/>
					</div>
				</div>
			)}

			<style jsx>{`
				.nav-item {
					@apply relative text-[16px] px-4 py-2 cursor-pointer font-[Inter] text-white font-semibold rounded-md border-none hover:bg-white/10 shadow-lg overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:rounded-md before:border before:border-gray-400 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100;
				}
			`}</style>
		</div>
	)
}

export default Navbar
