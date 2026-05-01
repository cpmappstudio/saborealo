"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Menu01Icon,
  Search01Icon,
} from "@hugeicons/core-free-icons";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SiteLogo } from "@/components/site/SiteLogo";
import type { PannaSiteData } from "@/data/panna-site";
import {
  isActiveLink,
  isCurrentPage,
} from "@/lib/site-navigation";
import { getLinkAttributes } from "@/lib/link-attributes";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  logo: PannaSiteData["logo"];
  nav: PannaSiteData["nav"];
  currentPath: string;
};

type NavItem = PannaSiteData["nav"][number];

export function SiteHeader({ logo, nav, currentPath }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="site-header__inner panna-shell">
        <SiteLogo logo={logo} href="/" linkClassName="site-header__logo" />

        <div className="site-header__nav-wrap site-header__desktop-nav">
          <DesktopNavigation currentPath={currentPath} nav={nav} />
        </div>

        <div className="site-header__nav-wrap site-header__mobile-nav">
          <MobileNavigation currentPath={currentPath} logo={logo} nav={nav} />
        </div>

        <div className="site-search">
          <HeaderSearch />
        </div>
      </div>
    </header>
  );
}

function DesktopNavigation({
  nav,
  currentPath,
}: {
  nav: SiteHeaderProps["nav"];
  currentPath: string;
}) {
  return (
    <NavigationMenu
      viewport={false}
      className="main-nav"
      aria-label="Main menu"
    >
      <NavigationMenuList>
        {nav.map((item) => {
          const isActive = isActiveLink(currentPath, item);

          return (
            <NavigationMenuItem key={item.label} className="main-nav__item">
              {"sub" in item && item.sub ? (
                <>
                  <NavigationMenuTrigger
                    className="main-nav__link"
                    data-active={isActive ? "true" : undefined}
                  >
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="main-nav__dropdown">
                    <ul className="main-nav__dropdown-list">
                      {item.sub.map((subItem) => (
                        <li key={subItem.label}>
                          <NavigationMenuLink asChild>
                            <a
                              aria-current={
                                isCurrentPage(currentPath, subItem.href)
                                  ? "page"
                                  : undefined
                              }
                              className="main-nav__sub-link"
                              data-active={
                                isActiveLink(currentPath, subItem)
                                  ? "true"
                                  : undefined
                              }
                              href={subItem.href}
                              {...getLinkAttributes(subItem)}
                            >
                              {subItem.label}
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink asChild className="main-nav__link">
                  <a
                    aria-current={
                      isCurrentPage(currentPath, item.href) ? "page" : undefined
                    }
                    data-active={isActive ? "true" : undefined}
                    href={item.href}
                    {...getLinkAttributes(item)}
                  >
                    {item.label}
                  </a>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileNavigation({
  logo,
  nav,
  currentPath,
}: SiteHeaderProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="site-header__toggle"
          aria-label="Open navigation"
        >
          <HugeiconsIcon
            icon={Menu01Icon}
            data-icon="inline-start"
            strokeWidth={2}
            aria-hidden="true"
          />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="site-header__sheet">
        <SheetHeader>
          <SheetTitle className="site-header__sheet-title">
            <SiteLogo logo={logo} decorative />
            <span>Navigation</span>
          </SheetTitle>
          <SheetDescription className="site-header__sheet-description">
            Browse PANNA sections and quick actions.
          </SheetDescription>
        </SheetHeader>

        <div className="site-header__sheet-body">
          <HeaderSearch className="site-header__sheet-search-form" />

          <Accordion
            type="single"
            collapsible
            className="site-header__accordion"
          >
            {nav.map((item) => (
              <MobileNavigationItem
                currentPath={currentPath}
                key={item.label}
                item={item}
              />
            ))}
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function HeaderSearch({ className }: { className?: string }) {
  return (
    <form
      className={cn("site-search__form", className)}
      method="get"
      role="search"
      aria-label="Site search"
      onSubmit={(event) => event.preventDefault()}
    >
      <Input
        name="s"
        placeholder="Search coming soon…"
        type="search"
        autoComplete="off"
        aria-label="Search products"
        className="site-search__input"
        disabled
      />
      <Button
        type="submit"
        size="icon"
        aria-label="Search"
        className="site-search__button"
        disabled
      >
        <HugeiconsIcon
          icon={Search01Icon}
          data-icon="inline-start"
          strokeWidth={2.5}
          aria-hidden="true"
        />
      </Button>
    </form>
  );
}

function MobileNavigationItem({
  item,
  currentPath,
}: {
  item: NavItem;
  currentPath: string;
}) {
  const isActive = isActiveLink(currentPath, item);

  if (!("sub" in item) || !item.sub || item.href !== "#") {
    return (
      <SheetClose asChild>
        <a
          aria-current={
            isCurrentPage(currentPath, item.href) ? "page" : undefined
          }
          className="site-header__mobile-link"
          data-active={isActive ? "true" : undefined}
          href={item.href}
          {...getLinkAttributes(item)}
        >
          {item.label}
        </a>
      </SheetClose>
    );
  }

  return (
    <AccordionItem
      className="site-header__mobile-item"
      data-active={isActive ? "true" : undefined}
      value={item.label}
    >
      <AccordionTrigger className="site-header__mobile-trigger">
        {item.label}
      </AccordionTrigger>
      <AccordionContent>
        <div className="site-header__mobile-sub-list">
          {item.sub.map((subItem) => (
            <SheetClose asChild key={subItem.label}>
              <a
                aria-current={
                  isCurrentPage(currentPath, subItem.href) ? "page" : undefined
                }
                className="site-header__mobile-sub-link"
                data-active={
                  isActiveLink(currentPath, subItem) ? "true" : undefined
                }
                href={subItem.href}
                {...getLinkAttributes(subItem)}
              >
                {subItem.label}
              </a>
            </SheetClose>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
