import { ImportOutlined, FormOutlined, ExportOutlined } from '@ant-design/icons'
import { useState, useContext } from 'react';
import ModalComponent from '../modalLoginRegistrat/ModalComponent'
import { MyContext } from '@/contexts/MyContextProvider';

const regex = /[^,(]*(?:\([^)]*\))?[^,]*/g;

export const MainComp = ({ data }) => {
	const { state } = useContext(MyContext)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isForm, setIsForm] = useState(false)

	const result = data.list.match(regex).map(item => {
		const trimmedItem = item.trim()
		return trimmedItem.charAt(0).toUpperCase() + trimmedItem.slice(1)
	})
	const array = data.data.split(';')
		.map((item) => item.trim().charAt(0).toUpperCase() + item.trim().slice(1));
	const showModal = (isForm) => {
		setIsForm(isForm)
		setIsModalOpen(true)
	}

	console.log('------state', state);

	return (
		<>
			<section className="relative pb-7 pt-7">
				<div className='container mx-auto'>
					<div className='text-white flex flex-col justify-between font-extralight'>
						<p className='uppercase text-xs mb-2'>{data.h1_2}</p>
						<h1 className='xyy:text-4xl sm:text-6xl
					uppercase font-semibold text-transparent
					bg-gradient-to-r from-yellow-200
					  to-yellow-500'>
							{data.h1}
						</h1>
						<h2 className=" mt-6">{data.h2}</h2>
						<h3 className="mt-3 text-transparent
					bg-gradient-to-r from-yellow-200
					  to-yellow-500 uppercase">{data.h3}</h3>
						<h4 className="mt-3 font-medium underline underline-offset-4 text-lg">{data.h4}</h4>
						<ul className="mt-1">
							{
								result.map((el, idx) => {
									return (
										<li key={idx}
											className={`text-base ${idx === result.length - 1 && 'text-yellow-500'}`}
										>
											{el}
										</li>
									)
								})
							}
						</ul>
						<h5 className="mt-2  text-transparent
					bg-gradient-to-r from-yellow-200
					  to-yellow-500">{data.h5}</h5>
						<h6 className="mt-2">{data.h6}</h6>
						<p className="mt-4 mb-2 uppercase text-yellow-500">{data.p}</p>
						<hr className="pt-1" />
						<ul className="mt-1">
							{
								array.map((el, idx) => {
									return (
										<li key={idx}
											className={`text-sm`}
										>
											{el}
										</li>
									)
								})
							}
						</ul>
						<a href={`viber://chat?number=%2B${(data.contact).trim()}`}
							className="mt-2 text-yellow-400 font-semibold"
						>
							Viber: +{data.contact}
						</a>
						<p className="mb-2">Почта: {data.email}</p>
						<hr className="pt-1" />
						<p className="text-sm mt-10">
							{data.content}
						</p>
					</div>
					<div className="flex text-white text-lg justify-end mt-20">

						{
							state.isAdmin ?
								<FormOutlined
									className='ml-2'
									onClick={() => {
										showModal(true)
									}}
								/>
								:
								<ImportOutlined
									className='ml-2'
									onClick={() => {
										showModal(false)
									}}
								/>
						}

						{/* <ExportOutlined
							className='ml-2'
						/> */}
					</div>
				</div>
			</section>
			<ModalComponent isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} isForm={isForm} />
		</>
	)
}


