import Pagination from 'react-bootstrap/Pagination';

const MyPagination = () => {
let active = 2;
let items = [];
for (let number = 1; number <= 42; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}
}

// const paginationBasic = (
//   <div>
//     <Pagination>{items}</Pagination>
//     {/* <br />

//     <Pagination size="lg">{items}</Pagination>
//     <br />

//     <Pagination size="sm">{items}</Pagination> */}
//   </div>
// );

// //render(paginationBasic);
// }
export default MyPagination