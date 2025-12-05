import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class StorageService {
  get<T>(key: string): T | null {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) as T : null;
  } catch (e) {
    console.error('Storage get error', e);
    return null;
    }
  }
  set<T>(key: string, value: T) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      } catch (e) {
        console.error('Storage set error', e);
      }
  }
  remove(key: string) {
    localStorage.removeItem(key);
    }
  }
