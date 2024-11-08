// 암호화 유틸리티 함수들
const CryptoUtil = {
  // AES 암호화
  encryptAES: (text, key) => {
    return CryptoJS.AES.encrypt(text, key).toString();
  },

  // AES 복호화
  decryptAES: (ciphertext, key) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  },

  // DES 암호화
  encryptDES: (text, key) => {
    return CryptoJS.DES.encrypt(text, key).toString();
  },

  // DES 복호화
  decryptDES: (ciphertext, key) => {
    const bytes = CryptoJS.DES.decrypt(ciphertext, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  },

  // Base64 인코딩
  encodeBase64: (text) => {
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
  },

  // Base64 디코딩
  decodeBase64: (encoded) => {
    return CryptoJS.enc.Base64.parse(encoded).toString(CryptoJS.enc.Utf8);
  },

  // SHA-256 해시
  hashSHA256: (text) => {
    return CryptoJS.SHA256(text).toString();
  }
}; 