import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function GuestLayout({ children, className }) {
    return (
        <div className="relative flex min-h-screen flex-col items-center bg-white pt-2 sm:justify-center gap-10 sm:pt-0 ">
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
                className={`mt-6 w-full overflow-hidden bg-[#ffff]/40 px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg z-10 ${className}`}
            >
                {children}
            </div>
        </div>
    );
}
