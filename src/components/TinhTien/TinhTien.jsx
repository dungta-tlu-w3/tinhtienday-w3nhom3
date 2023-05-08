import Bang from "../Bang/Bang";
import MonHoc from "../MonHoc/MonHoc";

function TinhTien({
  giaoVien,
  tenMonHoc,
  soSinhVien,
  heSoMonHoc,
  soTiet,
  monHoc,
  setMonHoc,
  flag,
  setFlag,
  tienDayChuan,
  sum,
  setSum,
}) {
  const handleOnClick = () => {
    setFlag("block");
  };
  return (
    <div className="h-[680px] w-[1450px] bg-white absolute m-auto right-0 top-20 left-0 bottom-0 shadow-lg">
      <div className="mt-[15px] ml-[15px] font-bold text-lg">
        Giáo viên: {giaoVien.hoTen}
      </div>

      <div className="ml-[15px] font-bold text-lg">Mã số: {giaoVien.maSo}</div>

      <button
        type="button"
        onClick={handleOnClick}
        className="absolute right-5 top-5 h-[45px] w-[170px] bg-sky-500/70 hover:bg-sky-500 shadow-lg font-bold text-[0.88rem] text-white rounded-lg uppercase duration-150"
      >
        Thêm môn học
      </button>

      <Bang
        giaoVien={giaoVien}
        monHoc={monHoc}
        tienDayChuan={tienDayChuan}
        sum={sum}
        setSum={setSum}
      />

      <MonHoc
        tenMonHoc={tenMonHoc}
        soTiet={soTiet}
        soSinhVien={soSinhVien}
        heSoMonHoc={heSoMonHoc}
        monHoc={monHoc}
        setMonHoc={setMonHoc}
        flag={flag}
        setFlag={setFlag}
        sum={sum}
        setSum={setSum}
        giaoVien={giaoVien}
        tienDayChuan={tienDayChuan}
      />
    </div>
  );
}

export default TinhTien;
