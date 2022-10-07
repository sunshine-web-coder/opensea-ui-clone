import "./radioButton.css";
export const TitleRadioButton = (props) => {
    const { changed, id, isSelected, label, value } = props;
    return (
      <div className="RadioButton TitleRadioButton">
        <input
          id={id}
          onChange={changed}
          value={value}
          type="radio"
          checked={isSelected}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  };
  