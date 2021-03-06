import React, { useEffect, useRef, useState } from "react"
import { CanvasInput } from "@canvas-2d/canvas-input"
import { Paragraph } from "@canvas-2d/core"

const p = new Paragraph()

p.fromJSON({
  text: "123",
  font: {},
  origin: {
    x: 10,
    y: 10
  },
  fill: "black",
  width: 200,
  height: 200
})

export default function CanvasJson() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    new CanvasInput({ canvas: canvasRef.current!, width: 600, height: 600, paragraph: p })
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "600px",
        height: "600px",
        border: "1px solid red"
      }}
    />
  )
}
