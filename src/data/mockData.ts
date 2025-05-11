
export type Restaurant = {
  id: string;
  name: string;
  image: string;
  rating: number;
  distance: string;
  estimatedDeliveryTime: string;
  categories: string[];
  priceLevel: string;
  address: string;
  openingHours: string;
  isOpen: boolean;
};

export type MenuItem = {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  image: string;
  price: number;
  options?: MenuItemOption[];
  categoryId: string;
};

export type MenuItemOption = {
  id: string;
  name: string;
  choices: {
    id: string;
    name: string;
    price: number;
  }[];
};

export type MenuCategory = {
  id: string;
  restaurantId: string;
  name: string;
};

export type CartItem = {
  id: string;
  menuItem: MenuItem;
  quantity: number;
  selectedOptions: {
    optionId: string;
    choiceId: string;
  }[];
  specialInstructions?: string;
};

export type Address = {
  id: string;
  label: string;
  fullAddress: string;
  isDefault: boolean;
};

export const mockFoodCategories = [
  { id: "1", name: "อาหารไทย", image: "/placeholder.svg" },
  { id: "2", name: "อาหารอิตาเลียน", image: "/placeholder.svg" },
  { id: "3", name: "ของหวาน", image: "/placeholder.svg" },
  { id: "4", name: "อาหารเช้า", image: "/placeholder.svg" },
  { id: "5", name: "อาหารเส้น", image: "/placeholder.svg" },
  { id: "6", name: "อาหารทะเล", image: "/placeholder.svg" },
  { id: "8", name: "อาหารฟิวชั่น", image: "/placeholder.svg" },
];

export const mockRestaurants: Restaurant[] = [
  {
    id: "1",
    name: "ร้านส้มตำแซ่บนัว",
    image: "/placeholder.svg",
    rating: 4.8,
    distance: "1.2 กม.",
    estimatedDeliveryTime: "15-25 นาที",
    categories: ["อาหารไทย", "ส้มตำ"],
    priceLevel: "$$",
    address: "123 ถนนสุขุมวิท ซอย 55",
    openingHours: "10:00 - 22:00",
    isOpen: true
  },
  {
    id: "2",
    name: "พิซซ่าเฮาส์",
    image: "/placeholder.svg",
    rating: 4.5,
    distance: "2.8 กม.",
    estimatedDeliveryTime: "25-35 นาที",
    categories: ["อาหารอิตาเลียน", "พิซซ่า"],
    priceLevel: "$$$",
    address: "456 ถนนสีลม",
    openingHours: "11:00 - 23:00",
    isOpen: true
  },
  {
    id: "3",
    name: "ข้าวมันไก่ประตูน้ำ",
    image: "/placeholder.svg",
    rating: 4.7,
    distance: "0.5 กม.",
    estimatedDeliveryTime: "10-20 นาที",
    categories: ["อาหารไทย", "ข้าวมันไก่"],
    priceLevel: "$",
    address: "789 ถนนเพชรบุรี",
    openingHours: "07:00 - 20:00",
    isOpen: true
  },
  {
    id: "4",
    name: "บิงซูคาเฟ่",
    image: "/placeholder.svg",
    rating: 4.6,
    distance: "3.1 กม.",
    estimatedDeliveryTime: "20-30 นาที",
    categories: ["ของหวาน", "บิงซู"],
    priceLevel: "$$",
    address: "101 ถนนพระราม 9",
    openingHours: "10:00 - 22:00",
    isOpen: true
  },
  {
    id: "5",
    name: "ราเมงโกะ",
    image: "/placeholder.svg",
    rating: 4.9,
    distance: "4.2 กม.",
    estimatedDeliveryTime: "25-40 นาที",
    categories: ["อาหารญี่ปุ่น", "ราเมง"],
    priceLevel: "$$$",
    address: "202 ถนนอโศก",
    openingHours: "11:00 - 21:00",
    isOpen: true
  },
  {
    id: "6",
    name: "ก๋วยเตี๋ยวเรือท่าช้าง",
    image: "/placeholder.svg",
    rating: 4.3,
    distance: "1.8 กม.",
    estimatedDeliveryTime: "15-30 นาที",
    categories: ["อาหารไทย", "ก๋วยเตี๋ยว"],
    priceLevel: "$",
    address: "303 ถนนพระอาทิตย์",
    openingHours: "08:00 - 20:00",
    isOpen: false
  }
];

export const mockMenuCategories: MenuCategory[] = [
  { id: "c1", restaurantId: "1", name: "ส้มตำ" },
  { id: "c2", restaurantId: "1", name: "ต้มแซ่บ" },
  { id: "c3", restaurantId: "1", name: "ข้าวเหนียว" },
  { id: "c4", restaurantId: "1", name: "เครื่องดื่ม" },
  { id: "c5", restaurantId: "2", name: "พิซซ่า" },
  { id: "c6", restaurantId: "2", name: "พาสต้า" },
];

export const mockMenuItems: MenuItem[] = [
  {
    id: "m1",
    restaurantId: "1",
    name: "ส้มตำไทย",
    description: "ส้มตำรสชาติจัดจ้าน ใส่มะละกอเส้นสด มะเขือเทศ กระเทียม พริก ถั่วลิสง น้ำตาล มะนาว",
    image: "/placeholder.svg",
    price: 80,
    categoryId: "c1",
    options: [
      {
        id: "o1",
        name: "ความเผ็ด",
        choices: [
          { id: "ch1", name: "ไม่เผ็ด", price: 0 },
          { id: "ch2", name: "เผ็ดน้อย", price: 0 },
          { id: "ch3", name: "เผ็ดกลาง", price: 0 },
          { id: "ch4", name: "เผ็ดมาก", price: 0 }
        ]
      },
      {
        id: "o2",
        name: "เพิ่มเติม",
        choices: [
          { id: "ch5", name: "ไข่เค็ม", price: 15 },
          { id: "ch6", name: "ปูม้า", price: 30 },
          { id: "ch7", name: "กุ้งสด", price: 35 }
        ]
      }
    ]
  },
  {
    id: "m2",
    restaurantId: "1",
    name: "ส้มตำปูปลาร้า",
    description: "ส้มตำใส่ปลาร้า รสชาติเข้มข้น เผ็ดร้อน",
    image: "/placeholder.svg",
    price: 90,
    categoryId: "c1",
    options: [
      {
        id: "o1",
        name: "ความเผ็ด",
        choices: [
          { id: "ch1", name: "ไม่เผ็ด", price: 0 },
          { id: "ch2", name: "เผ็ดน้อย", price: 0 },
          { id: "ch3", name: "เผ็ดกลาง", price: 0 },
          { id: "ch4", name: "เผ็ดมาก", price: 0 }
        ]
      }
    ]
  },
  {
    id: "m3",
    restaurantId: "1",
    name: "ต้มแซ่บกระดูกหมู",
    description: "ต้มแซ่บกระดูกหมูรสเผ็ดร้อน ใส่ใบมะกรูด ข่า ตะไคร้ หอมแดง",
    image: "/placeholder.svg",
    price: 120,
    categoryId: "c2"
  }
];

export const mockPromotions = [
  {
    id: "1",
    title: "ส่วนลด 50 บาท",
    description: "สำหรับการสั่งซื้อขั้นต่ำ 300 บาท",
    image: "/placeholder.svg",
    code: "SAVE50"
  },
  {
    id: "2",
    title: "ส่งฟรีทุกออเดอร์",
    description: "เมื่อสั่งซื้อ 500 บาท ขึ้นไป",
    image: "/placeholder.svg",
    code: "FREESHIP"
  },
  {
    id: "3",
    title: "ส่วนลด 15%",
    description: "สำหรับลูกค้าใหม่ที่สั่งซื้อครั้งแรก",
    image: "/placeholder.svg",
    code: "NEWFOOD15"
  }
];

export const mockAddresses: Address[] = [
  {
    id: "1",
    label: "บ้าน",
    fullAddress: "123 หมู่ 4 ถนนเพชรเกษม แขวงหนองค้างพลู เขตหนองแขม กรุงเทพฯ 10160",
    isDefault: true
  },
  {
    id: "2",
    label: "ที่ทำงาน",
    fullAddress: "อาคารเอ็มควอเทียร์ ชั้น 5 เลขที่ 689 ถนนสุขุมวิท แขวงคลองตันเหนือ เขตวัฒนา กรุงเทพฯ 10110",
    isDefault: false
  }
];
