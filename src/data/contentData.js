// Page copy for each section. Edit here to re-skin the site for a client.
import heroImage from '../assets/img/carousel-1.jpg'
import bannerImage from '../assets/img/carousel-2.jpg'
import aboutImage from '../assets/img/about.jpg'

export const hero = {
  eyebrow: 'Dallas-Fort Worth landscaping',
  title: 'Outdoor spaces that thrive in North Texas',
  text: 'From drought-smart lawns to patios built for long summer evenings, our crews design, install and maintain landscapes that look great and handle the heat.',
  primaryCta: { label: 'Get a free quote', href: '#quote' },
  secondaryCta: { label: 'See our work', href: '#projects' },
  image: heroImage,
  imageAlt: 'A landscaper arranging pink geraniums and ornamental grasses in a planter'
}

export const highlights = [
  {
    icon: 'fa-solid fa-receipt',
    title: 'Upfront pricing',
    description: 'Written quotes with every line item listed. No surprise fees.'
  },
  {
    icon: 'fa-solid fa-people-group',
    title: 'Crews you get to know',
    description: 'The same small team looks after your property visit after visit.'
  },
  {
    icon: 'fa-solid fa-phone-volume',
    title: 'Fast storm response',
    description: 'Call us after hail or high winds and we will be out within a day.'
  }
]

export const about = {
  eyebrow: 'About us',
  title: 'We make your yard feel like part of the home',
  paragraphs: [
    'DFW Landscaping Co. started with one truck and a handful of Fort Worth lawns. Today our crews care for more than a thousand properties across Dallas, Tarrant and Collin counties.',
    'We choose plants and materials that handle blackland clay, summer heat and the occasional ice storm, then build a plan around how your family actually uses the space.'
  ],
  cta: { label: 'Explore our services', href: '#services' },
  image: aboutImage,
  imageAlt: 'A gardener kneeling in a flower bed with a hand trowel',
  stats: [
    { value: '25', label: 'Years serving DFW' },
    { value: '1,800+', label: 'Projects completed' },
    { value: '4.9', label: 'Average review score' }
  ],
  points: [
    {
      icon: 'fa-solid fa-award',
      title: 'Locally recognized',
      description: 'Named a favorite neighborhood landscaper by Tarrant County homeowners.'
    },
    {
      icon: 'fa-solid fa-leaf',
      title: 'Texas-tough plants',
      description: 'Native and adapted species that use less water and shrug off the heat.'
    }
  ]
}

export const servicesIntro = {
  eyebrow: 'What we do',
  title: 'Services for every season and every yard',
  text: 'Pick one service or let us handle the whole property. Every plan starts with a free on-site visit.'
}

export const banner = {
  eyebrow: 'Why homeowners choose us',
  title: 'Craftsmanship you can see, and a crew you can trust',
  bullets: [
    'Premium plants and materials from North Texas growers',
    'Licensed, insured and background-checked crews',
    'Custom designs sized to your lot and budget'
  ],
  cta: { label: 'Start your project', href: '#quote' },
  image: bannerImage
}

export const projectsIntro = {
  eyebrow: 'Recent work',
  title: 'A look at what we have built around DFW',
  text: 'Select any project to view it larger.'
}

export const teamIntro = {
  eyebrow: 'Our team',
  title: 'Experienced people who love the work',
  text: 'Designers, horticulturists and crew leads who answer your calls and show up on time.'
}

export const reviewsIntro = {
  eyebrow: 'Reviews',
  title: 'What our neighbors say',
  text: 'Sample reviews written for this demo. A real client site would show verified customer feedback.'
}

export const quoteForm = {
  eyebrow: 'Free estimate',
  title: 'Tell us about your yard',
  text: 'Share a few details and we will reply within one business day to schedule a free on-site visit.',
  submitLabel: 'Request my quote',
  successMessage:
    'Thanks! This is a demo site, so nothing was sent. On a live site, your request would reach the team now.'
}

export const newsletter = {
  title: 'Seasonal yard tips',
  text: 'One short email a month: what to plant, prune and water in North Texas.',
  label: 'Email address',
  submitLabel: 'Sign up',
  successMessage: 'Thanks! This is a demo site, so nothing was sent and you are not subscribed.'
}
