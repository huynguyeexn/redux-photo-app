import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import Select from "react-select";
import { FormFeedback, FormGroup, Label } from "reactstrap";

const SelectField = (props) => {
  const { field, form, options, label, placeholder, disable } = props;
  const { name, value } = field;

  const { errors, touched } = form;

  const showError = errors[name] && touched[name];

  const selectOption = options.find((option) => option.value === value);

  const handleSelectOptionOnchange = (selectOption) => {
    const selectValue = selectOption ? selectOption.value : selectOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectValue,
      },
    };

    field.onChange(changeEvent);
  };

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Select
        {...field}
        onChange={handleSelectOptionOnchange}
        value={selectOption}
        options={options}
        id={name}
        disable={disable ? 1 : 0}
        placeholder={placeholder}
        className={showError ? "is-invalid" : ""}
      />

      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
};

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  options: PropTypes.array,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disable: PropTypes.bool,
};

SelectField.defaultProps = {
  options: [],
  label: "",
  placeholder: "",
  disable: false,
};

export default SelectField;
