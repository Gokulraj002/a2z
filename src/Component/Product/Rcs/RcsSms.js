import React from 'react'
import Home from './Home'
import ComparisonTable from './ComparisonTable'
import RcsMessagingSection from './RcsMessagingSection'
import Client from '../Clients'
import SocialMedia from '../SocialMedia'
import FAQHome from '../../Resources/FAQ/FAQHome'
import { RcsData } from '../../Resources/FAQ/FaqData'
import { Helmet } from 'react-helmet'
// import FAQ from './RcsFaq'


const RcsSms = () => {
  return (
    <div>
      <Helmet>
  <title>Best RCS Messaging Services in India | Reliable Business Solutions</title>
  <meta
    name="description"
    content="Discover top RCS messaging services in India. Enhance customer communication with interactive messages for Android, iPhone, and business platforms."
  />
  <meta
    name="keywords"
    content="RCS Messaging Provider India,What is RCS Messaging,Rich Communication Services in India,RCS Business Messaging Service,Best RCS Messaging Services in India,Rich Communication Services Android,RCS Messaging Company in Bangalore,How to Install RCS Messaging,RCS Messaging Solutions for Businesses,RCS Messaging for Android and iPhone"
  />
  <meta name="author" content="A2ZSMS" />
  <meta
    property="og:title"
    content="A2ZSMS | Rich Communication Services for Businesses"
  />
  <meta
    property="og:description"
    content="Discover top RCS messaging services in India. Enhance customer communication with interactive messages for Android, iPhone, and business platforms."
  />
  <meta property="og:image" content="URL-to-your-featured-image" />
  <meta property="og:url" content="https://www.a2zsms.in/rcs-sms" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="A2ZSMS" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="A2ZSMS | Rich Communication Services for Businesses"
  />
  <meta
    name="twitter:description"
    content="Discover top RCS messaging services in India. Enhance customer communication with interactive messages for Android, iPhone, and business platforms."
  />
  <meta name="twitter:image" content="URL-to-your-featured-image" />
  <meta name="twitter:site" content="@yourtwitterhandle" />
  <meta name="robots" content="index, follow" />
  <meta name="theme-color" content="#007bff" />
  <link rel="canonical" href="https://www.a2zsms.in/rcs-sms" />
</Helmet>

      <Home/>
      <ComparisonTable/>
      <Client/>      
      <RcsMessagingSection/>
      <SocialMedia/>
      {/* <FAQ/> */}
      <FAQHome data={RcsData}/>
    </div>
  )
}

export default RcsSms
