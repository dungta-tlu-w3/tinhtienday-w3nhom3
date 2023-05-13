function DanhSachGiaoVien() {
    const danhsach = JSON.parse(localStorage.getItem('danhSachGiaoVien'))
  return (
    <div className="h-[680px] w-[1450px] bg-white absolute m-auto right-0 top-20 left-0 bottom-0 shadow-lg">
      <div className="z-10 overflow-auto">
        <table className="border text-center mt-[25px] absolute m-auto top-20 left-0 right-0 bottom-0">
          <tr>
            <th className="border-2 w-[100px]">STT</th>
            <th className="border-2 w-[700px]">Tên giáo viên</th>
            <th className="border-2 w-[300px]">Mã số</th>
            <th className="border-2 w-[300px]">Tiền lương</th>
          </tr>

          {danhsach.map((giaovien, index) => (
          <tr>
            <td className="border-2">{index + 1}</td>
            <td className="border-2">{giaovien.tenGiaoVien}</td>
            <td className="border-2">{giaovien.maSo}</td>
            <td className="border-2">{giaovien.tienLuong}</td>
          </tr>
        ))}

        </table>
      </div>
    </div>
  );
}

export default DanhSachGiaoVien;
