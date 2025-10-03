import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, MapPin, Users, Fuel, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Car } from '@/data/mockCars';
import { formatPrice } from '@/lib/formatters';
import { cardHover } from '@/lib/motion';
import { cn } from '@/lib/utils';

interface CardCarProps {
  car: Car;
  className?: string;
}

const CardCar = ({ car, className }: CardCarProps) => {
  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className={cn('h-full', className)}
    >
      <Link to={`/car/${car.slug}`}>
        <Card className="h-full overflow-hidden hover:shadow-hover transition-shadow duration-smooth cursor-pointer bg-card">
          {/* Image Container */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={car.images[0]}
              alt={car.name}
              className="w-full h-full object-cover transition-transform duration-smooth hover:scale-105"
            />
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-wrap gap-2">
              {car.badges.map((badge) => (
                <Badge
                  key={badge}
                  className="bg-card/90 text-foreground backdrop-blur-sm border-0"
                >
                  {badge}
                </Badge>
              ))}
            </div>
            {/* Price Badge */}
            <div className="absolute bottom-3 right-3">
              <div className="bg-primary text-primary-foreground px-3 py-1.5 rounded-lg font-semibold">
                {formatPrice(car.pricePerDay)}
                <span className="text-xs font-normal ml-1">/ngày</span>
              </div>
            </div>
          </div>

          <CardContent className="p-4">
            {/* Car Name */}
            <h3 className="font-semibold text-lg mb-2 line-clamp-1">
              {car.name}
            </h3>

            {/* Rating and Reviews */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-warning text-warning" />
                <span className="font-medium text-sm">{car.rating}</span>
              </div>
              <span className="text-muted-foreground text-sm">
                ({car.reviews} đánh giá)
              </span>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>{car.seats} chỗ</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Settings className="h-4 w-4" />
                <span>{car.transmission === 'AT' ? 'Tự động' : 'Số sàn'}</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Fuel className="h-4 w-4" />
                <span className="capitalize">{car.fuel}</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="line-clamp-1">{car.location}</span>
              </div>
            </div>

            {/* Features Preview */}
            <div className="flex flex-wrap gap-1">
              {car.features.slice(0, 3).map((feature, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-md"
                >
                  {feature}
                </span>
              ))}
              {car.features.length > 3 && (
                <span className="text-xs px-2 py-1 text-muted-foreground">
                  +{car.features.length - 3}
                </span>
              )}
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default CardCar;