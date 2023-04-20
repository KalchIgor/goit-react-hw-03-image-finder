import React from "react";
import css from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";

const ImageGalleryItem = ({hit, onClick}) => 
{
    const {webformatURL,image_type, largeImageURL } = hit;
    return (
        <li className={css.item}>
            <img className={css.image} src={webformatURL} alt={image_type} onClick={() => onClick(largeImageURL)}/>
        </li>
    )
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    hit: PropTypes.shape({
        webformatURL: PropTypes.string,
        largeImageURL: PropTypes.string,
    }),
    onClick: PropTypes.func.isRequired,
};