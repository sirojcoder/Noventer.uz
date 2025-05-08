'use client'
import { useTranslation } from '@/hooks/useTranslation'
import { motion } from 'framer-motion'
import {
	BriefcaseBusiness,
	CalendarCog,
	FileSpreadsheet,
	FileText,
	GraduationCap,
	Images,
	MoveUpRight,
	ShoppingCart,
	Users,
} from 'lucide-react'

const icons = [
	FileSpreadsheet,
	BriefcaseBusiness,
	ShoppingCart,
	Users,
	Images,
	FileText,
	GraduationCap,
	CalendarCog,
	MoveUpRight,
]

const containerVariants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.15,
		},
	},
}

const cardVariants = {
	hidden: { opacity: 0, y: 50 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: 'easeOut',
		},
	},
}

const Services = () => {
	const t = useTranslation()
	const services = t.services_list.items.map((item, index) => ({
		...item,
		icon: icons[index],
	}))

	return (
		<div className='py-10 '>
			<div className='container w-10/12 mx-auto'>
				<div className='flex flex-col gap-10'>
					<h3 className='text-center font-[Inter] text-white text-[40px] font-semibold'>
						{t.services_list.title}
						<p className='text-white font-[Inter] text-[18px] font-normal mt-2'>
							{t.services_list.subtitle}
						</p>
					</h3>

					<motion.div
						className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center place-items-center gap-6'
						variants={containerVariants}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, amount: 0.2 }}
					>
						{services.map(({ title, desc, icon: Icon }, index) => {
							return (
								<motion.div
									key={index}
									variants={cardVariants}
									className={`cursor-pointer w-90 h-92 rounded-[16px] backdrop-blur-xs 
										bg-white/10 hover:bg-[#5A00DB]
										text-white font-[Inter] text-[16px] font-semibold  
										border border-gray-500 shadow-lg transition relative overflow-hidden 
										hover:border-gray-300 
										before:absolute before:inset-0 before:border before:border-gray-400 
										before:rounded-md before:opacity-0 before:transition-opacity 
										before:duration-500 hover:before:opacity-100 
										flex flex-col items-center z-10 p-5 gap-4`}
								>
									<div className='w-40 h-40 border border-black/20 shadow-sm rounded-2xl backdrop-blur-xl flex items-center justify-center bg-white/5'>
										<Icon
											size={70}
											className='text-white'
										/>
									</div>
									<p className='text-center text-[25px] font-semibold font-[Inter] text-white'>
										{title}
									</p>
									<p className='text-center text-[16px] font-[Inter] text-white'>
										{desc}
									</p>
								</motion.div>
							)
						})}
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default Services
