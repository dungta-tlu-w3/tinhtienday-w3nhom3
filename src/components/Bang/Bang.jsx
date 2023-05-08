import { useEffect } from "react";

function Bang({ monHoc, giaoVien, tienDayChuan, sum, setSum }) {
  //   monHoc.map(
  //     (mon, index) =>
  //       (sum += Math.round(
  //         Number(mon.soTiet) *
  //           (Number(giaoVien.heSoGiaoVien) +
  //             Number(mon.heSoMonHoc) +
  //             Number(mon.heSoLop)) *
  //           Number(tienDayChuan)
  //       ))
  //   );

//   useEffect(() => {
//     let newSum = sum;
//     monHoc.map(
//       (mon, index) =>
//         (newSum += Math.round(
//           Number(mon.soTiet) *
//             (Number(giaoVien.heSoGiaoVien) +
//               Number(mon.heSoMonHoc) +
//               Number(mon.heSoLop)) *
//             Number(tienDayChuan)
//         ))
//     );
//     setSum(newSum);
//   }, []);

  return (
    <div className="z-10 overflow-auto">
      <table className="border text-center mt-[25px] absolute m-auto top-20 left-0 right-0 bottom-0">
        <tr>
          <th className="border-2 w-[100px]">STT</th>
          <th className="border-2 w-[500px]">Tên môn học</th>
          <th className="border-2 w-[200px]">Số tiết</th>
          <th className="border-2 w-[200px]">Số sinh viên</th>
          <th className="border-2 w-[200px]">Hệ số môn học</th>
          <th className="border-2 w-[200px]">Tiền dạy</th>
        </tr>

        {monHoc.map((mon, index) => (
          <tr>
            <td className="border-2">{index + 1}</td>
            <td className="border-2">{mon.tenMonHoc}</td>
            <td className="border-2">{mon.soTiet}</td>
            <td className="border-2">{mon.soSinhVien}</td>
            <td className="border-2">{mon.heSoMonHoc}</td>
            <td className="border-2">
              {Math.round(
                Number(mon.soTiet) *
                  (Number(giaoVien.heSoGiaoVien) +
                    Number(mon.heSoMonHoc) +
                    Number(mon.heSoLop)) *
                  Number(tienDayChuan)
              )}{" "}
              VND
            </td>
          </tr>
        ))}

        <tr>
          <td colSpan={6} className="border-2">
            Tổng tiền: {sum}
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Bang;
