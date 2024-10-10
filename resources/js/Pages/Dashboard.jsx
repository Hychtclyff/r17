import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
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
                                            htmlFor="nama"
                                            value="Nama"
                                            className="text-2xl"
                                        />

                                        <TextInput
                                            id="nama"
                                            type="text"
                                            name="nama"
                                            value=""
                                            className="mt-1 block w-full border-0 shadow-none border-b-2"
                                            autoComplete="current-nama"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="no_telfon"
                                            value="no_telfon"
                                            className="text-2xl"
                                        />

                                        <TextInput
                                            id="no_telfon"
                                            type="text"
                                            name="no_telfon"
                                            value=""
                                            className="mt-1 block w-full border-0 shadow-none border-b-2"
                                            autoComplete="current-no_telfon"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="jenis_kelamin"
                                            value="jenis_kelamin"
                                            className="text-2xl"
                                        />

                                        <TextInput
                                            id="jenis_kelamin"
                                            type="text"
                                            name="jenis_kelamin"
                                            value=""
                                            className="mt-1 block w-full border-0 shadow-none border-b-2"
                                            autoComplete="current-no_telfon"
                                        />
                                    </div>

                                    <div className="mt-4 flex items-center justify-center ">
                                        <PrimaryButton
                                            className=" w-full text-center flex justify-center text-xl "
                                            // disabled={processing}
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
        </AuthenticatedLayout>
    );
}
