import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="search-div">
                <input class="form-control my-2 my-sm-0" id="search-input" type="search" placeholder="let's go places..." aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </div>
        );
    }
}

export default SearchBar;
