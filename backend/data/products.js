const products = [
  {
    _id: "1",
    name: "Airpods Wireless Bluetooth Headphones",
    image:
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    category: "Electronics",
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: "2",
    name: "iPhone 11 Pro 256GB Memory",
    image:
      "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
    description:
      "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
    brand: "Apple",
    category: "Electronics",
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: "3",
    name: "Cannon EOS 80D DSLR Camera",
    image:
      "https://images.unsplash.com/photo-1587301353899-fa2cfc2b34d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    description:
      "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
    brand: "Cannon",
    category: "Electronics",
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: "4",
    name: "Sony Playstation 4 Pro White Version",
    image:
      "https://images.unsplash.com/photo-1526510096283-b0b3b6cac327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description:
      "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
    brand: "Sony",
    category: "Electronics",
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: "5",
    name: "Logitech G-Series Gaming Mouse",
    image:
      "https://images.unsplash.com/photo-1586349906319-48d20e9d17e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    description:
      "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
    brand: "Logitech",
    category: "Electronics",
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: "6",
    name: "Amazon Echo Dot 3rd Generation",
    image:
      "https://images.unsplash.com/photo-1667543241047-cd7afd1722f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    description:
      "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
    brand: "Amazon",
    category: "Electronics",
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: "7",
    name: "Beats Studio3 Wireless Over-Ear Headphones",
    image:
      "https://images.unsplash.com/photo-1638803782506-d975a6809f43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    description:
      "Enjoy immersive sound and wireless freedom with the Beats Studio3 Wireless headphones. With adaptive noise cancellation and long battery life, they deliver a premium listening experience.",
    brand: "Beats",
    category: "Electronics",
    price: 299.99,
    countInStock: 8,
    rating: 4.2,
    numReviews: 15,
  },
  {
    _id: "8",
    name: "Samsung QLED 4K Ultra HD Smart TV",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1357&q=80",
    description:
      "Upgrade your entertainment system with the Samsung QLED 4K Ultra HD Smart TV. It features stunning picture quality, a sleek design, and smart capabilities for an enhanced viewing experience.",
    brand: "Samsung",
    category: "Electronics",
    price: 1499.99,
    countInStock: 3,
    rating: 4.8,
    numReviews: 20,
  },
  {
    _id: "9",
    name: "Sony WH-1000XM4 Wireless Noise-Canceling Headphones",
    image:
      "https://images.unsplash.com/photo-1594075410664-00e61ae442dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description:
      "Immerse yourself in music with the Sony WH-1000XM4 Wireless Noise-Canceling Headphones. They offer industry-leading noise cancellation and exceptional sound quality for a premium listening experience.",
    brand: "Sony",
    category: "Electronics",
    price: 349.99,
    countInStock: 6,
    rating: 4.6,
    numReviews: 18,
  },
  {
    _id: "10",
    name: "Dell XPS 15 Laptop",
    image:
      "https://images.unsplash.com/photo-1567521463850-4939134bcd4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    description:
      "Experience high-performance computing with the Dell XPS 15 Laptop. It boasts a stunning 15-inch display, powerful hardware, and a sleek, compact design for productivity on the go.",
    brand: "Dell",
    category: "Electronics",
    price: 1699.99,
    countInStock: 4,
    rating: 4.5,
    numReviews: 14,
  },
  {
    _id: "11",
    name: "GoPro HERO9 Black",
    image:
      "https://images.unsplash.com/photo-1643110496210-3dd117022ea1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1446&q=80",
    description:
      "Capture your adventures in stunning detail with the GoPro HERO9 Black. It features 5K video, 20MP photos, and advanced stabilization, making it the ultimate action camera.",
    brand: "GoPro",
    category: "Electronics",
    price: 449.99,
    countInStock: 9,
    rating: 4.9,
    numReviews: 22,
  },
  {
    _id: "12",
    name: "Nikon Z7 II Mirrorless Camera",
    image:
      "https://images.unsplash.com/photo-1541690663428-b99fc611c419?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80",
    description:
      "Capture stunning images with the Nikon Z7 II Mirrorless Camera. It features a high-resolution sensor, advanced autofocus system, and 4K video capabilities, providing professional-level performance for photography enthusiasts.",
    brand: "Nikon",
    category: "Electronics",
    price: 2499.99,
    countInStock: 3,
    rating: 4.8,
    numReviews: 22,
  },
];

export default products;
