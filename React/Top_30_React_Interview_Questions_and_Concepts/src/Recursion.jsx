import Family from "./Family";
import { familyTree } from "./data/familyTree";

const Recursion = () => {
    return (
        <div>
            <Family familyTree={familyTree} />
        </div>
    );
};

export default Recursion;