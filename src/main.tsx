import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Restore intended route when GitHub Pages serves 404.html first.
try {
    const redirect = sessionStorage.getItem("redirect");
    if (redirect) {
        sessionStorage.removeItem("redirect");
        if (redirect !== window.location.pathname + window.location.search + window.location.hash) {
            window.history.replaceState(null, "", redirect);
        }
    }
} catch {
    // Ignore storage access issues and continue normal app boot.
}

createRoot(document.getElementById("root")!).render(<App />);
