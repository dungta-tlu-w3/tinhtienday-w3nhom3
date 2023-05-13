import { FaMoneyBillWave } from "react-icons/fa";

function Navbar({ setTab, tienDayChuan, setTienDayChuan }) {
  const handleOnchange = (e) => {
    setTienDayChuan(e.target.value);
  };

  const __handleOnClick = () => {
    setTab(3);
  };

  const handleOnClick = () => {
    setTab(1);
  };

  return (
    <div className="px-[5vw] h-[75px] w-screen bg-cyan-700 shadow-lg flex justify-between items-center">
      <div className="text-white">
        <div className="font-bold text-[0.75rem] uppercase">
          Tiền dạy trên giờ chuẩn
        </div>

        <div className="flex justify-center items-center gap-1">
          <FaMoneyBillWave size={25} />

          <input
            className="px-[5px] w-[85px] bg-cyan-700 outline-none"
            type="number"
            placeholder="0"
            value={tienDayChuan}
            onChange={handleOnchange}
          />

          <div className="font-bold uppercase">vnd</div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-3">
        <button
          onClick={__handleOnClick}
          type="button"
          className="h-[45px] w-[170px] bg-sky-500/70 hover:bg-sky-500 shadow-lg font-bold text-[0.88rem] text-white rounded-lg uppercase duration-150"
        >
          Danh sách giáo viên
        </button>
        <button
          onClick={handleOnClick}
          type="button"
          className="h-[45px] w-[170px] bg-sky-500/70 hover:bg-sky-500 shadow-lg font-bold text-[0.88rem] text-white rounded-lg uppercase duration-150"
        >
          Thiết lập giáo viên
        </button>
      </div>
    </div>
  );
}

export default Navbar;
