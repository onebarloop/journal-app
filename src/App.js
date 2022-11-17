import "./App.css";

//component imports
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import EntriesForm from "./components/entriesForm/EntriesForm";
import EntriesSection from "./components/entriesSection/EntriesSection";

function App() {
  return (
    <>
      <Header />
      <Main>
        <EntriesForm />
        <EntriesSection />
      </Main>
      <Footer />
    </>
  );
}

export default App;
