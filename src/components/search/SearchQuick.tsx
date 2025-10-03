import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Clock, Search } from 'lucide-react';
import { format, addDays } from 'date-fns';
import { vi } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { DateRange } from 'react-day-picker';
import { cn } from '@/lib/utils';

const SearchQuick = ({ className }: { className?: string }) => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('TP.HCM');
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 2),
  });

  const handleSearch = () => {
    // Navigate to search page with query params
    const params = new URLSearchParams({
      location,
      from: dateRange?.from?.toISOString() || '',
      to: dateRange?.to?.toISOString() || '',
    });
    navigate(`/search?${params.toString()}`);
  };

  return (
    <div className={cn('bg-card rounded-2xl shadow-xl p-6', className)}>
      <div className="grid gap-4 lg:grid-cols-4">
        {/* Location Input */}
        <div className="lg:col-span-1">
          <Label className="text-sm font-medium mb-2 block">
            <MapPin className="inline h-4 w-4 mr-1" />
            Địa điểm
          </Label>
          <Input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Nhập địa điểm..."
            className="h-12"
          />
        </div>

        {/* Date Range Picker */}
        <div className="lg:col-span-2">
          <Label className="text-sm font-medium mb-2 block">
            <Calendar className="inline h-4 w-4 mr-1" />
            Ngày thuê - Ngày trả
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  'w-full h-12 justify-start text-left font-normal',
                  !dateRange && 'text-muted-foreground'
                )}
              >
                <Calendar className="mr-2 h-4 w-4" />
                {dateRange?.from ? (
                  dateRange.to ? (
                    <>
                      {format(dateRange.from, 'dd/MM/yyyy', { locale: vi })} -{' '}
                      {format(dateRange.to, 'dd/MM/yyyy', { locale: vi })}
                    </>
                  ) : (
                    format(dateRange.from, 'dd/MM/yyyy', { locale: vi })
                  )
                ) : (
                  <span>Chọn ngày thuê</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                initialFocus
                mode="range"
                defaultMonth={dateRange?.from}
                selected={dateRange}
                onSelect={setDateRange}
                numberOfMonths={2}
                locale={vi}
                disabled={(date) => date < new Date()}
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Search Button */}
        <div className="lg:col-span-1">
          <Label className="text-sm font-medium mb-2 block lg:invisible">
            &nbsp;
          </Label>
          <Button
            onClick={handleSearch}
            className="w-full h-12 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold gap-2"
          >
            <Search className="h-5 w-5" />
            Tìm xe
          </Button>
        </div>
      </div>

      {/* Quick Time Options */}
      <div className="mt-4 flex flex-wrap gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setDateRange({
            from: new Date(),
            to: addDays(new Date(), 1),
          })}
          className="text-xs"
        >
          <Clock className="h-3 w-3 mr-1" />
          1 ngày
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setDateRange({
            from: new Date(),
            to: addDays(new Date(), 3),
          })}
          className="text-xs"
        >
          <Clock className="h-3 w-3 mr-1" />
          3 ngày
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setDateRange({
            from: new Date(),
            to: addDays(new Date(), 7),
          })}
          className="text-xs"
        >
          <Clock className="h-3 w-3 mr-1" />
          1 tuần
        </Button>
      </div>
    </div>
  );
};

export default SearchQuick;