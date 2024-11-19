document.getElementById('login-btn').addEventListener('click', function() {
    var username = document.getElementById('username').value.trim();
  
    if (username !== '') {
      // Simpan nama pengguna di session storage
      sessionStorage.setItem('username', username);
  
      // Redirect ke halaman kedua
      window.location.href = 'halaman2.html';
    } else {
      alert('Silakan masukkan nama Anda.');
    }
  });
  
  document.getElementById('username').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      var username = document.getElementById('username').value.trim();
  
      if (username !== '') {
        // Simpan nama pengguna di session storage
        sessionStorage.setItem('username', username);
  
        // Putar musik latar belakang
        var backgroundMusic = document.getElementById('background-music');
        backgroundMusic.play();
  
        // Redirect ke halaman kedua
        window.location.href = 'halaman2.html';
      } else {
        alert('Silakan masukkan nama Anda.');
      }
    }
  });

