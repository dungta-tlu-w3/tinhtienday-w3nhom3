function GiaoVien({
  setTab,
  giaoVien,
  setGiaoVien,
  hoTen,
  maSo,
  bangCap,
  soDienThoai,
  email,
}) {
  const handleOnClick = () => {
    let heSo;
    switch(bangCap.current.value) {
        case 'dai-hoc':
            heSo = 1.3;
            break;
        case 'thac-sy':
            heSo = 1.4;
            break;
        case 'tien-sy':
            heSo = 1.5;
            break;
        case 'pho-giao-su':
            heSo = 1.6;
            break;
        case 'giao-su':
            heSo = 1.7;
            break;

    }

    setGiaoVien({
      hoTen: hoTen.current.value,
      maSo: maSo.current.value,
      bangCap: bangCap.current.value,
      soDienThoai: soDienThoai.current.value,
      email: email.current.value,
      heSoGiaoVien: heSo,
    });

    setTab(2);
    console.log(giaoVien)
  };

  return (
    <div className="m-auto absolute top-0 left-0 bottom-0 right-0 px-[3vw] py-[3vh] h-[350px] w-[700px] bg-white rounded-3xl shadow-lg flex flex-col justify-start items-center">
      <h1 className="font-bold text-3xl uppercase">Thông tin giáo viên</h1>

      <div className="mt-[30px]">
        <input
          ref={hoTen}
          className="mr-[20px] px-[10px] h-[40px] w-[300px] bg-[#e8e8e8] rounded-md outline-none hover:ring-2 hover:ring-cyan-700 duration-150 focus:ring-2 focus:ring-cyan-700"
          type="text"
          placeholder="Họ tên"
        />

        <input
          ref={maSo}
          className="mr-[20px] px-[10px] h-[40px] w-[150px] bg-[#e8e8e8] rounded-md outline-none hover:ring-2 hover:ring-cyan-700 duration-150 focus:ring-2 focus:ring-cyan-700"
          type="text"
          placeholder="Mã số"
        />

        <div className="px-[10px] py-[10px] flex justify-start items-center">
          <div className="">Bằng cấp</div>

          <select
            ref={bangCap}
            name="bang-cap"
            id="bang-cap"
            className="outline-none"
          >
            <option value="dai-hoc">Đại học</option>
            <option value="thac-sy">Thạc sỹ</option>
            <option value="tien-si">Tiến sỹ</option>
            <option value="pho-giao-su">Phó giáo sư</option>
            <option value="giao-su">Giáo sư</option>
          </select>
        </div>

        <input
          ref={soDienThoai}
          className="mr-[20px] px-[10px] h-[40px] w-[200px] bg-[#e8e8e8] rounded-md outline-none hover:ring-2 hover:ring-cyan-700 duration-150 focus:ring-2 focus:ring-cyan-700"
          type="text"
          placeholder="Số điện thoại"
        />

        <input
          ref={email}
          className="mr-[20px] px-[10px] h-[40px] w-[250px] bg-[#e8e8e8] rounded-md outline-none hover:ring-2 hover:ring-cyan-700 duration-150 focus:ring-2 focus:ring-cyan-700"
          type="text"
          placeholder="Email"
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
  );
}

export default GiaoVien;
