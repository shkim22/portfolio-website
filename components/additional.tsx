"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/app/lib/hooks';


export default function Additional() {
    const { ref } = useSectionInView("Additional");

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
                <p className='mb-3'> 
                    Microsoft Autism Hackathon 2024 - used OpenAI summarization API to prototype tool to save 30+ hours for healthcare providers.
                    <a href="https://github.com/fsi-hack4autism/patient-onboarding-copilot">here</a>
                </p>
                <p className='mb-3'> Analyzing Apple Health Data - as a fitness tracking fanatic, I use my own Apple Health data to see interesting patterns.
                    <a href="https://medium.com/towards-data-science/towards-well-being-with-data-science-part-1-7f8035f73aa">here</a>
                    <a href="https://medium.com/towards-data-science/towards-well-being-with-data-science-part-2-bcaf1db96064">here</a>
                </p>
                <p className='mb-3'> Iceland Tourism Data Analysis - used publicly available data to see the sudden popularity of tourism in Iceland in 2019.
                    <a href="https://towardsdatascience.com/why-is-everyone-going-to-iceland-1f99083bee1a">here</a>
                </p>

        </motion.section>  
    );
}