import Banner from "components/Banner";
import Images from "constants/images";
import PhotoForm from "features/Photo/components/PhotoForm";
import { addPhoto, updatePhoto } from "features/Photo/photoSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./AddEditPage.scss";

const AddEditPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoID } = useParams();
  const photo = useSelector((state) =>
    state.photos.find((photo) => photo.id === +photoID)
  );

  console.log(photoID, photo);

  const isEditMode = !!photoID;

  const initialValues = isEditMode
    ? photo
    : {
        title: "",
        category: null,
        photo: "",
      };

  console.log("initialValues", initialValues, isEditMode);
  const handleSubmit = (values) => {
    if (isEditMode) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const action = updatePhoto(values);

          dispatch(action);
          history.push("/photos");
          resolve(true);
        }, 2000);
      });
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          const action = addPhoto({
            ...values,
            id: Date.now() + "" + Math.trunc(Math.random() * 100),
          });

          dispatch(action);
          history.push("/photos");
          resolve(true);
        }, 2000);
      });
    }
  };

  return (
    <div className="photo-edit">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.BLUE_BG} />
      <Container>
        <Row>
          <Col>
            <div className="photo-edit__form">
              <PhotoForm
                isEditMode={isEditMode}
                initialValues={initialValues}
                onSubmit={handleSubmit}
              ></PhotoForm>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddEditPage;
