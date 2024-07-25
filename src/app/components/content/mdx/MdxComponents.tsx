import { MDXComponents } from "mdx/types"
import Image, { ImageProps } from "next/image"

export const MdxComponents: MDXComponents = {
  p: ({ children }: any) => <p style={{ color: "unset", lineHeight: 1.5 }}>{children}</p>,
  ul: ({ children }: any) => <ul style={{ paddingInlineStart: 30, lineHeight: 1.5 }}>{children}</ul>,
  li: ({ children }: any) => <li style={{ margin: "1rem 0" }}>{children}</li>,
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