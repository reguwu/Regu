"use client"

import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import { Inline, Zoom } from "yet-another-react-lightbox/plugins";
import Captions from "yet-another-react-lightbox/plugins/captions";
import { NextJsImage } from "@/components/content-navigation/lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";

import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/styles.css";
import "@/styles/lightbox.css";

interface Props {
  images: SlideImage[]
}
export const LightboxWrapper = ({ images }: Props) => {
  return (
    <Lightbox
      slides={images}
      plugins={[ Inline, Captions, Zoom, Counter]}
      carousel={{ preload: 1, finite: true, padding: 0 }}
      inline={{ style: { width: "100%", maxWidth: "100vw", aspectRatio: "16 / 9" },}}
      zoom={{ maxZoomPixelRatio: 5, zoomInMultiplier: 1.75 }}
      counter={{ container: { style: { top: "unset", bottom: 0 } } }}
      render={{ slide: NextJsImage }}
    />
  )
}