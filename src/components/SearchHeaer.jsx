import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const SearchHeaer = () => {
    const navigate = useNavigate();
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
        console.log(text);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/books/${text}`);
    };

    return (
        <header className="flex flex-col items-center py-6 border-b">
            <Link to="/">
                <img src="/image/kyoboLogo.png" alt="교보문고 로고" />
            </Link>
            <div className="relative w-full text-center mt-6">
                <form className="flex justify-center" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="검색어를 입력하세요"
                        className="w-11/12 border border-blue-500 rounded-full outline-blue-500 pl-2"
                        onChange={handleChange}
                    />
                    <button className="absolute top-1.5 right-12   text-blue-500">
                        <FaSearch />
                    </button>
                </form>
            </div>
        </header>
    );
};

export default SearchHeaer;
