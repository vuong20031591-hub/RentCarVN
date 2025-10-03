import { motion } from 'framer-motion';
import { Heart, MapPin, Plane, Camera } from 'lucide-react';
import { staggerItem } from '@/lib/motion';
import TiltedCard from '@/components/ui/tilted-card';

const services = [
  {
    id: 1,
    title: 'Xe Phục Vụ Cưới Hỏi',
    description: 'Dàn xe sang trọng cho ngày trọng đại',
    icon: Heart,
    color: 'bg-gradient-to-br from-pink-500 to-rose-400',
    link: '/search?service=wedding',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Taxi Đi Tỉnh',
    description: 'Đưa đón tận nơi, giá cả hợp lý',
    icon: MapPin,
    color: 'bg-gradient-to-br from-blue-500 to-cyan-400',
    link: '/search?service=province',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Taxi Tân Sơn Nhất',
    description: 'Đón sân bay 24/7, đúng giờ',
    icon: Plane,
    color: 'bg-gradient-to-br from-purple-500 to-indigo-400',
    link: '/search?service=airport',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop&q=80',
  },
  {
    id: 4,
    title: 'Thuê Xe Đi Tour',
    description: 'Xe du lịch chất lượng cao',
    icon: Camera,
    color: 'bg-gradient-to-br from-green-500 to-emerald-400',
    link: '/search?service=tour',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop&q=80',
  },
];

const ServiceCards = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={service.id}
            variants={staggerItem}
          >
            <TiltedCard
              containerHeight="320px"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={8}
              scaleOnHover={1.05}
              showTooltip={true}
              captionText={service.title}
            >
              <a
                href={service.link}
                className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 block h-full"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                {/* Content */}
                <div className="relative p-6 h-full flex flex-col justify-end text-white z-10">
                  <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 drop-shadow-lg">{service.title}</h3>
                  <p className="text-sm text-white/90 drop-shadow-md">{service.description}</p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </a>
            </TiltedCard>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ServiceCards;