import { atom } from 'recoil';

export const isHostUrl = atom({
    key : 'isHostUrl',
    default: process.env.NEXT_PUBLIC_WEB_URL
});

export default isHostUrl;