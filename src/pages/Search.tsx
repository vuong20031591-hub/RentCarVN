import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, LayoutGrid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import SearchQuick from '@/components/search/SearchQuick';
import FilterBar from '@/components/search/FilterBar';
import CardCar from '@/components/car/CardCar';
import { Skeleton } from '@/components/ui/skeleton';
import { mockCars, filterCars } from '@/data/mockCars';
import { staggerContainer, staggerItem } from '@/lib/motion';

const Search = () => {
  const [searchParams] = useSearchParams();
  const [cars, setCars] = useState(mockCars);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('price_asc');
  const [filters, setFilters] = useState({});

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    const filtered = filterCars(newFilters);
    setCars(filtered);
  };

  const handleSort = (value: string) => {
    setSortBy(value);
    const sorted = [...cars].sort((a, b) => {
      switch (value) {
        case 'price_asc':
          return a.pricePerDay - b.pricePerDay;
        case 'price_desc':
          return b.pricePerDay - a.pricePerDay;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return b.year - a.year;
        default:
          return 0;
      }
    });
    setCars(sorted);
  };

  const CarSkeleton = () => (
    <div className="space-y-3">
      <Skeleton className="aspect-[4/3] rounded-lg" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <div className="grid grid-cols-2 gap-2">
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Search Bar */}
      <section className="bg-secondary/30 py-6 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <SearchQuick />
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <div className="lg:col-span-1">
            <FilterBar onFilterChange={handleFilterChange} />
          </div>

          {/* Results Section */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-bold">
                  {loading ? (
                    <Skeleton className="h-8 w-48" />
                  ) : (
                    <>Tìm thấy {cars.length} xe</>
                  )}
                </h1>
                <p className="text-muted-foreground mt-1">
                  {searchParams.get('location') || 'Tất cả địa điểm'}
                </p>
              </div>

              <div className="flex gap-2 w-full sm:w-auto">
                {/* Sort Dropdown */}
                <Select value={sortBy} onValueChange={handleSort}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Sắp xếp theo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price_asc">Giá tăng dần</SelectItem>
                    <SelectItem value="price_desc">Giá giảm dần</SelectItem>
                    <SelectItem value="rating">Đánh giá cao</SelectItem>
                    <SelectItem value="newest">Mới nhất</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Mode Toggle */}
                <div className="hidden sm:flex gap-1">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="icon"
                    onClick={() => setViewMode('grid')}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="icon"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Results Grid/List */}
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`grid ${
                    viewMode === 'grid' 
                      ? 'md:grid-cols-2 xl:grid-cols-3' 
                      : 'grid-cols-1'
                  } gap-6`}
                >
                  {[...Array(6)].map((_, idx) => (
                    <CarSkeleton key={idx} />
                  ))}
                </motion.div>
              ) : cars.length > 0 ? (
                <motion.div
                  key={viewMode}
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className={`grid ${
                    viewMode === 'grid' 
                      ? 'md:grid-cols-2 xl:grid-cols-3' 
                      : 'grid-cols-1'
                  } gap-6`}
                >
                  {cars.map((car) => (
                    <motion.div key={car.id} variants={staggerItem}>
                      <CardCar car={car} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <SlidersHorizontal className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Không tìm thấy xe nào</h3>
                  <p className="text-muted-foreground">
                    Thử điều chỉnh bộ lọc hoặc tìm kiếm với điều kiện khác
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;