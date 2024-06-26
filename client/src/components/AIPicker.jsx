import React from "react";

import CustomButton from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
	return (
		<div className='aipicker-container'>
			<textarea
				placeholder='Ask AI...'
				rows={5}
				value={prompt}
				onChange={(e) => setPrompt(e.target.value)}
				className='aipicker-textarea'
			/>
			<div className='flex gap-3'>
				{generatingImg ? (
					<CustomButton
						type='outline'
						title='Asking AI...'
						customStyles='text-xs w-fit px-2 py-1 rounded-sm font-bold'
					/>
				) : (
					<>
						<CustomButton
							type='outline'
							title='AI Logo'
							handleClick={() => handleSubmit("logo")}
							customStyles='text-xs w-full px-2 py-1 rounded-sm font-bold rounded-sm'
						/>

						<CustomButton
							type='filled'
							title='AI Full'
							handleClick={() => handleSubmit("full")}
							customStyles='text-xs w-full px-2 py-1 rounded-sm font-bold rounded-sm'
						/>
					</>
				)}
			</div>
		</div>
	);
};

export default AIPicker;
