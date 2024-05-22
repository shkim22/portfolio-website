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
            <p className='mb-3'>First gen immigrant born in Korea, raised in in Bolivia, based in 🗽 NYC.
            </p>
            <p className='mb-3'>Graduate of 🍀 Notre Dame and am pursuing my Masters of Science in Analytics from 🐝 Georgia Tech.
            </p>
            <p className='mb-3'>
            Outside of work, I like to explore the city, find good restaurants, and stay active working out ⚽⛳️🎾.
            </p>
        </motion.section>  
    );
}
