<script>
  function setElementValue(className, value) {
    const elements = document.getElementsByClassName(className);
    for (const element of elements) {
      element.textContent = value;
    }
  }

  function formatFloorPrice(rawFloorPrice) {
    const formattedFloorPrice = `0.${rawFloorPrice.toString().slice(0, 3)}`;
    return formattedFloorPrice;
  }

  function fetchData() {
    const apiUrl = "https://api.ddbiz.fun/";

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setElementValue('symbol', `Symbol: ${data.symbol}`);
        
        // Format and display the modified floor price
        const formattedFloorPrice = formatFloorPrice(data.floorPrice);
        setElementValue('floorPrice', `${formattedFloorPrice}`);
        
        setElementValue('listedCount', `${data.listedCount}`);
        setElementValue('avgPrice24hr', `${data.avgPrice24hr}`);
        setElementValue('volumeAll', `${data.volumeAll}`);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  window.onload = function() {
    fetchData();
    
    setInterval(fetchData, 1000); // 10000 milidetik = 10 detik
  };
</script>