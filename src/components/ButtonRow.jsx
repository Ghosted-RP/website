import { buttons } from "../constants";

// text-slate-900 font-poppins font-semibold ss:text-[28px] text-[18px] bg-white rounded-lg px-5 py-3 mx-4

const ButtonRow = () => (
	<section className='sm:py-16 py-6 text-center'>
		<div className='xl:px-0 sm:px-16 px-6 flex justify-center items-start text-center'>
			<div className='justify-between items-center w-full text-center'>
				{buttons.map((button, index) => (
					<a href={button.link} className='hover:cursor-pointer'>
						<button
							className={`text-slate-900 font-poppins font-semibold ss:text-[25px] text-[15px] bg-white rounded-md px-5 py-3 ${
								index === buttons.length - 1 ? "mr-0" : "mr-5"
							}`}
							key={button.id}
						>
							{button.text}
						</button>
					</a>
				))}
			</div>
		</div>
	</section>
);

export default ButtonRow;
