import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

import { Datastats } from '@/components/Datastats'
import { Supportcenter } from '@/components/Supportcenter'
import { KeyFeatures } from '@/components/KeyFeatures'
import { Tokenomics } from '@/components/Tokenomics'
import { Whitepaper } from '@/components/Whitepaper'

export default function Home() {
  return (
    <>

      <Head>
        <title>DexData - Data, large models, and value</title>
        <meta
          name="DexData"
          content="Data, large models, and value are deeply interconnected in the modern AI and blockchain ecosystems"
        />
      </Head>

    
      <Header />
      <main>

        
        <Hero />

        {/* 原程序 开始*/}
        {/* <PrimaryFeatures /> */}
        {/* <SecondaryFeatures /> */}
        {/* <CallToAction /> */}
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
         {/* 原程序结束 */}

        
        <Datastats />
        <KeyFeatures />
        <Tokenomics />
       
        <Faqs />
       
        <Supportcenter />
        <Whitepaper />
      </main>
      <Footer />
    </>
  )
}
