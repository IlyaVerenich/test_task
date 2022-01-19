import c from './Content.module.css'
import { Input  } from "antd"
import "antd/dist/antd.css";

function Content() {
    return(
        <div className={c.container}>
            <div className={c.info}>
                <p>Total drinks:</p>
                <p>Total ingridients:</p>
                <p>Total alcoholic coctails:</p>
                <p>Total non alcoholic coctails:</p>
            </div>
        </div>
    )
}

export default Content