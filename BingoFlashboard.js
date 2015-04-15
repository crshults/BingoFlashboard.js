(function () {
	function fix_aspect_ratios() {
		Array.prototype.forEach.call(
			document.getElementsByClassName("fixedaspectratio"),
			function (x) {
				var aspect_ratio = JSON.parse(x.getAttribute("data-aspectratio"));
				var newWidth = parseInt(
					(x.parentNode.clientWidth/x.parentNode.clientHeight > (aspect_ratio.width/aspect_ratio.height)) ?
						x.parentNode.clientHeight*(aspect_ratio.width/aspect_ratio.height) :
						x.parentNode.clientWidth);
				var newHeight = parseInt(
					(x.parentNode.clientWidth/x.parentNode.clientHeight > (aspect_ratio.width/aspect_ratio.height)) ?
						x.parentNode.clientHeight :
						x.parentNode.clientWidth/(aspect_ratio.width/aspect_ratio.height));
				x.style.width = newWidth + "px";
				x.style.height = newHeight + "px";
				x.style.left = parseInt(x.parentNode.clientWidth-newWidth)/2 + "px";
				x.style.top = parseInt(x.parentNode.clientHeight-newHeight)/2 + "px";
			}
		);
	}

	window.addEventListener('resize', fix_aspect_ratios);
	window.addEventListener('load', fix_aspect_ratios);

	function fix_font_sizes() {
		Array.prototype.forEach.call(
			document.getElementsByClassName("BingoFlashboardText"),
			function (x) {
				x.style.fontSize = (x.clientHeight * 0.8).toString() + "px";
			}
		);
	}

	window.addEventListener('resize', fix_font_sizes);
	window.addEventListener('load', fix_font_sizes);
}());
