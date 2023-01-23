import Head from 'next/head';
import { useRouter } from 'next/router';

import logoImage from '@/assets/images/logo.svg';

import { makeTitleMerge, siteName } from '@/config/seo.config';

import { ISeo } from './meta.interface';

import { clearText } from '../string/clearText';

const Meta: React.FC<ISeo> = ({ title, description, image, children }) => {
  const { asPath } = useRouter();
  const currentUrl = `${process.env.APP_URL}${asPath}`;

  return (
    <>
      <Head>
        <title itemProp="headline">{makeTitleMerge(title)}</title>
        {description ? (
          <>
            <meta itemProp="description" name="description" content={clearText(description, 152)} />
            <link rel="canonical" href={currentUrl} />
            <meta property="og:locale" content="en" />
            <meta property="og:title" content={makeTitleMerge(title)} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:image" content={image || logoImage} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:description" content={clearText(description, 197)} />
          </>
        ) : (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
      {children}
    </>
  );
};
export default Meta;
