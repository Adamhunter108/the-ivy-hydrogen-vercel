import {EnhancedMenu} from '~/lib/utils';
import {Text} from '~/components';
import {Drawer} from './Drawer.client';
import {Link} from '@shopify/hydrogen';

export function MenuDrawer({
  isOpen,
  onClose,
  menu,
}: {
  isOpen: boolean;
  onClose: () => void;
  menu: EnhancedMenu;
}) {
  return (
    <Drawer open={isOpen} onClose={onClose} openFrom="left" heading="Menu">
      <div className="grid">
        <MenuMobileNav menu={menu} onClose={onClose} />
      </div>
    </Drawer>
  );
}

function MenuMobileNav({
  menu,
  onClose,
}: {
  menu: EnhancedMenu;
  onClose: () => void;
}) {
  return (
    // <nav className="grid gap-4 p-6 sm:gap-6 sm:px-12 sm:py-8 bg-[url('/images/ivy-bg.jpg')] bg-cover">
    <nav className="grid gap-4 p-6 sm:gap-6 sm:px-12 sm:py-8">
      {/* Top level menu items */}
      {/* {(menu?.items || []).map((item) => (
        <Link key={item.id} to={item.to} target={item.target} onClick={onClose}>
          <Text as="span" size="copy">
            {item.title}
          </Text>
        </Link>
      ))} */}
      <Link to="/">
        <div className="text-neon-pink hover:bg-gradient-to-b from-neon-pink via-neon-pink to-pink-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center">
          Shop Home
        </div>
      </Link>
      <Link to="/products">
        <div className="text-neon-pink hover:bg-gradient-to-b from-neon-pink via-neon-pink to-pink-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center">
          Catalog
        </div>
      </Link>
      <Link to="https://www.theivylbny.com/event-list">
        <div className="text-neon-pink hover:bg-gradient-to-b from-neon-pink via-neon-pink to-pink-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center">
          Events
        </div>
      </Link>
    </nav>
  );
}
