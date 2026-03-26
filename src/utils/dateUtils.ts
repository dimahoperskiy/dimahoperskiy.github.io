import { useTranslation } from 'react-i18next';

export const getCurrentDateFormatted = () => {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export const calculateYearsAndMonths = (startDate: string, endDate: string) => {
  const end = new Date(endDate);
  const start = new Date(startDate);

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  months += 1;

  if (months >= 12) {
    years += 1;
    months -= 12;
  }

  return { years, months };
};

export const getYearWord = (years: number) => {
  const { t } = useTranslation();
  if (years % 10 === 1 && years % 100 !== 11) {
    return t('year1');
  } else if (
    years % 10 >= 2 &&
    years % 10 <= 4 &&
    (years % 100 < 10 || years % 100 >= 20)
  ) {
    return t('year2');
  } else {
    return t('year3');
  }
};

export const getMonthWord = (months: number) => {
  const { t } = useTranslation();
  if (months % 10 === 1 && months % 100 !== 11) {
    return t('month1');
  } else if (
    months % 10 >= 2 &&
    months % 10 <= 4 &&
    (months % 100 < 10 || months % 100 >= 20)
  ) {
    return t('month2');
  } else {
    return t('month3');
  }
};
