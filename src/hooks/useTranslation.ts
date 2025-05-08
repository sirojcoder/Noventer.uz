import { useLanguage } from '@/context/LanguageContext'

const translations = {
	en: {
		close: 'Close',
		home: 'Home',
		portfolio: 'Portfolio',
		services: 'Services',
		contact: 'Contact',
		project: 'Have a project?',
		header_title_1: 'High-quality',
		header_title_2: 'based on precision',
		header_title_3: 'any type of',
		header_title_4: 'software we develop',
		about_services: 'About Services',
		experience_years: 'Years of Experience',
		big_projects: 'Large Projects',
		service_types: 'Service Types',
		security: 'Security',
		services_list1: {
			title: 'Service Types',
			subtitle:
				'The most in-demand services in the software development field include:',
			items: [
				{
					title: 'Landing Pages',
					desc: 'Short, impactful, and goal-driven pages designed to prompt specific customer actions.',
					features: [
						{
							title: 'Short and impactful',
							desc: 'Provides important information that interests the customer at first glance and encourages them to take the next step.',
						},
						{
							title: 'Goal-oriented',
							desc: 'Directed at a specific purpose, designed to prompt the customer to take specific actions.',
						},
						{
							title: 'Fast loading',
							desc: "Loads as quickly as possible to avoid testing customers' patience.",
						},
					],
					details: [
						'Technical task preparation: 1 day',
						'Number of site pages: 1 (each page consists of a minimum of 5 sections)',
						'Web Design: 10-15 hours of work',
						'Site completion timeline: 7-14 days',
						'Price: $400 - $700',
					],
					button: 'Order now',
				},
				{
					title: 'Catalog Pages',
					desc: 'Provides product listings with details, filters, and easy navigation for customers.',
					features: [
						{
							title: 'Product descriptions',
							desc: 'Each product comes with detailed descriptions, characteristics, advantages, and images.',
						},
						{
							title: 'Various filters',
							desc: 'Various filters and sorting options are provided to make customer search easier.',
						},
						{
							title: 'Navigation',
							desc: 'A convenient navigation system created for easy and intuitive movement throughout the catalog.',
						},
					],
					details: [
						'Technical task preparation: 1 day',
						'Number of site pages: 1 (each page consists of a minimum of 5 sections)',
						'Web Design: 10-15 hours of work. Price: $100',
						'Site completion timeline: 7-14 days',
						'Price: $400 - $700',
					],
					button: 'Order now',
				},
				{
					title: 'eCommerce Pages',
					desc: 'Sell products or services online, includes payment and inventory management systems.',
					features: [
						{
							title: 'Online sales',
							desc: 'Gives customers the ability to purchase products directly online.',
						},
						{
							title: 'Secure payment',
							desc: 'Supports various secure payment methods.',
						},
						{
							title: 'Delivery',
							desc: 'Provides fast and convenient delivery service to customers.',
						},
					],
					details: [
						'Technical task preparation: 3-4 days',
						'Number of site pages: each page consists of a minimum of 5 sections',
						'Web Design: 7-10 days of work. Price: $200-300',
						'Site completion timeline: 40-60 days',
						'Price: $1000+',
					],
					button: 'Order now',
				},
				{
					title: 'CRM System',
					desc: 'Automates and manages customer interactions, ideal for organizations with active customer relationships.',
					features: [
						{
							title: 'Customer information',
							desc: 'Designed to collect and store important information about customers.',
						},
						{
							title: 'Customer communication',
							desc: 'Enables effective communication with customers and provides support.',
						},
						{
							title: 'Analytics',
							desc: 'Helps analyze collected customer data and make decisions.',
						},
					],
					details: [
						'Technical task preparation: 5-10 days',
						'Number of site pages: 10 or more',
						'Web Design: 7-10 days of work. Price: $300-500',
						'Site completion timeline: 60-80 days',
						'Price: $3000+',
					],
					button: 'Order now',
				},
			],
		},
		service: {
			title1: 'Each type of service',
			title2: 'for every client',
			title3: 'is uniquely important',
			title4: 'in our approach!',
		},
		portfolio11: {
			title1: 'Throughout our experience',
			title2: 'of various sizes',
			title3: 'IT projects',
			title4: 'we were able to launch them!',
		},

		footer: {
			title: 'Contact Us',
			subtitle: 'Let`s talk about how to bring your project to life.',
			team_title: 'About Our Team',
			consult_title: 'Free Consultation',
			consult_subtitle:
				'Leave your information for an initial free consultation on your project.',
			name_placeholder: 'Your Name',
			phone_placeholder: 'Phone Number',
			submit_button: 'Submit',
		},
		services_list: {
			title: 'Service Types',
			subtitle:
				'The most in-demand services in the software development field include:',
			items: [
				{
					title: 'Landing Pages',
					desc: 'Short, impactful, and goal-driven pages designed to prompt specific customer actions.',
				},
				{
					title: 'Corporate Website',
					desc: 'Provides general information about the company and its products or services.',
				},
				{
					title: 'Online Store',
					desc: 'Sell products or services online, includes payment and inventory management systems.',
				},
				{
					title: 'CRM System',
					desc: 'Automates and manages customer interactions, ideal for organizations with active customer relationships.',
				},
				{
					title: 'Portfolio Websites',
					desc: 'Showcase individual or company work—perfect for freelancers or creatives.',
				},
				{
					title: 'Blog Pages',
					desc: 'Share thoughts, updates, or information. Great for engaging an audience or promoting content.',
				},
				{
					title: 'Educational Platform',
					desc: 'For educational courses, video lessons, or online tests. Ideal for institutions or e-learning providers.',
				},
				{
					title: 'ERP Platform',
					desc: 'An all-in-one software system to integrate all enterprise operations.',
				},
				{
					title: 'Have a unique project?',
					desc: 'We help launch and develop new startup projects from scratch.',
				},
			],
		},
		about: {
			title: 'About Us',
			subtitle: 'Brief Information',
			cards: [
				{
					title: 'Getting Started',
					desc: 'We started from --- and set --- as our goals.',
				},
				{
					title: 'Long-Term Projects',
					desc: 'Over time, we completed -- projects in -- period.',
				},
				{
					title: 'Our Team is Growing',
					desc: 'Our team is expanding. We started with - people, now we are -- strong.',
				},
			],
			footer: 'More detailed information goes here. Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
		},
		projects: {
			title: 'Our Projects',
			subtitle: 'Let them speak for us!',
			button_view: 'View Project',
			button_more: 'See More Projects',
			items: [
				{
					title: 'Tourmad Project',
					desc: 'Tourmad is a web platform developed to promote internal tourism in Uzbekistan. It includes services such as hotels, restaurants, guides, drivers for road trips, and many more. Users can explore destinations and pre-order services online.',
				},
				{
					title: 'ProRun Project',
					desc: 'Prorun.uz hosts frequent running competitions. After registering on the site, you can participate in any of the events. It was built to simplify registration for international and local participants.',
				},
				{
					title: 'Xalq Trans Project',
					desc: 'This section provides additional project details. Lorem Ipsum is simply dummy text used in the printing and typesetting industry.',
				},
			],
		},
	},

	uz: {
		close: 'Yopish',
		home: 'Bosh sahifa',
		portfolio: 'Portfolio',
		services: 'Xizmatlar',
		contact: 'Aloqa',
		project: 'Loyiha bormi?',
		header_title_1: 'Yuqori sifatdagi',
		header_title_2: 'aniqlikka asoslanib',
		header_title_3: 'istalgan turdagi',
		header_title_4: 'dasturlarni tayyorlaymiz',
		about_services: 'Xizmatlar haqida',
		experience_years: 'Umumiy tajriba',
		big_projects: 'Yirik loyihalar',
		service_types: 'Xizmat turlari',
		security: 'Xavfsizlik',
		portfolio11: {
			title1: 'Tajribamiz davomida',
			title2: 'turli xil hajmdagi',
			title3: 'IT loyihalarini',
			title4: 'ishga tushira oldik!',
		},
		services_list1: {
			title: 'Xizmat turlari',
			subtitle:
				'Dasturiy ta`minot ishlab chiqish sohasida eng ko`p talab qilinadigan xizmatlar:',
			items: [
				{
					title: 'Landing sahifalar',
					desc: 'Mijozni aniq harakatga undashga mo`ljallangan qisqa, ta`sirchan va maqsadli sahifalar.',
					features: [
						{
							title: "Qisqa va ta'sirli",
							desc: "Mijozni birinchi qarashda qiziqtiradigan va uni keyingi qadamga undaydigan muhim ma'lumotlarni taqdim etadi.",
						},
						{
							title: 'Maqsadli',
							desc: "Aniq maqsadga yo'naltirilgan bo'lib, mijozni maxsus harakatga undashga xizmat qiladi.",
						},
						{
							title: 'Tez yuklanuvchi',
							desc: "Mijozlarning sabr-toqatiga ta'sir qilmaslik uchun iloji boricha tez yuklanadi.",
						},
					],
					details: [
						'Texnik vazifa tayyorlab berish: 1 kun',
						"Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan iborat bo'ladi.)",
						'Veb Dizayn: 10-15 soatlik mehnat.',
						'Saytni tayyor xolga keltirish muddati: 7-14 kun',
						'Narxi: $400 - $700',
					],
					button: 'Buyurtma berish',
				},
				{
					title: 'Katalog sahifalari',
					desc: "Mahsulotlar ro'yxati va tafsilotlari, filtrlari hamda mijozlar uchun qulay navigatsiyani ta'minlaydi.",
					features: [
						{
							title: 'Mahsulotlar tavsifi',
							desc: 'Har bir mahsulotning batafsil tavsifi, xususiyatlari, afzalliklari va rasmlari bilan berilgan.',
						},
						{
							title: 'Turli filtrlar',
							desc: 'Mijozlarning qidirishni osonlashtirish uchun turli xil filtrlar va saralash imkoniyatlari taqdim etiladi.',
						},
						{
							title: 'Navigatsiya',
							desc: 'Katalog boylab oson va intuitiv harakatlanish uchun qulay navigatsiya tizimi yaratilgan.',
						},
					],
					details: [
						'Texnik vazifa tayyorlab berish: 1 kun',
						"Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan iborat bo'ladi.)",
						'Veb Dizayn: 10-15 soatlik mehnat. Narxi: $100',
						'Saytni tayyor xolga keltirish muddati: 7-14 kun',
						'Narxi: $400 - $700',
					],
					button: 'Buyurtma berish',
				},
				{
					title: 'eCommerce Sahifalari',
					desc: "Mahsulot yoki xizmatlarni onlayn sotish, to'lov tizimi va ombor boshqaruvi bilan.",
					features: [
						{
							title: 'Onlayn sotish',
							desc: 'Mijozlarga tovarlarni togridan-togri onlayn sotib olish imkoniyatini beradi.',
						},
						{
							title: "Xavfsiz to'lov",
							desc: "Turli xil xavfsiz to'lov usullarini qo'llab-quvvatlaydi.",
						},
						{
							title: 'Yetkazib berish',
							desc: 'Mijozlarga buyurtmalarni tez va qulay tarzda yetkazib berish xizmatini taqdim etadi.',
						},
					],
					details: [
						'Texnik vazifa tayyorlab berish: 3-4 kun',
						"Sayt sahifalar soni: har bir sahifa minimum 5 ta qismdan iborat bo'ladi.",
						'Veb Dizayn: 7-10 kun mehnat. Narxi: $200-300',
						'Saytni tayyor xolga keltirish muddati: 40-60 kun',
						'Narxi: $1000+',
					],
					button: 'Buyurtma berish',
				},
				{
					title: 'CRM tizimi',
					desc: 'Mijozlar bilan munosabatlarni avtomatlashtirish va boshqarish. Faol mijoz bazasiga ega tashkilotlar uchun.',
					features: [
						{
							title: "Mijozlar ma'lumotlari",
							desc: "Mijozlar haqida muhim ma'lumotlarni to'plash va saqlash uchun mo'ljallangan.",
						},
						{
							title: 'Mijozlar bilan muloqot',
							desc: "Mijozlar bilan samarali aloqa o'rnatish va ularni qo'llab-quvvatlashga imkon beradi.",
						},
						{
							title: 'Tahlil',
							desc: "Mijozlar haqida to'plangan ma'lumotlarni tahlil qilish va qarorlar qabul qilishga yordam beradi.",
						},
					],
					details: [
						'Texnik vazifa tayyorlab berish: 5-10 kun',
						'Sayt sahifalar soni: 10 yoki undan yuqori',
						'Veb Dizayn: 7-10 kun mehnat. Narxi: $300-500',
						'Saytni tayyor xolga keltirish muddati: 60-80 kun',
						'Narxi: $3000+',
					],
					button: 'Buyurtma berish',
				},
			],
		},
		service: {
			title1: 'Har bir xizmat turini',
			title2: 'har bir mijoz uchun',
			title3: 'alohida ahamiyatli',
			title4: 'deb yondoshamiz !',
		},
		footer: {
			title: 'Biz bilan aloqa',
			subtitle:
				'Loyihangizni qanday realizatsiya qilish haqida batafsil suhbatlashamiz',
			team_title: 'Bizning jamoa haqida',
			consult_title: 'Bepul konsultatsiya',
			consult_subtitle:
				'Loyihangiz bo`yicha boshlang`ich bepul konsultatsiya uchun ma`lumotingizni qoldiring.',
			name_placeholder: 'Ismingiz',
			phone_placeholder: 'Telefon raqamingiz',
			submit_button: 'Jo`natish',
		},
		services_list: {
			title: 'Xizmat turlari',
			subtitle:
				'Dasturlash sohasidagi eng talabgir xizmat turlaridan quyidagilar:',
			items: [
				{
					title: 'Landing sahifalar',
					desc: 'Qisqa ta`sirli va maqsadli sahifalar mijozlarni alohida harakatga undash uchun mo`ljallangan',
				},
				{
					title: 'Korporativ veb-sayt',
					desc: 'Kompaniyaning umumiy ma`lumotini taqdim etish, xizmatlar yoki mahsulotlar haqida ma`lumot berish.',
				},
				{
					title: 'Online do`kon',
					desc: 'Mahsulotlar yoki xizmatlarni onlayn tarzda sotish. To`lov tizimlari va mahsulotni boshqarish tizimi mavjud.',
				},
				{
					title: 'CRM tizimi',
					desc: 'Mijozlar bilan ishlashni avtomatlashtirish va boshqarish. Katta kompaniyalar yoki mijozlar bilan faol ishlaydigan tashkilotlar.',
				},
				{
					title: 'Portfolio saytlari',
					desc: 'Shaxsiy yoki kompaniya ishlarini ko`rsatish. Freelancerlar yoki ijodkorlar uchun o`z ishlarini targ`ib qilishda.',
				},
				{
					title: 'Blog sahifalari',
					desc: 'O`z fikrlari, yangiliklari yoki ma`lumotlarini o`rtoqlashish. Ma`lumot yetkazish, auditoriyani jalb qilish va reklama qilish uchun.',
				},
				{
					title: 'Ta`lim platformasi',
					desc: 'Ta`lim kurslari, videodarsliklar, yoki online testlar uchun. O`quv muassasalari yoki onlayn dars beruvchi kompaniyalar uchun.',
				},
				{
					title: 'ERP platformasi',
					desc: 'ERP platformasi korxona yoki tashkilotning barcha jarayonlarini birlashtiruvchi kompleks dasturiy ta`minotdir.',
				},
				{
					title: 'Alohida loyihami ?',
					desc: 'Biz yangi startap loyihalarni ham rivojlantirishda yordam beramiz, shakllantiramiz.',
				},
			],
		},
		about: {
			title: 'Biz haqimizda',
			subtitle: 'Qisqacha ma`lumot',
			cards: [
				{
					title: 'Boshlanishi',
					desc: 'Biz --- dan ish boshladik va ---- larni oldimizga maqsad qilib qo`ydik',
				},
				{
					title: 'Uzoq muddatli loyihalar',
					desc: 'Tajribamiz davomida umumiy hisobda - - loyiha uchun -- - muddatda ishlab topshirdik',
				},
				{
					title: 'Jamoamiz kengaymoqda',
					desc: 'Jamoamiz safi esa tobora kengaymoqda. Boshida - kishidan boshlangan faoliyatimiz hozirda ',
				},
			],
			footer: 'Bu yerda esa yana ko`proq ma`lumotlar berilishi kerak. Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
		},
		projects: {
			title: 'Loyihalarimiz',
			subtitle: 'Biz haqimizda gapirsin!',
			button_view: 'Loyihani ko`rish',
			button_more: 'Boshqa loyihalarni ko`rish',
			items: [
				{
					title: 'Tourmad loyihasi',
					desc: `Tourmad – O'zbekistonning ichki turizimini rivojlantirish maqsadida ishlab chiqilgan bu web sayt o'zida mehmonxona, restoran, gid, haydovchi kabi ko'plab xizmatlarni jamlagan. Saytdan turib xizmatlarni oldindan buyurtma qilish mumkin.`,
				},
				{
					title: 'ProRun loyihasi',
					desc: `Prorun.uz – yugurish musobaqalarini tashkil etuvchi sayt bo'lib, ro'yxatdan o'tgan foydalanuvchilar istalgan musobaqada qatnashishlari mumkin. Sayt xalqaro ishtirokchilar uchun ham qulaylik yaratadi.`,
				},
				{
					title: 'Xalq trans loyihasi',
					desc: `Bu yerda esa yana ko'proq ma'lumotlar berilishi kerak. Lorem Ipsum – matbaa sanoatida ishlatiladigan soxta matn.`,
				},
			],
		},
	},
} as const

export function useTranslation() {
	const { language } = useLanguage()

	const t = translations[language as keyof typeof translations]

	return t
}
