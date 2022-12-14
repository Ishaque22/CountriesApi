import { useContext} from 'react'
import { DataContext } from "../DataContext";
import {Link} from 'react-router-dom';



interface DetailsProp{
  Name:string;
  Img:string;
  Native:string;
  Population:string;
  Region:string;
  SubRegion:string;
  Capital:string;
  TopLevel:[];
  Borders:[];
  Currency:{}[];
  Languages:{}[];
  Dark:boolean;

  
}


    

const Details = (props:DetailsProp) => {
  const data= useContext(DataContext)
 


 
  return (
    <div className="Details">
    <div className="backFlag">
        <img src={`${props.Img}`} alt="" />
    </div>
    <div className="sub-details">
      <div className="info">
      <h4 className="details-country-name"> {props.Name}</h4>
      <div className="leftDetails">
          
          <p><span className="details-text-bold">Native Name:</span> {props.Native}</p>
          <p><span className="details-text-bold">Population:</span> {props.Population}</p>
          <p><span className="details-text-bold">Region:</span> {props.Region}</p>
          <p><span className="details-text-bold">Sub Region:</span> {props.SubRegion}</p>
          <p><span className="details-text-bold">Capital:</span> {props.Capital || 'no capital found'}</p>
      </div>

        <div className="rightDetails">
          <p><span className="details-text-bold">Top Level Domain:</span> {props.TopLevel}</p>
        
          <p><span className="details-text-bold">Currencies:</span> {props.Currency?.map((item:any)=>{
            if(item===undefined || item.name===''){
              return '';
            }
            return item.name;
          })}</p>

          <p><span className="details-text-bold">Languages:</span> {props.Languages?.map((lan:any)=>{
            if(lan===undefined || lan.name===''){
             return '';
          } 
          return lan.name
          }).join(', ')}</p>
        </div>
        </div>

        <div className="border-countries">
            <h4 className="border-header">{props.Borders?'Border Countries:':'No Border Countries'}</h4>
            <div className="border-details">
              {props.Borders?.map(item=>{
                return  item
                }).map((border,index)=>{
                  return <p key={index} className={props.Dark? 'box active':'box'}>{data.map((item)=>{if(item.alpha3Code===border){
                    return  <Link to={`/alpha/${item.alpha3Code}`} className='link' style={props.Dark?{color:'#fff'}:{}}>{item.name}</Link>
                  }})}</p>
                })}
            </div>
        </div>
    </div>

    </div>
  )
}

export default Details
