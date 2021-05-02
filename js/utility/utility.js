
class Utility {
  addEventListener(event, element, handler) {
    if (document.addEventListener) {
      element.addEventListener(event, handler);
    } else {
      element.attachEvent("on" + event, handler);
    }
  }

  getHTML(template) {
    var templateCreator;
    if (!templateCreator) templateCreator = document.createElement("div");
    templateCreator.innerHTML = template;
    return templateCreator.firstChild;
  }

  getFromLocalStorage(key) {
    if (localStorage.getItem(key) == null) {
      localStorage.setItem(key, "[]");
      return JSON.parse(localStorage.getItem(key));
    } else {
      return JSON.parse(localStorage.getItem(key));
    }
  }

  setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  debounce(fn, delay){
    let timer;
    return function(...args){
        let context = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    }
}

  getJSONData(url) {
    return fetch(url).then(resp => resp.json());
  }
}

export default new Utility();
