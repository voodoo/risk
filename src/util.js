export function updateUrlState(state) {
  let urlKeys = [];
  Object.keys(state).forEach(function(element) {
    if (element != '' && state[element] != null && element != "scores"){
      urlKeys.push(element + "=" + state[element]);
    }        
  });
  //console.log(urlKeys);
  window.history.replaceState({}, "Title", "?" + urlKeys.join("&"));    
}

export function getQueryParams() {
    return document.location.search
      .replace(/(^\?)/, "")
      .split("&")
      .map(
        function(n) {
          return (n = n.split("=")), (this[n[0]] = n[1]), this;
        }.bind({})
      )[0];
  }

export  function openTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("content-tab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " is-active";
  }  