import landscapeDesign from '../assets/img/service-1.jpg'
import patios from '../assets/img/service-2.jpg'
import irrigation from '../assets/img/service-3.jpg'
import lawnCare from '../assets/img/service-4.jpg'
import treeShrub from '../assets/img/service-5.jpg'
import cleanup from '../assets/img/service-6.jpg'

export const services = [
  {
    title: 'Lawn Care',
    description:
      'Mowing, edging, fertilizing and weed control on a schedule that suits Bermuda, St. Augustine and Zoysia turf.',
    icon: 'fa-solid fa-seedling',
    image: lawnCare,
    imageAlt: 'A hand holding a hose, watering a green lawn'
  },
  {
    title: 'Landscape Design',
    description:
      'Planting plans and bed layouts with drought-tolerant color, built to look good in every season.',
    icon: 'fa-solid fa-pencil-ruler',
    image: landscapeDesign,
    imageAlt: 'A crew planting flowers along a brick-edged garden bed'
  },
  {
    title: 'Irrigation & Drainage',
    description:
      'Smart-controller sprinkler systems, drip lines and French drains that save water and protect your foundation.',
    icon: 'fa-solid fa-droplet',
    image: irrigation,
    imageAlt: 'A worker laying irrigation tubing in a trench'
  },
  {
    title: 'Tree & Shrub Care',
    description:
      'Pruning, shaping, mulching and plant health checks to keep trees strong through heat and storms.',
    icon: 'fa-solid fa-tree',
    image: treeShrub,
    imageAlt: 'A horticulturist sorting seedling trays in a greenhouse'
  },
  {
    title: 'Hardscaping & Patios',
    description:
      'Flagstone and paver patios, walkways, retaining walls and planters designed for outdoor living.',
    icon: 'fa-solid fa-border-all',
    image: patios,
    imageAlt: 'Hands planting succulents into a dark glazed patio container'
  },
  {
    title: 'Seasonal Cleanup',
    description:
      'Spring refresh, leaf removal, bed cleanout and freeze prep so your yard is ready for what is next.',
    icon: 'fa-solid fa-broom',
    image: cleanup,
    imageAlt: 'A gardener tending potted pepper plants'
  }
]
