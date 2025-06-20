const mongoose = require("mongoose");
const Vehicle = require("../models/Vehicle"); // Adjust path if needed

const uri = "mongodb+srv://MongoUser:MongoUser@mycluster.zbjzmo8.mongodb.net/MyDatabase?retryWrites=true&w=majority&appName=MyCluster";

mongoose.connect(uri)
  .then(async () => {
    console.log("Connected to MongoDB Atlas");

    await Vehicle.deleteMany({});

    // Sample data (expand for each category/location)
    const vehicles = [
      // SUVs in Visakhapatnam
      {
    name: "Toyota Fortuner",
    type: "SUV",
    brand: "Toyota",
    location: "Visakhapatnam",
    pricePerDay: 3400,
    availability: true,
    description: "Premium 7-seater SUV, perfect for family trips.",
    imageUrl: "/assets/fortuner.png",
    category: "SUV"
  },
  {
    name: "Mahindra XUV700",
    type: "SUV",
    brand: "Mahindra",
    location: "Visakhapatnam",
    pricePerDay: 3200,
    availability: true,
    description: "Luxury SUV with advanced safety features.",
    imageUrl: ("/assets/xuv700.png"),
    category: "SUV"
  },
  {
    name: "Hyundai Creta",
    type: "SUV",
    brand: "Hyundai",
    location: "Visakhapatnam",
    pricePerDay: 2100,
    availability: true,
    description: "Compact SUV, great for city and highway.",
    imageUrl: "/assets/creta.png",
    category: "SUV"
  },
  {
    name: "Tata Safari",
    type: "SUV",
    brand: "Tata",
    location: "Visakhapatnam",
    pricePerDay: 2500,
    availability: true,
    description: "Spacious and rugged, ideal for long journeys.",
    imageUrl: "/assets/safari.png",
    category: "SUV"
  },
  {
    name: "Kia Seltos",
    type: "SUV",
    brand: "Kia",
    location: "Visakhapatnam",
    pricePerDay: 2300,
    availability: true,
    description: "Stylish and modern SUV with great features.",
    imageUrl: "/assets/seltos.png",
    category: "SUV"
  },

  // SUVs - Bheemli
  {
    name: "MG Hector",
    type: "SUV",
    brand: "MG",
    location: "Bheemli",
    pricePerDay: 2100,
    availability: true,
    description: "Spacious and comfortable for long drives.",
    imageUrl: "/assets/hector.png",
    category: "SUV"
  },
  {
    name: "Renault Duster",
    type: "SUV",
    brand: "Renault",
    location: "Bheemli",
    pricePerDay: 1800,
    availability: true,
    description: "Rugged SUV for adventure seekers.",
    imageUrl: "/assets/duster.png",
    category: "SUV"
  },

  // SUVs - Siripuram
  {
    name: "Jeep Compass",
    type: "SUV",
    brand: "Jeep",
    location: "Siripuram",
    pricePerDay: 2700,
    availability: true,
    description: "Premium SUV for city and off-road.",
    imageUrl: "/assets/compass.png",
    category: "SUV"
  },
  {
    name: "Nissan Kicks",
    type: "SUV",
    brand: "Nissan",
    location: "Siripuram",
    pricePerDay: 1700,
    availability: true,
    description: "Compact and efficient SUV.",
    imageUrl: "/assets/kicks.png",
    category: "SUV"
  },

  // Sedans - Visakhapatnam
  {
    name: "Honda City",
    type: "Sedan",
    brand: "Honda",
    location: "Visakhapatnam",
    pricePerDay: 1800,
    availability: true,
    description: "Stylish sedan with great comfort and mileage.",
    imageUrl: "/assets/city.png",
    category: "Sedan"
  },
  {
    name: "Hyundai Verna",
    type: "Sedan",
    brand: "Hyundai",
    location: "Visakhapatnam",
    pricePerDay: 1700,
    availability: true,
    description: "Modern sedan with advanced features.",
    imageUrl: "/assets/verna.png",
    category: "Sedan"
  },
  {
    name: "Maruti Suzuki Ciaz",
    type: "Sedan",
    brand: "Maruti Suzuki",
    location: "Visakhapatnam",
    pricePerDay: 1600,
    availability: true,
    description: "Spacious sedan, perfect for city rides.",
    imageUrl: "/assets/ciaz.png",
    category: "Sedan"
  },
  {
    name: "Skoda Rapid",
    type: "Sedan",
    brand: "Skoda",
    location: "Visakhapatnam",
    pricePerDay: 1550,
    availability: true,
    description: "European style and comfort.",
    imageUrl: "/assets/rapid.png",
    category: "Sedan"
  },
  {
    name: "Volkswagen Vento",
    type: "Sedan",
    brand: "Volkswagen",
    location: "Visakhapatnam",
    pricePerDay: 1650,
    availability: true,
    description: "German engineering, smooth ride.",
    imageUrl: "/assets/vento.png",
    category: "Sedan"
  },

  // Sedans - Bheemli
  {
    name: "Toyota Yaris",
    type: "Sedan",
    brand: "Toyota",
    location: "Bheemli",
    pricePerDay: 1500,
    availability: true,
    description: "Reliable and efficient sedan.",
    imageUrl: "/assets/yaris.png",
    category: "Sedan"
  },
  {
    name: "Skoda Rapid",
    type: "Sedan",
    brand: "Skoda",
    location: "Bheemli",
    pricePerDay: 1550,
    availability: true,
    description: "European style and comfort.",
    imageUrl: "/assets/rapid.png",
    category: "Sedan"
  },

  // Sedans - Siripuram
  {
    name: "Honda Amaze",
    type: "Sedan",
    brand: "Honda",
    location: "Siripuram",
    pricePerDay: 1400,
    availability: true,
    description: "Compact sedan for city drives.",
    imageUrl: "/assets/amaze.png",
    category: "Sedan"
  },
  {
    name: "Toyota Yaris",
    type: "Sedan",
    brand: "Toyota",
    location: "Siripuram",
    pricePerDay: 1500,
    availability: true,
    description: "Reliable and efficient sedan.",
    imageUrl: "/assets/yaris.png",
    category: "Sedan"
  },

  // Mini - Visakhapatnam
  {
    name: "Hyundai Santro",
    type: "Mini",
    brand: "Hyundai",
    location: "Visakhapatnam",
    pricePerDay: 900,
    availability: true,
    description: "Compact car, easy to drive and park.",
    imageUrl: "/assets/santro.png",
    category: "Mini"
  },
  {
    name: "Maruti Suzuki Alto",
    type: "Mini",
    brand: "Maruti Suzuki",
    location: "Visakhapatnam",
    pricePerDay: 800,
    availability: true,
    description: "India's favorite small car, great mileage.",
    imageUrl: "/assets/alto.png",
    category: "Mini"
  },
  {
    name: "Renault Kwid",
    type: "Mini",
    brand: "Renault",
    location: "Visakhapatnam",
    pricePerDay: 950,
    availability: true,
    description: "Sporty mini hatchback with style.",
    imageUrl: "/assets/kwid.png",
    category: "Mini"
  },

  // Mini - Bheemli
  {
    name: "Tata Tiago",
    type: "Mini",
    brand: "Tata",
    location: "Bheemli",
    pricePerDay: 900,
    availability: true,
    description: "Economical and comfortable mini car.",
    imageUrl: "/assets/tiago.png",
    category: "Mini"
  },
  {
    name: "Renault Kwid",
    type: "Mini",
    brand: "Renault",
    location: "Bheemli",
    pricePerDay: 950,
    availability: true,
    description: "Sporty mini hatchback with style.",
    imageUrl: "/assets/kwid.png",
    category: "Mini"
  },

  // Mini - Siripuram
  {
    name: "Datsun Go",
    type: "Mini",
    brand: "Datsun",
    location: "Siripuram",
    pricePerDay: 850,
    availability: true,
    description: "Affordable and easy to maintain.",
    imageUrl: "/assets/datsun.png",
    category: "Mini"
  },
  {
    name: "Tata Tiago",
    type: "Mini",
    brand: "Tata",
    location: "Siripuram",
    pricePerDay: 900,
    availability: true,
    description: "Economical and comfortable mini car.",
    imageUrl: "/assets/tiago.png",
    category: "Mini"
  },

  // Premium - Visakhapatnam
  {
    name: "BMW 5 Series",
    type: "Premium",
    brand: "BMW",
    location: "Visakhapatnam",
    pricePerDay: 6500,
    availability: true,
    description: "Luxury sedan for a premium experience.",
    imageUrl: "/assets/bmw5.png",
    category: "Premium"
  },
  {
    name: "Mercedes-Benz E-Class",
    type: "Premium",
    brand: "Mercedes-Benz",
    location: "Visakhapatnam",
    pricePerDay: 7000,
    availability: true,
    description: "Top-tier comfort and performance.",
    imageUrl: "/assets/benzeclass.png",
    category: "Premium"
  },

  // Premium - Bheemli
  {
    name: "Audi A6",
    type: "Premium",
    brand: "Audi",
    location: "Bheemli",
    pricePerDay: 6800,
    availability: true,
    description: "Luxury and technology in one package.",
    imageUrl: "/assets/audi.png",
    category: "Premium"
  },
  {
    name: "Mercedes-Benz E-Class",
    type: "Premium",
    brand: "Mercedes-Benz",
    location: "Bheemli",
    pricePerDay: 7000,
    availability: true,
    description: "Top-tier comfort and performance.",
    imageUrl: "/assets/benzeclass.png",
    category: "Premium"
  },

  // Premium - Siripuram
  {
    name: "Jaguar XF",
    type: "Premium",
    brand: "Jaguar",
    location: "Siripuram",
    pricePerDay: 7200,
    availability: true,
    description: "British luxury and performance.",
    imageUrl: "/assets/jaguar.png",
    category: "Premium"
  },
  {
    name: "Mercedes-Benz E-Class",
    type: "Premium",
    brand: "Mercedes-Benz",
    location: "Siripuram",
    pricePerDay: 7000,
    availability: true,
    description: "Top-tier comfort and performance.",
    imageUrl: "/assets/benzeclass.png",
    category: "Premium"
  },

  // Motorbikes - Visakhapatnam
  {
    name: "Royal Enfield Classic 350",
    type: "Motorbike",
    brand: "Royal Enfield",
    location: "Visakhapatnam",
    pricePerDay: 600,
    availability: true,
    description: "Iconic cruiser bike with classic looks.",
    imageUrl: "/assets/classic.png",
    category: "Motorbike"
  },
  {
    name: "Bajaj Pulsar 150",
    type: "Motorbike",
    brand: "Bajaj",
    location: "Visakhapatnam",
    pricePerDay: 400,
    availability: true,
    description: "Popular street bike, reliable and efficient.",
    imageUrl: "/assets/pulsar.png",
    category: "Motorbike"
  },

  // Motorbikes - Bheemli
  {
    name: "TVS Apache RTR 160",
    type: "Motorbike",
    brand: "TVS",
    location: "Bheemli",
    pricePerDay: 420,
    availability: true,
    description: "Sporty bike for city rides.",
    imageUrl: "/assets/rtr160.png",
    category: "Motorbike"
  },
  {
    name: "Royal Enfield Classic 350",
    type: "Motorbike",
    brand: "Royal Enfield",
    location: "Bheemli",
    pricePerDay: 600,
    availability: true,
    description: "Iconic cruiser bike with classic looks.",
    imageUrl: "/assets/classic.png",
    category: "Motorbike"
  },

  // Motorbikes - Siripuram
  {
    name: "Honda Activa 6G",
    type: "Scooter",
    brand: "Honda",
    location: "Siripuram",
    pricePerDay: 300,
    availability: true,
    description: "India's favorite scooter.",
    imageUrl: "/assets/activa.png",
    category: "Motorbike"
  },
  {
    name: "TVS Apache RTR 160",
    type: "Motorbike",
    brand: "TVS",
    location: "Siripuram",
    pricePerDay: 420,
    availability: true,
    description: "Sporty bike for city rides.",
    imageUrl: "/assets/rtr160.png",
    category: "Motorbike"
  },

  // Machinery - Visakhapatnam
  {
    name: "JCB 3DX",
    type: "JCB",
    brand: "JCB",
    location: "Visakhapatnam",
    pricePerDay: 2500,
    availability: true,
    description: "Efficient backhoe loader for construction.",
    imageUrl: "/assets/jcb.png",
    category: "Machinery"
  },
  {
    name: "Tata Pickup Truck",
    type: "Pickup Truck",
    brand: "Tata",
    location: "Visakhapatnam",
    pricePerDay: 1200,
    availability: true,
    description: "Reliable pickup for heavy loads.",
    imageUrl: "/assets/tatapickup.png",
    category: "Machinery"
  },

  // Machinery - Bheemli
  {
    name: "Mahindra Blazo Tipper",
    type: "Tipper",
    brand: "Mahindra",
    location: "Bheemli",
    pricePerDay: 2000,
    availability: true,
    description: "Heavy-duty tipper for construction.",
    imageUrl: "/assets/blazo.png",
    category: "Machinery"
  },
  {
    name: "Tata Pickup Truck",
    type: "Pickup Truck",
    brand: "Tata",
    location: "Bheemli",
    pricePerDay: 1200,
    availability: true,
    description: "Reliable pickup for heavy loads.",
    imageUrl: "/assets/tatapickup.png",
    category: "Machinery"
  },

  // Machinery - Siripuram
  {
    name: "Ashok Leyland Dost",
    type: "Pickup Truck",
    brand: "Ashok Leyland",
    location: "Siripuram",
    pricePerDay: 1100,
    availability: true,
    description: "Compact and efficient pickup truck.",
    imageUrl: "/assets/Leyland.png",
    category: "Machinery"
  },
      
  {
    name: "Mahindra Blazo Tipper",
    type: "Tipper",
    brand: "Mahindra",
    location: "Siripuram",
    pricePerDay: 2000,
    availability: true,
    description: "Heavy-duty tipper for construction.",
    imageUrl: "/assets/blazo.png",
    category: "Machinery"
  },
    ];

    Vehicle.insertMany(vehicles)
      .then(() => {
        console.log("Vehicles inserted!");
        mongoose.connection.close();
      })
      .catch(err => {
        console.error("Error inserting vehicles:", err);
        mongoose.connection.close();
      });
  })
  .catch(err => {
    console.error("Error connecting to MongoDB:", err);
  });
