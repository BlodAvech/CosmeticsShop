$(document).ready(function () {
  const products = [
    "Lipstick",
    "Cleanser foam",
    "Palette",
    "Lash",
    "Toner",
    "Serum",
    "Moisturizer",
    "Foundation",
    "Blush",
    "Mask"
  ];

  const suggestionBox = $("<ul id='suggestions'></ul>").css({
    position: "absolute",
    top: "60px",
    left: "19%",
    transform: "translateX(-50%)",
    background: "white",
    border: "1px solid #ccc",
    borderRadius: "6px",
    width: "220px",
    maxHeight: "180px",
    overflowY: "auto",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    listStyle: "none",
    padding: "5px 0",
    margin: 0,
    zIndex: 1000,
    display: "none"
  });
  $("body").append(suggestionBox);

  function highlightMatches(keyword) {
    $(".product-name").each(function () {
      const text = $(this).text();
      if (keyword === "") {
        $(this).html(text); 
      } else {
        const regex = new RegExp(`(${keyword})`, "gi");
        const highlighted = text.replace(
          regex,
          "<span class='highlight'>$1</span>"
        );
        $(this).html(highlighted);
      }
    });
  }

  $("#FindTextInput").on("keyup", function () {
    const query = $(this).val().toLowerCase();
    suggestionBox.empty();

    // --- Task 1: Live Filter ---
    $(".product-card").filter(function () {
      const name = $(this).find(".product-name").text().toLowerCase();
      $(this).toggle(name.indexOf(query) > -1);
      checkImgLoading();
    });

    // --- Task 2: Autocomplete Suggestions ---
    if (query === "") {
      suggestionBox.hide();
      highlightMatches("");
      return;
    }

    const filtered = products.filter((p) =>
      p.toLowerCase().includes(query)
    );

    if (filtered.length > 0) {
      filtered.forEach((item) => {
        const li = $("<li></li>")
          .text(item)
          .css({
            padding: "8px 12px",
            cursor: "pointer",
          })
          .hover(
            function () {
              $(this).css("background", "#f5f5f5");
            },
            function () {
              $(this).css("background", "white");
            }
          )
          .on("click", function () {
            $("#FindTextInput").val(item);
            suggestionBox.hide();
            $("#FindTextInput").trigger("keyup");
          });

        suggestionBox.append(li);
      });
      suggestionBox.slideDown(100);
    } else {
      suggestionBox.hide();
    }

    // --- Task 3: Highlight search term ---
    highlightMatches(query);
  });


  $(document).on("click", function (e) {
    if (!$(e.target).closest("#FindTextInput").length) {
      suggestionBox.hide();
    }
  });
});
