import { Head, Link } from "@inertiajs/react";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
    user,
    report,
    announcements,
}) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative flex min-h-screen flex-col items-center justify-start  selection:text-white bg-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header>
                            <div className="flex lg:col-start-2 lg:justify-center lg:items-center gap-10 text-2xl font-semibold text-primary_700">
                                <img
                                    src="/img/logo_perantara.png"
                                    alt=""
                                    className="logo"
                                />
                                <span>Kepengurusan RT.17, Payo Selincah</span>
                            </div>
                        </header>

                        <main className="mb-40">
                            <div className="flex  lg:col-start-2 lg:justify-center lg:items-center gap text-4xl  text-white bg-[url('/img/hero.png')] bg-cover bg-no-repeat h-[30rem] ">
                                <div className="container mx-auto flex flex-col text-center h-full items-center justify-center font-medium ">
                                    <span>
                                        Hallo{" "}
                                        {user.name || user.name != null
                                            ? user.name
                                            : "warga"}
                                    </span>
                                    <p>Apakah yang ingin anda laporkan?</p>
                                </div>
                                <div className=" left-0"></div>
                            </div>
                            <div className="button relative flex justify-center items-start bg-white h-20">
                                <a
                                    href={route("report.index")}
                                    className="absolute -top-10  text-xl   p-20 py-5 rounded-3xl shadow-lg   bg-primary hover:bg-primary_400 transition text-white  font-medium"
                                >
                                    Buat Laporan
                                </a>
                            </div>
                            <div className="history my-10">
                                <div className="container mx-auto">
                                    <div className="header text-black flex justify-between px-10 items-center my-10">
                                        <span className="font-medium text-3xl">
                                            Riwayat Laporan
                                        </span>
                                    </div>
                                    <div className="content">
                                        <div className="container mx-auto px-10">
                                            <ul>
                                                {user ? (
                                                    <ul>
                                                        {report.map((e) => (
                                                            <li
                                                                key={e.id}
                                                                className="font-medium text-black text-xl flex bg-primary_200 py-10 px-10 rounded-3xl my-3"
                                                            >
                                                                <div className="flex flex-col font-light w-5/6 border-e-2 border-hijau_utama gap-5 text-2xl ">
                                                                    <span>
                                                                        {
                                                                            e.topic
                                                                        }
                                                                    </span>
                                                                    <span className="flex gap-4 items-center ">
                                                                        <div className="h-5 w-5 rounded-full bg-secondary text-xl"></div>
                                                                        {
                                                                            e.status
                                                                        }
                                                                    </span>
                                                                </div>
                                                                <div className="date w-1/6 flex px-5 gap-3 items-center">
                                                                    <svg
                                                                        width="40"
                                                                        height="40"
                                                                        viewBox="0 0 15 15"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            fillRule="evenodd"
                                                                            clipRule="evenodd"
                                                                            d="M10.0311 2.27756L10.0317 2.69923C11.5812 2.82066 12.6047 3.87651 12.6064 5.4957L12.6125 10.2352C12.6147 12.0006 11.5056 13.0868 9.72789 13.0896L5.38544 13.0952C3.6188 13.0975 2.49584 11.9854 2.49362 10.215L2.48751 5.53112C2.48529 3.90125 3.47274 2.84821 5.02222 2.70597L5.02167 2.28431C5.02111 2.03693 5.20439 1.85084 5.44875 1.85084C5.69311 1.85028 5.87639 2.03581 5.87694 2.28318L5.8775 2.67674L9.17641 2.67224L9.17585 2.27869C9.1753 2.03131 9.35857 1.84578 9.60293 1.84522C9.84174 1.84465 10.0306 2.03019 10.0311 2.27756ZM3.34332 5.70487L11.7517 5.69363V5.49685C11.7278 4.28808 11.1213 3.6539 10.0328 3.55945L10.0333 3.99236C10.0333 4.23411 9.84506 4.42583 9.60625 4.42583C9.36189 4.42639 9.17806 4.23523 9.17806 3.99348L9.1775 3.53808L5.87859 3.54258L5.87915 3.99742C5.87915 4.23973 5.69643 4.43089 5.45207 4.43089C5.2077 4.43145 5.02387 4.24086 5.02387 3.99854L5.02332 3.56563C3.94034 3.67414 3.3411 4.31057 3.34276 5.53002L3.34332 5.70487ZM9.37244 8.26008V8.26626C9.378 8.52488 9.58904 8.7211 9.84506 8.71548C10.095 8.70929 10.2944 8.49509 10.2888 8.23647C10.2771 7.98909 10.0767 7.78725 9.82729 7.78782C9.57182 7.79344 9.37189 8.00146 9.37244 8.26008ZM9.83117 10.7845C9.5757 10.7789 9.36966 10.5658 9.3691 10.3072C9.36355 10.0486 9.56848 9.83438 9.82395 9.8282H9.82951C10.0905 9.8282 10.3021 10.0413 10.3021 10.3055C10.3027 10.5698 10.0916 10.784 9.83117 10.7845ZM7.08431 8.26925C7.09541 8.52787 7.30701 8.72971 7.56248 8.71846C7.8124 8.70666 8.01178 8.49301 8.00067 8.23439C7.99456 7.98139 7.78907 7.78462 7.53916 7.78518C7.28369 7.79642 7.08375 8.01063 7.08431 8.26925ZM7.56471 10.7593C7.30923 10.7705 7.09819 10.5687 7.08653 10.3101C7.08653 10.0514 7.28591 9.83781 7.54138 9.826C7.7913 9.82544 7.99734 10.0222 8.00289 10.2746C8.01456 10.5338 7.81462 10.7475 7.56471 10.7593ZM4.79618 8.2888C4.80729 8.54743 5.01889 8.74982 5.27436 8.73802C5.52428 8.72677 5.72366 8.51257 5.71199 8.25395C5.70644 8.00095 5.50095 7.80417 5.25048 7.80473C4.99501 7.81598 4.79563 8.03018 4.79618 8.2888ZM5.27658 10.762C5.02111 10.7738 4.81007 10.5714 4.7984 10.3128C4.79785 10.0542 4.99778 9.84 5.25325 9.82876C5.50317 9.8282 5.70921 10.025 5.71477 10.278C5.72643 10.5366 5.52705 10.7508 5.27658 10.762Z"
                                                                            fill="#13AC8A"
                                                                        />
                                                                    </svg>
                                                                    <span>
                                                                        {new Date(
                                                                            e.created_at
                                                                        ).toLocaleString(
                                                                            "id-ID",
                                                                            {
                                                                                year: "numeric",
                                                                                month: "long",
                                                                                day: "numeric",
                                                                            }
                                                                        )}
                                                                    </span>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <p>Silahkan Login</p>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="history my-10">
                                <div className="container flex flex-col gap-5  text-black my-20   px-10">
                                    <span className="text-3xl font-bold ">
                                        Informasi
                                    </span>
                                    <div className="container max-h-[50vh] py-5 px-5 overflow-y-scroll flex flex-col gap-5">
                                        {announcements.map((e, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className="bulletin  flex gap-5 "
                                                >
                                                    <div className="desc-news w-full  bg-slate-100 shadow  shadow-[#fafafa] rounded-md p-5 flex flex-col justify-between gap-3">
                                                        <header className="text-2xl font-medium ">
                                                            <h1>{e.topic}</h1>
                                                        </header>
                                                        <main>
                                                            <p className="indent-4 text-justify">
                                                                {e.announcement}
                                                            </p>
                                                        </main>
                                                        <footer className="py-2 border-t-4 border-white shadow-inner ">
                                                            <h1>
                                                                Ketua RT &
                                                                Pemuda
                                                            </h1>
                                                        </footer>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </main>
                        <footer>
                            <div className="container  mx-auto px-10 fixed bottom-0 left-0 right-0">
                                <nav className="py-5 bg-white shadow-inner ">
                                    <ul className="flex justify-evenly  gap-10">
                                        <li className="flex flex-col justify-center items-center">
                                            <a href={route("welcome")}>
                                                <svg
                                                    width="50"
                                                    height="50"
                                                    viewBox="0 0 25 25"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M9.53876 21.6368V18.4423C9.53875 17.6298 10.2012 16.9695 11.0219 16.9641H14.0282C14.8529 16.9641 15.5214 17.6259 15.5214 18.4423V21.6467C15.5212 22.3366 16.0773 22.9004 16.774 22.9166H18.7782C20.7762 22.9166 22.3958 21.3131 22.3958 19.3352V10.2477C22.3852 9.46953 22.0161 8.73882 21.3937 8.26349L14.5393 2.79711C13.3385 1.8453 11.6315 1.8453 10.4306 2.79711L3.60627 8.27342C2.98152 8.74682 2.61186 9.47874 2.60416 10.2576V19.3352C2.60416 21.3131 4.22383 22.9166 6.22178 22.9166H8.226C8.93995 22.9166 9.51872 22.3436 9.51872 21.6368"
                                                        fill="#13AC8A "
                                                    />
                                                </svg>
                                                <span>Home</span>
                                            </a>
                                        </li>
                                        <li className="flex flex-col justify-center items-center">
                                            <a href={route("report.index")}>
                                                <svg
                                                    width="50"
                                                    height="50"
                                                    viewBox="0 0 24 25"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9 13.5L15 13.5"
                                                        stroke="#D2D2D2"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                    />
                                                    <path
                                                        d="M9 9.5L13 9.5"
                                                        stroke="#D2D2D2"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                    />
                                                    <path
                                                        d="M9 17.5L13 17.5"
                                                        stroke="#D2D2D2"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                    />
                                                    <path
                                                        d="M19 13.5V15.5C19 18.3284 19 19.7426 18.1213 20.6213C17.2426 21.5 15.8284 21.5 13 21.5H11C8.17157 21.5 6.75736 21.5 5.87868 20.6213C5 19.7426 5 18.3284 5 15.5V9.5C5 6.67157 5 5.25736 5.87868 4.37868C6.75736 3.5 8.17157 3.5 11 3.5V3.5"
                                                        stroke="#D2D2D2"
                                                        stroke-width="2"
                                                    />
                                                    <path
                                                        d="M18 3.5L18 9.5"
                                                        stroke="#D2D2D2"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                    />
                                                    <path
                                                        d="M21 6.5L15 6.5"
                                                        stroke="#D2D2D2"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                    />
                                                </svg>

                                                <span>Lapor</span>
                                            </a>
                                        </li>
                                        <li className="flex flex-col justify-center items-center">
                                            <a href={route("dashboard")}>
                                                <svg
                                                    width="50"
                                                    height="50"
                                                    viewBox="0 0 24 23"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M17.0734 6.98734C17.0734 9.80199 14.8166 12.0589 12 12.0589C9.18431 12.0589 6.92659 9.80199 6.92659 6.98734C6.92659 4.17269 9.18431 1.91675 12 1.91675C14.8166 1.91675 17.0734 4.17269 17.0734 6.98734ZM12 21.0834C7.8431 21.0834 4.33333 20.4078 4.33333 17.8011C4.33333 15.1934 7.86515 14.5418 12 14.5418C16.1578 14.5418 19.6667 15.2174 19.6667 17.8241C19.6667 20.4317 16.1348 21.0834 12 21.0834Z"
                                                        fill="#D2D2D2"
                                                    />
                                                </svg>

                                                <span>Profile</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
