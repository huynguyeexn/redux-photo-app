import PropTypes from "prop-types";
import { Col, Container, Row } from "reactstrap";
import PhotoCard from "../PhotoCard";

const PhotoList = (props) => {
  const { photoList, onPhotoEditClick, onPhotoRemoveClick } = props;

  return (
    <div className="photo-list">
      <Container>
        <Row>
          {photoList &&
            photoList.map((photo, index) => (
              <Col xs="12" sm="6" lg="3" key={index}>
                <PhotoCard
                  photo={photo}
                  onEditClick={onPhotoEditClick}
                  onRemoveClick={onPhotoRemoveClick}
                />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

PhotoList.propTypes = {
  photoList: PropTypes.array,
  onPhotoEditClick: PropTypes.func,
  onPhotoRemoveClick: PropTypes.func,
};

PhotoList.defaultProps = {
  photoList: [],
  onPhotoEditClick: null,
  onPhotoRemoveClick: null,
};

export default PhotoList;
