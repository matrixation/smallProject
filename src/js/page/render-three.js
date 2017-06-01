/**
 * Created by matrix on 2017/5/26.
 */
var $ = require("../lib/jquery-2.1.1.min.js");
$(function() {
	var page = {
		initem: function() {
			this.keys();
			this.Search();
			this.Searchorder();
		},
		keys: function() {
			$("#search").keyup(function() {
				if($(this).val() != "") {
					$(".cancel").show();
				} else {
					$(".cancel").hide();
				}
			});
			$(document).keydown(function(e) {
				if($("#search").val() != "") {
					if(e.keyCode == 13) {
						location.href = "news.html";
					}
				}
			})
		},
		Search: function() {
			$(".cancel").on("click", function() {
				$("#search").val("");
				$(this).hide();
			})
			$(".search-btn").on("click", function() {
				if($("#search").val() != "") {
					location.href = "news.html";
				}
			})
			$(".cancel").on("click", function() {
				$("#search").val("");
				$(this).hide();
			})
			$(".search-btn").on("click", function() {
				if($("#search").val() != "") {
					location.href = "news.html";
				}
			})
		},
		Searchorder: function() {
			$(".selected-order").click(function() {
				if($(".unselected-order").is(":hidden")) {
					$(".triangle").removeClass().addClass("triangle triangle-up");
					$(".unselected-order").show();
				} else {
					$(".triangle").removeClass().addClass("triangle triangle-down");
					$(".unselected-order").hide();
				}
			})
			$(".unselected-order").click(function() {
				window.location.reload();
			})
		},
	}
	page.initem();
})