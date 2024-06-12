interface Portfolio {
    name: string;
    date: string;
    image: string;
    link: {
        github: string,
        live: string
    };
    description: string;
    category: CategoryTypes;
}

type CategoryTypes = 'software' | 'game'

export type { Portfolio }