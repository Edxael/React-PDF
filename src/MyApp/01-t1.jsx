import React from 'react'
// import { Document } from 'react-pdf'
import PDF from 'react-pdf-js'
 
export default class extends React.Component{

    state = {};

    onDocumentComplete = (pages) => {
        this.setState({ page: 1, pages });
    }

    handlePrevious = () => {
        this.setState({ page: this.state.page - 1 });
    }

    handleNext = () => {
        this.setState({ page: this.state.page + 1 });
    }

    renderPagination = (page, pages) => {
        let previousButton = <li className="previous" onClick={this.handlePrevious}><a href="#"><i className="fa fa-arrow-left"></i> Previous</a></li>;
        if (page === 1) {
        previousButton = <li className="previous disabled"><a href="#"><i className="fa fa-arrow-left"></i> Previous</a></li>;
        }
        let nextButton = <li className="next" onClick={this.handleNext}><a href="#">Next <i className="fa fa-arrow-right"></i></a></li>;
        if (page === pages) {
        nextButton = <li className="next disabled"><a href="#">Next <i className="fa fa-arrow-right"></i></a></li>;
        }
        return (
        <nav>
            <ul className="pager">
            {previousButton}
            {nextButton}
            </ul>
        </nav>
        );
    }

    render(){
        let pagination = null;
        if (this.state.pages) {
        pagination = this.renderPagination(this.state.page, this.state.pages);
        }
        return(
            <div>
                <h1>Home Page-1.2</h1>
                <div>
                    <PDF
                    file="./docs/fifa6.pdf"
                    onDocumentComplete={this.onDocumentComplete}
                    page={this.state.page}
                    />
                    {pagination}
                </div>
            </div>
        )
    }
}

// <Document file='http://www.africau.edu/images/default/sample.pdf' />