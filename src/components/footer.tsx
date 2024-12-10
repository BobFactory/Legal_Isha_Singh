
export default function Footer() {
    return (
        <footer className="footer border-t p-10 bg-base-100 text-base-content capitalize flex justify-center">
            {`Copyright ©${new Date().getFullYear()} Isha Singh. All rights Reserved.`}
        </footer>
    );
}