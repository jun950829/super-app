import type { NextPage } from "next";
import { useRouter } from "next/router";
import { HEADER_MENU } from '../data/menu';


const Header: NextPage = () => {

    const router = useRouter();

    return (
        <section id="header">
            <div id="logo" onClick={() => router.push("/")}>
                <img src="../img/main_logo.png" alt="로고자리" />
            </div>
            <div className='menus'>
                <ul>
                    {HEADER_MENU.map((menu, idx) => (
                        <li className='menuBtn' key={menu.key} onClick={() => router.push(`/${menu.path}`)}>{menu.title}</li>
                    ))}
                </ul>

                <div className='subMenu'>
                    <div className='submenus'>
                            {HEADER_MENU.map((menu ,idx) => (
                        <ul key={menu.key}>
                                {menu.list.map((list ,idx) => (
                                    <li className='submenuBtn' key={list.key} onClick={() => {router.push(`${list.path}`)}}>{list.title}</li>
                                ))}
                        </ul>
                            ))}
                    </div>
                </div>
            </div>

            <div className='areahelper'></div>

            {/* 필요 없는 홈페이지 */}
            {/* <div className="login">
                <button onClick={() => router.push("/logins/login")}>login</button>
                <button onClick={() => router.push("/logins/signup")}>signup</button>
            </div> */}
            
        </section>
    )
}

export default Header;


