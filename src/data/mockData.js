const makeStats = (discussions, comments, upvotes, authors, communities) => [
  {
    id: 'discussions',
    value: discussions,
    label: 'Discussions',
    note: `From ${communities} communities`,
    icon: 'MessageCircle',
    tone: 'blue'
  },
  {
    id: 'comments',
    value: comments,
    label: 'Comments',
    note: 'Analyzed',
    icon: 'MessagesSquare',
    tone: 'blue'
  },
  {
    id: 'upvotes',
    value: upvotes,
    label: 'Upvotes',
    note: 'Across all posts',
    icon: 'TrendingUp',
    tone: 'blue'
  },
  {
    id: 'authors',
    value: authors,
    label: 'Unique Authors',
    note: 'Contributors',
    icon: 'UsersRound',
    tone: 'green'
  },
  {
    id: 'range',
    value: '3.2 yrs',
    label: 'Date Range',
    note: '2021 – 2024',
    icon: 'CalendarDays',
    tone: 'purple'
  }
]

export const conditionData = {

  'disc bulge': {
    stats: makeStats('2,341', '18,642', '247K', '16.8K', 15),

    approaches: [
      { name: 'Physical therapy', mentions: 186, share: '13.4%' },
      { name: 'Walking', mentions: 143, share: '10.3%' },
      { name: 'Core strengthening', mentions: 121, share: '8.7%' },
      { name: 'McGill Big 3', mentions: 98, share: '7.1%' },
      { name: 'Avoid prolonged sitting', mentions: 87, share: '6.3%' },
      { name: 'Heat / ice therapy', mentions: 73, share: '5.3%' },
      { name: 'NSAIDs', mentions: 69, share: '5.0%' },
      { name: 'Swimming', mentions: 52, share: '3.8%' },
      { name: 'Weight reduction', mentions: 44, share: '3.2%' },
      { name: 'Epidural injection', mentions: 31, share: '2.2%' }
    ],

    discussions: [
      {
        title: 'Things that actually helped my L4-L5 disc bulge',
        community: 'r/backpain',
        age: '1 year ago',
        upvotes: '1.2k',
        comments: 342,
        tone: 'orange'
      },
      {
        title: '6 months recovery from disc bulge – what worked',
        community: 'r/DiscBulge',
        age: '8 months ago',
        upvotes: '842',
        comments: 211,
        tone: 'blue'
      },
      {
        title: 'Anyone avoid surgery for disc bulge?',
        community: 'r/backpain',
        age: '2 years ago',
        upvotes: '723',
        comments: 293,
        tone: 'red'
      },
      {
        title: 'My MRI showed disc bulge – feeling overwhelmed',
        community: 'r/healthanxiety',
        age: '1 year ago',
        upvotes: '512',
        comments: 165,
        tone: 'teal'
      },
      {
        title: 'Best sleeping position for disc bulge?',
        community: 'r/DiscBulge',
        age: '6 months ago',
        upvotes: '412',
        comments: 98,
        tone: 'orange'
      }
    ],

    trendValues: [
      40, 66, 72, 45, 130, 196, 220, 205, 263, 245,
      310, 295, 285, 510, 505, 495, 580, 636, 704, 792,
      585, 680, 755, 705, 680, 790, 890, 830, 785, 960,
      985, 1090, 900, 880, 850, 700, 760, 845, 725, 700,
      645, 560, 625
    ]
  },


  'sciatica': {
    stats: makeStats('3,184', '26,421', '381K', '22.4K', 18),

    approaches: [
      { name: 'Physical therapy', mentions: 264, share: '14.8%' },
      { name: 'Walking', mentions: 231, share: '12.9%' },
      { name: 'Nerve glides', mentions: 194, share: '10.9%' },
      { name: 'Core strengthening', mentions: 172, share: '9.6%' },
      { name: 'Stretching', mentions: 141, share: '7.9%' },
      { name: 'Heat therapy', mentions: 112, share: '6.3%' },
      { name: 'NSAIDs', mentions: 98, share: '5.5%' },
      { name: 'Swimming', mentions: 71, share: '4.0%' },
      { name: 'Epidural injection', mentions: 64, share: '3.6%' },
      { name: 'Surgery', mentions: 39, share: '2.2%' }
    ],

    discussions: [
      {
        title: 'What finally helped my sciatica?',
        community: 'r/Sciatica',
        age: '5 months ago',
        upvotes: '1.8k',
        comments: 481,
        tone: 'blue'
      },
      {
        title: 'One year sciatica recovery experience',
        community: 'r/Sciatica',
        age: '1 year ago',
        upvotes: '1.1k',
        comments: 319,
        tone: 'teal'
      },
      {
        title: 'Walking with sciatica – helpful or harmful?',
        community: 'r/backpain',
        age: '7 months ago',
        upvotes: '891',
        comments: 246,
        tone: 'orange'
      },
      {
        title: 'Exercises that helped with sciatic pain',
        community: 'r/Sciatica',
        age: '10 months ago',
        upvotes: '734',
        comments: 198,
        tone: 'blue'
      },
      {
        title: 'Sciatica recovery without surgery',
        community: 'r/backpain',
        age: '2 years ago',
        upvotes: '621',
        comments: 177,
        tone: 'green'
      }
    ],

    trendValues: [
      90, 110, 130, 125, 170, 190, 230, 260, 250, 290,
      330, 360, 340, 410, 450, 490, 470, 530, 590, 620,
      650, 690, 730, 710, 760, 810, 850, 890, 920, 950,
      990, 1030, 1010, 1080, 1120, 1170, 1200
    ]
  },


  'lower back pain': {
    stats: makeStats('5,742', '48,216', '694K', '39.1K', 27),

    approaches: [
      { name: 'Walking', mentions: 481, share: '15.1%' },
      { name: 'Physical therapy', mentions: 436, share: '13.7%' },
      { name: 'Core strengthening', mentions: 382, share: '12.0%' },
      { name: 'Strength training', mentions: 319, share: '10.0%' },
      { name: 'Mobility exercises', mentions: 271, share: '8.5%' },
      { name: 'Heat therapy', mentions: 213, share: '6.7%' },
      { name: 'Posture changes', mentions: 187, share: '5.9%' },
      { name: 'Swimming', mentions: 134, share: '4.2%' },
      { name: 'Massage', mentions: 112, share: '3.5%' },
      { name: 'NSAIDs', mentions: 96, share: '3.0%' }
    ],

    discussions: [
      {
        title: 'What actually fixed your lower back pain?',
        community: 'r/backpain',
        age: '3 months ago',
        upvotes: '3.2k',
        comments: 782,
        tone: 'orange'
      },
      {
        title: 'Years of back pain – what finally helped',
        community: 'r/backpain',
        age: '11 months ago',
        upvotes: '2.4k',
        comments: 617,
        tone: 'blue'
      },
      {
        title: 'Daily walking changed my lower back pain',
        community: 'r/fitness',
        age: '8 months ago',
        upvotes: '1.7k',
        comments: 403,
        tone: 'green'
      }
    ],

    trendValues: [
      200, 250, 290, 310, 370, 410, 460, 510, 570, 620,
      680, 720, 790, 850, 910, 970, 1050, 1120, 1190,
      1250, 1320, 1400, 1460
    ]
  },


  'knee pain relief': {
    stats: makeStats('1,892', '14,731', '192K', '13.2K', 14),

    approaches: [
      { name: 'Strengthening exercises', mentions: 173, share: '14.2%' },
      { name: 'Physical therapy', mentions: 161, share: '13.2%' },
      { name: 'Walking', mentions: 126, share: '10.3%' },
      { name: 'Cycling', mentions: 102, share: '8.4%' },
      { name: 'Weight management', mentions: 94, share: '7.7%' },
      { name: 'Ice therapy', mentions: 81, share: '6.6%' },
      { name: 'Mobility exercises', mentions: 72, share: '5.9%' },
      { name: 'Swimming', mentions: 61, share: '5.0%' },
      { name: 'Knee brace', mentions: 48, share: '3.9%' },
      { name: 'NSAIDs', mentions: 43, share: '3.5%' }
    ],

    discussions: [
      {
        title: 'What helped your chronic knee pain?',
        community: 'r/KneeInjuries',
        age: '4 months ago',
        upvotes: '972',
        comments: 281,
        tone: 'blue'
      },
      {
        title: 'Exercises that made my knees feel better',
        community: 'r/fitness',
        age: '9 months ago',
        upvotes: '816',
        comments: 193,
        tone: 'green'
      },
      {
        title: 'Knee pain after years of inactivity',
        community: 'r/KneeInjuries',
        age: '1 year ago',
        upvotes: '622',
        comments: 171,
        tone: 'orange'
      }
    ],

    trendValues: [
      70, 90, 110, 100, 130, 160, 190, 220, 210, 250,
      280, 310, 340, 380, 410, 450, 480, 520, 560, 590
    ]
  },


  'neck pain': {
    stats: makeStats('2,116', '16,984', '218K', '14.7K', 16),

    approaches: [
      { name: 'Physical therapy', mentions: 192, share: '14.1%' },
      { name: 'Posture changes', mentions: 167, share: '12.3%' },
      { name: 'Strengthening exercises', mentions: 139, share: '10.2%' },
      { name: 'Mobility exercises', mentions: 121, share: '8.9%' },
      { name: 'Heat therapy', mentions: 104, share: '7.6%' },
      { name: 'Ergonomic setup', mentions: 91, share: '6.7%' },
      { name: 'Walking', mentions: 73, share: '5.4%' },
      { name: 'Massage', mentions: 68, share: '5.0%' },
      { name: 'Different pillow', mentions: 57, share: '4.2%' },
      { name: 'NSAIDs', mentions: 46, share: '3.4%' }
    ],

    discussions: [
      {
        title: 'What finally helped your chronic neck pain?',
        community: 'r/neckpain',
        age: '6 months ago',
        upvotes: '1.1k',
        comments: 306,
        tone: 'blue'
      },
      {
        title: 'Desk workers – how did you fix your neck pain?',
        community: 'r/OfficeChairs',
        age: '7 months ago',
        upvotes: '879',
        comments: 244,
        tone: 'orange'
      },
      {
        title: 'Physical therapy experience for neck pain',
        community: 'r/physicaltherapy',
        age: '1 year ago',
        upvotes: '694',
        comments: 187,
        tone: 'green'
      }
    ],

    trendValues: [
      80, 105, 120, 145, 170, 195, 220, 245, 270, 310,
      340, 370, 410, 450, 490, 530, 570, 610, 660, 710
    ]
  }

}

export const getConditionData = (condition) => {
  if (!condition) return null

  return conditionData[condition.trim().toLowerCase()] || null
}