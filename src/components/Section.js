import React,{useState,useId,startTransition} from 'react';

function Section({title,items}){
    const [isExpanded ,setIsExpanded]=useState(false);
    const id = useId();


    function toggleExpand(){
        startTransition(()=>
        {
            setIsExpanded(!isExpanded);
        });
    }

    return (
       <div className='section'>
         <h2 id={id} className='section-title' onClick={toggleExpand}>{title} {isExpanded? '-':'+'}</h2>
         {isExpanded && (
            <ul>
                {items.map((item,index)=>
                (
                    <li key={`${id}-${index}`} className="section-item">
                     {item}
                    </li>
                ))}
            </ul>
         )}

       </div>
    );

}

export default Section;