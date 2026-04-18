'use client'

import { useEffect, useRef, useState } from 'react'
import { materials } from '@/data/products'

const materialImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCidgRuY3SJrVrjN5AmVQtQbIWSMPobOtmoK-S02Biogp7bEbmh8g3Sv-CAwLabK4F2aQNpjCCKlRir0HK3rxdK6saNafiy4fQUnxNRW4MaMwpN5AzeN-W4v833AsB8kJgAVXqgWG77JP3xxDLj3TpY1TUhrdJMNUTUF-Aqhaw1LT_M3vjE39V-tMh37J2b_sm7uKC3BioVINs65rasT9QjeV_7CiTZd1pBi0xMFIL4LiZPo8iYbSefDxGsuizPsL9xVxaVaCwO',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBVKZbqR14oWuL5dHXuePbjqY95bqWaoW8KbXb7kAbV-8-fOrAtO25c43-Ze6CnYOUUQqTQlDbIVugRRsnY72cS6aX_FtbiVCZ0ATwhzeByZ6by7SAdo3Me4amDIiA4s0KZ2sTn8N1DgkeKuDLN1GXgyPpVVCHsZBUekMyVVjAz1FepDeIjwWKesYGyrox3q03YIrvq7mfMPObVkhVyEiTttQF2Y-SkdTdHyNrOjIV6JRW0JFoPcUQQFbC-Okew6TzIT4U-y9_m',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCHoX0SaLwsAxqFcRni1_uae2VEG2fERFZoJBgXvwf27W-nCmyolmMhkvA0dV1YHLZvHlmW2QjkRiDNIrv1XlqpDdZD5M4V6OkTJqhFd8UqCMxUHwjc-6kOYlTfjj-BNfwrND4bYeOQZeKwqV1dB1ZN00fSNQId4SVpZ0rG_EdSDiT5NXmnauPaTrGLGbna7cn1kQ_QMMZ47gF1ZREdKf3q0Gi8-2lhBf1NLpilk7BF7MEcM0-yoAAEY37cyOiL_4L7w6lx3XPY',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA998zyToXo5tDkbKNm4sx-MM6DDE18YZJT-PhBS2mgOaFVDNDI26y8zACUv4EwIKvqDLGRqT0DzE3cB80ck998So1aXfnFqJSr24t3Z0D9vOVburl3jcDPKf1uMj_qqEzC4k5UQzw_o6gJfY83-0Cbcuh93uCiler6EQ7GvFbUax2WXuNOxfsvAhh7-xp7v3Adak6b5zJYx4XdXrnsSjIrNLfq4XCXkMLfs-bFb1vR2QmapDx6Vjznp7pKx8AYPNqP1TChcdg2',
]

export default function MaterialsSection() {
  const [selected, setSelected] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="materiales" className="py-28 bg-[#efeeeb]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div ref={ref} className="animate-on-scroll mb-16">
          <span className="text-[#715a3e] font-bold text-xs uppercase tracking-widest block mb-4">
            Catálogo de Materiales
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#1b1c1a] leading-none">
            La Nobleza <br />
            <span className="text-[#535353]">del Material</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image display */}
          <div className="aspect-[4/3] bg-[#f5f3f0] rounded-sm overflow-hidden relative">
            {materialImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={materials[i]?.name}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                  selected === i ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              />
            ))}
          </div>

          {/* Material selector */}
          <div className="space-y-2">
            {materials.map((mat, i) => (
              <button
                key={mat.name}
                onClick={() => setSelected(i)}
                className={`w-full text-left p-6 rounded-sm transition-all duration-300 ${
                  selected === i
                    ? 'bg-[#ffffff] shadow-[0_4px_40px_rgba(27,28,26,0.06)]'
                    : 'bg-transparent hover:bg-[#f5f3f0]'
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3
                      className={`text-xl font-bold tracking-tight transition-colors ${
                        selected === i ? 'text-[#715a3e]' : 'text-[#1b1c1a]'
                      }`}
                    >
                      {mat.name}
                    </h3>
                    <p className="text-[#4e453e] text-sm mt-1">{mat.description}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm ${
                        selected === i
                          ? 'bg-[#715a3e] text-white'
                          : 'bg-[#eae8e5] text-[#4e453e]'
                      }`}
                    >
                      {mat.tone}
                    </span>
                    <span
                      className={`material-symbols-outlined text-lg transition-transform ${
                        selected === i ? 'text-[#715a3e] translate-x-1' : 'text-[#80756d]'
                      }`}
                    >
                      arrow_forward
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
