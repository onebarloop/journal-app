//component imports
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

//fontawesome library
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGrinTears,
  faCloudRain,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import GlobalStyle from "./globalStyles";
library.add(faGrinTears, faCloudRain, faSun);

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
