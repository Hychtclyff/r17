import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function GuestLayout({ children, className }) {
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center  bg-white pt-2  gap-10 sm:pt-0 ">
            <img
                src="/img/Ellipse2.png"
                alt=""
                className="absolute w-full max-h-screen"
            />
            <div>
                <Link href="/">
                    <ApplicationLogo className="h-32 w-32 z-10" />
                </Link>
            </div>

            <div
                className={`mt-6  overflow-hidden bg-[#ffff]/40   shadow-md sm:max-w-md lg:max-w-full sm:rounded-lg z-10 ${className} `}
            >
                {children}
            </div>
        </div>
    );
}
