import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

import "./RandomPhoto.scss";

const getRandomImageUrl = () => {
  const id = Math.trunc(Math.random() * 2000);
  return `https://picsum.photos/id/${id}/500/500`;
};

const RandomPhoto = (props) => {
  const { name, imageUrl, onImageUrlChange, onRandomButtonBlur } = props;

  const handleRandomPhotoClick = async () => {
    if (onImageUrlChange) {
      const randomImageUrl = getRandomImageUrl();
      onImageUrlChange(randomImageUrl);
    }
  };

  return (
    <>
      <div className="random-photo">
        <Button
          className="random-photo__button"
          name={name}
          type="button"
          outline
          color="primary"
          onBlur={onRandomButtonBlur}
          onClick={handleRandomPhotoClick}
        >
          Random a photo
        </Button>
      </div>
      <div className="random-photo__photo">
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Oopss... not found!"
            onError={handleRandomPhotoClick}
          />
        )}
      </div>
    </>
  );
};

RandomPhoto.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  onImageUrlChange: PropTypes.func,
  onRandomButtonBlur: PropTypes.func,
};

RandomPhoto.defaultProps = {
  name: "",
  imageUrl: "",
  onImageUrlChange: null,
  onRandomButtonBlur: null,
};

export default RandomPhoto;
