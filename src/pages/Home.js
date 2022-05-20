import { useState } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';

const Home = () => {
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [data, setData] = useState([]);

	// event handler
	const handleChangeInput = (e) => {
		if (e.target.name === 'title') {
			setTitle(e.target.value);
		}

		if (e.target.name === 'desc') {
			setDesc(e.target.value);
		}
	};

	const handleClickAdd = (e) => {
		e.preventDefault();

		const itemList = [
			...data,
			{
				title,
				desc,
			},
		];

		setData(itemList);
	};

	return (
		<div>
			{/* header */}
			<Header />
			{/* main */}
			<div className='grid grid-cols-2'>
				{/* form */}
				<div className='flex justify-center'>
					<form className='border mt-32 p-8 bg-slate-300 rounded h-72'>
						<h2 className='text-3xl text-center'>Add Todo List</h2>
						<div>
							<label htmlFor='title' className='text-xl'>
								Title
							</label>{' '}
							<br />
							<input
								type='text'
								id='title'
								onChange={handleChangeInput}
								name='title'
							/>
						</div>
						<div>
							<label htmlFor='desc' className='text-xl'>
								Description
							</label>{' '}
							<br />
							<textarea
								className='w-full'
								type='text'
								id='desc'
								onChange={handleChangeInput}
								name='desc'
							/>
						</div>
						<div className='flex justify-end mt-4'>
							<button className='border bg-gray-500 text-white p-2 rounded'>
								Cancel
							</button>
							<button
								className='border bg-green-500 text-white p-2 rouded'
								onClick={handleClickAdd}>
								Add
							</button>
						</div>
					</form>
				</div>
				{/* list todolist */}
				<div className='mt-32 flex justify-center'>
					<div className='border p-8 bg-slate-300 rounded'>
						<h2 className='text-3xl text-center mb-4'>List</h2>
						<div className='space-y-4'>
							{data.map((dt) => {
								return <Card data={dt} />;
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
