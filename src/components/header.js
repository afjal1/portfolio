import React from 'react';

const Header = ({ name, title, profileImage, description, email, phone, location, linkedIn, github }) => (
    <header>
        {/* image */}

        <div className="profile-image-container">
            <img className="profile-image" src={profileImage} alt="Profile" />
        </div>
        <h1>{name}</h1>
        <p>{title}</p>
        <p>{description}</p>
        <p>Email: {email} | Phone: {phone}</p>
        <p>Location: {location}</p>
        <p>LinkedIn: {linkedIn} | GitHub: {github}</p>

    </header>
);

export default Header;
