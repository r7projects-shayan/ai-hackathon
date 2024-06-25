import { Helmet } from "react-helmet";
import { Img, Button, Text, Heading } from "../../components";
import Header from "../../components/Header";
import React from "react";

export default function WelcomePagePage(){
    return (
        <>
            <Helmet>
                <title>Supercharge Your SaaS Works</title>
                <meta name="description" content="Quixflow supercharges your SaaS productivity using Agile
                      Loop AI.Minimize Mundane Tasks and focus on what's important. Start supercharging your workflow today!">
                </meta>
            </Helmet>
            <div className="relative h-[1610px] w-full bg-black-900">
                {/* hero section */ }
                <div className="absoulte left-0 right-0 top-[0.00px] m-auto flex-1">
                    <Img src="images/img_sean_sinclair_1.png" alt="seansinclairone" className="h-[490px] w-full object-cover lg:h-auto md:h-auto"
                    />
                 {/* main navigation */ }
                 <div className="flex flex-col items-center">
                    <div className="flex flex-items-center gap-[60px] self stretch bg-gradient1 p-11 md:p:5 sm:gap-[30px] sm:p-4">
                        <Header/>
                         {/* intro section */ }
                         <div className="mx-[254px] mb-[78px] flex w-[82%] flex-col items-center lg:mx-0 lg:w-full md:w-full">
                            <Heading size="headinglg" as="h1" className="self-stretch text-center leading-[100px] !etxt-cyan-100 lg:text-5xl">
                                <span className="text-cyan-100">Supercharge&nbsp;</span>
                                <span className="text-lime-100">SaaS</span>
                                <span className="text-cyan-100">&nbsp;</span>
                                <span className="text-green-800">Works.</span>
                            </Heading>
                            <div className="mx-auto mt-2.5 flex w-full max-w[622px] flex-col items-end gap-0.5 self stretch lg:p-5 md:p-5">
                                <Text size="textlg" as="p" className="text-center leading-6">
                                    <span className="text-white-a700">
                                        <>
                                            Quixflow supercharges your SaaS productivity using Agile Loop AI
                                            <br/>
                                        </>
                                        <span className="text-blue_gray-600">Reduce Your Mundane Tasks, Focus on What Matters.</span>
                                    </span>
                                </Text>
                                <div className="mr-[46px] h-[5.5px] w-[40%] bg-white-a700 lg:mr-0 md:mr-0"/>
                            </div>
                            <Heading as="h2" className="mt-7 bg-gradient2 bg-clip-text">
                                Powered by
                            </Heading>
                            <Img src="images/img_picture1_1.png" alt="feature image" className="mt-1.5 h-[52px] w-[28%] object-cover"/>

                            { /* call to action section */ }
                            <div className="mt-[52px] flex w-[48%] items-center justify-between gap-5 lg:w-full md-w-full">
                                <Button shape="round" rightIcon={<Img src="images/img_clock.svg" alt="clock" className="h-[24px] w-[24px]"/>}>Start Now</Button>
                                <div className="flex items-center gap-2">
                                    <Text as="p" className="self-end">
                                        Download the app
                                    </Text>
                                    <Img src="images/img_arrow_right.svg" alt="arrow image" className="h-[24px] w-[24px]" />
                                </div>
                            </div>
                            <Button shape="round" rightIcon={<Img src="images/img_clock.svg" alt="clock" className="h-[24px] w-[24px]" />} className="mt-8 min-w-[282px] gap-2.5 lg:text-[15px]">
                                See How Quixflow Works
                            </Button>
                         </div>
                    </div>
                    <div className="mx-auto flex h-[622px] w-full max-w-5xl items-start justify-center self-stretch bg-[url(/public/images/img_group_21.png)] bg-cover bg-no-repeat p-8 lg:h-auto md:p-5 sm:p-4">
                        <div className="mb-[38px] h-[520px] w-[84%] bg-gray-900_02"/>
                    </div>
                 </div>
                </div>
                {/* image gallery section */}
                <div className="absolute bottom-[-116.00px] left-0 right-0 m-auto flex-1">
                    <div className="relative z-[1] ml-[366px] mr-[330px] flex h-[528px] items-end justify-center bg-[url(/public/images/img_group_21.png)] bg-cover bg-no-repeat px-14 py-[60px] lg:mx-0 lg:h-auto md:mx-0 md:h-auto md:p-5 sm:p-4">
                    <Img src="images/img_picture1_1.png" alt="primary image" className="mt-[394px] h-[12px] w-[8%] object-cover"/>
                    </div>
                    <div className="flex justify-center bg-gradient px-14 py-[210px] lg:py-8 md:p-5 sm:p-4">
                        <Img src="images/img_mask_group.png"
                        alt="thumbnail image"
                        className="mt-[218px] h-[124px] w-[78%] object cover"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}