// mockData.js
const chefMockData = [
    {
      id: 1,
      name: 'Chef John',
      cuisine: 'Nyama Choma',
      availability: 'lunch',
      servings: 4,
      cookTime: '1 hour',
      rating: 4,
      location: 'Nairobi',
      description: 'The meat is marinated in a flavorful blend of cumin, coriander, paprika, garlic, ginger, and salt, infusing it with a vibrant taste. Skewered onto sticks, it grills over an open flame or hot charcoal, gaining a smoky essence. Basted with an oil and spice blend during grilling, the Nyama Choma achieves a succulent tenderness and a rich, elevated flavor.',
      profileImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/chef2.jpg',
      cuisineImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/CateringMenu1.png'
    },
    {
      id: 2,
      name: 'Chef Doe',
      cuisine: 'Ugali and Fish',
      availability: 'lunch',
      servings: 2,
      cookTime: '45 min',
      rating: 4,
      location: 'Nairobi',
      description: 'A star of Kenyan dining, the main attraction is a perfectly seasoned, grilled fish—bursting with flavors of chili, garlic, and lemon. Paired alongside is the classic Ugali, a comforting maize flour staple, serving as the ideal accompaniment to this delicious and satisfying meal.',
      profileImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/CateringF1.jpg',
      cuisineImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/bigfish.png',
    },
    {
      id: 3,
      name: 'Chef Michael',
      cuisine: 'Fried Chicken Fillet',
      availability: 'lunch',
      servings: 6,
      cookTime: '30 min',
      rating: 3,
      location: 'Nairobi',
      description: 'Crisp and seasoned chicken fillet, expertly fried to perfection, its golden exterior encasing a succulent tenderness heightened by a skillful blend of spices. Complemented by a side of tender peas, this dish offers a delightful combination of textures and flavors, making each bite a savory delight.',
      profileImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/CateringF2.jpg',
      cuisineImage:'https://chefconnectapp.s3.ap-south-1.amazonaws.com/chickenbreast.png',
    },
    {
        id: 4,
        name: 'Chef Rafael',
        cuisine: 'Nyama Choma',
        availability: 'lunch',
        servings: 5,
        cookTime: '1 hour',
        rating: 5,
        location: 'Nakuru',
        description: 'The meat is marinated in a flavorful blend of cumin, coriander, paprika, garlic, ginger, and salt, infusing it with a vibrant taste. Skewered onto sticks, it grills over an open flame or hot charcoal, gaining a smoky essence. Basted with an oil and spice blend during grilling, the Nyama Choma achieves a succulent tenderness and a rich, elevated flavor.',
        profileImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/chef2.jpg',
        cuisineImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/CateringMenu1.png'
      },
      {
        id: 5,
        name: 'Chef Ali',
        cuisine: 'Ugali and Fish',
        availability: 'lunch',
        servings: 5,
        cookTime: '45 min',
        rating: 5,
        location: 'Nakuru',
        description: 'A star of Kenyan dining, the main attraction is a perfectly seasoned, grilled fish—bursting with flavors of chili, garlic, and lemon. Paired alongside is the classic Ugali, a comforting maize flour staple, serving as the ideal accompaniment to this delicious and satisfying meal.',
        profileImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/CateringF1.jpg',
        cuisineImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/bigfish.png',
      },
      {
        id: 6,
        name: 'Chef Mike',
        cuisine: 'Fried Chicken Fillet',
        availability: 'lunch',
        servings: 4,
        cookTime: '30 min',
        rating: 4,
        location: 'Nakuru',
        description: 'Crisp and seasoned chicken fillet, expertly fried to perfection, its golden exterior encasing a succulent tenderness heightened by a skillful blend of spices. Complemented by a side of tender peas, this dish offers a delightful combination of textures and flavors, making each bite a savory delight.',
        profileImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/CateringF2.jpg',
        cuisineImage:'https://chefconnectapp.s3.ap-south-1.amazonaws.com/chickenbreast.png',
      },
      {
        id: 7,
        name: 'Chef Ahmed',
        cuisine: 'Nyama Choma',
        availability: 'lunch',
        servings: 5,
        cookTime: '1 hour',
        rating: 5,
        location: 'Mombasa',
        description: 'The meat is marinated in a flavorful blend of cumin, coriander, paprika, garlic, ginger, and salt, infusing it with a vibrant taste. Skewered onto sticks, it grills over an open flame or hot charcoal, gaining a smoky essence. Basted with an oil and spice blend during grilling, the Nyama Choma achieves a succulent tenderness and a rich, elevated flavor.',
        profileImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/chef2.jpg',
        cuisineImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/CateringMenu1.png'
      },
      {
        id: 8,
        name: 'Chef Mohammed',
        cuisine: 'Ugali and Fish',
        availability: 'lunch',
        servings: 3,
        cookTime: '45 min',
        rating: 5,
        location: 'Mombasa',
        description: 'A star of Kenyan dining, the main attraction is a perfectly seasoned, grilled fish—bursting with flavors of chili, garlic, and lemon. Paired alongside is the classic Ugali, a comforting maize flour staple, serving as the ideal accompaniment to this delicious and satisfying meal.',
        profileImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/CateringF1.jpg',
        cuisineImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/bigfish.png',
      },
      {
        id: 9,
        name: 'Chef Husein',
        cuisine: 'Fried Chicken Fillet',
        availability: 'lunch',
        servings: 5,
        cookTime: '30 min',
        rating: 4,
        location: 'Mombasa',
        description: 'Crisp and seasoned chicken fillet, expertly fried to perfection, its golden exterior encasing a succulent tenderness heightened by a skillful blend of spices. Complemented by a side of tender peas, this dish offers a delightful combination of textures and flavors, making each bite a savory delight.',
        profileImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/CateringF2.jpg',
        cuisineImage:'https://chefconnectapp.s3.ap-south-1.amazonaws.com/chickenbreast.png',
      },
      {
        id: 10,
        name: 'Chef Henry',
        cuisine: 'Nyama Choma',
        availability: 'dinner',
        servings: 5,
        cookTime: '1 hour',
        rating: 5,
        location: 'Nairobi',
        description: 'The meat is marinated in a flavorful blend of cumin, coriander, paprika, garlic, ginger, and salt, infusing it with a vibrant taste. Skewered onto sticks, it grills over an open flame or hot charcoal, gaining a smoky essence. Basted with an oil and spice blend during grilling, the Nyama Choma achieves a succulent tenderness and a rich, elevated flavor.',
        profileImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/chef2.jpg',
        cuisineImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/CateringMenu1.png'
      },
      {
        id: 11,
        name: 'Chef William',
        cuisine: 'Ugali and Fish',
        availability: 'dinner',
        servings: 4,
        cookTime: '50 min',
        rating: 4,
        location: 'Nairobi',
        description: 'A star of Kenyan dining, the main attraction is a perfectly seasoned, grilled fish—bursting with flavors of chili, garlic, and lemon. Paired alongside is the classic Ugali, a comforting maize flour staple, serving as the ideal accompaniment to this delicious and satisfying meal.',
        profileImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/CateringF1.jpg',
        cuisineImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/bigfish.png',
      },
      {
        id: 12,
        name: 'Chef Charles',
        cuisine: 'Fried Chicken Fillet',
        availability: 'dinner',
        servings: 7,
        cookTime: '40 min',
        rating: 3,
        location: 'Nairobi',
        description: 'Crisp and seasoned chicken fillet, expertly fried to perfection, its golden exterior encasing a succulent tenderness heightened by a skillful blend of spices. Complemented by a side of tender peas, this dish offers a delightful combination of textures and flavors, making each bite a savory delight.',
        profileImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/CateringF2.jpg',
        cuisineImage:'https://chefconnectapp.s3.ap-south-1.amazonaws.com/chickenbreast.png',
      },
      {
          id: 13,
          name: 'Chef Liam',
          cuisine: 'Nyama Choma',
          availability: 'dinner',
          servings: 4,
          cookTime: '1 hour',
          rating: 5,
          location: 'Nakuru',
          description: 'The meat is marinated in a flavorful blend of cumin, coriander, paprika, garlic, ginger, and salt, infusing it with a vibrant taste. Skewered onto sticks, it grills over an open flame or hot charcoal, gaining a smoky essence. Basted with an oil and spice blend during grilling, the Nyama Choma achieves a succulent tenderness and a rich, elevated flavor.',
          profileImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/chef2.jpg',
          cuisineImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/CateringMenu1.png'
        },
        {
          id: 14,
          name: 'Chef Lucas',
          cuisine: 'Ugali and Fish',
          availability: 'dinner',
          servings: 2,
          cookTime: '40 min',
          rating: 5,
          location: 'Nakuru',
          description: 'A star of Kenyan dining, the main attraction is a perfectly seasoned, grilled fish—bursting with flavors of chili, garlic, and lemon. Paired alongside is the classic Ugali, a comforting maize flour staple, serving as the ideal accompaniment to this delicious and satisfying meal.',
          profileImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/CateringF1.jpg',
          cuisineImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/bigfish.png',
        },
        {
          id: 15,
          name: 'Chef Leo',
          cuisine: 'Fried Chicken Fillet',
          availability: 'dinner',
          servings: 5,
          cookTime: '30 min',
          rating: 4,
          location: 'Nakuru',
          description: 'Crisp and seasoned chicken fillet, expertly fried to perfection, its golden exterior encasing a succulent tenderness heightened by a skillful blend of spices. Complemented by a side of tender peas, this dish offers a delightful combination of textures and flavors, making each bite a savory delight.',
          profileImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/CateringF2.jpg',
          cuisineImage:'https://chefconnectapp.s3.ap-south-1.amazonaws.com/chickenbreast.png',
        },
        {
          id: 16,
          name: 'Chef Abdallah',
          cuisine: 'Nyama Choma',
          servings: 5,
          cookTime: '1 hour',
          availability: 'dinner',
          rating: 5,
          location: 'Mombasa',
          description: 'The meat is marinated in a flavorful blend of cumin, coriander, paprika, garlic, ginger, and salt, infusing it with a vibrant taste. Skewered onto sticks, it grills over an open flame or hot charcoal, gaining a smoky essence. Basted with an oil and spice blend during grilling, the Nyama Choma achieves a succulent tenderness and a rich, elevated flavor.',
          profileImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/chef2.jpg',
          cuisineImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/CateringMenu1.png'
        },
        {
          id: 17,
          name: 'Chef Malik',
          cuisine: 'Ugali and Fish',
          availability: 'dinner',
          servings: 3,
          cookTime: '45 min',
          rating: 4,
          location: 'Mombasa',
          description: 'A star of Kenyan dining, the main attraction is a perfectly seasoned, grilled fish—bursting with flavors of chili, garlic, and lemon. Paired alongside is the classic Ugali, a comforting maize flour staple, serving as the ideal accompaniment to this delicious and satisfying meal.',
          profileImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/CateringF1.jpg',
          cuisineImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/bigfish.png',
        },
        {
          id: 18,
          name: 'Chef Arman',
          cuisine: 'Fried Chicken Fillet',
          availability: 'dinner',
          servings: 7,
          cookTime: '30 min',
          rating: 4,
          location: 'Mombasa',
          description: 'Crisp and seasoned chicken fillet, expertly fried to perfection, its golden exterior encasing a succulent tenderness heightened by a skillful blend of spices. Complemented by a side of tender peas, this dish offers a delightful combination of textures and flavors, making each bite a savory delight.',
          profileImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/CateringF2.jpg',
          cuisineImage:'https://chefconnectapp.s3.ap-south-1.amazonaws.com/chickenbreast.png',
        },
        {
            id: 19,
            name: 'Chef Ethan',
            cuisine: 'Nyama Choma',
            servings: 8,
            cookTime: '1 hour',
            availability: 'Weekend',
            rating: 4,
            location: 'Nairobi',
            description: 'The meat is marinated in a flavorful blend of cumin, coriander, paprika, garlic, ginger, and salt, infusing it with a vibrant taste. Skewered onto sticks, it grills over an open flame or hot charcoal, gaining a smoky essence. Basted with an oil and spice blend during grilling, the Nyama Choma achieves a succulent tenderness and a rich, elevated flavor.',
            profileImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/chef2.jpg',
            cuisineImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/CateringMenu1.png'
          },
          {
            id: 20,
            name: 'Chef Oliver',
            cuisine: 'Ugali and Fish',
            availability: 'Weekend',
            servings: 5,
            cookTime: '55 min',
            rating: 4,
            location: 'Nairobi',
            description: 'A star of Kenyan dining, the main attraction is a perfectly seasoned, grilled fish—bursting with flavors of chili, garlic, and lemon. Paired alongside is the classic Ugali, a comforting maize flour staple, serving as the ideal accompaniment to this delicious and satisfying meal.',
            profileImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/CateringF1.jpg',
            cuisineImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/bigfish.png',
          },
          {
            id: 21,
            name: 'Chef Joe',
            cuisine: 'Fried Chicken Fillet',
            availability: 'Weekend',
            servings: 4,
            cookTime: '25 min',
            rating: 3,
            location: 'Nairobi',
            description: 'Crisp and seasoned chicken fillet, expertly fried to perfection, its golden exterior encasing a succulent tenderness heightened by a skillful blend of spices. Complemented by a side of tender peas, this dish offers a delightful combination of textures and flavors, making each bite a savory delight.',
            profileImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/CateringF2.jpg',
            cuisineImage:'https://chefconnectapp.s3.ap-south-1.amazonaws.com/chickenbreast.png',
          },
          {
              id: 22,
              name: 'Chef Noah',
              cuisine: 'Nyama Choma',
              servings: 5,
              cookTime: '1 hour',
              availability: 'Weekend',
              rating: 5,
              location: 'Nakuru',
              description: 'The meat is marinated in a flavorful blend of cumin, coriander, paprika, garlic, ginger, and salt, infusing it with a vibrant taste. Skewered onto sticks, it grills over an open flame or hot charcoal, gaining a smoky essence. Basted with an oil and spice blend during grilling, the Nyama Choma achieves a succulent tenderness and a rich, elevated flavor.',
              profileImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/chef2.jpg',
              cuisineImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/CateringMenu1.png'
            },
            {
              id: 23,
              name: 'Chef Elijah',
              cuisine: 'Ugali and Fish',
              servings: 3,
              cookTime: '55 min',
              availability: 'Weekend',
              rating: 5,
              location: 'Nakuru',
              description: 'A star of Kenyan dining, the main attraction is a perfectly seasoned, grilled fish—bursting with flavors of chili, garlic, and lemon. Paired alongside is the classic Ugali, a comforting maize flour staple, serving as the ideal accompaniment to this delicious and satisfying meal.',
              profileImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/CateringF1.jpg',
              cuisineImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/bigfish.png',
            },
            {
              id: 24,
              name: 'Chef Alexander',
              cuisine: 'Fried Chicken Fillet',
              availability: 'Weekend',
              servings: 5,
              cookTime: '40 min',
              rating: 4,
              location: 'Nakuru',
              description: 'Crisp and seasoned chicken fillet, expertly fried to perfection, its golden exterior encasing a succulent tenderness heightened by a skillful blend of spices. Complemented by a side of tender peas, this dish offers a delightful combination of textures and flavors, making each bite a savory delight.',
              profileImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/CateringF2.jpg',
              cuisineImage:'https://chefconnectapp.s3.ap-south-1.amazonaws.com/chickenbreast.png',
            },
            {
              id: 25,
              name: 'Chef Farhan',
              cuisine: 'Nyama Choma',
              servings: 6,
              cookTime: '1 hour',
              availability: 'Weekend',
              rating: 5,
              location: 'Mombasa',
              description: 'The meat is marinated in a flavorful blend of cumin, coriander, paprika, garlic, ginger, and salt, infusing it with a vibrant taste. Skewered onto sticks, it grills over an open flame or hot charcoal, gaining a smoky essence. Basted with an oil and spice blend during grilling, the Nyama Choma achieves a succulent tenderness and a rich, elevated flavor.',
              profileImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/chef2.jpg',
              cuisineImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/CateringMenu1.png'
            },
            {
              id: 26,
              name: 'Chef Ahsan',
              cuisine: 'Ugali and Fish',
              availability: 'Weekend',
              servings: 4,
              cookTime: '50 min',
              rating: 5,
              location: 'Mombasa',
              description: 'A star of Kenyan dining, the main attraction is a perfectly seasoned, grilled fish—bursting with flavors of chili, garlic, and lemon. Paired alongside is the classic Ugali, a comforting maize flour staple, serving as the ideal accompaniment to this delicious and satisfying meal.',
              profileImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/CateringF1.jpg',
              cuisineImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/bigfish.png',
            },
            {
              id: 27,
              name: 'Chef Akeem',
              cuisine: 'Fried Chicken Fillet',
              availability: 'Weekend',
              servings: 6,
              cookTime: '35 min',
              rating: 4,
              location: 'Mombasa',
              description: 'Crisp and seasoned chicken fillet, expertly fried to perfection, its golden exterior encasing a succulent tenderness heightened by a skillful blend of spices. Complemented by a side of tender peas, this dish offers a delightful combination of textures and flavors, making each bite a savory delight.',
              profileImage: 'https://chefconnectapp.s3.ap-south-1.amazonaws.com/CateringF2.jpg',
              cuisineImage:'https://chefconnectapp.s3.ap-south-1.amazonaws.com/chickenbreast.png',
            },
    
  ];
  
  export default chefMockData;
  