import React from 'react'
import { Document } from 'react-pdf'
 
export default class extends React.Component{
    render(){
        return(
            <div>
                <h1>Home Page-1.</h1>

                <Document file={'./docs/fifa6.pdf'} />
            </div>
        )
    }
}