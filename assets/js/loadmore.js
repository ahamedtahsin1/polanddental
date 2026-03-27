// load more hidden blog js

$(function () {
  $(".hide-blog").slice(0, 3).show();
  if ($(".hide-blog:hidden").length === 0) {
    $("#loadMore").css("display", "none");
  } else {
    if ($(".hide-blog").length > 3) {
      $("#loadMore").css("display", "inline-block");
    } else if ($(".hide-blog").length <= 3) {
      $("#loadMore").css("display", "none");
    }
  }
  $(document).on("click", '#loadMore', function (e) {
    e.preventDefault();
    $(".hide-blog:hidden").slice(0, 3).slideDown();
    if ($(".hide-blog:hidden").length === 0) {
      $("#loadMore").css("display", "none");
    } else {
      if ($(".hide-blog").length > 3) {
        $("#loadMore").css("display", "inline-block");
      } else if ($(".hide-blog").length <= 3) {
        $("#loadMore").css("display", "none");
      }
    }
  });
})


// load more button js
var loadMoreButtonClicked = false;
$(document).on("click", '#loadMore', function () {
  $(this).hide();
  loadMoreButtonClicked = true;
  adjustStructure();
});

$(window).on("resize", function () {
  if (loadMoreButtonClicked) {
    adjustStructure();
  }
});

function adjustStructure() {
  var hideBlogOuterWrap = document.querySelector('.hide-blog-outer-wrap');
  if (loadMoreButtonClicked && window.matchMedia("(max-width: 991px)").matches) {
    hideBlogOuterWrap.style.display = 'block';
  } else {
    hideBlogOuterWrap.style.display = 'flex';
  }
}