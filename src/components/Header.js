import React from 'react';
//import PropTypes from 'prop-types';

const Header = () => {
    return (
        <div className="header container">
            <h1>The driving licence quiz</h1>
            <div className="instructions">
                <h2>Theory Quiz</h2>
                <p>Select the correct answer</p>
            </div>
        </div>
    );
};

Header.propTypes = {};

export default Header;