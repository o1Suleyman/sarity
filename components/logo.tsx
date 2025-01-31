"use client";
import { useEffect, useState } from 'react'
import styles from './logo.module.css'
import Image from 'next/image'
import { useTheme } from 'next-themes'
 
const Logo = () => {
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])
    const { resolvedTheme } = useTheme()
    if (!mounted) return (
    <>
      <Image src="/dark.png" className={styles.imgLight} width={150} height={66} alt="Logo" />
      <Image src="/light.png" className={styles.imgDark} width={150} height={66} alt="Logo" />
    </>
    )
  return (
    <>
        {resolvedTheme === 'light' ? (
            <Image src="/dark.png" width={150} height={66} alt="Logo" />
        ) : (
            <Image src="/light.png" width={150} height={66} alt="Logo" />
        )}
    </>
  )
}
export default Logo