import Main from "./component/Main";
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
