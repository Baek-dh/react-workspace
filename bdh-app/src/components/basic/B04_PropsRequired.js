import React from 'react';
import datatype from 'prop-types';

function PropsRequired(props){
  let {
    ReactString,
    ReactNumber
  } = props
  return (
  <div style={{padding: "0px"}}>
    {ReactString}{ReactNumber}

    <div>{props.children}</div>
  </div>
  )
}

PropsRequired.propTypes = {
  // ReactString을 필수로 지정
  ReactString: datatype.isRequired,
}

export default PropsRequired;