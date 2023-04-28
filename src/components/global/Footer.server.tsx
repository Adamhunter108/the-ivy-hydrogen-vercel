import {useUrl} from '@shopify/hydrogen';

// import {Section, Heading, FooterMenu, CountrySelector} from '~/components';
import {Section} from '~/components';
import type {EnhancedMenu} from '~/lib/utils';

/**
 * A server component that specifies the content of the footer on the website
 */
export function Footer({menu}: {menu?: EnhancedMenu}) {
  const {pathname} = useUrl();

  const localeMatch = /^\/([a-z]{2})(\/|$)/i.exec(pathname);
  const countryCode = localeMatch ? localeMatch[1] : null;

  const isHome = pathname === `/${countryCode ? countryCode + '/' : ''}`;
  const itemsCount = menu
    ? menu?.items?.length + 1 > 4
      ? 4
      : menu?.items?.length + 1
    : [];

  return (
    <Section
      divider={isHome ? 'none' : 'top'}
      as="footer"
      role="contentinfo"
      className={`grid min-h-14 items-start grid-flow-row w-full gap-6 py-8 px-6 md:px-8 lg:px-12 
        border-b md:gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-${itemsCount}
        bg-primary dark:bg-contrast dark:text-primary text-contrast overflow-hidden`}
    >
      {/* <FooterMenu menu={menu} />
      <section className="grid gap-4 w-full md:max-w-[335px] md:ml-auto">
        <Heading size="lead" className="cursor-default" as="h3">
          Country
        </Heading>
        <CountrySelector />
      </section> */}
      <div className={`self-end pt-8 md:col-span-2 lg:col-span-${itemsCount}`}>
        <p className="opacity-50 text-sm xl:text-center ">
          &copy; {new Date().getFullYear()} The Ivy, all rights reserved.
        </p>
        <p className="xl:text-center lg:text-left text-sm text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-cyan-600">
          Made with <span className="text-red-600">❤️</span> in NYC by
          <a
            className="hover:text-black hover:font-bold"
            href="https://www.whiterabbitdesign.studio/"
            target="_blank"
            rel="noreferrer"
          >
            White Rabbit Design
          </a>
        </p>
      </div>
    </Section>
  );
}
