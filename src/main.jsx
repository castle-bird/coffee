import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./globalStyle/GlobalStyle.jsx";

createRoot(document.getElementById("root")).render(
    <>
        <GlobalStyle />
        <App />
    </>
);
