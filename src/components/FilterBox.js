import React from 'react'

export default class FilterBox extends React.Component {
    state = {
        error: undefined,
        //1.C 2.cpp 3.html 4.java 5.js 6.python 7.r
    };


    handleCheckCategory = (e) => {
        if(this.props.activeCategories.includes(e.target.value)){
            this.props.handleRemoveCategory(e.target.value)
            //this.handleRemoveCategory(e.target.value)
        } else { 
            this.props.handleAddCategory(e.target.value)
            //this.handleAddCategory(e.target.value)  
        }
    }
    
    

    render() {
        return (
        <div>
            <div className="filter-box__container">
                 Categories:
                <br></br>
                <button 
                    value="Programming"
                    onClick={this.handleCheckCategory}
                >
                    Programming
                </button>
                <br></br>
                {this.props.activeCategories.includes("Programming") &&
                    <div>
                        <input type="checkbox" id="Python" value="Python" name="Python"  onClick={this.handleCheckCategory} />
                        <label for="Python">Python</label> <br/>
                        <input type="checkbox" id="C" value="C" name="C" onClick={this.handleCheckCategory} />
                        <label for="C">C</label> <br/>
                        <input type="checkbox" id="Java" value="Java" name="Java" onClick={this.handleCheckCategory} />
                        <label for="Java">Java</label> <br/>
                        <input type="checkbox" id="R" value="R" name="R" onClick={this.handleCheckCategory} />
                        <label for="R">R</label> <br/>
                    </div>
                }
                <button 
                onClick={this.handleCheckCategory}
                value="Mathematics"
                >
                    Mathematics
                </button>
                
                </div>
        </div>
    )
    }
}
