import type { NextPage } from "next";

import { HEADER_MENU } from '../data/menu';

const Header: NextPage = () => {

    return (
        <section id="header">
            {HEADER_MENU.map((menu, idx) => (
                <div>{menu.title}</div>
            ))}
        </section>
    )
}

export default Header;