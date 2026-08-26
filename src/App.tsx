import { ThemeProvider } from "./hooks/useTheme";
import { HomePage } from "./pages/HomePage";

export default function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}
