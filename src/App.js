import { useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import GiaoVien from "./components/GiaoVien/GiaoVien";
import TinhTien from "./components/TinhTien/TinhTien";
import MonHoc from "./components/MonHoc/MonHoc";

export default function App() {
  const [tienDayChuan, setTienDayChuan] = useState("");
  const hoTen = useRef("");
  const maSo = useRef("");
  const bangCap = useRef("");
  const soDienThoai = useRef("");
  const email = useRef("");
  const tenMonHoc = useRef("");
  const soTiet = useRef("");
  const soSinhVien = useRef("");
  const heSoMonHoc = useRef("");
  const [flag, setFlag] = useState('hidden');
  const [sum, setSum] = useState(0);

  const [giaoVien, setGiaoVien] = useState({
    hoTen: "",
    maSo: "",
    bangCap: "",
    soDienThoai: "",
    email: "",
  });

  const [monHoc, setMonHoc] = useState([]);
  const [tab, setTab] = useState(1);

  if (tab === 1) {
    return (
      <div className="h-screen w-screen bg-[#e8e8e8] font-roboto">
        <Navbar
          tienDayChuan={tienDayChuan}
          setTienDayChuan={setTienDayChuan}
          setTab={setTab}
        />
        <GiaoVien
          setTab={setTab}
          giaoVien={giaoVien}
          setGiaoVien={setGiaoVien}
          hoTen={hoTen}
          maSo={maSo}
          bangCap={bangCap}
          soDienThoai={soDienThoai}
          email={email}
        />
      </div>
    );
  } else {
    return (
      <div className="h-screen w-screen bg-[#e8e8e8] font-roboto">
        <Navbar
          tienDayChuan={tienDayChuan}
          setTienDayChuan={setTienDayChuan}
          setTab={setTab}
        />

        <TinhTien
          giaoVien={giaoVien}
          tenMonHoc={tenMonHoc}
          soTiet={soTiet}
          soSinhVien={soSinhVien}
          heSoMonHoc={heSoMonHoc}
          monHoc={monHoc}
          setMonHoc={setMonHoc}
          flag={flag}
          setFlag={setFlag}
          tienDayChuan={tienDayChuan}
          sum={sum}
          setSum={setSum}
        />
      </div>
    );
  }
}
