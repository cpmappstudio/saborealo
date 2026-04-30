import { Button } from "@/components/ui/button"
import { SiteLogo } from "@/components/site/SiteLogo"
import { SiteIcon } from "@/components/site/SiteIcon"
import type { PannaSiteData } from "@/data/panna-site"
import type { ReactNode } from "react"

type SiteFooterProps = {
  logo: PannaSiteData["logo"]
  footer: PannaSiteData["footer"]
}

type FooterData = SiteFooterProps["footer"]
type FooterContactItem = FooterData["contact"][number]
type FooterLink = { label: string; href: string }

export function SiteFooter({ logo, footer }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="panna-shell">
          <SiteLogo
            logo={logo}
            href="/"
            imageClassName="site-footer__logo"
            loading="lazy"
          />

          <div className="site-footer__grid">
            <FooterColumn title="PANNA GROUP">
              <ul className="site-footer__contact">
                {footer.contact.map((item) => (
                  <ContactItem key={`${item.icon}-${item.label}`} item={item} />
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="QUICK LINKS">
              <FooterLinks links={footer.quickLinks} />
            </FooterColumn>

            <FooterColumn title="STORES">
              <FooterLinks links={footer.storeLinks} />
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
        <span>{"\u00a9 2024 PANNA | All Rights Reserved |\u00a0"}</span>
        <a href="https://mypanna.com/privacy-policy/">Privacy Policy</a>
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

function FooterLinks({ links }: { links: readonly FooterLink[] }) {
  return (
    <ul className="site-footer__list">
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.href} className="site-footer__link">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
