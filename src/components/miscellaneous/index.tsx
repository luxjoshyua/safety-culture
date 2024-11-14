"use client"
import { PropsWithChildren } from "react"
import styles from "./styles.module.scss"
import Link from "next/link"

interface ButtonProps {
  icon?: React.ReactNode
  link?: string
  bgColour?: string
  width?: string
  height?: string
  text: string
  textColour?: string
  border?: string
}

export const Button = ({
  icon,
  link,
  bgColour,
  width,
  height,
  text,
  textColour,
  border,
}: PropsWithChildren<ButtonProps>) => {
  const buttonStyle = {
    backgroundColor: bgColour || "white",
    width: width || "auto",
    height: height || "auto",
    color: textColour || "black",
    border: border || "none",
  }

  return (
    <Link href={link || "#"} className={styles.buttonMain} style={buttonStyle}>
      {icon && <span className={styles.buttonIconOuter}>{icon}</span>}
      <span className={styles.buttonText}>{text}</span>
    </Link>
  )
}
