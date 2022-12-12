import type { NextPage } from "next";
import TopLayer from '@/components/toplayer';
import { CARE_BTNS } from '@/data/button';
import { CARE_TITLE, CARE_SUBTITLE } from '@/data/texts';


const Guideline : NextPage = () => {


    return (
        <section id='guidelines'>
            <div className='centerSet'>
                <TopLayer data={CARE_BTNS} title={CARE_TITLE} subtitle={CARE_SUBTITLE} selected={'guidelines'} />
            </div>
        </section>
    )
}

export default Guideline;