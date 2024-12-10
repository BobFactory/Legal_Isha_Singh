
export default function Footer() {
    return (
        <footer className="footer border-t p-10 bg-base-100 text-base-content/80 font-semibold capitalize flex justify-center">
            {`Copyright ©${new Date().getFullYear()} I & G Associates. All rights Reserved.`}
        </footer>
    );
}