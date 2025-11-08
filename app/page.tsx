import Main from "./component/Main";
import Footer from "./component/Footer";
import { ThemeProvider } from "./context/ThemeContext";

export default async function Home() {
  return (
    <>
      <div>
        <ThemeProvider>
          <Main />
        </ThemeProvider>
      </div>
    </>
  );
}
