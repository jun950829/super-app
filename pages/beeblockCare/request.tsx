import type { NextPage } from "next";
import { useRouter } from "next/router";
import { css } from '@emotion/react';
import { useEffect, useState, useRef  } from 'react';
import Image from 'next/image';
import careImg from '@/images/main_page/beeblockcare_01.webp';
import careImg_m from '@/images/main_page/beeblockcare_01_m.jpg';
import careTextImg from '@/images/beeblockCare/caretext.png';
import careTextImg_m from '@/images/beeblockCare/caretext_m.png';
import careAgreeImg from '@/images/beeblockCare/careagree.png';
import careAgreeImg_m from '@/images/beeblockCare/careagree_m.png';
import Input from '../../public/elements/input';
import axios from 'axios';
import isMobileData from '../../public/states/atom/atom'
import {useRecoilValue} from "recoil";
import { CBP } from '@/data/settings';

const Home: NextPage = (props : any) => {
  const [isFocusInput, setIsFocusInput] = useState(false);
  const textAreaValue : any = useRef();
  const validCheck01 : any = useRef();
  const validCheck02 : any = useRef();
  const textAreaSeleted : any = useRef();
  const fileData01 : any = useRef();
  const fileData02 : any = useRef();
  const fileData03 : any = useRef();
  const validTextName : any = useRef();
  const validTextJuno : any = useRef();
  const validTextEmail : any = useRef();
  const validTextAddress : any = useRef();
  const validTextTitle : any = useRef();
  const validTextContents : any = useRef();
  const validTextPhone : any = useRef();
  const requestForm : any = useRef();
  const mobileWidth : any = useRef();
  const [isPopupShow, setIsPopupShow] = useState(false);
  const [isFileName01, setIsFileName01] = useState('');
  const [isFiledata01, setIsFiledata01] = useState('');
  const [isFileName02, setIsFileName02] = useState('');
  const [isFiledata02, setIsFiledata02] = useState('');
  const [isFileName03, setIsFileName03] = useState('');
  const [isFiledata03, setIsFiledata03] = useState('');
  const [isName, setIsName] = useState('');
  const [isJuno, setIsJuno] = useState('');
  const [isPhone, setIsPhone] = useState('');
  const [isEmail, setIsEmail] = useState('');
  const [isAddress, setIsAddress] = useState('');
  const [isTitle, setIsTitle] = useState('');
  const mobileView = useRecoilValue(isMobileData);  // 읽기 전용!
  
  useEffect(() => {
    if (mobileView) {
        mobileWidth.current.style.width = '100%';
        mobileWidth.current.style.padding = '10px';
    } else {
        mobileWidth.current.style.width = '900px';
        mobileWidth.current.style.padding = '0';
    }
  })


  const mainBannerCSS = css`
      width: 100%;


      .input:focus {
        border: 1px solid transparent;
        outline: none;
      }

      .commonInput {
        width: 100%;
        height: 70%;
        border: 1px solid #333333;
        border-radius: 5px;
        background: #E9E9E9;
        border-radius: 3px;
        border:none;
        padding-left: 10px;
      }

      .commonInput:focus {
        background: #C7DDFF;
        border: 1px solid transparent;
        outline: none;
      }
      
      .beeblockCarePage {
        height: 600px;
        background-image: url("/images/beeblockCare/carebanner.webp");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        background-repeat: no-repeat;
        padding-top: 100px;
      }

      .mainTextArea {
          width: 100%;
          margin-bottom: 50px;

          .mainText {
              width: 100%;
              font-family: 'paybooc';

              .top_text {
                  text-align: left;
                  margin-bottom: 10px;
                  font-weight: 700;
                  font-size: 41px;
                  color: #E9F4FF;
                  text-shadow: 2px 2px 1px rgba(11, 15, 54, 0.54);
                  
              }

              .mid_text {
                  text-align: left;
                  margin-bottom: 10px;
                  font-weight: 800;
                  font-size: 53px;
                  color: #FFFFFF;
                  text-shadow: 2px 2px 1px rgba(11, 15, 54, 0.54);
              }

              .bot_text {
                  text-align: left;
                  font-weight: 700;
                  font-size: 22px;
                  color: #FFFFFF;
                  text-shadow: 2px 2px 1px rgba(11, 15, 54, 0.54);
              }
          }
      }
      
  
  `;
  const mainBannerMobileCSS = css`
      width: 100%;


      .input:focus {
        border: 1px solid transparent;
        outline: none;
      }

      .commonInput {
        width: 100%;
        height: 70%;
        border: 1px solid #333333;
        border-radius: 5px;
        background: #E9E9E9;
        border-radius: 3px;
        border:none;
        padding-left: 10px;
      }

      .commonInput:focus {
        background: #C7DDFF;
        border: 1px solid transparent;
        outline: none;
      }
      
      .beeblockCarePage {
        height: 80vw;
        background-image: url("/images/beeblockCare/carebanner_m.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        background-repeat: no-repeat;
        padding-top: 100px;
      }

      .mainTextArea {
          width: 100%;
          margin-bottom: 50px;

          .mainText {
              width: 100%;
              font-family: 'paybooc';

              .top_text {
                  text-align: left;
                  margin-bottom: 10px;
                  font-weight: 700;
                  font-size: 5vw;
                  color: #E9F4FF;
                  text-shadow: 1px 1px 1px rgba(11, 15, 54, 0.54);
              }

              .mid_text {
                  text-align: left;
                  margin-bottom: 10px;
                  font-weight: 800;
                  font-size: 6vw;
                  color: #FFFFFF;
                  text-shadow: 1px 1px 1px rgba(11, 15, 54, 0.54);
              }

              .bot_text {
                  text-align: left;
                  font-weight: 700;
                  font-size: 4vw;
                  color: #FFFFFF;
                  text-shadow: 2px 2px 1px rgba(11, 15, 54, 0.54);
              }
          }
      }
  `;


  const centerCSS = css`
      margin: 0 auto;
      margin-bottom: 30px;
        
  `;
  const centerCSSBot = css`
      margin: 0 auto;
      margin-bottom: 15px;
  `;

  const fontSizeCSS = css`
      width: 900px;
      margin: 0 auto;
      
      h2 {
        font-weight: 700;
        font-size: 30px;
        ${CBP[1]} {
          font-size: 5vw;
        }
        color: #2A3C4E;
        margin-bottom: 25px;
        font-family: 'paybooc';
      }
      

      .agreeArea {
        width: 100%;
        margin-bottom: 45px;

        label {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          
          span {
            color: #34548D;
          }

          input {
            margin-right: 10px;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            border: 1px solid #999;
            appearance: none;
            cursor: pointer;
            transition: background 0.2s;
          }

          input[type="checkbox"]:checked {
            background: 50% 50% url("/images/beeblockCare/check.png") no-repeat;
            background-color: #6389ED;
            border: none;
          }
        }
      }
  `;

  const careTextMobileCSS = css`
      text-align: center;
      font-size: 24px;
      color: #333;
      font-family: 'paybooc';
      font-weight: 700;
      margin-bottom: 15px;
  `;

  const careTextCSS = css`
      text-align: center;
      font-size: 24px;
      color: #333;
      font-family: 'paybooc';
      font-weight: 700;
      margin-bottom: 30px;
  `;

  const requestFormCSS = css`
      width: 80%;
      height: 760px;
      margin: 0 auto;
      background: #FFFFFF;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
      padding: 15px;
      margin-bottom: 40px;


      .requestTitle {
        text-align: center;
        font-size: 24px;
        color: #333;
        margin-bottom: 15px;
      }

      .innerForm {
        width: 100%;
        padding: 15px;
        margin-bottom: 40px;

        .topSection {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
        
          .requestInfo  {
            width: calc(100% / 2 - 15px);
            height: 45px;
            display: flex;
            margin-bottom: 30px;
            position: relative;

            
            
            .requestName {
              width: 114px;
              display: flex;
              justify-content: flex-statr;
              align-items: center;
              padding-left: 17px;

            }

            .requestData {
              width: calc(100% - 114px);
              display: flex;
              padding: 0 15px 0 0;
              align-items: center;
              justify-content: center;
              position: relative;

              .validText {
                font-size: 14px;
                color: #E15F5F;
                position: absolute;
                left: 0;
                bottom: -22px;
                display: none;
              }
            }

          }

          .selected {
            background: #FFFFFF;
            box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
          }
        }

        .botSection {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
        
          .requestInfo, .requestInfo2 {
            width: 100%;
            height: 45px;
            display: flex;
            margin-bottom: 30px;
            position: relative;

            
            
            .requestName {
              width: 113px;
              display: flex;
              justify-content: flex-statr;
              align-items: center;
              padding-left: 17px;

            }

            .requestData {
              width: calc(100% - 113px);
              display: flex;
              padding: 0 15px 0 0;
              align-items: center;
              justify-content: center;
              position: relative;

              .validText {
                font-size: 14px;
                color: #E15F5F;
                position: absolute;
                left: 0;
                bottom: -22px;

                display: none;
              }
            }

          }

          .longArea {
            height: 300px;
            margin-bottom: 15px;

            .textAreaWrap {
              width: 100%;
              height: 90%;
              display: flex;
              align-items: center;
            }

            textarea {
              width: 100%;
              height: 90%;
              border-radius: 3px;
              background: #E9E9E9;
              resize: none;
              outline: none;
              padding: 15px;
            }

            .requestName {
              text-align: center;
            }

            textarea::placeholder {
              color: #7B7B7B;
            }

            textarea:focus {
              background: #C7DDFF;
              border: 1px solid transparent;
              outline: none;
            }
          }

          .selected {
            background: #FFFFFF;
            box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
          }
        }
        
      }
  `;
  const requestFormMobileCSS = css`
      width: 90%;
      margin: 0 auto;
      background: #FFFFFF;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
      padding: 15px;
      margin-bottom: 40px;

      


      .requestTitle {
        text-align: center;
        font-size: 24px;
        color: #333;
        margin-bottom: 15px;
      }

      .innerForm {
        width: 100%;

        .topSection {

          .requestInfo  {
            width: 100%;
            height: 45px;
            margin-bottom: 40px;
            position: relative;

            
            
            .requestName {
              width: 100%;
              text-align: left;
              height: 35px;

            }

            .requestData {
              width: 100%;
              height: 50px;
              position: relative;

              input {
                text-align: left;
              }

              .validText {
                font-size: 14px;
                color: #E15F5F;
                position: absolute;
                left: 0;
                bottom: -10px;
                display: none;
              }

              input::placeholder {
                text-align: left;
              }

            }

          }

          

          .selected {
            background: #FFFFFF;
            box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
          }
        }


        .botSection {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;

          .fileBtnArea {
            width: 123px;
            height: 100%;
            margin: 0 auto;
            background: #FFFFFF;
            box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.23);
            border-radius: 28.5044px;
            cursor: pointer;
    
            p {
              font-family: 'Noto Sans KR';
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              color: #000000;
              text-align: center;
              line-height: 26px;
            }
          }
        
          .requestInfo {
            width: 100%;
            height: 45px;
            margin-bottom: 40px;
            position: relative;

            
            
            .requestName {
              width: 100%;
              height: 35px;
              text-align: left;
            }

            .requestData {
              width: 100%;
              position: relative;
              height: 50px;

              .validText {
                font-size: 14px;
                color: #E15F5F;
                position: absolute;
                left: 0;
                bottom: -10px;

                display: none;
              }
            }

          }

          .requestInfo2 {
            width: 100%;
            
            .requestName {
              height: 35px;
            }
            
            .requestData {
              height: 350px;
              position: relative;

              .validText {
                font-size: 14px;
                color: #E15F5F;
                position: absolute;
                left: 0;
                bottom: -22px;

                display: none;
              }

              textarea {
                height: 100%;
              }
            }

            
          }

          .longArea {
            margin-bottom: 15px;

            .textAreaWrap {
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
            }

            textarea {
              width: 100%;
              height: 90%;
              border-radius: 3px;
              background: #E9E9E9;
              resize: none;
              outline: none;
              padding: 15px;
            }

            .requestName {
              text-align: left;
            }

            textarea::placeholder {
              color: #7B7B7B;
            }

            textarea:focus {
              background: #C7DDFF;
              border: 1px solid transparent;
              outline: none;
            }
          }

          .selected {
            background: #FFFFFF;
            box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
          }
        }
        
      }
  `;
  const requestFormAgreeCSS = css`
    width: 80%;
    margin: 0 auto;
    background: #FFFFFF;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 15px 15px 15px 15px; 
    margin-bottom: 40px;

    .agreeAreaBot {
      margin-bottom: 0;
    }

    .careAgreeText {
      text-align: center;
      font-size: 24px;
      color: #333;
      font-family: 'paybooc';
      font-weight: 700;
      margin-bottom: 15px;
    }
  `;
  const requestFormAgreeMobileCSS = css`
    width: 90%;
    margin: 0 auto;
    background: #FFFFFF;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 15px 15px 15px 15px; 
    margin-bottom: 40px;

    .agreeAreaBot {
      margin-bottom: 0;
    }

    .careAgreeText {
      text-align: center;
      font-size: 24px;
      color: #333;
      font-family: 'paybooc';
      font-weight: 700;
      margin-bottom: 15px;
    }
  `;

  const btnAreaCSS = css`
      width: 100%;
      margin: 0 auto;
      margin-bottom: 40px;
      display: flex;
      justify-content: center;
      
      .submitBtn {
        width: 270px;
        height: 43px;
        background: #FFFFFF;
        box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.23);
        border-radius: 28.5044px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        p {
          font-family: 'Noto Sans KR';
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          color: #203864;
        }
      }

  `;

  const fileArea = css`
      width: 100%;

      .fileTextInfo {
        width: 100%;
        text-align: right;
        font-size: 14px;
        color: #7B7B7B;
        cursor: pointer;
        margin-bottom: 20px;
      }
      
      .fileBtnArea {
        width: 123px;
        height: 100%;
        margin: 0 auto;
        background: #FFFFFF;
        box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.23);
        border-radius: 28.5044px;
        cursor: pointer;
        margin-top: 10px;

        p {
          font-family: 'Noto Sans KR';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          color: #000000;
          text-align: center;
          line-height: 26px;
        }
      }
  `
  const file_popup_CSS = css`
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background: rgba(0,0,0, 0.2);

      .popup_form {
        width: 480px;
        height: 495px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 12px;
        
        h2 {
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          text-align: center;
          padding-bottom: 14px;
          border-bottom: 1px solid #D9D9D9;
          margin-bottom: 14px;
        }

        .notice {
          width: 100%;
          height: 150px;
          padding: 0 25px;
          margin-bottom: 15px;

          .contents_text {
            width: 100%;
            height: 100%;
            background: #E9E9E9;
            border-radius: 10px;
            padding: 5px 10px;
            font-size: 13px;
            color: #7B7B7B;

            .warn {
              color: #E15F5F;
              margin-bottom: 15px;
            }

            .lastParam {
              margin-bottom: 15px;
            }
          }
        }

        .file_Area {
          padding: 0 25px;
          margin-bottom: 15px;
          

          .file_wrap {
            width: 100%;
            height: 45px;
            background: #FFFFFF;
          }

          .selected_file {
            box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
          }

          

          .fileboxArea {
            display: flex;
            padding-left: 15px;
            align-items: center;

            .upload-name {
              width: 230px;
              height: 25px;
              background: #E9E9E9;
              border-radius: 3px;
              margin-right: 15px;
              padding-left: 10px;
              font-size: 14px;
              color: #7B7B7B;
            }
            .upload-name:focus {
              
              border: 1px solid transparent;
              outline: none;
            }


            label {
              line-height: 45px;
              font-weight: 400;
              font-size: 14px;
              color: #7B7B7B;
              cursor: pointer;
              margin-right: 10px;
            }

            span {
              font-size: 21px;
              color: #7B7B7B;
              cursor: pointer;
            }

            p {
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              color: #7B7B7B;
              margin-right: 15px;
              line-height: 45px;
            }

          }
          

          .fileboxArea input[type="file"] {
            position: absolute;
            width: 0;
            height: 0;
            padding: 0;
            overflow: hidden;
            border: 0;
          }
        }

        .btn_Area {
          padding: 0 25px;
          width: 100%;
          height: 45px;
          display: flex;
          justify-content: space-between;

          div {
            width: calc(100% / 2 - 10px);
            height: 100%;
            border-radius: 10px;
            cursor: pointer;

            p {
              text-align: center;
              line-height: 45px;
              font-size: 14px;
              font-weight: 400;
            }
          }

          .cancel {
            background: #999999;
            color: #fff;
          }

          .confirm {
            border: 1px solid #CDCDCD;
            color: #7B7B7B;
          }
          
        }
        
      }
  `;
  const file_mobile_popup_CSS = css`
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background: rgba(0,0,0, 0.2);

      .popup_form {
        width: 90%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 12px;
        
        h2 {
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          text-align: center;
          padding-bottom: 14px;
          border-bottom: 1px solid #D9D9D9;
          margin-bottom: 14px;
        }

        .notice {
          width: 100%;
          padding: 0 5px;
          margin-bottom: 15px;

          .contents_text {
            width: 100%;
            height: 100%;
            background: #E9E9E9;
            border-radius: 10px;
            padding: 5px 10px;
            font-size: 13px;
            color: #7B7B7B;

            .warn {
              color: #E15F5F;
              margin-bottom: 15px;
            }

            .lastParam {
              margin-bottom: 15px;
            }
          }
        }

        .file_Area {
          margin-bottom: 15px;
          

          .file_wrap {
            width: 100%;
            height: 45px;
            background: #FFFFFF;
          }

          .selected_file {
            box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
          }

          

          .fileboxArea {
            display: flex;
            padding-left: 5px;
            justify-content: space-around;
            align-items: center;

            .upload-name {
              width: 45%;
              height: 25px;
              background: #E9E9E9;
              border-radius: 3px;
              margin-right: 5px;
              padding-left: 10px;
              font-size: 14px;
              color: #7B7B7B;
            }
            .upload-name:focus {
              
              border: 1px solid transparent;
              outline: none;
            }


            label {
              line-height: 45px;
              font-weight: 400;
              font-size: 14px;
              color: #7B7B7B;
              cursor: pointer;
              margin-right: 10px;
            }

            span {
              font-size: 21px;
              color: #7B7B7B;
              cursor: pointer;
            }

            p {
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              color: #7B7B7B;
              margin-right: 5px;
              line-height: 45px;
            }

          }
          

          .fileboxArea input[type="file"] {
            position: absolute;
            width: 0;
            height: 0;
            padding: 0;
            overflow: hidden;
            border: 0;
          }
        }

        .btn_Area {
          padding: 0 25px;
          width: 100%;
          height: 45px;
          display: flex;
          justify-content: space-between;

          div {
            width: calc(100% / 2 - 10px);
            height: 100%;
            border-radius: 10px;
            cursor: pointer;

            p {
              text-align: center;
              line-height: 45px;
              font-size: 14px;
              font-weight: 400;
            }
          }

          .cancel {
            background: #999999;
            color: #fff;
          }

          .confirm {
            border: 1px solid #CDCDCD;
            color: #7B7B7B;
          }
          
        }
        
      }
  `;

  const nameValue = (e : any) => {
    setIsName(e.target.value);
  }
  const junoValue = (e : any) => {
    setIsJuno(e.target.value);
  }
  const phoneValue = (e : any) => {
    setIsPhone(e.target.value);
  }
  const emailValue = (e : any) => {
    setIsEmail(e.target.value);
  }
  const addressValue = (e : any) => {
    setIsAddress(e.target.value);
  }
  const titleValue = (e : any) => {
    setIsTitle(e.target.value);
  }

  const selectedOption = (e : any) => {
    const targetArr = document.querySelectorAll('.requestInfo');
    
    textAreaSeleted.current.classList = 'requestInfo2 longArea';

    targetArr.forEach((el : any, idx : number) => {
      el.classList = 'requestInfo';
    })
  
    e.target.parentNode.parentNode.classList.value = 'requestInfo selected';    
    
  }

  const removeSelectedOption = (e : any) => {
    const targetArr = document.querySelectorAll('.requestInfo');
    
    targetArr.forEach((el : any, idx : number) => {
      el.classList = 'requestInfo';
    })

    e.target.parentNode.parentNode.classList.value = 'requestInfo2 longArea selected'; 
    
  }

  const popupShowing = () => {
    
    setIsPopupShow(true);
  }

  const deleteFile01 = () => {
    if(!confirm('첨부파일을 삭제 하시겠습니까 ?')) {
      return;
    }
    setIsFileName01('');
    
    if (!isFileName01 && !isFileName02 && !isFileName03) {
      requestForm.current.style.height = '760px';
    }
  }

  const deleteFile02 = () => {
    if(!confirm('첨부파일을 삭제 하시겠습니까 ?')) {
      return;
    }
    setIsFileName02('');
    if (!isFileName01 && !isFileName02 && !isFileName03) {
      requestForm.current.style.height = '760px';
    }
  }

  const deleteFile03 = () => {
    if(!confirm('첨부파일을 삭제 하시겠습니까 ?')) {
      return;
    }
    setIsFileName03('');
    if (!isFileName01 && !isFileName02 && !isFileName03) {
      requestForm.current.style.height = '760px';
    }
  }

  const fileMapping01 = (e : any) => {
    const {name, files} = e.target;
    let tType = files[0].type.toString().split('/')[1].toLowerCase();
    let tSize = files[0].size<=2000000;
    
    if ((tType !== 'jpeg' && tType !== 'jpg' && tType !== 'png' && tType!== 'gif')||!tSize) {
      alert(`PNG, JPG, JPEG, GIF (2M 이하)만 첨부 가능합니다.`)
      return ;
    }

    setIsFileName01(e.target.files[0].name);
    setIsFiledata01(e.target.files[0]);
    
    const targetArr = document.querySelectorAll('.file_wrap');

    targetArr.forEach((el : any, idx : number) => {
      el.classList = 'file_wrap';
    })

    if (mobileView) {
      return ;
    }
    
    e.target.parentNode.parentNode.classList.value = 'file_wrap selected_file';
    requestForm.current.style.height = '790px';
  }

  const fileMapping02= (e : any) => {
    const {name, files} = e.target;
    let tType = files[0].type.toString().split('/')[1].toLowerCase();
    let tSize = files[0].size<=2000000;
    
    if ((tType !== 'jpeg' && tType !== 'jpg' && tType !== 'png' && tType!== 'gif')||!tSize) {
      alert(`PNG, JPG, JPEG, GIF (2M 이하)만 첨부 가능합니다.`)
      return ;
    }

    setIsFileName02(e.target.files[0].name);
    setIsFiledata02(e.target.files[0]);
    const targetArr = document.querySelectorAll('.file_wrap');

    targetArr.forEach((el : any, idx : number) => {
      el.classList = 'file_wrap';
    })

    if (mobileView) {
      return ;
    }
    e.target.parentNode.parentNode.classList.value = 'file_wrap selected_file';
    requestForm.current.style.height = '790px';
  }

  const fileMapping03 = (e : any) => {
    const {name, files} = e.target;
    let tType = files[0].type.toString().split('/')[1].toLowerCase();
    let tSize = files[0].size<=2000000;
    
    if ((tType !== 'jpeg' && tType !== 'jpg' && tType !== 'png' && tType!== 'gif')||!tSize) {
      alert(`PNG, JPG, JPEG, GIF (2M 이하)만 첨부 가능합니다.`)
      return ;
    }

    setIsFileName03(e.target.files[0].name);
    setIsFiledata03(e.target.files[0]);
    const targetArr = document.querySelectorAll('.file_wrap');

    targetArr.forEach((el : any, idx : number) => {
      el.classList = 'file_wrap';
    })

    if (mobileView) {
      return ;
    }
    e.target.parentNode.parentNode.classList.value = 'file_wrap selected_file';
    requestForm.current.style.height = '790px';
  }

  const fileSelectedOption = (e : any) => {
    const targetArr = document.querySelectorAll('.file_wrap');

    targetArr.forEach((el : any, idx : number) => {
      el.classList = 'file_wrap';
    })

    e.target.parentNode.parentNode.classList.value = 'file_wrap selected_file';
  }


  return (

      <section id='ew' css={mobileView ? mainBannerMobileCSS : mainBannerCSS}>
        <div className="beetrust_banner beeblockCarePage">
          <div className='centerSet mainArea'>
            <div className="mainTextArea">
              <div className="mainText">
                <p className="top_text">비블록 보호 서비스</p>
                <p className="mid_text">상담 신청</p>
                <p className="bot_text">투자자와 함께 문제 해결을 위하여 최선을 다하겠습니다.</p>
              </div>
            </div>
          </div>
        </div>
        <div css={fontSizeCSS} ref={mobileWidth}>
          <h2>상담 서비스 헌장</h2>

          <Image className="careImg" css={centerCSS} src={mobileView ? careImg_m : careImg} alt={'banner'}/>

          <div className="careText" css={mobileView ? careTextMobileCSS : careTextCSS}>이용안내</div>
          <Image className="careImg" css={centerCSSBot} src={mobileView ? careTextImg_m : careTextImg} alt={'banner'}/>
          
          <div className="agreeArea">
            <label htmlFor="agree">
              <input ref={validCheck01} id="agree" type="checkbox" />
              <span>본인은 위 내용을 충분히 숙지하였습니다.</span> 
            </label>
          </div>


          {
            mobileView
            ? <div ref={requestForm} className="requestForm" css={requestFormMobileCSS}>
                  <h2 className="requestTitle">서비스 신청서</h2>
                  <div className="innerForm">
                    <div className="topSection">
                      <div className="requestInfo">
                        <div className="requestName"><p>성명</p></div>
                        <div className="requestData">
                          <input className="name commonInput" onChange={nameValue} />
                          {/* <Input text='test' placeholder='' className="name" /> */}
                          <span ref={validTextName} className="validText">* 필수입력</span>
                        </div>
                      </div>
                      <div className="requestInfo">
                        <div className="requestName"><p>생년월일</p></div>
                        <div className="requestData">
                          <input className="juno commonInput"  placeholder="YYYYMMDD" onChange={junoValue} />
                          {/* <Input text='test' placeholder='' className="juno" /> */}
                          <span ref={validTextJuno} className="validText">* 필수입력</span>
                        </div>
                      </div>
                      <div className="requestInfo">
                        <div className="requestName"><p>연락처</p></div>
                        <div className="requestData">
                            <input className="phone commonInput" onChange={phoneValue} />
                            {/* <Input text='test' placeholder='' className="phone" /> */}
                            <span ref={validTextPhone} className="validText">* 필수입력</span>
                        </div>
                      </div>
                      <div className="requestInfo">
                        <div className="requestName"><p>E-mail</p></div>
                        <div className="requestData">
                            <input className="email commonInput" onChange={emailValue} />
                            {/* <Input text='test' placeholder='' className="email" /> */}
                            <span ref={validTextEmail} className="validText">* 필수입력</span>
                        </div>
                      </div>
                    </div>
                    <div className="botSection">
                      <div className="requestInfo">
                        <div className="requestName"><p>거주지 주소</p></div>
                        <div className="requestData">
                            <input className="address commonInput" onChange={addressValue} />
                            {/* <Input text='test' placeholder='' className="address" /> */}
                            <span ref={validTextAddress} className="validText">* 필수입력</span>
                        </div>
                      </div>
                      <div className="requestInfo">
                        <div className="requestName"><p>제목</p></div>
                        <div className="requestData">
                            <input className="user_title commonInput" onChange={titleValue}  />
                            {/* <Input text='test' placeholder='' className="user_title" /> */}
                            <span ref={validTextTitle} className="validText">* 필수입력</span>
                        </div>
                      </div>
                      <div className="requestInfo2 longArea" ref={textAreaSeleted}>
                        <div className="requestName"><p>신청사유 (요구사항)</p></div>
                        <div className="requestData">
                          
                          <textarea placeholder="육하원칙에 따라 100자 이상 상세히 기술해 주세요." className="user_content" ref={textAreaValue}>

                          </textarea>
                          <span ref={validTextContents} className="validText">* 필수입력</span>
                          
                        </div>
                      </div>
                    <div className="filebox" css={fileArea} >
                      {
                        (isFileName01 || isFileName02 || isFileName03)
                        ? <p className="fileTextInfo" onClick={popupShowing}>첨부파일이 첨부 되었습니다. 클릭해서 확인하세요.</p>
                        : null
                      }
                    </div>
                    <div className="fileBtnArea" onClick={popupShowing}>
                        <p>파일 첨부</p>
                    </div>
                    
                  </div>
                </div>
              </div>
            : <div ref={requestForm} className="requestForm" css={requestFormCSS}>
                  <h2 className="requestTitle">서비스 신청서</h2>
                  <div className="innerForm">
                    <div className="topSection">
                      <div className="requestInfo selected">
                        <div className="requestName"><p>성명</p></div>
                        <div className="requestData">
                          <input className="name commonInput" onFocus={selectedOption} onChange={nameValue} />
                          {/* <Input text='test' placeholder='' className="name" /> */}
                          <span ref={validTextName} className="validText">* 필수입력</span>
                        </div>
                      </div>
                      <div className="requestInfo">
                        <div className="requestName"><p>생년월일</p></div>
                        <div className="requestData">
                          <input className="juno commonInput"  placeholder="YYYYMMDD" onFocus={selectedOption} onChange={junoValue} />
                          {/* <Input text='test' placeholder='' className="juno" /> */}
                          <span ref={validTextJuno} className="validText">* 필수입력</span>
                        </div>
                      </div>
                      <div className="requestInfo">
                        <div className="requestName"><p>연락처</p></div>
                        <div className="requestData">
                            <input className="phone commonInput" onFocus={selectedOption} onChange={phoneValue} />
                            {/* <Input text='test' placeholder='' className="phone" /> */}
                            <span ref={validTextPhone} className="validText">* 필수입력</span>
                        </div>
                      </div>
                      <div className="requestInfo">
                        <div className="requestName"><p>E-mail</p></div>
                        <div className="requestData">
                            <input className="email commonInput" onFocus={selectedOption} onChange={emailValue} />
                            {/* <Input text='test' placeholder='' className="email" /> */}
                            <span ref={validTextEmail} className="validText">* 필수입력</span>
                        </div>
                      </div>
                    </div>
                    <div className="botSection">
                      <div className="requestInfo">
                        <div className="requestName"><p>거주지 주소</p></div>
                        <div className="requestData">
                            <input className="address commonInput" onFocus={selectedOption} onChange={addressValue} />
                            {/* <Input text='test' placeholder='' className="address" /> */}
                            <span ref={validTextAddress} className="validText">* 필수입력</span>
                        </div>
                      </div>
                      <div className="requestInfo">
                        <div className="requestName"><p>제목</p></div>
                        <div className="requestData">
                            <input className="user_title commonInput" onFocus={selectedOption} onChange={titleValue}  />
                            {/* <Input text='test' placeholder='' className="user_title" /> */}
                            <span ref={validTextTitle} className="validText">* 필수입력</span>
                        </div>
                      </div>
                      <div className="requestInfo2 longArea" ref={textAreaSeleted}>
                        <div className="requestName"><p>신청사유<br/>(요구사항)</p></div>
                        <div className="requestData">
                          
                          <textarea placeholder="육하원칙에 따라 100자 이상 상세히 기술해 주세요." className="user_content" ref={textAreaValue} onFocus={removeSelectedOption}>

                          </textarea>
                          <span ref={validTextContents} className="validText">* 필수입력</span>
                          
                        </div>
                      </div>
                    <div className="filebox" css={fileArea} >
                      {
                        (isFileName01 || isFileName02 || isFileName03)
                        ? <p className="fileTextInfo" onClick={popupShowing}>첨부파일이 첨부 되었습니다. 클릭해서 확인하세요.</p>
                        : null
                      }
                      <div className="fileBtnArea" onClick={popupShowing}>
                        <p>파일 첨부</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
          }
          

          <div className="requestFormAgree" css={mobileView ? requestFormAgreeMobileCSS : requestFormAgreeCSS}>
            <div className="careAgreeText">이용 동의서</div>
            <Image className="careImg" css={centerCSSBot} src={mobileView ? careAgreeImg_m : careAgreeImg} alt={'banner'}/>
            <div className="agreeArea agreeAreaBot">
              <label htmlFor="agreeBot">
                <input ref={validCheck02} id="agreeBot" type="checkbox" />
                <span>동의합니다.</span> 
              </label>
            </div>
          </div>

          <div className="btnArea" css={btnAreaCSS}>
            <div className="submitBtn"
              onClick={() => {
                const user_content = textAreaValue.current.value;
                const testUrl = 'https://www.zzzzzhahatestserver.beeblock.co.kr';
                const notTestUrl = 'https://www.beeblock.co.kr';
                const category = 'H_SH';
                const publicIp = '';
                const isGuest = 'Y';
                const url_noFile = "api/contact";
                const url_File = `api/contact/file`;
                const contents = ` 고객 생년월일 : ${isJuno} \n 고객 연락처 : ${isPhone} \n 고객 거주지 주소 : ${isAddress} \n 문의내용 : ${user_content}`;
                const nameReg = /^[가-힣a-zA-Z]+$/;
                const junoReg = /^[0-9]{8}$/;
                const phoneReg = /^\d{2,3}\d{3,4}\d{4}$/;
                const emailReg = /^[a-z0-9.\-_]+@([a-z0-9-]+\.)+[a-z]{2,6}$/;
                const addressReg = /^[가-힣a-zA-Z]+$/;
                //const titleReg = /^[가-힣a-zA-Z]+$/;
                //const contentsReg = /^[가-힣a-zA-Z]+$/;
                

                // checkbox...    
                if (!validCheck01.current.checked) {
                  alert('필수사항에 체크하셔야 문의 제출이 가능합니다.');
                  return;
                }

                if (!validCheck02.current.checked) {
                  alert('동의사항에 동의 하셔야 문의 제출이 가능합니다.');
                  return;
                }
                

                // name valid
                if (isName == '') {
                  alert('성명을 입력하세요.');
                  validTextName.current.style.display = 'block';
                  return;
                } else {
                  validTextName.current.style.display = 'none';
                  
                  if (!nameReg.test(isName)) {
                    alert('성명은 한글과 영문으로만 입력해주세요.');
                    return;
                  }
                }

                // juno valid
                if (isJuno == '') {
                  alert('생년월일을 입력하세요.');
                  validTextJuno.current.style.display = 'block';
                  return;
                } else {
                  validTextJuno.current.style.display = 'none';

                  if (!junoReg.test(isJuno)) {
                    alert('생년월일은 숫자 8자리로 입력 가능합니다.');
                    return;
                  }
                }


                // phone valid
                if (isPhone == '') {
                  alert('연락처를 입력하세요.');
                  validTextPhone.current.style.display = 'block';
                  return;
                } else {
                  validTextPhone.current.style.display = 'none';

                  if (!phoneReg.test(isPhone)) {
                    alert('연락처는 형식에 맞게 숫자로 입력해주세요.');
                    return;
                  }
                }
                

                // email valid
                if (isEmail == '') {
                  alert('E-mail 을 입력하세요.');
                  validTextEmail.current.style.display = 'block';
                  return;
                } else {
                  validTextEmail.current.style.display = 'none';

                  if (!emailReg.test(isEmail)) {
                    alert('E-mail 형식으로 입력해주세요.');
                    return;
                  }
                }


                // address valid
                if (isAddress == '') {
                  alert('거주지 주소를 입력하세요.');
                  validTextAddress.current.style.display = 'block';
                  return;
                } else {
                  validTextAddress.current.style.display = 'none';

                  if (isAddress.length > 70) {
                    alert('주소지는 최대 70글자 까지 입력 가능합니다.');
                    return;
                  }
                }
                

                // title valid
                if (isTitle == '') {
                  alert('제목을 입력하세요.');
                  validTextTitle.current.style.display = 'block';
                  return;
                } else {
                  validTextTitle.current.style.display = 'none';

                  // if (!nameReg.test(isTitle)) {
                  //   alert('제목은 한글과 영문으로 입력해주세요.');
                  //   return;
                  // }
                }


                // contents valid
                if (user_content == '') {
                  alert('신청사유를 입력하세요.');
                  validTextContents.current.style.display = 'block';
                  return;
                } else {
                  validTextContents.current.style.display = 'none';

                  if (user_content.length < 100) {
                    alert('신청사유는 100자 이상 기입 해주세요.');
                    return;
                  }

                }
                

                // 확인창..
                if (!confirm("문의를 등록 하시겠습니까 ?")) {
                  return ;
                }

                
              
                if(isFileName01 || isFileName02 || isFileName03) {
                  

                  let formData = new FormData()
                  formData.append('file', isFiledata01);
                  formData.append('file2',isFiledata02);
                  formData.append('file3',isFiledata03);
                  // formData.append('title',isTitle);
                  // formData.append('text',user_content);
                  // formData.append('writerUsername',isEmail);
                  // formData.append('writerNick',isName);
                  // formData.append('category',category);
                  // formData.append('publicIp',publicIp);
                  // formData.append('isGuest',isGuest);

                  formData.append('contact', new Blob([JSON.stringify({
                    title: isTitle,
                    text: contents,
                    writerUsername: isEmail,
                    writerNick: isName,
                    category: category,
                    publicIp: publicIp,
                    isGuest: isGuest,
                    })], {
                      type: "application/json",
                    }))
  
                  
                    
                    axios.post(process.env.NEXT_PUBLIC_WEB_URL + url_File, formData, {headers: {
                      'Content-Type': 'multipart/form-data;charset=UTF-8'
                    }}).then((res : any) => {
                      if (res.status == '200') {
                        alert("답변은 등록하신 이메일로 회신 됩니다.");
                        location.reload();
                      } else {
                        alert("시스템 에러 입니다. 잠시 뒤에 다시 시도 해 주세요.");
                      }
                    })
                    
                  return ;
                } 



                axios.post(process.env.NEXT_PUBLIC_WEB_URL + url_noFile, {
                  title : isTitle, text : contents, writerUsername : isEmail, writerNick : isName, category, publicIp, isGuest,
                }).then((res : any) => {
                  if (res.status == '200') {
                    alert("답변은 등록하신 이메일로 회신 됩니다.");
                    location.reload();
                  } else {
                    alert("시스템 에러 입니다. 잠시 뒤에 다시 시도 해 주세요.");
                  }
                })


                // axios.post('https://zzzzzhahatestserver.beeblock.co.kr/api/contact', {
                //   title : isTitle, text : contents, writerUsername : isEmail, writerNick : isName, category, publicIp, isGuest,
                // }, {headers: {
                //   "nft-access-key": '',
                //   "nft-access-secret": "beeblock",
                //   "nft-access-media" : "web",
                // }}).then((res) => {
                //   alert("답변은 등록하신 이메일로 회신 됩니다.");
                //   location.reload();
                // })

                
                
                

              }}
            >
              <p>서비스 신청서 제출</p>
            </div>
          </div>
          
        </div>
        { 
          isPopupShow
          ? <div css={mobileView ? file_mobile_popup_CSS : file_popup_CSS} >
                <div className="popup_form">
                    <h2>증빙 자료 업로드</h2>
                    <div className="notice">
                      <div className="contents_text">
                        <p>민원 접수를 위한 증빙 자료가 있을 경우 첨부해 주세요.</p>
                        <p className="warn">※대리인 민원 신청 시 필수 서류</p>
                        <p>1.인감증명서(본인서명사실확인서)</p>
                        <p className="lastParam">2.위임장(인감도장 날인or본인서명사실확인서와 동일한 서명)</p>
                        <p>*첨부 가능 파일 PNG, JPEG, GIF (2M 이하)</p>
                      </div>
                    </div>
                    <div className="file_Area">
                        <div className="file_wrap selected_file">
                          <div className="fileboxArea">
                            <p>첨부1</p>
                            <input  className="upload-name filename01" onClick={fileSelectedOption} value={isFileName01} readOnly={true}/>
                            <label htmlFor="file_div1">파일 첨부</label> 
                            <input ref={fileData01} type="file" id="file_div1" onChange={fileMapping01} />
                            <span onClick={deleteFile01}>×</span>
                          </div>
                        </div>
                    </div>
                    <div className="file_Area">
                        <div className="file_wrap">
                          <div className="fileboxArea">
                            <p className="fileName02">첨부2</p>
                            <input className="upload-name" onClick={fileSelectedOption} value={isFileName02} readOnly={true}/>
                            <label htmlFor="file_div2">파일 첨부</label> 
                            <span onClick={deleteFile02}>×</span>
                            <input ref={fileData02} type="file" id="file_div2" onChange={fileMapping02} />
                          </div>
                        </div>
                    </div>
                    <div className="file_Area">
                        <div className="file_wrap">
                          <div className="fileboxArea">
                            <p className="fileName03">첨부3</p>
                            <input className="upload-name" onClick={fileSelectedOption} value={isFileName03} readOnly={true}/>
                            <label htmlFor="file_div3">파일 첨부</label>
                            <span onClick={deleteFile03}>×</span>
                            <input ref={fileData03} type="file" id="file_div3" onChange={fileMapping03} />
                          </div>
                        </div>
                    </div>
                    <div className="btn_Area">
                      <div className="cancel" onClick={() => setIsPopupShow(false)}><p>취소</p></div>
                      <div className="confirm" onClick={() => setIsPopupShow(false)}><p>확인</p></div>
                    </div>
                </div>
            </div>
            // mobileView
          : null
          
        }
        
      </section>
      
  );
  
}

export async function getStaticProps() {

  let safetyData = [];
  let crimeData = [];

  try {
    let data = await fetch(process.env.NEXT_PUBLIC_CDN_URL + 'safe/SAFE.json');
    let result = await data.json();
  
    safetyData = result['SAFETY'].contents;
    crimeData = result['CRIME'].contents;
  } catch(e) {
    safetyData = [];
    crimeData = [];
  }

 

  return {
      props: {
        safetyData : safetyData,
        crimeData : crimeData,
      }
  };
}

export default Home;