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
      chrome.storage.local.get(['algorithm', 'secretKey'], (result) => {
        resolve(result);
      });
    });
  }
}; 