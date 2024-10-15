import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        handphone: "",
        gender: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => {
                setAlertActive(true);
                reset("password");
            },
        });
    };

    return (
        <GuestLayout className="w-2/6 p-20 px-24">
            <Head title="Register" />

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
                        onChange={(e) => setData("handphone", e.target.value)}
                    />

                    <InputError message={errors.handphone} className="mt-2" />
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
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
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
        </GuestLayout>
    );
}
