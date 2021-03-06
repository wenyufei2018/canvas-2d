import { Point, Rotate as RotateType, Box, assertJsonType } from "@canvas-2d/shared"

import { Attribute } from "./_attr"
import { D_ROTATE, OmitType } from "../type"

export class Rotate extends Attribute implements D_ROTATE, RotateType {
  public type: string = "attr_rotate"

  public ATTRIBUTE_NAMES: (keyof D_ROTATE)[] = ["angle"]

  angle: number = 0

  get angleCenter(): Point {
    if (this.elementBox) {
      return this.elementBox.centerPoint
    }
    return Point.Zero()
  }

  elementBox?: Box

  // 一个元素，只能有一次变换
  takeEffect(ctx: CanvasRenderingContext2D): void {
    const { angle = 0, angleCenter } = this
    const { x, y } = angleCenter

    if (angle) {
      ctx.translate(x, y)
      ctx.rotate(angle)
      ctx.translate(-x, -y)
    }
  }

  rotatePoint(p: Point) {
    const { angleCenter, angle } = this
    if (angle) {
      p = p.translatePoint(-angleCenter.x, -angleCenter.y)
      p = p.rotatePointOnZero(-angle)
      p = p.translatePoint(angleCenter.x, angleCenter.y)
    }
    return p
  }

  static assertJsonTrue(json?: OmitType<D_ROTATE>) {
    if (json === undefined) return
    super.assertJsonTrue(json)
    const { angle } = json
    assertJsonType(angle, "number")
  }

  fromJSON(json: OmitType<D_ROTATE>): void {
    super.fromJSON(json)
  }
}
