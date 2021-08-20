import InputField from "components/custom-fields/InputField";
import RandomPhotoField from "components/custom-fields/RandomPhotoField";
import SelectField from "components/custom-fields/SelectField";
import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import { FastField, Form, Formik } from "formik";
import { Button, FormGroup, Spinner } from "reactstrap";
import * as Yup from "yup";
import PropTypes from "prop-types";

const PhotoForm = (props) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This field is required."),
    category: Yup.number().required("This field is required.").nullable(),
    photo: Yup.string().when("category", {
      is: 1,
      then: Yup.string().required("This field is required."),
      otherwise: Yup.string().notRequired(),
    }),
  });
  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        const { isSubmitting } = formikProps;
        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: Wow nature..."
            />

            <FastField
              name="category"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />

            <FormGroup>
              {props.isEditMode ? (
                <Button disabled={isSubmitting} type="submit" color="success">
                  {isSubmitting ? <Spinner size="sm" /> : ""} Update your photo
                </Button>
              ) : (
                <Button disabled={isSubmitting} type="submit" color="primary">
                  {isSubmitting ? <Spinner size="sm" /> : ""} Add to album
                </Button>
              )}
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
};

PhotoForm.propTypes = {
  isEditMode: PropTypes.bool,
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object,
};

export default PhotoForm;
