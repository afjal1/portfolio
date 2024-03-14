// GridView.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const tags = ["stockimg", "wallpaper", "logo", "poster", "illustration", "book", "uiweb", "art", "qrcode"];

const GridView = () => {
    const [data, setData] = useState([]);
    const [selectedTag, setSelectedTag] = useState(null);
    const [page, setPage] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = (filterTag = null) => {
        const apiUrl = 'https://stockimg.app/api/image/gallery';
        const headers = {
            'Count': '10',
            'Page': page.toString(),
            'Filter': filterTag || '',
        };

        axios.get(apiUrl, { headers })
            .then(response => {
                setData(prevData => [...prevData, ...response.data.data.images]);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    const handleTagClick = (tag) => {
        setSelectedTag(tag);
        setPage(1);
        fetchData(tag);
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
        fetchData(selectedTag);
    };

    return (
        <div>
            {/* Tags section */}
            <div className="tags-container">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className={`tag ${selectedTag === tag ? 'selected' : ''}`}
                        onClick={() => handleTagClick(tag)}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/*Grid View */}
            <div className="grid-container">
                {data.map((item, index) => (
                    <div key={index} className="grid-item" onClick={() => handleImageClick(item)}>
                        <img src={item.url} alt={`Image ${index + 1}`} />
                        <p>{item.prompt}</p>
                    </div>
                ))}
            </div>

            {/* LOAD MORE button */}
            <button className="load-more-button" onClick={handleLoadMore}>
                LOAD MORE
            </button>

            {/* Image details modal */}
            <Modal
                className="custom-modal"
                isOpen={selectedImage !== null}
                onRequestClose={handleCloseModal}
                contentLabel="Image Details"
            >
                <img className='prompt-image' src={selectedImage?.url} alt="Selected Image" />
                <p>Prompt: {selectedImage?.prompt}</p>
                <p>Cfg: {selectedImage?.cfg}</p>
                <p>Model: {selectedImage?.model}</p>
                <p>Size: {selectedImage?.height}x{selectedImage?.width}</p>
                <p>Category: {selectedImage?.category}</p>
                <button onClick={handleCloseModal}>Close</button>
            </Modal>
        </div>
    );
};

export default GridView;
