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
    title: "Water Crisis Hits Franco Estate, Pokuase",
    excerpt: "Over the past few weeks, residents of Franco Estate, a growing community in Pokuase, have been grappling with a frustrating challenge — irregular water supply. Once a peaceful and convenient estate with reliable utilities, the community is now forced to adjust to a water supply pattern that leaves homes dry for days.",
    author: "Princess Grace Asare",
    publishDate: "July 7, 2025",
    readTime: "4 min read",
    category: "Observation and Interview",
    content: `
    Observation

At 6:30 AM on a Monday morning, many residents were spotted at the estate's central tap, lined up with yellow gallons, buckets, and bowls. Some children skipped school to help their parents fetch water. The taps in individual homes had gone dry the night before.

A middle-aged woman, visibly tired and wearing a house dress and scarf, sighed as she waited in line. "We don't sleep well anymore," she said. "If you don't wake up at dawn, you won't get water at all."

Interview with Residents

To understand the issue better, I spoke to a few residents in the area.

Mrs. Ama Boateng, a hairdresser who has lived in Franco Estate for five years, expressed her frustration:
"Water used to flow regularly here, but now it's on and off. Sometimes it doesn't come for three days. We buy from private water tankers, and it's expensive. I pay GHC 15 for just a barrel."

Kwabena Ntiamoah, a Level 200 student of UPSA who lives with his aunt, added:
"It's affecting our hygiene. Even to flush the toilet, you have to plan. And imagine preparing for school without water to bathe."

Source of the Problem

According to some residents, the issue began in late April when a nearby construction project reportedly disrupted underground pipelines. Efforts to fix the problem have been slow, and the estate is now relying on a limited water supply schedule.

The estate management released a brief notice last week:
"We are in touch with the Ghana Water Company and working on restoring full access. Kindly bear with us as repairs are ongoing."

Coping Mechanisms

Residents have adopted new routines. Many now wake up as early as 4:00 AM to fetch water before it runs out. Others have dug shallow wells, and a few fortunate homes have installed water tanks.

A young boy, Emmanuel, around 10 years old, said:
"I help my mother carry water from the other side. Sometimes, we walk 20 minutes. It's tiring."

Conclusion

The water shortage has revealed not just infrastructure issues, but also the resilience of the community. However, many believe this shouldn't be a long-term reality for an estate in Accra's rapidly developing Pokuase area. Residents are calling on the Ghana Water Company and local authorities to address the situation urgently before it escalates into a health crisis.`
  }
];