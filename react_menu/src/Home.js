import { useEffect, useState } from "react";
import MenuList from "./MenuList";
import useFetch from "./UseFetch";

const Home = () => {
    const {data: menus, isPending, dataLoaded, error} = useFetch("http://localhost:3030/menus")
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Getting the data...</div>}
            {dataLoaded && <div>We got it!</div>}
            {menus && <MenuList menus={menus.filter((menu) => menu.type === "food")} title="Foods" />}
            {menus && <MenuList menus={menus.filter((menu) => menu.type === "drink")} title="Drinks" />}
        </div>
    );
}

    

    






export default Home;
