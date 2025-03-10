export interface LandingPage {
    id: string;
    name: string;
    description: string;
    code: string;
    destination: number;
    banners: Banner[];
    images: Image[];
    texts: Text[];
}

export interface Banner {
    id: string;
    title: string;
    description: string;
    order: number;
    images: Image[];
}

export interface Image {
    id: string;
    publicUrl: string;
    privateUrl: string;
    title: string;
    description: string;
    order: number;
    goToUrl: string;
}

export interface Text {
    id: string;
    title: string;
    description: string;
}
