import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="search-div" style={{display: this.props.searchDisplay}}>
                <div>
                    <input className="form-control my-2 my-sm-0" id="search-input" type="search" placeholder="let's go places..." aria-label="Search" />
                </div>
                <div className="search-btn-div">
                    <button className="btn" type="submit">
                        <span>
                        <i className="fas fa-search"></i>
                        </span>
                    </button>
                </div>
            </div>
        );
    }
}

export default SearchBar;
