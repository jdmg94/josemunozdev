import Head from "next/head";

const siteMetadata = {
  type: "website",
  icon: "/favicon.ico",
  image: "/profile.jpeg",
  imageType: "image/jpeg",
  url: "https://www.josemunoz.dev",
  title: "José Muñoz Software Engineer",
  description:
    "I'm a software developer, tech speaker, and scrum master based on Vancouver.",
};

const SEO = ({ title }) => {
  const derivedTitle = title ? `${title} - José Muñoz` : siteMetadata.title;

  return (
    <Head>
      <title>{derivedTitle}</title>
      <link rel="icon" href={siteMetadata.icon} />
      <meta name="description" content={siteMetadata.description} />
      <meta property="og:type" content={siteMetadata.type} />
      <meta property="og:title" content={derivedTitle} />
      <meta property="og:image" content={siteMetadata.image} />
      <meta property="og:image:type" content={siteMetadata.imageType} />
      <meta property="og:url" content={siteMetadata.url} />
      <meta property="og:description" content={siteMetadata.description} />
    </Head>
  );
};

export default SEO;
