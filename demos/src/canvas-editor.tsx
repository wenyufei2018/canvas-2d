import React, { useEffect, useRef } from "react"
import { CanvasEditor, JSON_DATA } from "./editor"
import { wrapStaticUrl } from "../shared"

const data: JSON_DATA = {
  width: 600,
  height: 600,
  assets: [],
  layers: [
    {
      type: "shape",
      d_path: {
        type: "rect",
        rx: 5,
        ry: 10,
        width: 100,
        height: 80
      },
      origin: {
        x: 300,
        y: 10
      },
      fill: "yellow",
      stroke: "red"
    },
    {
      type: "shape",
      d_path: {
        type: "ellipse",
        radiusX: 50,
        radiusY: 100
      },
      origin: {
        x: 50,
        y: 300
      },
      fill: "red"
    },
    {
      type: "paragraph",
      text: "123",
      font: {},
      origin: {
        x: 300,
        y: 300
      },
      fill: "black",
      width: 200,
      height: 200
    },
    {
      type: "paragraph",
      text: "456",
      font: {},
      origin: {
        x: 100,
        y: 400
      },
      fill: "black",
      width: 200,
      height: 200
    },
    {
      type: "image",
      d_asset: {
        type: "asset_image",
        data: wrapStaticUrl("images/logo.png")
      },
      width: 200,
      height: 200
    }
  ],
  dpr: 1
}

interface ReactProps {}

export default function(props: ReactProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const editor = new CanvasEditor({
      container: containerRef.current!,
      ...data
    })
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        border: "1px solid red"
      }}
    />
  )
}
