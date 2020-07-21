import React, { ReactElement } from 'react'
import * as styles from 'public/static/styles/scss/index.scss'
import ReactSwipe from 'react-swipe'
import { psString } from '../../../utils/localization'

export default function(): ReactElement {
  let arr = [1, 2, 3]

  return (
    <div className={styles.mis_swipe}>
      <div className={styles.mis_container_mobile}>
        <ReactSwipe className="carousel" swipeOptions={{ continuous: true }}>
          {arr.map((value, index) => (
            <div className={styles['mis_card_' + value]} key={index}>
              <dl>
                <dt>
                  {psString('main-insight-slider-' + Number(value + 3 * index))}
                </dt>
                <dd>
                  {psString(
                    'main-insight-slider-' + Number(value + 1 + 3 * index)
                  )}
                  <br />
                  {psString(
                    'main-insight-slider-' + Number(value + 2 + 3 * index)
                  )}
                  <br />
                  {psString(
                    'main-insight-slider-' + Number(value + 3 + 3 * index)
                  )}
                </dd>
              </dl>
            </div>
          ))}
        </ReactSwipe>
      </div>
      <div className={styles.mis_container}>
        {arr.map((value, index) => (
          <div className={styles['mis_card_' + value]} key={index}>
            <dl>
              <dt>
                {psString('main-insight-slider-' + Number(value + 3 * index))}
              </dt>
              <dd>
                {psString(
                  'main-insight-slider-' + Number(value + 1 + 3 * index)
                )}
                <br />
                {psString(
                  'main-insight-slider-' + Number(value + 2 + 3 * index)
                )}
                <br />
                {psString(
                  'main-insight-slider-' + Number(value + 3 + 3 * index)
                )}
              </dd>
            </dl>
          </div>
        ))}
      </div>
    </div>
  )
}
