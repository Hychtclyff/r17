export default function ApplicationLogo({ className }) {
    return (
        <div className="flex flex-col items-center justify-center gap-10 text-xl font-medium text-primary_800">
            <img src="/img/logo_perantara.png" alt="" className={className} />
            <span>Kepengurusan RT.17, Payo Selincah</span>
        </div>
    );
}
