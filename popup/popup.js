$(document).ready(async function() {
  // 저장된 설정 불러오기
  const settings = await StorageUtil.loadSettings();
  if (settings.algorithm) {
    $('#algorithm').val(settings.algorithm);
  }
  if (settings.secretKey) {
    $('#secretKey').val(settings.secretKey);
  }
  if (settings.autoCopy) {
    $('#autoCopy').prop('checked', settings.autoCopy);
  }

  // 저장된 inputText 불러오기
  const savedInputText = await StorageUtil.loadInputText();
  $('#inputText').val(savedInputText);

  // 저장된 outputText 불러오기
  const savedOutputText = await StorageUtil.loadOutputText();
  $('#outputText').val(savedOutputText);

  // inputText 내용 변경 시 저장
  $('#inputText').on('input', async function() {
    await StorageUtil.saveInputText($(this).val());
  });

  // outputText 내용 변경 시 저장
  $('#outputText').on('input', async function() {
    await StorageUtil.saveOutputText($(this).val());
  });

  // 암호화 버튼 클릭 이벤트
  $('#encryptBtn').click(async function() {
    const algorithm = $('#algorithm').val();
    const secretKey = $('#secretKey').val();
    const inputText = $('#inputText').val();
    const autoCopy = $('#autoCopy').is(':checked');
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
        default:
          alert('Unsupported algorithm.');
          return;
      }

      $('#outputText').val(result);
      if (autoCopy) {
        await copyToClipboard(result);
        showCopyStatus();
      }
      
      // 설정 저장
      await StorageUtil.saveSettings({
        algorithm,
        secretKey,
        autoCopy
      });

      // outputText 저장
      await StorageUtil.saveOutputText(result);
    } catch (error) {
      alert('Encryption failed: ' + error.message);
    }
  });

  // 복호화 버튼 클릭 이벤트
  $('#decryptBtn').click(async function() {
    const algorithm = $('#algorithm').val();
    const secretKey = $('#secretKey').val();
    const inputText = $('#inputText').val();
    const autoCopy = $('#autoCopy').is(':checked');
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
        default:
          alert('Unsupported algorithm.');
          return;
      }

      $('#outputText').val(result);
      if (autoCopy) {
        await copyToClipboard(result);
        showCopyStatus();
      }

      // outputText 저장
      await StorageUtil.saveOutputText(result);
    } catch (error) {
      alert('Decryption failed: ' + error.message);
    }
  });

  // 클립보드에 복사
  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      alert('Failed to copy text to clipboard.');
    }
  }

  // 복사 상태 표시
  function showCopyStatus() {
    $('#copyStatus').removeClass('hidden');
    setTimeout(() => {
      $('#copyStatus').addClass('hidden');
    }, 2000);
  }
});