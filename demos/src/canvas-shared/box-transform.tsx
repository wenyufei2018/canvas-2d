import React, { useEffect, useRef } from "react"
import { CanvasBackGround, Box, RotateImp, Rotate } from "@canvas-2d/shared"

import { CanvasTransform, BoxElement } from "../transform"

class Element implements BoxElement {
  rotate: Rotate = new RotateImp()
  elementBox: Box = new Box(0, 0, 100, 200)
  updateElementBox = (box: Partial<Box>) => {
    const { boxX, boxY, boxWidth, boxHeight } = box
    const { elementBox } = this
    boxX && (elementBox.boxX = boxX)
    boxY && (elementBox.boxY = boxY)
    boxWidth && (elementBox.boxWidth = boxWidth)
    boxHeight && (elementBox.boxHeight = boxHeight)
  }
  render = (ctx: CanvasRenderingContext2D) => {
    const { elementBox, rotate } = this
    rotate.takeEffect(ctx)
    elementBox.render(ctx, { fill: "yellow", stroke: "red" })
  }
}

export function BoxTransform() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasBgRef = useRef<HTMLCanvasElement>(null)
  const eleRef = useRef<Element | null>(null)

  useEffect(() => {
    eleRef.current = new Element()
    new CanvasTransform({
      canvas: canvasRef.current!,
      width: 600,
      height: 600,
      boxElement: eleRef.current!
    })
    new CanvasBackGround({
      canvas: canvasBgRef.current!,
      width: 600,
      height: 600,
      coordInterval: 20,
      backgroundColor: "white"
    })
  }, [])

  return (
    <>
      <canvas
        ref={canvasBgRef}
        style={{
          width: "600px",
          height: "600px",
          border: "1px solid red",
          position: "absolute"
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          width: "600px",
          height: "600px",
          border: "1px solid red",
          position: "absolute"
        }}
      />
    </>
  )
}