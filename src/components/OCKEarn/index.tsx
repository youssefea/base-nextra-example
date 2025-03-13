'use client'

import { Earn } from '@coinbase/onchainkit/earn'
import React from 'react'

export function OCKEarn() {
  return (
    <div className="onchain-kit-scope">
      <Earn vaultAddress="0x7BfA7C4f149E7415b73bdeDfe609237e29CBF34A" />
    </div>
  )
}
