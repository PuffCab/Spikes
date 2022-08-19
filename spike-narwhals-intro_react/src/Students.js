import React from 'react'
import Button from 'react-bootstrap/Button';

function Students({info, narwhal, getInfo}) {
//   console.log('props :>> ', props);

// const narwhal = props.narwhal
//Levels of destructuring :
//// level 1
// const {narwhal} = props
// const  {info} = props
//// level 2
// const {narwhal, info} = props
/// level 3 : directly at the function call : function Students ({info, narwhal})

const currentProject = "learning  React"

console.log('info, narwhal', info, narwhal)

    return (
    <div>
        <p>{narwhal}</p>
        <p>{info}</p>
        <Button  onClick={()=> getInfo(currentProject)}>get info</Button>
    </div>
  )
}

export default Students