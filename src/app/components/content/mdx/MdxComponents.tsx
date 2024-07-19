import { MDXComponents } from "mdx/types"
import Image, { ImageProps } from "next/image"

export const MdxComponents: MDXComponents = {
  p: ({ children }: any) => <p style={{ color: "unset" }}>{children}</p>,
  ul: ({ children }: any) => <ul style={{ paddingInlineStart: 30 }}>{children}</ul>,
  Image: (props: ImageProps) => (
    <Image
      width={0}
      height={0}
      sizes= "(max-width: 768px) 100%"
      style={{ width: '100% !important', height: 'auto !important' }}
      priority={true}
      {...(props as ImageProps)}
    />
  )
}