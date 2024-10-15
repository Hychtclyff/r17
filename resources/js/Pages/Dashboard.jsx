import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Dashboard({ user }) {
    const [btnUpdate, setBtnUpdate] = useState(true);
    const [alertActive, setAlertActive] = useState(false);
    const closeModal = () => {
        setAlertActive(false);

        clearErrors();
        reset();
    };

    const confirmUserDeletion = () => {
        setAlertActive(true);
    };
    const { data, setData, post, patch, errors, reset } = useForm({
        name: user.name,
        email: user.email,
        handphone: user.handphone,
        gender: user.gender,
    });
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative flex min-h-screen flex-col items-center justify-start  selection:text-white bg-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl ">
                        <main className="mb-40">
                            <div className="header flex justify-between">
                                <button
                                    onClick={() => window.history.back()}
                                    className=" inline-flex gap-2 text-primary_1000 font-extrabold text-3xl items-center py-5"
                                >
                                    <svg
                                        width="50"
                                        height="49"
                                        viewBox="0 0 25 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.28481 11.7966L7.73501 7.90356C8.2645 7.52535 9 7.90385 9 8.55455V15.4454C9 16.0961 8.2645 16.4746 7.73501 16.0964L2.28481 12.2034C2.14522 12.1037 2.14522 11.8963 2.28481 11.7966Z"
                                            fill="#289348"
                                        />
                                        <path
                                            d="M9 12H23"
                                            stroke="#289348"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    <span>Kembali</span>
                                </button>
                                <div className="mt-4 flex items-center justify-center ">
                                    <PrimaryButton
                                        onClick={() => post(route("logout"))}
                                        method="post"
                                        as="button"
                                        className="  text-center flex justify-center text-xl "
                                        // disabled={processing}
                                    >
                                        Log Out
                                    </PrimaryButton>
                                </div>
                            </div>
                            <div className="flex  lg:col-start-2 lg:justify-center lg:items-center gap text-4xl  text-hijau_utama   bg-cover bg-no-repeat  ">
                                <div className="container mx-auto flex flex-col text-center h-full items-center justify-center font-semibold gap-5  ">
                                    <img
                                        src="/img/pp.jpeg"
                                        alt=""
                                        className="h-60  border-8 border-hijau_utama w-60  rounded-full"
                                    />
                                    <a href>Edit Foto</a>
                                </div>
                                <div className=" left-0"></div>
                            </div>

                            <div className="bio">
                                <div className="container mx-auto px-10 flex flex-col gap-10  ">
                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="name"
                                            value="Nama"
                                            className="text-2xl"
                                        />

                                        <TextInput
                                            id="name"
                                            type="text"
                                            name="name"
                                            value={data.name}
                                            className="mt-1 block w-full min-h-14 text-2xl rounded-xl"
                                            autoComplete="current-name"
                                            onChange={(e) => {
                                                setBtnUpdate(
                                                    user.name !== e.target.value
                                                        ? false
                                                        : true
                                                );
                                                setData("name", e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="handphone"
                                            value="handphone"
                                            className="text-2xl"
                                        />

                                        <TextInput
                                            id="handphone"
                                            type="text"
                                            name="handphone"
                                            value={data.handphone}
                                            className="mt-1 block w-full min-h-14 text-2xl rounded-xl"
                                            autoComplete="current-handphone"
                                            onChange={(e) => {
                                                setBtnUpdate(
                                                    user.handphone !==
                                                        e.target.value
                                                        ? false
                                                        : true
                                                );
                                                setData(
                                                    "handphone",
                                                    e.target.value
                                                );
                                            }}
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="gender"
                                            value="Jenis Kelamin"
                                            className="text-2xl"
                                        />

                                        <SelectInput
                                            id="gender"
                                            name="gender"
                                            value={data.gender}
                                            className="mt-1 block w-full min-h-14 text-2xl rounded-xl"
                                            onChange={(e) => {
                                                setBtnUpdate(
                                                    user.gender !==
                                                        e.target.value
                                                        ? false
                                                        : true
                                                );
                                                setData(
                                                    "gender",
                                                    e.target.value
                                                );
                                            }}
                                        >
                                            <option value="">
                                                Pilih Jenis Kelamin
                                            </option>
                                            <option value="Laki-Laki">
                                                Laki-Laki
                                            </option>
                                            <option value="Perempuan">
                                                Perempuan
                                            </option>
                                        </SelectInput>
                                    </div>

                                    <div className="mt-4 flex items-center justify-center ">
                                        <PrimaryButton
                                            className=" w-full text-center flex justify-center text-xl "
                                            disabled={btnUpdate}
                                            onClick={() => {
                                                patch(route("profile.update"), {
                                                    onSuccess:
                                                        setAlertActive(true),
                                                });
                                            }}
                                        >
                                            Simpan
                                        </PrimaryButton>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
            <Modal show={alertActive} onClose={closeModal}>
                <div className="p-6 flex flex-col  items-center gap-5">
                    <img src="/img/auth.png" alt="" />

                    <h2 className="text-lg font-medium text-gray-900">
                        Data Berhasil Di Perbaharui
                    </h2>

                    <div className=" w-full text-center flex justify-center text-xl ">
                        <PrimaryButton
                            className=" w-full text-center flex justify-center text-xl py-5 "
                            onClick={() => {
                                setAlertActive(false);
                                setBtnUpdate(true);
                            }}
                        >
                            ok
                        </PrimaryButton>
                    </div>
                </div>
            </Modal>
        </AuthenticatedLayout>
    );
}
