'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function CustomImage({ item }: any) {
    const [loading, setLoading] = useState(true)

    return <Image src={item.img} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' alt='preview' className={loading ? 'blur-2xl scale-125 overflow-hidden transition-all rounded-[15px]' : 'blur-0 scale-100 overflow-hidden transition-all rounded-[15px]'} fill onLoad={() => setLoading(false)} />
}