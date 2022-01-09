import { Frame } from "../frame"
import { D_PATH_ARC } from "../type"

import { Path } from "./_path"

export class Arc extends Path implements D_PATH_ARC {
  /**
   * Type of an object
   */
  public readonly type = "arc"

  ATTRIBUTE_NAMES: (keyof D_PATH_ARC)[] = [
    "x",
    "y",
    "radius",
    "startAngle",
    "endAngle",
    "anticlockwise"
  ]

  x?: number

  y?: number

  radius!: number

  startAngle?: number

  endAngle?: number

  anticlockwise?: boolean

  genPath(ctx: CanvasRenderingContext2D): void {
    let { x = 0, y = 0, radius, startAngle, endAngle, anticlockwise } = this
    ctx.beginPath()
    startAngle = startAngle ? startAngle : 0
    endAngle = endAngle ? endAngle : 2 * Math.PI
    x = x + this.origin.x
    y = y + this.origin.y
    ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)
    this.path_Frame = new Frame(x - radius, y - radius, x + radius, y + radius)
    ctx.closePath()
  }
}
