class TabLink {
  constructor(tabElement){
    this.tabElement = tabElement;
    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = this.tabElement.dataset.tab; 
    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    // // Check to see if this.tabData is equal to 'all'
     if(this.tabData == 'all'){
       this.cards = document.querySelectorAll(`[data-tab='${this.tabData}']`);
     } else {
       this.cards = this.tabData;
     }
     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    // this.cards = Array.from(this.cards).map(new TabCard(this.cards));
    
    this.tabElement.addEventListener('click', () => {
      this.selectTab();
    });
  };

  selectTab(){
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.classList.remove('.active-tab')
    });
    const cards = document.querySelectorAll('.card')
    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(card => {
      card.classList.style.display = 'none';
    })
    this.tabElement.classList.add('.active-tab');
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(cardElement){
    this.cardElement = cardElement;
  }
  selectCard(){
    this.cardElement.style.display = 'flex';
  }
}

let tabs = document.querySelectorAll('.tab').forEach(tab => new TabLink(tab));