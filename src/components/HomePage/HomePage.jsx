import React from "react";
import TopNavbar from "./components/Nav/TopNavbar";
import Header from "./components/Sections/Header";
import Services from "./components/Sections/Services";
// Sections
import Projects from "./components/Sections/Projects";
import Blog from "./components/Sections/Blog";
import Pricing from "./components/Sections/Pricing";
import Contact from "./components/Sections/Contact";
import Footer from "./components/Sections/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const HomePage = () => {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      {/* <Projects /> */}
      <Blog />
      <Pricing />
      <Contact />
      <Footer />
      <style scoped>
        {`
        
          .container-fluid{margin-right:auto;margin-left:auto;padding-right:2rem;padding-left:2rem}.row{box-sizing:border-box;display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex:0 1 auto;-webkit-box-flex:0;flex:0 1 auto;-ms-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-1rem;margin-left:-1rem}.row.reverse{-ms-flex-direction:row-reverse;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;flex-direction:row-reverse}.col.reverse{-ms-flex-direction:column-reverse;-webkit-box-orient:vertical;-webkit-box-direction:reverse;flex-direction:column-reverse}.col-xs,.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{box-sizing:border-box;-ms-flex:0 0 auto;-webkit-box-flex:0;flex:0 0 auto;padding-right:1rem;padding-left:1rem}.col-xs{-webkit-flex-grow:1;-ms-flex-positive:1;-webkit-box-flex:1;flex-grow:1;-ms-flex-preferred-size:0;flex-basis:0;max-width:100%}.col-xs-1{-ms-flex-preferred-size:8.333%;flex-basis:8.333%;max-width:8.333%}.col-xs-2{-ms-flex-preferred-size:16.667%;flex-basis:16.667%;max-width:16.667%}.col-xs-3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}.col-xs-4{-ms-flex-preferred-size:33.333%;flex-basis:33.333%;max-width:33.333%}.col-xs-5{-ms-flex-preferred-size:41.667%;flex-basis:41.667%;max-width:41.667%}.col-xs-6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}.col-xs-7{-ms-flex-preferred-size:58.333%;flex-basis:58.333%;max-width:58.333%}.col-xs-8{-ms-flex-preferred-size:66.667%;flex-basis:66.667%;max-width:66.667%}.col-xs-9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}.col-xs-10{-ms-flex-preferred-size:83.333%;flex-basis:83.333%;max-width:83.333%}.col-xs-11{-ms-flex-preferred-size:91.667%;flex-basis:91.667%;max-width:91.667%}.col-xs-12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}.col-xs-offset-1{margin-left:8.333%}.col-xs-offset-2{margin-left:16.667%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-4{margin-left:33.333%}.col-xs-offset-5{margin-left:41.667%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-7{margin-left:58.333%}.col-xs-offset-8{margin-left:66.667%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-10{margin-left:83.333%}.col-xs-offset-11{margin-left:91.667%}.start-xs{-ms-flex-pack:start;-webkit-box-pack:start;justify-content:flex-start;text-align:start}.center-xs{-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center;text-align:center}.end-xs{-ms-flex-pack:end;-webkit-box-pack:end;justify-content:flex-end;text-align:end}.top-xs{-ms-flex-align:start;-webkit-box-align:start;align-items:flex-start}.middle-xs{-ms-flex-align:center;-webkit-box-align:center;align-items:center}.bottom-xs{-ms-flex-align:end;-webkit-box-align:end;align-items:flex-end}.around-xs{-ms-flex-pack:distribute;justify-content:space-around}.between-xs{-ms-flex-pack:justify;-webkit-box-pack:justify;justify-content:space-between}.first-xs{-ms-flex-order:-1;-webkit-box-ordinal-group:0;order:-1}.last-xs{-ms-flex-order:1;-webkit-box-ordinal-group:2;order:1}@media only screen and (min-width:48em){.container{width:46rem}.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9{box-sizing:border-box;-ms-flex:0 0 auto;-webkit-box-flex:0;flex:0 0 auto;padding-right:1rem;padding-left:1rem}.col-sm{-webkit-flex-grow:1;-ms-flex-positive:1;-webkit-box-flex:1;flex-grow:1;-ms-flex-preferred-size:0;flex-basis:0;max-width:100%}.col-sm-1{-ms-flex-preferred-size:8.333%;flex-basis:8.333%;max-width:8.333%}.col-sm-2{-ms-flex-preferred-size:16.667%;flex-basis:16.667%;max-width:16.667%}.col-sm-3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}.col-sm-4{-ms-flex-preferred-size:33.333%;flex-basis:33.333%;max-width:33.333%}.col-sm-5{-ms-flex-preferred-size:41.667%;flex-basis:41.667%;max-width:41.667%}.col-sm-6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}.col-sm-7{-ms-flex-preferred-size:58.333%;flex-basis:58.333%;max-width:58.333%}.col-sm-8{-ms-flex-preferred-size:66.667%;flex-basis:66.667%;max-width:66.667%}.col-sm-9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}.col-sm-10{-ms-flex-preferred-size:83.333%;flex-basis:83.333%;max-width:83.333%}.col-sm-11{-ms-flex-preferred-size:91.667%;flex-basis:91.667%;max-width:91.667%}.col-sm-12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}.col-sm-offset-1{margin-left:8.333%}.col-sm-offset-2{margin-left:16.667%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-4{margin-left:33.333%}.col-sm-offset-5{margin-left:41.667%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-7{margin-left:58.333%}.col-sm-offset-8{margin-left:66.667%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-10{margin-left:83.333%}.col-sm-offset-11{margin-left:91.667%}.start-sm{-ms-flex-pack:start;-webkit-box-pack:start;justify-content:flex-start;text-align:start}.center-sm{-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center;text-align:center}.end-sm{-ms-flex-pack:end;-webkit-box-pack:end;justify-content:flex-end;text-align:end}.top-sm{-ms-flex-align:start;-webkit-box-align:start;align-items:flex-start}.middle-sm{-ms-flex-align:center;-webkit-box-align:center;align-items:center}.bottom-sm{-ms-flex-align:end;-webkit-box-align:end;align-items:flex-end}.around-sm{-ms-flex-pack:distribute;justify-content:space-around}.between-sm{-ms-flex-pack:justify;-webkit-box-pack:justify;justify-content:space-between}.first-sm{-ms-flex-order:-1;-webkit-box-ordinal-group:0;order:-1}.last-sm{-ms-flex-order:1;-webkit-box-ordinal-group:2;order:1}}@media only screen and (min-width:62em){.container{width:61rem}.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9{box-sizing:border-box;-ms-flex:0 0 auto;-webkit-box-flex:0;flex:0 0 auto;padding-right:1rem;padding-left:1rem}.col-md{-webkit-flex-grow:1;-ms-flex-positive:1;-webkit-box-flex:1;flex-grow:1;-ms-flex-preferred-size:0;flex-basis:0;max-width:100%}.col-md-1{-ms-flex-preferred-size:8.333%;flex-basis:8.333%;max-width:8.333%}.col-md-2{-ms-flex-preferred-size:16.667%;flex-basis:16.667%;max-width:16.667%}.col-md-3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}.col-md-4{-ms-flex-preferred-size:33.333%;flex-basis:33.333%;max-width:33.333%}.col-md-5{-ms-flex-preferred-size:41.667%;flex-basis:41.667%;max-width:41.667%}.col-md-6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}.col-md-7{-ms-flex-preferred-size:58.333%;flex-basis:58.333%;max-width:58.333%}.col-md-8{-ms-flex-preferred-size:66.667%;flex-basis:66.667%;max-width:66.667%}.col-md-9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}.col-md-10{-ms-flex-preferred-size:83.333%;flex-basis:83.333%;max-width:83.333%}.col-md-11{-ms-flex-preferred-size:91.667%;flex-basis:91.667%;max-width:91.667%}.col-md-12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}.col-md-offset-1{margin-left:8.333%}.col-md-offset-2{margin-left:16.667%}.col-md-offset-3{margin-left:25%}.col-md-offset-4{margin-left:33.333%}.col-md-offset-5{margin-left:41.667%}.col-md-offset-6{margin-left:50%}.col-md-offset-7{margin-left:58.333%}.col-md-offset-8{margin-left:66.667%}.col-md-offset-9{margin-left:75%}.col-md-offset-10{margin-left:83.333%}.col-md-offset-11{margin-left:91.667%}.start-md{-ms-flex-pack:start;-webkit-box-pack:start;justify-content:flex-start;text-align:start}.center-md{-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center;text-align:center}.end-md{-ms-flex-pack:end;-webkit-box-pack:end;justify-content:flex-end;text-align:end}.top-md{-ms-flex-align:start;-webkit-box-align:start;align-items:flex-start}.middle-md{-ms-flex-align:center;-webkit-box-align:center;align-items:center}.bottom-md{-ms-flex-align:end;-webkit-box-align:end;align-items:flex-end}.around-md{-ms-flex-pack:distribute;justify-content:space-around}.between-md{-ms-flex-pack:justify;-webkit-box-pack:justify;justify-content:space-between}.first-md{-ms-flex-order:-1;-webkit-box-ordinal-group:0;order:-1}.last-md{-ms-flex-order:1;-webkit-box-ordinal-group:2;order:1}}@media only screen and (min-width:75em){.container{width:71rem}.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9{box-sizing:border-box;-ms-flex:0 0 auto;-webkit-box-flex:0;flex:0 0 auto;padding-right:1rem;padding-left:1rem}.col-lg{-webkit-flex-grow:1;-ms-flex-positive:1;-webkit-box-flex:1;flex-grow:1;-ms-flex-preferred-size:0;flex-basis:0;max-width:100%}.col-lg-1{-ms-flex-preferred-size:8.333%;flex-basis:8.333%;max-width:8.333%}.col-lg-2{-ms-flex-preferred-size:16.667%;flex-basis:16.667%;max-width:16.667%}.col-lg-3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}.col-lg-4{-ms-flex-preferred-size:33.333%;flex-basis:33.333%;max-width:33.333%}.col-lg-5{-ms-flex-preferred-size:41.667%;flex-basis:41.667%;max-width:41.667%}.col-lg-6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}.col-lg-7{-ms-flex-preferred-size:58.333%;flex-basis:58.333%;max-width:58.333%}.col-lg-8{-ms-flex-preferred-size:66.667%;flex-basis:66.667%;max-width:66.667%}.col-lg-9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}.col-lg-10{-ms-flex-preferred-size:83.333%;flex-basis:83.333%;max-width:83.333%}.col-lg-11{-ms-flex-preferred-size:91.667%;flex-basis:91.667%;max-width:91.667%}.col-lg-12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}.col-lg-offset-1{margin-left:8.333%}.col-lg-offset-2{margin-left:16.667%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-4{margin-left:33.333%}.col-lg-offset-5{margin-left:41.667%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-7{margin-left:58.333%}.col-lg-offset-8{margin-left:66.667%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-10{margin-left:83.333%}.col-lg-offset-11{margin-left:91.667%}.start-lg{-ms-flex-pack:start;-webkit-box-pack:start;justify-content:flex-start;text-align:start}.center-lg{-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center;text-align:center}.end-lg{-ms-flex-pack:end;-webkit-box-pack:end;justify-content:flex-end;text-align:end}.top-lg{-ms-flex-align:start;-webkit-box-align:start;align-items:flex-start}.middle-lg{-ms-flex-align:center;-webkit-box-align:center;align-items:center}.bottom-lg{-ms-flex-align:end;-webkit-box-align:end;align-items:flex-end}.around-lg{-ms-flex-pack:distribute;justify-content:space-around}.between-lg{-ms-flex-pack:justify;-webkit-box-pack:justify;justify-content:space-between}.first-lg{-ms-flex-order:-1;-webkit-box-ordinal-group:0;order:-1}.last-lg{-ms-flex-order:1;-webkit-box-ordinal-group:2;order:1}}

          html, body, div, span, applet, object, iframe,
          h1, h2, h3, h4, h5, h6, p, blockquote, pre,
          a, abbr, acronym, address, big, cite, code,
          del, dfn, em, img, ins, kbd, q, s, samp,
          small, strike, strong, sub, sup, tt, var,
          b, u, i, center,
          dl, dt, dd, ol, ul, li,
          fieldset, form, label, legend,
          table, caption, tbody, tfoot, thead, tr, th, td,
          article, aside, canvas, details, embed, 
          figure, figcaption, footer, header, hgroup, 
          menu, nav, output, ruby, section, summary,
          time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            vertical-align: baseline;
            box-sizing: border-box;
          }
          /* HTML5 display-role reset for older browsers */
          article, aside, details, figcaption, figure, 
          footer, header, hgroup, menu, nav, section {
            display: block;
          }
          ol, ul {
            list-style: none;
          }
          blockquote, q {
            quotes: none;
          }
          blockquote:before, blockquote:after,
          q:before, q:after {
            content: '';
            content: none;
          }
          table {
            border-collapse: collapse;
            border-spacing: 0;
          }
          a {
            text-decoration: none!important;
            color: #397D54;
          }
          a:hover {
            color: #235D3A;
          }
          input:-webkit-autofill {
            -webkit-box-shadow:0 0 0 50px #fff inset; /* Change the color to your own background color */
            box-shadow: transparent;
            -webkit-text-fill-color: #fff;
          }
          body {
            background: #fff;
            color: #397D54;
            overflow-x: hidden;
            font-size: 16px;
            font-weight: 400;
          }
          .container {
            width: 100%;
            max-width: 1220px;
            margin: 0 auto;
            padding: 0px 30px;
          }
          @media only screen and (max-width: 859px) {
            .container {
              padding: 0 15px;
            }
          }
          .tajawal-extralight {
            font-family: "Tajawal", serif;
            font-weight: 200;
            font-style: normal;
          }
          
          .tajawal-light {
            font-family: "Tajawal", serif;
            font-weight: 300;
            font-style: normal;
          }
          
          .tajawal-regular {
            font-family: "Tajawal", serif;
            font-weight: 400;
            font-style: normal;
          }
          
          .tajawal-medium {
            font-family: "Tajawal", serif;
            font-weight: 500;
            font-style: normal;
          }
          
          .tajawal-bold {
            font-family: "Tajawal", serif;
            font-weight: 700;
            font-style: normal;
          }
          
          .tajawal-extrabold {
            font-family: "Tajawal", serif;
            font-weight: 800;
            font-style: normal;
          }
          
          .tajawal-black {
            font-family: "Tajawal", serif;
            font-weight: 900;
            font-style: normal;
          }
          .regular {
            font-weight: 400!important;
          }
          .semiBold {
            font-weight: 600!important;
          }
          .extraBold {
            font-weight: 800!important;
          }
        
          /* HELLPERS */
          .textCenter {
            text-align: center
          }
          .animate {
            transition: 0.3s ease;
          }
          .pointer {
            cursor: pointer;
          }
          .relative {
            position: relative;
          }
          .textCenter {
            text-align: center;
          }
          .textLeft {
            text-align: left;
          }
          .textRight {
            text-align: right;
          }
          .x100 {
            width: 100%;
          }
          .active {
            border-bottom: 2px solid #397D54;
            color: #235D3A;
          }
          .tag {
            padding: 5px 10px;
            margin: 10px 0;
          }
          .shadow {
            box-shadow: 0 0 11px rgba(237, 232, 237, 0.5)  ; 
            -webkit-box-shadow: 0 0 11px rgba(237, 232, 237, 0.5)  ; 
            -moz-box-shadow: 0 0 11px rgba(237, 232, 237, 0.5)  ; 
          }
          /* FLEXBOX */
          .flex {
            display: flex;
          }
          .flexSpaceCenter {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .flexNullCenter {
            display: flex;
            align-items: center;
          }
          .flexColumn {
            flex-direction: column;
          }
          .flexCenter {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .flexSpaceNull {
            display: flex;
            justify-content: space-between;
          }
        
          /* FONT SIZES */
          .font11 {
            font-size: 0.688rem;
          }
          .font12 {
            font-size: 0.75rem;
          }
          .font13 {
            font-size: 0.813rem;
          }
          .font14 {
            font-size: 0.875rem;
          }
          .font15 {
            font-size: 0.938rem;
          }
          .font18 {
            font-size: 1.125rem;
          }
          .font20 {
            font-size: 1.25rem;
          }
          .font25 {
            font-size: 1.563rem;
          }
          .font30 {
            font-size: 1.875rem;
          }
          .font40 {
            font-size: 2.5rem;
          }
          .font60 {
            font-size: 3.75rem;
            line-height: 4.5rem;
          }
          @media only screen and (max-width: 859px) {
            .font11 {
              font-size: 0.688rem;
            }
            .font12 {
              font-size: 0.688rem;
            }
            .font13 {
              font-size: 0.75rem;
            }
            .font14 {
              font-size: 0.813rem;
            }
            .font15 {
              font-size: 0.813rem;
            }
            .font18 {
              font-size: 0.938rem;
            }
            .font20 {
              font-size: 1.125rem;
            }
            .font25 {
              font-size: 1.25rem;
            }
            .font30 {
              font-size: 1.5rem;
            }
            .font40 {
              font-size: 1.875rem;
            }
            .font60 {
              font-size: 2.8rem;
            }
          }
          /* BORDER RADIUS */
          .radius8 {
            border-radius: 1rem;
          }
          .radius6 {
            border-radius: 0.6rem;
          }
          /* COLORS */
          .darkColor {
            color: #0B093B;
          }
          .purpleColor {
            color: #7620FF;
          }
          .orangeColor {
            color: #F2B300;
          }
          .lightColor {
            color: #F5F5F5;
          }
          .coralColor {
            color: #C4FFFF;
          }
          .greenColor {
            color: #49CB86;
          }
          .greyColor {
            color: #707070;
          }
          .whiteColor {
            color: #fff;
          }
          /* BACKGROUNDS */
          .darkBg {
            background-color: #0B093B;
          }
          .purpleBg {
            background-color: #7620FF;
          }
          .orangeBg {
            background-color: #F2B300;
          }
          .lightBg {
            background-color: #F5F5F5;
          }
          .coralBg {
            background-color: #C4FFFF;
          }
          .greenBg {
            background-color: #49CB86;
          }
          .greyBg {
            background-color: #707070;
          }
          .whiteBg {
            background-color: #fff;
          }
        
        `}
      </style>
    </>
  );
};

export default HomePage;
