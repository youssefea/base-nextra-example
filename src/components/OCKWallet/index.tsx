'use client'

import { WalletDefault } from '@coinbase/onchainkit/wallet'
import React from 'react'

export function OCKWallet() {
  return (
    <div className="onchain-kit-scope">
      <WalletDefault />
    </div>
  )
}
