import { useState } from "react";

const InputComponent = ({ text, setText }) => {
  //   const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default InputComponent;
