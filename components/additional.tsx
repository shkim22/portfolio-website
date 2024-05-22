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
                <ul className='mb-3'> Microsoft Autism Hackathon 2024.</ul>
                <ul className='mb-3'> Analyzing Apple Health Data.</ul>
                <ul className='mb-3'> Iceland Tourism Data Analysis</ul>
            </li>

        </motion.section>  
    );
}