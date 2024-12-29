// 스토리지 유틸리티 함수들
const StorageUtil = {
  // 설정 저장
  saveSettings: async (settings) => {
    return new Promise((resolve) => {
      chrome.storage.local.set(settings, resolve);
    });
  },

  // 설정 불러오기
  loadSettings: async () => {
    return new Promise((resolve) => {
      chrome.storage.local.get(['algorithm', 'secretKey', 'autoCopy'], (result) => {
        resolve(result);
      });
    });
  },

  // inputText 저장
  saveInputText: async (text) => {
    return new Promise((resolve) => {
      chrome.storage.local.set({ inputText: text }, resolve);
    });
  },

  // inputText 불러오기
  loadInputText: async () => {
    return new Promise((resolve) => {
      chrome.storage.local.get(['inputText'], (result) => {
        resolve(result.inputText || ''); // 저장된 값이 없으면 빈 문자열 반환
      });
    });
  },

  // outputText 저장
  saveOutputText: async (text) => {
    return new Promise((resolve) => {
      chrome.storage.local.set({ outputText: text }, resolve);
    });
  },

  // outputText 불러오기
  loadOutputText: async () => {
    return new Promise((resolve) => {
      chrome.storage.local.get(['outputText'], (result) => {
        resolve(result.outputText || ''); // 저장된 값이 없으면 빈 문자열 반환
      });
    });
  }
};