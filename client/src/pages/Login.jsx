import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../redux/userSlice";

const Login = () => {
  // ======= Tailwind CSS Instances ========
  const Container = "flex flex-col items-center justify-center my-12";
  const Wrapper =
    "flex items-center flex-col border-2 py-[20px] px-[50px] gap-[10px]";
  const Input = "border-2 rounded-[3px] p-[10px] bg-transparent w-full ";
  const Button =
    "rounded-[3px] border-none py-[10px] px-[20px] font-[500] cursor-pointer bg-gray-100 text-[#272727] hover:bg-gray-300";

  // ==========  React Hooks Section ============
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ========= Helper Functions ===========
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signin", {
        name,
        password,
      });
      // console.log(res.data);
      dispatch(loginSuccess(res.data));
    } catch (err) {
      dispatch(loginFailure());
    }
  };

  return (
    <div className={Container}>
      <div className={Wrapper}>
        <h2 className='title text-[24px]'>Sign in</h2>
        <h4 className='subTitle text-[20px] fold-[300]'>
          to continue to VidiVerse
        </h4>
        <input
          className={Input}
          type='text'
          placeholder='username'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className={Input}
          type='password'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} className={Button}>
          Sign in
        </button>
        <span>or</span>
        <input
          className={Input}
          type='text'
          placeholder='username'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className={Input}
          type='text'
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={Input}
          type='password'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={Button}>Sign up</button>
      </div>
      <div className='more flex mt-[10px] text-[12px]'>
        English(USA)
        <div className='Links ml-[50px]'>
          <Link className='ml-[30px]'>Help</Link>
          <Link className='ml-[30px]'>Privacy</Link>
          <Link className='ml-[30px]'>Terms</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
