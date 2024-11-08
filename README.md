# Easy Encrypt - Chrome Extension

간단하고 안전한 텍스트 암호화/복호화를 위한 크롬 확장 프로그램입니다.

## 주요 기능

- **다양한 암호화 알고리즘 지원**
  - AES (Advanced Encryption Standard)
  - DES (Data Encryption Standard)
  - Base64 인코딩/디코딩
  - SHA-256 해시

- **사용자 친화적 인터페이스**
  - 직관적인 UI/UX
  - 자동 클립보드 복사
  - 암호화 설정 자동 저장

## 설치 방법

1. 이 저장소를 클론 또는 다운로드합니다. 
2. Chrome 브라우저에서 `chrome://extensions`로 이동합니다.
3. 우측 상단의 "개발자 모드"를 활성화합니다.
4. "압축해제된 확장 프로그램을 로드합니다" 버튼을 클릭합니다.
5. 다운로드한 프로젝트 폴더를 선택합니다.

## 사용 방법

1. 크롬 브라우저 우측 상단의 확장 프로그램 아이콘을 클릭합니다.
2. 원하는 암호화 방식을 선택합니다.
3. 필요한 경우 암호화 키를 입력합니다. (AES, DES의 경우 필수)
4. 암호화/복호화할 텍스트를 입력합니다.
5. "Encrypt" 또는 "Decrypt" 버튼을 클릭합니다.
6. 결과가 자동으로 클립보드에 복사됩니다.

## 프로젝트 구조
easy-encrypt/
├── assets/
│ └── icons/ # 확장 프로그램 아이콘
├── js/
│ ├── crypto.js # 암호화 관련 유틸리티
│ └── storage.js # 스토리지 관련 유틸리티
├── popup/
│ ├── popup.html # 팝업 UI
│ ├── popup.css # 스타일시트
│ └── popup.js # 팝업 로직
├── thirdParty/ # 외부 라이브러리
│ ├── jquery-3.6.0.min.js
│ └── crypto-js.min.js
└── manifest.json # 확장 프로그램 설정

## 기술 스택

- HTML5
- CSS3
- JavaScript (ES6+)
- jQuery
- CryptoJS
- Chrome Extension APIs

## 보안 고려사항

- 모든 암호화/복호화는 클라이언트 측에서 수행됩니다.
- 암호화 키는 로컬에만 저장되며, 외부로 전송되지 않습니다.
- HTTPS를 통한 안전한 리소스 로딩을 보장합니다.

## 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 문의사항

버그 리포트나 기능 제안은 이메일로 문의해주세요:
- Email: skykum2004@gmail.com

## 기여하기

1. 이 저장소를 포크합니다.
2. 새로운 브랜치를 생성합니다.
3. 변경사항을 커밋합니다.
4. 브랜치에 푸시합니다.
5. Pull Request를 생성합니다.

---

# Easy Encrypt

A Chrome extension for easy text encryption and decryption supporting various algorithms.

## Features

- Multiple encryption algorithms (AES, DES, Base64, SHA-256)
- Simple and intuitive interface
- Automatic clipboard copy
- Saved user preferences
- Secure local key storage

## Installation

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension directory

## Usage

1. Click the extension icon in Chrome toolbar
2. Select encryption algorithm
3. Enter text to encrypt/decrypt
4. Enter secret key (if required)
5. Click Encrypt/Decrypt button
6. Result is automatically copied to clipboard

## Project Structure
easy-encrypt/
├── assets/
│ └── icons/ # Extension icons
├── js/
│ ├── crypto.js # Encryption utilities
│ └── storage.js # Storage utilities  
├── popup/
│ ├── popup.html # Popup UI
│ ├── popup.css # Stylesheet
│ └── popup.js # Popup logic
├── thirdParty/ # External libraries
│ ├── jquery-3.6.0.min.js
│ └── crypto-js.min.js
└── manifest.json # Extension config

## Tech Stack

- HTML5
- CSS3  
- JavaScript (ES6+)
- jQuery
- CryptoJS
- Chrome Extension APIs

## Security Considerations

- All encryption/decryption is performed client-side
- Encryption keys are stored locally only and never transmitted
- Secure resource loading via HTTPS

## License

This project is distributed under the MIT License. See [LICENSE](LICENSE) for details.

## Contact

For bug reports or feature requests, please contact:
- Email: skykum2004@gmail.com

## Contributing

1. Fork this repository
2. Create a new branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
