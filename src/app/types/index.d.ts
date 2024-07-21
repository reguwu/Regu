export type Portfolio = {
    name: string
    date: string
    image: string
    link: {
        github: string
        live: string
    };
    description: string
    category: CategoryTypes
    techStack: Array<string>
    slug: string
    gallery?: Array<LightboxSlideProps>
}

type CategoryTypes = 'Software' | 'Game'

type LightboxSlideProps = {
    src: string
    title: string
}

export type SearchParams = {
    query?: string;
    page?: string;
}

export type MdxContent<T> = { content: string; metadata: { slug: string } & T };