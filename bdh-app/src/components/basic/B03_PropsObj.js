import React from 'react'
import datatype from 'prop-types';

function PropsObj(props){

    let {ObjectJson} = props;

    return(

        <div>
            <h3>{JSON.stringify(ObjectJson)}</h3>

            <ul>
                <li>{ObjectJson.inputName}</li>
                <li>{ObjectJson.inputAge}</li>
                <li>{ObjectJson.inputAddress}</li>
            </ul>
        </div>

    );

}

PropsObj.prototypes = {
    // 타입 제한되는 객체의 모양(shape)을 지정
    ObjectJson : datatype.shape({
        inputName : datatype.string,
        inputAge : datatype.number,
        inputAddress : datatype.string
    })
}

export default PropsObj;