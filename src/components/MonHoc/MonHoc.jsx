function MonHoc({
  tenMonHoc,
  soSinhVien,
  heSoMonHoc,
  soTiet,
  monHoc,
  setMonHoc,
  flag,
  setFlag,
  sum,
  setSum,
  giaoVien,
  tienDayChuan,
}) {
  const handleOnClick = () => {
    const newList = [...monHoc];
    let heSo;
    if (soSinhVien.current.value < 20) {
      heSo = -0.5;
    } else if (
      soSinhVien.current.value >= 20 &&
      soSinhVien.current.value <= 40
    ) {
      heSo = 0;
    } else {
      heSo = 0.2;
    }
    newList.push({
      tenMonHoc: tenMonHoc.current.value,
      soTiet: soTiet.current.value,
      heSoMonHoc: Number(heSoMonHoc.current.value),
      soSinhVien: Number(soSinhVien.current.value),
      heSoLop: heSo,
    });
    setMonHoc(newList);

    let newSum = sum;
    newSum +=
      Math.round(Number(soTiet.current.value) *
      (Number(giaoVien.heSoGiaoVien) +
        Number(heSoMonHoc.current.value) + heSo * Number(tienDayChuan)))

    setSum(newSum);
    //   sum +
    //   Math.round(
    //     Number(soTiet.current.value) *
    //       (Number(giaoVien.heSoGiaoVien) +
    //         Number(heSoMonHoc.current.value) +
    //         Number(heSo)) *
    //       Number(tienDayChuan)
    //   );

    setFlag("hidden");
    console.log(monHoc);
  };

  return (
    <div className={flag}>
      <div className="absolute z-50 flex flex-col justify-center items-center m-auto top-0 right-0 left-0 bottom-0 h-[400px] w-[700px] rounded-3xl shadow-lg bg-[#e8e8e8]">
        <h1 className="font-bold text-3xl uppercase">Thông tin môn học</h1>

        <div className="w-[700px] flex-col gap-3 mt-[30px] flex justify-center items-center">
          <input
            ref={tenMonHoc}
            className="mr-[20px] px-[10px] h-[40px] w-[400px] bg-white rounded-md outline-none hover:ring-2 hover:ring-cyan-700 duration-150 focus:ring-2 focus:ring-cyan-700"
            type="text"
            placeholder="Tên môn học"
          />

          <input
            ref={soTiet}
            className="mr-[20px] px-[10px] h-[40px] w-[400px] bg-white rounded-md outline-none hover:ring-2 hover:ring-cyan-700 duration-150 focus:ring-2 focus:ring-cyan-700"
            type="text"
            placeholder="Số tiết"
          />

          <input
            ref={soSinhVien}
            className="mr-[20px] px-[10px] h-[40px] w-[400px] bg-white rounded-md outline-none hover:ring-2 hover:ring-cyan-700 duration-150 focus:ring-2 focus:ring-cyan-700"
            type="text"
            placeholder="Số sinh viên"
          />

          <input
            ref={heSoMonHoc}
            className="mr-[20px] px-[10px] h-[40px] w-[400px] bg-white rounded-md outline-none hover:ring-2 hover:ring-cyan-700 duration-150 focus:ring-2 focus:ring-cyan-700"
            type="text"
            placeholder="Hệ số môn học"
          />
        </div>

        <button
          className="ml-[450px] mt-[50px] h-[45px] w-[170px] bg-sky-500/70 hover:bg-sky-500 shadow-lg font-bold text-[0.88rem] text-white rounded-lg uppercase duration-150"
          type="button"
          onClick={handleOnClick}
        >
          Xác nhận
        </button>
      </div>
    </div>
  );
}

export default MonHoc;
