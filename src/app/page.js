'use client';
import React, { useState } from 'react';
import {list} from "postcss";
const App = () => {
  const [userInput, setUserInput] = useState('');
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const updateInput = (value) => {
    setUserInput(value);
  }
}

const handleAction = () => {
  if (userInput.trim() === '')return;

  if (editIndex !== null) {
    const updatedList = list.map((item, index) =>
      index === editIndex ? { ...item, value: userInput} : item
    );
    setList(updatedList);
    setEditIndex(null);
  } else {
    const newItem = {
      id: Math.random(),
      value: userInput
    }
    setList([...list, newItem]);
  }
  setUserInput('')
}

const deleteItem = (id) => {
  const updatedList = list.filter((item) => item.id !== id);
  setList(updatedList);
}

export default function Home() {
  return (
    <div>

    </div>
  );
}
