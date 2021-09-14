import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Location from '../Components/Location';
import Message from '../Components/Message';
import Loader from '../Components/Loader';
import Paginate from '../Components/Paginate';
import { useDispatch, useSelector } from 'react-redux';
import { listLocations } from '../actions/locationActions';

// import Meta from '../components/Meta';

const LocationSelectScreen = ({ match }) => {
  //add match above when adding paginate({ match })
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const locationList = useSelector((state) => state.locationList);

  // const { loading, error, locations } = locationList;
  const { loading, error, locations, page, pages } = locationList;

  // useEffect(() => {
  //   dispatch(listLocations());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(listLocations(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      {/* <Meta /> */}
      <Link to='/' className='btn btn-light'>
        Home
      </Link>
      <h1>Destinations</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {locations.map((location) => (
              <Col key={location._id} sm={12} md={12} lg={6} xl={6}>
                <Location location={location} />
              </Col>
            ))}
          </Row>

          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  );
};

export default LocationSelectScreen;
// return (
//   <>
//     {/* <Meta />
//     {!keyword ? (
//       <ProductCarousel />
//     ) : (
//       <Link to='/' className='btn btn-light'>
//         Go back
//       </Link>
//     )} */}
//     <h1>destinations</h1>
//     {loading ? (
//       <Loader />
//     ) : error ? (
//       <Message variant='danger'>{error}</Message>
//     ) : (
//       <>
//         <Row>
//           {locations.map((location) => (
//             <Col key={location._id} sm={12} md={6} lg={4} xl={3}>
//               <Product location={location} />
//             </Col>
//           ))}
//         </Row>

//         <Paginate
//           pages={pages}
//           page={page}
//           keyword={keyword ? keyword : ''}
//         />
//       </>
//     )}
//   </>
// );
// <div>
