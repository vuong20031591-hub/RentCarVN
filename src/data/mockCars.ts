export interface Car {
  id: string;
  slug: string;
  name: string;
  images: string[];
  seats: number;
  transmission: 'AT' | 'MT';
  fuel: 'xăng' | 'dầu' | 'điện' | 'hybrid';
  luggage: number;
  features: string[];
  rating: number;
  reviews: number;
  location: string;
  pricePerDay: number;
  badges: string[];
  brand: string;
  year: number;
  available: boolean;
  mileage: number;
  fuelConsumption: string;
  description?: string;
}

export const mockCars: Car[] = [
  {
    id: '1',
    slug: 'toyota-vios-2023',
    name: 'Toyota Vios 1.5G 2023',
    images: [
      'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    ],
    seats: 5,
    transmission: 'AT',
    fuel: 'xăng',
    luggage: 2,
    features: ['Camera lùi', 'Apple CarPlay', 'Cảm biến lùi', 'Bluetooth', 'USB', 'Điều hòa tự động'],
    rating: 4.7,
    reviews: 123,
    location: 'Q.1, TP.HCM',
    pricePerDay: 780000,
    badges: ['Tự lái', 'Đặt nhanh'],
    brand: 'Toyota',
    year: 2023,
    available: true,
    mileage: 15000,
    fuelConsumption: '6.5L/100km',
    description: 'Toyota Vios - mẫu sedan hạng B phổ biến với thiết kế hiện đại, tiết kiệm nhiên liệu.'
  },
  {
    id: '2',
    slug: 'kia-sedona-2022',
    name: 'Kia Sedona 2.2D 2022',
    images: [
      'https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=800&q=80',
      'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80',
    ],
    seats: 7,
    transmission: 'AT',
    fuel: 'dầu',
    luggage: 4,
    features: ['Camera 360', 'Cửa sổ trời', 'Ghế chỉnh điện', 'Màn hình giải trí', 'Điều hòa 3 vùng', 'Cảm biến áp suất lốp'],
    rating: 4.6,
    reviews: 89,
    location: 'Q.2, TP.HCM',
    pricePerDay: 1350000,
    badges: ['Gia đình', 'Premium'],
    brand: 'Kia',
    year: 2022,
    available: true,
    mileage: 25000,
    fuelConsumption: '7.8L/100km',
    description: 'Kia Sedona - MPV cao cấp 7 chỗ rộng rãi, phù hợp cho gia đình và du lịch nhóm.'
  },
  {
    id: '3',
    slug: 'vinfast-lux-a-2021',
    name: 'VinFast Lux A2.0 2021',
    images: [
      'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=800&q=80',
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80',
    ],
    seats: 5,
    transmission: 'AT',
    fuel: 'xăng',
    luggage: 3,
    features: ['Camera 360', 'HUD', 'Ghế massage', 'Lái bán tự động', 'Phanh tự động khẩn cấp', 'Âm thanh 13 loa'],
    rating: 4.5,
    reviews: 67,
    location: 'Q.7, TP.HCM',
    pricePerDay: 990000,
    badges: ['Sang trọng', 'Công nghệ'],
    brand: 'VinFast',
    year: 2021,
    available: true,
    mileage: 18000,
    fuelConsumption: '8.5L/100km',
    description: 'VinFast Lux A2.0 - Sedan sang trọng thương hiệu Việt với công nghệ hiện đại.'
  },
  {
    id: '4',
    slug: 'mazda-cx5-2023',
    name: 'Mazda CX-5 2.0 Premium 2023',
    images: [
      'https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/40b84b66-8ac2-4bb2-9e30-d2350c34a251/2eed9656-e435-4150-954c-2bdccb681921.png',
      'https://npr.brightspotcdn.com/dims4/default/ab4223c/2147483647/strip/true/crop/3792x2133+0+215/resize/1200x675!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F37%2Fff%2F12e0e0144cc7b23d400ec642372f%2Fmazda4.jpg',
    ],
    seats: 5,
    transmission: 'AT',
    fuel: 'xăng',
    luggage: 3,
    features: ['Camera lùi', 'Cảm biến va chạm', 'Cruise Control', 'Ghế da', 'Apple CarPlay', 'Android Auto'],
    rating: 4.8,
    reviews: 156,
    location: 'Q.3, TP.HCM',
    pricePerDay: 1100000,
    badges: ['SUV', 'Tiết kiệm'],
    brand: 'Mazda',
    year: 2023,
    available: true,
    mileage: 8000,
    fuelConsumption: '7.0L/100km',
    description: 'Mazda CX-5 - SUV 5 chỗ phong cách, tiết kiệm nhiên liệu với công nghệ SkyActiv.'
  },
  {
    id: '5',
    slug: 'honda-city-2023',
    name: 'Honda City RS 2023',
    images: [
      'https://hondaankhanh.vn/wp-content/uploads/2022/05/ngoai-that-honda-city-rs-2023.jpg',
      'https://otohondaquan2.vn/wp-content/uploads/2021/08/honda-city-rs-facelift-2023-2.jpg',
    ],
    seats: 5,
    transmission: 'AT',
    fuel: 'xăng',
    luggage: 2,
    features: ['Honda Sensing', 'Paddle Shift', 'Remote Engine Start', 'LED', 'Keyless', 'Màn hình 8 inch'],
    rating: 4.6,
    reviews: 98,
    location: 'Q.Bình Thạnh, TP.HCM',
    pricePerDay: 850000,
    badges: ['Thể thao', 'An toàn'],
    brand: 'Honda',
    year: 2023,
    available: true,
    mileage: 12000,
    fuelConsumption: '5.6L/100km',
    description: 'Honda City RS - Sedan hạng B thể thao với gói công nghệ an toàn Honda Sensing.'
  },
  {
    id: '6',
    slug: 'mercedes-e200-2022',
    name: 'Mercedes-Benz E200 2022',
    images: [
      'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
    ],
    seats: 5,
    transmission: 'AT',
    fuel: 'xăng',
    luggage: 3,
    features: ['MBUX', 'Burmester', 'Air Body Control', 'Ambient Light 64 màu', 'Parking Assist', 'Ghế nhớ vị trí'],
    rating: 4.9,
    reviews: 234,
    location: 'Q.1, TP.HCM',
    pricePerDay: 2500000,
    badges: ['Luxury', 'Business'],
    brand: 'Mercedes-Benz',
    year: 2022,
    available: true,
    mileage: 15000,
    fuelConsumption: '7.8L/100km',
    description: 'Mercedes-Benz E200 - Sedan hạng sang với công nghệ và tiện nghi đẳng cấp.'
  }
];

export const getCarBySlug = (slug: string): Car | undefined => {
  return mockCars.find(car => car.slug === slug);
};

export const filterCars = (filters: {
  seats?: number[];
  transmission?: string[];
  priceRange?: [number, number];
  brand?: string[];
  fuel?: string[];
}): Car[] => {
  return mockCars.filter(car => {
    if (filters.seats && filters.seats.length > 0 && !filters.seats.includes(car.seats)) {
      return false;
    }
    if (filters.transmission && filters.transmission.length > 0 && !filters.transmission.includes(car.transmission)) {
      return false;
    }
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      if (car.pricePerDay < min || car.pricePerDay > max) {
        return false;
      }
    }
    if (filters.brand && filters.brand.length > 0 && !filters.brand.includes(car.brand)) {
      return false;
    }
    if (filters.fuel && filters.fuel.length > 0 && !filters.fuel.includes(car.fuel)) {
      return false;
    }
    return true;
  });
};