type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Handwriting Character Recognizer',
    description:
      'This app uses python and PyTorch library to build and train an ML model which shows how convolutional neural networks process and recognize handwritten text.',
    link: 'https://github.com/6ichy/HandwrittenDigitRec',
    video:
      '',
    id: 'project1',
  },
  {
    name: 'Character Annotator',
    description: 'This app uses java to create a GUI that allows users to handwrite characters and save them paired them with their corresponding label in a json file for use in training ML models.',
    link: 'https://github.com/6ichy/CharacterAnnotator',
    video: '',
    id: 'project2',
  },
  {
    name: 'Arduino Tiny Machine Learning Workshop',
    description:
      'Organized and taught a workshop showing beginners how to create a ML model and upload it to an Arduino board.',
    link: '',
    video:'',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Merced College',
    title: 'Data Science Ambassador',
    start: '2024',
    end: 'Present',
    link: 'https://www.mccd.edu/',
    id: 'work1',
  },
  {
    company: 'University of Houston- Downtown',
    title: 'Research Assistant',
    start: '2026',
    end: 'Present',
    link: 'https://www.uhd.edu/',
    id: 'work2',
  }
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/6ichy',
  },

  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/richymanzo19',
  },

]

export const EMAIL = 'richymanzo19@gmail.com'
