function getDataFromDOM(selector) {
    var domNode = document.querySelector(div);
    if (domNode) {
      var content = document.getElementById('portal-root').innerHTML;
      if (content) {
        return content.trim();
      }
    }
    return undefined;
  }