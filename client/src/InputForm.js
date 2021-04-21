import React, { useState } from "react";

function InputForm({
  onSubmit,
  initialState = {
    first_string: "",
    second_string: "",
  },
}) {
  const [formData, setFormData] = useState(initialState);

  function changeHandler({ target: { name, value } }) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    onSubmit(formData);
    setFormData((prevFormData) => initialState);
  }

  return (
    <form onSubmit={submitHandler} className="">
      <div className="form-group">
        <label>
          First string:
          <input
            type="text"
            name="first_string"
            className="form-control"
            value={formData.first_string}
            onChange={changeHandler}
            required
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Second string:
          <input
            type="text"
            name="second_string"
            className="form-control"
            value={formData.second_string}
            onChange={changeHandler}
            required
          />
        </label>
      </div>

      <div>
        <label>
          <input type="submit" value="Calculate" className="btn btn-primary" />
        </label>
      </div>
    </form>
  );
}

export default InputForm;
