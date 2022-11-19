var table_id_elements = new Array();
fetch('./dist/data_json.json')
    .then(result => result.json()
        .then(data => {

            let div1 = document.getElementById('test')  
            let j = 0;
            while (div1.firstChild) {
                div1.firstChild.remove()
            }
            data.forEach(value  => {  
                let span1 = document.createElement('span')
                let div3 = document.createElement('div')
                let div2 = document.createElement('div')
                let course_name = document.createElement('h2')
                let span2 = document.createElement('span')
                let span3 = document.createElement('span')
                let button_add = document.createElement('button')
                let icon = document.createElement('ion-icon')
                let span_button = document.createElement('span')
                

                div2.setAttribute('class' , 'bg-black inline-block text-yellow-800 rounded-lg border-black p-1 hover:bg-yellow-800 hover:shadow-lg hover:text-white transition ease-in-out duration-700')
                div3.setAttribute('class' , 'card border-b-2 rounded-lg border-black p-3 my-2 shadow-lg hover:shadow-black hover:border-2 transition ease-in-out duration-700')
                div3.setAttribute('id' , 'card'+j)
                course_name.setAttribute('class' , 'text-xl text-yellow-800 m-1')
                button_add.setAttribute('id' , j)
            button_add.addEventListener("click" , () => {
                add_to_basket(button_add.id);
                console.log(button_add.id)
            });
                span1.setAttribute('class' , 'text-sm block m-2 p-2')
                span2.setAttribute('class' , 'text-sm block m-2 p-2')
                span3.setAttribute('class' , 'text-sm block m-2 p-2')
                button_add.setAttribute('title' , 'Add cart to button')
                button_add.setAttribute('class' , 'add_basket')             
                span_button.setAttribute('class' , 'inline-block text-sm p-1 text-white')  
                icon.setAttribute('name' , 'add-outline')
                icon.setAttribute('class' , 'p-1')

                if(value['Column10'] == '' || value['Column10']==null)
                {
                    course_name.innerHTML = "Lesson non renseignée "
                } 
                else
                {
                    course_name.innerHTML = value['Column10']
                }
                

                if(value['Column9'] == '' || value['Column9']==null)
                {
                    span1.innerHTML = "Nom de l'organisme : Non-renseigné"
                } 
                else
                {
                    span1.innerHTML = "Nom de l'organisme : " + value['Column9']
                }

                if(value['Column14'] == '' || value['Column14']==null)
                {
                    span1.innerHTML = "Accès : Non-renseigné"
                } 
                else
                {
                    span2.innerHTML = "Accès : " + value['Column14']
                }

                if(value['Column11'] == '' || value['Column11']==null)
                {
                    span1.innerHTML = "Lieu : Non-renseigné"
                } 
                else
                {
                    span3.innerHTML = "Lieu : " + value['Column11']
                }
               
                div3.appendChild(course_name)
                div3.appendChild(span1)
                div3.appendChild(span2)
                div3.appendChild(span3)
                div3.appendChild(div2)
                div1.appendChild(div3)
                span_button.innerHTML = 'Add'
                button_add.appendChild(icon)
                button_add.appendChild(span_button)
                div2.appendChild(button_add)
                j++;
            })
        })
        .catch(error => console.log(error))
    .catch(error => console.log(error)))

let a_mail = document.createElement('a');
let button_mail = document.getElementById('for_mail');
a_mail.innerHTML = "Demander un devis";
a_mail.setAttribute('id' , 'a_for_mail');
button_mail.appendChild(a_mail);

const searchbar = document.querySelector('.searchbar');
const filter_location = document.querySelector('#lieu');
const filter_acces = document.querySelector('#modeSuiviCours');
const filter_formation = document.querySelector('#type_formation');
const filter_etablissement = document.querySelector('#type_univ');



var table_basket_elements = new Array();

function add_to_basket(id_card)
{
    fetch('./dist/data_json.json')
.then(result => result.json()
    .then(data => {
        let i = 0;
        data.forEach(value  => {  
            if(id_card == i)
            {
                if(table_basket_elements.length < 3)
                {
                    table_basket_elements.push(value);
                    let card = document.getElementById('card'+id_card);
                    card.style.display ="none";
                }
            }
            i++;
        })
        if(table_basket_elements.length >= 3)
        {
            alert("Vous avez atteint la taille maximale de votre panier !");
        }
        display_card_basket(id_card);
    })
    .catch(error => console.log(error))
.catch(error => console.log(error)))

}


function retirer_basket(element_delete , id_button)
{
    let i = 0;
    fetch('./dist/data_json.json')
.then(result => result.json()
    .then(data => {

        data.forEach(value  => {
            if(value['Column10'] != null)
            {
                if(value['Column10'] == element_delete['Column10'])
                {
                    let card = document.getElementById('card'+i);
                    card.style.display ="block";
                }
            }
            i++
        })
        
    })
    .catch(error => console.log(error))
.catch(error => console.log(error)))
    remove_item(table_basket_elements , element_delete );
    display_card_basket();
}



function display_card_basket(id_card)
{
    let a_mail = document.getElementById('a_for_mail')
    let div1 = document.getElementById('basket');
    let j = 0;
    while (div1.firstChild) {
        div1.firstChild.remove()
    }
    for (let index = 0; index < table_basket_elements.length; index++) {
        
        let span1 = document.createElement('span')
        let div3 = document.createElement('div')
        let div2 = document.createElement('div')
        let course_name = document.createElement('h2')
        let span2 = document.createElement('span')
        let span3 = document.createElement('span')
        let button_add = document.createElement('button')
        let icon = document.createElement('ion-icon')
        let span_button = document.createElement('span')

        let for_body = "";
        let space = "%20";
        let to_ligne ="%0A";
        

        for (let index = 0; index < table_basket_elements.length; index++) {
            for_body += table_basket_elements[index]['Column10'] +space +"avec" +space +"pour" +space +"nom" +space +"d'organisme" +space +":" +space +table_basket_elements[index]['Column9'] +to_ligne;
        }
        for_body += "Cordialement";
        a_mail.setAttribute('href' ,'mailto:design4green@etik.com?subject=Demande%20de%20devis&body=Bonjour,%20je%20souhaites%20obtenir%20un%20devis%20pour%20les%20formations%20en%20suivantes:%0A'+for_body);
        div2.setAttribute('class' , 'bg-black inline-block text-yellow-800 rounded-lg border-black p-1 hover:bg-yellow-800 hover:shadow-lg hover:text-white transition ease-in-out duration-700')
        div3.setAttribute('class' , 'card border-b-2 rounded-lg border-black p-3 my-2 shadow-lg hover:shadow-black hover:border-2 transition ease-in-out duration-700')
        course_name.setAttribute('class' , 'text-xl text-yellow-800 m-1')
        button_add.setAttribute('id' , 'panier'+j++)
        button_add.addEventListener("click" , () => {
            retirer_basket(table_basket_elements[index] , j-1);
        });
        span1.setAttribute('class' , 'text-sm block m-2 p-2')
        span2.setAttribute('class' , 'text-sm block m-2 p-2')
        span3.setAttribute('class' , 'text-sm block m-2 p-2')
        button_add.setAttribute('title' , 'Add cart to button')
        button_add.setAttribute('class' , 'add_basket')
        span_button.setAttribute('class' , 'inline-block text-white text-sm p-1')  
        icon.setAttribute('name' , 'add-outline')
        icon.setAttribute('class' , 'p-1')

        if(table_basket_elements[index]['Column10'] == '' || table_basket_elements[index]['Column10']==null)
        {
            course_name.innerHTML = "Lesson non renseignée "
        } 
        else
        {
            course_name.innerHTML = table_basket_elements[index]['Column10']
        }
        

        if(table_basket_elements[index]['Column9'] == '' || table_basket_elements[index]['Column9']==null)
        {
            span1.innerHTML = "Nom de l'organisme : Non-renseigné"
        } 
        else
        {
            span1.innerHTML = "Nom de l'organisme : " + table_basket_elements[index]['Column9']
        }

        if(table_basket_elements[index]['Column14'] == '' || table_basket_elements[index]['Column14']==null)
        {
            span1.innerHTML = "Accès : Non-renseigné"
        } 
        else 
        {
            span2.innerHTML = "Accès : " + table_basket_elements[index]['Column14']
        }

        if(table_basket_elements[index]['Column11'] == '' || table_basket_elements[index]['Column11']==null)
        {
            span1.innerHTML = "Lieu : Non-renseigné"
        } 
        else
        {
            span3.innerHTML = "Lieu : " + table_basket_elements[index]['Column11']
        }

        

        div3.appendChild(course_name)
        div3.appendChild(span1)
        div3.appendChild(span2)
        div3.appendChild(span3)
        div3.appendChild(div2)
        div1.appendChild(div3)
        span_button.innerHTML = 'Retirer'
        button_add.appendChild(icon)
        button_add.appendChild(span_button)
        div2.appendChild(button_add)
    }
    
}


function remove_item(array , item)
{
    const index = array.indexOf(item);
    if (index > -1) { // only splice array when item is found
    array.splice(index, 1); // 2nd parameter means remove one item only
    }
}


searchbar.addEventListener('keyup' , (e) =>
{
    const searchedLetter = e.target.value;
    const cards = document.querySelectorAll(".card");
    filterElements(searchedLetter , cards);
});
filter_location.addEventListener("change" , (e) =>
{

    const searchedLetter = e.target.value;
    const cards = document.querySelectorAll(".card");
    filter_loca(searchedLetter , cards );
});
filter_acces.addEventListener("change" , (e) =>
{
   
    const searchedLetter = e.target.value;
    const cards = document.querySelectorAll(".card");
    filter_acc(searchedLetter , cards);
});
filter_formation.addEventListener("change" , (e) =>
{

    const searchedLetter = e.target.value;
    const cards = document.querySelectorAll(".card");
    filter_format(searchedLetter , cards);
});

filter_etablissement.addEventListener("change" , (e) =>
{

    const searchedLetter = e.target.value;
    const cards = document.querySelectorAll(".card");
    filter_eta(searchedLetter , cards);
});

function filterElements(letters , elements)
{
    for (let i = 0; i < elements.length; i++) {
        if(elements[i].textContent.toLowerCase().includes(letters.toLowerCase()))
        {
            elements[i].style.display ="block";
        }
        else
        {
            elements[i].style.display ="none";
        }           
    }

}

function filter_acc(letters , elements)
{
    var i = 0;
    fetch('./dist/data_json.json')
.then(result => result.json()
    .then(data => {

        data.forEach(value  => {
            if(value['Column14'] == letters)
            {
 
                elements[i].style.display ="block";
            }
            else
            {
                elements[i].style.display ="none";   
            }
            i++;
        })
        
    })
    .catch(error => console.log(error))
.catch(error => console.log(error)))
}

function filter_eta(letters , elements)
{
    var i = 0;
    fetch('./dist/data_json.json')
.then(result => result.json()
    .then(data => {
        data.forEach(value  => {
            if(value['Column2'].includes(letters))
            {
                
                    elements[i].style.display ="block";
            }
            else
            {
                elements[i].style.display ="none";
            }    
            i++;
        })
        
    })
    .catch(error => console.log(error))
.catch(error => console.log(error)))
}

function filter_loca(letters , elements)
{
    var i = 0;
    fetch('./dist/data_json.json')
.then(result => result.json()
    .then(data => {
        data.forEach(value  => {
            if(value['Column11'].includes(letters))
            {     
                elements[i].style.display ="block";
            }
            else
            {
                elements[i].style.display ="none";
            }      
            
            i++;
        })
       
    })
    .catch(error => console.log(error))
.catch(error => console.log(error)))
}

function filter_format(letters , elements)
{
    var i = 0;
    fetch('./dist/data_json.json')
    .then(result => result.json()
        .then(data => {
            
            data.forEach(value  => {
                if(value['Column1'] == letters)
                {
                    
                    elements[i].style.display ="block";
                }
                else
                {
                    elements[i].style.display ="none";
                }        
                
                
            })
            i++;
        })
        .catch(error => console.log(error))
    .catch(error => console.log(error)))
}
var button_print = document.querySelector('#print');
button_print.addEventListener("click" , () => {
    var divContents = document.querySelector('#basket').innerHTML;
    var a = window.open('' , '' , 'height=800 , width=800');
    a.document.write('<html>');
    a.document.write('<head></head>');
    a.document.write('<body>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
});   


