export interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  content?: string;
  image?: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "The Future of Climate Reporting: Technology Meets Environmental Journalism",
    excerpt: "How modern journalism is adapting to cover the most pressing issue of our time, using data visualization and on-ground reporting to tell compelling climate stories.",
    author: "Sarah Mitchell",
    publishDate: "Dec 15, 2024",
    readTime: "8 min read",
    category: "Environment",
    featured: true,
    content: `The landscape of climate reporting has transformed dramatically over the past decade. As environmental challenges become increasingly complex, journalists are turning to innovative storytelling methods to engage audiences and convey the urgency of climate action.

Data visualization has emerged as a powerful tool in the climate journalist's arsenal. Interactive maps showing rising sea levels, temperature anomalies, and deforestation patterns help readers understand abstract concepts through concrete visual representation.

On-ground reporting remains equally crucial. From the melting glaciers of Greenland to the coral bleaching events in the Great Barrier Reef, journalists are documenting climate change impacts firsthand, bringing distant consequences into sharp focus for global audiences.

The challenge lies in balancing scientific accuracy with compelling narrative. Climate journalists must navigate complex research papers, translate scientific jargon into accessible language, and maintain objectivity while conveying the urgency of environmental issues.

Looking ahead, the integration of virtual reality, drone footage, and real-time environmental monitoring promises to further revolutionize how we tell climate stories. The future of environmental journalism is not just about reporting the news—it's about helping society understand and respond to the defining challenge of our time.`
  },
  {
    id: "2",
    title: "Investigative Journalism in the Digital Age: Tools and Techniques",
    excerpt: "Modern investigative reporters are leveraging technology and data analysis to uncover stories that matter, from government transparency to corporate accountability.",
    author: "Michael Chen",
    publishDate: "Dec 12, 2024",
    readTime: "6 min read",
    category: "Investigation"
  },
  {
    id: "3",
    title: "The Economics of Local Newsrooms: Sustainability Strategies That Work",
    excerpt: "As traditional revenue models struggle, successful local news outlets are finding innovative ways to serve their communities while maintaining financial viability.",
    author: "Emily Rodriguez",
    publishDate: "Dec 10, 2024",
    readTime: "5 min read",
    category: "Media Business"
  },
  {
    id: "4",
    title: "Covering Democracy: Election Reporting in Polarized Times",
    excerpt: "The challenges and responsibilities of political journalism when democratic institutions face unprecedented pressure and public trust in media reaches historic lows.",
    author: "David Thompson",
    publishDate: "Dec 8, 2024",
    readTime: "7 min read",
    category: "Politics"
  },
  {
    id: "5",
    title: "Ethics in AI-Assisted Journalism: Navigating New Frontiers",
    excerpt: "As artificial intelligence becomes more prevalent in newsrooms, journalists must grapple with questions of accuracy, bias, and the human element in storytelling.",
    author: "Lisa Park",
    publishDate: "Dec 5, 2024",
    readTime: "4 min read",
    category: "Technology"
  },
  {
    id: "6",
    title: "International Correspondence: Reporting from Conflict Zones",
    excerpt: "The personal and professional challenges of covering international conflicts, from safety concerns to cultural sensitivity and accurate representation.",
    author: "Ahmed Hassan",
    publishDate: "Dec 3, 2024",
    readTime: "9 min read",
    category: "International"
  }
];