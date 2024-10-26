import imageUrlBuilder from "@sanity/image-url";

export const clientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET as string,
  useCdn: false,
  apiVersion: '2024-10-25',
};

const builder = imageUrlBuilder(clientConfig);

export function urlFor(source: any) {
  return builder.image(source);
}
