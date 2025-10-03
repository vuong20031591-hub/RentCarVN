import { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { formatPrice } from '@/lib/formatters';
import { motion, AnimatePresence } from 'framer-motion';

interface FilterBarProps {
  onFilterChange: (filters: any) => void;
  className?: string;
}

const FilterBar = ({ onFilterChange, className }: FilterBarProps) => {
  const [filters, setFilters] = useState({
    seats: [] as number[],
    transmission: [] as string[],
    fuel: [] as string[],
    brand: [] as string[],
    priceRange: [500000, 3000000] as [number, number],
  });

  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleFilterChange = (type: string, value: any) => {
    const newFilters = { ...filters };
    
    if (type === 'seats') {
      const seats = filters.seats.includes(value)
        ? filters.seats.filter(s => s !== value)
        : [...filters.seats, value];
      newFilters.seats = seats;
    } else if (type === 'transmission' || type === 'fuel' || type === 'brand') {
      const arr = filters[type] as string[];
      const updated = arr.includes(value)
        ? arr.filter(v => v !== value)
        : [...arr, value];
      newFilters[type] = updated;
    } else if (type === 'priceRange') {
      newFilters.priceRange = value;
    }

    setFilters(newFilters);
    onFilterChange(newFilters);
    updateActiveFilters(newFilters);
  };

  const updateActiveFilters = (newFilters: typeof filters) => {
    const active: string[] = [];
    if (newFilters.seats.length > 0) {
      active.push(`${newFilters.seats.join(', ')} chỗ`);
    }
    if (newFilters.transmission.length > 0) {
      active.push(newFilters.transmission.map(t => t === 'AT' ? 'Tự động' : 'Số sàn').join(', '));
    }
    if (newFilters.fuel.length > 0) {
      active.push(newFilters.fuel.join(', '));
    }
    if (newFilters.brand.length > 0) {
      active.push(newFilters.brand.join(', '));
    }
    setActiveFilters(active);
  };

  const clearFilters = () => {
    const resetFilters = {
      seats: [],
      transmission: [],
      fuel: [],
      brand: [],
      priceRange: [500000, 3000000] as [number, number],
    };
    setFilters(resetFilters);
    setActiveFilters([]);
    onFilterChange(resetFilters);
  };

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Seats Filter */}
      <div>
        <Label className="text-sm font-semibold mb-3 block">Số chỗ ngồi</Label>
        <div className="grid grid-cols-3 gap-2">
          {[4, 5, 7].map(seat => (
            <Button
              key={seat}
              variant={filters.seats.includes(seat) ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleFilterChange('seats', seat)}
              className="w-full"
            >
              {seat} chỗ
            </Button>
          ))}
        </div>
      </div>

      {/* Transmission Filter */}
      <div>
        <Label className="text-sm font-semibold mb-3 block">Hộp số</Label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="at"
              checked={filters.transmission.includes('AT')}
              onCheckedChange={(checked) => 
                handleFilterChange('transmission', 'AT')
              }
            />
            <label htmlFor="at" className="text-sm cursor-pointer">
              Tự động
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="mt"
              checked={filters.transmission.includes('MT')}
              onCheckedChange={(checked) => 
                handleFilterChange('transmission', 'MT')
              }
            />
            <label htmlFor="mt" className="text-sm cursor-pointer">
              Số sàn
            </label>
          </div>
        </div>
      </div>

      {/* Fuel Type Filter */}
      <div>
        <Label className="text-sm font-semibold mb-3 block">Nhiên liệu</Label>
        <div className="space-y-2">
          {['xăng', 'dầu', 'điện', 'hybrid'].map(fuel => (
            <div key={fuel} className="flex items-center space-x-2">
              <Checkbox
                id={fuel}
                checked={filters.fuel.includes(fuel)}
                onCheckedChange={(checked) => 
                  handleFilterChange('fuel', fuel)
                }
              />
              <label htmlFor={fuel} className="text-sm cursor-pointer capitalize">
                {fuel}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Filter */}
      <div>
        <Label className="text-sm font-semibold mb-3 block">Hãng xe</Label>
        <div className="space-y-2">
          {['Toyota', 'Honda', 'Mazda', 'Kia', 'VinFast', 'Mercedes-Benz'].map(brand => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={brand}
                checked={filters.brand.includes(brand)}
                onCheckedChange={(checked) => 
                  handleFilterChange('brand', brand)
                }
              />
              <label htmlFor={brand} className="text-sm cursor-pointer">
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <Label className="text-sm font-semibold mb-3 block">
          Giá thuê: {formatPrice(filters.priceRange[0])} - {formatPrice(filters.priceRange[1])}
        </Label>
        <Slider
          min={0}
          max={5000000}
          step={100000}
          value={filters.priceRange}
          onValueChange={(value) => handleFilterChange('priceRange', value)}
          className="mt-4"
        />
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Filter Bar */}
      <div className={`hidden lg:block ${className}`}>
        <div className="bg-card rounded-xl p-6 shadow-sm sticky top-24">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Bộ lọc
            </h3>
            {activeFilters.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                Xóa tất cả
              </Button>
            )}
          </div>
          <FilterContent />
        </div>
      </div>

      {/* Mobile Filter Sheet */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Bộ lọc
              {activeFilters.length > 0 && (
                <Badge variant="secondary" className="ml-1">
                  {activeFilters.length}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[85%] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Bộ lọc
                </span>
                {activeFilters.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                  >
                    Xóa tất cả
                  </Button>
                )}
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6 overflow-y-auto max-h-[calc(100vh-8rem)]">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Active Filters Pills */}
      {activeFilters.length > 0 && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-wrap gap-2 mt-4"
          >
            {activeFilters.map((filter, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
              >
                <Badge variant="secondary" className="gap-1 pr-1">
                  {filter}
                  <button
                    onClick={() => {
                      // Remove specific filter logic here
                    }}
                    className="ml-1 rounded-full hover:bg-secondary p-0.5"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default FilterBar;