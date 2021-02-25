<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Javascript</title>
  </head>
  <body>
    <input value="Try selecting some text in this element.">
	<p id="log"></p>
    <script>
      function logSelection(event) {
        const log = document.getElementById('log');
        const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
        log.textContent = `You selected: ${selection}`;
      }
      
      const input = document.querySelector('input');
      input.addEventListener('select', logSelection);
    </script>
  </body>
</html>
