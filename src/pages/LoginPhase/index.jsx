import { Helmet } from "react-helmet";
import { Text, Button, Input, Img, Heading } from "../../components";
import React from "react";

export default function LoginPhasePage(){
    return (
        <>
        <Helmet>
            <title>Login to Quizflow - Access Your Productivity Tools</title>
            <meta name="desciption" content="Welcome back to Quixflow! Log in to access your personalized dashboard and continue enhancing your SaaS productivity. Secure and easy login options available"/>
        </Helmet>
        { /* login page section */}
        <div className="flex w-full justify-center bg-gray-900_07">
            {/* header section */}
            <div className="mx-auto mt-[180px] flex w-full max-w-[1186px] items-start justify-center lg:p-5 md:flex-col md:p-5">
                <div className="mt-3.5 flex flex-1 flex-col gap-[148px] self-center lg-gap-[111px] md:gap-[111px] md:self-stretch sm:gap-[74px]">
                    {/*logo and welcome section */}
                    <div className="flex flex-col items-start gap-3.5">
                        <Img src="images/img_header_logo.png" alt="header logo" className="h-[46px] w-[152px] object-contain"/>
                        <Heading size="headingmd" as="h1" className="!font-haskoy md:text-[26px]">
                            Welcome Back!
                        </Heading>

                    </div>
                    <Img src="images/ig_group_11.svg" alt="header image" className="h-[530px] w-[84%]"/>
                </div>
            {/*authentication section */}
            <div className="flex w-[46px] flex-col items-end md:w-full">
                {/* form section */}
                <div className="w-[82%] lg:w-full">
                    <div className="flex flex-col gap-[18px]">
                        <Input shape="round" type="email" name="Email Field" placeholder="{`Email Address`}" className="sm:px-4"/>
                        <Input shape="round" type="password" name="Password Field" placeholder="{`Password`}" suffix={<Img src="images/img_eye.svg" alt="eye" className="h-[24px] w-[24px]"/>} className="gap-[34px] sm:pl-4"/>
                    </div>
                    <Button color="light_blue_800" shape="round" className="w-full border border-solid border-blue_gray-900_01 lg:text-[15px] sm:px-4">Continue</Button>
                    <div className="mx-[90px] flex flex-wrap justify-center gap-[17px] lg:mx-0 md:mx-0">
                        <a href="#">
                            <Text as="p">Don't have an account?</Text>
                        </a>
                        <a href="#">
                            <Text as="p" className="!text-light_blue-800">Sign Up</Text>
                        </a>

                    </div>
                </div>
                {/* divider section */}
                <div className="mt-5 flex items-start justify-center sm:flex-col">
                    <div className="mt-2 h-px flex-1 bg-white-a700 sm:self-stretch">
                        <Text as="p" className="ml-8 self-center !font-normal sm:ml-0">
                            OR
                        </Text>
                        <div className="ml-[22px] mt-2 h-px flex-1 bg-white-a700 sm:ml-0 sm:self-stretch"/>
                        {/*social login section */}

                        <div className="mt-[30px] flex flex-col gap-3">
                            <Button shape="round" className="w-full border border-solid border-blue_gray-900_01 lg:text-[15px] sm:px-4">Login With Google</Button>
                            <Button shape="round" className="w-full border border-solid border-blue_gray-900_01 lg:text-[15px] sm:px-4">Login With Apple</Button>
                            <Button shape="round" className="w-full border border-solid border-blue_gray-900_01 lg:text-[15px] sm:px-4">Login With Microsoft Account</Button>

                        </div>

                        {/*policy section */}
                        <div className="ml-[114px] mr-[106px] mt-8 flex items-center justify-center gap-3.5 lg:mx-0 md:mx-0 sm:flex-col">
                            <Text as="p" className="!text-light_blue-800">Term of use</Text>
                            <div className="h-[18px] w-px bg-white-a700 sm:h-px sm:w-[18px]"/>
                            <a href="#">
                                <Text as="p" className="!text-light_blue-800">
                                    Privacy Policy
                                </Text>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </div>
        </>
    );
}