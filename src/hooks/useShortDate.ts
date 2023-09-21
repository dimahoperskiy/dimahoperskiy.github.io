import { useTranslation } from 'react-i18next';

const useShortDate = () => {
  const { t } = useTranslation();

  return (year: number, month: number, day: number) =>
    t('intlDateTime', {
      val: new Date(Date.UTC(year, month - 1, day)),
      formatParams: {
        val: {
          year: 'numeric',
          month: 'short',
        },
      },
    });
};

export default useShortDate;
