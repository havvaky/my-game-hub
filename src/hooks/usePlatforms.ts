import genres from "../data/genres"

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => ({ data: genres})

export default usePlatforms;