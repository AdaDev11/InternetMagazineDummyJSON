"use client";

import { useState } from "react";
import Header from "@/components/header";
import MainPage from "./mainPage";

export default function Page() {
    const [searchValue, setSearchValue] = useState("");

    return (
        <>
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />
            <MainPage />
        </>
    );
}
