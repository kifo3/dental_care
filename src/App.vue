<template>
 <!-- header -->
    <HeaderRow/>

    <!-- home -->
    <HomeRow/>

    <!--about -->
    <AboutRow/>

    <!-- services -->
    <ServicesRow/>

    <!-- click -->
    <ClickRow/>

    <!-- reviews -->
    <ReviewRow/>

    <!-- contact -->
    <ContactRow/>

    <!-- footer -->
    <FooterRow/>

</template>

<script>


import HeaderRow from "@/components/HeaderRow";
import AboutRow from "@/components/AboutRow";
import HomeRow from "@/components/HomeRow";
import ServicesRow from "@/components/ServicesRow";
import ClickRow from "@/components/ClickRow";
import ReviewRow from "@/components/ReviewRow";
import ContactRow from "@/components/ContactRow";
import FooterRow from "@/components/FooterRow";
export default {
  name: 'App',
  components: {
      FooterRow,
      ContactRow,
      ReviewRow,
      ClickRow,
      ServicesRow,
      HomeRow,
      AboutRow,
      HeaderRow

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200&display=swap');

:root{
    --blue: #7ED5F7;
    --black: #0A357D;
    --white: #fff;
    --light-color: #666;
    --light-bg: #f0f1f3;
    --border: .2rem solid rgba(0,0,0,.1);
    --box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
}
*{
    font-family: 'Poppins', sans-serif;
    margin: 0; padding: 0;
    box-sizing: border-box;
    outline: none; border: none;
    text-decoration: none !important;
    text-transform: capitalize;
}

*::-webkit-scrollbar{
    height: .5rem;
    width: 1rem;
}

*::-webkit-scrollbar-track{
    background-color: transparent;
}

*::-webkit-scrollbar-thumb{
    background-color: var(--blue);
}

html{
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-behavior: smooth;
    scroll-padding-top: 6.5rem;
}

section {
    padding: 7rem 2rem;
}

.heading{
    text-align: center;
    font-size: 4rem;
    color: var(--black);
    text-transform: uppercase;
    font-weight: bolder;
    margin-bottom: 3rem;
}

.link-btn{
    display: inline-block;
    padding: 1rem 3rem;
    border-radius: .5rem;
    background-color: var(--blue);
    cursor: pointer;
    font-size: 1.7rem;
    color: var(--white);
}

.link-btn:hover{
    background-color: var(--black);
    color: var(--white);
}

.header{
    padding: 2rem;
    border-bottom: var(--border);
}

.header.active {
    background-color: var(--white);
    box-shadow: var(--box-shadow);
    border:0;
}

.header .logo{
    font-size: 2rem;
    color: var(--black);
}

.header .logo span{
    color: var(--blue);
}

.header .nav a{
    margin: 0 1rem;
    font-size: 1.7rem;
    color: var(--black);
}

.header .nav a:hover{
    color: var(--blue);
}

#menu-btn{
    font-size: 2.5rem;
    color: var(--black);
    cursor: pointer;
    display: none;
}


.home {
    background: url("img/Depositphotos_27050775_xl-2015.jpg") no-repeat;
    background-size: cover;
    background-position: center;
}

.home .content{
    width: 50rem;
    padding: 2rem;
}

.home .content h3{
    font-size: 6rem;
    text-transform: uppercase;
    color: var(--black);
}

.home .content p {
    line-height: 2;
    font-size: 1.5rem;
    color: var(--light-color);
    padding: 1rem 0;
}

.about .row{
    min-height: 50vh;
}

.about .content span{
    font-size: 2rem;
    color: var(--blue);
}

.about .content h3 {
    font-size: 2.5rem;
    color: var(--black);
    margin-top: 1rem;
}

.about .content p{
    padding: 1rem 0;
    font-size: 1.4rem;
    color: var(--light-color);
    line-height: 2;
}

.services{
    background-color: var(--light-bg);
}

.services .box-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem,1fr));
    gap: 2rem;
}

.services .box-container .box{
    text-align: center;
    padding: 2rem;
    background-color: var(--white);
    box-shadow: var(--box-shadow);
    border-radius: .5rem;
}

.services .box-container .box img{
    margin: 1rem 0;
    height: 4rem;
}

.services .box-container .box h3 {
    font-size: 2rem;
    padding: 1rem 0;
    color: var(--black);
}

.services .box-container .box p{
    font-size: 1.5rem;
    color: var(--light-color);
    line-height: 2;
}

.reviews .box-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem,1fr));
    gap: 2rem;
}

.reviews .box-container .box{
    background-color: var(--white);
    text-align: center;
    border-radius: .5rem;
    box-shadow: var(--box-shadow);
    padding: 2rem;
}

.reviews .box-container .box img{
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
}

.reviews .box-container .box p{
    font-size: 1.5rem;
    color: var(--light-color);
    line-height: 2;
    padding: 2rem 0;
    margin-bottom: 0;
}

.reviews .box-container .box .stars{
    padding: .5rem 1.5rem;
    border-radius: .5rem;
    background-color: var(--light-bg);
    margin-bottom: 2rem;
    display: inline-block;
}

.reviews .box-container .box .stars i {
    font-size: 1.5rem;
    color: var(--blue);
}

.reviews .box-container .box h3 {
    font-size: 2rem;
    color: var(--black);
}

.reviews .box-container .box span{
    color: var(--light-color);
    font-size: 1.5rem;
}

.contact form{
    border-radius: .5rem;
    background-color: var(--light-bg);
    padding:2rem;
    margin:0 auto;
    max-width: 50rem;
}

.contact form .message{
    margin-bottom: 2rem;
    border-radius: .5rem;
    background-color: var(--blue);
    padding:1.2rem 1rem;
    font-size: 1.7rem;
    color:var(--white);
    text-align: center;
}

.contact form .box{
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 2rem;
    border-radius: .5rem;
    background-color: var(--white);
    padding:1.2rem 1.4rem;
    font-size: 1.7rem;
    color:var(--black);
    text-transform: none;
}

.contact form span{
    font-size: 1.7rem;
    color:var(--black);
}

.footer{
    background-color: var(--light-bg);
}

.footer .box-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap:3rem;
}

.footer .box-container .box{
    text-align: center;
}

.footer .box-container .box i{
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    line-height: 5rem;
    font-size: 2rem;
    background-color: var(--blue);
    color:var(--white);
}

.footer .box-container .box h3{
    font-size: 2rem;
    margin:2rem 0;
    color:var(--black);
}

.footer .box-container .box p{
    font-size: 1.5rem;
    color:var(--light-color);
    text-transform: none;
}

.footer .credit{
    text-align: center;
    border-top: var(--border);
    padding-top: 2rem;
    margin-top: 2rem;
    font-size: 2rem;
    color:var(--light-color);
}

.footer .credit span{
    color:var(--blue);
}


button.click-1.align-items-center.justify-content-between{
    width: 111rem;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
}

button.click-2.align-items-center.justify-content-between{
    width: 111rem;
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
}

.click {
    margin: 6rem;
}

.click .click-1{
    background-color: var(--black);
    padding: 3rem 0;
}

.click .click-1 h1{
    color: var(--white);
    display: inline;
    text-align: left;
    margin: 0 36rem 0 0;
}

.click .click-1 a{
    text-align: right;
}

.click .click-2{
    background-color: var(--blue);
    text-align: left;
    padding: 3rem;
}

.click .click-2 h1{
    display: inline;
    color: rgba(0, 0, 0, 0.82);
    text-align: left;
    margin: 0 0 0 28rem;
}

.click .click-2 a{
    text-align: left;
    margin: 0 4rem ;
    background-color:var(--black);
}

.click .click-2 a:hover{
    background-color: var(--blue);
    color: var(--white);
}



























/* media queries */

@media (max-width: 991px) {

    html{
        font-size: 55%;
    }

    .header .link-btn{
        display: none;
    }

    section{
        padding:5rem 2rem;
    }




    button.click-1.align-items-center.justify-content-between{
        width: 90rem;
    }

    button.click-2.align-items-center.justify-content-between{
        width: 90rem;

    }

    .click {
        margin: 10rem;
    }

    .click .click-1{
        padding: 3rem;
    }


    .click .click-1 h1{
        color: var(--white);
        display: inline;
        text-align: left;
        margin: 0 21rem 0 0;
    }

    .click .click-1 a{
        text-align: right;
    }

    .click .click-2{
        background-color: var(--blue);
        text-align: left;
        padding: 3rem;
    }

    .click .click-2 h1{
        display: inline;
        color: rgba(0, 0, 0, 0.82);
        text-align: left;
        margin: 0 0 0 18rem;
    }

    .click .click-2 a{
        text-align: left;
        margin: 0  ;
        background-color:var(--black);
    }

    .click .click-2 a:hover{
        background-color: var(--blue);
        color: var(--white);
    }
}

@media (max-width: 768px) {
    section{
        padding:3rem 1rem;
    }

    #menu-btn{
        display: inline-block;
        transition: .2s linear;
    }

    #menu-btn.fa-times{
        transform: rotate(180deg);
    }

    .header .nav{
        position: absolute;
        top:99%; left:0; right:0;
        background-color: var(--white);
        border-top: var(--border);
        border-bottom: var(--border);
        padding:1rem 0;
        text-align: center;
        flex-flow: column;
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
        transition: .2s linear;
    }

    .header .nav.active{
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }

    .header .nav a{
        margin:1rem 0;
        font-size: 2rem;
    }

    .home{
        background-position: left;
    }

    .home .content{
        width: auto;
    }


    button.click-1.align-items-center.justify-content-between{
        width: 50rem;
    }

    button.click-2.align-items-center.justify-content-between{
        width: 50rem;

    }

    .click {
        margin: 5rem;
    }

    .click .click-1{
        padding: 3rem;
    }


    .click .click-1 h1{
        color: var(--white);
        display: inline-block;
        text-align: center;
        margin: 0;
    }

    .click .click-1 a{
        text-align: center;
        margin-top: 2rem;
    }

    .click .click-2{
        background-color: var(--blue);
        text-align: center;
        padding: 3rem;
    }

    .click .click-2 h1{
        display: inline-block;
        color: rgba(0, 0, 0, 0.82);
        text-align: center;
        margin: 0 ;
    }

    .click .click-2 a{
        text-align: center;
        margin: 0  ;
        background-color:var(--black);
        margin-bottom: 2rem;
    }





}

@media (max-width: 450px) {

    html{
        font-size: 50%;
    }

    .home .content h3{
        font-size: 4rem;
    }

    .heading{
        font-size: 3rem;
    }



    button.click-1.align-items-center.justify-content-between{
        width: 40rem;
    }

    button.click-2.align-items-center.justify-content-between{
        width: 40rem;

    }

    .click {
        margin:5rem;
    }

    .click .click-1{
        padding: 3rem;
    }


    .click .click-1 h1{
        color: var(--white);
        display: inline-block;
        text-align: center;
        margin: 0;
    }

    .click .click-1 a{
        text-align: center;
        margin-top: 2rem;
    }

    .click .click-2{
        background-color: var(--blue);
        text-align: center;
        padding: 3rem;
    }

    .click .click-2 h1{
        display: inline-block;
        color: rgba(0, 0, 0, 0.82);
        text-align: center;
        margin: 0 ;
    }

    .click .click-2 a{
        text-align: center;
        margin: 0  ;
        background-color:var(--black);
        margin-bottom: 2rem;
    }

}

</style>
