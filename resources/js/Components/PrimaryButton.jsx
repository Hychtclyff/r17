export default function PrimaryButton({
    className,
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={`inline-flex items-center text-center py-5  rounded-3xl border border-transparent bg-primary px-4  text-3xl font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-primary_500 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900  ${className} ${
                disabled && "opacity-25"
            } `}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
