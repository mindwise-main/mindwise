import { useState } from "react";
const InputBox = ({ name, type, id, value, placeholder, icon }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="relative w-[100%] mb-4">
      <input
        name={name}
        type={
          type == "password" ? (passwordVisible ? "text" : "password") : type
        }
        placeholder={placeholder}
        defaultValue={value}
        id={id}
        className="input-box"
      />
        {
            console.log(1)
        }
      <i className={"fi " + icon + " input-icon"}></i>

      {type == "password" ? (
        console.log(2),
        <i
          className={
            "fi fi-rr-eye" +
            (!passwordVisible ? "-crossed" : "") +
            " input-icon left-[auto] right-4 cursor-pointer"
          }
          onClick={() => setPasswordVisible((currentVal) => !currentVal)}
        ></i>,
        console.log(3)
      ) : (
        ""
      )}
    </div>
  );
};

export default InputBox;
