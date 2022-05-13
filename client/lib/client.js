import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '0gttdotg',
    dataset: 'production',
    apiVersion: '5/12/2022',
    useCdn: true,
    token: 'NEXT_PUBLIC_SANITY_TOKEN'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);