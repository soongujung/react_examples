import React from 'react';

const AddressItem = (address, point) => {
    console.log('point >>> ', point);
    return (
        <li>
            {address.address}  
        </li>
    );
};

export default AddressItem;