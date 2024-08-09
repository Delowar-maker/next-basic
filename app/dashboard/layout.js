export default function RootLayout({ children }) {
    return (
        <div >
            <ul className="flex gap-5 px-4">
                <li>Analytics</li>
                <li>Sittings</li>

            </ul>
            {children}
        </div>
    );
}
