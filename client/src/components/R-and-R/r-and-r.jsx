import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import 'react-widgets/styles.css';
import DropdownList from 'react-widgets/DropdownList';
import ReviewsList from './components/reviews-list';

const Review = () => {
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(5);
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

  const compileRatings = () => {
    reviews.forEach((item) => {
      setRatings(...ratings, ratings[item] + 1);
      setTotalRatings(totalRatings + item);
    });
  };

  const getReviews = () => {
    const params = {
      page,
      count,
      sort,
      product_id: productId,
    };
    axios.get('http://localhost:3000/reviews', { params })
      .then(({ data }) => {
        console.log(mounted.current);
        // if (mounted.current) {
        console.log(reviews);
        setCount(data.response.count);
        setPage(data.response.page);
        setProductId(parseInt(data.response.product, 10));
        setReviews(data.response.results);
        compileRatings();
        console.log(reviews);

        //  }
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

  useEffect(() => {
    getReviews();
    getProduct();
    return () => { mounted.current = false; };
  }, [sort]);
  return (
    <div className="review">
      <p>RATINGS & REVIEWS</p>
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
          Sort on
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
  );
};

export default Review;
