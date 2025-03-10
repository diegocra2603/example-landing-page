'use server';

import { LandingPage } from "@/interfaces/landing-page.interface";

export const getLandingPage = async () : Promise<LandingPage[]> => {

    const clientToken = process.env.CLIENT_TOKEN;
    const apiURL = process.env.API_URL;

    const res = await fetch(`${apiURL}/landing-page`, {
        headers: {
            Authorization: `Bearer ${clientToken}`
        }
    });

    const data = await res.json() as LandingPage[];

    return data;

}