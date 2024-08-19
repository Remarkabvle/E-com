import React from 'react';
import './DressStyleGrid.scss';


const dressStyles = [
    { label: 'Casual', className: 'casual', imgUrl: "https://www.mrporter.com/cms/ycm/resource/blob/782326/62f16fd09ca78560e9f636b16f07c348/de8bbd64-3cdf-49ca-9ca3-4d342ae3adcd-data.jpg" },
    { label: 'Formal', className: 'formal', imgUrl: "https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2024/04/hockerty_photo_of_4_female_layers_in_blue_suits_of_which_1_bl_ddb76d2c-111f-4b74-b6cd-b8fa4f169f9b_2.jpg" },
    { label: 'Party', className: 'party', imgUrl: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendywei-1190298.jpg&fm=jpg" },
    { label: 'Gym', className: 'gym', imgUrl: "https://images.squarespace-cdn.com/content/v1/644927389a1ab06f2f12a9fe/d2cef23b-98a3-4e23-9835-e24209de58f5/IMG_4073.jpg" },
];

const DressStyleGrid = () => {
    return (
        <div className="dress-style-grid container">
            <h2 style={{ textAlign: 'center' }} className='dress-style-grid__title'>Browse by Dress Style</h2>
            <div className="dress-style-grid__cards">
                {dressStyles.map((style, index) => (
                    <div
                        key={index}
                        className={`dress-style-grid__card dress-style-grid__card--${style.className}`}
                        style={{
                            backgroundImage: `url(${style.imgUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <span>{style.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DressStyleGrid;
