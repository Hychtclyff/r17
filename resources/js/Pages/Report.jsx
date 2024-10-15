import DangerButton from "@/Components/DangerButton";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useRef, useState } from "react";

export default function Dashboard() {
    const [alertActive, setAlertActive] = useState(false);
    const { data, setData, post, patch, errors, reset } = useForm({
        topic: "",
        reportContent: "",
        attachment: "",
        location: "",
    });
    const closeModal = () => {
        setAlertActive(false);

        clearErrors();
        reset();
    };

    const confirmUserDeletion = () => {
        setAlertActive(true);
    };

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
                            <a
                                href=""
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
                            </a>
                            <div className="flex  lg:col-start-2 lg:justify-center lg:items-center gap text-4xl  text-hijau_utama   bg-cover bg-no-repeat  ">
                                <div className="container mx-auto flex flex-col text-center h-full items-center justify-center font-semibold gap-5  text-7xl text-black  ">
                                    <span>Buat Laporan</span>
                                </div>
                                <div className=" left-0"></div>
                            </div>

                            <div className="bio">
                                <div className="container mx-auto px-10 flex flex-col   ">
                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="topic"
                                            value="Judul Laporan"
                                            className="text-2xl"
                                        />
                                        <TextInput
                                            id="topic"
                                            type="text"
                                            name="topic"
                                            value={data.topic}
                                            className="mt-1 block w-full min-h-14 text-2xl rounded-xl"
                                            autoComplete="current-topic"
                                            onChange={(e) =>
                                                setData("topic", e.target.value)
                                            }
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="reportContent"
                                            value="Isi Laporan"
                                            className="text-2xl"
                                        />
                                        <textarea
                                            id="reportContent"
                                            name="reportContent"
                                            value={data.reportContent}
                                            className="mt-1 block w-full min-h-14 text-2xl rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-44"
                                            autoComplete="current-reportContent"
                                            onChange={(e) =>
                                                setData(
                                                    "reportContent",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="attachment"
                                            value="Lampiran"
                                            className="text-2xl"
                                        />
                                        <TextInput
                                            id="attachment"
                                            type="file"
                                            name="attachment"
                                            className="mt-1 block w-full min-h-14 text-2xl rounded-xl py-5"
                                            autoComplete="current-attachment"
                                            onChange={(e) =>
                                                setData(
                                                    "attachment",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="location"
                                            value="Lokasi"
                                            className="text-2xl"
                                        />
                                        <TextInput
                                            id="location"
                                            type="text"
                                            name="location"
                                            value={data.location}
                                            className="mt-1 block w-full min-h-14 text-2xl rounded-xl"
                                            autoComplete="current-location"
                                            onChange={(e) =>
                                                setData(
                                                    "location",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>

                                    <div className="mt-4 flex items-center justify-center ">
                                        <PrimaryButton
                                            className=" w-full text-center flex justify-center text-xl py-10 "
                                            // disabled={processing}
                                            ocClick={() => {
                                                alertActive();
                                            }}
                                        >
                                            Simpan
                                        </PrimaryButton>
                                    </div>
                                </div>
                            </div>
                        </main>
                        <Modal show={alertActive} onClose={closeModal}>
                            <div className="p-6 flex flex-col  items-center gap-5">
                                <img src="/img/auth.png" alt="" />

                                <h2 className="text-lg font-medium text-gray-900">
                                    Laporan Berhasil di Ajukan
                                </h2>

                                <p className="mt-1 text-sm text-gray-600">
                                    silahkan cek laporan secara berkala
                                </p>

                                {/* <div className="mt-6">
                                    <InputLabel
                                        htmlFor="password"
                                        value="Password"
                                        className="sr-only"
                                    />

                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        ref={passwordInput}
                                        value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        className="mt-1 block w-3/4"
                                        isFocused
                                        placeholder="Password"
                                    />

                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>

                                */}
                                <div className=" w-full text-center flex justify-center text-xl ">
                                    <PrimaryButton
                                        className=" w-full text-center flex justify-center text-xl py-5 "
                                        // disabled={processing}
                                    >
                                        ok
                                    </PrimaryButton>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
