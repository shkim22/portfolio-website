"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/app/lib/hooks';


export default function Additional() {
    const { ref } = useSectionInView("Projects");
    return (
        <motion.section 
            ref= {ref}
            className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
            initial = {{opacity: 0, y: 100}}
            animate= {{opacity: 1, y:0}}
            transition= {{ delay: 0.175}}
            id="about"
        >
            <SectionHeading>Additional Works</SectionHeading>
                <p> 💡 Microsoft Autism Hackathon 2024 - built prototype GenAI tool to save 30+ hours for healthcare providers using Azure's Cognitive Services.
                    <a className='mb31' href="https://github.com/fsi-hack4autism/patient-onboarding-copilot">link</a>
                </p>
                <p> 📈 Pawty App - iOS app for Dog Training on the App Store. Had features such as scheduling, clicker and potty predictor.
                    <a className='mb33' href="https://www.linkedin.com/in/stephenhgkim/'">link</a>
                </p>
                <p> 🏋️ Analyzing Apple Health Data - as a fitness tracking fanatic, I used my own Apple Health data to see interesting insights on how to improve my health.
                    <a className='mb32' href="https://medium.com/towards-data-science/towards-well-being-with-data-science-part-1-7f8035f73aa">link</a>
                </p>
                <p > 🛫 Iceland Tourism Data Analysis - used publicly available data to demystify the sudden popularity of tourism in Iceland in 2019.
                    <a className='mb33' href="https://towardsdatascience.com/why-is-everyone-going-to-iceland-1f99083bee1a">link</a>
                </p>

        </motion.section>  
    );
}
