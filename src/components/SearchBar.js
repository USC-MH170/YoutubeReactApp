import React from "react";

/* 
Simple search bar form which send info back to the App

*/

class SearchBar extends React.Component {
    state = {term: ''};

/*
Callback methods for the search bar to save text changes and submissions
*/
    onInputChange = event => {
        this.setState({term: event.target.value})
    };

    onFormSubmit = event => {
        event.preventDefault()
        this.props.onFormSubmit(this.state.term);
    }

/*
    Render function which displays a search bar.
*/
    render() {
        return (
        <div className="search-bar ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input 
                    type="text"
                    value={this.state.term}
                    onChange={this.onInputChange}/>
                </div>
            </form>
        </div>
        )
    }
}

export default SearchBar;