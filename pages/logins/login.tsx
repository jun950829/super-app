import type { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/router";
import { Input } from '@/elements/elements';


const Login: NextPage = () => {

    const router = useRouter();

    return (
    
        <section id='loginSection'>
            <div className='loginArea'>

                <Input placeholder={'아니어이없어'} className={'id_input'}/>

                <div className='btnRow'>
                    <div>회원가입</div>
                    <div>아이디 찾기</div>
                    <div>비밀번호 찾기</div>
                </div>
            </div>
        </section>
    
    );
}

export default Login;
