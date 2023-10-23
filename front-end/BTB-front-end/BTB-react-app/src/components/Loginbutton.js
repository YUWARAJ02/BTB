import { useCallback } from "react";
import "./Loginbutton.css";

const Loginbutton = () => {
  const onRectangle1Click = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  return <div className="log-in-button-child" onClick={onRectangle1Click} />;
};

export default Loginbutton;
