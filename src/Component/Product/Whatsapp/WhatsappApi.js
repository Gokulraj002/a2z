import React from 'react'
import Home from './Home'
import ComparisonTable from './ComparisonTable'
import Client from '../Clients'
import StepsSection from './StepsSection'
// import Faq from './Faq'
import Features from './Features'
import Apisupport from '../Apisupport'
import SocialMedia from '../SocialMedia'
import FAQHome from '../../Resources/FAQ/FAQHome'
import { Whatsapp } from '../../Resources/FAQ/FaqData'
import PricingTabs from './WhatsappPricing'
import { Helmet } from 'react-helmet'
// import banner from '../../image/'

const WhatsappApi = () => {
  return (
    <div>
      <Helmet>
  <title>WhatsApp API Solutions for Businesses | Secure & Reliable</title>
  <meta
    name="description"
    content="Boost customer engagement with WhatsApp API. Secure, scalable solutions for businesses to send messages, OTPs, and automated support in India and worldwide."
  />
  <meta
    name="keywords"
    content="Automated WhatsApp Messaging,WhatsApp Business Solutions,WhatsApp API India,WhatsApp API Provider,WhatsApp Business API,Best WhatsApp API Provider in India,WhatsApp API Pricing India,WhatsApp API Integration,WhatsApp API for Business Communication,WhatsApp API for Customer Support,Business Agents in Bangalore,Best WhatsApp API in Bangalore,WhatsApp Messaging Services Bangalore,WhatsApp Business API Bangalore,WhatsApp API Hyderabad"
  />
  <meta name="author" content="A2ZSMS" />
  <meta
    property="og:title"
    content="A2ZSMS | WhatsApp API for Business Communication"
  />
  <meta
    property="og:description"
    content="Boost customer engagement with WhatsApp API. Secure, scalable solutions for businesses to send messages, OTPs, and automated support in India and worldwide."
  />
  <meta property="og:image" content="URL-to-your-featured-image" />
  <meta property="og:url" content="https://www.a2zsms.in/whatsapp-api" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="A2ZSMS" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="A2ZSMS | WhatsApp API for Business Communication"
  />
  <meta
    name="twitter:description"
    content="Boost customer engagement with WhatsApp API. Secure, scalable solutions for businesses to send messages, OTPs, and automated support in India and worldwide."
  />
  <meta name="twitter:image" content="URL-to-your-featured-image" />
  <meta name="twitter:site" content="@yourtwitterhandle" />
  <meta name="robots" content="index, follow" />
  <meta name="theme-color" content="#007bff" />
  <link rel="canonical" href="https://www.a2zsms.in/whatsapp-api" />
</Helmet>

      <Home/>
      <Client/>
      <ComparisonTable/>
      <PricingTabs/>
      <Apisupport/>
      <StepsSection/>
      <Features/>
      <SocialMedia/>
      <FAQHome data={Whatsapp}/>

      {/* <Faq/> */}

    </div>
  )
}

export default WhatsappApi
