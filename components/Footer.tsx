"use client"


export default function Footer() {
    return (
        <>
            <footer className="bg-slate-50 text-[#222242] font-bold text-center p-4 w-full">
                <p>&copy; {new Date().getFullYear()} HireTrix. All rights reserved.</p>
            </footer>
        </>
    );
}
