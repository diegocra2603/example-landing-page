export interface LandingPage {
    id: string;
    name: string;
    description: string;
    code: string;
    destination: number;
    banners: Banner[];
    images: any[];
    texts: any[];
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
