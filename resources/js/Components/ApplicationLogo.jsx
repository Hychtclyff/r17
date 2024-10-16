export default function ApplicationLogo({ className, layout, titleLogo }) {
    return (
        <div
            className={`flex  items-center justify-center gap-10 text-xl font-medium text-primary_800 ${layout} `}
        >
            <img src="/img/logo_perantara.png" alt="" className={className} />
            <span className={titleLogo}>Kepengurusan RT.17, Payo Selincah</span>
        </div>
    );
}
