export interface TechnologyObject {
    "name": string,
    "images": { png: string, webp: string },
    "description": string,
}

export interface CrewObject {
    "name": string,
    "images": { png: string, webp: string },
    "role": string,
    "bio": string,
}

export interface DestinationObject {
    "name": string,
    "images": { png: string, webp: string },
    "description": string,
    "distance": string,
    "travel": string
}

export interface TabContent {
    destinations: DestinationObject[],
    "crew": CrewObject[],
    "technology": TechnologyObject[]
}

