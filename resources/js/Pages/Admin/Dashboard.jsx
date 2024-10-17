import ApplicationLogo from "@/Components/ApplicationLogo";
import DangerButton from "@/Components/DangerButton";
import Dropdown from "@/Components/Dropdown";
import { Head, useForm } from "@inertiajs/react";
import { Children, useState } from "react";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import InputError from "@/Components/InputError";

export default function Main({
    baru,
    proses,
    diterima,
    ditolak,
    selesai,
    dataLaporan,
    dataWarga,
    announcementData,
}) {
    const [dashboard, setDashboard] = useState(true);
    const [laporan, setLaporan] = useState(false);
    const [pengguna, setPengguna] = useState(false);
    const [pengumuman, setPengumuman] = useState(false);

    return (
        <>
            <div className="flex ">
                <Head title="Dashboard" />

                <SideBar
                    pengumuman={pengumuman}
                    dashboard={dashboard}
                    laporan={laporan}
                    pengguna={pengguna}
                    setDashboard={setDashboard}
                    setLaporan={setLaporan}
                    setPengguna={setPengguna}
                    setPengumuman={setPengumuman}
                />
                <PanelScreen
                    dataWarga={dataWarga}
                    dataLaporan={dataLaporan}
                    baru={baru}
                    proses={proses}
                    selesai={selesai}
                    diterima={diterima}
                    ditolak={ditolak}
                    dashboard={dashboard}
                    laporan={laporan}
                    pengguna={pengguna}
                    pengumuman={pengumuman}
                    announcementData={announcementData}
                />
            </div>
        </>
    );
}

const SideBar = ({
    setPengumuman,
    setDashboard,
    setLaporan,
    setPengguna,
    dashboard,
    pengguna,
    laporan,
}) => {
    const offAll = () => {
        setDashboard(false);
        setPengguna(false);
        setLaporan(false);
        setPengumuman(false);
    };

    return (
        <>
            <div className="flex flex-col w-1/6 min-h-screen bg-[#FAFAFA]">
                <header className="bg-primary_100 py-3">
                    <ApplicationLogo
                        className="h-20 w-20 z-10 "
                        titleLogo="w-1/2"
                        layout="flex-row text-4xl"
                    />
                </header>
                <main className="relative">
                    <div className="container p-5 flex flex-col gap-y-10 text-[#0a0a0b] ">
                        <div className="dashboard  ">
                            <button
                                onClick={() => {
                                    offAll();
                                    setDashboard(true);
                                }}
                                className={`flex py-5 items-center w-full   rounded-3xl text-3xl justify-center gap-4 hover:bg-primary_500 transition shadow-lg 
                                    ${
                                        dashboard &&
                                        " text-[#fafafa] bg-primary"
                                    }`}
                            >
                                <svg
                                    width="50"
                                    height="50"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="4"
                                        y="4"
                                        width="6"
                                        height="7"
                                        rx="1"
                                        stroke="#0a0a0b"
                                        stroke-width="2"
                                        stroke-linejoin="round"
                                    />
                                    <rect
                                        x="4"
                                        y="15"
                                        width="6"
                                        height="5"
                                        rx="1"
                                        stroke="#0a0a0b"
                                        stroke-width="2"
                                        stroke-linejoin="round"
                                    />
                                    <rect
                                        x="14"
                                        y="4"
                                        width="6"
                                        height="5"
                                        rx="1"
                                        stroke="#0a0a0b"
                                        stroke-width="2"
                                        stroke-linejoin="round"
                                    />
                                    <rect
                                        x="14"
                                        y="13"
                                        width="6"
                                        height="7"
                                        rx="1"
                                        stroke="#0a0a0b"
                                        stroke-width="2"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                <span>Dashboard</span>
                            </button>
                        </div>
                        <div className="masterData text-2xl text-[#0a0a0b]">
                            <span>Master Data</span>
                            <ul className="flex flex-col gap-3">
                                <li>
                                    <button
                                        onClick={() => {
                                            offAll();
                                            setLaporan(true);
                                        }}
                                        className=" flex py-5  items-center w-full rounded-3xl     text-3xl justify-center gap-4 hover:bg-primary_500 transition shadow-lg "
                                    >
                                        <svg
                                            width="50"
                                            height="50"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M19.908 19.782L19.454 18.891L19.908 19.782ZM20.782 18.908L19.891 18.454L20.782 18.908ZM19.908 4.21799L20.362 3.32698L19.908 4.21799ZM20.782 5.09202L21.673 4.63803L20.782 5.09202ZM4.09202 4.21799L3.63803 3.32698L4.09202 4.21799ZM3.21799 5.09202L2.32698 4.63803L3.21799 5.09202ZM6.2 5H17.8V3H6.2V5ZM17.8 19H6.2V21H17.8V19ZM20 7.2V9.76923H22V7.2H20ZM20.7692 9H20V11H20.7692V9ZM20 14.2308V16.8H22V14.2308H20ZM20 15H20.7692V13H20V15ZM4 9H3.23077V11H4V9ZM4 9.76923V7.2H2V9.76923H4ZM4 16.8V14.2308H2V16.8H4ZM3.23077 15H4V13H3.23077V15ZM4 15C5.65685 15 7 13.6569 7 12H5C5 12.5523 4.55228 13 4 13V15ZM4 14.2308C4 14.6556 3.6556 15 3.23077 15V13C2.55104 13 2 13.551 2 14.2308H4ZM3.23077 9C3.6556 9 4 9.3444 4 9.76923H2C2 10.449 2.55103 11 3.23077 11V9ZM4 11C4.55228 11 5 11.4477 5 12H7C7 10.3431 5.65685 9 4 9V11ZM17 12C17 13.6569 18.3431 15 20 15V13C19.4477 13 19 12.5523 19 12H17ZM22 14.2308C22 13.551 21.449 13 20.7692 13V15C20.3444 15 20 14.6556 20 14.2308H22ZM20 9.76923C20 9.3444 20.3444 9 20.7692 9V11C21.449 11 22 10.449 22 9.76923H20ZM20 9C18.3431 9 17 10.3431 17 12H19C19 11.4477 19.4477 11 20 11V9ZM6.2 19C5.62345 19 5.25117 18.9992 4.96784 18.9761C4.69617 18.9539 4.59545 18.9162 4.54601 18.891L3.63803 20.673C4.01641 20.8658 4.40963 20.9371 4.80497 20.9694C5.18864 21.0008 5.65645 21 6.2 21V19ZM2 16.8C2 17.3436 1.99922 17.8114 2.03057 18.195C2.06287 18.5904 2.13419 18.9836 2.32698 19.362L4.10899 18.454C4.0838 18.4045 4.04612 18.3038 4.02393 18.0322C4.00078 17.7488 4 17.3766 4 16.8H2ZM4.54601 18.891C4.35785 18.7951 4.20487 18.6422 4.10899 18.454L2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673L4.54601 18.891ZM17.8 21C18.3436 21 18.8114 21.0008 19.195 20.9694C19.5904 20.9371 19.9836 20.8658 20.362 20.673L19.454 18.891C19.4045 18.9162 19.3038 18.9539 19.0322 18.9761C18.7488 18.9992 18.3766 19 17.8 19V21ZM20 16.8C20 17.3766 19.9992 17.7488 19.9761 18.0322C19.9539 18.3038 19.9162 18.4045 19.891 18.454L21.673 19.362C21.8658 18.9836 21.9371 18.5904 21.9694 18.195C22.0008 17.8114 22 17.3436 22 16.8H20ZM20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362L19.891 18.454C19.7951 18.6422 19.6422 18.7951 19.454 18.891L20.362 20.673ZM17.8 5C18.3766 5 18.7488 5.00078 19.0322 5.02393C19.3038 5.04612 19.4045 5.0838 19.454 5.10899L20.362 3.32698C19.9836 3.13419 19.5904 3.06287 19.195 3.03057C18.8114 2.99922 18.3436 3 17.8 3V5ZM22 7.2C22 6.65645 22.0008 6.18864 21.9694 5.80497C21.9371 5.40963 21.8658 5.01641 21.673 4.63803L19.891 5.54601C19.9162 5.59545 19.9539 5.69617 19.9761 5.96784C19.9992 6.25117 20 6.62345 20 7.2H22ZM19.454 5.10899C19.6422 5.20487 19.7951 5.35785 19.891 5.54601L21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698L19.454 5.10899ZM6.2 3C5.65645 3 5.18864 2.99922 4.80497 3.03057C4.40963 3.06287 4.01641 3.13419 3.63803 3.32698L4.54601 5.10899C4.59545 5.0838 4.69617 5.04612 4.96784 5.02393C5.25117 5.00078 5.62345 5 6.2 5V3ZM4 7.2C4 6.62345 4.00078 6.25117 4.02393 5.96784C4.04612 5.69617 4.0838 5.59545 4.10899 5.54601L2.32698 4.63803C2.13419 5.01641 2.06287 5.40963 2.03057 5.80497C1.99922 6.18864 2 6.65645 2 7.2H4ZM3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803L4.10899 5.54601C4.20487 5.35785 4.35785 5.20487 4.54601 5.10899L3.63803 3.32698Z"
                                                fill="#0A0B0A"
                                            />
                                            <path
                                                d="M13 9V10"
                                                stroke="#0A0B0A"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                            />
                                            <path
                                                d="M13 4V5"
                                                stroke="#0A0B0A"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                            />
                                            <path
                                                d="M13 14V15"
                                                stroke="#0A0B0A"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                            />
                                            <path
                                                d="M13 19V20"
                                                stroke="#0A0B0A"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                            />
                                        </svg>
                                        <span>Kelola Laporan</span>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => {
                                            offAll();
                                            setPengguna(true);
                                        }}
                                        className=" flex py-5  items-center w-full rounded-3xl     text-3xl justify-center gap-4 hover:bg-primary_500 transition shadow-lg "
                                    >
                                        <svg
                                            width="50"
                                            height="50"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="12"
                                                cy="7"
                                                r="4"
                                                stroke="#0A0A0B"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                            />
                                            <path
                                                d="M5.33788 18.3206C5.99897 15.5269 8.77173 14 11.6426 14H12.3574C15.2283 14 18.001 15.5269 18.6621 18.3206C18.79 18.8611 18.8917 19.4268 18.9489 20.0016C19.0036 20.5512 18.5523 21 18 21H6C5.44772 21 4.99642 20.5512 5.0511 20.0016C5.1083 19.4268 5.20997 18.8611 5.33788 18.3206Z"
                                                stroke="#0A0A0B"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                            />
                                        </svg>
                                        <span>Data Pengguna</span>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => {
                                            offAll();
                                            setPengumuman(true);
                                        }}
                                        className=" flex py-5  items-center w-full rounded-3xl     text-3xl justify-center gap-4 hover:bg-primary_500 transition shadow-lg "
                                    >
                                        <span>Pengemuman</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </main>
                <footer>
                    <div className="logout absolute bottom-0 left-0 w-1/6 p-5">
                        <button
                            onClick={() => post(route("logout"))}
                            className=" flex py-5  items-center w-full rounded-3xl     text-3xl justify-center gap-4 hover:bg-primary_500 transition shadow-lg "
                        >
                            <svg
                                width="50"
                                height="50"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2 12L1.21913 11.3753L0.719375 12L1.21913 12.6247L2 12ZM11 13C11.5523 13 12 12.5523 12 12C12 11.4477 11.5523 11 11 11V13ZM5.21913 6.3753L1.21913 11.3753L2.78087 12.6247L6.78087 7.6247L5.21913 6.3753ZM1.21913 12.6247L5.21913 17.6247L6.78087 16.3753L2.78087 11.3753L1.21913 12.6247ZM2 13H11V11H2V13Z"
                                    fill="#33363F"
                                />
                                <path
                                    d="M10 8.13193V7.38851C10 5.77017 10 4.961 10.474 4.4015C10.9479 3.84201 11.7461 3.70899 13.3424 3.44293L15.0136 3.1644C18.2567 2.62388 19.8782 2.35363 20.9391 3.25232C22 4.15102 22 5.79493 22 9.08276V14.9172C22 18.2051 22 19.849 20.9391 20.7477C19.8782 21.6464 18.2567 21.3761 15.0136 20.8356L13.3424 20.5571C11.7461 20.291 10.9479 20.158 10.474 19.5985C10 19.039 10 18.2298 10 16.6115V16.066"
                                    stroke="#33363F"
                                    stroke-width="2"
                                />
                            </svg>
                            <span>Keluar</span>
                        </button>
                    </div>
                </footer>
            </div>
        </>
    );
};

const PanelScreen = ({
    pengumuman,
    dashboard,
    laporan,
    pengguna,
    baru,
    proses,
    diterima,
    ditolak,
    selesai,
    dataLaporan,
    dataWarga,
    announcementData,
}) => {
    return (
        <>
            <div className="w-5/6 flex   justify-center  items-start mt-10 ">
                {dashboard && (
                    <ScreenDashboard
                        baru={baru}
                        proses={proses}
                        diterima={diterima}
                        ditolak={ditolak}
                        selesai={selesai}
                    />
                )}

                {laporan && <KelolaLaporan dataLaporan={dataLaporan} />}
                {pengguna && <KelolaPengguna dataWarga={dataWarga} />}
                {pengumuman && (
                    <KelolaPengumuman announcementData={announcementData} />
                )}
            </div>
        </>
    );
};

const ScreenDashboard = ({
    active,
    baru,
    proses,
    diterima,
    ditolak,
    selesai,
}) => {
    return (
        <div className="flex flex-col gap-5">
            <div className="container text-5xl grid grid-cols-2 gap-10 bg-[#fafafa] p-10 rounded-md">
                <div className="cardProcces bg-[#e3e3e3] p-5 px-10 min-w-[40rem] rounded-xl shadow-md">
                    <div className="header flex justify-start gap-1 items-center text-primary_700">
                        <svg
                            width="50"
                            height="50"
                            viewBox="0 0 33 33"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M28.875 15.8125C28.8797 17.6274 28.4557 19.4176 27.6375 21.0375C26.6673 22.9787 25.1759 24.6114 23.3302 25.7528C21.4846 26.8942 19.3576 27.4992 17.1875 27.5C15.3727 27.5048 13.5824 27.0808 11.9625 26.2625L4.125 28.875L6.7375 21.0375C5.91928 19.4176 5.49527 17.6274 5.5 15.8125C5.50084 13.6425 6.10584 11.5155 7.24724 9.66979C8.38864 7.82413 10.0213 6.33269 11.9625 5.36254C13.5824 4.54432 15.3727 4.12031 17.1875 4.12504H17.875C20.741 4.28315 23.4479 5.49284 25.4776 7.52247C27.5072 9.5521 28.7169 12.2591 28.875 15.125V15.8125Z"
                                stroke="#4F4F4F"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <span>Pengaduan Baru</span>
                    </div>
                    <div className="main text-9xl">
                        <span>{baru}</span>
                    </div>
                </div>
                <div className="cardProcces bg-[#e3e3e3] p-5 px-10 min-w-[40rem] rounded-xl shadow-md">
                    <div className="header flex justify-start gap-1 items-center text-primary_700">
                        <svg
                            width="50"
                            height="50"
                            viewBox="0 0 33 33"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M28.875 15.8125C28.8797 17.6274 28.4557 19.4176 27.6375 21.0375C26.6673 22.9787 25.1759 24.6114 23.3302 25.7528C21.4846 26.8942 19.3576 27.4992 17.1875 27.5C15.3727 27.5048 13.5824 27.0808 11.9625 26.2625L4.125 28.875L6.7375 21.0375C5.91928 19.4176 5.49527 17.6274 5.5 15.8125C5.50084 13.6425 6.10584 11.5155 7.24724 9.66979C8.38864 7.82413 10.0213 6.33269 11.9625 5.36254C13.5824 4.54432 15.3727 4.12031 17.1875 4.12504H17.875C20.741 4.28315 23.4479 5.49284 25.4776 7.52247C27.5072 9.5521 28.7169 12.2591 28.875 15.125V15.8125Z"
                                stroke="#4F4F4F"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <span>Pengaduan di Proses</span>
                    </div>
                    <div className="main text-9xl">
                        <span>{proses}</span>
                    </div>
                </div>
                <div className="cardProcces bg-[#e3e3e3] p-5 px-10 min-w-[40rem] rounded-xl shadow-md">
                    <div className="header flex justify-start gap-1 items-center text-primary_700">
                        <svg
                            width="50"
                            height="50"
                            viewBox="0 0 33 33"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M28.875 15.8125C28.8797 17.6274 28.4557 19.4176 27.6375 21.0375C26.6673 22.9787 25.1759 24.6114 23.3302 25.7528C21.4846 26.8942 19.3576 27.4992 17.1875 27.5C15.3727 27.5048 13.5824 27.0808 11.9625 26.2625L4.125 28.875L6.7375 21.0375C5.91928 19.4176 5.49527 17.6274 5.5 15.8125C5.50084 13.6425 6.10584 11.5155 7.24724 9.66979C8.38864 7.82413 10.0213 6.33269 11.9625 5.36254C13.5824 4.54432 15.3727 4.12031 17.1875 4.12504H17.875C20.741 4.28315 23.4479 5.49284 25.4776 7.52247C27.5072 9.5521 28.7169 12.2591 28.875 15.125V15.8125Z"
                                stroke="#4F4F4F"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <span>Pengaduan Selesai</span>
                    </div>
                    <div className="main text-9xl">
                        <span>{selesai}</span>
                    </div>
                </div>
                <div className="cardProcces bg-[#e3e3e3] p-5 px-10 min-w-[40rem] rounded-xl shadow-md">
                    <div className="header flex justify-start gap-1 items-center text-primary_700">
                        <svg
                            width="50"
                            height="50"
                            viewBox="0 0 33 33"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M28.875 15.8125C28.8797 17.6274 28.4557 19.4176 27.6375 21.0375C26.6673 22.9787 25.1759 24.6114 23.3302 25.7528C21.4846 26.8942 19.3576 27.4992 17.1875 27.5C15.3727 27.5048 13.5824 27.0808 11.9625 26.2625L4.125 28.875L6.7375 21.0375C5.91928 19.4176 5.49527 17.6274 5.5 15.8125C5.50084 13.6425 6.10584 11.5155 7.24724 9.66979C8.38864 7.82413 10.0213 6.33269 11.9625 5.36254C13.5824 4.54432 15.3727 4.12031 17.1875 4.12504H17.875C20.741 4.28315 23.4479 5.49284 25.4776 7.52247C27.5072 9.5521 28.7169 12.2591 28.875 15.125V15.8125Z"
                                stroke="#4F4F4F"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <span>Pengaduan Ditolak</span>
                    </div>
                    <div className="main text-9xl">
                        <span>{ditolak}</span>
                    </div>
                </div>
            </div>
            <div className="container">
                <img
                    src="/img/statistik.jpg"
                    alt=""
                    className="w-[90rem] h-auto"
                />
            </div>
        </div>
    );
};

const KelolaPengumuman = ({ announcementData }) => {
    const [alert, setAlert] = useState(false);
    const {
        data,
        setData,
        post,
        get,
        delete: destroye,
        put,
        processing,
        errors,
        reset,
    } = useForm({
        id: "",
        announcement: "",
        topic: "",
        path_img: "",
    });
    const [modal, setModal] = useState(0);

    const [idTarget, setIdTarget] = useState("");

    const alertActive = () => {
        setAlert(true);
    };
    const closeModal = () => {
        setAlert(false);

        reset();
    };

    const submit = (e) => {
        e.preventDefault();
        if (modal == 1) {
            post(route("announcement.store"), {
                onSuccess: () => {
                    alertActive();
                },
                onError: (errors) => {
                    console.error("Validasi gagal:", errors);
                },
            });
        }
        if (modal == 2) {
            put(route("announcement.update", idTarget), {
                onSuccess: () => {
                    alertActive();
                },
                onError: (errors) => {
                    console.error("Validasi gagal:", errors);
                },
            });
        }
        if (modal == 3) {
            destroye(route("announcement.destroy", idTarget), {
                onSuccess: () => {
                    closeModal();
                    setModal(4);
                    alertActive();
                },
                onError: (errors) => {
                    console.error("Validasi gagal:", errors);
                },
            });
        }
    };

    const updateAnnunce = (e, id) => {
        // e.preventDefault();
        setIdTarget(id);
        const newData = announcementData.find((e) => e.id == id);
        if (!newData) {
            return;
        }

        setData({
            announcement: newData.announcement,
            topic: newData.topic,

            id: newData.id,
        });
    };
    return (
        <>
            <div className="container ">
                <form onSubmit={submit}>
                    <div className="flex flex-col justify-center">
                        <div className="flex gap-10 justify-start my-2">
                            <InputLabel
                                className="flex items-center justify-center w-1/4 text-lg"
                                htmlFor="topic"
                                value="Topic"
                            />
                            <TextInput
                                id="topic"
                                type="text"
                                name="topic"
                                value={data.topic}
                                isFocused={true}
                                className="mt-1 block w-3/4 bg-[#fafafa]/50 shadow-inner"
                                onChange={(e) =>
                                    setData("topic", e.target.value)
                                }
                            />
                        </div>
                        <InputError message={errors.topic} className="mt-2" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="flex gap-10 justify-start my-2">
                            <InputLabel
                                className="flex items-center justify-center w-1/4 text-lg"
                                htmlFor="announcement"
                                value="Announcement"
                            />

                            <textarea
                                id="announcement"
                                type="text"
                                name="announcement"
                                value={data.announcement}
                                className="mt-1 block w-3/4  align-top   h-72 text-start  'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md  bg-[#fafafa]/50 shadow-inner "
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("announcement", e.target.value)
                                }
                            ></textarea>
                        </div>
                        <InputError
                            message={errors.announcement}
                            className="mt-2"
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        {!data.id ? (
                            <PrimaryButton
                                className="ms-4 text-xl"
                                disabled={processing}
                                onClick={(e) => {
                                    setModal(1);
                                    submit(e);
                                }}
                            >
                                Submit
                            </PrimaryButton>
                        ) : (
                            <PrimaryButton
                                className="ms-4"
                                disabled={processing}
                                onClick={(e) => {
                                    setModal(2);
                                    submit(e);
                                }}
                            >
                                Edit
                            </PrimaryButton>
                        )}
                    </div>
                </form>
            </div>

            <div className="container flex flex-col gap-y-10 px-16">
                <main>
                    <div className="flex flex-col gap-3">
                        {announcementData.map((e, index) => {
                            return (
                                <Dropdown>
                                    <div
                                        key={index}
                                        className="flex text-xl gap-20    justify-evenly   action bg-[#fafafa]/25 rounded-xl py-2 shadow-inner"
                                    >
                                        <div className="flex  ps-5 items-center  w-1/2 justify-start text-center  ">
                                            <span className="flex-2">
                                                {index + 1}
                                            </span>
                                            <span className="flex-1">
                                                {e.topic}
                                            </span>
                                            <span className="flex1">
                                                {new Date(
                                                    e.created_at
                                                ).toLocaleString("id-ID", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })}
                                            </span>
                                        </div>
                                        <div className="action ">
                                            <div className="action text-blue-600 flex gap-3">
                                                <Dropdown.Trigger>
                                                    <button
                                                        type="button"
                                                        className="flex gap-5   px-5 justify-between items-center hover:bg-[#fafafa]/50 cursor-pointer transition  action bg-[#fafafa]/25 rounded-xl py-2 shadow-inner"
                                                    >
                                                        Berita
                                                    </button>
                                                </Dropdown.Trigger>
                                                <button
                                                    type="button"
                                                    className="flex gap-5   px-5 justify-between items-center hover:bg-[#fafafa]/50 cursor-pointer transition  action bg-[#fafafa]/25 rounded-xl py-2 shadow-inner"
                                                    onClick={(event) => {
                                                        updateAnnunce(
                                                            event,
                                                            e.id
                                                        );
                                                    }}
                                                >
                                                    update
                                                </button>
                                                <button
                                                    onClick={(event) => {
                                                        setModal(3);
                                                        alertActive();
                                                        setIdTarget(e.id);
                                                    }}
                                                    type="button"
                                                    className="flex gap-5   px-5 justify-between items-center hover:bg-[#fafafa]/50 cursor-pointer transition  action bg-[#fafafa]/25 rounded-xl py-2 shadow-inner"
                                                >
                                                    Hapus
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <Dropdown.Content
                                        className="w-full"
                                        contentClasses=" bg-white p-2 px-5  "
                                    >
                                        <div>
                                            <div class="px-4 sm:px-0">
                                                <h3 class="text-base font-semibold leading-7 text-gray-900">
                                                    Pengumuman
                                                </h3>
                                                <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                                                    Topic: {e.topic}
                                                </p>
                                            </div>
                                            <div class="mt-6 border-t border-gray-100">
                                                <dl class="divide-y divide-gray-100">
                                                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                            {e.announcement}
                                                        </dd>
                                                    </div>
                                                </dl>
                                            </div>
                                        </div>
                                    </Dropdown.Content>
                                </Dropdown>
                            );
                        })}
                    </div>
                </main>
            </div>
            <ModalAlert alert={alert} closeModal={closeModal}>
                {modal == 1 && (
                    <div className="p-6 flex flex-col  items-center gap-5">
                        <img src="/img/auth.png" alt="" />

                        <h2 className="text-lg font-medium text-gray-900">
                            Pengumuman Berhasil di Kirim
                        </h2>

                        <div className=" w-full text-center flex justify-center text-xl ">
                            <PrimaryButton
                                className=" w-full text-center flex justify-center text-xl py-5 "
                                onClick={() => {
                                    closeModal();
                                }}
                            >
                                ok
                            </PrimaryButton>
                        </div>
                    </div>
                )}
                {modal == 2 && (
                    <div className="p-6 flex flex-col  items-center gap-5">
                        <img src="/img/auth.png" alt="" />

                        <h2 className="text-lg font-medium text-gray-900">
                            Pengumuman Berhasil di Update
                        </h2>

                        <div className=" w-full text-center flex justify-center text-xl ">
                            <PrimaryButton
                                className=" w-full text-center flex justify-center text-xl py-5 "
                                onClick={() => {
                                    closeModal();
                                }}
                            >
                                ok
                            </PrimaryButton>
                        </div>
                    </div>
                )}
                {modal == 3 && (
                    <div className="p-6 flex flex-col  items-center gap-5">
                        <img src="/img/auth.png" alt="" />

                        <h2 className="text-lg font-medium text-gray-900">
                            apakah Ingin Hapus?
                        </h2>

                        <div className=" w-full text-center flex justify-center text-xl gap-3 ">
                            <PrimaryButton
                                onClick={closeModal}
                                className="text-xl"
                            >
                                close
                            </PrimaryButton>
                            <PrimaryButton
                                className="text-xl"
                                onClick={(e) => {
                                    submit(e);
                                }}
                            >
                                Hapus
                            </PrimaryButton>
                        </div>
                    </div>
                )}

                {modal == 4 && (
                    <div className="p-6">
                        <h2 className="text-lg font-medium text-gray-900">
                            Pengumuman Berasil Di hapus
                        </h2>

                        <div className="mt-6 flex justify-end gap-3">
                            <PrimaryButton onClick={closeModal}>
                                close
                            </PrimaryButton>
                        </div>
                    </div>
                )}
            </ModalAlert>
        </>
    );
};
const ModalAlert = ({ alert, closeModal, children }) => {
    return (
        <Modal show={alert} onClose={closeModal}>
            {children}
        </Modal>
    );
};

const KelolaLaporan = ({ active, dataLaporan }) => {
    const [idTarget, setIdTarget] = useState();
    const [alertActive, setAlertActive] = useState(false);

    const { data, setData, patch, reset } = useForm({
        topic: "",
        user: "",
        reportContent: "",
        location: "",
        status: "",
        attachment: "",
        created_at: "",
    });

    const closeModal = () => {
        setAlertActive(false);

        clearErrors();
        reset();
    };
    const getDetailLaporan = (id) => {
        const detail = dataLaporan.find((laporan) => laporan.id === id);
        return setData(detail); // detail akan berisi objek laporan yang ditemukan atau undefined jika tidak ada
    };

    const handleUpdate = (id, newStatus) => {
        patch(route("report.update", id), {
            onSuccess: () => {
                setAlertActive(true);
            },
            onError: (error) => {
                setAlertActive(true);
            },
        });
    };

    return (
        <div className="flex-col text-3xl w-full flex gap-5 px-20 ">
            <span className="font-medium text-4xl">Detail Laporan</span>

            <div className="detail w-full bg-[#fafafa] rounded-2xl p-10  px-28    ">
                <div className="contentDetail px-10 w-full flex flex-col gap-3  ">
                    <header>
                        <div className="flex justify-between w-full   ">
                            <table className="table-auto ">
                                <tr>
                                    <td className="pe-20">Nama Warga</td>
                                    <td>:</td>
                                    <td>{data.user}</td>
                                </tr>
                                <tr>
                                    <td>Laporan</td>
                                    <td>:</td>
                                    <td>{data.topic}</td>
                                </tr>
                            </table>
                            <table>
                                <tr>
                                    <td className="pe-20">tanggal</td>
                                    <td>:</td>
                                    <td>
                                        {data.created_at &&
                                            new Date(
                                                data.created_at
                                            ).toLocaleString("id-ID", {
                                                year: "numeric", // Menampilkan tahun dalam format numerik
                                                month: "long", // Menampilkan bulan dalam format nama lengkap (contoh: "Januari")
                                                day: "numeric", // Menampilkan hari dalam format numerik
                                            })}
                                    </td>
                                </tr>
                                <tr>
                                    <td>status</td>
                                    <td>:</td>
                                    <td>{data.status}</td>
                                </tr>
                            </table>
                        </div>
                    </header>
                    <main>
                        <div className="flex justify-between w-full text-start">
                            <table>
                                <th className="text-start">
                                    Deskripsi Laporan
                                </th>
                                <tr>{data.reportContent}</tr>
                            </table>
                            <table>
                                <th className="text-start ">Lampiran</th>
                                <tr>
                                    <td>
                                        <img
                                            src={`/${data.attachment}`}
                                            alt=""
                                            className="h-auto w-52"
                                        />
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </main>

                    <footer>
                        <ul className="flex gap-6">
                            <li>
                                <button
                                    // Ubah menjadi "button"
                                    onClick={(e) => {
                                        patch(
                                            route("report.update", {
                                                id: data.id,
                                                update: "proses",
                                            }),
                                            {
                                                onSuccess: () => {
                                                    setAlertActive(true);
                                                },
                                                onError: (error) => {
                                                    setAlertActive(true);
                                                },
                                            }
                                        );
                                    }}
                                    className="py-2 px-5 bg-[#cc7914] hover:bg-[#cc7914]/50 transition shadow-md text-white rounded-xl"
                                >
                                    proses
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={(e) => {
                                        patch(
                                            route("report.update", {
                                                id: data.id,
                                                update: "selesai",
                                            }),
                                            {
                                                onSuccess: () => {
                                                    setAlertActive(true);
                                                },
                                                onError: (error) => {
                                                    setAlertActive(true);
                                                },
                                            }
                                        );
                                    }}
                                    className="py-2 px-5 bg-primary hover:bg-primary/50 transition shadow-md text-white rounded-xl"
                                >
                                    Selesai
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={(e) => {
                                        patch(
                                            route("report.update", {
                                                id: data.id,
                                                update: "tolak",
                                            }),
                                            {
                                                onSuccess: () => {
                                                    setAlertActive(true);
                                                },
                                                onError: (error) => {
                                                    setAlertActive(true);
                                                },
                                            }
                                        );
                                    }}
                                    className="py-2 px-5 bg-red-700 hover:bg-[#cc7914]/50 transition shadow-md text-white rounded-xl"
                                >
                                    tolak
                                </button>
                            </li>
                        </ul>
                    </footer>
                </div>
            </div>

            <div className="overflow-y-visible w-full  px-10">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg text-center text-3xl">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-6 py-3   font-semibold text-gray-600">
                                Nama Warga
                            </th>
                            <th className="px-6 py-3   font-semibold text-gray-600">
                                Pengaduan
                            </th>
                            <th className="px-6 py-3   font-semibold text-gray-600">
                                Tanggal
                            </th>
                            <th className="px-6 py-3   font-semibold text-gray-600">
                                Lokasi
                            </th>
                            <th className="px-6 py-3   font-semibold text-gray-600">
                                Status
                            </th>
                            <th className="px-6 py-3   font-semibold text-gray-600">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataLaporan.map((e) => {
                            return (
                                <tr className="bg-white border-t border-gray-200">
                                    <td className="px-6 py-4  text-gray-700">
                                        {e.user}
                                    </td>
                                    <td className="px-6 py-4  text-gray-700">
                                        {e.topic}
                                    </td>
                                    <td className="px-6 py-4  text-gray-700">
                                        {new Date(e.created_at).toLocaleString(
                                            "id-ID",
                                            {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            }
                                        )}
                                    </td>
                                    <td className="px-6 py-4  text-gray-700">
                                        {e.location}
                                    </td>
                                    <td className="px-6 py-4  text-gray-700">
                                        {e.status}
                                    </td>
                                    <td className="px-6 py-4  text-gray-700">
                                        <button
                                            onClick={() => {
                                                getDetailLaporan(e.id);
                                            }}
                                            className="bg-yellow-100 p-2 rounded-full text-yellow-500 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="h-5 w-5"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M11 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-6m-3-9l3 3m-6 0a2 2 0 11-2-2 2 2 0 012 2zm0 0v5m0 0h5"
                                                />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <Modal show={alertActive} onClose={closeModal}>
                <div className="p-6 flex flex-col  items-center gap-5">
                    <img src="/img/auth.png" alt="" />

                    <h2 className="text-lg font-medium text-gray-900">
                        Update Status Laporan
                    </h2>

                    <div className=" w-full text-center flex justify-center text-xl ">
                        <PrimaryButton
                            className=" w-full text-center flex justify-center text-xl py-5 "
                            onClick={(e) => {
                                // handleUpdate(data.id);
                                setAlertActive(false);
                                reset();
                            }}
                        >
                            ok
                        </PrimaryButton>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

const KelolaPengguna = ({ active, dataWarga }) => {
    const {
        data,
        setData,
        post,
        delete: destroy,
        processing,
        errors,
        reset,
    } = useForm({
        name: "",
        email: "",
        password: "",
        handphone: "",
        gender: "",
    });

    const [alertActive, setAlertActive] = useState(false);
    const submit = (e) => {
        e.preventDefault();

        post(route("adminCreate"), {
            onFinish: () => {
                setAlertActive(true);
                reset("password");
            },
        });
    };
    const closeModal = () => {
        setAlertActive(false);

        clearErrors();
        reset();
    };
    return (
        <>
            <div className="overflow-y-visible w-full  px-10 ">
                <div className="w-full flex justify-between items-center my-3 p-5 ">
                    <span className="text-4xl font-medium">Data User</span>
                    <PrimaryButton onClick={() => setAlertActive(true)}>
                        Tambah
                    </PrimaryButton>
                </div>
                <table className="min-w-full bg-white border border-gray-200 rounded-lg text-3xl text-center overflow-y-auto">
                    <thead>
                        <tr className="bg-gray-100 text-center a">
                            <th className="px-6 py-3   font-semibold text-gray-600 ">
                                Nama Warga
                            </th>

                            <th className="px-6 py-3   font-semibold text-gray-600">
                                jenis kelamin
                            </th>
                            <th className="px-6 py-3   font-semibold text-gray-600">
                                handphone
                            </th>
                            <th className="px-6 py-3   font-semibold text-gray-600">
                                action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataWarga.map((e, index) => {
                            return (
                                <tr
                                    key={index}
                                    className="bg-white border-t border-gray-200"
                                >
                                    <td className="px-6 py-4  text-gray-700">
                                        {e.name}
                                    </td>
                                    <td className="px-6 py-4  text-gray-700">
                                        {e.gender}
                                    </td>
                                    <td className="px-6 py-4  text-gray-700">
                                        {e.handphone}
                                    </td>

                                    <td className="px-6 py-4  text-gray-700">
                                        <DangerButton
                                            onClick={() =>
                                                destroy(
                                                    route("deleteAcc", e.id)
                                                )
                                            }
                                        >
                                            Hapus
                                        </DangerButton>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <Modal show={alertActive} onClose={closeModal}>
                <form
                    onSubmit={submit}
                    className="flex flex-col gap-3 justify-center p-10 "
                >
                    <span className="text-center text-5xl font-extrabold ">
                        Regsiter
                    </span>
                    <div>
                        <InputLabel htmlFor="name" value="Nama" />

                        <TextInput
                            id="name"
                            type="text"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full min-h-14 text-2xl  rounded-xl"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("name", e.target.value)}
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full min-h-14 text-2xl rounded-xl"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="gender" value="Jenis Kelamin" />
                        <SelectInput
                            id="gender"
                            name="gender"
                            value={data.gender}
                            className="mt-1 block w-full min-h-14 text-2xl rounded-xl"
                            onChange={(e) => setData("gender", e.target.value)}
                        >
                            <option value="">Pilih Jenis Kelamin</option>
                            <option value="Laki-Laki">Laki-Laki</option>
                            <option value="Perempuan">Perempuan</option>
                        </SelectInput>
                        <InputError message={errors.gender} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="handphone" value="Handphone" />

                        <TextInput
                            id="handphone"
                            type="text"
                            name="handphone"
                            value={data.handphone}
                            className="mt-1 block w-full min-h-14 text-2xl rounded-xl"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) =>
                                setData("handphone", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.handphone}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full min-h-14 text-2xl  rounded-xl"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4 flex items-center justify-center ">
                        <PrimaryButton
                            className=" w-full text-center flex justify-center "
                            disabled={processing}
                        >
                            Register
                        </PrimaryButton>
                    </div>
                </form>
            </Modal>
        </>
    );
};
