class TabLink {
  constructor(tabElement){
    this.tabElement = tabElement; 
    this.tabData = tabElement.dataset.tab;

    if (this.tabData === 'all') {
      this.cards = document.querySelectorAll('.card');
    } else {
      this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);
    }
    this.cards = Array.from(this.cards).map(card => new TabCard(card));
   this.tabElement.addEventListener('click', () => this.selectTab());
  }
    // assign this.tabElement to the tabElement DOM reference
   
    
    // Get the `data-tab` value from this.tabElement and store it here
  
    
    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    
    // <- Delete this comment block when you work on the if statement
    // Check to see if this.tabData is equal to 'all'
   
    // <- Delete this comment block when you work on the if statement

     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    

    // Add a click event that invokes this.selectTab
   
  
selectTab(){
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active-tab'))
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.style.display = 'none');
    this.tabElement.classList.add('active-tab');
    this.cards.forEach(card => card.selectCard());
  }
}

    // Select all elements with the .tab class on them
   
    
    // Iterate through the NodeList removing the .active-tab class from each element
   
    // Select all of the elements with the .card class on them
  

    // Iterate through the NodeList setting the display style each one to 'none'
   
    
    // Add a class of ".active-tab" to this.tabElement
  
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
 

    class TabCard {
      constructor(cardElement){
        this.cardElement = cardElement;
      }
      selectCard(){
        this.cardElement.style.display = 'flex';
      }
    }


    // Assign this.cardElement to the cardElement DOM reference
    // Update the style of this.cardElement to display = "flex"
   
 

/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/
let tabs = document.querySelectorAll('.tab').forEach(
  tab => new TabLink(tab));  