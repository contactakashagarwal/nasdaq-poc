import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="header-group">
        <header
          className="primary-nav  primary-nav--sticky"
          data-mega-menu-disabled="FALSE"
          role="banner"
          mode="OptimizedRender"
        >
          <nav
            className="primary-nav__content"
            aria-label="Primary Navigation"
            role="navigation"
          >
            <button
              className="primary-nav__hamburger"
              aria-label="Toggle mobile navigation menu"
            ></button>
            <div className="primary-nav__logo">
              <Link href="/" title="Nasdaq Homepage">
                <svg
                  width="106"
                  height="30"
                  viewBox="0 0 106 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="primary-nav__logo-normal"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M78.1281 22.8256C74.5111 22.8256 72.2639 20.7247 72.2639 17.3409C72.2639 13.8246 74.3374 11.6398 77.6759 11.6398L77.9581 11.6382C78.3755 11.6382 78.9524 11.6514 79.74 11.7517V7.50928H82.102V22.4441C82.102 22.4441 79.8589 22.8256 78.1281 22.8256ZM78.1076 13.5027C75.8219 13.5027 74.7106 14.7392 74.7106 17.2823C74.7106 19.5643 76.0503 20.9817 78.206 20.9817C78.6198 20.9817 79.0941 20.9559 79.74 20.8989V13.6537C79.0935 13.5508 78.5745 13.5027 78.1076 13.5027Z"
                    fill="#404041"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M45.8108 22.485L39.4365 11.3324L39.4349 22.485H37.214V8.36816H40.3225L46.6968 19.421L46.6941 8.36816H48.9435V22.485H45.8108Z"
                    fill="#404041"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M66.1111 22.7014C65.0383 22.7014 63.9186 22.5811 62.5857 22.3241L62.4441 22.2961V20.324L62.6552 20.3704C63.8286 20.6206 64.843 20.8369 65.8563 20.8369C66.677 20.8369 68.5858 20.706 68.5858 19.4975C68.5858 18.4827 67.2666 18.2289 66.2064 18.0257L66.1401 18.0125C65.9432 17.9735 65.7568 17.9365 65.5973 17.8964C64.0434 17.4916 62.3857 16.8847 62.3857 14.7965C62.3857 12.7605 63.9939 11.5927 66.7975 11.5927C68.1425 11.5927 69.1195 11.7383 69.9039 11.8555L70.2877 11.913V13.8244L70.0829 13.7891C69.1948 13.6249 68.1541 13.4566 67.1513 13.4566C66.04 13.4566 64.7161 13.6651 64.7161 14.6588C64.7161 15.482 65.7979 15.7179 67.0507 15.9908C68.8011 16.3728 70.9736 16.8483 70.9736 19.2426C70.9736 21.4406 69.2011 22.7014 66.1111 22.7014Z"
                    fill="#404041"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M88.7257 22.7014C86.2811 22.7014 84.0196 22.2708 84.0196 19.1445C84.0196 15.7427 87.5176 15.7427 89.608 15.7427C89.817 15.7427 90.7993 15.7876 91.102 15.8013C91.0993 13.893 91.0735 13.4376 88.313 13.4376C87.2186 13.4376 86.0026 13.6556 84.9298 13.8476L84.725 13.8846V11.9995L84.865 11.971C86.1079 11.7167 87.3065 11.5927 88.5289 11.5927C91.2046 11.5927 93.4719 11.8634 93.4719 15.1902V22.4476L93.3087 22.4644C91.4557 22.6729 89.9833 22.7014 88.7257 22.7014ZM89.5485 17.4251C87.5334 17.4251 86.2848 17.7223 86.2848 19.2025C86.2848 20.915 87.8788 21.058 89.3727 21.058C89.9323 21.058 90.9362 20.9868 91.2431 20.9636V17.4832C90.8098 17.4668 89.6849 17.4251 89.5485 17.4251Z"
                    fill="#404041"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M55.6178 22.7014C53.1731 22.7014 50.9117 22.2708 50.9117 19.1445C50.9117 15.7427 54.4097 15.7427 56.5001 15.7427C56.7085 15.7427 57.6913 15.7876 57.994 15.8013C57.9914 13.893 57.9656 13.4376 55.2051 13.4376C54.1107 13.4376 52.8952 13.6556 51.8218 13.8476L51.6171 13.8846V11.9995L51.7571 11.971C53.0005 11.7167 54.1986 11.5927 55.4209 11.5927C58.0967 11.5927 60.3639 11.8634 60.3639 15.1902V22.4476L60.2007 22.4644C58.3478 22.6729 56.8754 22.7014 55.6178 22.7014ZM56.4406 17.4251C54.4255 17.4251 53.1768 17.7223 53.1768 19.2025C53.1768 20.915 54.7708 21.058 56.2648 21.058C56.8243 21.058 57.8282 20.9868 58.1351 20.9636V17.4832C57.7019 17.4668 56.5769 17.4251 56.4406 17.4251Z"
                    fill="#404041"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M102.868 27.2799V22.6501C101.946 22.7799 101.456 22.7799 101.061 22.7799C100.127 22.7799 99.0893 22.5762 98.2844 22.2342C96.4867 21.4859 95.4134 19.5808 95.4134 17.1374C95.4134 15.9157 95.7098 13.6861 97.6938 12.4844C98.6871 11.8881 99.8642 11.6332 101.63 11.6332C102.264 11.6332 103.118 11.6823 103.943 11.7303L105.283 11.7994V26.2081L102.868 27.2799ZM101.453 13.4966C99.0572 13.4966 97.8412 14.7215 97.8412 17.1374C97.8412 20.2447 99.6558 20.897 101.179 20.897C101.549 20.897 101.967 20.897 102.89 20.7803V13.5636C102.167 13.5145 101.835 13.4966 101.453 13.4966Z"
                    fill="#404041"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M26.6726 0L18.8675 21.4961C18.6759 22.0265 18.1921 22.4138 17.612 22.4724V22.4851H25.8619C26.5089 22.4851 27.0616 22.0729 27.269 21.4961L35.0742 0H26.6726ZM16.9409 22.1567C17.4173 22.1567 17.8374 21.9203 18.0943 21.5593C18.1212 21.5218 18.2149 21.3899 18.2801 21.2099L21.1433 13.3225L19.4688 8.71643C19.255 8.20506 18.7502 7.84567 18.1622 7.84567C17.6863 7.84567 17.2657 8.08157 17.0088 8.44306C16.982 8.48001 16.8704 8.64835 16.823 8.79242L13.9609 16.6767L15.6423 21.3012C15.8602 21.8042 16.3587 22.1567 16.9409 22.1567ZM9.21221 7.51601H17.5522V7.52076C16.9326 7.54662 16.4077 7.94611 16.2066 8.50445L8.40206 30H0L7.80458 8.50445C8.01304 7.92764 8.56472 7.51601 9.21221 7.51601Z"
                    fill="#0090BA"
                  ></path>
                </svg>
              </Link>
            </div>

            <ul
              className="primary-nav__links"
              aria-hidden="false"
              itemScope=""
              itemType="http://www.schema.org/SiteNavigationElement"
            >
              <li
                className="primary-nav__link "
                itemProp="name"
                onClick="void(0)"
              >
                <a
                  className="primary-nav__anchor"
                  data-mega-menu-enabled="true"
                  href="/market-activity"
                  title=""
                  itemProp="url"
                >
                  <span className="primary-nav__anchor-text">
                    Market Activity
                  </span>
                </a>
                <button
                  className="primary-nav__expand"
                  data-enabled="false"
                  aria-label="Market Activity - Click to open sub-navigation"
                >
                  <span
                    className="primary-nav__expand-caret"
                    aria-hidden="true"
                  ></span>
                </button>
                <div
                  className="primary-nav__mega"
                  aria-hidden="true"
                  style={{ height: "598px", left: "486px" }}
                >
                  <div className="primary-nav__close-icon">
                    <span className="primary-nav__close-text">CLOSE</span>
                  </div>
                  <ul
                    className="primary-nav__mega-list"
                    itemScope=""
                    itemType="http://www.schema.org/SiteNavigationElement"
                  >
                    <li className="primary-nav__mega-column" itemProp="name">
                      <span className="primary-nav__header">
                        <a
                          className="primary-nav__header-link"
                          href="/market-activity"
                          itemProp="url"
                        >
                          <span className="primary-nav__header-link-text">
                            Market Activity
                          </span>
                          <span
                            className="primary-nav__header-link-caret"
                            aria-hidden="true"
                          ></span>
                        </a>
                      </span>
                      <ul
                        className="primary-nav__mega-links"
                        itemScope=""
                        itemType="http://www.schema.org/SiteNavigationElement"
                      >
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/market-activity/stocks"
                            itemProp="url"
                          >
                            Stocks
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/market-activity/funds-and-etfs"
                            itemProp="url"
                          >
                            Funds + ETFs
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/market-activity/indexes"
                            itemProp="url"
                          >
                            Indexes
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/market-activity/commodities"
                            itemProp="url"
                          >
                            Commodities
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/market-activity/cryptocurrency"
                            itemProp="url"
                          >
                            Cryptocurrency
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/market-activity/currencies"
                            itemProp="url"
                          >
                            Currencies
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/market-activity/futures"
                            itemProp="url"
                          >
                            Futures
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/market-activity/fixed-income"
                            itemProp="url"
                          >
                            Fixed Income
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/market-activity/global-markets"
                            itemProp="url"
                          >
                            Global Markets
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="primary-nav__mega-column" itemProp="name">
                      <span className="primary-nav__header">Quick Links</span>

                      <ul
                        className="primary-nav__mega-links"
                        itemScope=""
                        itemType="http://www.schema.org/SiteNavigationElement"
                      >
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/market-activity/quotes/real-time"
                            itemProp="url"
                          >
                            Real-Time Quotes
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/market-activity/after-hours"
                            itemProp="url"
                          >
                            After-Hours Quotes
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/market-activity/pre-market"
                            itemProp="url"
                          >
                            Pre-Market Quotes
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/market-activity/quotes/nasdaq-ndx-index"
                            itemProp="url"
                          >
                            Nasdaq-100
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/market-activity/stocks/screener"
                            itemProp="url"
                          >
                            Symbol Screener
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/market-activity/online-brokers"
                            itemProp="url"
                          >
                            Online Brokers
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/glossary"
                            itemProp="url"
                          >
                            Glossary
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/market-activity/fixed-income/nasdaq-sustainable-bond-network"
                            itemProp="url"
                          >
                            Sustainable Bond Network
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/market-activity/stocks/symbol-change-history"
                            itemProp="url"
                          >
                            Symbol Change History
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/market-activity/ipo-performance"
                            itemProp="url"
                          >
                            IPO Performance
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/market-activity/search-ownership"
                            itemProp="url"
                          >
                            Ownership Search
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/market-activity/quotes/dividend-history"
                            itemProp="url"
                          >
                            Dividend History
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="primary-nav__mega-column" itemProp="name">
                      <span className="primary-nav__header">Market Events</span>

                      <ul
                        className="primary-nav__mega-links"
                        itemScope=""
                        itemType="http://www.schema.org/SiteNavigationElement"
                      >
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/market-activity/economic-calendar"
                            itemProp="url"
                          >
                            Economic Calendar
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/market-activity/earnings"
                            itemProp="url"
                          >
                            Earnings
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/market-activity/ipos"
                            itemProp="url"
                          >
                            IPO Calendar
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/market-activity/dividends"
                            itemProp="url"
                          >
                            Dividend Calendar
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/market-activity/spos"
                            itemProp="url"
                          >
                            SPO Calendar
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/market-activity/stock-market-holiday-calendar"
                            itemProp="url"
                          >
                            Holiday Calendar
                          </a>
                        </li>
                      </ul>

                      <span className="primary-nav__header">
                        Analyst Activity
                      </span>

                      <ul
                        className="primary-nav__mega-links"
                        itemScope=""
                        itemType="http://www.schema.org/SiteNavigationElement"
                      >
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/market-activity/analyst-recommendations"
                            itemProp="url"
                          >
                            Analyst Recommendations
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/market-activity/earnings/daily-earnings-surprise"
                            itemProp="url"
                          >
                            Daily Earnings Surprise
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/market-activity/analyst-forecast-change"
                            itemProp="url"
                          >
                            Forecast Changes
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="primary-nav__mega-column" itemProp="name">
                      <span className="primary-nav__header">
                        <a
                          className="primary-nav__header-link"
                          href="https://www.nasdaq.com/market-activity/commodities"
                          itemProp="url"
                        >
                          <span className="primary-nav__header-link-text">
                            Commodities
                          </span>
                          <span
                            className="primary-nav__header-link-caret"
                            aria-hidden="true"
                          ></span>
                        </a>
                      </span>
                      <ul
                        className="primary-nav__mega-links"
                        itemScope=""
                        itemType="http://www.schema.org/SiteNavigationElement"
                      >
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/market-activity/commodities/GCCMX"
                            itemProp="url"
                          >
                            Gold
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/market-activity/commodities/HGCMX"
                            itemProp="url"
                          >
                            Copper
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/market-activity/commodities/CLNMX"
                            itemProp="url"
                          >
                            Crude Oil
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/market-activity/commodities/NGNMX"
                            itemProp="url"
                          >
                            Natural Gas
                          </a>
                        </li>
                      </ul>

                      <span className="primary-nav__header">Nasdaq Data</span>
                      <ul
                        className="primary-nav__mega-links"
                        itemScope=""
                        itemType="http://www.schema.org/SiteNavigationElement"
                      >
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/market-activity/statistical-milestones"
                            itemProp="url"
                          >
                            Statistical Milestones
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/market-activity/total-returns"
                            itemProp="url"
                          >
                            Total Returns
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/market-activity/daily-market-statistics"
                            itemProp="url"
                          >
                            Daily Market Statistics
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/market-activity/most-active"
                            itemProp="url"
                          >
                            Most Active
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="primary-nav__cta" tabIndex="0">
                    <a
                      className="primary-nav__cta-link"
                      href="/market-activity"
                      itemProp="url"
                    >
                      <span className="primary-nav__cta-text">
                        See All Market Activity
                      </span>
                      <span
                        className="primary-nav__cta-arrow"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </div>
                </div>
              </li>
              <li
                className="primary-nav__link "
                itemProp="name"
                onClick="void(0)"
              >
                <a
                  className="primary-nav__anchor"
                  data-mega-menu-enabled="true"
                  href="/news-and-insights"
                  title=""
                  itemProp="url"
                >
                  <span className="primary-nav__anchor-text">
                    News + Insights
                  </span>
                </a>
                <button
                  className="primary-nav__expand"
                  data-enabled="false"
                  aria-label="News + Insights - Click to open sub-navigation"
                >
                  <span
                    className="primary-nav__expand-caret"
                    aria-hidden="true"
                  ></span>
                </button>
                <div
                  className="primary-nav__mega"
                  aria-hidden="true"
                  style={{ height: "598px", left: "486px" }}
                >
                  <div className="primary-nav__close-icon">
                    <span className="primary-nav__close-text">CLOSE</span>
                  </div>
                  <ul
                    className="primary-nav__mega-list"
                    itemScope=""
                    itemType="http://www.schema.org/SiteNavigationElement"
                  >
                    <li className="primary-nav__mega-column" itemProp="name">
                      <ul
                        className="primary-nav__mega-subnav"
                        itemScope=""
                        itemType="http://www.schema.org/SiteNavigationElement"
                      >
                        <li
                          className="primary-nav__mega-subnav-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-subnav-link"
                            href="/news-and-insights"
                            itemProp="url"
                          >
                            News and Insights
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-subnav-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-subnav-link"
                            href="/news-and-insights/markets"
                            itemProp="url"
                          >
                            Markets
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-subnav-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-subnav-link"
                            href="/news-and-insights/company-intel"
                            itemProp="url"
                          >
                            Companies
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-subnav-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-subnav-link"
                            href="https://www.nasdaq.com/news-and-insights/cryptocurrency"
                            itemProp="url"
                          >
                            Cryptocurrency
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-subnav-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-subnav-link"
                            href="/news-and-insights/technology"
                            itemProp="url"
                          >
                            Technology
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-subnav-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-subnav-link"
                            href="/news-and-insights/personal-finance"
                            itemProp="url"
                          >
                            Personal Finance
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-subnav-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-subnav-link"
                            href="https://www.nasdaq.com/news-and-insights/financial-advisors"
                            itemProp="url"
                          >
                            Financial Advisors
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="primary-nav__mega-column" itemProp="name">
                      <span className="primary-nav__header">Topics</span>

                      <ul
                        className="primary-nav__mega-links"
                        itemScope=""
                        itemType="http://www.schema.org/SiteNavigationElement"
                      >
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/news-and-insights/topic/technology/blockchain"
                            itemProp="url"
                          >
                            Blockchain
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/news-and-insights/topic/markets/commodities"
                            itemProp="url"
                          >
                            Commodities
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/news-and-insights/topic/companies/earnings"
                            itemProp="url"
                          >
                            Earnings
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/news-and-insights/governance-center"
                            itemProp="url"
                          >
                            Governance
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/news-and-insights/topic/companies/ipos"
                            itemProp="url"
                          >
                            IPOs
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/news-and-insights/topic/personal-finance/retirement"
                            itemProp="url"
                          >
                            Retirement
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/news-and-insights/topic/markets/stocks"
                            itemProp="url"
                          >
                            Stocks
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="primary-nav__mega-column" itemProp="name">
                      <span className="primary-nav__header">Features</span>

                      <ul
                        className="primary-nav__mega-links"
                        itemScope=""
                        itemType="http://www.schema.org/SiteNavigationElement"
                      >
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/inclusive-entrepreneurship"
                            itemProp="url"
                          >
                            {" "}
                            Inclusive Entrepreneurship
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/world-reimagined"
                            itemProp="url"
                          >
                            World Reimagined
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/smart-investing"
                            itemProp="url"
                          >
                            Smart Investing
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/sponsored/invesco/innovation-realized/splunk"
                            itemProp="url"
                          >
                            Innovation Realized
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/market-makers/subscribe"
                            itemProp="url"
                          >
                            Market Makers by Phil Mackintosh
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/tradetalks"
                            itemProp="url"
                          >
                            TradeTalks
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/videos"
                            itemProp="url"
                          >
                            Nasdaq Watch
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/world-reimagined-podcast"
                            itemProp="url"
                          >
                            World Reimagined Podcast
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <div className="primary-nav__cta" tabIndex="0">
                    <a
                      className="primary-nav__cta-link"
                      href="/news-and-insights"
                      itemProp="url"
                    >
                      <span className="primary-nav__cta-text">
                        See All News + Insights
                      </span>
                      <span
                        className="primary-nav__cta-arrow"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </div>
                </div>
              </li>

              <li
                className="primary-nav__link "
                itemProp="name"
                onClick="void(0)"
              >
                <a
                  className="primary-nav__anchor"
                  data-mega-menu-enabled="true"
                  href="/solutions"
                  title=""
                  itemProp="url"
                >
                  <span className="primary-nav__anchor-text">Solutions</span>
                </a>
                <button
                  className="primary-nav__expand"
                  data-enabled="false"
                  aria-label="Solutions - Click to open sub-navigation"
                >
                  <span
                    className="primary-nav__expand-caret"
                    aria-hidden="true"
                  ></span>
                </button>
                <div
                  className="primary-nav__mega"
                  aria-hidden="true"
                  style={{ height: "598px", left: "486px" }}
                >
                  <div className="primary-nav__close-icon">
                    <span className="primary-nav__close-text">CLOSE</span>
                  </div>
                  <ul
                    className="primary-nav__mega-list"
                    itemScope=""
                    itemType="http://www.schema.org/SiteNavigationElement"
                  >
                    <li className="primary-nav__mega-column" itemProp="name">
                      <span className="primary-nav__header">
                        <a
                          className="primary-nav__header-link"
                          href="/solutions/raise-access-capital"
                          itemProp="url"
                        >
                          <span className="primary-nav__header-link-text">
                            Raise &amp; Access Capital
                          </span>
                          <span
                            className="primary-nav__header-link-caret"
                            aria-hidden="true"
                          ></span>
                        </a>
                      </span>

                      <ul
                        className="primary-nav__mega-links"
                        itemScope=""
                        itemType="http://www.schema.org/SiteNavigationElement"
                      >
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/solutions/list-your-company"
                            itemProp="url"
                          >
                            List with Nasdaq
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/solutions/private-company-solutions"
                            itemProp="url"
                          >
                            Nasdaq Private Market
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/solutions/fund-secondaries"
                            itemProp="url"
                          >
                            Nasdaq Fund Secondaries
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/solutions/investor-relations-intelligence"
                            itemProp="url"
                          >
                            Investor Relations Intelligence{" "}
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/solutions/direct-listings"
                            itemProp="url"
                          >
                            Nasdaq Direct Listings
                          </a>
                        </li>
                      </ul>

                      <span className="primary-nav__header">
                        <a
                          className="primary-nav__header-link"
                          href="/solutions/nasdaq-governance-solutions"
                          itemProp="url"
                        >
                          <span className="primary-nav__header-link-text">
                            Optimize Governance Practices
                          </span>
                          <span
                            className="primary-nav__header-link-caret"
                            aria-hidden="true"
                          ></span>
                        </a>
                      </span>

                      <ul
                        className="primary-nav__mega-links"
                        itemScope=""
                        itemType="http://www.schema.org/SiteNavigationElement"
                      >
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/solutions/boardvantage"
                            itemProp="url"
                          >
                            Board Portal Software
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/solutions/board-evaluations"
                            itemProp="url"
                          >
                            Board Assessments &amp; Evaluations
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/solutions/governance/center-for-board-excellence"
                            itemProp="url"
                          >
                            Nasdaq Center for Board Excellence
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/solutions/sustainability-reporting"
                            itemProp="url"
                          >
                            ESG Reporting/Data Management
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/solutions/corporate-services/COVID19"
                            itemProp="url"
                          >
                            Corporate Services COVID-19 Center
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/solutions/directors-officers-questionnaires"
                            itemProp="url"
                          >
                            Directors’ and Officers’ Questionnaires
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="primary-nav__mega-column" itemProp="name">
                      <span className="primary-nav__header">
                        <a
                          className="primary-nav__header-link"
                          href="/solutions/transform-with-technology"
                          itemProp="url"
                        >
                          <span className="primary-nav__header-link-text">
                            Transform with Technology
                          </span>
                          <span
                            className="primary-nav__header-link-caret"
                            aria-hidden="true"
                          ></span>
                        </a>
                      </span>

                      <ul
                        className="primary-nav__mega-links"
                        itemScope=""
                        itemType="http://www.schema.org/SiteNavigationElement"
                      >
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/solutions/nasdaq-automated-investigator-for-aml"
                            itemProp="url"
                          >
                            AML Technology
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/solutions/solutions-for-market-infrastructure-operators"
                            itemProp="url"
                          >
                            Market Infrastructure Technology
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/solutions/non-traditional-exchanges-new-markets"
                            itemProp="url"
                          >
                            Non-Traditional Exchanges &amp; New Markets
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/solutions/sell-side-technology"
                            itemProp="url"
                          >
                            Sell-Side Technology
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/solutions/buy-side-technology"
                            itemProp="url"
                          >
                            Buy-Side Technology
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/solutions/nasdaq-risk-modelling-for-catastrophes"
                            itemProp="url"
                          >
                            Catastrophe Risk Modelling
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="primary-nav__mega-column" itemProp="name">
                      <span className="primary-nav__header">
                        <a
                          className="primary-nav__header-link"
                          href="/investment-intelligence"
                          itemProp="url"
                        >
                          <span className="primary-nav__header-link-text">
                            Gain Market Intelligence
                          </span>
                          <span
                            className="primary-nav__header-link-caret"
                            aria-hidden="true"
                          ></span>
                        </a>
                      </span>

                      <ul
                        className="primary-nav__mega-links"
                        itemScope=""
                        itemType="http://www.schema.org/SiteNavigationElement"
                      >
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/nasdaq-data-link"
                            itemProp="url"
                          >
                            Nasdaq Data Link
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/solutions/nasdaq-investment-data-and-analytics"
                            itemProp="url"
                          >
                            Investment Data &amp; Analytics
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/solutions/nasdaq-market-data-feeds"
                            itemProp="url"
                          >
                            Market Data &amp; Feeds
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/GlobalIndexes"
                            itemProp="url"
                          >
                            Nasdaq Global Indexes
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/solutions/institutional-distribution-intelligence"
                            itemProp="url"
                          >
                            Institutional Distribution Intelligence
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/solutions/nasdaq-asset-owner-solutions"
                            itemProp="url"
                          >
                            Nasdaq Asset Owner Solutions
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/solutions/private-fund-solutions"
                            itemProp="url"
                          >
                            Nasdaq Private Fund Solutions
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="primary-nav__mega-column" itemProp="name">
                      <span className="primary-nav__header">
                        <a
                          className="primary-nav__header-link"
                          href="/solutions/trade-global-markets"
                          itemProp="url"
                        >
                          <span className="primary-nav__header-link-text">
                            Trade Global Markets
                          </span>
                          <span
                            className="primary-nav__header-link-caret"
                            aria-hidden="true"
                          ></span>
                        </a>
                      </span>

                      <ul
                        className="primary-nav__mega-links"
                        itemScope=""
                        itemType="http://www.schema.org/SiteNavigationElement"
                      >
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/solutions/equities"
                            itemProp="url"
                          >
                            Equities
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/solutions/global-equity-derivatives"
                            itemProp="url"
                          >
                            Equity Derivatives
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/solutions/nasdaq-exchange-traded-products-etps"
                            itemProp="url"
                          >
                            ETFs &amp; ETPs
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/solutions/nasdaq-fixed-income"
                            itemProp="url"
                          >
                            Fixed Income
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/solutions/european-commodities"
                            itemProp="url"
                          >
                            Commodities
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/solutions/global-trading-services-solutions"
                            itemProp="url"
                          >
                            Connectivity
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/solutions/post-trade-services-solutions"
                            itemProp="url"
                          >
                            Post Trade Services
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/solutions/nasdaq-clearing-offering"
                            itemProp="url"
                          >
                            Clearing
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/solutions/exchange-oversight"
                            itemProp="url"
                          >
                            Exchange Oversight{" "}
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/solutions/nasdaq-sustainable-bond-network-investors"
                            itemProp="url"
                          >
                            Sustainable Bonds
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <div className="primary-nav__cta" tabIndex="0">
                    <a
                      className="primary-nav__cta-link"
                      href="/solutions"
                      itemProp="url"
                    >
                      <span className="primary-nav__cta-text">
                        See All Solutions
                      </span>
                      <span
                        className="primary-nav__cta-arrow"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </div>
                </div>
              </li>

              <li
                className="primary-nav__link primary-nav__link--active"
                itemProp="name"
                onClick="void(0)"
              >
                <a
                  className="primary-nav__anchor"
                  data-mega-menu-enabled="true"
                  href="/about"
                  title=""
                  itemProp="url"
                >
                  <span className="primary-nav__anchor-text">About</span>
                </a>
                <button
                  className="primary-nav__expand"
                  data-enabled="false"
                  aria-label="About - Click to open sub-navigation"
                >
                  <span
                    className="primary-nav__expand-caret"
                    aria-hidden="true"
                  ></span>
                </button>
                <div
                  className="primary-nav__mega"
                  aria-hidden="true"
                  style={{ height: "598px", left: "486px" }}
                >
                  <div className="primary-nav__close-icon">
                    <span className="primary-nav__close-text">CLOSE</span>
                  </div>
                  <ul
                    className="primary-nav__mega-list"
                    itemScope=""
                    itemType="http://www.schema.org/SiteNavigationElement"
                  >
                    <li className="primary-nav__mega-column" itemProp="name">
                      <ul
                        className="primary-nav__mega-subnav"
                        itemScope=""
                        itemType="http://www.schema.org/SiteNavigationElement"
                      >
                        <li
                          className="primary-nav__mega-subnav-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-subnav-link"
                            href="/about/our-people"
                            itemProp="url"
                          >
                            Our People
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-subnav-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-subnav-link"
                            href="/about/board-of-directors"
                            itemProp="url"
                          >
                            Board of Directors
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-subnav-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-subnav-link"
                            href="/about/careers"
                            itemProp="url"
                          >
                            Careers
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-subnav-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-subnav-link"
                            href="/about/press-center"
                            itemProp="url"
                          >
                            Press Center
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-subnav-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-subnav-link"
                            href="/contact-us"
                            itemProp="url"
                          >
                            Contact
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="primary-nav__mega-column" itemProp="name">
                      <span className="primary-nav__header">Quick Links</span>

                      <ul
                        className="primary-nav__mega-links"
                        itemScope=""
                        itemType="http://www.schema.org/SiteNavigationElement"
                      >
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/diversity-inclusion-belonging"
                            itemProp="url"
                          >
                            Diversity, Inclusion and Belonging
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/marketsite"
                            itemProp="url"
                          >
                            Nasdaq Marketsite
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="http://ir.nasdaq.com/"
                            itemProp="url"
                          >
                            Investor Relations
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/ESG-Guide"
                            itemProp="url"
                          >
                            ESG Reporting Guide
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/European-Markets"
                            itemProp="url"
                          >
                            European Markets
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/nasdaq-nordic-foundation"
                            itemProp="url"
                          >
                            Nasdaq Nordic Foundation
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/authors/marketinsite"
                            itemProp="url"
                          >
                            Nasdaq Thought Leadership
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="primary-nav__mega-column" itemProp="name">
                      <span className="primary-nav__header">
                        Nasdaq Initiatives
                      </span>
                      <ul
                        className="primary-nav__mega-links"
                        itemScope=""
                        itemType="http://www.schema.org/SiteNavigationElement"
                      >
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/Purpose"
                            itemProp="url"
                          >
                            The Purpose Initiative
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/TotalMarkets"
                            itemProp="url"
                          >
                            TotalMarkets
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/public-policy"
                            itemProp="url"
                          >
                            Public Policy Advocacy
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="https://www.nasdaq.com/esg"
                            itemProp="url"
                          >
                            ESG at Nasdaq
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/nasdaq-entrepreneurial-center"
                            itemProp="url"
                          >
                            Nasdaq Entrepreneurial Center
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/nasdaq-ventures"
                            itemProp="url"
                          >
                            Nasdaq Ventures
                          </a>
                        </li>
                        <li
                          className="primary-nav__mega-links-item"
                          itemProp="name"
                        >
                          <a
                            className="primary-nav__mega-links-link"
                            href="/Nasdaq-and-the-Cloud"
                            itemProp="url"
                          >
                            Nasdaq and the Cloud
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <div className="primary-nav__cta" tabIndex="0">
                    <a
                      className="primary-nav__cta-link"
                      href="/about"
                      itemProp="url"
                    >
                      <span className="primary-nav__cta-text">
                        See All About
                      </span>
                      <span
                        className="primary-nav__cta-arrow"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </div>
                </div>
              </li>

              <li className="primary-nav__link" data-type="login">
                <a href="/user/login" className="primary-nav__mobile-login">
                  Log in
                </a>
              </li>
            </ul>

            <div className="primary-nav__right">
              <a
                href="/user/login"
                className="primary-nav__account"
                title="Log in"
              ></a>
              <button
                className="primary-nav__search"
                aria-label="Toggle search overlay"
                data-modal-id="search-overlay-modal"
              ></button>
              <input
                type="text"
                className="primary-nav__search-text"
                aria-label="Toggle search overlay box"
                data-modal-id="search-overlay-modal"
                placeholder="Search"
              />
            </div>
          </nav>
        </header>
        <div className="sub-nav" role="navigation">
          <div className="sub-nav__scroll">
            <ul className="sub-nav__links">
              <li className="sub-nav__link">
                <a href="/about/our-people">Our People</a>
              </li>
              <li className="sub-nav__link sub-nav__link--highlighted">
                <a href="/about/board-of-directors">Board of Directors</a>
              </li>
              <li className="sub-nav__link">
                <a href="/about/careers">Careers</a>
              </li>
              <li className="sub-nav__link">
                <a href="/about/press-center">Press Center</a>
              </li>
              <li className="sub-nav__link">
                <a href="/contact-us">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
