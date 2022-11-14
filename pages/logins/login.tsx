import type { NextPage } from "next";
import { useRouter } from "next/router";


const Login: NextPage = () => {

    const router = useRouter();

    return (
    
        <section id='loginSection'>
            <div className='loginArea'>

                <input type="text" />

                <input type="text" />

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
