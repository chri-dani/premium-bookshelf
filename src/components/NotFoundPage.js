import React from 'react'
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div className="not-found-page">
            <p>
                <span className="not-found-page__oops">Oops!</span> This is awkward... You are looking for <br/> something that doesn't actually exist
            </p>
        <Link to="/">
            <button className="not-found-page__button">
                Go back
            </button>
        </Link>
    </div>
);

export default NotFoundPage;