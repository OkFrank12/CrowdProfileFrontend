import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const EditProfile = () => {
  const [parent] = useAutoAnimate();
  const [user, setUser] = useState<boolean>(false);
  const [company, setCompany] = useState<boolean>(true);
  const [render, setRender] = useState<boolean>(false);

  const onHandleRender = () => {
    setRender(true);
    setCompany(false);
    setUser(false);
  };
  const onHandleUser = () => {
    setUser(true);
    setRender(false);
    setCompany(false);
  };
  const onHandleCompany = () => {
    setCompany(true);
    setRender(false);
    setUser(false);
  };

  console.log(render);
  console.log(user);
  console.log(company);
  return (
    <>
      <div className="w-full min-h-[100px] flex flex-col">
        <div className="w-full flex justify-between">
          <div
            className={`w-[30%] text-[15px] cursor-pointer ${
              company
                ? "text-[dodgerblue] bg-[white]"
                : "bg-[dodgerblue] text-white"
            } capitalize rounded-[50px] p-1 flex justify-center items-center h-[80px]`}
          >
            <div
              className="w-full h-full flex justify-center items-center border rounded-[50px]"
              onClick={onHandleCompany}
            >
              company's credentials
            </div>
          </div>
          <div
            className={`w-[30%] text-[15px] cursor-pointer ${
              user
                ? "text-[dodgerblue] bg-[white]"
                : "bg-[dodgerblue] text-white"
            } rounded-[50px] p-1 flex justify-center items-center  h-[80px] `}
          >
            <div
              className="w-full h-full flex justify-center items-center border rounded-[50px] capitalize"
              onClick={onHandleUser}
            >
              naming credentials
            </div>
          </div>
          <div
            className={`w-[30%] text-[15px] cursor-pointer capitalize ${
              render
                ? "text-[dodgerblue] bg-[white]"
                : "bg-[dodgerblue] text-white"
            } rounded-[50px] p-1 flex justify-center items-center h-[80px] `}
          >
            <div
              className="w-full h-full flex justify-center items-center border rounded-[50px]"
              onClick={onHandleRender}
            >
              other credentials
            </div>
          </div>
        </div>
        <br />
        {render ? (
          <div ref={parent} className="flex flex-col items-center">
            <input
              placeholder="Phone Number"
              className="w-[70%] text-[14px] h-[50px] border-[1px] border-[dodgerblue] rounded-md pl-2 bg-slate-100 outline-none"
            />
            <br />
            <br />

            <textarea
              placeholder="Description"
              className=" w-[70%] pt-2 text-[14px] h-[100px] border-[1px] border-[dodgerblue] rounded-md pl-2 bg-slate-100 outline-none"
            />
            <br />
            <br />
          </div>
        ) : user ? (
          <div className="flex flex-col items-center">
            <input
              placeholder="Enter your username"
              className="w-[70%] text-[14px] h-[45px] border-[1px] border-[dodgerblue] rounded-md pl-2 bg-slate-100 outline-none"
            />
            <br />
            <br />

            <input
              placeholder="Enter your full name"
              className=" w-[70%] text-[14px] h-[45px] border-[1px] border-[dodgerblue] rounded-md pl-2 bg-slate-100 outline-none"
            />
            <br />
            <br />
          </div>
        ) : company ? (
          <div>
            <input
              placeholder="Enter your company name"
              className="w-[100%] text-[14px] h-[45px] pl-2 bg-slate-100 outline-none"
            />
            <br />
            <br />

            <input
              placeholder="Enter your company role"
              className=" w-[100%] text-[14px] h-[45px] pl-2 bg-slate-100 outline-none"
            />
            <br />
            <br />
            <input
              placeholder="Enter your company location"
              className=" w-[100%] text-[14px] h-[45px] pl-2 bg-slate-100 outline-none"
            />
            <br />
            <br />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default EditProfile;
