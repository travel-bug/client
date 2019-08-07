import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="search-div">
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="let's go places..." aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default SearchBar;
