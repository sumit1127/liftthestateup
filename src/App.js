import InputComponent from "./InputComponent";
import DisplayComponent from "./DisplayComponent";
import { useState } from "react";
const App = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <InputComponent text={text} setText={setText} />
      <DisplayComponent text={text} />
    </div>
  );
};
export default App;
