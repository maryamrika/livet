class DateService {
  static Timestamp(expires) {
    return new Date().getTime() + (expires * 1000);
  }
  static getTimestamp() {
    return new Date().getTime();
  }
  static formatDateTime(date = '', separator = '/') {
    const adaptedDate = new Date(date);
    const day = DateService.addZero(adaptedDate.getDate());
    const month = DateService.addZero(adaptedDate.getMonth());
    const hour = DateService.addZero(adaptedDate.getHours());
    const minute = DateService.addZero(adaptedDate.getMinutes());
    return `${day}${separator}${month}${separator}${adaptedDate.getFullYear()} ${hour}:${minute}`;
  }
  static addZero(date) {
    return date < 10 ? `0${date}` : date;
  }
}

export default DateService;
