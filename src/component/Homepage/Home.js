import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchData } from './actions';

export default function Home() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state?.data);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <>
            <div className="flex-container">
                {data?.map((item) => (
                    <div key={item.id}>
                        <Link to={`/details/${item?.id}`}>
                            <div className="img-container">
                                <img src={`${imgUrl}${item?.id}`} alt="Loading..." />
                            </div>
                            <div className="desc-container">
                                <p className="img-id">User Id: {item?.id}</p>
                                <p className="img-title">Title: {item?.title} </p>
                                <p className="img-body">Details: {item?.body} </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}
