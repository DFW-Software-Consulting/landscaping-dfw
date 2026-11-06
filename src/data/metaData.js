// Site-wide settings. Re-skinning for a client starts here.
export const metaData = {
  companyName: 'DFW Landscaping Co.',
  shortName: 'DFW Landscaping',
  tagline: 'Lawns and landscapes built for North Texas',
  email: 'hello@example.com',
  phoneNumber: '(817) 555-0163',
  phoneHref: 'tel:+18175550163',
  address: '4200 Prairie Oak Lane, Fort Worth, TX 76107',
  hours: 'Mon to Sat, 7:30 am to 6 pm',
  // Fictional business: links go to each platform's home page.
  socialMedia: [
    { label: 'Facebook', icon: 'fa-brands fa-facebook-f', url: 'https://www.facebook.com' },
    { label: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com' },
    { label: 'YouTube', icon: 'fa-brands fa-youtube', url: 'https://www.youtube.com' },
    { label: 'LinkedIn', icon: 'fa-brands fa-linkedin-in', url: 'https://www.linkedin.com' }
  ],
  // The HTML Codex license requires the author credit link to stay in place.
  credits: {
    designedBy: { name: 'HTML Codex', url: 'https://htmlcodex.com' },
    distributedBy: { name: 'ThemeWagon', url: 'https://themewagon.com' },
    customizedBy: { name: 'DFW Software Consulting', url: 'https://dfwsc.com' }
  },
  demoNotice:
    'Demo site: DFW Landscaping Co. is a fictional business. Nothing you submit here is sent anywhere.'
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Team', href: '#team' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' }
]

export const footerLinks = {
  quickLinks: [
    { label: 'About us', href: '#about' },
    { label: 'Our services', href: '#services' },
    { label: 'Recent projects', href: '#projects' },
    { label: 'Meet the team', href: '#team' },
    { label: 'Free quote', href: '#quote' }
  ]
}
