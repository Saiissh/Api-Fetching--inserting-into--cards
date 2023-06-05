
let container=document.getElementById("cards");


fetch("https://gauravgitacc.github.io/postAppData/auctionData.json")
.then((response)=>{return response.json()})
.then((data)=>{
    console.log(data);


    let cards=document.getElementById('cards')
    for(let i=0;i<data.length;i++)
    {

        let insidedata=document.createElement("div");
        insidedata.setAttribute('class', 'insi-card');

        insidedata.innerHTML =`
        
    
        
            <div class='card-header'>

                <div class=left-heading>
                        <div class="status ${getStatusColor(data[i].status)}"> ${data[i].status}</div>
                        <div class="code">${data[i].caseNumber}</div>
                </div>

                        <div class='date'>${data[i].date}</div>
            </div>


                <hr>

                <div class='card-content'>
                
                <div class='content-headings'>${data[i].fromLocation}</div>
                <div class='content-desc'>${data[i].toLocation}</div>

                </div>

            <div id="price">${data[i].fare}</div>
    


        `
        console.log(insidedata);
        cards.appendChild(insidedata);
    }

})



function getStatusColor(status) {
    if (status === 'APPROVED') {
        return 'status-approved'; // CSS class for approved status
    } else if (status === 'PENDING') {
        return 'status-pending'; // CSS class for pending status
    } else if (status === 'COMPLETED') {
        return 'status-completed'; // CSS class for completed status
    } else {
        return ''; // Default CSS class if status doesn't match any condition
    }
}
