import { Button } from "@/components/ui/button"
import { SiteLogo } from "@/components/site/SiteLogo"
import { SiteIcon } from "@/components/site/SiteIcon"
import type { PannaSiteData } from "@/data/panna-site"
import { getLinkAttributes } from "@/lib/link-attributes"
import {
  isActiveLink,
  isCurrentPage,
  type MatchableLink,
} from "@/lib/site-navigation"
import type { ReactNode } from "react"

type SiteFooterProps = {
  logo: PannaSiteData["logo"]
  footer: PannaSiteData["footer"]
  currentPath: string
}

type FooterData = SiteFooterProps["footer"]
type FooterContactItem = FooterData["contact"][number]
type FooterLink = MatchableLink & { label: string }

export function SiteFooter({ logo, footer, currentPath }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="panna-shell">
          <SiteLogo
            logo={logo}
            variant="alt"
            href="/"
            imageClassName="site-footer__logo"
            loading="lazy"
          />

          <div className="site-footer__grid">
            <FooterColumn title="SABOREALO">
              <ul className="site-footer__contact">
                {footer.contact.map((item) => (
                  <ContactItem key={`${item.icon}-${item.label}`} item={item} />
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="QUICK LINKS">
              <FooterLinks currentPath={currentPath} links={footer.quickLinks} />
            </FooterColumn>

            <FooterColumn title="STORES">
              <FooterLinks currentPath={currentPath} links={footer.storeLinks} />
            </FooterColumn>

            <FooterColumn title="SUBSCRIBE">
              {/*
              <form className="site-footer__form">
                <Input
                  className="site-footer__input"
                  type="email"
                  name="email"
                  autoComplete="email"
                  spellCheck={false}
                  placeholder="name@example.com..."
                  aria-label="Email"
                />
                <Button className="site-footer__submit" type="submit">
                  Send
                </Button>
              </form>
              */}

              <div className="site-footer__social">
                {footer.social.map((item) => (
                  <Button
                    key={item.type}
                    className="site-footer__social-link"
                    variant="default"
                    size="icon"
                    asChild
                  >
                    <a href={item.href} aria-label={item.label}>
                      <SiteIcon type={item.type} dataIcon="inline-start" />
                    </a>
                  </Button>
                ))}
              </div>

              {/*
              <div className="site-footer__apps">
                {footer.appButtons.map((item) => (
                  <a href={item.href} key={item.alt}>
                    <img
                      src={item.image}
                      alt={item.alt}
                      width={420}
                      height={125}
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                ))}
              </div>
              */}
            </FooterColumn>
          </div>
        </div>
      </div>

      <div className="site-footer__legal">
        <span>{"\u00a9 2026 Saborealo| All Rights Reserved \u00a0"}</span>
        {/* <a href="https://mypanna.com/privacy-policy/">Privacy Policy</a> */}
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="site-footer__column">
      <h2 className="site-footer__title">{title}</h2>
      {children}
    </div>
  )
}

function ContactItem({ item }: { item: FooterContactItem }) {
  return (
    <li>
      <span className="site-footer__icon">
        <SiteIcon type={item.icon} />
      </span>
      <span className="site-footer__text">{item.label}</span>
    </li>
  )
}

function FooterLinks({
  links,
  currentPath,
}: {
  links: readonly FooterLink[]
  currentPath: string
}) {
  return (
    <ul className="site-footer__list">
      {links.map((link) => {
        const isActive = isActiveLink(currentPath, link)

        return (
          <li key={link.label}>
            <a
              href={link.href}
              className="site-footer__link"
              aria-current={isCurrentPage(currentPath, link.href) ? "page" : undefined}
              data-active={isActive ? "true" : undefined}
              {...getLinkAttributes(link)}
            >
              {link.label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
