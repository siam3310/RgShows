import { Outlet } from '@remix-run/react';
import { mergeMeta } from '~/utils';

import type { Handle } from '~/types/handle';
import { searchPages } from '~/constants/tabLinks';
import { BreadcrumbItem } from '~/components/elements/Breadcrumb';

export const meta = mergeMeta(() => [
  { title: 'RG SHOWS - Search' },
  { name: 'description', content: 'Search Movies, Tv Series and Anime on RG SHOWS' },
  { property: 'og:url', content: 'https://rgshows.vercel.app/search' },
  { property: 'og:title', content: 'RG SHOWS - Search' },
  { property: 'og:image', content: 'https://rgshows.vercel.app/api/ogimage?it=search' },
  { property: 'og:description', content: 'Search Movies, Tv Series and Anime on RG SHOWS' },
  { name: 'twitter:title', content: 'RG SHOWS - Search' },
  { name: 'twitter:image', content: 'https://rgshows.vercel.app/api/ogimage?it=search' },
  { name: 'twitter:description', content: 'Search Movies, Tv Series and Anime on Sora' },
]);

export const handle: Handle = {
  breadcrumb: ({ t }) => (
    <BreadcrumbItem to="/search" key="search">
      {t('search.action')}
    </BreadcrumbItem>
  ),
  showTabLink: true,
  tabLinkPages: searchPages,
  tabLinkTo: () => '/search/',
  miniTitle: ({ t }) => ({
    title: t('search.action'),
    showImage: false,
  }),
};

const SearchPage = () => <Outlet />;

export default SearchPage;
