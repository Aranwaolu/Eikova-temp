import ReactPaginate from 'react-paginate'
import '../../../style-config/pagination.css'

interface IPaginationProps {
	pageCount: number
	setPage: React.Dispatch<React.SetStateAction<number>>
}

const Pagination: React.FC<IPaginationProps> = ({ pageCount, setPage }) => {
	return (
		<>
			<ReactPaginate
				breakLabel='...'
				pageRangeDisplayed={5}
				renderOnZeroPageCount={() => null}
				previousLabel={'← Previous'}
				nextLabel={'Next →'}
				pageCount={pageCount}
				onPageChange={(event) => {
					setPage(event.selected + 1)
				}}
				containerClassName={'pagination'}
				previousLinkClassName={'pagination__link'}
				nextLinkClassName={'pagination__link'}
				disabledClassName={'pagination__link--disabled'}
				activeClassName={'pagination__link--active'}
			/>
		</>
	)
}

export default Pagination
