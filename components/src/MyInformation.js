import './Myinfo.css';

function MyInformation(props)
{
   return(
       <div class="Myinfo">
           <ol>
               <li>Nmae:{props.name}</li>
               <li>Age:{props.age}</li>
               <li>Mobile_No:{props.mobile}</li>
           </ol>
       </div>
   );
}
export default MyInformation;