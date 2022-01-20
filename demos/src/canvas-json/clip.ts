import { JSON_DATA } from "@canvas-2d/canvas-json"
import { wrapStaticUrl } from "../../shared"

export const clipJson: JSON_DATA = {
  assets: [
    {
      type: "asset_image",
      data: wrapStaticUrl("images/logo.png"),
      id: 0
    }
  ],
  layers: [
    {
      type: "image",
      origin: {
        x: 100,
        y: 100
      },
      width: 200,
      height: 200,
      fill: "yellow",
      stroke: "red",
      asset: 0,
      clip: {
        d_path: {
          type: "arc",
          x: 100,
          y: 100,
          radius: 100
        }
      }
    }
  ],
  dpr: 2,
  height: 500,
  width: 500
}
