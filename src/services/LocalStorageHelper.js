import qs from 'qs';

class LocalStorageHelper {
  static saveObject(name, obj) {
    const serializedObj = qs.stringify(obj);
    localStorage.setItem(name, serializedObj);
  }
  static getObject(key) {
    const value = localStorage.getItem(key);
    return value && qs.parse(value);
  }
}

export default LocalStorageHelper;
