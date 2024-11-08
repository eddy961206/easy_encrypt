$(document).ready(async function() {
  // 저장된 설정 불러오기
  const settings = await StorageUtil.loadSettings();
  if (settings.algorithm) {
    $('#algorithm').val(settings.algorithm);
  }
  if (settings.secretKey) {
    $('#secretKey').val(settings.secretKey);
  }

  // 암호화 버튼 클릭 이벤트
  $('#encryptBtn').click(async function() {
    const algorithm = $('#algorithm').val();
    const secretKey = $('#secretKey').val();
    const inputText = $('#inputText').val();
    let result = '';

    try {
      switch (algorithm) {
        case 'AES':
          result = CryptoUtil.encryptAES(inputText, secretKey);
          break;
        case 'DES':
          result = CryptoUtil.encryptDES(inputText, secretKey);
          break;
        case 'Base64':
          result = CryptoUtil.encodeBase64(inputText);
          break;
        case 'SHA256':
          result = CryptoUtil.hashSHA256(inputText);
          break;
      }

      $('#outputText').val(result);
      await copyToClipboard(result);
      showCopyStatus();
      
      // 설정 저장
      await StorageUtil.saveSettings({
        algorithm,
        secretKey
      });
    } catch (error) {
      alert('Encryption failed: ' + error.message);
    }
  });

  // 복호화 버튼 클릭 이벤트
  $('#decryptBtn').click(async function() {
    const algorithm = $('#algorithm').val();
    const secretKey = $('#secretKey').val();
    const inputText = $('#inputText').val();
    let result = '';

    try {
      switch (algorithm) {
        case 'AES':
          result = CryptoUtil.decryptAES(inputText, secretKey);
          break;
        case 'DES':
          result = CryptoUtil.decryptDES(inputText, secretKey);
          break;
        case 'Base64':
          result = CryptoUtil.decodeBase64(inputText);
          break;
        case 'SHA256':
          alert('SHA-256 is a one-way hash function and cannot be decrypted');
          return;
      }

      $('#outputText').val(result);
      await copyToClipboard(result);
      showCopyStatus();
    } catch (error) {
      alert('Decryption failed: ' + error.message);
    }
  });

  // 클립보드에 복사
  async function copyToClipboard(text) {
    await navigator.clipboard.writeText(text);
  }

  // 복사 상태 표시
  function showCopyStatus() {
    $('#copyStatus').removeClass('hidden');
    setTimeout(() => {
      $('#copyStatus').addClass('hidden');
    }, 2000);
  }
}); 