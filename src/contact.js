import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';
import "./contact.css";
export default function Contact() {
    const [ListContact,setListContact]=useState([
        {id:uuid(),nom:'Hajar Boussetta',tel:'0634102345',ville:'Tanger'},
        {id:uuid(),nom:'Sofiane Boussetta',tel:'0737892034',ville:'Casablanc'},
        {id:uuid(),nom:'Malika Lirmaki',tel:'06783423009',ville:'Fas'},
        {id:uuid(),nom:'Hanae Allali',tel:'0673829063',ville:'Tetoune'}
    ]);
    const [order, setOrder] = useState(true);
    const [Rechercher, setrechercher] = useState([]);
    const [flitered, setFliterdContacts] = useState('');
    const [nom,setnom]=useState('');
    const [tel,settel]=useState('');
    const[ville,setville]=useState('');
    const ajouterContact=(e)=>{
      e.preventDefault();
     let newlistContact=[...ListContact,{
      id:uuid(),
      nom:nom,
      tel:tel,
      ville:ville
     }];
     setListContact(newlistContact);
     setnom("");
     settel("");
     setville("");
    };
  const supprimerContact=(idp)=>{
   let listCon=ListContact.filter((x)=>{
      return x.id!=idp;
       });
     setListContact(listCon);
  };
  const Recherche=(e)=>{
    e.preventDefault();
    let tablee=ListContact.filter((c)=>{
      return c.ville.toLowerCase().includes(Rechercher.toLowerCase());
    });
    setListContact(tablee);
    setrechercher("")
  };
  return (
    <div>
      <h1>List Contact Pour React </h1>
      <div className="container">
      <div className="row">
        <div className="col-9 mx-auto mt-5">
          <form>
            <div className="mb-4 row">
              <div className="col">
                <input type="text" placeholder="Rechercher" value={Rechercher}   onChange={(e)=>{setrechercher(e.target.value)}} className='form-control shadow-none'/>
              </div>
              <div >
                  <button className='btn btn-success btnn mt-0' onClick={Recherche}> Contact</button>
              </div>
            </div>
            <div className="mb-5 row">
              <div className="col-4">
                <input type="text" className="form-control shadow-none" placeholder='Entrez le nom' id="nom" value={nom}  onChange={(e)=>setnom(e.target.value)}/>
              </div>
              <div class="col-4">
                <input type="text" className="form-control shadow-none" placeholder='Entrez le numero telephone' id="tel" value={tel}  onChange={(e)=>{settel(e.target.value)}}/>
              </div>
              <div className="col-4">
                <input type="text" className="form-control shadow-none" placeholder='Entrez ville' id="ville" value={ville} onChange={(e)=>{setville(e.target.value)}}/>
               </div> 
               <div >
                  <button className='btn btn-success btnn mt-3 ' onClick={ajouterContact}>Ajouter Contact</button>
              </div>
              <div >
          <span onClick={()=>setOrder(!order) }>  {order ? <button className='btn btn-success btnn mt-3 '>trie desc</button> : <button className='btn btn-success btnn mt-3'>trie asc</button>}</span>
        </div>
        <div>

        </div>
      </div>
          </form>
        </div>
        <div className="col-12 mx-auto mt-2 mb-5">
          <table className='table table-success  table-hover'>
            <thead>
              <tr>

                <th>Nom</th>
                <th>Tel</th>
                <th>Ville</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody >  

               {
                 
                order ? ListContact.sort((a, b) => (a.nom > b.nom ? 1 : -1)).map((e)=>{   
                  
                   <tr key={e.id}>                    
                   <td>{e.nom}</td>
                   <td>{e.tel}</td>
                   <td>{e.ville}</td> 
                   <td><button className='btn btn-danger btnS' onClick={()=>supprimerContact(e.id)}>Supprimer</button></td></tr>
               
            })   : ListContact.sort((a, b) => (a.nom < b.nom ? 1 : -1)).map((e)=>{                
               <tr key={e.id} >                    
               <td>{e.nom}</td>
               <td>{e.tel}</td>
               <td>{e.ville}</td> 
               <td><button className='btn btn-danger btnS' onClick={()=>supprimerContact(e.id)}>Supprimer</button></td></tr>
           
        }) 
  
               }

{
                ListContact.map((e)=>{

                return <tr key={e.id} >

                    <td>{e.nom}</td>
                    <td>{e.tel}</td>
                    <td>{e.ville}</td> 
                    <td><button className='btn btn-danger btnS' onClick={()=>supprimerContact(e.id)}>Supprimer</button></td>
                    </tr>
                   
                })



          }
             
            


            </tbody>
          </table>
        </div>

      </div>
    </div>
    </div>
  )
}
