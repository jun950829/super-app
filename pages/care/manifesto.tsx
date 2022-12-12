import type { NextPage } from "next";
import TopLayer from '@/components/toplayer';
import { CARE_BTNS } from '@/data/button';
import { CARE_TITLE, CARE_SUBTITLE } from '@/data/texts';

const Menifesto : NextPage = () => {


    return (
        <section id='menifesto'>
            <div className='centerSet'>
                <TopLayer data={CARE_BTNS} title={CARE_TITLE} subtitle={CARE_SUBTITLE} selected={'menifesto'} />
            </div>
        </section>
    )
}

export default Menifesto;