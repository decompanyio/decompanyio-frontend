import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import ReactSwipe from 'react-swipe'
import { psGetLang, psString } from '../../../../utils/localization'
import { APP_CONFIG } from '../../../../app.config'

export default function InsihtSlider(): ReactElement {
  return (
    <div className={styles.mis_swipe}>
      <div className={styles.mis_container_mobile}>
        <ReactSwipe className="carousel" swipeOptions={{ continuous: true }}>
          <div className={styles.mis_cardWrapper}>
            <div className={styles.mis_cardVertical}>
              <div className={styles.mis_rewardContents}>
                <div>Reward</div>
                <div>{psString('main-insight-slider-8')}</div>
                <img
                  src={
                    APP_CONFIG.domain().static +
                    '/image/main/insight_reward.png'
                  }
                  alt="reward kakaotalk"
                />
              </div>
            </div>
          </div>
          <div className={styles.mis_cardWrapper}>
            <div className={styles.mis_card}>
              <div className={styles.mis_uploadContents}>
                <div>upload</div>
                <div>
                  {psString('main-insight-slider-1')}
                  <br />
                  <br />
                  {psString('main-insight-slider-2')}
                  <br />
                  <br />
                  {psString('main-insight-slider-3')}
                </div>
              </div>
              <div className={styles.mis_imageWrapper}>
                <div className={styles.mis_uploadImage} />
              </div>
            </div>
          </div>
          <div className={styles.mis_cardWrapper}>
            <div className={styles.mis_card}>
              <div className={styles.mis_openLibraryContents}>
                <div>open library</div>
                <div>
                  {psString('main-insight-slider-4')}
                  <div>
                    {psString('main-insight-slider-5')}
                    <br />
                    {psString('main-insight-slider-5-b')}
                    <br />
                    <br />
                    {psString('main-insight-slider-6')}
                    <br />
                    <br />
                    {psString('main-insight-slider-7')}
                  </div>
                </div>
              </div>
              <div className={styles.mis_imageWrapper}>
                <div className={styles.mis_openLibraryImage} />
              </div>
            </div>
          </div>
        </ReactSwipe>
      </div>
      <div className={styles.mis_container}>
        <div className={styles.mis_cardWrapper}>
          <div className={styles.mis_card}>
            <div className={styles.mis_imageWrapper}>
              <div className={styles.mis_uploadImage} />
            </div>
            <div className={styles.mis_uploadContents}>
              <div>upload</div>
              <div>
                {psString('main-insight-slider-1')}
                <br />
                <br />
                {psString('main-insight-slider-2')}
                <br />
                <br />
                {psString('main-insight-slider-3')}
              </div>
            </div>
          </div>
          <div className={styles.mis_card}>
            <div className={styles.mis_imageWrapper}>
              <div className={styles.mis_openLibraryImage} />
            </div>
            <div className={styles.mis_openLibraryContents}>
              <div>open library</div>
              <div>
                {psString('main-insight-slider-4')}
                <div>
                  {psString('main-insight-slider-5')}
                  {psString('main-insight-slider-5-b')}
                  <br />
                  <br />
                  {psString('main-insight-slider-6')}
                  <br />
                  <br />
                  {psString('main-insight-slider-7')}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mis_cardWrapper}>
          <div className={styles.mis_cardVertical}>
            <div className={styles.mis_rewardContents}>
              <div>Reward</div>
              <div>{psString('main-insight-slider-8')}</div>
              <img
                src={`${APP_CONFIG.domain().static}/image/main/insight_reward${
                  psGetLang() === 'EN' ? '_en' : ''
                }.png`}
                alt="reward kakaotalk"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
