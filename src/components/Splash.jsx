const Splash = () => (
	<section className='sm:py-16 py-6 text-center'>
		<div className='xl:px-0 sm:px-16 px-6 flex justify-center items-start text-center'>
			<div className='justify-between items-center w-full text-center'>
				<h1 className='font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
					The most <br className='sm:block hidden' />{" "}
					<span className='text-gradient'>Unique</span>{" "}
					<br className='sm:block hidden' />
					FivePD Experience
				</h1>
				<p className='font-poppins ss:text-[32px] text-[22px] text-white leading-[55px] mt-4'>
					<span className='italic'>Tailored to you, the community.</span>
				</p>
			</div>
			<div className='absolute z-[0] w-[430px] h-[430px] blue__gradient' />
		</div>
	</section>
);

export default Splash;
