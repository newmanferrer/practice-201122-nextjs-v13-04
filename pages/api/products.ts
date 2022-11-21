// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { IProduct } from '../../models'

export default function handler(req: NextApiRequest, res: NextApiResponse<IProduct[]>) {
  res.status(200).json([
    {
      id: 0,
      name: 'Octocat Figurine',
      price: 100,
      stock: 73,
      picture: 'http://localhost:3000/images/small-octocat-882x882.webp',
      brand_name: 'GitHub',
      brand_logo: 'http://localhost:3000/images/github-logo.webp',
      description:
        'For years, the Octocat has been stuck in the realm of two dimensions—but no more! Now she’s crawling off your laptop and onto your desk as a 5" vinyl figurine.'
    },
    {
      id: 1,
      name: 'Gold Cap - Limited Edition',
      price: 29.99,
      stock: 73,
      picture: 'http://localhost:3000/images/octo-cap-gold-882x882.webp',
      brand_name: 'GitHub',
      brand_logo: 'http://localhost:3000/images/github-logo.webp',
      description:
        '100% Washed Chino Cotton Twill Unstructured Cap with a tone-on-tone invertocat for a simple and classy hat to cap off any wardrobe choice.'
    },
    {
      id: 2,
      name: 'Black Cap - Limited Edition',
      price: 39.99,
      stock: 73,
      picture: 'http://localhost:3000/images/octo-cap-black-882x882.webp',
      brand_name: 'GitHub',
      brand_logo: 'http://localhost:3000/images/github-logo.webp',
      description:
        'This classic structured TravisMathew logo cap with a tone-on-tone invertocat logo will cap off any attire.'
    },
    {
      id: 3,
      name: 'Sticker Packs',
      price: 5.0,
      stock: 73,
      picture: 'http://localhost:3000/images/stickers-packs-sampler-882x882.webp',
      brand_name: 'GitHub',
      brand_logo: 'http://localhost:3000/images/github-logo.webp',
      description:
        '*Pssst*  Yeah, you over there.  That one sticker on your laptop is looking mighty lonely.  Check out these sticker packs with some of our most loved stickers.'
    },
    {
      id: 4,
      name: 'Invertocat Hoodie',
      price: 59.99,
      stock: 73,
      picture: 'http://localhost:3000/images/invertocat-hoodie-882x882.webp',
      brand_name: 'GitHub',
      brand_logo: 'http://localhost:3000/images/github-logo.webp',
      description:
        'Sometimes coding requires working in cold environments. Its often hard to find objects which will help combat that pesky chill. Sure, you could wear fingerless gloves or a sweatervest, but why settle for garments that make you look like you cant afford fingers or sleeves. If only someone would create a body covering with a hood type of device to cover your head.'
    },
    {
      id: 5,
      name: 'Octocat Laptop Decals',
      price: 5,
      stock: 73,
      picture: 'http://localhost:3000/imges/octocat-laptop-decals-882x882.webp',
      brand_name: 'GitHub',
      brand_logo: 'http://localhost:3000/images/github-logo.webp',
      description:
        'Mona is here to save the day—and save your laptop from blending in. Choose from two game-inspired designs: Boxing Mona is ready to knock out tasks with a one-two punch and Adventure Mona is fearlessly leading the way to her next ship. Decals work for all laptop brands and come in small for 11"-13" laptops or large for 15 inch - 17 inch laptops.'
    }
  ])
}
