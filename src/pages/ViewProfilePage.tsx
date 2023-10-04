import { useState } from "react";
import reactImg from "../assets/react.svg";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const ViewProfilePage = () => {
  const [parent] = useAutoAnimate();
  const [change, setChange] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);

  const onChange = () => {
    setChange(!change);
  };

  const onHover = () => {
    setHover(!hover);
  };

  console.log(hover);
  return (
    <>
      <div className="w-[98%] h-full firstpoint:flex-col firstpoint:items-center flex justify-between">
        <div className="w-[28%] firstpoint:w-[30%] firstpoint:items-center flex flex-col firstpoint:h-[50%]">
          <img
            src={reactImg}
            className="w-[100%] firstpoint:h-[100%] h-[60%] rounded-md bg-[dodgerblue] border-[1px] border-[silver]"
          />
          <div className="flex items-center">
            {change ? (
              <AiFillEyeInvisible
                onClick={() => {
                  onChange();
                }}
                className="text-slate-500 cursor-pointer"
              />
            ) : (
              <AiFillEye
                onClick={() => {
                  onChange();
                }}
                className="text-slate-500 cursor-pointer"
              />
            )}
            {change ? (
              <>
                <span className="text-[dodgerblue] capitalize mr-2">
                  balance:
                </span>
                <span className="text-slate-500 mr-2"> ₦5000.00</span>
              </>
            ) : (
              <>
                <span className="text-[dodgerblue] capitalize mr-2">
                  wallet:
                </span>
                <span className="text-slate-500 mr-2"> ⁘⁘⁘⁘⁘⁘</span>
              </>
            )}
          </div>
        </div>
        <div className="w-[82%] pl-5 flex flex-col firstpoint:items-center">
          <p className="mt-5 capitalize  thirdpoint:text-[20px] firstpoint:items-center-center secondpoint:text-[35px] flex font-bold text-[50px]">
            Franklin Chidera Andrew
          </p>
          <div className="text-[12px] firstpoint:text-center">
            <span className="text-slate-500">franklinxcode</span>
            <br />
            <span className="text-[dodgerblue] capitalize">
              Contact: <span className="text-slate-500">09067759768</span>
            </span>
            <span className="text-slate-500">
              <br />
              <span className="text-[dodgerblue] capitalize">Created: </span>
              1, October, 2000
              <br />
              <span className="text-[dodgerblue] capitalize">
                last updated:
              </span>{" "}
              1, October, 2000
            </span>
          </div>
          <p className="font-bold text-[25px] mt-5  thirdpoint:text-[20px]">
            Description
          </p>
          <span className="w-[100%] fourthpoint:text-[10px] text-slate-500 secondpoint:text-[13px] firstpoint:text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nulla
            cum deserunt dicta. Maiores tempore quas dolore nostrum non cum
            debitis quibusdam maxime exercitationem praesentium totam ea natus,
            in error cumque, asperiores nihil labore. Dolore inventore
            voluptates hic minima error ipsa debitis alias aperiam consequuntur
            quas cum eum, minus neque. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Sed nulla cum deserunt dicta. Maiores tempore quas
            dolore nostrum non cum debitis quibusdam maxime e.
          </span>

          <div className="w-[90%] firstpoint:flex-col fourthpoint:text-[10px] secondpoint:text-[13px] flex justify-between text-center flex-wrap">
            <div>
              <p className="capitalize font-bold text-[25px] fourthpoint:text-[15px] mt-5 text-[dodgerblue]">
                Company Name
              </p>
              <div className="">
                <span className="text-slate-500">The Excel Franchise</span>
              </div>
            </div>
            <div>
              <p className="capitalize font-bold text-[25px] fourthpoint:text-[15px] mt-5 text-[dodgerblue]">
                Company Location
              </p>
              <div className="">
                <span className="text-slate-500">
                  No. 25, excel franchise street, olodi apapa, lagos
                </span>
              </div>
            </div>
            <div>
              <p className="capitalize font-bold text-[25px] fourthpoint:text-[15px] mt-5 text-[dodgerblue]">
                Company Role
              </p>
              <div className="">
                <span className="text-slate-500">Manager</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[30px] thirdpoint:text-center font-bold mt-5 thirdpoint:text-[20px]">
              Let's build a great community!!!
            </p>
            <span className="text-slate-500 fourthpoint:text-[10px] text-center secondpoint:text-[13px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              suscipit fugiat nostrum magni, distinctio esse, doloribus
              exercitationem ducimus eligendi minus consequatur explicabo vitae
              facere in iste? Eos illum voluptas at.
            </span>
            <br />
            <div className="flex secondpoint:text-[13px]">
              <span className="text-[dodgerblue] capitalize mr-2">email: </span>
              <p className="text-slate-500 ">excel@gmail.com</p>
            </div>
          </div>
        </div>
        <div onMouseEnter={onHover} onMouseLeave={onHover}>
          <Link to={`/edit-profile`}>
            <FaUserEdit className="text-[30px] text-[dodgerblue] cursor-pointer" />
          </Link>
          {hover && (
            <div className=" transition-all duration-300 capitalize">Edit </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewProfilePage;
