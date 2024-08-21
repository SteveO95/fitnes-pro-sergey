import Header from "./components/Header/Header";
import Home from "./components/Main/Home";
import Main from "./components/Main/Main";
import CourseName from "./course/[name]/page";
export default function Dome() {
  return (
    <>
      <Header />
      <Main />
      <Home />
      <CourseName />
    </>
  );
}
