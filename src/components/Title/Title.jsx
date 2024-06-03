import { FaChessQueen } from "react-icons/fa";

const Title = ({ title }) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-3 mt-20 mb-10 "
      data-aos="flip-left"
    >
      <p className="text-5xl text-gray-600">
        <FaChessQueen />
      </p>
      <h1 className="px-4 text-3xl font-semibold text-gray-500 uppercase bg-transparent shadow-gray-500">
        <span className="text-gray-500">||</span> {title}{" "}
        <span className="text-gray-500">||</span>
      </h1>
    </div>
  );
};

export default Title;
