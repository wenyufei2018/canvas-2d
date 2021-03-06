import { assertNever } from "@canvas-2d/shared"

import { D_ELEMENT } from "../type"
import { Element } from "./_element"
import { Shape } from "./shape"
import { Text, Paragraph } from "./text"
import { Image } from "./image"

export function genElement(layer: D_ELEMENT): Element {
  switch (layer.type) {
    case "shape":
      return Shape.createObj(Shape, layer)
    case "image":
      return Image.createObj(Image, layer)
    case "text":
      return Text.createObj(Text, layer)
    case "paragraph":
      return Paragraph.createObj(Paragraph, layer)
    default:
      assertNever(layer)
  }
}

export function assertElement(layer: D_ELEMENT) {
  switch (layer.type) {
    case "shape":
      return Shape.assertJsonTrue(layer)
    case "image":
      return Image.assertJsonTrue(layer)
    case "text":
      return Text.assertJsonTrue(layer)
    case "paragraph":
      return Paragraph.assertJsonTrue(layer)
    default:
      assertNever(layer)
  }
}

export * from "./shape"
export * from "./image"
export * from "./text"
export * from "./_element"
