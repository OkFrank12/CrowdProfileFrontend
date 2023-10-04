import { Outlet } from "react-router-dom";
import Sider from "../static/Sider";
import { useDispatch, useSelector } from "react-redux";
import { onNewToggle } from "../../global/GlobalState";
import { AiOutlineMenu } from "react-icons/ai";

const LayOut = () => {
  const toggle = useSelector((state: any) => state.toggle);
  const atoggle = useSelector((state: any) => state.newToggle);

  const dispatch = useDispatch();

  const onChangeToggle = () => {
    dispatch(onNewToggle(!atoggle));
  };
  return (
    <>
      <div className="flex min-h-[100vh]">
        <div className="fourthpoint:hidden">
          <Sider />
        </div>
        {atoggle ? (
          <div
            onClick={onChangeToggle}
            className="absolute top-3 left-3 hover:bg-blue-200 transition-all duration-300 p-2 hidden fourthpoint:flex cursor-pointer"
          >
            <AiOutlineMenu />
          </div>
        ) : (
          <div className="relative">
            {/* <div className="absolute w-full bg-black"> */}
            <Sider />
            {/* </div> */}
          </div>
        )}
        <div className="w-full justify-end flex bg-blue-100">
          <div
            className={`${
              toggle ? "w-[calc(100vw-250px)]" : "w-[calc(100vw-80px)]"
            } ${
              toggle
                ? "thirdpoint:w-[calc(100vw-180px)]"
                : "thirdpoint:w-[calc(100vw-70px)]"
            } fourthpoint:w-[97vw] fourthpoint:justify-end fourthpoint:flex p-2`}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default LayOut;
