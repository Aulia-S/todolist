const Card = ({ data }) => {
	return (
		<div className='bg-white rounded-md w-80 flex justify-between p-2'>
			{/* left */}
			<div>
				<p className='text-lg font-bold'>{data.title}</p>
				<p>{data.desc}</p>
			</div>
			{/* right */}
			<div className='flex items-center space-x-3'>
				<button>edit</button>
				<button>delete</button>
			</div>
		</div>
	);
};

export default Card;
