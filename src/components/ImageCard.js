import React, { useState } from 'react';
import './ImageCard.css';

const ImageCard = ({ image }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="image-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={image.urls.small} alt={image.description} />
            {isHovered && (
                <div className="image-details">
                    <p>{image.description}</p>
                    <a href={image.links.html} target="_blank" rel="noopener noreferrer">View on Unsplash</a>
                </div>
            )}
        </div>
    );
};

export default ImageCard;
