'use client'
import Projects from '@/components/projects'
import { useTranslation } from '@/hooks/useTranslation'
import { motion } from 'framer-motion'

import Image from 'next/image'

const textVariants = {
	hidden: { opacity: 0, y: 50 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: 'easeOut',
		},
	},
}

const imageVariants = {
	hidden: { opacity: 0, y: -50 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: 'easeOut',
			delay: 0.2,
		},
	},
}

export default function Portfoliopage() {
	const t = useTranslation()
	return (
		<div>
			<div className='py-10 flex items-center justify-center'>
				<div className='container w-10/12 mx-auto px-4 py-16'>
					<div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10'>
						<motion.div
							className='space-y-4'
							variants={textVariants}
							initial='hidden'
							whileInView='show'
							viewport={{ once: true, amount: 0.3 }}
						>
							<h1 className='text-5xl md:text-6xl font-bold font-[Inter] text-white'>
								{t.portfolio11.title1}
							</h1>
							<h2 className='text-4xl md:text-5xl font-bold text-white font-[Inter]'>
								{t.portfolio11.title2}
							</h2>
							<h2 className='text-4xl md:text-5xl font-bold text-[#7c3aed] font-[Inter]'>
								{t.portfolio11.title3}
							</h2>
							<h2 className='text-4xl md:text-5xl font-bold text-white font-[Inter]'>
								{t.portfolio11.title4}
							</h2>
						</motion.div>

						<motion.div
							className='relative lg:h-[500px] w-80 h-80 lg:w-full grid grid-cols-6 grid-rows-6 gap-4'
							variants={imageVariants}
							initial='hidden'
							whileInView='show'
							viewport={{ once: true, amount: 0.3 }}
						>
							<Image
								src={'/portfolio1.png'}
								alt='Portfolio'
								fill
								className='object-cover col-span-6 row-span-6 rounded-lg shadow-lg'
							/>
						</motion.div>
					</div>
				</div>
			</div>

			<Projects />
		</div>
	)
}
