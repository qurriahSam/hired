import Navbar from "../navbar";
import React from "react";
import { render} from '@testing-library/react';

test('renders without crashing', () => {
  const tree =render.create (<Navbar/>).toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
    
    
  });

