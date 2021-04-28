import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import 'react-widgets/styles.css';
import DropdownList from 'react-widgets/DropdownList';
import ReviewsList from './components/review-list/reviews-list';
import OverallRating from './components/breakdown/overall-rating';
import ReviewSpread from './components/breakdown/review-spread';

const Review = () => {
  const [count, setCount] = useState(5);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('relevant');
  const [productId, setProductId] = useState(16153);
  const [reviews, setReviews] = useState([]);
  const [product, setProduct] = useState('');
  const [ratings, setRatings] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });
  const [totalRatings, setTotalRatings] = useState(0);
  const mounted = useRef(true);

  const getReviews = () => {
    const params = {
      page,
      count,
      sort,
      product_id: productId,
    };
    axios.get('http://localhost:3000/reviews', { params })
      .then(({ data }) => {
        console.log(data);
        setCount(data.response.count);
        setPage(data.response.page);
        setProductId(parseInt(data.response.product, 10));
        setReviews(data.response.results);
      })
      .catch((err) => {
        if (mounted.current) {
          throw err;
        }
      });
  };

  const getProduct = () => {
    const params = {
      product_id: productId,
    };
    axios.get('http://localhost:3000/productById', { params })
      .then(({ data }) => {
        if (mounted.current) {
          setProduct(data.response.name);
        }
      })
      .catch((err) => {
        if (mounted.current) {
          throw err;
        }
      });
  };

  const validate = () => {
    if (reviews.length > 0) {
      return (
        <ReviewsList
          reviews={reviews}
          product={product}
          productId={productId}
        />
      );
    }
    return <></>;
  };

  const compileRatings = () => {
    const nextRatings = { ...ratings };
    let nextTotal = totalRatings;
    reviews.forEach((item) => {
      nextRatings[item.rating] += 1;
      nextTotal += item.rating;
    });
    setRatings(nextRatings);
    setTotalRatings(nextTotal);
  };

  useEffect(() => {
    getReviews();
    getProduct();
    return () => { mounted.current = false; };
  }, [sort]);

  useEffect(() => {
    if (reviews.length > 0) {
      compileRatings();
    }
  }, [reviews]);
  return (
    <div>
      <p>RATINGS & REVIEWS</p>
      <div className="d-inline-flex justify-content-end">
        <div style={{ marginLeft: '20px' }}>
          <div style={{ margin: '5px auto' }}>
            <OverallRating
              key={totalRatings}
              rating={Math.floor((totalRatings / reviews.length) * 4)}
            />
          </div>
          <div style={{ width: '350px' }}>
            <ReviewSpread
              ratingBreakdown={{
                5: 3.5,
                4: 2,
                3: 3,
                2: 5,
                1: 1,
              }}
              recommendation={95}
            />
          </div>
        </div>
        <div style={{
          marginLeft: '50px',
          width: '70%',
          marginTop: '20px',
        }}
        >
          <div
            id="review-sort"
            style={{
              display: 'flex',
            }}
          >
            <strong
              style={{
                marginTop: '5px',
                marginLeft: '5px',
              }}
            >
              {reviews.length}
              {' '}
              reviews, sorted by
            </strong>
            <div
              id="dropdown-list"
              style={{
                marginLeft: '5px',
                marginBottom: '10px',
              }}
            >
              <DropdownList
                defaultValue="Relevant"
                data={['Helpful', 'Newest', 'Relevant']}
                onChange={(val) => setSort(val.toLowerCase())}
              />
            </div>
          </div>
          <div id="reviews-list">
            {validate()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
