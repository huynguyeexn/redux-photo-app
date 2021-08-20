import PropTypes from "prop-types";
import { Button } from "reactstrap";
import "./PhotoCard.scss";

const PhotoCard = (props) => {
  const { photo, onEditClick, onRemoveClick } = props;

  return (
    <div className="photo-card">
      <img
        className="photo-card__image"
        src={photo.photo}
        alt={`${photo.title} - ${photo.category}`}
      />

      <div className="photo-card__overlay">
        <div className="">
          <p>{photo.title}</p>
          <Button
            onClick={() => onEditClick(photo)}
            type="button"
            className="photo-card__button"
            outline
            color="light"
          >
            Edit
          </Button>
          <Button
            onClick={() => onRemoveClick(photo)}
            type="button"
            className="photo-card__button"
            outline
            color="danger"
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

PhotoCard.propTypes = {
  photo: PropTypes.object,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

PhotoCard.defaultProps = {
  photo: {},
  onEditClick: null,
  onRemoveClick: null,
};

export default PhotoCard;
