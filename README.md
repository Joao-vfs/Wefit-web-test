# WeFit Web Test

This is a code example for the structure of a "WeFit" web page. The code includes sections such as Menu, Header, Cards, and List, with specific functionalities and styles applied.

## Code Structure

The HTML code is structured to include main sections like Menu, Header, Cards, and List. The associated JavaScript manipulates page elements to apply orders, styles, and add dynamic content.

## JavaScript Functions

### `sortCardsByCategory(cardsParent)`

This function organizes the cards in the "Cards" section based on the predefined order of categories like Natureza, Animais, Pessoas, and Tecnologia.

### `setCardImages(cardsParent, imageUrls)`

This function adjusts the height of the card images and updates the image URLs.

### `styleSecondChild(cardsParent)`

This function applies styles to the second button child in the "Cards" section.

### `styleHeaderAndButton()`

This function applies styles to the header (jumbotron) and the associated button.

### `styleMenuContainer()`

This function adjusts the visual presentation of the menu, converting it from a vertical list to a row with specific spacing and margin.

### `appendListItems()`

This function adds two new items to the list in the "List" section and applies different styles to the first and fourth items.

## Usage

```javascript
// Selecting the Cards section
var cardSectionTitle = "Cards";
var cardsRow = $(".row h3:contains(" + cardSectionTitle + ")").closest(".row");

// Applying sorting and styles to the Cards
sortCardsByCategory(cardsRow);

// URLs of the new images for the Cards
var cardImagesUrls = [
  // ... Image URLs ...
];

// Updating Card images
setCardImages(cardsRow, cardImagesUrls);

// Applying additional styles
styleSecondChild(cardsRow);
styleHeaderAndButton();
styleMenuContainer();
appendListItems();
