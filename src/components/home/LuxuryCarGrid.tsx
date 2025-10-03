import { motion } from 'framer-motion';
import { Users, Fuel, Settings, Star } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';
import { Badge } from '@/components/ui/badge';

const luxuryCars = [
  {
    id: 1,
    name: 'Mercedes S-Class',
    seats: 4,
    category: 'Sedan hạng sang',
    image: 'https://hips.hearstapps.com/hmg-prod/images/2022-mercedes-benz-s500-4matic-123-1642184026.jpg?crop=0.458xw:0.387xh;0.316xw,0.418xh&resize=2048:*',
    price: '3,500,000',
    rating: 4.9,
    features: ['Tự lái', 'Có tài xế'],
  },
  {
    id: 2,
    name: 'Toyota Camry',
    seats: 5,
    category: 'Sedan thương gia',
    image: 'https://hips.hearstapps.com/hmg-prod/images/2025-toyota-camry-xse-awd-123-66993cc94cc40.jpg?crop=0.580xw:0.489xh;0.137xw,0.397xh&resize=1200:*',
    price: '1,200,000',
    rating: 4.7,
    features: ['Tự lái'],
  },
  {
    id: 3,
    name: 'Kia Carnival',
    seats: 7,
    category: 'SUV gia đình',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Kia_Carnival_KA4_red_diplomatic_%281%29_%28cropped%29.jpg',
    price: '1,800,000',
    rating: 4.8,
    features: ['Tự lái', 'Có tài xế'],
  },
  {
    id: 4,
    name: 'Ford Everest',
    seats: 7,
    category: 'SUV địa hình',
    image: 'https://xeford-miennam.com/wp-content/uploads/2023/01/IMG_2040.jpeg',
    price: '1,500,000',
    rating: 4.6,
    features: ['Tự lái'],
  },
  {
    id: 5,
    name: 'Hyundai Solati',
    seats: 16,
    category: 'Minibus',
    image: 'https://hyundai-mienbac.com/wp-content/uploads/2019/06/hyundai-solati-16-cho-ngoi-h350-2-1.jpg',
    price: '2,500,000',
    rating: 4.5,
    features: ['Có tài xế'],
  },
  {
    id: 6,
    name: 'Mercedes Sprinter',
    seats: 16,
    category: 'Minibus cao cấp',
    image: 'https://giaxeoto.vn/admin/upload/images/resize/640-mercedes-benz-sprinter-2025-ra-mat.jpg',
    price: '3,000,000',
    rating: 4.8,
    features: ['Có tài xế', 'VIP'],
  },
];

const LuxuryCarGrid = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Các Dòng Xe Từ 4 Đến 16 Chỗ Sang Trọng
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Đa dạng phương tiện từ sedan hạng sang đến minibus, đáp ứng mọi nhu cầu di chuyển
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {luxuryCars.map((car) => (
            <motion.div
              key={car.id}
              variants={staggerItem}
              className="group bg-card rounded-xl shadow-card overflow-hidden hover:shadow-hover transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  {car.features.map((feature) => (
                    <Badge key={feature} variant="secondary" className="bg-white/90 backdrop-blur">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1">
                  <Star className="h-4 w-4 fill-warning text-warning" />
                  <span className="text-sm font-medium">{car.rating}</span>
                </div>
              </div>
              
              <div className="p-5">
                <div className="mb-3">
                  <h3 className="text-lg font-semibold mb-1">{car.name}</h3>
                  <p className="text-sm text-muted-foreground">{car.category}</p>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{car.seats} chỗ</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Settings className="h-4 w-4" />
                    <span>Tự động</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Fuel className="h-4 w-4" />
                    <span>Xăng</span>
                  </div>
                </div>
                
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-bold text-primary">
                      {car.price}đ
                    </p>
                    <p className="text-xs text-muted-foreground">/ ngày</p>
                  </div>
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                    Đặt ngay
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LuxuryCarGrid;