import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, author }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="PranjalDev" />
      <meta property="og:url" content="https://pranjaldev.live" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@pranjaldev" />
      
      {/* Location and Professional Info */}
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Noida" />
      <meta name="og:locality" content="Noida" />
      <meta name="og:region" content="Uttar Pradesh" />
      <meta name="og:country-name" content="India" />
    </Helmet>
  );
};

SEO.defaultProps = {
  title: "Pranjal Tiwari | Full Stack Developer in Noida | PranjalDev",
  description: "Pranjal Tiwari (PranjalDev) - Full Stack Developer based in Noida, specializing in MERN stack development. Explore my portfolio showcasing web development projects and professional experience.",
  keywords: "Pranjal Tiwari, PranjalDev, pranjaldev.live, Pranjal Noida, Pranjal Tiwari Noida, Full Stack Developer, MERN Stack Developer, Web Development, Portfolio, React Developer, Node.js Developer, Software Engineer Noida",
  author: "Pranjal Tiwari"
};

export default SEO; 