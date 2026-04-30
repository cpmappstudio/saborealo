"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowDown01Icon,
  Menu01Icon,
  Search01Icon,
} from "@hugeicons/core-free-icons";
import type { MouseEvent } from "react";

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
import type { PannaSiteData } from "@/data/panna-site";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  logo: PannaSiteData["logo"];
  nav: PannaSiteData["nav"];
};

type NavItem = PannaSiteData["nav"][number];

function preventPlaceholderNavigation(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
}

export function SiteHeader({ logo, nav }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="site-header__inner panna-shell">
        <a href="/" className="site-header__logo" aria-label="PANNA home">
          <img
            src={logo}
            alt="PANNA New Latino Food"
            width={1541}
            height={718}
          />
        </a>

        <div className="site-header__nav-wrap site-header__desktop-nav">
          <DesktopNavigation nav={nav} />
        </div>

        <div className="site-header__nav-wrap site-header__mobile-nav">
          <MobileNavigation logo={logo} nav={nav} />
        </div>

        <div className="site-search">
          <HeaderSearch />
        </div>
      </div>
    </header>
  );
}

function DesktopNavigation({ nav }: { nav: SiteHeaderProps["nav"] }) {
  return (
    <NavigationMenu
      viewport={false}
      className="main-nav"
      aria-label="Main menu"
    >
      <NavigationMenuList>
        {nav.map((item) => (
          <NavigationMenuItem key={item.label} className="main-nav__item">
            {"sub" in item && item.sub ? (
              <>
                <NavigationMenuTrigger asChild className="main-nav__link">
                  <a
                    href={item.href}
                    onClick={
                      item.href === "#"
                        ? preventPlaceholderNavigation
                        : undefined
                    }
                  >
                    <span>{item.label}</span>
                    <HugeiconsIcon
                      icon={ArrowDown01Icon}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </a>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="main-nav__dropdown">
                  <ul className="main-nav__dropdown-list">
                    {item.sub.map((subItem) => (
                      <li key={subItem.label}>
                        <NavigationMenuLink asChild>
                          <a href={subItem.href} className="main-nav__sub-link">
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
                <a href={item.href}>{item.label}</a>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileNavigation({ logo, nav }: SiteHeaderProps) {
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
            <img src={logo} alt="" width={1541} height={718} />
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
              <MobileNavigationItem key={item.label} item={item} />
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
      action="https://mypanna.com/"
      className={cn("site-search__form", className)}
      method="get"
      role="search"
      aria-label="Site search"
    >
      <Input
        name="s"
        placeholder="Search Products..."
        type="search"
        autoComplete="off"
        aria-label="Search products"
        className="site-search__input"
      />
      <Button
        type="submit"
        size="icon"
        aria-label="Search"
        className="site-search__button"
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

function MobileNavigationItem({ item }: { item: NavItem }) {
  if (!("sub" in item) || !item.sub || item.href !== "#") {
    return (
      <SheetClose asChild>
        <a className="site-header__mobile-link" href={item.href}>
          {item.label}
        </a>
      </SheetClose>
    );
  }

  return (
    <AccordionItem value={item.label} className="site-header__mobile-item">
      <AccordionTrigger className="site-header__mobile-trigger">
        {item.label}
      </AccordionTrigger>
      <AccordionContent>
        <div className="site-header__mobile-sub-list">
          {item.sub.map((subItem) => (
            <SheetClose asChild key={subItem.label}>
              <a href={subItem.href} className="site-header__mobile-sub-link">
                {subItem.label}
              </a>
            </SheetClose>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
