export default {
  NO_ACCESS: {
    type: 'error',
    message: 'شما قادر به انجام این کار نیستید',
    buttonCaption: 'بستن',
  },
  TOO_LATE: {
    type: 'error',
    message: 'بعد از شروع آزمون، قادر به ویرایش نیستید',
    buttonCaption: 'بستن',
  },
  ARTICLE_NOT_FOUND: {
    type: 'error',
    message: 'این آزمون وجود ندارد',
    buttonCaption: 'بستن آزمون',
  },
  NEGATIVE_PRICE: {
    type: 'error',
    message: 'قیمت نباید کمتر از صفر باشد',
    buttonCaption: 'بستن',
  },
  UNDER_DEVELOPMENT: {
    type: 'info',
    message: 'این امکان همچنان درحال پیاده‌سازی است',
    buttonCaption: 'متوجه شدم',
  },
}
