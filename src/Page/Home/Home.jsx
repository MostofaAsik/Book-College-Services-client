import React from 'react';
import College from './College';
import Gallery from './Gallary';
import Research from './Research';
import Review from './Review';


const Home = () => {
    return (
        <div>
            <College></College>
            <Gallery></Gallery>
            <Research></Research>
            <Review></Review>
        </div>
    );
};

export default Home;