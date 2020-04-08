import React from 'react'
import img from './ProfilePhoto.jpg';



const ProfilPhotoComponent = () => {
    return (
        <React.Fragment>
        <img src={img} style={{height: '400px'}}/>
        </React.Fragment>
        );
}

export default ProfilPhotoComponent;