import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const JobView = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        const apiUrl = 'https://www.naukrigulf.com/spapi/jobapi/search?Experience=&FunctionalAreaId=4&Keywords=banking&KeywordsAr=&Limit=30&Location=&LocationAr=&Offset=0&SortPreference=&breadcrumb=1&geoIpCityName=Delhi&geoIpCountryName=India&locationId=&nationality=&nationalityLabel=&pageNo=1&seo=1&showBellyFilters=true&srchId=';

        const headers = {
            'Appid': '205',
            'Systemid': '2323'
        };

        axios.get(apiUrl, { headers })
            .then(response => {
                setData(prevData => [...prevData, ...response.jobs]);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    const handleJobClick = (job) => {

    };

    const handleCloseModal = () => {

    };

    const handleLoadMore = () => {

        fetchData();
    };

    return (
        <div>


            {/* show the data */}
            <div className="job-container">
                {data.map((job, index) => (
                    <div key={index} className="job" onClick={() => handleJobClick(job)}>
                        <p>{job.designation}</p>
                    </div>
                ))}
            </div>
            {/* LOAD MORE button */}
            <button className="load-more-button" onClick={handleLoadMore}>
                LOAD MORE
            </button>


        </div>
    );
};

export default JobView;
