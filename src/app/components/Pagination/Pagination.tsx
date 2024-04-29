import { Client } from "@/app/api/services";
import paginationStyles from "./pagination-styles.module.css";
import Image from "next/image";

interface PaginationProps{
    pageSize: number,
    clients: Client[],
    currentPage: number,
    pagination: (pageNumber: number)=> void
}

const Pagination = ({pageSize, clients, currentPage, pagination}: PaginationProps) => {

    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(clients.length / pageSize); i++){
        pageNumbers.push(i);
    };

    const totalPages = pageNumbers.length;

  return (
    <tr className={paginationStyles.container}>   
        <td className={paginationStyles.pageIndex}>
            <p className={paginationStyles.textIndex}>{currentPage} de {totalPages}</p>
        </td>
        <td className={paginationStyles.buttonsContainer}>
            <button type='button' className={paginationStyles.button}
            onClick={() => pagination(currentPage - 1)}
            disabled={currentPage === 1}            
            > <Image
            src="/left-arrow.svg"
            width={24}
            height={24}
            alt="arrow"          
            
            /></button> 
             <button type='button' className={paginationStyles.button}
             onClick={() => pagination(currentPage + 1)}
             disabled={currentPage === pageNumbers.length}
             > <Image
            src="/right-arrow.svg"
            width={24}
            height={24}
            alt="arrow"
             /></button>
        </td>
    </tr>
  )
}
export default Pagination