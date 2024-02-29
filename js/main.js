function sortCardsByCategory(cardsParent) {
  cardsParent
    .children(".col-lg-3")
    .sort(function (cardA, cardB) {
      var categoryOrder = {
        Natureza: 1,
        Animais: 2,
        Pessoas: 3,
        Tecnologia: 4,
      };

      var titleA = $(cardA).find(".card-title").text();
      var titleB = $(cardB).find(".card-title").text();

      return categoryOrder[titleA] - categoryOrder[titleB];
    })
    .appendTo(cardsParent);
}

function setCardImages(cardsParent, imageUrls) {
  cardsParent
    .find(".card-img-top")
    .css("height", "144px")
    .each(function (index, imageElement) {
      $(imageElement).attr("src", imageUrls[index]);
    });
}

function styleSecondChild(cardsParent) {
  var secondChildButton = cardsParent.children().eq(2).find("a");
  secondChildButton.css({
    "background-color": "var(--success)",
    border: "none",
  });
}

function styleHeaderAndButton() {
  var jumbotron = $(".jumbotron");
  jumbotron.css({
    "background-color": "var(--secondary)",
  });
  jumbotron.children().css({
    "text-align": "end",
    color: "white",
  });

  var headerButton = jumbotron.find("a");
  headerButton.css({
    "background-color": "var(--success)",
    border: "none",
    float: "right",
  });
}

function styleMenuContainer() {
  var menuContainer = $(".btn-group-vertical");
  menuContainer.removeClass("btn-group-vertical").addClass("row").css({
    gap: "8px",
    "margin-left": "0",
  });
}

function appendListItems() {
  var listGroup = $(".list-group");
  listGroup.append("<li class='list-group-item'>Quarto item</li>");
  listGroup.append("<li class='list-group-item'>Quinto item</li>");

  listGroup.find("li:first-child").css({
    "background-color": "transparent",
    color: "#212529",
    "border-color": "rgba(0, 0, 0, 0.125)",
  });

  listGroup.find("li:nth-child(4)").css({
    "background-color": "var(--primary)",
    color: "white",
  });
}

var cardSectionTitle = "Cards";
var cardsRow = $(".row h3:contains(" + cardSectionTitle + ")").closest(".row");

sortCardsByCategory(cardsRow);

var cardImagesUrls = [
  "https://img.freepik.com/free-photo/beautiful-scenery-river-surrounded-by-sucessery-forest_181624-40482.jpg?t=st=1709173349~exp=1709176949~hmac=8b5b08aeaccb1ec9467dfb3f924f6c7717e77dd0fd370d6ce6b712b1d9b25da7&w=740",
  "https://img.freepik.com/free-photo/cute-pet-collage-isolated_23-2150007413.jpg?t=st=1709176169~exp=1709179769~hmac=614461562726173e82e9025cd9d3b5c516f6d985484c0fa008845a702d0e3155&w=900",
  "https://img.freepik.com/free-photo/people-collage-design_23-2148888271.jpg?t=st=1709176149~exp=1709179749~hmac=5395aaef66a09fa06177ed31da76a65eae9419bcdb2323244db85860775b0158&w=826",
  "https://img.freepik.com/free-photo/person-working-html-computer_23-2150038860.jpg?t=st=1709176041~exp=1709179641~hmac=36789633ea23b87ca2aafb682de18a103d03b6dccdd36599bd3f9e4b4ee64add&w=740",
];

setCardImages(cardsRow, cardImagesUrls);
styleSecondChild(cardsRow);
styleHeaderAndButton();
styleMenuContainer();
appendListItems();
