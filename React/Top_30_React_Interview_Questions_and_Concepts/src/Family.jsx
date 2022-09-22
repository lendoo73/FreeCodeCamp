import React, {useState} from "react";

const Family = ({familyTree}) => {
    const [isVisible, setIsVisible] = useState(false);
    const expand = () => {
        console.log(isVisible, familyTree);
        if (familyTree.children) setIsVisible(!isVisible);
    };

    return (
        <div style={{paddingLeft: "10px"}}>
            <span onClick={expand}>{familyTree.name}</span>
            {isVisible 
                ? (familyTree ?.children ?.map((child, i) => {
                    return (
                        <div key={i} style={{paddingLeft: "10px"}}>
                            <Family familyTree={child} />
                        </div>
                    );
                }))
                : (<></>)
            }
        </div>
    );
};

export default Family;