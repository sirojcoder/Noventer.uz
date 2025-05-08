'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { motion } from 'framer-motion'
import Image from 'next/image'

const containerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
		},
	},
}
type ProjectItem = {
	title: string
	desc: string
	img?: string
	reverse?: boolean
}
const itemVariants = {
	hidden: { opacity: 0, y: 40 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: 'easeOut' },
	},
}

const Projects = () => {
	const { projects: tProjects } = useTranslation()
	const projects = tProjects.items

	return (
		<div>
			<div className='container mx-auto w-10/12'>
				<h2 className='text-white text-4xl font-bold text-center mb-2 font-[Inter]'>
					{tProjects.title}
				</h2>
				<p className='text-white text-center text-lg mb-12 font-[Inter]'>
					{tProjects.subtitle}
				</p>

				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true, amount: 0.2 }}
				>
					{projects.map((project: ProjectItem, index: number) => (
						<motion.div
							variants={itemVariants}
							key={index}
							className={`flex flex-col md:flex-row ${
								index % 2 !== 0 ? 'md:flex-row-reverse' : ''
							} items-center gap-6 mb-16`}
						>
							<div className='md:w-1/2 w-full'>
								<Image
									src={`/project${
										index === 0 ? '' : index
									}.png`}
									alt={project.title}
									width={800}
									height={300}
									className='rounded-xl shadow-lg object-cover h-[400px]'
								/>
							</div>

							<div className='md:w-1/2 w-full flex flex-col gap-4'>
								<h3 className='font-[Inter] text-white text-2xl md:text-3xl font-bold'>
									{project.title}
								</h3>
								<p className='font-[Inter] text-white text-base md:text-lg'>
									{project.desc}
								</p>
								<button className='w-fit px-5 py-3 font-[Inter] bg-white/10 text-white border border-gray-500 hover:border-gray-300 rounded-xl shadow-md transition'>
									{tProjects.button_view}
								</button>
							</div>
						</motion.div>
					))}
				</motion.div>

				<div className='flex justify-center mt-10'>
					<button className='w-full md:w-80 h-12 bg-[#5A00DB] text-white text-lg font-medium rounded-xl font-[Inter] cursor-pointer'>
						{tProjects.button_more}
					</button>
				</div>
			</div>
		</div>
	)
}

export default Projects
