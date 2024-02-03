// Details.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDetailData } from './detailActions';

export default function Details() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state?.detail); // Use the new detail state

    useEffect(() => {
        const { id } = useParams();
        dispatch(fetchDetailData(id));
    }, [dispatch]);

    return (
        <>
            <div className="flex-container-details">
                <div className="img-container-details">
                    <img src={`${imgUrl}${data?.id}`} alt="Loading..." />
                </div>
                <div className="desc-container-details">
                    <p className="img-id-details">User Id: {data?.id}</p>
                    <p className="img-title-details">Title: {data?.title}</p>
                    <p className="img-body-details">Details: {data?.body}</p>
                    <Link to='/home'><button className="btn-details">Home Page</button></Link>
                </div>
            </div>
        </>
    );
}
