import { atom, selector } from "recoil";
import axios from "axios";
import isMobile from 'pages/_app';

export const getAdminDataSelector = selector({
  key: "getAdminDataSelector",
  get: async () => {
    
    const res = await axios.get(process.env.NEXT_PUBLIC_CDN_URL + "safe/SAFE.json")
    if(res.status == '200') {
      return res.data;
    }
    return '';
  },
});

export const getWeeklyDataSelector = selector({
  key: "getWeeklyDataSelector",
  get: async () => {
    const res = await axios.get(process.env.NEXT_PUBLIC_CDN_URL + "safe_weekly/SAFE_WEEKLY.json");
    if(res.status == '200') {
      let result = res.data;
      let resultList = [];

      let weeklyData = result['WEEKLY'].contents;
      weeklyData.forEach((data) => data.category = result['WEEKLY'].name)

      resultList = [...weeklyData];

      resultList.sort((a, b) => {
          let t1 = new Date(a.updatedDate)
          let t2 = new Date(b.updatedDate)

          return (t2.getTime() - t1.getTime());
      });



      return resultList;
    }
    return '';
  },
});

export const getVaDataSelector = selector({
  key: "getVaDataSelector",
  get: async () => {
    const res = await axios.get(process.env.NEXT_PUBLIC_CDN_URL + "safe_va/SAFE_VA.json");
    if(res.status == '200') {
      let result = res.data;
      let resultList = [];

      let trendData = result['TRENDS'].contents;
      trendData.forEach((data) => data.category = result['TRENDS'].name)

      let issueData = result['ISSUE'].contents;
      issueData.forEach((data) => data.category = result['ISSUE'].name)

      let etcData = result['ETC'].contents;
      etcData.forEach((data) => data.category = result['ETC'].name)

      resultList = [...trendData, ...issueData, ...etcData];

      resultList.sort((a, b) => {
          let t1 = new Date(a.updatedDate)
          let t2 = new Date(b.updatedDate)

          return (t2.getTime() - t1.getTime());
      });



      return resultList;
    }
    return '';
  },
});

export const getSNDataSelector = selector({
  key: "getSNDataSelector",
  get: async () => {

    
    const res = await axios.get(process.env.NEXT_PUBLIC_CDN_URL + "sn/SN.json")
    if(res.status == '200') {
      let result = res.data;
      let resultList = [];

      let noticeData = result['NOTICE'].contents;
      noticeData.forEach((data) => data.category = result['NOTICE'].name)

      let infoData = result['INFO'].contents;
      infoData.forEach((data) => data.category = result['INFO'].name)

      resultList = [...noticeData, ...infoData];

      resultList.sort((a, b) => {
          let t1 = new Date(a.updatedDate)
          let t2 = new Date(b.updatedDate)

          return (t2.getTime() - t1.getTime());
      });



      return resultList;
    }
    return [];
  },
});


export const getVAreportSelector = selector({
  key: "getVAreportSelector",
  get: async () => {
    const res = await axios.get(process.env.NEXT_PUBLIC_CDN_URL + "safe_report/SAFE_REPORT.json")
    if(res.status == '200') {
      let result = res.data;
      let resultList = [];

      resultList = result['REPORT'].contents;

      resultList.sort((a, b) => {
          let t1 = new Date(a.updatedDate)
          let t2 = new Date(b.updatedDate)

          return (t2.getTime() - t1.getTime());
      });

      return resultList;
    }
    return [];
  },
});

export const getCryptoNews = selector({
  key : 'getCryptoNews',
  // get : async () => {
  //   const res = await axios.get(process.env.NEXT_PUBLIC_WEB_URL + '/api/tb_content/news_list', {
  //     params: {
  //         category : '',
  //         keyword : '',
  //         page : 0,
  //         size : 15,
  //         isAll : true,
  //     }})

  //     let result = [];

  //     if(res.status == 200) {
  //         result = res.data.content;
  //         return result;
  //       } else {
  //         result= [];
  //         return result;
  //     }
  //   }

    get : async () => {
    const res = await axios.get(process.env.NEXT_PUBLIC_CDN_URL + 'news/coinness.json');

      let result = [];

      console.log(res);

      if(res.status == 200) {
          result = res.data.content;
          return result;
        } else {
          result= [];
          return result;
      }
    }
})


export const setIsMobile = selector({
  key: "setIsMobile",
  get: ({get}) => {
      
  },
});



