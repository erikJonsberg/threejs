import React from "react";
import CustomButton from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
	return (
		<div className='aipicker-container'>
			<textarea
				className='aipicker-textarea'
				placeholder='Ask AI...'
				rows={5}
				value={prompt}
				onChange={(e) => setPrompt(e.target.value)}
			/>
			<div className='flex gap-3'>
				{generatingImg ? (
					<CustomButton
						type='outline'
						title='Asking AI...'
						customStyles='text-xs'
					/>
				) : (
					<>
						<CustomButton
							type='outline'
							title='AI Logo'
							handleClick={() => handleSubmit("logo")}
							customStyles='text-xs w-fit px-2 py-1 rounded-sm w-full'
						/>
						<CustomButton
							type='filled'
							title='AI Full'
							handleClick={() => handleSubmit("full")}
							customStyles='text-xs w-fit px-2 py-1 rounded-sm w-full'
						/>
					</>
				)}
			</div>
		</div>
	);
};

export default AIPicker;
