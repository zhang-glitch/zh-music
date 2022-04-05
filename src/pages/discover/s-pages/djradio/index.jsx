import React, { memo } from 'react'

import { DJRadioWrapper } from './style.js'
import RadioCategory from './s-cpn/radio-category'
import RadioRecommend from './s-cpn/radio-recommend'
import RadioRank from './s-cpn/radio-rank'

const DJRadio = memo(() => {
  return (
    <DJRadioWrapper className="wrap-v2">
      <RadioCategory />
      <RadioRecommend />
      <RadioRank />
    </DJRadioWrapper>
  )
})

export default DJRadio
