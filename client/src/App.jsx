import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className='flex'>
      <BrowserRouter>
        <Menu />

        <div className='flex flex-col flex-[7]'>
          <Navbar />
          <section className='bg-[#292929] text-white h-[100%]'>
            <Routes>
              <Route path='/'>
                <Route index element={<Home />} />
                <Route path='login' element={<Login />} />

                <Route path='video'>
                  <Route path=':id' element={<Video />} />
                </Route>
              </Route>
            </Routes>
          </section>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
