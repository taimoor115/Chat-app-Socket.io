const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text">Male</span>
          <input
            onChange={() => onCheckboxChange("male")}
            checked={selectedGender === "male"}
            type="checkbox"
            className="checkbox border-slate-300"
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            onChange={() => onCheckboxChange("female")}
            checked={selectedGender === "female"}
            className="checkbox border-slate-300"
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
