import { Helmet } from "react-helmet";
import {Text , Img, Heading } from "../../components";
import React, {Suspense} from "react";
const data = [
    {connectImage : "images/img_image_2.png"},
    {connectImage : "images/img_image_1_32x88.png"},
    {connectImage : "images/img_image_3.png"},
    {connectImage : "images/img_image_4_24x84.png"},

];

export default function WorkspacePhasePage() {
    return (
        <>
            <Helmet>
            <title>Workspace Connect -Enhance Your Collaboration</title>
                <meta name="description" content="Connect your workspace efficiently and collaborate better with team members. Streamline your workdflow with our easy connection process."/>
            </Helmet>

            {/*main section */}
             <div>
                 {/*header section */}
                 <div>
                     {/*header section */}
                     <div>
                        <Img src="images/img_header_logo.png" alt="logo image"/>
                        <Heading>Connect Your Workspace</Heading>
                     </div>
                      {/*gallery and features section */}
                      <div>
                        <div>
                            <div>
                                <Img src="images/img_image_5.png"/>
                            </div>
                            <div>
                                <div>
                                    <Img src="images/img_vector_8.svg"/>
                                </div>
                                <Img src="images/img_adjustable_lamp.svg"/>
                            </div>
                        </div>
                        <Img src="images/img_image_1.png"/>
                      </div>
                      <Img src="images/img_desk.svg"/>
                      <Img src="images/img_files.svg"/>
                      <Img src="images/img_image_4.png"/>
                 </div>
                 <Img src="images/img_floor.svg"/>
             </div>
             {/*features list section */}
             <div>
                <Suspense fallback={<div>Looding feed.....</div>}>
                    {
                        data.map((d, index) => (
                            <div key={"listPhase" +index} className="">
                             <Img src={d.connectImage} alt="connect image"/>
                             <Text>
                                Connect
                             </Text>

                            </div>
                        ))
                    }
                </Suspense>
             </div>
        </>
    );
}