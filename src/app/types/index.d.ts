export type Portfolio = {
    name: string;
    date: string;
    image: string;
    link: {
        github: string,
        live: string
    };
    description: string;
    category: CategoryTypes;
    techStack: Array<String>
    slug: string
}

type CategoryTypes = 'software' | 'game'

export type MdxContent<T> = { content: string; metadata: { slug: string } & T };