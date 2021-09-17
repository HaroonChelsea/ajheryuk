import imagePaths from './imagePaths';

export default {
  statuses: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      image: imagePaths.profileImage1,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      image: imagePaths.profileImage2,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      image: imagePaths.profileImage3,
    },
    {
      id: '24324a0f-3da1-321-bd96-534gvdfgdf',
      image: imagePaths.profileImage4,
    },
    {
      id: '24324a0f-3da1-321-bd96-534asfgdf',
      image: imagePaths.profileImage4,
    },
    {
      id: '24324a0f-3da1-321-bd96-534gvd123fgdf',
      image: imagePaths.profileImage4,
    },
  ],
  categories_data: [
    {
      id: 'bd7acbea-21-46c2-aed5-3ad53abb28ba',
      category: 'All',
      status: true,
    },
    {
      id: '3ac68afc-34-48d3-a4f8-fbd91aa97f63',
      category: 'UI/UX',
      status: false,
    },
    {
      id: '58694a0f-567-471f-bd96-145571e29d72',
      category: 'Illustration',
      status: false,
    },
    {
      id: '24324a0f-9s90-321-bd96-534gvdfgdf',
      category: '3D Animation',
      status: false,
    },
    {
      id: '58694a0f-5aa67-471f-bd96-145571e29d72',
      category: 'Illustration',
      status: false,
    },
    {
      id: '3ac68afc-3224-48d3-a4f8-fbd91aa97f63',
      category: 'UI/UX',
      status: false,
    },
  ],
  courses: [
    {
      id: '931o2-jaku7-anklsald921',
      backGroundImage: imagePaths.courseImage3,
      eBook: 'Free e-book',
      title: 'Step design sprint for beginner',
      time: '5h 21m',
      tags: ['6 lessons', 'UI/UX', 'Free'],
      content:
        "In this course I'll show the step by step, day by day process to build better products, just as Google, Slack, KLM and manu other do.",
      user: {
        username: 'Laurel Seilha',
        userType: 'Product Designer',
        userAvatar: imagePaths.profileImage1,
      },
    },
    {
      id: '931o2-9801723-anklsald921',
      backGroundImage: imagePaths.courseImage2,
      eBook: '',
      title: 'Basic skill for sketch illustratio',
      time: '3h 21m',
      tags: ['2lessons', 'UI/UX'],
      content:
        "In this course I'll show the step by step, day by day process to build better products, just as Google, Slack, KLM and manu other do.",
      user: {
        username: 'Laurel Seilha',
        userType: 'Product Designer',
        userAvatar: imagePaths.profileImage2,
      },
    },
    {
      id: '931o2-9801723-ank21312lsald921',
      backGroundImage: imagePaths.courseImage1,
      eBook: '',
      title: 'Basic skill for sketch illustratio',
      time: '3h 21m',
      tags: ['2lessons', 'UI/UX'],
      content:
        "In this course I'll show the step by step, day by day process to build better products, just as Google, Slack, KLM and manu other do.",
      user: {
        username: 'Laurel Seilha',
        userType: 'Product Designer',
        userAvatar: imagePaths.profileImage3,
      },
    },
  ],
  messages: [
    {
      username: 'Roger Hulg',
      userAvatar: imagePaths.profileImage2,
      message: 'Hey, can i ask something? i need your help please',
      numberOf: 4,
      time: '15 min',
      online: true,
    },
    {
      username: 'Hilman Nuris',
      userAvatar: imagePaths.profileImage1,
      message: 'thank’s for your information dude!',
      numberOf: null,
      time: '15 min',
      online: true,
    },
    {
      username: 'Erick Lawrence',
      userAvatar: imagePaths.profileImage4,
      message: 'Did you take the free illustration class yesterday?',
      numberOf: 1,
      time: '15 min',
      online: true,
    },
    {
      username: 'Jennifer Dunn',
      userAvatar: imagePaths.profileImage3,
      message: 'Hey Samuel, where did you get your point? can we exchange?',
      numberOf: 4,
      time: '15 min',
      online: true,
    },
    {
      username: 'Andy Warhol',
      userAvatar: imagePaths.profileImage2,
      message: 'that’s true bro, hahaha',
      numberOf: 4,
      time: '15 min',
      online: true,
    },
    {
      username: 'Thomas Partrey',
      userAvatar: imagePaths.profileImage1,
      message: 'nice sam',
      numberOf: 4,
      time: '15 min',
      online: true,
    },
  ],
};
