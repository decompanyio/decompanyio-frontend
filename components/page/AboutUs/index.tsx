import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import { psString } from '../../../utils/localization'
import Link from 'next/link'
import commonView from '../../../common/commonView'
import { APP_CONFIG } from '../../../app.config'

export default function AboutUs(): ReactElement {
  return (
    <div className={styles.au_container}>
      <section className={styles.au_sectionWrapper_1}>
        <div className={styles.au_sectionDummy_1} />

        <div className={styles.au_section_1}>
          <div className={styles.au_mainTitle}>
            {psString('about-main-subj')}
          </div>
          <div className={styles.au_mainContent}>
            {psString('about-main-explain')}
          </div>
          <div className={styles.au_textAlign}>
            <Link href="/f">
              <a rel="nofollow" aria-label="FAQ">
                <div
                  className={styles.au_learnMoreBtn}
                  onClick={() => commonView.scrollTop()}
                  title="Link to FAQ"
                >
                  {psString('main-banner-btn-4')}
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.au_mainImg}>
          <img
            src={APP_CONFIG.domain().static + '/image/common/about-main.png'}
            alt="about us main"
          />
        </div>
      </section>

      <section className={styles.au_sectionWrapper_2}>
        <div className={styles.au_subTitle}>
          {psString('about-sectionFirst-section-subj')}
        </div>
        <div className={styles.au_subContent}>
          <div> {psString('about-sectionFirst-section-explain')} </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/3sVNpNd4Z6A"
              title="About Decompany"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className={styles.au_sectionWrapper_3}>
        <div className={styles.au_sectionDummy_3} />
        <div className={styles.au_subTitle}>{psString('about-service')}</div>
        <div className={styles.au_subContent}>
          {psString('about-sectionSecond-section-explain')}
          <div className={styles.au_section_3} />
        </div>
      </section>

      <section className={styles.au_sectionWrapper_4}>
        <div className={styles.au_subTitle}>{psString('about-vision')}</div>
        <div className={styles.au_subContent}>
          {psString('about-sectionThird-section-explain')}
        </div>

        <div className={styles.au_section_4}>
          <div className={styles.au_visionWrapper}>
            <img
              src={
                APP_CONFIG.domain().static +
                '/image/common/about-vision-img-01.svg'
              }
              alt="Value of knowledge"
            />
            <div className={styles.au_visionTitle}>
              {psString('about-sectionThird-section-chap-subj-1')}
            </div>
            <div className={styles.au_visionContent}>
              {psString('about-sectionThird-section-chap-explain-1')}
            </div>
          </div>
          <div className={styles.au_visionWrapper}>
            <img
              src={
                APP_CONFIG.domain().static +
                '/image/common/about-vision-img-02.svg'
              }
              alt="No transaction fees"
            />
            <div className={styles.au_visionTitle}>
              {psString('about-sectionThird-section-chap-subj-2')}
            </div>
            <div className={styles.au_visionContent}>
              {psString('about-sectionThird-section-chap-explain-2')}
            </div>
          </div>
          <div className={styles.au_visionWrapper}>
            <img
              src={
                APP_CONFIG.domain().static +
                '/image/common/about-vision-img-03.svg'
              }
              alt="Content shared"
            />
            <div className={styles.au_visionTitle}>
              {psString('about-sectionThird-section-chap-subj-3')}
            </div>
            <div className={styles.au_visionContent}>
              {psString('about-sectionThird-section-chap-explain-3')}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.au_sectionWrapper_5}>
        <div className={styles.au_sectionDummy_5} />
        <div className={styles.au_subTitle}> {psString('about-ps-team')}</div>

        <div className={styles.au_subContent_5}>
          <div className={styles.au_teamWrapper}>
            <div className={styles.au_teamProfileWrapper}>
              <div className={styles.au_linkedin}>
                <a
                  href="https://www.linkedin.com/in/dalsam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linkedin"
                >
                  <img
                    src={
                      APP_CONFIG.domain().static +
                      '/image/common/about-linkedin.svg'
                    }
                    alt="Linkedin icon"
                  />
                </a>
              </div>

              <div className={styles.au_teamNameWrapper}>
                <div className={styles.au_teamName}>Miles H. Lee</div>
                <div className={styles.au_teamWPosition}>
                  Chief Executive Officer
                </div>
              </div>
            </div>

            <div className={styles.au_teamInfo}>
              Current CEO of Decompany <br />
              Current CEO of INFRAWARE(KOSDAQ Listed) <br />
              Former CFO of SELVAS Healthcare(KOSDAQ Listed) <br />
              Strategy Planning Manager of INFRAWARE <br />
              Lead Engineer of Mobile Browser Development <br />
              Manager of Browser Sales Team <br />
              Computer Science, Yonsei University
            </div>
          </div>

          <div className={styles.au_teamWrapper}>
            <div className={styles.au_teamProfileWrapper}>
              <div className={styles.au_linkedin}>
                <a
                  className="team-icon"
                  href="https://www.linkedin.com/in/eddie-kwak/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linkedin"
                >
                  <img
                    src={
                      APP_CONFIG.domain().static +
                      '/image/common/about-linkedin.svg'
                    }
                    alt="Linkedin icon"
                  />
                </a>
              </div>

              <div className={styles.au_teamNameWrapper}>
                <div className={styles.au_teamName}>Eddie M. Kwak</div>
                <div className={styles.au_teamWPosition}>
                  Chief Strategy officer
                </div>
              </div>
            </div>

            <div className={styles.au_teamInfo}>
              Current CSO of Decompany <br />
              Current Chairman of SELVAS Group <br />
              : Consists of 3 KOSDAQ, 1 KNONEX Listed Company <br />
              Founder of INFRAWARE(KOSDAQ Listed) <br />
              MA, Computer Science, Hankuk University of Foreign Studies
            </div>
          </div>
        </div>

        <div className={styles.au_subContent_5}>
          <div className={styles.au_teamWrapper}>
            <div className={styles.au_teamProfileWrapper}>
              <div className={styles.au_linkedin}>
                <a
                  className="team-icon"
                  href="https://www.linkedin.com/in/chris-lee-sw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linkedin"
                >
                  <img
                    src={
                      APP_CONFIG.domain().static +
                      '/image/common/about-linkedin.svg'
                    }
                    alt="Linkedin icon"
                  />
                </a>
              </div>

              <div className={styles.au_teamNameWrapper}>
                <div className={styles.au_teamName}>Chris K. Lee</div>
                <div className={styles.au_teamWPosition}>
                  Chief Technology Officer
                </div>
              </div>
            </div>

            <div className={styles.au_teamInfo}>
              Current CTO of Decompany <br />
              Big Data, Cloud, Middleware Engineering & internet service
              application architecting <br />
              Material Science & Engineering, Korea University
            </div>
          </div>

          <div className={styles.au_teamWrapper}>
            <div className={styles.au_teamProfileWrapper}>
              <div className={styles.au_linkedin}>
                <a
                  className="team-icon"
                  href="https://www.linkedin.com/in/richard-yoon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linkedin"
                >
                  <img
                    src={
                      APP_CONFIG.domain().static +
                      '/image/common/about-linkedin.svg'
                    }
                    alt="Linkedin icon"
                  />
                </a>
              </div>

              <div className={styles.au_teamNameWrapper}>
                <div className={styles.au_teamName}>Richard S. Yoon</div>
                <div className={styles.au_teamWPosition}>
                  Chief Growth Officer
                </div>
              </div>
            </div>

            <div className={styles.au_teamInfo}>
              Current CGO of Decompany <br />
              Current Vice President of SELVAS Group <br />
              Former Softbank Finance group <br />
              Former Merrill Lynch International <br />
              Vocal Department, Seoul National University
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
