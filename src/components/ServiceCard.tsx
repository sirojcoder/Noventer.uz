import { useTranslation } from '@/hooks/useTranslation'
import Image from 'next/image'

const ServiceCard = () => {
	const { services_list1 } = useTranslation()

	return (
		<div className='container w-10/12 mx-auto py-16 flex flex-col gap-10'>
			{services_list1.items.map((item, index) => (
				<div
					key={index}
					className='rounded-[16px] border overflow-hidden border-white/70 bg-white/7 backdrop-blur-xl flex flex-col lg:flex-row-reverse'
				>
					<div className='w-full lg:w-1/3 h-64 lg:h-auto bg-gray-100 flex items-center justify-center'>
						<div className='relative w-full h-full'>
							<Image
								fill
								src='/servicecardimg.png'
								alt={`${item.title} preview`}
								className='object-cover w-full h-full'
							/>
						</div>
					</div>

					<div className='text-white p-8 md:p-12 w-full lg:w-2/3'>
						<h1 className='text-3xl md:text-4xl font-bold mb-6 font-[Inter]'>
							{item.title}
						</h1>
						<p className='text-gray-300 mb-6 font-[Inter]'>
							{item.desc}
						</p>

						<div className='space-y-8'>
							{item.features.map((feature, idx) => (
								<div
									key={idx}
									className='flex items-start gap-3'
								>
									<div className='w-6 h-6 mt-1 bg-white rounded-md flex-shrink-0'></div>
									<div>
										<h3 className='text-xl font-semibold mb-2 font-[Inter]'>
											{feature.title}
										</h3>
										<p className='text-gray-300 font-[Inter]'>
											{feature.desc}
										</p>
									</div>
								</div>
							))}
						</div>

						<div className='mt-10 space-y-2'>
							{item.details.map((detail, idx) => (
								<p
									key={idx}
									className='text-gray-300 font-[Inter]'
								>
									{detail}
								</p>
							))}
						</div>

						<button className='w-45 h-14  mt-8 lg:p-4 p-1 backdrop-blur-xs bg-white/10 text-white font-[Inter] text-[16px] font-semibold rounded-xl border border-gray-500 shadow-lg transition cursor-pointer relative overflow-hidden hover:border-gray-300 before:absolute before:inset-0 before:border before:border-gray-400 before:rounded-xl before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100'>
							{item.button}
						</button>
					</div>
				</div>
			))}
		</div>
	)
}

export default ServiceCard
