'use client'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url?: string
      }
    }
  }
}

import React from 'react'
import Script from 'next/script'

export default function NightstandViewer3D() {
  return (
    <>
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js"
        strategy="afterInteractive"
      />
      <div style={{ width: '100%', height: '480px' }}>
        <spline-viewer
          url="https://prod.spline.design/YWqhiTLAqhC7g6lm/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </>
  )
}