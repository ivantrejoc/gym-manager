import paginationStyles from "./pagination-styles.module.css";
import Image from "next/image";


const Pagination = () => {
  return (
    <div className={paginationStyles.container}>
        <div className={paginationStyles.selector}>
            <p className={paginationStyles.text}>Filas por pag:</p>
            <select name="page" id="page" className={paginationStyles.select}>
                <option value="1" className={paginationStyles.options}>1</option>
                <option value="2" className={paginationStyles.options}>2</option>
                <option value="3" className={paginationStyles.options}>3</option>
                <option value="4" className={paginationStyles.options}>4</option>
                <option value="5" className={paginationStyles.options}>5</option>
            </select>
        </div>
        <div className={paginationStyles.pageIndex}>
            <p className={paginationStyles.textIndex}>1-5 de 13</p>
        </div>
        <div className={paginationStyles.buttonsContainer}>
            <button type='button' className={paginationStyles.button}> <Image
            src="/left-arrow.svg"
            width={24}
            height={24}
            alt="arrow" /></button> 
             <button type='button' className={paginationStyles.button}> <Image
            src="/right-arrow.svg"
            width={24}
            height={24}
            alt="arrow" /></button>
        </div>
    </div>
  )
}
export default Pagination