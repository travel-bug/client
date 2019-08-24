import React, { Component } from 'react';
import { Row, Col } from "../Grid/grid";
import "./search.css";

class SearchBar extends Component {

    state = {
        searchInput: "hello"
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state.searchInput);
    };

    searchSubmit = () => {
        console.log(this.state.searchInput);
    }

    render() {
        return (
            <Row>
            <Col size="lg-3 md-4 sm-4">
            <div className="search-div" style={{display: this.props.searchDisplay}} type="text" name="searchInput" value={this.state.searchInput} onChange={this.handleInputChange}>
                <input className="form-control my-2 my-sm-0 search-input" type="search" placeholder="let's go places..." aria-label="Search" />
                {/* Need to add search onClick event */}
                <a className="search-btn" onClick={this.searchSubmit}>
                    <span className="fas fa-search"></span>
                </a>
            </div>
            </Col>
            </Row>
        );
    }
}

export default SearchBar;
