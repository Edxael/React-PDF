import React from 'react'
import './css/style.css'
// import PDFViewer from 'mgr-pdf-viewer-react'
import { Document, Page } from 'react-pdf'
import MyDoc from './docs/fifa6.pdf'
 
export default class extends React.Component{
    state = {
        numPages: null,
        pageNumber: 1,
        myScale: 1,
        toGo: ''
    }

    onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages });
    }
    
    render(){
        const zx1 = { display: "flex", justifyContent:"center", border: "2px solid white", backgroundColor: "rgba(215, 174, 253, 0.5)", width: "75%", margin: "0px auto", padding: "15px" }
        return(
            <div>
                <h1>Home Page-2.2</h1>
                <hr/>

                <div>
                    <button onClick={ () => { this.setState({ pageNumber: this.state.pageNumber - 1, toGo: '' }) } } >Previous Page</button>
                    <button onClick={ () => { this.setState({ pageNumber: this.state.pageNumber + 1, toGo: '' }) } } >Next Page</button>
                    <br/><br/>
                    <div>
                        <input type="text" value={this.state.toGo} onChange={(e) => { this.setState({ toGo: e.target.value }) }}/>
                        <br/>
                        <button onClick={() => { this.setState({ pageNumber: parseInt(this.state.toGo) }) }} >{`Go to Page: ${this.state.toGo}`}</button>
                    </div>
                    <br/><br/>

                    <button onClick={ () => { this.setState({ pageNumber: 1, toGo: '' }) } } >First Page</button>
                    <button onClick={ () => { this.setState({ pageNumber: this.state.numPages, toGo: '' }) } } >Last Page</button>
                    <br/><br/>

                    <button onClick={ () => { this.setState({ myScale: this.state.myScale - 0.5 }) } } >Doc. size --</button>
                    <button onClick={ () => { this.setState({ myScale: this.state.myScale + 0.5 }) } } >Doc. size ++</button>
                    
                </div>

                <p>Page {this.state.pageNumber} of {this.state.numPages}</p>

                <div className="k2">
                    <div style={zx1}>
                        
                        <Document
                            file={MyDoc}
                            onLoadSuccess={this.onDocumentLoad} 
                        >
                        <Page pageNumber={this.state.pageNumber} scale={this.state.myScale} />
                        </Document> 
                    </div>
                </div>

                
                <br/><br/>
                
            </div>
        )
    }
}

// <Document  file={MyDoc} />