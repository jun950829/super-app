import type { NextPage } from "next";
import { useRouter } from "next/router";
import { HEADER_MENU } from '../data/menu';


const Header: NextPage = () => {

    const router = useRouter();

    return (
        <section id="header">
            <div id="logo" onClick={() => router.push("/")}>
                로고 자리
            </div>
            <div className='menus'>
                {HEADER_MENU.map((menu, idx) => (
                    <div key={idx} onClick={() => router.push(`/${menu.path}`)}>{menu.title}</div>
                ))}
            </div>

            <div className="login">
                <button onClick={() => router.push("/logins/login")}>login</button>
                <button onClick={() => router.push("/logins/signup")}>signup</button>
            </div>
            
        </section>
    )
}

export default Header;


