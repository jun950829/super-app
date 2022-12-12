import type { NextPage } from "next";
import TopLayer from '@/components/toplayer';
import { ASSET_BTNS } from '@/data/button';
import { ASSET_TITLE, ASSET_SUBTITLE } from '@/data/texts';
import ListForm from '@/components/listform';

const Report : NextPage = () => {


    return (
        <section id='report'>
            <div className='centerSet'>
                <TopLayer data={ASSET_BTNS} title={ASSET_TITLE} subtitle={ASSET_SUBTITLE} selected={'report'} />

                <ListForm data={[]}/>
            </div>
        </section>
    )
}

export default Report;