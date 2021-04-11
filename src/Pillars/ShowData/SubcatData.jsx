import React from 'react';

const SubCatDatas = (props) => {
    console.log(props)
     
    const subData = (props) =>{
        console.log("I a ")
        return(
            <h2>Subdata1</h2>

        )
    }
    subData()

    return(
        <div>
        {subData}
        <h2>Subcat</h2>
        </div>
    )
}

    


    
       
    

export default SubCatDatas