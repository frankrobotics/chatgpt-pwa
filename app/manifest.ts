import type { MetadataRoute } from 'next'
export default function manifest(): MetadataRoute.Manifest {
  return {
    id : '/v1-up',
    name: 'Chat GPT PWA',
    short_name: 'ChatGPT PWA',
    description: 'Personal use as a GPT desktop app',
    start_url: '.',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/manifest-1.png',
        sizes: '600x600',
        type: "image/png",
      },
    ],
  }
}