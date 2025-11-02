import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// 🔹 client للقراءة فقط
export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN, // Viewer
});

// 🔹 client للكتابة (مثل إرسال الفورم)
export const contactClient = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: false,
  token: process.env.REACT_APP_SANITY_CONTACT_TOKEN, // Editor
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
