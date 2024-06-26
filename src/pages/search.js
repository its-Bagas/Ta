import React ,{ useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import Barang from "../component/assets/barang.componet";
import { FaArrowLeft } from "react-icons/fa";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function Search() {
    const [buku, setBuku] = useState([])

    const backPage = () =>{
        window.history.back();
        localStorage.removeItem("bukuSearch");
    }

    const dataBuku = () => {
        const data = JSON.parse(localStorage.getItem("bukuSearch"))
        setBuku(data)
      }

    useEffect(() => {
        dataBuku()
  }, [])


    return (
        <div>
            <Navbar/>
            <div className="flex flex-col my-40 m-5 p-5">
                <button className=" w-max p-4 rounded-lg shadow-lg mb-5" onClick={backPage}>
                    <FaArrowLeft/>
                </button>
                {buku.length > 0? (
                    <p className="text-center font-bold text-2xl mb-10">{buku.length} Buku Berhasil Ditemukan</p>
                ) : (
                    <p className="text-center font-bold text-2xl mb-10">Tidak Menemukan Buku Yang Sesuai Dengan Pencarian Anda</p>
                )}
                <div className=" grid grid-cols-5">
                    {buku.map((item) => (
                        <Barang 
                            buku ={item}
                            nama = {item.nama_buku}
                            cover = {item.cover_buku}
                            author = {item.author_buku}
                            title = {item.nama_buku}
                            stok = {item.stok_buku}
                            harga = {item.harga_buku}
                        />
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
       
    )
}