import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
	return (
		<div className='centered ma'>
			<div className='relative mt2'>
				<img id='input-image' src={imageUrl} alt='' width='500px' height='auto'/>
				<div style={{left: box.leftCol, top: box.topRow, right: box.rightCol, bottom: box.bottomRow }} className='bounding-box'></div>
			</div>
		</div>
	)
}

export default FaceRecognition;