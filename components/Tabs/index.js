// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    console.log(response);
    for(let x in response.data.topics){
        console.log(response.data.topics[x]);
        const newTab = createTab(response.data.topics[x]);
        tabBar.appendChild(newTab);
        
        // response.data.topics[x].forEach( ele =>{
            // tab.textContent = ele;
        //     tabBar.appendChild(tab);
        // })
    }
    
})
.catch(err => {console.log('return failed.', err)})

const tabBar = document.querySelector('.topics');
// const tab = document.createElement('div');
// tab.classList.add('tab');
function createTab (data){
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = `${data}`;
    return tab;
}






