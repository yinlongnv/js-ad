window.onload = function() {
  // js实现顶部伸缩式广告特效
  var getId = function(id) {
    return document.getElementById(id);
  };
  var maxH = getId("adcon").height; //最大高度
  var minH = getId("adcur").height; //最小高度
  var step = 5; //移动的距离
  var h = 0;

  /*广告向下展开*/
  function adDown() {
    if (h < maxH) {
      h += step; //向下移动
      setTimeout(adDown, 1);
    } else {
      setTimeout(adUp, 3000);
    }
    getId("ad").style.display = "block";
    getId("ad").style.height = h + "px";
  }

  /*广告向上收起*/
  function adUp() {
    getId("ad").style.height = h + "px";

    if (h > minH) {
      h -= step;
      setTimeout(adUp, 1);
    } else {
      getId("adcon").style.display = "none";
      getId("close").style.display = "block";
    }
  }

  getId("close").onclick = function() {
    getId("ad").style.display = "none";
  };
  setTimeout(adDown, 3000);
  
  // js实现右下角伸缩式广告特效
  getId("clickMe").onmouseover = function() {
    getId("adBox").style.display = "block";
  };

  getId("rightCloseButton").onclick = function() {
    getId("adBox").style.display = "none";
  };
};
