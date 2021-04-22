import React, { useState } from "react";

function InputForm({
  calculateDistance,
  initialState = {
    first_string: "",
    second_string: "",
  },
}) {
  const [formData, setFormData] = useState(initialState);

  function changeHandler({ target: { name, value } }) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value.trimEnd(),
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    calculateDistance(formData);
    setFormData((prevFormData) => initialState);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="row mb-3">
        <div className="col-sm pb-2">
          <label>
            <input
              type="text"
              name="first_string"
              className="form-control"
              placeholder="First word"
              value={formData.first_string}
              onChange={changeHandler}
              required
            />
          </label>
        </div>
        <div className="col-sm pb-2">
          <label>
            <input
              type="text"
              name="second_string"
              placeholder="Second word"
              className="form-control"
              value={formData.second_string}
              onChange={changeHandler}
              required
            />
          </label>
        </div>
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
