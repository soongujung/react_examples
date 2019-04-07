import React from 'react';
import AddressItem from './AddressItem';

const AddressList = ({addressList}) => {
    let resultList = [];
    if(addressList && addressList.length >0){
        console.log('hello>>>', addressList);
        resultList = addressList.map((item, index) => {
            console.log('item >>>', item.point);
            return <AddressItem key={index} address={item.address} point={item.point}/>;
        });
        return resultList;
    }
    else{
        // resultList = [<AddressItem key={1} address="aa" point={}/>];
        return (<AddressItem key={1} address="주소를 검색하세요" point={null}/>);
    }

};

export default AddressList;