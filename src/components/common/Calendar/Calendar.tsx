import dayjs from 'dayjs';

const Calendar = () => {
  const year = 2025;
  const month = 11;
  const dDay = dayjs(`${year}-12-06`);

  const startOfMonth = dayjs(new Date(year, month, 1));
  const endOfMonth = dayjs(new Date(year, month + 1, 0));
  const startDay = startOfMonth.day();
  const totalDays = endOfMonth.date();

  const dates = Array.from({ length: startDay + totalDays }, (_, index) => {
    if (index < startDay) return null;
    return index - startDay + 1;
  });

  const holidays: Record<string, string> = {
    '2025-12-25': '크리스마스',
  };

  return (
    <div className="w-full py-6 border-y border-blue-100 bg-transparent">
      <div className="grid grid-cols-7 text-center font-GowunDodum gap-2">
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <div key={day} className={`mb-3 first-letter:${day === '일' ? 'text-holiday-100' : 'text-black-200'}`}>
            {day}
          </div>
        ))}

        {dates.map((date, index) => {
          if (!date) return <div key={index} />;

          const currentDate = dayjs(new Date(year, month, date));
          const isSunday = currentDate.day() === 0;
          const holidayName = holidays[currentDate.format('YYYY-MM-DD')];

          return (
            <div
              key={index}
              className={`
                h-10 w-10 flex items-center justify-center rounded-full font-GowunDodum
                ${
                  date === dDay.date()
                    ? 'bg-blue-500 text-white-200 font-bold rounded-full'
                    : holidayName
                    ? 'text-holiday-100 font-bold'
                    : isSunday
                    ? 'text-holiday-100'
                    : 'text-black-200'
                }
              `}
            >
              <span>{date}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
