

const element=document.getElementById("btn")

element.addEventListener("click", add);




function add(){
    let  linode=document.createElement("li")
    let  del=document.createElement("button")
    del.addEventListener("click",function(){
        this.parentNode.style.display='none';
    })
    let a=document.getElementById("Name").value
    
    let b=document.getElementById("email").value
    
    
    let c=document.getElementById("phno").value
    
    
        axios
          .post('https://crudcrud.com/api/9c5cef1a1e6843ca8339446ab1eaa491/pb19', {
            Name:a,
            email:b,
            phno:c
          })
          .then(res => showOutput(res))
          .catch(err => console.error(err));
      
   









    
    let dtxt=document.createTextNode("delete")
    let etxt=document.createTextNode("edit")
    let  edit=document.createElement("button")
    
    edit.addEventListener("click",function(){
      axios
      .delete('https://crudcrud.com/api/9c5cef1a1e6843ca8339446ab1eaa491/pb19/642d05bc308c9903e84ec3f6')
      .then(res => showOutput(res))
      .catch(err => console.error(err));
    
        document.getElementById("Name").value=a
    
        document.getElementById("email").value=b
    
    
        document.getElementById("phno").value=c
    
    
        this.parentNode.style.display='none';
    
    })
    
    
    
    
    
    del.addEventListener("click",function(){
        axios
        .delete('https://crudcrud.com/api/9c5cef1a1e6843ca8339446ab1eaa491/pb19/642d05bc308c9903e84ec3f6')
        .then(res => showOutput(res))
        .catch(err => console.error(err));
        this.parentNode.style.display='none';
    })
    
    
    
    
    
    del.appendChild(dtxt)
    edit.appendChild(etxt)
    
    
     let d=a+"-"+b+"-"+c
    console.log(d)
     let litxt=document.createTextNode(d)
    
    linode.appendChild(litxt)
    
    linode.appendChild(del)
    linode.appendChild(edit)
    document.body.appendChild(linode)
    
    
    
    
    
    
    
    
    }





    function showOutput(res) {
        document.getElementById('res').innerHTML = `
        <div class="card card-body mb-4">
          <h5>Status: ${res.status}</h5>
        </div>
      
        <div class="card mt-3">
          <div class="card-header">
            Headers
          </div>
          <div class="card-body">
            <pre>${JSON.stringify(res.headers, null, 2)}</pre>
          </div>
        </div>
      
        <div class="card mt-3">
          <div class="card-header">
            Data
          </div>
          <div class="card-body">
            <pre>${JSON.stringify(res.data, null, 2)}</pre>
          </div>
        </div>
      
        <div class="card mt-3">
          <div class="card-header">
            Config
          </div>
          <div class="card-body">
            <pre>${JSON.stringify(res.config, null, 2)}</pre>
          </div>
        </div>
      `;
      }