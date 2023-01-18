import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';
export default function Contact() {
    const [ListContact,setListContact]=useState([
        {id:uuid(),nom:'Hajar Boussetta',tel:'0634102345',ville:'Tanger'},
        {id:uuid(),nom:'Sofiane Boussetta',tel:'0737892034',ville:'Casablanc'},
        {id:uuid(),nom:'Malika Lirmaki',tel:'06783423009',ville:'Fas'},
        {id:uuid(),nom:'Hanae Allali',tel:'0673829063',ville:'Tetoune'}
    ])
    const [nom,setnom]=useState();
    const [tel,settel]=useState();
    const[ville,setville]=useState();
    const addContact=()=>{
        let newListContact=[...ListContact,{
            id:uuid(),
            nom:nom,
            tel:tel,
            ville:ville
            
        }];
       setnom(newListContact);
       settel(newListContact);
       setville(newListContact);
       setnom('');
       settel('');
       setville('');
    }
    console.log(addContact);

  return (
    <div>
      <h1>list contact en react </h1>
      <div className="container">
      <div className="row">
        <div className="col-9 mx-auto mt-5">
          <form>
            <div className="mb-5 row">
              <div className="col-3">
                <input type="text" className="form-control shadow-none" placeholder='Entrez le nom' id="nom" value={nom}  onChange={(e)=>setnom(e.target.value)}/>
              </div>
              <div class="col-3">
                <input type="text" className="form-control shadow-none" placeholder='Entrez le numero telephone' id="tel" value={tel}  onChange={(e)=>settel(e.target.value)}/>
              </div>
              <div className="col-3">
                <input type="text" className="form-control shadow-none" placeholder='Entrez ville' id="ville" value={ville} onChange={(e)=>{setville(e.target.value)}}/>
               </div> 
               <div >
                  <button className='btn btn-primary' onClick={addContact} >Ajouter Contact</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-12 mx-auto mt-2 mb-5">
          <table className='table'>
            <thead>
              <tr>
                <td>Nom</td>
                <td>Tel</td>
                <td>Ville</td>
              </tr>
            </thead>
            <tbody>
            
            {
                ListContact.map((e)=>{

                return <tr key={e.id}>
                    <td>{e.nom}</td>
                    <td>{e.tel}</td>
                    <td>{e.ville}</td> </tr>
  
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
