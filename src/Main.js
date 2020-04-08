import React from 'react'
import ProfilPhotoComponent from './profile/ProfilPhoto';
import FullNameComponent from './profile/FullName';
import AddressComponent from './profile/Address';


const MainComponent =()=>{
    return(
        <React.Fragment>
            <FullNameComponent/>
            <AddressComponent/>
            <ProfilPhotoComponent/>
        </React.Fragment>

    );
}
export default MainComponent