import React from "react";
import Banner from "components/Banner";
import Images from "constants/images";
import { Col, Container, Row } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import PhotoList from "features/Photo/components/PhotoList";
import { useDispatch, useSelector } from "react-redux";
import { removePhoto } from "features/Photo/photoSlice";

const MainPage = () => {
  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  const history = useHistory();

  const onPhotoEditClick = (photo) => {
    return history.push(`/photos/${photo.id}`);
  };
  const onPhotoRemoveClick = (photo) => {
    const action = removePhoto(photo.id);
    dispatch(action);
  };

  return (
    <div className="text-center">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />
      <Container>
        <Row>
          <Col>
            <Link to="/photos/add">Add new photo</Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <PhotoList
              photoList={photos}
              onPhotoEditClick={onPhotoEditClick}
              onPhotoRemoveClick={onPhotoRemoveClick}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainPage;
