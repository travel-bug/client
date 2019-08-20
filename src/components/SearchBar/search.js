import React, { Component } from 'react';
import { Row, Col } from "../Grid/grid";
import "./search.css";

class SearchBar extends Component {
    render() {
        return (
            <Row>
            <Col size="lg-3 md-4 sm-4">
            <div className="search-div" style={{display: this.props.searchDisplay}}>
                <input className="form-control my-2 my-sm-0 search-input" type="search" placeholder="let's go places..." aria-label="Search" />
                {/* Need to add search onClick event */}
                <a className="search-btn" onClick="">
                    <span className="fas fa-search"></span>
                </a>
            </div>
            </Col>
            </Row>
        );
    }
}

export default SearchBar;
