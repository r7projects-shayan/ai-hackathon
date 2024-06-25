import { Helmet } from "react-helmet";
import {Img, Text, Button, Input, Heading} from "../../components";
import React from "react";

export default function SignUpPhasePage() {
    return (
        <>
        <Helmet>
            <title>Sing Up for Quixflow - create Your Account Today</title>
        <meta name="description" content="Join Quixflow and start streamlinig your Saas tasks. Easy sign-up with eial or social accounts. Embrace efficiency with our user-friendly platform"/>

        </Helmet>

        {/*main container section */}
        <div className="">
            {/*header section */}
            <div className="">
                <Img src="images/img_header_logo.png" alt="header logo" className=""/>
                <a href="#" className="">
                    <Heading size="" as="h1" className="">Create an account</Heading>
                </a>
            </div>
            {/*signup form section */}
            <div className="">
            {/*authentication section */}
            <div className="">
                <div className="">
                    <div className="">
                        <Input shape="round" type="email" name="Email Field" placeholder={`Email address`} className/>
                        <Input shape="round" type="password" name="Password Field" placeholder={`Password address`} className/>
                </div>
                        <Button color="0" shape="" className=""> Continue</Button>
                        <div className="">
                            <a href="#">
                                <Text as="">Already have an account?</Text>
                            
                            </a>
                            <a href="Login" target="_blank" rel="">
                                <Text as="" className=""> Login</Text>

                            </a>
                        </div>
                    </div>

                     {/* social media separator section */}
                <div className="mt-5 flex items-start justify-center sm:flex-col">
                    <div className="mt-2 h-px flex-1 bg-white-a700 sm:self-stretch"/>
                        <Text as="p" className="ml-8 self-center !font-normal sm:ml-0">
                            OR
                        </Text>
                        <div className="ml-[22px] mt-2 h-px flex-1 bg-white-a700 sm:ml-0 sm:self-stretch"/>
                        {/*social media login section */}
                    </div>
                        <div className="mt-[30px] flex flex-col gap-3">
                            <Button shape="round" className="w-full border border-solid border-blue_gray-900_01 lg:text-[15px] sm:px-4">Login With Google</Button>
                            <Button shape="round" className="w-full border border-solid border-blue_gray-900_01 lg:text-[15px] sm:px-4">Login With Apple</Button>
                            <Button shape="round" className="w-full border border-solid border-blue_gray-900_01 lg:text-[15px] sm:px-4">Login With Microsoft Account</Button>

                        </div>
                        {/*legal information */}
                        <div className=""/>
                            <Text>
                                Terms of Use
                            </Text>
                            <div>
                                <a href="#">
                                    Privacy Policy
                                </a>
                            </div>
                        </div>
                </div>
                {/*footer image section */}
                <Img src="images/img_group_21.png" alt="imageone" className/>
            </div>
            </>
            
       
    );
}