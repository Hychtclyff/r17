import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen ">
            <header>
                <div className="flex lg:col-start-2 lg:justify-center lg:items-center gap-10 text-4xl font-semibold text-primary_700 py-5">
                    <img
                        src="/img/logo_perantara.png"
                        alt=""
                        className="logo"
                    />
                    <span>Kepengurusan RT.17, Payo Selincah</span>
                </div>
            </header>

            <main>{children}</main>
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
                                            fill="#D2D2D2 "
                                            fill-opacity="0.2"
                                        />
                                    </svg>
                                    <span>Home</span>
                                </a>
                            </li>
                            <li className="flex flex-col justify-center items-center">
                                <a href={route("report")}>
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
                                            fill="#13AC8A"
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
    );
}
