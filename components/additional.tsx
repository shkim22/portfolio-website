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
            <li>
                <p className='mb-3'> Microsoft Autism Hackathon 2024.</p>
                <p className='mb-3'> Microsoft Autism Hackathon 2024.</p>
                <p className='mb-3'> Microsoft Autism Hackathon 2024.</p>
                <p className='mb-3'> Microsoft Autism Hackathon 2024.</p>
            </li>

        </motion.section>  
    );
}