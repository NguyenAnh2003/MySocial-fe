import React from 'react';
import { useEffect } from 'react';
import { getCurrentUser } from '../libs/apis/auth.api';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getAllPostsByUserId } from '../libs';
import { useDispatch, useSelector } from 'react-redux';
import { saveCurrentUser } from '../redux';

/* Replace for search page */

const HomePage = () => {
  /** init */
  const navigate = useNavigate(); // navigate define
  const dispatch = useDispatch(); // dispatch state

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data, status } = await getCurrentUser();
        if (status === 200) {
          dispatch(saveCurrentUser(data));
        }
      } catch (error) {
        navigate('/signin');
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="container">
      <p className="text-3xl font-bold underline">Home page the main</p>
    </div>
  );
};

export default HomePage;
