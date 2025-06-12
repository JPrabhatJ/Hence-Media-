import React from 'react';
import Marquee from 'react-fast-marquee';
import { GrLinkNext } from "react-icons/gr";
import { FaPenAlt } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { IoTime } from "react-icons/io5";
import { MdOutlineMediation } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa6";



const Hero = () => {
 return (
  <div className="w-full">
   <section className="relative w-full h-screen bg-black shadow-md border border-green-500">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/HeroBanner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      
{/*Our Services */}
<section id="services" className="py-16 bg-white">
  <h2 className="text-4xl font-bold text-center mb-12 relative">
    Our Services 🚀
      <span className="block w-full h-1 bg-green-600 mx-auto mt-2"></span>
  </h2>

{/*Meme Marketing */}
<div className="flex flex-col md:flex-row items-center mb-16 max-w-6xl mx-auto">
  <div className="md:w-1/2 p-4">
<h2 className="text-2xl font-bold text-center mb-12 relative inline-block">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">MEME MARKETING</span> 🤩
  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-blue-600 shadow-xl rounded-lg mt-2"></span>
</h2>
<ul className="list-disc pl-5 text-gray-700">
      <li>Vast Reach: Access to over 400M+ followers on Instagram and 200M+ followers on Facebook.</li>
      <li>Trendsetter: Capability to make any content trend in the meme market.</li>
      <li>Diverse Audience: Extensive network across multiple categories and niches.</li>
      <li>Engaging Content: Expertly crafted memes to boost brand visibility and engagement.</li>
      <li>Proven Impact: Track record of successful campaigns that resonate with audiences.</li>
</ul>
  </div>
  <div className="md:w-1/2 p-4">
    <video autoPlay muted loop playsinline className="w-full rounded-lg border-4 border-black-300 shadow-md">
      <source src="/MM(Hence).mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>

{/*Influencer Marketing */}
 <div className="flex flex-col md:flex-row items-center mb-16 max-w-6xl mx-auto">
  <div className="md:w-1/2 p-4">
  <h2 className="text-2xl font-bold text-center mb-12 relative inline-block">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">INFLUENCER MARKETING</span> 👑
  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-blue-600 shadow-xl rounded-lg mt-2"></span>
</h2>
 <ul className="list-disc pl-5 text-gray-700">
      <li>Diverse Network: Access to influencers across all categories, including tech, travel, vlogs, art, food, and more.</li>
      <li>High-Impact Collaborations: Partnerships with top-tier influencers to maximize reach and engagement.</li>
      <li>Authentic Content: Focus on creating genuine content that resonates with target audiences.</li>
      <li>Custom Campaigns: Tailored influencer strategies to align with your brand’s unique goals and messaging.</li>
 </ul>
  </div>
    <div className="md:w-1/2 p-4">
    <video autoPlay muted loop playsinline className="w-full rounded-lg border-4 border-black-300 shadow-md">
      <source src="/IM(Hence).mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>

{/*Podcast Marketing */}
<div className="flex flex-col md:flex-row items-center mb-16 max-w-6xl mx-auto">
  <div className="md:w-1/2 p-4">
<h2 className="text-2xl font-bold text-center mb-12 relative inline-block">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">PODCAST MARKETING</span> 🎙️
  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-blue-600 shadow-xl rounded-lg mt-2"></span>
</h2>
<ul className="list-disc pl-5 text-gray-700">
      <li>Viral Promotion: Boost your podcast’s visibility with engaging marketing reels and creative content.</li>
      <li>Cross-Platform Engagement: Enhance your podcast’s presence across social media and digital platforms.</li>
      <li>Comprehensive Support: From promotion to provide end-to-end support for successful podcast marketing.</li>
      <li>Strategic Placements: Get featured on popular podcast platforms and channels to reach a wider audience.</li>
</ul>
</div>
  <div className="md:w-1/2 p-4">
    <video autoPlay muted loop playsinline className="w-full rounded-lg border-4 border-black-300 shadow-md">
      <source src="/PM(Hence).mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>

{/*Twitter Marketing */}
<div className="flex flex-col md:flex-row items-center mb-16 max-w-6xl mx-auto">
  <div className="md:w-1/2 p-4">
<h2 className="text-2xl font-bold text-center mb-12 relative inline-block">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">TWITTER(X) TRENDING</span> 📈
  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-blue-600 shadow-xl rounded-lg mt-2"></span>
</h2>
    <ul className="list-disc pl-5 text-gray-700">
      <li>Expert Trend Creation: Skilled at crafting compelling campaigns that capture attention and drive trends.</li>
      <li>Viral Impact: Ability to generate viral buzz and amplify your presence on Twitter.</li>
      <li>Real-Time Engagement: Quick response and adaptability to real-time events and audience reactions.</li>
      <li>Broad Reach: Access to a large and diverse Twitter audience to maximize trend visibility.</li>
      <li>Data-Driven Strategies: Utilizes analytics to optimize trends and ensure effective, targeted engagement.</li>
      </ul>
  </div>
    <div className="md:w-1/2 p-4">
    <video autoPlay muted loop playsinline className="w-full rounded-lg border-4 border-black-300 shadow-md">
      <source src="/X(Hence).mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>

{/*Music Marketing */}
<div className="flex flex-col md:flex-row items-center mb-16 max-w-6xl mx-auto">
  <div className="md:w-1/2 p-4">
 <h2 className="text-2xl font-bold text-center mb-12 relative inline-block">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"> MUSIC TRENDING </span> 🎶
  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-blue-600 shadow-xl rounded-lg mt-2"></span>
</h2>
    <ul className="list-disc pl-5 text-gray-700">
      <li>IG Music Integration: Get your tracks featured in Instagram Music to enhance discoverability and engagement.</li>
      <li>End-to-End Strategy: Comprehensive support from launch to promotion, ensuring sustained music visibility and impact.</li>
      <li>Platform Popularity: Boost your music’s visibility on Instagram, Facebook, and other major social platforms.</li>
      </ul>
  </div>
   <div className="md:w-1/2 p-4">
    <video autoPlay muted loop playsinline className="w-full rounded-lg border-4 border-black-300 shadow-md">
      <source src="/MT(Hence).mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>

{/*PR Publishing */}
 <div className="flex flex-col md:flex-row items-center mb-16 max-w-6xl mx-auto">
  <div className="md:w-1/2 p-4">
   <h2 className="text-2xl font-bold text-center mb-12 relative inline-block">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">PR PUBLISHING </span> 🤑
  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-blue-600 shadow-xl rounded-lg mt-2"></span>
</h2>
<ul className="list-disc pl-5 text-gray-700">
      <li>Extensive Media Network: Collaborations with multiple major news brands for widespread reach.</li>
      <li>Global Coverage: Access to both national and international news media outlets.</li>
      <li>High Visibility: Partnerships with top news sites that have the highest web traffic.</li>
      <li>Targeted Distribution: Strategic placements to ensure your message reaches the right audience.</li>
      <li>Proven Success: Consistently driving impactful media coverage and enhancing brand credibility.</li>
</ul>
  </div>
  <div className="md:w-1/2 p-4">
    <video autoPlay muted loop playsinline className="w-full rounded-lg border-4 border-black-300 shadow-md">
      <source src="/PR(Hence).mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>

{/*Account Verification */}
<div className="flex flex-col md:flex-row items-center mb-16 max-w-6xl mx-auto">
  <div className="md:w-1/2 p-4">
 <h2 className="text-2xl font-bold text-center mb-12 relative inline-block">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">ACCOUNT VERIFICATION</span> ✅
  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-blue-600 shadow-xl rounded-lg mt-2"></span>
</h2>
<ul className="list-disc pl-5 text-gray-700">
      <li>Official Verification: Obtain the verification badge for your business on Meta platforms like Facebook and Instagram</li>
      <li>Permanent Verification: Secure permanent verification status for lasting credibility on Facebook and Instagram.</li>
      <li>WhatsApp Verification: Secure the green verification badge for your brand’s WBhatsApp Business account.</li>
      <li>Enhanced Credibility: Boost your brand’s trustworthiness and authority with verified status.</li>
</ul>
  </div>
    <div className="md:w-1/2 p-4">
    <video autoPlay muted loop playsinline className="w-full rounded-lg border-4 border-black-300 shadow-md">
      <source src="/AV(Hence).mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>
</section>

{/*PR Section*/}
<section id="campaign" className="py-16 bg-white">
<h2 className="text-4xl font-bold text-center mb-6 relative flex justify-center items-center gap-2">
  PR and Campaigns
  <img 
    src="/Banrakas(BG).png" 
    alt="Banrakas" 
    className="w-40 h-30 mt-3"
  />
  <span className="block w-full h-1 bg-green-600 mx-auto mt-2 absolute -bottom-1 left-0"></span>
</h2>

  {/* Section 1 */}
<div className="flex flex-col md:flex-row items-center mb-16 max-w-6xl mx-auto">
 
<div className="w-full md:w-1/2 p-4">
    <div className="relative w-full h-[250px] md:h-[350px] flipper rounded-lg border-4 shadow-md">
      <div className="front">
        <img
          src="/Dhoni.webp"
          alt="Campaign Image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
           <h4 className='text-2xl font-bold text-center'>Featuring MS Dhoni</h4>
    </div>
</div>

<div className="md:w-1/2 p-4">
<h2 className="text-2xl font-bold text-center mb-12 relative inline-block">
  <span
    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
    style={{
      textDecorationLine: 'underline',
      textDecorationStyle: 'wavy',
      textDecorationColor: '#3b82f6' 
    }}>
    BOLE JO KOYAL TREND 
  </span> ☠️
    </h2>
 <p className="text-gray-700 mb-5 ">
      "We all know that Dhoni himself is a brand image, and when the meme tagline 'Bole Jo Koyal' was created about him, it clearly showcased how powerful the meme industry is and the massive impact it can have. The best part is, we worked with E-Motorad to bring this to life, and it successfully created a buzz on the internet. This proves that memes are one of the best things to have ever happened on the internet."
    </p>
 <button
  className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg mt-4 transform transition arrow-cursor duration-300 
             hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50 active:scale-95 active:shadow-none 
             flex items-center gap-2"
  onClick={() => window.open("https://www.instagram.com/reel/C5XhwvfRchV/?utm_source=ig_web_copy_link&igsh=MW5mZnd6Z3M5OXd2Ng==", '_blank')}>   See Our Work <GrLinkNext />
</button>

</div>
</div>

  {/* Section 2 */}
<div className="flex flex-col md:flex-row items-center mb-16 max-w-6xl mx-auto">
  

    <div className="w-full md:w-1/2 p-4">
    <div className="relative w-full h-[250px] md:h-[350px] flipper rounded-lg border-4 shadow-md">
      <div className="front">
        <img
          src="/BB(Hence).jpg"
          alt="Campaign Image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
           <h4 className='text-2xl font-bold text-center'>Elvish Yadav & Abhishek Malhaan</h4>
    </div>
  </div>

  <div className="md:w-1/2 p-4">
<h2 className="text-2xl font-bold text-center mb-12 relative inline-block">
  <span
    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
    style={{
      textDecorationLine: 'underline',
      textDecorationStyle: 'wavy',
      textDecorationColor: '#3b82f6' 
    }}>
    BIG BOSS TWITTER TREND
  </span> 😈
    </h2>

    <p className="text-gray-700 mb-5">
      "Those who watched Big Boss OTT (YouTuber Edition) know very well how Twitter trends play a crucial role in determining the final winner. With hashtags like #ElvishYadavWinner and #FukraInsaanWinner trending, it became clear how influential social media can be in the competition. That's why we, at Hence Media, made sure both received equal attention on X (formerly Twitter). We successfully managed and executed both campaigns, collaborating closely with their respective PR teams."
     </p>
          <button
  className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg mt-4 transform transition arrow-cursor duration-300 
             hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50 active:scale-95 active:shadow-none 
             flex items-center gap-2"
  onClick={() => window.open("https://www.instagram.com/reel/Cvms0Z7rsgl/?utm_source=ig_web_copy_link", '_blank')}
>
  See Our Work <GrLinkNext />
</button>
  </div>
</div>

{/* Section 3 */}
<div className="flex flex-col md:flex-row items-center  mb-16 max-w-6xl mx-auto">
 

   <div className="w-full md:w-1/2 p-4">
    <div className="relative w-full h-[250px] md:h-[350px] flipper rounded-lg border-4 border-black-300 shadow-md">
      <div className="front">
        <img
          src="/Panchayat.webp"
          alt="Campaign Image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
       <h4 className='text-2xl font-bold text-center'>Featuring Jeetu Bhaiya</h4>
    </div>
  </div>

  <div className="md:w-1/2 p-4">
 <h2 className="text-2xl font-bold text-center mb-12 relative inline-block">
  <span
    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
    style={{
      textDecorationLine: 'underline',
      textDecorationStyle: 'wavy',
      textDecorationColor: '#3b82f6' 
    }}>
    PANCHAYAT
  </span> 😍
    </h2>
      <p className="text-gray-700 mb-5">
     "Leveraging the power of influencers and meme pages led to massive engagement. The campaign’s center piece was their dialogs & satirical punchlines, launched through Reels and Statics which resonated deeply with audiences across through the country. By tapping into an extensive network with a follower base of 80 million, (Hence Media) achieved a staggering reach of 140 million+."
     </p>
   <button
  className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg mt-4 transform transition arrow-cursor duration-300 
             hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50 active:scale-95 active:shadow-none 
             flex items-center gap-2"
  onClick={() => window.open("https://www.instagram.com/reel/DH-ja6Isrw5/?utm_source=ig_web_copy_link&igsh=MWlraWlxajNtcDF2eg==", '_blank')}
>
  See Our Work <GrLinkNext />
</button>

  </div>
</div>



  {/* Section 4 */}
<div className="flex flex-col md:flex-row items-center mb-16  max-w-6xl mx-auto">
  
 <div className="w-full md:w-1/2 p-4">
    <div className="relative w-full h-[250px] md:h-[350px] flipper rounded-lg shadow-md border-4 border-black-300 outline-none">
      <div className="front">
        <img
          src="/Purav.png"
          alt="Campaign Image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
     <h4 className='text-2xl font-bold text-center'>Featuring Purav Jha</h4>
    </div>
  </div>
  <div className="md:w-1/2 p-4">
  <h2 className="text-2xl font-bold text-center mb-12 relative inline-block">
  <span
    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
    style={{
      textDecorationLine: 'underline',
      textDecorationStyle: 'wavy',
      textDecorationColor: '#3b82f6' 
    }}>
    SAMSUNG PHONE LAUNCH
  </span> 🤩
    </h2>
    <p className="text-gray-700 mb-5">
      "We worked with current internet's sensation PURAV JHA who pulled off this mobile marketing very well with dialogs from another meme trend, "Teri Jabaan bohot chalti hai surya". With a whooping 2crore+ views this campaign went successful."
    </p>

<button
  className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg mt-4 transform transition arrow-cursor duration-300 
             hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50 active:scale-95 active:shadow-none 
             flex items-center gap-2"
  onClick={() =>
    window.open(
      "https://www.instagram.com/reel/DH-8u9KP7rM/?utm_source=ig_web_copy_link",
      "_blank"
    )
  }
>
  See Our Work <GrLinkNext />
</button>

  </div>
</div>
 
 <div className="flex flex-col md:flex-row items-center mb-16 max-w-6xl mx-auto">
 <div className="md:w-1/2 p-4 relative">
  <img src="/User.webp" alt="Campaign Image" className="w-full rounded-lg border-4 border-black-300 shadow-md" />
 </div>
 <div className="md:w-1/2 p-4">
<h2 className="text-2xl font-bold text-center mb-12 relative inline-block">
  <span
    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
    style={{
      textDecorationLine: 'underline',
      textDecorationStyle: 'wavy',
      textDecorationColor: '#3b82f6' 
    }}>
    YOUR NEXT VIRAL CAMPAIGN
  </span> 🫡
    </h2>
  <p className="text-gray-700">
   "The next viral ad campaign on internet can be yours! We'll make sure your campaign surpasses all your past reaches. With our expertise, extensive mass following, and hook-grabbing memes, we promise to deliver a handsome reach."
  </p>
     <button
  className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg mt-4 transform transition arrow-cursor duration-300 
             hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 active:scale-95 active:shadow-none 
             flex items-center gap-2"
  onClick={() => window.open("https://form.typeform.com/to/Oxph7bfP", '_blank')}
>
  Contact Now <GrLinkNext />
</button>
 </div>
</div>
</section>

{/*Clients Section */}
<section className="py-16 bg-white">
  <h2 className="text-4xl font-bold text-center mb-6 relative">
    Brands Who Trusted Us 🫶🏼
    <span className="block w-full h-1 bg-green-600 mx-auto mt-2"></span>
  </h2>

  <div className="bg--600 p-4 rounded-lg">
  <Marquee speed={150} pauseOnHover gradient={false}>
    {[
      "/TVF.jpg", "/Realme.webp", "/Hotstar.jpeg", "/keshKing.png",
      "/new colors.jpg", "/DMF.jpg", "/Acer.jpg", "/primevideo.png",
      "/Paytm.avif", "/Dream11.jpg"
    ].map((src, idx) => (
      <div key={idx} className="h-20 w-36 flex items-center justify-center mx-8">
        <img src={src} alt={`Client ${idx + 1}`} className="max-h-full max-w-full object-contain" />
      </div>
    ))}
  </Marquee>
  {/*Clients Section */}


  <div className="relative mt-5">
    <Marquee speed={150} pauseOnHover gradient={false} direction="rtl">
      {[
        "/pubg.webp", "/Woodland.png", "/Sony.png", "/Xiaomi-Logo.png",
        "/Tseries.jpg", "/Cadbury_Logo.png", "/Flipkart.png",
        "/Loco.jpg", "/Netflix.jpg", "/cashify.png"
      ].map((src, idx) => (
        <div key={idx} className="h-20 w-36 flex items-center justify-center mx-8">
          <img src={src} alt={`Client ${idx + 11}`} className="max-h-full max-w-full object-contain" />
        </div>
      ))}
    </Marquee>
  </div>
</div>

{/* Featured Services Grid (3x2) */}
<section className="py-16 bg-white">
<h2 className="text-4xl font-bold text-center mb-6 relative flex justify-center items-center gap-2">
  Why Choose Us
  <img 
    src="/TB(BG).png" 
    alt="TB" 
    className="w-25 h-30 mt-3"
  />
  <span className="block w-full h-1 bg-green-600 mx-auto mt-2 absolute -bottom-1 left-0"></span>
</h2>


  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
    {/* Card 1 */}
    <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-green-400 transition">
      <h3 className="text-xl font-semibold mb-4">Excellent Writers <FaPenAlt /></h3>
      <p className="text-gray-600">"We work with top-tier writers like Tanmay Bhat and Vishal Dayama, known for crafting iconic campaigns for brands like Boldcare, CRED, and MakeMyTrip."</p>
    </div>

    {/* Card 2 */}
    <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-green-400 transition">
      <h3 className="text-xl font-semibold mb-4">Budget Friendly Campaigns <GiReceiveMoney /></h3>
      <p className="text-gray-600">"Even with a limited budget, we’ll ensure your campaign reaches top creators—and with the power of the meme community, we’ll amplify it to the next level."</p>
    </div>

    {/* Card 3 */}
    <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-green-400 transition">
      <h3 className="text-xl font-semibold mb-4">On-Time Action<IoTime /></h3>
      <p className="text-gray-600">"Just share the date and time—then relax. We’ll handle everything from managing and hosting to boosting your media content."</p>
    </div>

    {/* Card 4 */}
    <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-green-400 transition">
      <h3 className="text-xl font-semibold mb-4">Different Content Everywhere<MdOutlineMediation /></h3>
      <p className="text-gray-600">"For web or movie campaigns, we use IG, FB, and Twitter to share attention-grabbing clips. For long-form content, we promote on YouTube."</p>
    </div>

    {/* Card 5 */}
    <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-green-400 transition">
      <h3 className="text-xl font-semibold mb-4">Campaign Statistics<IoStatsChart /></h3>
      <p className="text-gray-600">"After a successful campaign, we’ll share performance stats so you can see how your product did online and plan your next launch effectively."</p>
    </div>

    {/* Card 6 */}
    <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-green-400 transition">
      <h3 className="text-xl font-semibold mb-4">Partnership Offers<FaHandshake /></h3>
      <p className="text-gray-600">"Choose us once, and we’ll make sure you partner with us again—with added benefits and exclusive discounts for your next campaign."</p>
    </div>
  </div>
</section>


  <span className="block w-full h-1 bg-green-600 mx-auto mt-2"></span>

</section>
<section id="contact" className="py-16 bg-white text-center flex items-center justify-between">
  <div className="w-1/2 p-4">
    <img 
      src="/WhatsApp Image 2025-06-09 at 12.21.43 PM.jpeg" 
      alt="Contact Us Image" 
  className="w-[80%] rounded-lg border-4 ml-30 border-black-300 shadow-md"/>
</div>
<div className="w-1/2 p-4">
   <h2 className="text-2xl font-bold text-center mb-12 relative inline-block">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">CONTACT US NOW</span>
  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-red-600 shadow-xl rounded-lg mt-2"></span>
</h2>
 <p className="text-lg text-gray-700 mb-6">
   "Don't hesitate to contact us—no ifs, ands, or buts. We've successfully launched many campaigns in the past, and we deliver exceptional services even on a budget. Join us today!"
   </p>
<button
  className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg transform transition arrow-cursor duration-300 
             hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 active:scale-95 active:shadow-none"
  onClick={() => window.open('https://form.typeform.com/to/Oxph7bfP', '_blank')} >  Get in Touch
</button>
<img 
  src="/QR.png" 
  alt="qr-image" 
  className="mt-4 mx-auto w-70 h-auto" 
/>
</div>
</section>
 </div>   
  );
};

export default Hero;
