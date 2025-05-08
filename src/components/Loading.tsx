import Image from "next/image"
import logo from '../../public/logo.svg'


const Loading = () => {
	return (
		<div className=' absolute top-0 right-0 left-0 bottom-0 flex text-[75px] font-[Inter] text-white  items-center justify-center bg-[#0E041D] z-[9999]'>
		      <Image src={logo} width={400} height={400} alt="logo"/> 
			  
		</div>
	)
}

export default Loading
