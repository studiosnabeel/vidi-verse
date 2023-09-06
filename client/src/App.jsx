import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Login from "./pages/Login";
import { useSelector } from "react-redux";

const App = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className='flex'>
      <BrowserRouter>
        <Menu />

        <div className='flex flex-col flex-[7]'>
          <Navbar />
          <section className='bg-[#292929] text-white h-[100%]'>
            <Routes>
              <Route path='/'>
                <Route index element={<Home type='random' />} />
                <Route path='trends' element={<Home type='trend' />} />
                <Route path='subscriptions' element={<Home type='sub' />} />
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
