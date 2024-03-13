import React from "react";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  const handleChange = (event) => {
    onCheckboxChange(event.target.value);
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <label className="flex items-center mr-4">
        <input
          type="radio"
          name="gender"
          value="male"
          checked={selectedGender === "male"}
          onChange={handleChange}
          className="form-radio text-blue-500"
        />
        <span className="ml-2 text-gray-300">Male</span>
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="gender"
          value="female"
          checked={selectedGender === "female"}
          onChange={handleChange}
          className="form-radio text-blue-500"
        />
        <span className="ml-2 text-gray-300">Female</span>
      </label>
    </div>
  );
};

export default GenderCheckbox;
