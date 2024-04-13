import { Toaster } from "react-hot-toast";
const toastOptions = {
  error: {
    duration: 3000,
    style: {
      background: "red",
      color: "white",
      padding: "15px",
      width: "200px",
    },
  },
  success: {
    duration: 3000,
    style: {
      background: "green",
      color: "white",
      padding: "15px",
      top: "150px",
      right: "20px",
      width: "200px",
    },
  },
};
const containeStyle = {
  top: 30,
  right: 20,
};

const ReactAlarm = () => (
  <Toaster
    position="top-right"
    toastOptions={toastOptions}
    containerStyle={containeStyle}
  />
);
export default ReactAlarm;
