"use client"


export default function Footer() {
    return (
        <>
            <footer  className="bg-gradient-to-l from-[#white] via-[#A020F0] to-[#ed12b7] text-white font-semibold shadow-lg z-20 p-5 w-full items-center justify-center flex">
                <p>&copy; {new Date().getFullYear()} HireTrix. All rights reserved.</p>
            </footer>
        </>
    );
}
