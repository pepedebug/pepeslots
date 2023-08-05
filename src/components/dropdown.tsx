"use client"
import React, {useState} from "react";

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <details open={isOpen} className="dropdown dropdown-top dropdown-end">
            <summary onClick={toggleOpen} className="m-1 bg-transparent swap swap-rotate">
                <input type="checkbox" checked={isOpen} readOnly />

                {/* hamburger icon */}
                <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>

                {/* close icon */}
                <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
            </summary>
            <ul className="dropdown-content z-50 menu p-2 shadow-2xl border border-white/50 mb-4 bg-pepe-green rounded-box w-52">
                <li><a>Home</a></li>
                <li><a>Something</a></li>
                <li><a>Roadmap</a></li>
                <li><a>Whitepaper</a></li>
            </ul>
        </details>
    );
}