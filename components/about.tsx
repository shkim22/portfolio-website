"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/app/lib/hooks';


export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section 
            ref= {ref}
            className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
            initial = {{opacity: 0, y: 100}}
            animate= {{opacity: 1, y:0}}
            transition= {{ delay: 0.175}}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className='mb-3'>
            I'm a Full-Stack Data Scientist with 7 years of experience in the Finance industry/Product Analytics space based in 🗽 NYC.  I have a strong business acumen, technical skills and leadership experience working with large Cross-Functional teams.
            </p>
            <p className='mb-3'>I completed my undergraduate studies at the University of Notre Dame and am pursuing my Masters of Science in Analytics from Georgia Tech (expected graduation in 2025).
            </p>
            <p className='mb-3'>
            Born in Korea and growing up in Bolivia, I cultivated a global mindset and work well with people from diverse backgrounds. Outside of work, I like to explore the city, find good restaurants, and stay active working out ⚽⛳️🎾.
            </p>
        </motion.section>  
    );
}
