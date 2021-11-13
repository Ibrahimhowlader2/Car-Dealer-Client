import React from 'react';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <>
            <div id="notfound">
                <div class="notfound-bg">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="notfound">
                    <div class="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>Page Not Found</h2>
                    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                    <a href="/">Homepage</a>
                    <div class="notfound-social">
                        <a href="/"><i class="fab fa-facebook-f"></i></a>
                        <a href="/"><i class="fab fa-twitter"></i></a>
                        <a href="/"><i class="fab fa-pinterest"></i></a>
                        <a href="/"><i class="fab fa-google-plus"></i></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageNotFound;