import Header from '@components/header';
import Footer from '@components/footer';
import style from '@styles/globalstyle';

import { Global } from '@emotion/react';



const Layout  = (props: { children: React.ReactNode }) => {
    return (
    <>
        <Global styles={style}/>
        <Header />  
            <section>
                {props.children}
            </section>
        <Footer />
    </>
    )
}

export default Layout