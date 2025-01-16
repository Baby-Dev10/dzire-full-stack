import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ 
  title = "DZIRE - Premium Clothing & Fashion in India", 
  description, 
  image,
  canonicalUrl,
  type = "website"
}) => {
  const siteUrl = "https://thedzire.com"; 
  const defaultDescription = "Discover trendy hoodies, t-shirts & jackets crafted for style and comfort. Premium streetwear delivered across India. Shop the latest fashion trends now!";
  const defaultImage = `${siteUrl}/logo.png`; 

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={canonicalUrl || siteUrl} />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content={type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description || defaultDescription} />
    <meta property="og:image" content={image || defaultImage} />
    <meta property="og:url" content={canonicalUrl || siteUrl} />
    <meta property="og:site_name" content="DZIRE" />

    {/* Instagram */}
    <meta property="instapp:owner_id" content="_.thedzire" />
    <meta property="instagram:app_id" content="_.thedzire" />
    <meta property="instagram:site" content="@_.thedzire" />
    <meta property="instagram:creator" content="@_.thedzire" />

    {/* Additional Meta Tags for E-commerce */}
      <meta name="keywords" content="hoodies, t-shirts, jackets, streetwear, fashion, Indian clothing brand, premium clothing, urban fashion, casual wear, trendy clothes" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="The Dzire" />

      {/* Geo Tags */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.position" content="20.5937;78.9629" />
      <meta name="ICBM" content="20.5937, 78.9629" />

      {/* Additional Tags for Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#000000" />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  canonicalUrl: PropTypes.string,
  type: PropTypes.string
};

export default SEO;