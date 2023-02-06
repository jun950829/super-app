import Script from 'next/script';

import Header from '@/components/header';
import Header_m from '@/components/header_m';
import Footer from '@/components/footer';
import Footer_m from '@/components/footer_m';
import BrowserChange from '@/components/browserChange';
import style from '@styles/globalstyle';
import { CBP } from '@/data/settings';
import { useEffect, useState } from 'react';
import { css, Global } from '@emotion/react';
import { useRecoilValueLoadable, useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState } from "recoil";
import isMobileData from '../states/atom/atom';
import isHostUrl from '../states/atom/host';
import { getAdminDataSelector, getWeeklyDataSelector, getSNDataSelector, getVaDataSelector, getVAreportSelector, getCryptoNews } from "@/states/store";



const Layout  = (props: { children: React.ReactNode }) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const mobileView = useRecoilValue(isMobileData);  // 읽기 전용!
    const counterHandler = useSetRecoilState(isMobileData); // 값만 변경 시키기 

    //운영이라면 주석 풀기
    const hosturl = useRecoilValue(isHostUrl);
    const globalHostUrlSet = useSetRecoilState(isHostUrl);


    //운영일땐 주석 풀기
    // globalHostUrlSet((pre: any) => pre = 'https://beeblock.co.kr');


    const admin = useRecoilValueLoadable(getAdminDataSelector);
    const va = useRecoilValueLoadable(getVaDataSelector);
    const sn = useRecoilValueLoadable(getSNDataSelector);
    const vareport = useRecoilValueLoadable(getVAreportSelector);
    const weekly = useRecoilValueLoadable(getWeeklyDataSelector);
    const crypto = useRecoilValueLoadable(getCryptoNews);
    
    // },[hosturl]);

    //console.log(hosturl)

    const handleResize = () => { 
        const Mobile = window.matchMedia("(max-width: 600px)").matches;
        setIsMobile(Boolean(Mobile));
        counterHandler((pre: boolean) => pre = isMobile);
    };

    useEffect(() => {
        // const Mobile = navigator.userAgent.match(/IEMobile/i);

        const Mobile = window.matchMedia("(max-width: 600px)").matches;
        setIsMobile(Boolean(Mobile));
        counterHandler((pre: boolean) => pre = isMobile);

        if (typeof window !== "undefined") { // 윈도우 타입이 언디파인드가 아닐때 실행

        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        }
        }
    });
    // currentCount == true -> 600px 이하..

    return (
    <>  
        <Script strategy='beforeInteractive' src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_KEP}`} />
        <Global styles={style}/>
        {
            mobileView
            ? <Header_m />
            : <Header />
        }
            <section css={css`
                ${CBP[1]} {
                    padding-top : 75px;
                }`
            }>
                {props.children}
                {
                    mobileView
                    ? null
                    : <BrowserChange />
                }
            </section>
            
        {
            mobileView
            ? <Footer_m />
            : <Footer />
        }
    </>
    )
}

export default Layout